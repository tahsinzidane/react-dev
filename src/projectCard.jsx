import React from 'react'

function projectCard(props) {
  return (
    <>
    <h3 className='text-center mt-3'>{props.pName}</h3>
    <img src={props.preview} alt="" className='img-fluid  mt-3'/>
    <p className='text-center mt-3'>{props.desc}</p>
    </>
  )
}

export default projectCard