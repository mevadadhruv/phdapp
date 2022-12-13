import React from "react";
import { Main } from "./components/Main";
import { Contact } from "./components/Contact";
import { Info } from "./components/Info";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router";
export function App() {
  return (
    <div className="Container">
      <Header />
      <Routes>
        <Route path="/Home" element={<Main />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Info" element={<Info />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
