/* eslint-disable max-len */
import React, { useState } from 'react';
import { postCandidate } from '../../services/fetch';

export const CandidateForm = () => {
  const [name, setName] = useState('');
  const [party, setParty] = useState('');
  const [birthYear, setBirthYear] = useState(1);
  const [winning, setWinning] = useState('false');

  const handleSubmit = (event) => {
    event.preventDefault();
    postCandidate(name, party, birthYear, winning);
  };
  
  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handlePartyChange = ({ target }) => {
    setParty(target.value);
  };

  const handleBirthYearChange = ({ target }) => {
    setBirthYear(target.value);
  };

  const handleWinningChange = ({ target }) => {
    setWinning(target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name={name} onChange={handleNameChange} />
        <input type="text" placeholder="Party" name={party} onChange={handlePartyChange} />
        <input type="text" placeholder="BirthYear" name={birthYear} onChange={handleBirthYearChange} />
        <input type="text" placeholder="Winning" name={winning} onChange={handleWinningChange} />
        <button>Create Candidate!</button>
      </form>
    </div>
  );
};
