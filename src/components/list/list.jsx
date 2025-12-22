import { useEffect, useState } from "react";

function List({ searchInput }) {
  const [adresses, setAdresses] = useState([]);

  //Appel API après l'input
  useEffect(() => {
    if (searchInput === "") return;
    const init = async () => {
      try {
        const res = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${searchInput}`
        );
        if (res.ok) {
          const data = await res.json();
          setAdresses(data);
          console.log("done", data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [searchInput]);

  return (
    <>
      {/* {adresses.map((adresse) => {
        <div>
          <h2>test card</h2>
        </div>;
      })} */}
    </>
  );
}

export default List;
