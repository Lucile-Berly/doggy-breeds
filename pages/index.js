import React, { useEffect, useState } from "react"
import axios from "axios"
import DogList from "../components/DogList"

/* Mettre le Search dans index pour commencer, ou passer les props au composant Search
DogList, diminuera ou agmentera selon search */

const Home = () => {
  const axios = require("axios").default
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
    console.log(dogList)
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

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  )
}
export default Home

/* 1-Obtenir la liste des chiens dans un tableau
   2-Créer une fonction pour filtrer selon la recherche
   3-J'affiche la nouvelle liste
   
   const [search, setSearch] = useState("")
  const [searchList, setSearchList] = useState([])
  const [listDog, setListDog] = useState([])
  const axios = require("axios").default

  useEffect(() => {
    async function getDog() {
      const response = await axios.get("https://api.TheDogAPI.com/v1/breeds")
      setListDog(response.data)
      console.log("coucou")
    }
    console.log(listDog)
    getDog()
  }, [])

 const filterDog = (listDog, search) => {
  listDog.filter(function(dog){
      return dog === search
  })

 }



  const resultListDog = listDog.map((dog) => (
    <a key={`dog-${dog.id}`} href="/dog">
      <li> {dog.name} </li>
    </a>
  ))
  const handleChange = (event) => {
    if (event.target.value !== "") {
      setSearchList(
        listDog.filter((item) => {
          const ld = item.toLowerCase()
          const filter = event.target.value.toLowerCase()

          return ld.includes(filter)
        })
      )
    }
  }
   
   */
