/* eslint-disable arrow-body-style */
import axios from "axios";

const getEpisodes = async (id) => {
  const request = await axios.get(`${process.env.REACT_APP_API}/shows/${id}/episodes`);
  const response = request.data;
  return response;
};

export default getEpisodes;
