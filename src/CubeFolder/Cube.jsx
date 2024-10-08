// eslint-disable-next-line no-unused-vars
import React from "react";

import DyingCow from "../assets/whipSmack.mp3";
import One from "../assets/1-300-unfinished.jpg"; 
import Two from "../assets/2-300-unfinished.jpg"; 
import Three from "../assets/3-300-unfinished.jpg"; 
import Four from "../assets/4-300-unfinished.jpg"; 
 
 
import Top from "../assets/PumpkinTop.jpg";
 
import "./Cube.css";
function PoorCow() {
  const Wolf = new Audio(DyingCow);
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
            onClick={PoorCow}
          >
            <div className="outerCubeDiv">
              <div className="cube">
                <div className="top">
                  <img
                    className="Top"
                    src={Top}
                    alt="Top"
                    height="300"
                    width="300"
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
                      height="300"
                      width="300"
                    />
                  </span>

                  <span
                    className="Side2 border-b-2 border-[#2dd760]"
                    style={{ "--i": 2 }}
                  >
                    <img
                      src={Two}
                      alt="Side2"
                      height="300"
                      width="300"
                    />
                  </span>
 <span
                    className="Side4 border-b-2 border-[#2dd760]"
                    style={{ "--i": 4 }}
                  >
                    <img
                      src={Three}
                      alt="Side4"
                      height="300"
                      width="300"
                    />
                  </span>
                  <span
                    className="side3 border-b-2 border-[#2dd760]"
                    style={{ "--i": 3 }}
                  >
                    <img src={Four} alt="Side3" height="300" width="300" />
                  </span>

                 
                </div>
              </div>
            </div>
          </a>

          <p className="fixed bottom-0 right-5 whitespace-nowrap text-[#abdbee]">
            <span className="text-[8px] text-[#abdbee]  sm:text-[10px] lg:text-sm">
              &lt;&lt;&lt;&copy;<span className="text-orange-400">MyBaBB</span>{" "}
              <em>8-2023</em>&gt;&gt;&gt;
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cube;
