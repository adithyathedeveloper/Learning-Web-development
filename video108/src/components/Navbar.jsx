import React, {useEffect} from 'react'

const Navbar = ({color}) => {
  useEffect(() => {
    // Do something when color changes
    alert(`Navbar color changed to ${color}`)
  }, [color])
  
  useEffect(() => {
    alert("Hey I will run on every render")
  })
  useEffect(() => {
    alert("Ohk, this is another render of Nav")

    return() =>{
      alert("component was unmounted")
    }
  }, [])

  return (
    <div>
      I am navbar of {color} color hehe...
    </div>
  )
}

export default Navbar
