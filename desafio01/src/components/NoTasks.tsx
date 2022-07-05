import noTasks from '../assets/Clipboard.svg'

export function NoTaks() { 
  return ( 
    <div className='flex flex-col items-center justify-center gap-4 border-t border-[#333333] rounded-t-lg mt-[9.25rem] py-16 px-6'>
     <div className='mt-16'>
    <img src={noTasks} />
    </div>
    <div className='flex flex-col'>
      <span className='text-[#808080] font-bold'>Você ainda não tem tarefas cadastradas</span>
      <span className='text-[#808080] font-normal'>Crie tarefas e organize seus itens a fazer</span>
    </div>
   </div>
  )
}