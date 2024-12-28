import { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { Maps } from "../../utils/constants";
import { MdOutlineZoomInMap, MdOutlineZoomOutMap } from "react-icons/md";
import MapPin, { type MapPinProps } from "../../components/MapPin";
import { IconContext } from "react-icons";

type MapKeys = keyof typeof Maps;

export function MapsPage() {
  const [visibleMap, setVisibleMap] = useState<Maps>(Maps.Provincial);
  const [mapPins, setMapPins] = useState<MapPinProps[]>([]);

  useEffect(() => {
    fetch("/known-world-encyclopaedia/map-pins.json")
      .then((res) => res.text())
      .then((text) => {
        const jsonResponse = JSON.parse(text);
        setMapPins(jsonResponse.pins)
      })
  }, [])

  function isMapVisible(map: Maps): boolean {
    return visibleMap === map
  }

  function displayMapSelectButtons(): JSX.Element[] {
    const mapKeys: MapKeys[] = Object.keys(Maps) as MapKeys[];

    return mapKeys.map((mapKey, index) => {
      return (
        <button
          key={`${mapKey}-button`}
          className={`p-2 bg-gray-600 ${index === 0 ? 'rounded-l-xl' : ''} ${index === (mapKeys.length - 1) ? 'rounded-r-xl' : ''} hover:brightness-150 ${isMapVisible(Maps[mapKey]) ? 'brightness-200' : ''}`}
          onClick={() => setVisibleMap(Maps[mapKey])}
        >
          {mapKey}
        </button>
      )
    })
  }

  function displayMapPins(): JSX.Element[] {
    return mapPins.map(mapPin => {
      return (<MapPin key={mapPin.name} {...mapPin} />)
    })
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-14 md:mt-3">
      <div>{displayMapSelectButtons()}</div>
      <div className="relative max-h-90 aspect-map">
        <TransformWrapper>
          <Controls />
          <TransformComponent>
            <img src={visibleMap} alt="world-map" />
            {displayMapPins()}
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  )
}

function Controls() {
  const { zoomIn, zoomOut } = useControls();

  return (
    <div className="absolute top-1 right-1 z-20">
      <button title="zoom in" onClick={() => zoomIn()}>
        <IconContext.Provider value={{ size: "25" }}>
          <MdOutlineZoomInMap />
        </IconContext.Provider>
      </button>
      <button title="zoom out" onClick={() => zoomOut()}>
        <IconContext.Provider value={{ size: "25" }}>
          <MdOutlineZoomOutMap />
        </IconContext.Provider>
      </button>
    </div>
  )
}
