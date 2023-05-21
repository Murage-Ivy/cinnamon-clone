import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/services/Services";
import CinnamonCollege from "./components/cinnamonCollege/CinnamonCollege";
import Offices from "./components/offices/Offices";
import TechTopics from "./components/techTopics/TechTopics";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className=" bg-white text-h-[100vh] ">
      <main className="block">
        <div className="">
          <Header />
          <Hero />
          <Services />
          <CinnamonCollege />
          <Offices />
          <TechTopics />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
