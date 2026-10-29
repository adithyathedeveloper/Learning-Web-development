import { useState, useEffect } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
import Navbar from './components/Navbar.jsx'
import Todoadd from './components/Todoadd.jsx'
import Yourtodos from './components/Yourtodos.jsx'  
import { MdEdit } from "react-icons/md";  

function App() {

  const [todotask, settodotask] = useState("")
  const [todotaskset, settodotaskset] = useState(() => {
  const savedTodos = localStorage.getItem('todotaskset');
  return savedTodos ? JSON.parse(savedTodos) : [];
});
  const [editingId, setEditingId] = useState(null);
  const [showfinished, setshowfinished] = useState(true)

useEffect(() => {
  localStorage.setItem('todotaskset', JSON.stringify(todotaskset));
}, [todotaskset]);

 const handleAdd = () => {
  if (todotask.trim() === "") return;

  if (editingId !== null) {
    // Update the existing todo
    settodotaskset(prevTodos =>
      prevTodos.map(todo =>
        todo.id === editingId
          ? { ...todo, todotask: todotask.trim() }
          : todo
      )
    );
    setEditingId(null);
  } else {
    // Add a new todo
    settodotaskset(prevTodos => [
      ...prevTodos,
      {
        id: crypto.randomUUID(),
        todotask: todotask.trim(),
        isCompleted: false
      }
    ]);
    
  }

  settodotask("");
};

  const handleChange = (e) => {
    console.log("Change is happening")
    settodotask(e.target.value)
    console.log(todotaskset)
    
  }

  const handleEdit = (id) => {
  const tasktoedit = todotaskset.find(todo => todo.id === id);

  if (!tasktoedit) return;

  settodotask(tasktoedit.todotask);
  setEditingId(id);
  
};

   const handleDelete = (id) => {
  settodotaskset(prevTodos =>
    prevTodos.filter(todo => todo.id !== id)
  );
  
};

  // const handleToggle = (index) => {
  //   const updatedTodos = [...todotaskset]
  //   updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted
  //   settodotaskset(updatedTodos)
  // }
 const handleCheckbox = (id, isChecked) => {
  settodotaskset(prevTodos =>
    prevTodos.map(todo =>
      todo.id === id
        ? { ...todo, isCompleted: isChecked }
        : todo
    )
  );
 
};
const showfinishedfunc = (e) => {
  setshowfinished(!showfinished)
  console.log("showfinished is now: ",showfinished)
}

  

  return (
    <>
      <Navbar />
      <Todoadd handleAdd={handleAdd} handleChange={handleChange} todotask={todotask} />
      <Yourtodos todotask={todotask} todotaskset={todotaskset} handleEdit={handleEdit} handleDelete={handleDelete} handleCheckbox={handleCheckbox} showfinished={showfinished} showfinishedfunc={showfinishedfunc}/>
    </>
  )
}

export default App
