import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`flex flex-col h-screen ${open ? "w-62" : "w-20 "} bg-teal-700 h-screen p-5  pt-8 relative duration-300`}>
      <img
        src="control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
            border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="logo.png"
          className={`cursor-pointer duration-500 ${open && "rotate-[90deg]"}`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
            }`}
        >
          FNB-MCPC
        </h1>
      </div>
      <ul className="pt-6">
        <li
          className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2`}
        >
          <img src="Chart_fill.png" />
          <Link className={`${!open && "hidden"} origin-left duration-200`} to="/">Service Requests</Link>
        </li>
        <li
          className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-9`}
        >
          <img src="User.png" />
          <Link className={`${!open && "hidden"} origin-left duration-200`} to="/inbox">Assets</Link>
        </li>
        {/* Other sidebar items */}
        {/* <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2`}
            >
              <img src="User.png" />
              <Link className={`${!open && "hidden"} origin-left duration-200`} to="/accounts">Assets</Link>
            </li>
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2`}
            >
              <img src="Calendar.png" />
              <Link className={`${!open && "hidden"} origin-left duration-200`} to="/schedule">Schedule</Link>
            </li>
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2`}
            >
              <img src="Search.png" />
              <Link className={`${!open && "hidden"} origin-left duration-200`} to="/search">Search</Link>
            </li>
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2`}
            >
              <img src="Chart.png" />
              <Link className={`${!open && "hidden"} origin-left duration-200`} to="/analytics">Analytics</Link>
            </li>
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-9`}
            >
              <img src="Folder.png" />
              <Link className={`${!open && "hidden"} origin-left duration-200`} to="/files">Files</Link>
            </li> */}
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2`}
            >
              <img src="Setting.png" />
              <Link className={`${!open && "hidden"} origin-left duration-200`} to="/settings">Settings</Link>
            </li>
      </ul>
    </div>
  );
};

export default Sidebar;
