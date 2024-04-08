// eslint-disable-next-line no-unused-vars
import React from "react";
import AquariumStand from "./AquariumStand.jsx";
import "./AquariumStand.css";
const Profile = () => {
  return (
    <div>
      <div className=" absolute bottom-[-2.3rem]  right-[-1.4rem] scale-[65%] hidden md:block">
        <a className="" href="https://Resume-Hub.mybabb.com">
          <div
            className="dataToolTip9"
            data-tool-tip="Go to https:// Resume' Hub"
          >
            <AquariumStand />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Profile;
