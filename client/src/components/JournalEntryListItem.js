import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setJournalDisplayData } from "../actions/journalDisplayActions";
import { setJournalDisplayStatus } from "../actions/journalDisplayStatusActions";

const axios = require("axios");

const JournalEntryListItem = (props) => {
  const journalEntryClickHandler = (e) => {
    const _header = e.target.getAttribute("header");
    let _journals;
    axios
      .get("/api/journals")
      .then((response) => {
        _journals = response.data;
      })
      .then(() => {
        for (let i = 0; i < _journals.length; i++) {
          if (_header === _journals[i].header) {
            props.setJournalDisplayData({
              header: _header,
              body: _journals[i].body,
            });
            props.setJournalDisplayStatus(true);
            break;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <li className="journal-entry-list-item">
      <div className="journal-entry-list-item-circle">
        <button
          header={props.header}
          onClick={journalEntryClickHandler}
          className="journal-entry-list-item-btn"
          style={{ backgroundColor: props.color }}
        />
      </div>
      <h3 className="journal-entry-list-item-header">{props.header}</h3>
    </li>
  );
};

JournalEntryListItem.propTypes = {
  setJournalDisplayData: PropTypes.func.isRequired,
  setJournalDisplayStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  journalDisplayData: state.journalDisplayData,
  journalDisplayStatus: state.journalDisplayStatus,
});

export default connect(mapStateToProps, {
  setJournalDisplayData,
  setJournalDisplayStatus,
})(JournalEntryListItem);
