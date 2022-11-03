import React from "react";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./containers/Contact";
import { Home } from "./containers/Home";
import { Knowledges } from "./containers/Knowledges";
import { NotFound } from "./containers/NotFound";
import { Portfolio } from "./containers/Portfolio";
import "./stylees.css";

import { NavBar } from "./containers/NavBar";

export const App = () => {
  return (
    <div className="main">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knowledges" element={<Knowledges />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
