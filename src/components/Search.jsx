import React from "react";  

export default function Search () {

function handleSearch (event) {
  console.log(event.target.value)
}

  return (
    <>
    <input type="text"
    onChange={event.target.value}
    value={search}
    
    />
    <button onClick={handleSearch}>Search</button>
    </>
  )
}