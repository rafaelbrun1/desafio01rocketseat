import { Header } from './components/Header'
import {PlusCircle} from 'phosphor-react'
import { NoTaks } from './components/NoTasks'
import { Tasks } from './components/Tasks'
import { v4 as uuid_v4 } from "uuid"
import { useState, ChangeEvent, FormEvent } from 'react'


export interface TodoProps {
  id: string;
  content: string,
  checked: boolean
}

function App() {
const [newTodoContent, setNewTodoContent] = useState<string>('')
const [newTodo, setNewTodo] = useState<TodoProps[]>([])

function handleNewTodo(event: FormEvent){ 
  event.preventDefault()
  setNewTodo([{ 
    id: uuid_v4(),
    content: newTodoContent,
    checked: false
  }, ...newTodo
])
  setNewTodoContent('')
  
}

function handleNewTodoContent(event: ChangeEvent<HTMLInputElement>) { 
  const newText = event.target.value
  setNewTodoContent(newText)
}

function handleDeleteTodo(el: TodoProps) { 
  const todosWithoutDeletedOne = newTodo.filter(todo => todo.id !== el.id)
  setNewTodo(todosWithoutDeletedOne)
}

function handleChangeTodo(el: TodoProps) { 
const changedTodo = newTodo.map(todo => { 
  if (todo.id === el.id) { 
    if (todo.checked === false) { 
      return {...todo, checked: true}
    } else if  (todo.checked === true){
      return {...todo, checked: false}
     }  
  }
  return todo
})
setNewTodo(changedTodo)
}

const doneTasks = newTodo.filter(el => el.checked !== false).length
   
return (
    <>
  <Header />
  
  <div className='flex flex-1 flex-col items-center justify-center'>
  <form action="submit" onSubmit={handleNewTodo}>
  <div className='lg:w-[39.87rem] h-[3.37rem] flex gap-2 mt-[calc(1.8rem-3.5rem)] sm:w-[25rem]'> 
    <input type="text" 
    className='flex-1 bg-[#262626] placeholder:text-[#808080] placeholder:text-base rounded p-4 drop-shadow-md border border-[#0D0D0D] focus:outline-none focus:border focus:border-[#5E60CE] text-[#F2F2F2]'  
    placeholder='Adicione uma nova tarefa' onChange={handleNewTodoContent} value={newTodoContent} name="todo"/>
    <button className='bg-[#1E6F9F] rounded flex items-center justify-center gap-2 p-4 text-[#F2F2F2] hover:bg-[#4EA8DE] hover:text-[#F2F2F2] transition-colors disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-[#1E6F9F]' type="submit" disabled={!newTodoContent}> 
      <span>Criar</span>
      <PlusCircle size={15} weight='bold'/>
    </button>
 </div>
 </form>
  <div className='mt-[5.68rem] lg:w-[39.87rem] w-[25rem] flex flex-col'>
    
    <div className='flex justify-between w-full'> 
    <div className='flex gap-2 items-center justify-center'>
    <span className='font-bold text-[#4EA8DE]'>Tarefas criadas</span>
    <span className='rounded-full bg-[#333333] py-[0.25px] px-2 font-bold text-white'>{newTodo.length}</span>
    </div>
    <div className='flex gap-2 items-center justify-center'>
    <span className='font-bold text-[#8284FA]'>Concluídas</span>
    <span className='rounded-full bg-[#333333] py-[0.25px] px-2 font-bold text-white'>{doneTasks} de {newTodo.length}</span>
    </div>
    </div>
   
   {newTodo.length === 0 
   ? 
   <NoTaks /> 
   : 
   newTodo.map(element => { 
     return <Tasks key={element.id} todo={element} deleteTodo={handleDeleteTodo} update={handleChangeTodo} />
   })}

  </div>
  
  </div>
  </>
  )
}

export default App
