import React from 'react'
const  Card =(Props:any)=> {
  return (
    <div style={{border: "1px solid yellow", padding: "10px",
     margin: "15px",backgroundColor:"skyblue",fontSize:"20px",
     fontStyle:"italic",textDecoration:"underline"}} >
        <h1 style={{color:"brown",fontFamily:"fantasy"}}>
            Name:  {Props.Name}
        </h1>
        <h1 style={{color:"red",fontFamily:"fantasy"}}>
            Age:  {Props.Age}
        </h1>
        
        <h1 style={{color:"green",fontFamily:"fantasy"}}>
            RollNo:  {Props.RollNo}
        </h1>
        <h1 style={{color:"purple",fontFamily:"fantasy"}} >
            Day: {Props.Day}
        </h1>
        
        <h1 style={{color:"orange",fontFamily:"fantasy"}}>
            Email:   {Props.Email}
        </h1>
      
    </div>
  )
}

export default Card