import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { IconContext } from "react-icons";
import { MdOutlineZoomIn, MdOutlineZoomOut } from "react-icons/md";
import MapPin, { type IMapPin } from "../../components/MapPin";
import MapPinModal from "../../components/MapPinModal";
import { Maps } from "../../utils/constants";

type MapKeys = keyof typeof Maps;

export function MapsPage() {
  const navigate = useNavigate();
  const [visibleMap, setVisibleMap] = useState<Maps>(Maps.Provincial);
  const [mapPins, setMapPins] = useState<IMapPin[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalState, setModalState] = useState<IMapPin | null>(null);

  useEffect(() => {
    fetch("/known-world-encyclopaedia/map-pins.json")
      .then((res) => res.text())
      .then((text) => {
        const jsonResponse = JSON.parse(text);
        setMapPins(jsonResponse.pins);
      });
  }, []);

  function isMapVisible(map: Maps): boolean {
    return visibleMap === map;
  }

  function displayMapSelectButtons(): JSX.Element[] {
    const mapKeys: MapKeys[] = Object.keys(Maps) as MapKeys[];

    return mapKeys.map((mapKey, index) => {
      return (
        <button
          key={`${mapKey}-button`}
          className={`p-2 bg-gray-600 ${index === 0 ? "rounded-l-xl" : ""} ${
            index === mapKeys.length - 1 ? "rounded-r-xl" : ""
          } hover:brightness-150 ${isMapVisible(Maps[mapKey]) ? "brightness-200" : ""}`}
          onClick={() => setVisibleMap(Maps[mapKey])}
        >
          {mapKey}
        </button>
      );
    });
  }

  function displayMapPins(): JSX.Element[] {
    return mapPins.map((mapPin) => {
      return <MapPin key={mapPin.name} mapPin={mapPin} openPin={openMapPinModal} />;
    });
  }

  function closeModal(): void {
    setModalState(null);
    setModalOpen(false);
  }

  function openMapPinModal(mapPin: IMapPin): void {
    setModalOpen(true);
    setModalState(mapPin);
  }

  function displayModalContent(): JSX.Element {
    if (modalState !== null) {
      return (
        <div className='flex flex-col gap-2 prose-base text-black whitespace-pre-wrap'>
          <h3 className='text-center'>{modalState.name}</h3>
          <p>{modalState.prose}</p>
          {modalState.link ? (
            <button onClick={() => navigate(`/known-world-encyclopaedia${modalState.link}`)}>More Info</button>
          ) : (
            <></>
          )}
        </div>
      );
    } else {
      return <p>no map pin info set</p>;
    }
  }

  return (
    <>
      <div className='flex flex-col items-center gap-4 mt-14 md:mt-3'>
        <div>{displayMapSelectButtons()}</div>
        <div className='relative max-h-90 aspect-map'>
          <TransformWrapper>
            <Controls />
            <TransformComponent>
              <img src={visibleMap} alt='world-map' />
              {displayMapPins()}
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
      <MapPinModal open={modalOpen} onClose={closeModal}>
        {displayModalContent()}
      </MapPinModal>
    </>
  );
}

function Controls() {
  const { zoomIn, zoomOut } = useControls();

  return (
    <div className='absolute top-1 right-1 z-20'>
      <button title='zoom in' onClick={() => zoomIn()}>
        <IconContext.Provider value={{ size: "30" }}>
          <MdOutlineZoomIn />
        </IconContext.Provider>
      </button>
      <button title='zoom out' onClick={() => zoomOut()}>
        <IconContext.Provider value={{ size: "30" }}>
          <MdOutlineZoomOut />
        </IconContext.Provider>
      </button>
    </div>
  );
}
