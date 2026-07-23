import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Accordion from "./Component/Accordian/Accordian";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Accordion />
      <Footer />
    </div>
  );
};

export default App;
