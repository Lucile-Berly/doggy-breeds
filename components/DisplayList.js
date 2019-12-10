import React from "react"

const DisplayList = (props) => {
  return <li>{props.dog.name}</li>
}

export default DisplayList

//Race :  | Origine :{props.dog.origin} | Espérance de vie : {props.dog.life_span} | Tempérament : {props.dog.temperament}
