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
      <p>Groupe race : {props.res.breed_group}</p>
      <p>Élevé pour : {props.res.bred_for}</p>
      <p>Origine : {props.res.origin}</p>
      <p>Caractère : {props.res.temperament}</p>
      <p>Durée de vie : {props.res.life_span}</p>
      {photoDog && <img src={photoDog[0].url} width={photoDog.width} height={photoDog.height} alt="a dog" />}
    </Layout>
  )
}

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await axios.get(`https://api.TheDogAPI.com/v1/breeds/${id}`)
  return { res: res.data }
}

export default Post

/*   <style jsx>{`
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
    `}</style> */
