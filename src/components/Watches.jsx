import React from "react";

export const Watches = ({title,price,category,desc})=>{
    return(
        
        <div className="sub">
            <h3>{title}</h3>
        <h5>{category}</h5>
        <h3>{price}</h3>
        <p> {desc} </p>
        </div>
    )
}