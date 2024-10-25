import React, { useState } from "react";
import Logo from "./logo";
import { Menu, Search } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

interface Navbar {
  onMenuClick: () => void;
}
const Navbar = ({ onMenuClick }: Navbar) => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between gap-4 p-4 sticky top-0 z-[50] bg-bgSecondary md:bg-bgprimary border-b-[1px] border-b-slate-700">
      <Logo onlyLogo className="md:hidden" />

      <div className="hidden sm:flex items-center bg-bgprimary px-4 rounded-full md:bg-bgSecondary ">
        <input
          type="text"
          placeholder="Search here"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="bg-transparent h-10 outline-none border-none w-full text-sm"
        />
        <Search
          className={`transition-all ${focus ? "text-white" : "text-gray-500"}`}
        />
      </div>
      <div className="flex justify-end items-center gap-3">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <div className="flex items-center gap-3">
            <Link
              to={`/signin`}
              className="bg-bgSecondary py-2 px-4 rounded-md text-sm cursor-pointer"
            >
              Sign In
            </Link>
            <Link
              to={`/signup`}
              className="bg-primary py-2 px-4 rounded-md text-sm cursor-pointer"
            >
              Register
            </Link>
          </div>
        </SignedOut>
        <div
          onClick={onMenuClick}
          className="flex items-center justify-center size-10 bg-bgsecondary cursor-pointer rounded-md md:hidden"
        >
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
