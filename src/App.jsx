import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Input from './assets/Components/Input'
import Todos from './assets/Components/Todos'
import { v4 as uuidv4 } from 'uuid';
import audioAdd from '../src/assets/add.wav'
import audiocheck from '../src/assets/checkbox.mp3'
import audiodel from '../src/assets/del.wav'

function App() {
  const [todos, setTodo] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [bookmark, setBook] = useState([])
  const [complatedArr, setcopml] = useState(JSON.parse(localStorage.getItem('comp')) || [])
  const [form, setform] = useState('')

  localStorage.setItem('todos', JSON.stringify(todos))
  localStorage.setItem('comp', JSON.stringify(complatedArr))

  // CHECKBOX
  function checkbox(id, i) {
    setcopml([...complatedArr, todos[i]])

    let filteredArr = todos.filter((e) => e.id != id )
     console.log(filteredArr);

    setTodo(filteredArr)

    todos[i].isComp = true
    console.log(complatedArr);
  }

  function checkboxC(id, i) {
    let filteredArr = complatedArr.filter(e => e.isComp)
    setcopml(filteredArr)


  }
  console.log(todos);



  function addTodo(e) {
    // e.preventDefault();
    let val = document.querySelector('.inpur').value

    if (val.trim()) {
      setTodo([
        ...todos,
        {
          id: uuidv4(),
          Tname: val,
          time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
          isComp: false
        }]);

    } else {
      alert('Please write something!')
    }
  }


  function delFunc(id) {
    let newArr = todos.filter((item) => {
      return item.id != id
    })

    setTodo(newArr)

  }


  function bookFunc(id) {
    let card = document.querySelectorAll('.todo-s')
    card[id].classList.toggle("fav")
    setBooks()
  }

  function setBooks() {
    document.querySelectorAll('.todo-s').forEach((e, i) => {
      if (e.getAttribute('class').includes('fav')) {
        todos.forEach(ell => {
          if (ell.id == e.id) {
            if (bookmark.includes(ell)) {
              setBook([...bookmark.filter(es => {
                return es.id !== ell.id
              })])
            } else {
              setBook([...bookmark, ell])

            }

          }

        })

      }
    })

  }
  if (complatedArr.length > 0) {
    document.querySelector('.accordion')?.classList.remove('d-none')
  } else {
    document.querySelector('.accordion')?.classList.add('d-none')
  }

  useEffect(() => {
    setTodo([...todos])
  }, []);






  return (
    <>
      <audio controls className='d-none checkbox-sound'>
        <source src={audiocheck} type="audio/mpeg" />
      </audio>

      <audio controls className='d-none del-sound'>
        <source src={audiodel} type="audio/mpeg" />
      </audio>


      <audio controls className='d-none Add-audio'>
        <source src={audioAdd} type="audio/mpeg" />
      </audio>

      <form className="add-new" onSubmit={(e) => {
        // const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
        e.preventDefault()
        document.querySelector('.Add-audio').play()
        addTodo()
        document.querySelector('.inpur').value = ''
      }}  >
        <Input />
        <button className="btn btn-primary add-btn" >Add</button>
      </form>

      <Todos data={{ todos, delFunc, bookFunc, bookmark, checkbox, complatedArr, checkboxC, setTodo }} />
    </>
  )
}

export default App
