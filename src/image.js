import React, { useState } from 'react';
import "./App.css"
// import {data} from "./data"
import "./image.css";
//import { IconName } from "react-icons/bs";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs';


const Image = ({data})=>{
    console.log(data)
    const[slide,setSlide]=useState(0);

    const nextslide = () =>{
   setSlide (slide === data.length -1 ? 0 : slide + 1);
    }
    const previousslide =()=>{
setSlide(slide === 0 ? data.length -1 : slide-1)
    }
    
return(
<div className="image">
    <BsArrowLeftCircleFill  className='arrow arrow-left'onClick={previousslide}/>

{data.map((item,index)=>{
    return(
    <img src={item.src} alt={item.alt} key={index} className={slide === index ? "slide" : "slide slide-hidden"}/>
    )
})
}
    <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextslide}/>
    <span className='indicators'>
        {data.map((item,index)=>{
            return ( 
            <button key={index} onClick={()=>setSlide(index)} className={slide === index ? "indicator" : "indicator indicator-inactive"}></button> 
            );
        })}
    </span>
</div>

    )
}
export default Image