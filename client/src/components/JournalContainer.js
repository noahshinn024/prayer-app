import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import JournalInput from "./JournalInput";
import JournalDisplay from "./JournalDisplay";

const JournalContainer = (props) => {
  return !props.journalDisplayStatus ? (
    <JournalInput journalBody={localStorage.getItem("journal-body")} />
  ) : (
    <JournalDisplay />
  );
};

JournalContainer.propTypes = {
  journalDisplayStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  journalDisplayStatus: state.journalDisplayStatus,
});

export default connect(mapStateToProps)(JournalContainer);
