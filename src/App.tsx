import { useState } from 'react'
import Square from "./Square";
import {wincheck} from "./Win"
function App() {
  let a=0;
  let win:string;
  const st=['','','','','','','','',''];
   const[state,setstate]=useState(['','','','','','','','',''])
   const[count,setcount]=useState(0);
  const[player,setplayer]=useState("X");
  const chooseSquare=(value:any)=>{
    a=value;
    setstate(state.map((val,ind):any=>{
     
      if(ind===value && val==''){
        
        return player;
      }
        return val;
    })
    )
    
    
      if(player=='X'&&state[a]=='' ){
        setplayer("O")
      }
      if(player=='O' &&state[a]===''){
        setplayer('X')
      }
      setcount(count+1)
      
  }
  win=wincheck(state,count);

  return (
    <div className="app flex flex-col justify-center h-screen items-center">
      {win!=null?"":<h1 className='border border-green-300 bg-green-500 rounded-md pr-2 pl-2 text-xl mb-2 font-semibold text-white'>Now <span className='text-red-500'>{player}</span> Turn</h1>}
      <div className="board w-[400px] h-[400px] bg-blue-300 rounded-xl shadow-xl flex flex-col overflow-hidden">
        {win==="draw"?<div className='flex justify-center flex-col items-center h-[400px]'><h1 className=' text-rose-600 text-2xl font-bold'>Match is Draw</h1></div>:win!=null?<div className='flex justify-center flex-col items-center h-[400px]'><h1 className='text-5xl mb-5'>🏆</h1><h1 className=' text-rose-600 text-2xl font-bold'><span className='mr-2 text-black'>{win}</span>is Winner</h1></div>:
        <><div className="row flex flex-row flex-[33%] ">
          <Square val={state[0]} choosesquare={() => { chooseSquare(0); } } />
          <Square val={state[1]} choosesquare={() => { chooseSquare(1); } } />
          <Square val={state[2]} choosesquare={() => { chooseSquare(2); } } />
        </div><div className="row flex flex-row flex-[33%] ">
            <Square val={state[3]} choosesquare={() => { chooseSquare(3); } } />
            <Square val={state[4]} choosesquare={() => { chooseSquare(4); } } />
            <Square val={state[5]} choosesquare={() => { chooseSquare(5); } } />
          </div><div className="row flex flex-row flex-[33%] ">
            <Square val={state[6]} choosesquare={() => { chooseSquare(6); } } />
            <Square val={state[7]} choosesquare={() => { chooseSquare(7); } } />
            <Square val={state[8]} choosesquare={() => { chooseSquare(8); } } />
          </div></>
         }
      </div>
      <div>
          <button onClick={()=>{setstate(st),setplayer('X'),setcount(0)}} className='border border-green-500 m-3 text-2xl font-semibold bg-green-600 pr-2 pl-2 rounded-md text-white'>Restart Game</button>
        </div>
    </div>
  )
}

export default App
