import React from 'react'
import { DebounceInput } from 'react-debounce-input';

import classes from './Search.module.css'

function Search(props) {
  return (
    <div className={classes.search}>
      <DebounceInput
        type='text'
        className={classes.searchBar}
        name='city'
        placeholder='Search for a City'
        minLength={2}
        debounceTimeout={300}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default React.memo(Search);
