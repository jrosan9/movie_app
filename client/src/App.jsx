import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/pages/nav";
import Homepage from "./components/pages/homepage";
import MoviesPage from "./components/pages/moviePage";
import SingleMoviePage from "./components/pages/singleMoviePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:id" element={<SingleMoviePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
