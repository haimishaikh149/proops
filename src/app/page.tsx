
import Card from "../../components/Card"
export default function Home() {
  return (

    <div >
     <div style={{textDecoration:"underline",fontStyle:"italic",fontSize:"40px",backgroundColor:"yellow",fontFamily:"fantasy"}}>
       <center> <h1 >STUDENT ID CARD</h1></center></div>
       <Card  Name="Zoni"Age="20"RollNo="4544"Day="friday"Email="zonishaikh149@gmail.com"/><br/>
       <div style={{textDecoration:"underline",fontStyle:"italic",fontSize:"30px",backgroundColor:"yellow",fontFamily:"fantasy"}}>
         <center> <h1 >STUDENT ID CARD</h1></center></div>
      <Card Name="haimi"Age="20"RollNo="4500"Day="saturday"Email="haimishaikh145@gmail.com"/><br/>
      <div style={{textDecoration:"underline",fontStyle:"italic",fontSize:"30px",backgroundColor:"yellow",fontFamily:"fantasy"}}>
         <center> <h1 >STUDENT ID CARD</h1></center></div>
      <Card Name="lumi"Age="20"RollNo="2728"Day="sunday"Email="lumishaikh146@gmail.com"/><br/>
      </div>
      
    
    
  );
}