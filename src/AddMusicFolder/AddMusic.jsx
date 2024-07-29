/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import Sound from "../assets/MonsterMash.mp3";
import SpookySound from "../assets/SpookySound.mp3";
import { FaPlus, FaMinus } from "react-icons/fa";
import { BiSolidVolumeMute } from "react-icons/bi";
import { HiPauseCircle } from "react-icons/hi2";
import { HiPlayCircle } from "react-icons/hi2";
import { VscDebugRestart } from "react-icons/vsc";
import "./AddMusic.css";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  function play() {
    if (!isPlaying) {
      audioRef.current = new Audio(Sound);
      audioRef.current.play();

      audioRef.current.addEventListener("ended", () => {
        const spookyAudio = new Audio(SpookySound);
        spookyAudio.play();
      });

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
  function increaseVolume() {
    if (audioRef.current) {
      const newVolume = Math.min(volume + 0.1, 1);
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  }

  function decreaseVolume() {
    if (audioRef.current) {
      const newVolume = Math.max(volume - 0.1, 0);
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  }

  return (
    <div className=" relative mt-[3rem] flex w-fit justify-center">
      <button
        onClick={increaseVolume}
        className="volumeUp mr-[1rem] text-yellow-100  "
      >
        <FaPlus size={30} />
      </button>
      <div className="audio speaker flex w-fit ">
        {isPlaying ? (
          <>
            <button onClick={stop}>
              <VscDebugRestart size={30} color="#fef9c3 " />
            </button>
          </>
        ) : (
          <button onClick={play}>
            <BiSolidVolumeMute size={30} color="#fef9c3 " />
          </button>
        )}
      </div>
      <div className="pauseButton  flex w-fit">
        <button onClick={pause}>
          {isPlaying ? (
            <HiPauseCircle size={30} color="#fef9c3 " />
          ) : (
            <HiPlayCircle size={30} color="#fef9c3 " />
          )}
        </button>
      </div>

      <button
        onClick={decreaseVolume}
        className="volumeDown ml-[1rem] text-yellow-100 "
      >
        <FaMinus size={30} />
      </button>
    </div>
  );
}

export default App;
