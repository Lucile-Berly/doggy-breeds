import React, { useEffect, useState } from "react"
import DogList from "../components/DogList"
import axios from "axios"

const Home = ({ dogs }) => {
  const [search, setSearch] = useState("")
  const [selectedDog, setSelectedDog] = useState(dogs)
  const [searchResults, setSearchResults] = useState(dogs)
  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const searchInput = {
    width: 300,
    borderRadius: 2,
    marginBottom: 50,
    padding: 10
  }
  const centerInput = {
    textAlign: "center"
  }
  const title = {
    marginBottom: 50
  }

  //Filtrer les résultats qui correspondent à la recherche
  useEffect(() => {
    const results = selectedDog.filter((dog) => dog.name.toLowerCase().includes(search.toLowerCase()))
    setSearchResults(results)
  }, [search])

  return (
    <div style={centerInput}>
      <h1 style={title}>Doggy Breeds</h1>
      <input type="text" placeholder="Search a breed" onChange={handleChange} value={search} style={searchInput} />

      <DogList selectedDog={searchResults} />
    </div>
  )
}

//Récupérer la liste des chiens et les mettre dans un tableau
Home.getInitialProps = async () => {
  const response = await axios.get("https://api.TheDogAPI.com/v1/breeds")

  return {
    dogs: response.data
  }
}

export default Home
