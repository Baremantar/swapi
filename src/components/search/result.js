import React from 'react'

export default function Result({result}) {
        
        const value = {result};
        

        if (value.result !== undefined) {

          return (
            <div>
              <p>{value.result.name}</p>
              <p>{value.result.gender}</p>
              <p>{value.result.birth_year}</p>
              <p>{value.result.height}</p>
              <p>{value.result.mass}</p>
            </div>
          )
        }
        else {
          return (
            <div></div>
          )
        }
    }


