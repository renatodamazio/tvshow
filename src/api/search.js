/* eslint-disable arrow-body-style */
const Search = async (query) => {
  const q = query.replace(/ {1}/gi, "+");

  const load = await fetch(`${process.env.REACT_APP_API}/search/shows?q=${q}`);
  const response = await load.json();

  return response;
};

export default Search;
