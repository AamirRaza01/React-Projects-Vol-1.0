import { useEffect, useState } from 'react'
//import './App.css'
import { ToDoProvider } from './Contexts/ToDoContext'
import TodoForm from './Components/ToDoForm'
import TodoItem from './Components/ToDoItem'

function App() {
  const [ToDoList, setToDoList] = useState([])

  const addToDo = (todo) => {
    setToDoList((prev) => [{id : Date.now(), ...todo}, ...prev])   // what is ...todo?? from where it is coming?? todo apne aap me hi ek object hai
  }

  const  updateToDo = (id, todo) => {
    setToDoList((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteToDo = (id) => {
    setToDoList((prev) => prev.filter((todo) => todo.id !== id))     // filter - new array , takes callback as an arg,
                                                                     // har elem ke pass jayega aur agar cond true hai to elem stay karega warna remove hojayega
                                                                     // we can think of also ki agar map kar rahe hai aur us elem ka id match kar gay to wo elem pura delete kar do 
                                                                     //    array.map(obj => {
                                                                     //     // If the current object's ID does not match the ID to delete, add it to the new array.
                                                                     //     if (obj.id !== idToDelete) {
                                                                     //         newArray.push(obj);
                                                                     //     }
                                                                     //    };
  }
  
  const toggleComplete = (id) => { 
    setToDoList((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed } : prevTodo))
  }
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setToDoList(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(ToDoList) )

  }, [ToDoList])

  return (
    <ToDoProvider value={{ToDoList, addToDo, deleteToDo, updateToDo, toggleComplete}}>

            <div className="bg-[#152156] min-h-screen py-[60px] w-full">
                <div className="w-full max-w-2xl mx-auto shadow-[#b6b6b675] rounded-lg px-7 pt-[10px] pb-[28px] capitalize text-white bg-[#6379db]">
                    <h1 className="text-3xl font-bold text-center my-8">List your Daily Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-[10px] mt-[40px]">
                        {ToDoList.map((todo) =>
                        <div key={todo.id} className='w-full text-[18px] tracking-[1px] font-medium'>
                          <TodoItem todo = {todo}/>
                        </div> 
                        )}
                    </div>
                </div>
            </div>

    </ToDoProvider>
  )
}

export default App
