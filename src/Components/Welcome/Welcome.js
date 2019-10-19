import React from 'react'
import classes from './Welcome.module.css'

const Welcome = (props) => {
  let display = ""

  if(props.data.loading) {
    if(props.data.noresult) {display = <div>Couldn't Find Location</div>}
      else {display = <div>Searching Weather</div>}
  } else {
    display = <div>Welcome to<br /><br />Weather Search</div>
  }

  return <div className={classes.welcome}>
    <h1 className={classes.textfocusin}>{display}</h1>
  </div>
}

export default React.memo(Welcome);
