import React from "react";
import PropTypes from "prop-types";
import JournalEntryListItem from "./JournalEntryListItem";
import { connect } from "react-redux";
import { fetchJournals } from "../actions/journalActions";

const colorArr = ["#535C6A", "#8C97A7", "#33414F", "#5C7380", "#65686D"];

const JournalEntriesList = (props) => {
  return (
    <div className="journal-entries-list-container">
      <ul className="journal-entries-list">
        {props.journals.map((item, index) => (
          <JournalEntryListItem
            key={item.id}
            header={item.header}
            color={colorArr[index % 5]}
          />
        ))}
      </ul>
    </div>
  );
};

JournalEntriesList.propTypes = {
  fetchJournals: PropTypes.func.isRequired,
  journals: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  journals: state.journals.items,
});

export default connect(mapStateToProps, {
  fetchJournals,
})(JournalEntriesList);
