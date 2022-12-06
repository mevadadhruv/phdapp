import React from 'react'
import  phd  from "./photo/phd.jpg";
export function Logo() {
  return (
    <div className='logo-bar'>
        <img className='logo' src={phd} alt='logoweb' />
    </div>
  )
}