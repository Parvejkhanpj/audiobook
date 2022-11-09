import React, { useContext } from "react";
import Card from "../components/Cards/Card";
import Header from "../components/Header/Header";
import HomeFooter from "../components/Homefooter/HomeFooter";
import Search from "../components/Searchbox/Search";
import { AudioConext } from "../store";
const Home = () => {
  const { data, filteredResults, searchInput } = useContext(AudioConext);
  return (
    <div>
      <Header />
      <Search />
      {searchInput.length > 0
        ? filteredResults.map((card) => {
            return <Card key={card.Boxid} card={card} />;
          })
        : data.map((card) => {
            return <Card key={card.Boxid} card={card} />;
          })}

      <HomeFooter />
    </div>
  );
};

export default Home;
