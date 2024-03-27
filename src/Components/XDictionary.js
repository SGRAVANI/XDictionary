import React, { useEffect, useState } from 'react'
import "./style.css"
let data=[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]

export default function XDictionary() {
let [dict,setDict]=useState(data);
let [inp,setInp]=useState()
let [definition,setDefinition]=useState("")
useEffect(()=>{
if(!inp)
{
    setDefinition("")
}
else{
    matching()
}
},[inp])
function matching()
{
    let ipWord=inp.toLowerCase()
console.log(inp)
var ele=data.find((ele)=>{return ele.word.toLowerCase()==ipWord})
console.log(ele)
if(ele)
{
setDefinition(ele.meaning)
}
else{
  setDefinition("Word not found in the dictionary.")  
}
}
function handleClick()
{
 if(!inp)
 {
    setDefinition("Word not found in the dictionary.")
 }   
 else{
matching()
 }
}
    return (
    <div className='container'>
        <h1>Dictionary App</h1>
        <div className='input-container'>
            <input type="text" placeholder='Search for a word' value={inp} onChange={(e)=>setInp(e.target.value)} />
            <button onClick={handleClick}>Search</button>
</div>
       
   <p className='definition'><strong>Definition: </strong>
    {definition?definition:null}   
   </p>


    </div>
  )
}
