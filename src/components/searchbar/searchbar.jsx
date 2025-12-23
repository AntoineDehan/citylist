import { useState } from "react";
import { Search } from "lucide-react";

import "../../styles/searchbar/style.css";

function Searchbar({ setSearchInput }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!inputValue.trim()) return;
    setSearchInput(inputValue.toLowerCase());
  }

  return (
    <form className="searchbar-container" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        id="search"
        minLength={3}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Rechercher une adresse..."
      />
      <button type="submit" className="searchbar-search">
        <Search size={18} />
      </button>
    </form>
  );
}

export default Searchbar;
