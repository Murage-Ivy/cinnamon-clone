import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/services/Services";
import CinnamonCollege from "./components/cinnamonCollege/CinnamonCollege";

function App() {
  return (
    <div className=" bg-hero-pattern bg-secondary text-h-[100vh]">
      <main className="block">
        <div className="">
          <Header />
          <Hero />
          <Services />
          <CinnamonCollege/>
        </div>
      </main>
    </div>
  );
}

export default App;
