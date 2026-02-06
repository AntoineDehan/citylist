import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import type { SubmitEvent } from "react";
import { SearchIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

interface SearchProps {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

function Searchbar({ setSearchInput }: SearchProps) {
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 1000);

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
    <form
      className="searchbar-container mt-3 flex h-11 w-full justify-center gap-5"
      onSubmit={handleSubmit}
    >
      <InputGroup className="min-w-2xl h-full border-2">
        <InputGroupInput
          type="text"
          name="search"
          id="search"
          minLength={3}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Rechercher une adresse..."
          className="text-2xl!"
        />
        <InputGroupAddon>
          <SearchIcon size={40} />
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}

export default Searchbar;
