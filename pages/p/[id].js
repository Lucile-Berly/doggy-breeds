import React, { useState, useEffect } from "react"
import Layout from "../../components/Layout"
import axios from "axios"

const Post = (props) => {
  const [photoDog, setPhotoDog] = useState(null)

  //Faire un useEffect
  useEffect(() => {
    async function getPhotoDog() {
      const response = await axios.get(`https://api.TheDogAPI.com/v1/images/search?breed_id=${props.res.id}`)
      setPhotoDog(response.data)
      console.log(response.data)
    }
    getPhotoDog()
  }, [])

  return (
    <Layout>
      <h1>{props.res.name}</h1>
      <p>Breed group : {props.res.breed_group}</p>
      <p>Bred for : {props.res.bred_for}</p>
      <p>Origin : {props.res.origin}</p>
      <p>Temperament : {props.res.temperament}</p>
      <p>Life span : {props.res.life_span}</p>
      {photoDog && <img src={photoDog[0].url} width="400px" height="250px" alt="a dog" />}
    </Layout>
  )
}

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await axios.get(`https://api.TheDogAPI.com/v1/breeds/${id}`)
  return { res: res.data }
}

export default Post
