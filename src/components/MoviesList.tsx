import React, { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { Movie } from "../types";
import MovieDetailsModal from "./MovieDetailsModal";
import SearchBar from "./SearchBar";
import { Card, Button, Skeleton } from "antd";
import MovieCarousel from "./MovieCarousel";

const MoviesList: React.FC = () => {
  const [query, setQuery] = useState<string>("popular");
  const [keyword, setKeyword] = useState<string>("");

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useMovies(query, keyword);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleQueryChange = (newQuery: string, newKeyword: string) => {
    setQuery(newQuery);
    setKeyword(newKeyword);
  };

  return (
    <div>
      <div>
        <MovieCarousel handleOpenModal={handleOpenModal} />
      </div>
      <SearchBar onQueryChange={handleQueryChange} />

      {isLoading && (
        <div>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </div>
      )}

      {isError && <div>Error loading movies</div>}

      <div className="grid mt-4 grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {data?.pages
          .flatMap((page) => page.results)
          .map((movie: Movie) => (
            <Card
              key={movie.id}
              hoverable
              cover={
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="h-[450px] w-full object-cover"
                />
              }
              onClick={() => handleOpenModal(movie)}
              className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 border-2 border-red-800 text-white"
            >
              <Card.Meta
                title={<span className="text-white">{movie.title}</span>}
              />
            </Card>
          ))}
      </div>

      {hasNextPage && (
        <div className="w-full flex justify-center mb-3">
          <Button
            onClick={() => fetchNextPage()}
            loading={isFetchingNextPage}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
          >
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </Button>
        </div>
      )}
      <MovieDetailsModal
        visible={isModalVisible}
        movie={selectedMovie}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default MoviesList;
