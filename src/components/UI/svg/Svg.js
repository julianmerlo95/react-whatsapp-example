import React from 'react';

const Svg = (props) => {

  const { classIcon, color, icon, width } = props;

  return (
    <div>
      <svg className={`${classIcon ? classIcon : ""}`}
        xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -5 24 24" width={`${width ? width : "23"}`}>
        <path d="M0 0h24v24H0V0z" fill="none" /><path stroke={`${color ? color : "white"}`}
          stroke-width="1.8" d={icon} />
      </svg>
    </div>
  )
}

export default Svg