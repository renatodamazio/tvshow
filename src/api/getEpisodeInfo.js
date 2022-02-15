/* eslint-disable arrow-body-style */
const getEpisodes = async (id, date) => {
  const request = await fetch(
    `${process.env.REACT_APP_API}/shows/${id}/episodesbydate?date=${date}`,
  );
  const response = request.json();
  return response;
};

export default getEpisodes;
