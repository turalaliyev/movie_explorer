import React from "react";
import { Flex, Modal } from "antd";
import { Movie } from "../types";

interface MovieDetailsModalProps {
  visible: boolean;
  movie: Movie | null;
  onClose: () => void;
}

const MovieDetailsModal: React.FC<MovieDetailsModalProps> = ({
  visible,
  movie,
  onClose,
}) => {
  if (!movie) return null;

  return (
    <Modal
      title={movie.title}
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <Flex gap={10} className="md:flex-row flex-col">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-96 object-cover"
        />
        <div>
          <p className="mt-2">{movie.overview}</p>
          <p className="mt-2">Release Date: {movie.release_date}</p>
          <p className="mt-2">Rating: {movie.vote_average}</p>
        </div>
      </Flex>
    </Modal>
  );
};

export default MovieDetailsModal;
