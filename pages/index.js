import React, { useEffect, useState } from "react"
import DogList from "../components/DogList"
import axios from "axios"

const Home = ({ dogs }) => {
  const [search, setSearch] = React.useState("")
  const [selectedDog, setSelectedDog] = React.useState(dogs)
  const [searchResults, setSearchResults] = React.useState(dogs)
  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  //Filtrer les résultats qui correspondent à la recherche
  useEffect(() => {
    const results = selectedDog.filter((dog) => dog.name.toLowerCase().includes(search.toLowerCase()))
    setSearchResults(results)
  }, [search])

  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleChange} value={search} />

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

/* 

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await axios.get(`https://api.TheDogAPI.com/v1/breeds/${id}`)
  return { res: res.data }
}

4-Afficher l'image du chien sur le detail de la race 

 

*/
