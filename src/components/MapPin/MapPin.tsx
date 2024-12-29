import { KeepScale } from "react-zoom-pan-pinch";
import { IconContext } from "react-icons";
import { GiAirBalloon, GiCloakDagger, GiDiceTarget, GiDungeonGate, GiEyeTarget, GiFireplace } from "react-icons/gi";
import { typeToColor } from "../../utils/typeToColor";

export type IMapPin = {
  type: string;
  name: string;
  objective?: string;
  prose: string;
  link?: string;
  tags: string[];
  coordsX: number;
  coordsY: number;
};

type MapPinProps = {
  mapPin: IMapPin;
  openPin: (mapPin: IMapPin) => void;
};

export function MapPin({ mapPin, openPin }: MapPinProps) {
  function typeToIcon(type: string): JSX.Element {
    switch (type) {
      case "base":
        return <GiFireplace />;
      case "ship":
        return <GiAirBalloon />;
      case "target":
        return <GiEyeTarget />;
      case "dungeon":
        return <GiDungeonGate />;
      case "intrigue":
        return <GiCloakDagger />;
      default:
        return <GiDiceTarget />;
    }
  }

  return (
    <div className='absolute z-10' style={{ left: `${mapPin.coordsX}%`, bottom: `${mapPin.coordsY}%` }}>
      <KeepScale>
        <button
          title={mapPin.name}
          className={`flex items-center justify-center h-8 w-8 rounded-full bg-white`}
          onClick={() => openPin(mapPin)}
        >
          <IconContext.Provider value={{ size: "25", color: typeToColor(mapPin.type) }}>
            {typeToIcon(mapPin.type)}
          </IconContext.Provider>
        </button>
      </KeepScale>
    </div>
  );
}
