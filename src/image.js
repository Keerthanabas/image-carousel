import React from 'react';
// import {data} from "./data"
import "./image.css";
//import { IconName } from "react-icons/bs";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs';
// import "bootstrap-icons/font/bootstrap-icons.css";
//import 'bootstrap/dist/css/bootstrap.min.css'


const Image = ({data})=>{
    console.log(data)
return(
<div className="image">
    <BsArrowLeftCircleFill  className='arrow arrow-left'/>

{data.map((item,index)=>{
    return(
    <img src={item.src} alt={item.alt} key={index} className="slide"/>
    )
})
}
    <BsArrowRightCircleFill className='arrow arrow-right'/>
    <span className='indicators'>
        {data.map((item,index)=>{
            return ( 
            <button key={index} onClick={null} className='indicator'></button> 
            );
        })}
    </span>
</div>

    )
}
export default Image