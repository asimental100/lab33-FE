/* eslint-disable max-len */
export const postCandidate = async(name, party, birthYear, winning) => {
  const response = await fetch('https://floating-sea-86695.herokuapp.com/api/v1/candidates', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ name, party, birthYear, winning })
  });

  console.log(response);

  const json = await response.json();
  console.log(json);
  if(!response.ok) throw 'Bad Request';

  return json;
};
