import { useEffect, useState } from 'react';
import { postCandidate } from '../services/fetch';

export const useCandidate = () => {
  const [candidate, setCandidate] = useState([]);

  useEffect(() => {
    postCandidate()
      .then(candidate => setCandidate(candidate));
  }, []);

  return {
    candidate
  };
};
