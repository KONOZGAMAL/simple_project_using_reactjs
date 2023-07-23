import {React , useState} from 'react'
import Style from './ComponentCount.module.css'
export default function Count() {
    const [count , setCount] = useState(0)
    const [isRed , setRed] = useState(false)
    const increment = ()=>{
        setCount(count+1)
        if(count >= 0){
            setRed(true)
        }
    }
    const decrement = ()=>{
        setCount(count-1)
        if(count <= 0){
            setRed(false)
        }
    }
    const Reset = ()=>{
        setCount(0)
    }
    const cardStyles ={
         R:{
            color:'red',
        },
        B:{
            color:'blue',
        },
    }
  return (
       <div className={Style.mainClass}>
          <h1>Count</h1>
                 <p style ={isRed?cardStyles.B : cardStyles.R}>{count}</p>
    <div className={Style.btnS}>
    <input className={Style.one}  type="button" value="Add" onClick={increment} />
    <input className={Style.one} type="button" value="Lower" onClick={decrement} />
    <input className={Style.one}  type="button" value="Reset" onClick={Reset} />
         </div>
     </div>
  )
}
