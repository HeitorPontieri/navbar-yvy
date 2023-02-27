import './style.css'
import { Component } from 'react'






export const MainCard = ({name,img}) =>{

return(
    <>
        
        <div className="mainCard-container">
            
            <img src={img} alt="" />
            <p className="text">{name}</p>

           
            <img src={img} alt="" />
            <p className="text">{name}</p>

           
            <img src={img} alt="" />
            <p className="text">{name}</p>

            
            <img src={img} alt="" />
            <p className="text">{name}</p>
        </div>
    
    
    </>
)

}

