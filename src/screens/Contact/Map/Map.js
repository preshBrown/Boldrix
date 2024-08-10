import React from "react";

import classes from "./Map.module.css";

const Map = () => {
  return (
    <section className={classes.Map} >
      <h3> SEND US AN EMAIL</h3>
      <div className={classes.MapContainer}>
        <iframe
        title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67394.62206224998!2d6.968370412033505!3d4.812376031178964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cea39f2c48e3%3A0x53562bdd7d8832db!2sPort%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1722380486772!5m2!1sen!2sng"
          height="450"
          className={classes.MapFrame}
          //    style={{zIndex:"0", borderRadius: "15px", width: "98%", margin: "auto"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>
    </section>
  ); 
};

export default Map;
