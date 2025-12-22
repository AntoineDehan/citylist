import { useState } from "react";

function Searchbar({ searchInput, setSearchInput }) {
  function handleInput(event) {
    setSearchInput(event.target.value);
    console.log(searchInput);
  }

  return (
    <>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          value={searchInput}
          onChange={handleInput}
        />
      </div>
    </>
  );
}

export default Searchbar;
