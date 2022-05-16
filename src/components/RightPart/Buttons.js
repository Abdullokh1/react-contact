import React from "react";
import './RightPart.css'


export default function Buttons(props) {
  const btn = ['All', 'Friends', 'Family', 'Collegue']
  return (
    <li>
      {btn.map((item, i) =>{
        return <button key={i} onClick={props.buttonHandle} className="btn me-2 btn-success">{item}</button>
      })}
    </li>
  );
}
