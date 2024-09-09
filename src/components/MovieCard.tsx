import React from "react";

interface MovieCardProps {
  movie: any;
  onClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <div
      className="border rounded-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-2">
        <h2 className="text-lg font-bold">{movie.title}</h2>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
