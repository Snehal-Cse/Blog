import { FaLongArrowAltRight } from "react-icons/fa";
export default function card(props){
    return(
        <div className = "p-4 rounded-lg flex flex-col justify-center align-center " style = {{backgroundColor : props.bgColor }}>
       <div className="flex flex-col "> <h1 className = "font-bold pb-1.0 text-2xl">{props.topic}</h1>
        <h4 className = "text-lg">{props.content}</h4></div>
       <div className = "flex justify-end"> <a href = {"/blog?topic="+props.topic}><FaLongArrowAltRight /></a></div>
       </div>
    )
}