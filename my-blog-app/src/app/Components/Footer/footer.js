import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex flex-row w-screen h-16 justify-center items-center font-extrabold text-base ">
      <h1 className="mr-4">~Feel Free To Reach Out To Us~</h1>
      <div className = "w-16 flex flex-row justify-between text-lg">
      <FaInstagramSquare />
      <FaLinkedin />
      <FaSquareWhatsapp />
      </div>
    </div>
  );
}
