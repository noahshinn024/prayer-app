import React from "react";

// components
import TopLeftContainer from "./TopLeftContainer";
import TopRightContainer from "./TopRightContainer";
import BottomContainer from "./BottomContainer";

const RightContainer = (props) => {
  return (
    <div className="right-container half-screen-hide">
      <div className="row-sb">
        <TopLeftContainer />
        <TopRightContainer />
      </div>
      <BottomContainer />
    </div>
  );
};

export default RightContainer;
