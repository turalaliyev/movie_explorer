import { Button, Carousel, Skeleton } from "antd";
import { Movie } from "../types";
import { StarFilled } from "@ant-design/icons";
import { useMovies } from "../hooks/useMovies";

interface MovieCarouselType {
  handleOpenModal: (movie: Movie) => void;
}

const MovieCarousel = ({ handleOpenModal }: MovieCarouselType) => {
  const { data, isLoading, isError } = useMovies("now_playing", "");

  const popularMovies = data?.pages[0]?.results.slice(0, 10) || [];

  return (
    <div>
      {isLoading && (
        <div>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </div>
      )}
      {isError && <div>Error loading movies</div>}
      <Carousel autoplay arrows autoplaySpeed={5000}>
        {popularMovies.map((movie: Movie) => (
          <div
            key={movie.id}
            className="relative w-full h-[400px] md:h-[450px] bg-gray-800"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between">
              <div className="text-white px-4 md:px-10 py-6">
                <h2 className="text-2xl md:text-5xl mb-2 text-left">
                  {movie.title}
                </h2>
                <p className="text-sm md:text-2xl text-left md:w-[70%] md:mt-12">
                  {movie.overview.length > 150
                    ? `${movie.overview.substring(0, 150)}...`
                    : movie.overview}
                </p>
              </div>

              <div className="flex justify-between items-center px-4 md:px-10 py-6">
                <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                  <span className="text-lg font-semibold text-white">
                    {new Date(movie.release_date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center justify-center text-white">
                    <StarFilled className="text-yellow-400" />
                    <span className="ml-1 font-semibold text-lg">
                      {movie.vote_average}
                    </span>
                  </span>
                </div>
                <Button
                  type="primary"
                  className="ml-auto bg-red-600"
                  onClick={() => handleOpenModal(movie)}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
