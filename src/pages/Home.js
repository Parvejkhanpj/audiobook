import React from "react";
import Card from "../components/Cards/Card";
import Header from "../components/Header/Header";
import HomeFooter from "../components/Homefooter/HomeFooter";
import Search from "../components/Searchbox/Search";

const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <HomeFooter />
    </div>
  );
};

export default Home;
