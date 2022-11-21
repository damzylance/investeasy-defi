import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "../Pages/Borrow/Create";
import Borrow from "../Pages/Borrow";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/borrow" element={<Borrow />} />
        <Route exact path="/borrow/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
