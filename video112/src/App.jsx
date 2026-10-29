import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('type your name')
  // const [form,setForm] = useState({
  //   name:'',
  //   email:'',
  //   password:''
  // })
  const [form,setForm] = useState({})
  const handleClick = () => {
    setCount(count + 1)
    console.log('Button clicked', count + 1)
  }
  const handlemouseover = () => {
    console.log('Mouse over red div')
    alert('Mouse over red div')
  }
  const handlechange = (event) => {
    setName(event.target.value)
    console.log('Input changed', event.target.value)
    setForm({...form,[event.target.name]:event.target.value})
    console.log(form)
  }

  return (
    <>
    <div className="button">
      <button onClick={handleClick}>Click Me</button>
      <div>{count}</div>
      <div className='red' onMouseOver={handlemouseover}>This is a red div</div>
    </div>
    <input type="text" value={name} onChange={handlechange} />

    {/* <input type="text" name='name' value={form.name} onChange={handlechange} />
    <input type="text" name='email' value={form.email} onChange={handlechange} />
    <input type="text" name='password' value={form.password} onChange={handlechange} /> */}
    <input type="text" name='name' value={form.name?form.name:""} onChange={handlechange} />
    <input type="text" name='email' value={form.email?form.email:""} onChange={handlechange} />
    <input type="text" name='password' value={form.password?form.password:""} onChange={handlechange} />
    </>
  )
}

export default App
