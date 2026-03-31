import React from "react";  
import Search from "./Search.jsx"
import {useState} from 'react'
import {useEffect} from 'react'

export default function Weather () {
const [search,setSearch] = useState("")
const [weatherData,setWeatherData] = useState(null)
const [loading,setLoading] = useState(false)

async function fetchWeatherData(param) {
  try {
setLoading(true)
const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`)
const data = await res.json()
setWeatherData(data)

    setLoading(false)
  }catch{
    setLoading(false)
  }
}

useEffect (()=>{
  fetchWeatherData()
},[])


  return (
    <Search search={search} setSearch={setSearch} fetchWeatherData={fetchWeatherData} />
  )
}