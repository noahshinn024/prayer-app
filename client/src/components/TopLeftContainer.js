import React, { useState, useRef } from "react";
import SearchSVG from "../media/search.svg";
import DropdownCaratSVG from "../media/dropdown_carat.svg";
import SearchResult from "./SearchResult";
import moment from "moment";

const axios = require("axios");

const colorArr = ["#535C6A", "#8C97A7", "#33414F", "#5C7380", "#65686D"];

const TopLeftContainer = () => {
  const [headerSearchResults, setHeaderSearchResults] = useState([]);
  const searchBarText = useRef();

  const searchBarInputHandler = () => {
    const text = searchBarText.current.innerText;
    if (text === "") {
      setHeaderSearchResults([]);
    } else {
      searchHeaders(text);
    }
  };

  const searchHeaders = (searchStr) => {
    let results = [];
    axios.get("/api/journals").then((response) => {
      const data = response.data;
      for (let i = 0; i < data.length; i++) {
        const header = data[i].header;
        if (
          header
            .toLowerCase()
            .replace(" ", "")
            .includes(searchStr.toLowerCase())
        ) {
          const published = moment(data[i].date);
          const date = published.format("MMMM D");
          const time = published.format("h:ss A");
          results.push({
            header: header,
            date: date,
            time: time,
          });
        }
      }
      setHeaderSearchResults(results.reverse());
    });
  };
  // const searchBar = () => {
  //   const search = "Ashley";
  //   const searchLen = search.length;
  //   let results = [];
  //   const previewLen = 30;
  //   axios
  //     .get("/api/journals")
  //     .then((response) => {
  //       const data = response.data;
  //       for (let i = 0; i < data.length; i++) {
  //         const header = data[i].header;
  //         const body = data[i].body.replaceAll("\n\n", " ");
  //         const indexes = [...body.matchAll(new RegExp(search, "gi"))].map(
  //           (a) => {
  //             let previewStart = "";
  //             let previewEnd = "";
  //             if (a.index < previewLen) {
  //               previewStart = `...${body.substring(0, a.index)}`;
  //               previewEnd = `${body.substring(
  //                 a.index + searchLen + 1,
  //                 a.index + searchLen + 1 + previewLen
  //               )}...`;
  //             } else if (a.index > body.length - previewLen) {
  //               previewStart = `...${body.substring(
  //                 a.index - previewLen,
  //                 a.index
  //               )}`;
  //               previewEnd = `${body.substring(a.index + searchLen + 1)}...`;
  //             } else {
  //               previewStart = `...${body.substring(
  //                 a.index - previewLen,
  //                 a.index
  //               )}`;
  //               previewEnd = `${body.substring(
  //                 a.index + searchLen + 1,
  //                 a.index + searchLen + 1 + previewLen
  //               )}...`;
  //             }
  //             const result = {
  //               header: header,
  //               previewStart: previewStart,
  //               previewEnd: previewEnd,
  //               keyword: a[0],
  //             };
  //             results.push(result);
  //           }
  //         );
  //       }
  //       console.log(results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="top-left-container center">
      <div className="search-container column-sb">
        <div className="search-header-container row-sb">
          <div className="search-bar">
            <img alt="search svg" src={SearchSVG} className="search-icon" />
            <div
              style={{ width: 310 }}
              contentEditable="true"
              onInput={searchBarInputHandler}
              ref={searchBarText}
              className="search-bar-text"
            ></div>
          </div>
          <div className="search-content-select center">
            <div style={{ width: 67 }} className="row-sb">
              <p className="search-content-select-text">header</p>
              <img
                alt="dropdown carat svg"
                src={DropdownCaratSVG}
                className="search-dropdown-icon"
              />
            </div>
          </div>
          <button
            onClick={() => searchHeaders(searchBarText.current.innerText)}
            className="search-btn"
          >
            Search
          </button>
        </div>
        <div className="search-result-container">
          {headerSearchResults.map((result, index) => (
            <SearchResult
              key={index}
              color={colorArr[index % 5]}
              header={result.header}
              date={result.date}
              time={result.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopLeftContainer;
