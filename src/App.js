import React from "react";
import { Main } from "./Pages/Main";
import { Contact } from "./Pages/Contact";
import { Info } from "./Pages/Info";
import { Login } from "./Pages/Login";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router";
export function App() {
  return (
    <div className="Container">
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Info" element={<Info />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
