import React from "react";  

export default function Search ({search,setSearch}) {

function handleSearch () {
console.log(search)
}

  return (
    <>
    <input type="text"
    onChange={(event)=>setSearch(event.target.value)}
    value={search}
    
    />
    <button onClick={handleSearch}>Search</button>
    </>
  )
}