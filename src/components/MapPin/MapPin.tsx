import { KeepScale } from "react-zoom-pan-pinch";
import { IconContext } from "react-icons"
import { GiAirBalloon, GiCloakDagger, GiDiceTarget, GiDungeonGate, GiEyeTarget, GiFireplace } from "react-icons/gi"

export type MapPinProps = {
  type: string;
  name: string;
  link: string;
  prose: string;
  coordsX: number;
  coordsY: number;
};

export function MapPin(props: MapPinProps) {
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

  function typeToColor(type: string): string {
    switch (type) {
      case "base":
        return "#bd0b5e";
      case "ship":
        return "#5817a3";
      case "target":
        return "#5c0b06";
      case "dungeon":
        return "#212920";
      case "intrigue":
        return "#322436";
      default:
        return "#000000";
    }
  }

  return (
    <div className="absolute z-10" style={{ "left": `${props.coordsX}%`, "bottom": `${props.coordsY}%` }}>
      <KeepScale>
        <button title={props.name} className={`flex items-center justify-center h-8 w-8 rounded-full bg-white`}>
          <IconContext.Provider value={{ size: "25", color: typeToColor(props.type) }}>{typeToIcon(props.type)}</IconContext.Provider>
        </button>
      </KeepScale>
    </div>
  )
}