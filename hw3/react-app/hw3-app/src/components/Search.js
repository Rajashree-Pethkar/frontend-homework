import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchCharacter() {
  const [searchCharacter, setSearchCharacter] = useState("");
  const [results, setResults] = useState([]);
  const [characters, setCharacters] = useState([]);

  const url = "https://thronesapi.com/api/v2/Characters";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (event) => {
    setSearchCharacter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let searchedCharacters = [];
    characters.forEach((element) => {
      if (
        searchCharacter !== "" &&
        element.fullName.toLowerCase().includes(searchCharacter.toLowerCase())
      ) {
        searchedCharacters.push(element);
      }
    });
    setResults(searchedCharacters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mx-auto mt-3 mb-3 w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Search character"
          value={searchCharacter}
          onChange={handleInputChange}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </div>
      </div>
      <div>
        {results.map((character) => (
          <div key={character.id} className="mt-5 mx-auto w-25 h-25">
            <p>{character.fullName}</p>
            <img src={character.imageUrl} alt={character.fullName} className="w-100 h-100"/>
          </div>
        ))}
      </div>
    </form>
  );
}

export default SearchCharacter;
