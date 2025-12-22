import List from "../../components/list/list.jsx";
import Searchbar from "../../components/searchbar/searchbar.jsx";
import { useState, useEffect } from "react";

function Home() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <div>
        <h1>Vous cherchez une adresse ?</h1>
        <Searchbar setSearchInput={setSearchInput} />
      </div>
      <div>
        <h2>Vos résultats :</h2>
        <List searchInput={searchInput} />
      </div>
    </>
  );
}

export default Home;
