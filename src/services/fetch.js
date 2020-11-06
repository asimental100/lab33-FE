/* eslint-disable max-len */
export const postCandidate = async(candidate) => {
  const response = await fetch('https://floating-sea-86695.herokuapp.com/api/v1/candidates', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(candidate)
  });

  const json = await response.json();
  if(!response.ok) throw 'Bad Request';

  return json;
};
