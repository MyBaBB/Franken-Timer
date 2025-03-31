// eslint-disable-next-line no-unused-vars
import React from "react";

import WolfWhistle from "../assets/wolf-whistle.wav";

import One from "../assets/01Frank300.jpg"; 
import Two from "../assets/22Jesus300px.mp4"; 
import Three from "../assets/03Frank300.jpg"; 
import Four from "../assets/44Jesus300px.mp4"; 
import Top from "../assets/05TopFrank300.jpg";

 
 
 
import "./Cube.css";
function WolfWhistleFunction() {
  const Wolf = new Audio(WolfWhistle);
  Wolf.play();
}

const Cube = () => {
  return (
    <div>
      <div className="container ">
        <br />

        <div className="m-0  px-4 py-3  sm:px-8  ">
          <a className="cubeLink"
            href="https://Mybabb.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={WolfWhistleFunction}
            title="Click to go to Mybabb.com"
            aria-label="Click to go to Mybabb.com"
          >
            <div className="outerCubeDiv">
              <div className="cube">
                <div className="top">
                  <img
                    className="Top"
                    src={Top}
                    alt="Top"
                    height={300}
                    width={300}
                    aria-label="Top of Cube is a Turkey Leg image"
                  />
                </div>
                <div className="boxSides">
                  <span
                    className="Side1 border-b-2 border-[#2dd760]"
                    style={{ "--i": 1 }}
                  >
                    <img
                      src={One}
                      alt="Side1"
                      height={300}
                    width={300}
                      aria-label="Side 1 of the Cube is a Frankensteins Monster image"
                    />
                  </span>

                  <span
                    className="Side2 border-b-2 border-[#2dd760]"
                    style={{ "--i": 2 }}
                  >
                    <video
                      src={Two}
                      alt="Side2"
                      height={300}
                      width={300}
                      autoPlay={true}
                      loop={true}
                      muted={true}
                       aria-label="Side 2 of the Cube is a Frankensteins Monster image"
                    />
                  </span>

                  <span
                    className="side3 border-b-2 border-[#2dd760]"
                    style={{ "--i": 3 }}
                  >
                    <img src={Three}
                     alt="Side3"
                     height={300}
                    width={300}
                      aria-label="Side 3 of the Cube is a Frankensteins Monster image"/>
                  </span>
 <span
                    className="Side4 border-b-2 border-[#2dd760] "
                    style={{ "--i": 4 }}
                  >
                    <video
                      src={Four}
                      alt="Side4"
                      height={300}
                      width={300}
                      autoPlay={true}
                      loop={true}
                      muted={true}
                      aria-label="Side 4 of the Cube is a Frankensteins Monster video"
                    />
                    
                  </span>
                 

                 
                </div>
              </div>
            </div>
          </a>

          <p className="fixed bottom-0 z-50 right-5 whitespace-nowrap text-[#abdbee]">
            <span className="text-[8px] text-[#abdbee]  sm:text-[10px] lg:text-sm">
              &lt;&lt;&lt;&copy;<span className="text-orange-400">Brett&apos;s</span>{" "}
              <em>8-2023</em>&gt;&gt;&gt;
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cube;
