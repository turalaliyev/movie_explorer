import React, { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { Movie } from "../types";
import MovieDetailsModal from "./MovieDetailsModal";
import SearchBar from "./SearchBar";
import { Card, Button } from "antd";

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
      <SearchBar onQueryChange={handleQueryChange} />

      {isLoading && <div>Loading...</div>}
      {isError && <div>Error loading movies</div>}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                />
              }
              onClick={() => handleOpenModal(movie)}
              className="mb-4"
            >
              <Card.Meta title={movie.title} />
            </Card>
          ))}
      </div>

      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          loading={isFetchingNextPage}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isFetchingNextPage ? "Loading more..." : "Load More"}
        </Button>
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
