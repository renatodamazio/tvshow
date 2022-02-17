/* eslint-disable arrow-body-style */
import axios from "axios";

const Search = async (query) => {
  const q = query.replace(/ {1}/gi, "+");

  const load = await axios.get(`${process.env.REACT_APP_API}/search/shows?q=${q}`);
  const response = await load.data;

  return response;
};

export default Search;
