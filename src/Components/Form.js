import React from 'react'
import { DebounceInput } from 'react-debounce-input';

function Form(props) {
  return(
    <div>
      <DebounceInput
        className="form-control"
        name={props.name}
        placeholder="Search for a City"
        minLength={2}
        debounceTimeout={300}
        type="text"
        onChange={props.handleChange}
      />
    </div>
  )
}

export default Form
