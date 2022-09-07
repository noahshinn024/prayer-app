import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setJournalDisplayStatus } from "../actions/journalDisplayStatusActions";

import X from "../media/x.svg";

const JournalDisplay = (props) => {
  const exitJournalDisplayHandler = () => {
    props.setJournalDisplayStatus(false);
  };
  return (
    <div className="journal-display">
      <button
        onClick={exitJournalDisplayHandler}
        className="exit-journal-display-btn exit-btn"
      >
        <img alt="x" src={X} className="x-icon-big" />
      </button>
      <div className="journal-display-header-container">
        <h1 className="journal-display-header">
          {props.journalDisplayData.header}
        </h1>
      </div>
      <div className="journal-display-body-container">
        <p className="journal-display-body">{props.journalDisplayData.body}</p>
      </div>
    </div>
  );
};

JournalDisplay.propTypes = {
  journalDisplayData: PropTypes.object.isRequired,
  journalDisplayStatus: PropTypes.bool.isRequired,
  setJournalDisplayStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  journalDisplayData: state.journalDisplayData,
  journalDisplayStatus: state.journalDisplayStatus,
});

export default connect(mapStateToProps, { setJournalDisplayStatus })(
  JournalDisplay
);
