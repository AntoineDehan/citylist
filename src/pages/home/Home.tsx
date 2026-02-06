import List from "../../components/AdressResults/list.js";
import Searchbar from "../../components/searchbar/searchbar.js";
import { useState } from "react";

import "../../styles.css";

function Home() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="home-container flex w-full flex-col items-center">
      <div className="home-top mb-10 flex flex-col items-center">
        <h1 className="mt-4 text-5xl font-bold">Vous cherchez une adresse ?</h1>
        <h2 className="mb-5 text-lg">
          Saisissez votre adresse, une voie, un lieu-dit ou une commune
        </h2>
        <Searchbar setSearchInput={setSearchInput} />
      </div>
      <div className="list-container flex w-[50%] flex-col items-center">
        {searchInput.length === 0 ? (
          <></>
        ) : (
          <h2 className="mb-5 text-2xl font-bold">Vos résultats</h2>
        )}
        <List searchInput={searchInput} />
      </div>
    </div>
  );
}

export default Home;
