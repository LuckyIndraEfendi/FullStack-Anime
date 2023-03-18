import axios from "axios";
export const getRecentRelease = async () => {
  const url = await axios.get(`${process.env.REACT_APP_BASEURL}/anime/gogoanime/recent-episodes?type=1`);
  return url.data;
};
export const getRecentReleaseContent = async () => {
  const url = await axios.get(`${process.env.REACT_APP_BASEURL}/anime/gogoanime/recent-episodes?type=1`);
  return url;
};

export const Trending = async () => {
  const url = await axios.get(`${process.env.REACT_APP_BASEURL}/anime/gogoanime/top-airing`);
  return url.data;
};

export const PopularAnimeh = async () => {
  const url = await axios.get(`https://gogoanime.consumet.stream/popular`);
  return url.data;
};

export const MovieAnimeh = async () => {
  const url = await axios.get(`https://gogoanime.consumet.stream/anime-movies`);
  return url.data;
};

// export const getEpisode = async () => {
//   const url = await axios.get(`${process.env.REACT_APP_BASEURL}/watch/spy-x-family-episode-1`);
//   return url.headers;
// };
