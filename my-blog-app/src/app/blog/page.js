"use client"
import React from "react"
import { useSearchParams } from "next/navigation"
import data from "../data";

export default function Page(){
    const searchParams = useSearchParams()
    const [blog,setBlog] = React.useState();
    React.useEffect(()=>{
    setBlog(data.find((item)=>{
         return  item.topic===searchParams.get("topic")
        }))
    },[searchParams])
    return(
        <div className = "w-screen min-h-screen pt-12 flex flex-col justify-center items-center p-4">
       <div className = " flex flex-col justify-center items-center w-9/12 p-10 rounded-md " style = {{backgroundColor: blog?.bgColor}}>
            <h1 className = "font-bold text-2xl pb-4 ">{blog?.topic}</h1>
            <p className = "text-lg">{blog?.about}</p>
       </div>
       </div>
    )
}