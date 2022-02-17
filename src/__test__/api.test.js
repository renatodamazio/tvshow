/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
import getEpisodes from "../api/getEpisodes";
import search from "../api/search";
import getEpisodeInfo from "../api/getEpisodeInfo";

test("Get episodes should return an array", async () => {
  const response = await getEpisodes("6771");
  const total = response.length;

  expect(total).toBeGreaterThan(0);
});

test("Search by query should return an array", async () => {
  const response = await search("the powerpuff girls");
  const total = response.length;

  expect(total).toBeGreaterThan(0);
});

// To test this, pass an ID of Episode and date.
test("Episode info should return an array", async () => {
  const response = await getEpisodeInfo("6771", "2016-04-04");
  const total = response.length;

  expect(total).toBeGreaterThan(0);
});
