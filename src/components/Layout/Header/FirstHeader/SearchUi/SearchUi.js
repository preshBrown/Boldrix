import React from 'react'


import classes from "./SearchUi.module.css"

const SearchUi = () => {

const inputHandler = (e) => {
  e.preventDefault()
}

  return (
    <>
    <form className={classes.SearchUi} onSubmit={inputHandler}>
        <input type='search' placeholder="Search..." />
    </form>
    </>
  )
}

export default SearchUi