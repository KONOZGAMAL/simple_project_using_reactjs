import React from 'react'
import Style from './ComponentGallery.module.css'
export default function Effect(props) {
  return (
    <div className={Style.effect} style={{display : props.onlyImg ? 'block':'none'}}>
      <span onClick={()=>{props.setShow(null)}}>x</span>
      <img src={props.onlyImg.img} alt='logo'/>
    </div>
  )
}
