import Layout from "../../components/Layout"
import axios from "axios"

const Post = (props) => (
  <Layout>
    <h1>{props.res.name}</h1>
    <p>Groupe race : {props.res.breed_group}</p>
    <p>Élevé pour : {props.res.bred_for}</p>
    <p>Origine : {props.res.origin}</p>
    <p>Caractère : {props.res.temperament}</p>
    <p>Durée de vie : {props.res.life_span}</p>
  </Layout>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await axios.get(`https://api.TheDogAPI.com/v1/breeds/${id}`)
  return { res: res.data }
}

export default Post
