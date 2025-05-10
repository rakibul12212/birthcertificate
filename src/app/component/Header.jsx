"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-10">
      <Link href="/" className="text-2xl font-bold text-white">
        Identity.
      </Link>

      <div className="hidden md:flex space-x-6">
        <Link href="/getAllUser" className="text-gray-300 hover:text-blue-600">
          All User
        </Link>
        <Link
          href="/addUserDetails"
          className="text-gray-300 hover:text-blue-600"
        >
          Create User
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <RxCross1 size={24} className="text-white" />
          ) : (
            <IoMenu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full h-screen bg-white shadow-md flex flex-col items-left  space-y-6 py-4 px-5 md:hidden">
          <Link
            href="getAllUser/"
            className="text-gray-600 hover:text-blue-600"
          >
            All User
          </Link>
          <Link
            href="/addUserDetails"
            className="text-gray-600 hover:text-blue-600"
          >
            Create User
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
