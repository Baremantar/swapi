import React, { useState } from "react";

export default function Search({ result, setResult }) {
  const [name, setName] = useState("Luke");

  let n = localStorage.length;


  async function findByName(event) {
    event.preventDefault();
    const response = await fetch(
      `https://swapi.dev/api/people/?search=` + name
    );

    if (response.ok) {
      const json = await response.json();
      const res = json.results[0];
      if (res !== "" && res !== undefined) {
        setResult(res);
        localStorage.setItem(++n, JSON.stringify(res));
      } else {
        setResult("");
      }
    } else {
      console.log("Ошибка HTTP: " + response.status);
    }
  }
  return (
    <form onSubmit={(event) => findByName(event)}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
    </form>
  );
}
