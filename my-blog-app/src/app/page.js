"use client"
import React from "react"
import Data from './data'
import Card from './card'
export default function Page(){
  const [blogs,setBlogs] = React.useState([])
  React.useState(()=>{
    fetch("http://localhost:3001/blogs",{
      method : 'GET',
      headers:{
        'Content-Type': 'application/json'
        }
    })
    .then((res)=>res.json())
    .then((data)=>setBlogs(data.blogs))
  },[])

  const information = blogs.map((item)=>{
    return (
      <Card  
       bgColor = {item.bgColor}
       topic = {item.topic}
       about = {item.about}
       content = {item.content} />
    )
  })
  return (
   <div className = "max-w-full h-4/5 flex flex-col p-8 gap-y-8 ">
    <h1 className = "flex font-extrabold font-sans justify-center text-4xl ">BLOGS</h1>
    {information}
   </div>
  )
}