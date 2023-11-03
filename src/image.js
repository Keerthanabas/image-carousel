import React from 'react';
// import {data} from "./data"
import "./image.css";
//import { IconName } from "react-icons/bs";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'bootstrap-icons/react';


const Image = ({data})=>{
    console.log(data)
return(
<div className="image">
    <BsArrowLeftCircleFill/>

{data.map((item,index)=>{
    return(
    <img src={item.src} alt={item.alt} key={index} className="slide"/>
    )
})
}
    <BsArrowRightCircleFill/>
</div>

    )
}
export default Image