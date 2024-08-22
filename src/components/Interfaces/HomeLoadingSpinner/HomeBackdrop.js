import React from 'react'


import classes from "./HomeBackdrop.module.css"


const HomeBackdrop = (props) => {
  return ( props.show && <div onClick={props.close} className={classes.HomeBackdrop}> </div> )
  
}

export default HomeBackdrop