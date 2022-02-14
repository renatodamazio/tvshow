/* eslint-disable arrow-body-style */
const getEpisodes = async (id) => {
  const request = await fetch(`${process.env.REACT_APP_API}/shows/${id}/episodes`);
  const response = request.json();
  return response;
};

export default getEpisodes;
