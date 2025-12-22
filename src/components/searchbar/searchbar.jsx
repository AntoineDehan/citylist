import { useState } from "react";

function Searchbar({ setSearchInput }) {
  const [inputValue, setInputValue] = useState("");

  function handleSearch() {
    if (inputValue === "") return;
    setSearchInput(inputValue);
    console.log("click input");
  }

  return (
    <>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSearch}>Recherche</button>
      </div>
    </>
  );
}

export default Searchbar;
