/* eslint-disable arrow-body-style */
import axios from "axios";

const getEpisodes = async (id, date) => {
  const request = await axios(
    `${process.env.REACT_APP_API}/shows/${id}/episodesbydate?date=${date}`,
  ).then((response) => response);
  return request.data;
};

export default getEpisodes;
