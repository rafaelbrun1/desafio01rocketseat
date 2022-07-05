import {Check, Trash} from 'phosphor-react'
import {TodoProps} from '../App'
import vector1 from '../assets/Check.svg'
import vector2 from '../assets/notChecked.svg'
import * as reactIcons from 'react-icons'

interface TasksProps { 
  todo: { 
    id: string
    content: string
    checked: boolean
  },
  deleteTodo: (el: TodoProps) => void,
  update: (el: TodoProps) => void
}


export function Tasks({todo, deleteTodo, update}: TasksProps) { 

  function handleDeleteTodo() {
    deleteTodo(todo)
  }

  function handleChangeTodo() { 
    update(todo)
  }
  
  
  return ( 
   //<img src ={vector2}/> 
    <div className='flex flex-col gap-3 mt-6'>
    <div className='flex bg-[#262626] rounded-lg border border-[#333333] justify-between gap-12 items-start p-4 w-full '>
      <div className='flex gap-3 items-center'>
    
    {todo.checked === false ?
    <button type='button' onClick={handleChangeTodo} className="w-[17.45px] h-[17.45px] rounded-full border bg-transparent border-[#4EA8DE] hover:bg-[#1E6F9F] hover:bg-opacity-20 outline-none transition-colors" > 
    
    </button>
    : <button type='button' onClick={handleChangeTodo} className="w-[17.45px] h-[17.45px] rounded-full border bg-[#5E60CE] border-[#5E60CE] hover:bg-[#8284FA] hover:border-[#8284FA] transition-colors flex items-center justify-center"> 
    <Check color='#F2F2F2' size={13} className='hover:text-[#F2F2F2]' />
    </button> 
    }
    
    
    
    {todo.checked === false ?
    <p className='text-[#F2F2F2] text-sm break-words '>{todo.content}</p>
    : <p className='text-[#808080] line-through text-sm break-words'>{todo.content}</p>}
    </div>

    <button onClick={handleDeleteTodo} className="w-6 h-6 ">
    <Trash size={17} className='text-[#808080] hover:text-[#E25858] transition-colors'/>
    </button>
    </div>
  </div>
   
  )
}