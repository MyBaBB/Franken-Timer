import { useEffect, useState } from "react";
import "./WallSconce.css";
import Flame1 from "./WallSconceImages/WallSconce1.png";
import Flame2 from "./WallSconceImages/WallSconce2.png";
import Flame3 from "./WallSconceImages/WallSconce3.png";
import Flame4 from "./WallSconceImages/WallSconce4.png";

// import FlameStone2 from "./WallSconceImages/Flame-Stone-4.jpg";
// import FlameStone3 from "./WallSconceImages/Flame-Stone-3.jpg";
// import FlameStone4 from "./WallSconceImages/Flame-Stone-2.jpg";
// import FlameStone5 from "./WallSconceImages/Flame-Stone-1.jpg";
// import FlameStone6 from "./WallSconceImages/Flame-Stone-3.jpg";
//

const flameFrames = [Flame1, Flame2, Flame3, Flame4];

const MiddleWallSconce = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % flameFrames.length);
    }, 250); // Adjust timing for faster/slower flicker

    return () => clearInterval(flickerInterval);
  }, []);

  return (
    <div
      className="wall-sconce  m-auto   
          h-auto w-fit   "
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

export default MiddleWallSconce;
