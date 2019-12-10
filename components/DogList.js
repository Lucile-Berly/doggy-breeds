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
