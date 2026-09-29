import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <h1>{props.logotext}</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
