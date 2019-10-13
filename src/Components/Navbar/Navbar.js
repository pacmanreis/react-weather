import React from 'react'
import { DebounceInput } from 'react-debounce-input';

import './Navbar.css'

function Navbar(props) {
  return(
      <DebounceInput
        type='text'
        className='search'
        name={props.name}
        placeholder='Search for a City'
        minLength={2}
        debounceTimeout={300}
        onChange={props.handleChange}
      />
  )
}

export default Navbar
