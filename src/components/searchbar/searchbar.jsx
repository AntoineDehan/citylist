import { useState } from "react";
import "../../styles/searchbar/style.css";

function Searchbar({ setSearchInput }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!inputValue.trim()) return;
    setSearchInput(inputValue);
    console.log("Recherche lancée :", inputValue);
  }

  return (
    <form className="searchbar-container" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        id="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Rechercher une adresse..."
      />
      <button type="submit" className="searchbar-search">
        O
      </button>
    </form>
  );
}

export default Searchbar;
