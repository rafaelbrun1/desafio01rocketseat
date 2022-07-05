import todoIMG from '../assets/todo.svg'
import nave from '../assets/nave.svg'

export function Header() { 
  return ( 
    <div className="w-full h-[12.5rem] bg-[#0D0D0D] flex items-center justify-center gap-3">
      <img src={nave}/>
      <img src={todoIMG} /> 
    </div>
  )
}
