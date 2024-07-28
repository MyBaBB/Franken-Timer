/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import Sound from "../assets/MonsterMash.mp3";
import SpookySound from "../assets/SpookySound.mp3";
import { HiSpeakerWave } from "react-icons/hi2";
import { BiSolidVolumeMute } from "react-icons/bi";
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  function play() {
    if (!isPlaying) {
      audioRef.current = new Audio(Sound);
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

   

  function stop() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }

  return (
    <div className="audio">
      {isPlaying ? (
        <>
         
          <button onClick={stop}>
            
            <HiSpeakerWave size={40} color="white" />
          </button>
        </>
      ) : (
        <button onClick={play}>
          <BiSolidVolumeMute size={40} color="red" />
        </button>
      )}
    </div>
  );
}

export default App;