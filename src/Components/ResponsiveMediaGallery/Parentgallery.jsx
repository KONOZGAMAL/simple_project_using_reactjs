import {React , useState} from 'react';
import Style from './ComponentGallery.module.css';
import Data from './Datagall';
import ComponentImg from './ComponentImg';
import Effect from './Effect';

export default function Parentgallery() {
const [show , setShow] = useState(null)
  return (
    <div className={Style.parent}>
        <h3>ResponsiveMediaGallery</h3>
        <div className={Style.p}>
            {
                Data.map((e)=>(
                    <div className={Style.gallery} key={e.id} onClick={()=>(setShow(e))}>
                        <ComponentImg srcImg = {e}/>
                    </div>
                ))
            }
        </div>
        {
            show?<Effect onlyImg = {show} setShow={setShow}/> : ''
        }
    
    </div>
  )
}
