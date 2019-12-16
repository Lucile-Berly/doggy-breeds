import Layout from "../components/Layout"
import Link from "next/link"
import React from "react"
import DisplayList from "./DisplayList"

const DogList = ({ selectedDog }) => {
  const displayDogs = selectedDog.map((dog) => (
    <Layout key={dog.id}>
      <Link href="/p/[id]" as={`/p/${dog.id}`}>
        <a key={`dog-${dog.id}`}>
          <DisplayList dog={dog} key={dog.id} />
        </a>
      </Link>
    </Layout>
  ))
  return <>{displayDogs}</>
}

export default DogList
