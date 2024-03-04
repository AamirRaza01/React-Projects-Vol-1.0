import { useState } from "react";
import { useToDo } from "../Contexts/ToDoContext";

function TodoForm() {
    const {addToDo} = useToDo()
    const [todo, setTodo] = useState("")

    const add = (e) => {
        e.preventDefault()
        if(!todo) return
            addToDo({todo : todo, completed : false})  // maybe incorrect, what is todo  : todo? which todo it is referring?
            setTodo("")
        
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full rounded-l-lg px-3 outline-none duration-150 bg-[#e8ecff] py-2.5 text-[18px] text-black"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-5 py-1 bg-[#18255d] text-white text-[20px] shrink-0">  
                Add 
                     {/* add btn par functionality isliye nahi add kiye qki iska 
                     type submit hai to ispe directly click karne se form submit 
                     hojayega, aur maine form par already onSubmit lagaya hua hai  */}
                     
            </button>
        </form>
    );
}

export default TodoForm;

