import React from "react";
import NavDots from "../NavDots/NavDots";
import SocialMedia from "../Social/SocialMedia";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div>
        <div className="flex justify-between" id={idName}>
          <NavDots active={idName} />
          {/* <div> */}
          <Component />
          {/* </div> */}
          <SocialMedia />
        </div>
      </div>
    );
  };

export default AppWrap;
