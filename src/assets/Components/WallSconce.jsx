import { useEffect, useState } from "react";
import "./WallSconce.css";
import Flame1 from "./Flame1.png";
import Flame2 from "./Flame2.png";
import Flame3 from "./Flame3.png";

const flameFrames = [Flame1, Flame2, Flame3];

const WallSconce = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % flameFrames.length);
    }, 2000); // Adjust timing for faster/slower flicker

    return () => clearInterval(flickerInterval);
  }, []);

  return (
    <div
      className="wall-sconce m-auto hidden
          h-fit w-fit border-2 border-red-500 md:block"
    >
      <img
        src={flameFrames[currentFrame]}
        alt={`Flame frame ${currentFrame + 1}`}
        className="flame"
      />
    </div>
  );
};

export default WallSconce;
