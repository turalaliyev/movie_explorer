import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieApiResponse } from "../types";
import { fetchMovies } from "../api/tmdbApi";

export const useMovies = (searchQuery: string, keyword: string) => {
  const isKeywordSearch = keyword.length > 0;

  return useInfiniteQuery<MovieApiResponse, Error>({
    queryKey: ["movies", searchQuery, keyword],
    queryFn: async ({ pageParam = 1 }) => {
      return fetchMovies(
        Number(pageParam),
        isKeywordSearch ? keyword : searchQuery,
        isKeywordSearch
      );
    },
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
    staleTime: 1000 * 60 * 10,
    initialPageParam: 1,
  });
};
