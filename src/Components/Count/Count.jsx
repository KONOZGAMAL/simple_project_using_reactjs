import {React , useState} from 'react'
import Style from '../ComponentAll.module.css'
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
                 <p className={Style.count} style ={isRed?cardStyles.B : cardStyles.R}>{count}</p>
    <div>
    <input className={Style.btn2}  type="button" value="Add" onClick={increment} />
    <input className={Style.btn2} type="button" value="Lower" onClick={decrement} />
    <input className={Style.btn2} type="button" value="Reset" onClick={Reset} />
         </div>
     </div>
  )
}
