import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchJournals } from "../actions/journalActions";

import MultiTap from "./MultiTap";

import profilePicture from "../media/profile_pic.jpg";
import locationIcon from "../media/location.svg";

const axios = require("axios");
const googleApiKey = require("../config/keys").googleApiKey;

const TopRightContainer = (props) => {
  useEffect(() => {
    props.fetchJournals();
    getUserLocation();
    axios
      .get("/api/streak")
      .then((response) =>
        setStreak(response.data[response.data.length - 1].value)
      );
  }, []);
  const [userLocation, setUserLocation] = useState("");
  const [streak, setStreak] = useState(0);
  const getUserLocation = () => {
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`
        )
        .then((response) => {
          //const _locationObj = response.data.results[10].address_components;
          //const _cityName = _locationObj[0].long_name;
          //const _stateName = _locationObj[2].short_name;
          //setUserLocation(`${_cityName}, ${_stateName}`);
          const _address =
            response.data.results[response.data.results.length - 4]
              .formatted_address;
          setUserLocation(`${_address}`);
        })
        .catch(() => setUserLocation("Location Not Found"));
    };
    const error = () => setUserLocation("Location Error");
    navigator.geolocation.getCurrentPosition(success, error);
  };

  const streakUpdate = (method) => {
    let currentStreak = streak;
    let updatedStreak;
    switch (method) {
      case "decrement":
        updatedStreak = --currentStreak;
        break;
      case "increment":
        updatedStreak = ++currentStreak;
        break;
    }
    axios
      .put("/api/streak", { body: updatedStreak })
      .then(() => setStreak(updatedStreak));
  };

  return (
    <div className="top-right-container column-sb">
      <div className="profile-container column-sb">
        <img src={profilePicture} alt="profile-img" className="profile-img" />
        <div className="profile-text-container column-sb">
          <h3 className="profile-name">Noah Shinn</h3>
          {userLocation === "" ? (
            <p className="location-text">Retrieving location...</p>
          ) : (
            <div className="profile-location-container">
              <img
                src={locationIcon}
                alt="location-icon"
                className="location-icon"
              />
              <p className="location-text">{userLocation}</p>
            </div>
          )}
        </div>
        <div className="profile-streak-container row-sb">
          <div className="column-sb profile-streak">
            <MultiTap
              onTripleTap={() => streakUpdate("decrement")}
              onDoubleTap={() => streakUpdate("increment")}
              delay={450}
            >
              <div className="streak-number current-streak">{streak}</div>
            </MultiTap>
            <h6 className="streak-title current-streak">Current Streak</h6>
          </div>
          <div className="column-sb profile-streak">
            <h1 className="streak-number total-entries">
              {props.journals.length}
            </h1>
            <h6 className="streak-title total-entries">Total Entries</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

TopRightContainer.propTypes = {
  fetchJournals: PropTypes.func.isRequired,
  journals: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({ journals: state.journals.items });

export default connect(mapStateToProps, {
  fetchJournals,
})(TopRightContainer);
