import Data from './data'
import Card from './card'
export default function Page(){
  const information = Data.map((item)=>{
    return (
      <Card  
       bgColor = {item.bgColor}
       topic = {item.topic}
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