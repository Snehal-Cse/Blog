"use client"
import React from "react"
export default function Page(){
    const [content,setContent] = React.useState({
        writing :""
    })
    function handleChange(e){
        const [name,value] = e.target
         setContent((prev)=>{
            return {
                ...prev,
                [name]:value
            }
         })
    }
    return(
    <div className = "h-screen w-screen flex flex-col justify-center pt-12 gap-4">
        <div className="flex flex-row px-8 h-[80vh] "> <textarea className = " h-full w-full bg-orange-200 rounded-md p-8 resize-none text-2xl font-semibold outline-none "
               placeholder = "Create New Blog"
               name = "writing"
               value = {content.writing}
               onChange = {handleChange}
               /></div>
               <div className = "flex flex-row justify-center "><button type = "submit" className = "bg-neutral-700 text-white font-bold px-8 py-4">SUBMIT</button></div>
    </div>
    )
}