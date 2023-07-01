import React from "react";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Services from "./components/Services";
const Home = () => {
  return (
    <>
      <Hero text={"Welcome to Wooush Cart"} />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
