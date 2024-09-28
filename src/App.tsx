// Breafly, I added Ant Design library for some components, added DebounceInput and using tailwind css for design.
// I decided to show movies in 4 columns, but on mobile it would be 1 column. You can check all design elements by yourself
// Modal is also responsive and show the main details of the movie

import React from "react";
import MoviesList from "./components/MoviesList";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <MoviesList />
    </div>
  );
};

export default App;
