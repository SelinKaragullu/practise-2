import React from "react";  
import Search from "./Search.jsx"
import {useState} from 'react'

export default function Weather () {
const [search,setSearch] = useState("")

  return (
    <Search search={search}/>
  )
}