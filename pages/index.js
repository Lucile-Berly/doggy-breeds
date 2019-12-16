import React, { useEffect, useState } from "react"
import DogList from "../components/DogList"
import axios from "axios"

const Home = () => {
  const [search, setSearch] = React.useState("")
  const [dogList, setDogList] = React.useState([])
  const [searchResults, setSearchResults] = React.useState([])
  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  //Récupérer la liste des chiens et les mettre dans un tableau
  useEffect(() => {
    async function getDog() {
      const response = await axios.get("https://api.TheDogAPI.com/v1/breeds")
      setDogList(response.data)
      setSearchResults(response.data)
    }
    getDog()
  }, [])

  //Filtrer les résultats qui correspondent à la recherche
  useEffect(() => {
    const results = dogList.filter((dog) => dog.name.toLowerCase().includes(search.toLowerCase()))
    setSearchResults(results)
  }, [search])

  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleChange} value={search} />

      <DogList dogList={searchResults} />
    </div>
  )
}
export default Home
