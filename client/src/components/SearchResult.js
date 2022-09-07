import React from "react";

const SearchResult = (props) => {
  return (
    <div className="search-result center">
      <div style={{ width: 554 }} className="row-sb">
        <div
          style={{ backgroundColor: props.color }}
          className="search-result-icon"
        />
        <div
          style={{ width: 512, height: 28, alignItems: "flex-start" }}
          className="column-sb"
        >
          <div className="search-result-header">{props.header}</div>
          <div style={{ width: 96 }} className="row-sb">
            <div className="search-result-date">{props.date}</div>
            <div className="search-result-time">{props.time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
