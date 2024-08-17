import React from 'react'

import classes from "./PolicyCard.module.css"

const PolicyCard = (props) => {
  return (
    <div className={classes.PolicyCard}>
        <h3>{props.title}</h3>
        <p>{props.header}</p>
        <ul>
            {props.listData && props.listData.map( data => (
                <li key={data}>{data}</li>
            ))}
        </ul>

        <footer>{props.footerData}</footer>
    </div>
  )
}

export default PolicyCard