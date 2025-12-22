import Searchbar from "../../components/searchbar/searchbar.jsx";
import { useState } from "react";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div>
        <h1>Vous cherchez une adresse ?</h1>
        <Searchbar searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
    </>
  );
}

export default Home;
