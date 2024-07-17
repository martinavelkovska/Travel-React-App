import React from "react";

const Header = () => {
  return (
    <header className="bg-transparent z-10 absolute  left-0 bg-gradient-to-t from-transparent w-full to-neutral-600 to-100%">
      <nav className="flex flex-wrap content-stretch justify-between bg-transparent top-3 mt-3">
        <p className="font-bold ml-6 text-white text-3xl ">Travel io.</p>
        <ul className="flex-row space-x-3 mr-10 b-0  ">
          <li className="text-white font-normal text-xl  space-x-10 ">
            <a
              href="#"
              className="border-b-2 hover:bg-neutral-700 hover:bg-opacity-25 text-white px-2 py-1 hover:rounded-md "
            >
              Home
            </a>
            <a
              href="#"
              className="hover:bg-neutral-700 hover:bg-opacity-25 text-white px-2 py-1 rounded-md"
            >
              Discover
            </a>
            <a
              href="#"
              className="hover:bg-neutral-700 hover:bg-opacity-25 text-white px-2 py-1 rounded-md"
            >
              {" "}
              About Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
