import React from 'react'
import classes from './Welcome.module.css'

const Welcome = (props) => {
  let display = ""

  if(props.data.loading) {
    if(props.data.noresult) {display = <div className={classes.textfocusin}>Couldn't Find Location</div>}
      else {display = <div className={classes.loader}></div>}
  } else {
    display = <div className={classes.textfocusin}>Welcome to<br /><br />Weather Search</div>
  }

  return <div className={classes.welcome}>
    <h1>{display}</h1>
  </div>
}

export default React.memo(Welcome);
