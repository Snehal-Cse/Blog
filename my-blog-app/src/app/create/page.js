"use client"
import React from "react"
export default function Page(){
    const [topic, setTopic] = React.useState();
    const [about, setAbout] = React.useState();
    const [content, setContent] = React.useState();
   const [bgColor, setBgColor] = React.useState();
     function submitBlog(){
        fetch("http://localhost:3001/blog",{
            method:'POST',
             headers:{
            'Content-Type': 'application/json'
             },
             body:JSON.stringify({
                bgColor,
                topic,
                about,
                content
             })
        })
        .then((res)=>res.json())
        .then((data)=>alert(data.message))
        
    }
     
    
    return(
    <div className = "h-screen w-screen flex flex-col justify-center  pt-12 gap-4 px-12 items-center">
        <div className="flex flex-col w-[180vh]  h-[75vh]  bg-orange-100 rounded-md p-8 resize-none text-2xl font-semibold outline-none gap-y-3 ">
            <input type = "color" className = "resize-none flex flex-row rounded p-2 outline-none "  value={bgColor}
            onChange = {(e)=>{setBgColor(e.target.value)}} />
            <input type="text" className = "resize-none flex flex-row rounded p-2 outline-none " placeholder="Write topic" value={topic} onChange={(e)=>{setTopic(e.target.value)}}  />
             <textarea className = " h-1/4  resize-none flex flex-row rounded p-2 outline-none"
               placeholder = "Mention details"
               value={about}
                onChange={(e)=>{setAbout(e.target.value)}}
               />
                <textarea className = " h-1/2 w-full resize-none flex flex-row rounded p-2 outline-none"
               placeholder = "Create New Blog"
               value={content}
                onChange={(e)=>{setContent(e.target.value)}}
               />
               
               </div>
               <div className = "flex flex-row justify-center "><button type = "submit" onClick = {submitBlog} className = "bg-neutral-700 text-white font-bold px-8 py-4">SUBMIT</button></div>
    </div>
    )
}