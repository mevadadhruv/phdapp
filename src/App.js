import React from "react";
import { Center } from "./components/Center";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
export function App() {
  return (
    <div className="Container">
      <Header />
      <Center />
      <Footer />
    </div>
  );
}
