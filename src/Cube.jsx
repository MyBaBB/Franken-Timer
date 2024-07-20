// eslint-disable-next-line no-unused-vars
import React from "react";


 
import TopLogo from "./assets/TopLogo.jpg";
 
import FrankenBride300 from "./assets/frankenBridewinking300.gif";
import FrankMiner300 from "./assets/frankMiner300.jpg";
import FrankPlumber from "./assets/FrankPlumber300.jpg";
import FrankSlave300 from "./assets/frankSlave300.jpg";
import "./Cube.css";




 

const Cube = () => {
  return (
    <div>
      <div className="container ">
        <br />

        <div className="m-0  px-4 py-3  sm:px-8  ">
          <a href="https://Mybabb.com">
            <div className="outerCubeDiv">
              <div className="cube">
                <div className="top">
                  <img
                    className="Top"
                    src={TopLogo}
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
                      src={FrankenBride300}
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
                      src={FrankMiner300}
                      alt="Side2"
                      height="300"
                      width="300"
                    />
                  </span>

                  <span
                    className="side3 border-b-2 border-[#2dd760]"
                    style={{ "--i": 3 }}
                  >
                    <img
                      src={ FrankPlumber}
                      alt="Side3"
                      height="300"
                      width="300"
                    />
                  </span>

                  <span
                    className="Side4 border-b-2 border-[#2dd760]"
                    style={{ "--i": 4 }}
                  >
                    <img
                      src={ FrankSlave300}
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
