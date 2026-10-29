import React from 'react'

const Cards = (props) => {
  return (
    <div className="cards-container">
      {props.data.map((item) => (
        <div className="card" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <p>User ID: {item.userId}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards