import { BsThreeDotsVertical as Dots} from "react-icons/bs";

const DropdownButton = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
    <div tabIndex={0} role="button" className=" m-1"><Dots className='text-black font-medium w-5 h-5'/></div>
    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a></a></li>
      <li><button>see all users</button></li>
    </ul>
   </div>
  );
}

export default DropdownButton;
