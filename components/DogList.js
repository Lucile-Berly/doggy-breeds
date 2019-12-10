import React, { useState, useEffect } from "react"
import DisplayList from "./DisplayList"

const DogList = ({ dogList }) => {
  const displayDogs = dogList.map((dog) => (
    <a key={`dog-${dog.id}`} href="/dog">
      <DisplayList dog={dog} key={dog.id} />
    </a>
  ))
  return <>{displayDogs}</>
}

export default DogList

/* useEffect(() => {
  async function fetchData() {
    const response = await api.getUsers({ email: search })
    setUsers(response.data["hydra:member"])
  }
  fetchData()
}, [search])

const resultListDog = listDog.map((dog) => (
    <a key={`dog-${dog.id}`} href="/dog">
      <li> {dog.name} </li>
    </a>
  ))


axios.get(`https://api.TheDogAPI.com/v1/breeds`).then((res) => {
      setDogList({ dogList: res.data })
      console.log(res)
    })
 */
