// eslint-disable-next-line no-unused-vars
import React from "react";
import CornedBeef from "./assets/Frank-n-Beef.webp";
import Shake from "./assets/Frank-n-Shake.webp";
import Goldfish from "./assets/Goldfish-Trade.webp";
import Leprechaun from "./assets/Leprechaun-in-tree.webp";
import Shamrock from "./assets/Shamrock-top.webp";
import "./Cube.css";
const Cube = () => {
  return (
    <div>
      <div className="container">
        <br />

        <div className="m-0 px-4 py-3 text-white hover:bg-sky-800    sm:px-8"></div>

        <a href="https://Mybabb.com">
          <div className="topParagraphWrapper">
            <p className="topParagraph  whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              St. Patrick&apos;s Day ☘️
            </p>
          </div>
        </a>

        <a href="https://Mybabb.com">
          <div className="outerDemoWrapper">
            <div className="demoWrapper">
              <p
                id="demo"
                className="text-lg sm:text-lg md:text-2xl lg:text-4xl"
              ></p>
            </div>
          </div>
        </a>

        <a href="https://Mybabb.com">
          <div className="outerCubeDiv">
            <div className="cube">
              <div className="top">
                <img
                  className="Top"
                  src={Shamrock}
                  alt="Top"
                  height="300"
                  width="300"
                />
              </div>
              <div className="boxSides">
                <span
                  className="side1 border-b-2 border-[#2dd760]"
                  style={{ "--i": 1 }}
                >
                  <img src={Shake} alt="Side1" height="300" width="300" />
                </span>

                <span
                  className="Side2 border-b-2 border-[#2dd760]"
                  style={{ "--i": 2 }}
                >
                  <img src={Leprechaun} alt="Side2" height="300" width="300" />
                </span>

                <span
                  className="Side3 border-b-2 border-[#2dd760]"
                  style={{ "--i": 3 }}
                >
                  <img src={Goldfish} alt="Side3" height="300" width="300" />
                </span>

                <span
                  className="Side4 border-b-2 border-[#2dd760]"
                  style={{ "--i": 4 }}
                >
                  <img src={CornedBeef} alt="Side4" height="300" width="300" />
                </span>
              </div>
            </div>
          </div>
        </a>

        <p className="fixed bottom-0 right-5 whitespace-nowrap">
          <span className="text-[8px] text-white sm:text-[10px] lg:text-sm">
            &lt;&lt;&lt;&copy;MyBaBB <em>8-2013</em>&gt;&gt;&gt;
          </span>
        </p>
      </div>
    </div>
  );
};

export default Cube;
