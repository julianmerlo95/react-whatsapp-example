import React from 'react';
import './Column.sass'

const Column = (props) => {
  return (
    <div className="column"
      style={{ width: '30%', background: props.background }}>

      <h2>{props.name}</h2>
    </div>
  )
}

export default Column;