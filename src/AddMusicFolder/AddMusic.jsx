/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import Sound from "../assets/MonsterMash.mp3";
import SpookySound from "../assets/SpookySound.mp3";

import { BiSolidVolumeMute } from "react-icons/bi";
import { HiPauseCircle } from "react-icons/hi2";
import { HiPlayCircle } from "react-icons/hi2";
import { VscDebugRestart } from "react-icons/vsc";

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

  function pause() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
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
    <div className=" relative flex w-fit justify-center">
      <div className="audio speaker flex w-fit ">
        {isPlaying ? (
          <>
            <button onClick={stop} >
              <VscDebugRestart size={40} color="aliceblue"  />
            </button>
          </>
        ) : (
          <button onClick={play}>
            <BiSolidVolumeMute size={40} color="aliceblue" />
          </button>
        )}
      </div>
      <div className="pauseButton  flex w-fit ">
        <button onClick={pause}>
          {isPlaying ? (
            <HiPauseCircle size={40} color="aliceblue" />
          ) : (
            <HiPlayCircle size={40} color="aliceblue" />
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
