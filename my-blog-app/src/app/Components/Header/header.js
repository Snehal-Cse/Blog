"use client"
import React from "react"
export default function Header(){
 

    return(
        <div>
            <div className = "max-w-full max-h-40 h-16 w-screen flex flex-row p-1 shadow shadow-gray-400 font-bold justify-between px-8 items-center">
            <img className = "h-18 w-20" src = "./writing.png"  />
            <ul className = " w-60 flex  justify-between cursor-pointer text-lg" >
                <a href="/"><li className =" text-zinc-950 hover:text-gray-400">HOME</li></a>
                <a href="/create">  <li className =" text-zinc-950 hover:text-gray-400">CREATE</li></a>
                <a href="/login"><li className =" text-zinc-950 hover:text-gray-400">LOGIN</li></a>
            </ul>
            </div>
        </div>
    )
}