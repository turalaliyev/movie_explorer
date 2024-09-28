import React from "react";
import { Modal } from "antd";
import { Movie } from "../types";
import Title from "antd/es/typography/Title";
import { StarFilled } from "@ant-design/icons";

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
    <Modal visible={visible} onCancel={onClose} footer={null} width={600}>
      <div className="flex flex-col md:flex-row md:gap-4">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-96 object-cover md:w-3/5 mb-4 md:mb-0 rounded-2xl"
        />

        <div className="flex flex-col flex-grow">
          <Title level={3}>{movie.title}</Title>
          <p className="mt-2">{movie.overview}</p>

          <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-200">
            <span className="text-lg font-semibold">
              {new Date(movie.release_date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
            <span className="text-lg font-semibold flex items-center">
              <StarFilled className="text-yellow-400 mr-2" />
              <span className="text-yellow-500">{movie.vote_average}</span>
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MovieDetailsModal;
