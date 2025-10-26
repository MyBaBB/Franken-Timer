import { useEffect, useState } from "react";
import "./WallSconce.css";
import Flame1 from "./WallSconceImages/WallSconce1.png";
import Flame2 from "./WallSconceImages/WallSconce2.png";
import Flame3 from "./WallSconceImages/WallSconce3.png";
import Flame4 from "./WallSconceImages/WallSconce4.png";
import WolfWhistle from "/PutCandleBack.mp3";
// import FlameStone2 from "./WallSconceImages/Flame-Stone-4.jpg";
// import FlameStone3 from "./WallSconceImages/Flame-Stone-3.jpg";
// import FlameStone4 from "./WallSconceImages/Flame-Stone-2.jpg";
// import FlameStone5 from "./WallSconceImages/Flame-Stone-1.jpg";
// import FlameStone6 from "./WallSconceImages/Flame-Stone-3.jpg";
//
function PlayWolfWhistle() {
  const DrumSolo = new Audio(WolfWhistle);
  DrumSolo.play();
}
const flameFrames = [Flame1, Flame2, Flame3, Flame4];

const LeftWallSconce = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % flameFrames.length);
    }, 250); // Adjust timing for faster/slower flicker

    return () => clearInterval(flickerInterval);
  }, []);

  return (
                  //  adj the wall sconce bg lights here
    <div        
      className=" wall-sconce  m-auto   
                  h-auto w-fit z-1  "
    >
       
      <a
            href="https://Mybabb.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={PlayWolfWhistle}
            className="  topParagraphWrapper   
              font-Kingthings_Petrock z-1"
          >
      <img
        src={flameFrames[currentFrame]}
        alt={`Flame frame ${currentFrame + 1}`}
        loading="lazy"
        className="flame scale-[200%] z-1 "
         
      />
</a>
    </div>
  );
};

export default LeftWallSconce;
