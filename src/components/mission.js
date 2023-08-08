import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMission } from '../redux/mission/missionslice';
  return (
    <div className="mission-container">
      <div className="mission-name">
        <h2>{mission.mission_name}</h2>
      </div>
      <div className="mission-info">
        <p className="miss-desc">{mission.description}</p>
      </div>
      <div className="mission-buttons">
        <button type="submit" className="join-button" onClick={handleJoinMission}>
          Join Mission
        </button>
      </div>
    </div>
  );
};
