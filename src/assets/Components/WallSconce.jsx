import { useEffect, useState } from "react";
import "./WallSconce.css";
// import Flame1 from "./WallSconceImages/WallSconce1.png";
// import Flame2 from "./WallSconceImages/WallSconce2.png";
// import Flame3 from "./WallSconceImages/WallSconce3.png";
// import Flame4 from "./WallSconceImages/WallSconce4.png";

import FlameStone1 from "./WallSconceImages/Flame-Stone-5.jpg";
import FlameStone2 from "./WallSconceImages/Flame-Stone-4.jpg";
import FlameStone3 from "./WallSconceImages/Flame-Stone-3.jpg";
import FlameStone4 from "./WallSconceImages/Flame-Stone-2.jpg";
import FlameStone5 from "./WallSconceImages/Flame-Stone-1.jpg";













const flameFrames = [FlameStone1, FlameStone2, FlameStone3, FlameStone4, FlameStone5];

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
