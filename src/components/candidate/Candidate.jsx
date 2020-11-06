import React from 'react';
import PropTypes from 'prop-types';

export const Candidate = ({ name, party, birthYear, winning }) => (
  <li key={name}>
    <h1>{name}</h1>
    <p>Party: {party}</p>
    <p>Born In: {birthYear}</p>
    <p>Winning: {winning}</p>
  </li>
);

Candidate.propTypes = {
  name: PropTypes.string.isRequired,
  party: PropTypes.string.isRequired,
  birthYear: PropTypes.number.isRequired,
  winning: PropTypes.bool.isRequired
};
