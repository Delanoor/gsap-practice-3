import Link from "next/link";
import React from "react";

function Menu() {
  return (
    <div className="hamburger-menu z-[9] top-0 left-0 right-0 bottom-0 fixed h-full w-full">
      <div className="menu-secondary-background-color top-0 left-0 right-0 bottom-0 fixed h-full w-full bg-[#121212] z-[-1]"></div>
      <div className="menu-layer relative bg-[#e20001] h-full overflow-hidden">
        <div className="menu-photo-background top-0 left-0 right-0 bottom-0 absolute h-full w-full opacity-0"></div>
        <div className="container">
          <div className="wrapper relative">
            <div className="menu-links flex justify-between items-center relative top-[200px]">
              <nav className="block">
                <ul className="p-0 m-0">
                  <li className="text-[6rem] font-[700] h-[135px] w-[700px] relative overflow-hidden">
                    <Link
                      className="absolute text-white hover:text-black"
                      href={"/second"}
                    >
                      Second
                    </Link>
                  </li>
                  <li className="text-[6rem] font-[700] h-[135px] w-[700px] relative overflow-hidden">
                    <Link
                      className="absolute text-white hover:text-black"
                      href={"/third"}
                    >
                      Third
                    </Link>
                  </li>
                  <li className="text-[6rem] font-[700] h-[135px] w-[700px] relative overflow-hidden">
                    <Link
                      className="absolute text-white hover:text-black"
                      href={"/fourth"}
                    >
                      Fourth
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="info text-white w-[300px]">
                <h3 className="text-[1.2rem] my-[8px]">Our Promise</h3>
                <p className="mx-auto text-[0.8rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  sed nam illum repellat ab consequuntur quo veniam inventore
                  quidem necessitatibus!
                </p>
              </div>
              <div className="locations absolute bottom-[-80px] text-white mt-4 text-[0.8rem] font-[600]">
                Recent:
                <span className="font-[400] cursor-pointer mx-8 duration-300 ease-in-out first:left-16 py-2 px-6 rounded-[4px] hover:bg-black">
                  Album 1
                </span>
                <span className="font-[400] cursor-pointer mx-8 duration-300 ease-in-out hover:py-2 hover:px-6 hover:rounded-[4px] hover:bg-black">
                  Album 2
                </span>
                <span className="font-[400] cursor-pointer mx-8 duration-300 ease-in-out hover:py-2 hover:px-6 hover:rounded-[4px] hover:bg-black">
                  Album 3
                </span>
                <span className="font-[400] cursor-pointer mx-8 duration-300 ease-in-out hover:py-2 hover:px-6 hover:rounded-[4px] hover:bg-black">
                  Album 4
                </span>
                <span className="font-[400] cursor-pointer mx-8 duration-300 ease-in-out hover:py-2 hover:px-6 hover:rounded-[4px] hover:bg-black">
                  Album 5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
