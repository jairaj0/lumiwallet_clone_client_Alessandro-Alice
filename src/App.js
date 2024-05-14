import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Import from "./pages/import";
import Activity from "./pages/Activity";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/import" element={<Import />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
