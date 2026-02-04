import { useEffect, useState, useCallback } from "react";
import type { SubmitEvent } from "react";
import { Search } from "lucide-react";

import "../../styles/searchbar/style.css";
import { useDebounce } from "../../hooks/useDebounce";

interface SearchProps {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

function Searchbar({ setSearchInput }: SearchProps) {
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 2000);

  useEffect(() => {
    if (inputValue.length >= 3) {
      setSearchInput(debouncedInputValue);
    }
  }, [debouncedInputValue]);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
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
