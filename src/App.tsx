// Breafly, I added Ant Design library for some components, added DebounceInput and using tailwind css for design.
// I decided to show movies in 4 columns, but on mobile it would be 1 column. You can check all design elements by yourself
// Modal is also responsive and show the main details of the movie

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
