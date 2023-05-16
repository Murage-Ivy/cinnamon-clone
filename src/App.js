import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className=" bg-hero-pattern bg-secondary text-h-[100vh] px-5">
  
      <main className="block">
      <div className="">
      <Header />
      <Hero />
      </div>
      </main>
    </div>
  );
}

export default App;
