import React from 'react'
import classes from './Welcome.module.css'

const Welcome = (props) => {
  return <div className={classes.welcome}>
    <h1 className={classes.textfocusin}>{props.loading ? <div>Searching Weather</div> : <div>Welcome to<br /><br />Weather Search</div>}</h1>
  </div>
}

export default React.memo(Welcome);
