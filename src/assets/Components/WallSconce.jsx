import { useEffect, useState } from "react";
import "./WallSconce.css";
import Flame1 from "./WallSconceImages/WallSconce1.png";
import Flame2 from "./WallSconceImages/WallSconce2.png";
import Flame3 from "./WallSconceImages/WallSconce3.png";
import Flame4 from "./WallSconceImages/WallSconce4.png";

const flameFrames = [Flame1, Flame2, Flame3, Flame4];

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
          h-auto w-fit border-2 border-red-500 md:block"
    >
      <img
        src={flameFrames[currentFrame]}
        alt={`Flame frame ${currentFrame + 1}`}
        loading="lazy"
        className="flame "
      />
    </div>
  );
};

export default WallSconce;
