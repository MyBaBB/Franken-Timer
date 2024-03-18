// eslint-disable-next-line no-unused-vars
import React from "react";
import EasterDinner from "./assets/EasterDinner.jpg";
import EggBasket from "./assets/EggBasket.jpg";
import StoneMover4 from "./assets/Stone-Mover4.jpg";
import Jesus from "./assets/JesusRisen.jpg";
import Egg from "./assets/Frank-n-egg.jpg";
import "./Cube.css";
const Cube = () => {
  return (
    <div>
      <div className="container">
        <br />

        <div className="m-0  px-4 py-3  sm:px-8">
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
                    src={Egg}
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
                      src={StoneMover4}
                      alt="Side1"
                      height="300"
                      width="300"
                    />
                  </span>

                  <span
                    className="Side2 border-b-2 border-[#2dd760]"
                    style={{ "--i": 2 }}
                  >
                    <img src={Jesus} alt="Side2" height="300" width="300" />
                  </span>


                  <span
                    className="side3 border-b-2 border-[#2dd760]"
                    style={{ "--i": 3 }}
                  >
                    <img src={EggBasket} alt="Side3" height="300" width="300" />
                  </span>


                  <span
                    className="Side4 border-b-2 border-[#2dd760]"
                    style={{ "--i": 4 }}
                  >
                    <img
                      src={EasterDinner}
                      alt="Side4"
                      height="300"
                      width="300"
                    />
                  </span>
                </div>
              </div>
            </div>
          </a>

          <p className="fixed bottom-0 right-5 whitespace-nowrap">
            <span className="text-[8px] text-white sm:text-[10px] lg:text-sm">
              &lt;&lt;&lt;&copy;MyBaBB <em>8-2023</em>&gt;&gt;&gt;
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cube;
