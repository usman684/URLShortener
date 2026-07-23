import React from "react";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Hero from "./Component/Hero/Hero.jsx";
import Accordion from "./Component/Accordion/Accordion.jsx";
import Footer from "./Component/Footer/Footer.jsx";

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
