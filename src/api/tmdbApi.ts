// Here I take the data from the TMBD and according to the used filter, it chooses needed url.

import axios from "axios";
import { MovieApiResponse } from "../types";

export const fetchMovies = async (
  page: number,
  query: string,
  isKeywordSearch: boolean
): Promise<MovieApiResponse> => {
  const apiKey = "425d463e458deb5b343b5ecb80e2f7ba";
  const bearerToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjVkNDYzZTQ1OGRlYjViMzQzYjVlY2I4MGUyZjdiYSIsIm5iZiI6MTcyNTgwMzQwNC4xODQxNTksInN1YiI6IjY2ZGMzOGEwMDRmNjJhMGU2NDQ5NzQ5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sPKeldt5xQ93dOtZE9eDZu8sJO1xknemFX6SN_d0ohM";

  let url = "";

  if (isKeywordSearch) {
    url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
  } else {
    url = `https://api.themoviedb.org/3/movie/${query}?api_key=${apiKey}&page=${page}`;
  }

  try {
    const response = await axios.get<MovieApiResponse>(url, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch movies: ${error.message}`);
  }
};
