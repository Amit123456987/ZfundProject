import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import PersonalDetails from "./Components/PersonalDetails";
import Declaration from "./Components/Declaration";
import Home from "./Components/Home";
import Documents from "./Components/Documents";
import KYCDetails from "./Components/KYCDetails";
import Completed from "./Components/Completed";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/PersonalDetails" element={<PersonalDetails />} />

        <Route path="/Documents" element={<Documents />} />

        <Route path="/Declaration" element={<Declaration />} />

        <Route path="/KYCDetails" element={<KYCDetails />} />

        <Route path="/Completed" element={<Completed />} />
      </Routes>

    </>
  );
}

export default App;
