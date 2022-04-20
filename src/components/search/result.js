import React from 'react'

export default function Result({result, error}) {
    
        const value = {result};
 
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


