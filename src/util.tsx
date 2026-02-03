let timeOutId: number;

export function searchTimeout(
  setSearchInput: React.Dispatch<React.SetStateAction<string>>,
  inputValue: string,
) {
  timeOutId = setTimeout(() => {
    setSearchInput(inputValue.toLocaleLowerCase());
  }, 2000);
  return () => clearTimeout(timeOutId);
}
