// eslint-disable-next-line no-unused-vars
import React from "react";

import WolfeWhistle from "./assets/wolf-whistle.wav";
import FrankenCasino from "./assets/4-300pxCasino44.jpg";
import FrankenBeach from "./assets/2-300pxFrankenBeach444.jpg";

import FrankenColumbus from "./assets/1-300px1FrankenColumbus44.jpg";
import FrankenCastle from "./assets/3-300pxFrankenCastle44.jpg";
import Top from "./assets/Choctaw300.jpg";
import "./Cube.css";
function WolfWhistle() {
  const Wolf = new Audio(WolfeWhistle);
  Wolf.play();
}

const Cube = () => {
  return (
    <div>
      <div className="container ">
        <br />

        <div className="m-0  px-4 py-3  sm:px-8  ">
          <a
            className="cubeLink"
            href="https://Mybabb.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={WolfWhistle}
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
                      src={FrankenBeach}
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
                      src={FrankenColumbus}
                      alt="Side2"
                      height="300"
                      width="300"
                    />
                  </span>
                  <span
                    className="Side3 border-b-2 border-[#2dd760]"
                    style={{ "--i": 3 }}
                  >
                    <img
                      src={FrankenCasino}
                      alt="Side3"
                      height="300"
                      width="300"
                    />
                  </span>
                  <span
                    className="side4 border-b-2 border-[#2dd760]"
                    style={{ "--i": 4 }}
                  >
                    <img
                      src={FrankenCastle}
                      alt="Side4"
                      height="300"
                      width="300"
                    />
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
