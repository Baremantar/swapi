import React, {useState} from 'react'

export default function Search({result, setResult, setError}) {

    const [name, setName] = useState('Luke');

    let n= toString(localStorage.lenght)

    async function findByName(event){
        event.preventDefault()
        const response = await fetch(`https://swapi.dev/api/people/?search=` + name );
        if (response.ok) {
          setError('')
          const json = await response.json();
          const res = json.results[0];
          if (res !== ''){
            setResult(res)
            localStorage.setItem(++n, res)
            // console.log(localStorage);
          } else {
            setResult('')
          }

          
          
        } else {
          console.log("Ошибка HTTP: " + response.status);
          
        }
      }
  return (
    <form onSubmit={(event) => findByName(event)}>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} ></input>   
    </form>
  )
}
