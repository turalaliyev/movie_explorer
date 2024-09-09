import React from "react";
import MoviesList from "./components/MoviesList";

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Movie Explorer</h1>
      <MoviesList />
    </div>
  );
};

export default App;
