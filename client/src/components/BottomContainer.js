import React from "react";
import JournalEntriesList from "./JournalEntriesList";

const BottomContainer = () => {
  return (
    <div className="bottom-container">
      <JournalEntriesList />
      <div className="rounded-bottom-bar" />
    </div>
  );
};

export default BottomContainer;
