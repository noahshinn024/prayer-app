import React from "react";

import X from "../media/x.svg";

const PublishConfirm = () => {
  const exitPublishConfirm = () => {
    console.log("pressed");
  };
  return (
    <div className="publish-confirm-blur">
      <div className="publish-confirm-container">
        <button
          onClick={exitPublishConfirm}
          className="exit-publish-confirm-btn exit-btn"
        >
          <img alt="x" src={X} className="x-icon-small" />
        </button>
        <div className="column-sb publish-confirm-content">
          <div className="publish-confirm-text-container">
            <h1 className="publish-confirm-text">
              Are you sure you want to publish?
            </h1>
          </div>
          <button className="publish-confirm-btn">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default PublishConfirm;
