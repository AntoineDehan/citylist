import List from "../../components/list/list.jsx";
import Searchbar from "../../components/searchbar/searchbar.jsx";
import { useState, useEffect } from "react";

import "../../styles/home/style.css";

function Home() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="home-container">
      <div>
        <h1>Vous cherchez une adresse ?</h1>
        <Searchbar setSearchInput={setSearchInput} />
      </div>
      <div className="list-container">
        {searchInput.length === 0 ? <></> : <h2>Vos résultats</h2>}

        <List searchInput={searchInput} />
      </div>
    </div>
  );
}

export default Home;
