import React from 'react'
import { DebounceInput } from 'react-debounce-input';

import classes from './Navbar.module.css'

function Navbar(props) {
  return (
    <div className={classes.navbar}>
      <DebounceInput
        type='text'
        className={classes.search}
        name={props.name}
        placeholder='Search for a City'
        minLength={2}
        debounceTimeout={300}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default Navbar
