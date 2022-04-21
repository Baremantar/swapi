import React, {useEffect, useState} from 'react'


export default function history({history,setHistory}) {

    useEffect(() => {setHistory({...localStorage})}, [])
    
  return (
    <div></div>
  )
}
