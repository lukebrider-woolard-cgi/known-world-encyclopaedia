import { IconContext } from "react-icons";
import { GiHandBandage } from "react-icons/gi";

type LoadingSpinnerProps = {
  loading: boolean;
}

// Based off react-spinners circle-loader
export function LoadingSpinner({ loading }: LoadingSpinnerProps) {
  const createAnimation = (): string => {
    const animationName = "chromatic";

    if (typeof window == "undefined" || !window.document) {
      return animationName;
    }

    const styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    const styleSheet = styleEl.sheet;

    const keyFrames = `
      @keyframes ${animationName} {
        0% {transform: rotate(0deg)} 0% {color: #9ceb34} 20% {color: #eb3483} 40% {color: #a534eb} 50% {transform: rotate(180deg)} 60% {color: #ebb734} 80% {color: #34eb8f} 100% {transform: rotate(360deg)} 100% {color: #9ceb34}
      }
    `;

    if (styleSheet) {
      styleSheet.insertRule(keyFrames, 0);
    }

    return animationName;
  };

  const wrapper: React.CSSProperties = {
    display: "inherit",
    position: "relative",
    width: "50px",
    height: "50px",
    transform: "rotate(-120deg)"
  };

  const style = (i: number): React.CSSProperties => {
    return {
      position: "absolute",
      height: `${50 * (1 - i / 10)}px`,
      width: `${50 * (1 - i / 10)}px`,
      borderTop: `1px solid`,
      borderBottom: "none",
      borderLeft: `1px solid`,
      borderRight: "none",
      borderRadius: "100%",
      transition: "2s",
      top: `${i * 0.7 * 2.5}%`,
      left: `${i * 0.35 * 2.5}%`,
      animation: `${createAnimation()} 1s ${(i * 0.2) / 1}s infinite linear`,
    };
  };

  if (!loading) {
    return null;
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <span style={wrapper}>
          <span style={style(0)} />
          <span style={style(1)} />
          <span style={style(2)} />
          <span style={style(3)} />
          <span style={style(4)} />
        </span>
        <IconContext.Provider value={{ size: "40", className: "-mt-4" }}>
          <GiHandBandage />
        </IconContext.Provider>
        <p className="font-serif mt-0">...Summoning Article...</p>
      </div >
    </div>
  )
}
