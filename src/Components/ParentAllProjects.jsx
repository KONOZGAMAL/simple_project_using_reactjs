import {React } from 'react';
import {useNavigate} from "react-router-dom";
import Data from './Data';
import Style from './ComponentAll.module.css';
export default function ParentAllProjects() {
    const navigate = useNavigate() 
  return (
    <div className={Style.parent}>
        <div className={Style.title}>
        <h1>Simple React Js Projects</h1>
        <h3> All Projects</h3>
        </div>
        <div className={Style.items}>
        {
            Data.map((e)=>(
                <div key={e.id} className={Style.item}>
                    <img src={e.url} className={Style.imgs} alt={e.alt}/>
                    <button to={e.link} onClick={()=>{navigate(e.link)}} className={Style.btn}>{e.nameproject}</button>
                </div>
            ))
        }
        </div>
    </div>
  )
}
