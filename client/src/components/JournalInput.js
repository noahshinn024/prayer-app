import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchJournals } from "../actions/journalActions";
import moment from "moment";

import Arrow from "../media/arrow.svg";

const axios = require("axios");

const userEndAddress = require("../config/keys").userEndAddress;
const userSrtAddressPre = require("../config/keys").userSrtAddressPre;
const userSrtAddressEnd = require("../config/keys").userSrtAddressEnd;

const suggestHeader = () => {
  const now = moment();
  const hour = now.format("H");
  const date =
    hour < 5 ? now.subtract(1, "day").format("MMMM D") : now.format("MMMM D");
  const amPMSuffix = setAMPM(hour);
  return `${date} ${amPMSuffix}`;
};
const setAMPM = (hour) => {
  return hour > 4 && hour < 21 ? "AM" : "PM";
};

const JournalInput = (props) => {
  const [headerInputText, setHeaderInputText] = useState(suggestHeader());
  const [bodyInputText, setBodyInputText] = useState(props.journalInput);
  const [checkAddressStatus, setCheckAddressStatus] = useState(true);
  const headerInput = useRef();
  const bodyInput = useRef();
  useEffect(() => {
    bodyInput.current.value = localStorage.getItem("journal-body");
    bodyInputText !== "" && bodyInput.current.focus();
  }, [headerInputText]);
  const detectEnterKey = (e) => {
    if (e.keyCode === 0) bodyInput.current.focus();
    return;
  };
  const detectSubmitKey = (e) => {
    if (e.keyCode === 0 && e.target.value.endsWith(userEndAddress)) {
      submitBtnHandler();
    }
  };
  const headerInputTextHandler = (e) => setHeaderInputText(e.target.value);
  const bodyInputTextHandler = (e) => {
    const text = e.target.value;
    text === "" && setCheckAddressStatus(true);
    if (text.substring(0, 9) === userSrtAddressPre && checkAddressStatus) {
      e.target.value = userSrtAddressEnd;
      setCheckAddressStatus(false);
    }
    setBodyInputText(text);
    localStorage.setItem("journal-body", text);
  };
  const submitBtnHandler = () => {
    axios.post("/api/journals", {
      header: headerInputText,
      body: bodyInputText,
    });
    headerInput.current.value = "";
    bodyInput.current.value = "";
    localStorage.setItem("journal-body", "");
  };
  return (
    <div className="journal-input">
      <input
        placeholder="Journal Header"
        value={headerInputText}
        onChange={headerInputTextHandler}
        onKeyPress={detectEnterKey}
        ref={headerInput}
        className="header-input"
        autoFocus
      />
      <textarea
        placeholder="Start entry..."
        onChange={bodyInputTextHandler}
        onKeyPress={detectSubmitKey}
        ref={bodyInput}
        className="body-input"
      />
      <button onClick={submitBtnHandler} className="submit-btn">
        <img alt="arrow" src={Arrow} className="arrow-icon" />
      </button>
    </div>
  );
};

JournalInput.propTypes = {
  fetchJournals: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  journals: state.journals.items,
});

export default connect(mapStateToProps, { fetchJournals })(JournalInput);
