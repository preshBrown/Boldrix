import React from 'react'

import { Link } from 'react-router-dom'
import PlayStore from "./newgooglplay.png"
import Apple from "./app-store-badge.png"
import classes from "./DownloadLinks.module.css"

const DownloadLinks = () => {
  return (
    <div className={classes.DownloadLinks}>
        <Link to="#">
            <img className={classes.Img} src={PlayStore} alt='GooglPlay' />
        </Link>

        <Link to="#">
           <img className={classes.Img} src={Apple} alt='App Store' />
        </Link>
    </div>
  )
}

export default DownloadLinks