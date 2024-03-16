import { IoSearchOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";


export default function SearchBar() {
  return (<>
  
      <div className=" max-w-96 w-full flex content-center justify-center gap-3">
          <form className="bg-white gap-2 border w-full rounded-md">
       	  	<input type='text' placeholder='Search user' className=' focus:outline-none max-w-80 h-10 ml-2' />
               <span className="m-2"><button ><IoSearchOutline /></button></span>
          </form>
          <span className="flex content-center justify-center p-2"><button><TiThMenu /></button></span>
          
      </div>
</>)
}
