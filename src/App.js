import "./App.css";
import Home from "./pages/Home";
import Player from "./pages/player";
import DATA from "./api/data";
import { AudioConext } from "./store";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    setData(DATA);
  }, [data]);

  // filter function
  function searchItem(searchValue) {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filterdata = data.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      console.log(filterdata);
      setFilteredResults(filterdata);
    } else {
      setFilteredResults(data);
    }
  }

  //  Goto Music

  return (
    <div className="App">
      <Router>
        <AudioConext.Provider
          value={{
            data,
            searchItem,
            filteredResults,
            searchInput,
          }}
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/player" element={<Player />} />
          </Routes>
        </AudioConext.Provider>
      </Router>
    </div>
  );
}

export default App;
