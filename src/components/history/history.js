import React from 'react'
import {useEffect} from 'react';

export default function history({history,setHistory}) {

    useEffect(() => {setHistory(JSON.parse(localStorage.getItem('history')));}, [])
    console.log(history);

  return (
    <div></div>
  )
}
