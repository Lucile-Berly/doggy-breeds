import React, { useState, useEffect } from "react"

const SearchDog = () => {
  const [search, setSearch] = useState("")
  const [listDog, setListDog] = useState([])

  const axios = require("axios").default

  useEffect(() => {
    async function getDog() {
      const response = await axios.get("https://api.TheDogAPI.com/v1/breeds")
      setListDog(response.data)
    }
  }, [])

  const resultListDog = listDog.map((dog) => (
    <a key={`dog-${dog.id}`} href="/dog">
      <li> {dog.name} </li>
    </a>
  ))

  return (
    <>
      <input type="search" onChange={(event) => setSearch(event.target.value)} value={search} />
      <button onClick={() => getDog()}>Rechercher</button>
      <ul>{resultListDog}</ul>
    </>
  )
}
export default SearchDog

/* const inputRef = React.useRef(null) 
 const [apiNoResult, setApiNoResult] = useState(false)*/

/* useEffect(() => {
    if (search.length >= 3) {
      api.getComposters({ name: search }).then(response => {
        if (response.status === 200) {
          setListComposter(response.data['hydra:member'])
          setOpen(true)
          setApiNoResult(response.data['hydra:member'].length === 0)
        }
      })
    } else {
      setListComposter([])
      setOpen(false)
    }
  }, [search])

  
  <TextField
        autoFocus
        className={classes.searchBarContainer}
        ref={inputRef}
        value={search}
        type="search"
        variant="outlined"
        onChange={event => setSearch(event.target.value)}
        fullWidth
      ></TextField>


       <Popper
        style={{ width: inputRef.current && inputRef.current.offsetWidth }}
        className={classes.popperContainer}
        open={open}
        anchorEl={inputRef.current}
        placement="bottom-start"
        disablePortal
      >
        <List>{apiNoResult ? 'aucun résultat ne correspond à votre recherche' : composterListe}</List>
      </Popper>
   */
