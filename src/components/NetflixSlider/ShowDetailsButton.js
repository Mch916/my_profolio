import React from 'react';
import IconArrowDown from './../Icons/IconArrowDown'
import './ShowDetailsButton.scss'

const ShowDetailsButton = ({ onClick, title }) => (
  <button className="show-details-button">
    <span>
      {title}
    </span>
  </button>
);

export default ShowDetailsButton;
