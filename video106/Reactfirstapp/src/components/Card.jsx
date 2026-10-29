import React from 'react'

const Card = (props) => {
  return (
    <div className='Card'>
        <img src="./src/assets/hero.png" alt="Card Image" style={{width:"60px"}} />
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
    </div>
  )
}

export default Card
