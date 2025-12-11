import Image from "next/image";
import logo from "@/public/logo_header.png";

function Navbar() {
  return (
    <header className="bg-nav border-b border-border">
      <nav className="flex items-center h-14 mx-45">
        <div className="flex items-center border-r border-border px-4 gap-4">
          <Image
            src={logo}
            alt={"Logo"}
            height={38}
            className="cursor-pointer"
          />
          <input
            placeholder="Search..."
            className="bg-panel border border-border h-9 w-72 px-3 text-sm"
          ></input>
        </div>

        <ul className="flex items-center gap-2 text-xs">
          <li className="hover:text-white hover:cursor-pointer border-r border-border px-3">
            Forums
          </li>
          <li className="hover:text-white hover:cursor-pointer border-r border-border px-3">
            Matches
          </li>
          <li className="hover:text-white hover:cursor-pointer border-r border-border px-3">
            Events
          </li>
          <li className="hover:text-white hover:cursor-pointer flex flex-col items-center gap-1 border-r border-border px-3">
            <span className="bg-red-600 text-white text-[8px] leading-none !important px-1 py-px rounded">
              BETA2
            </span>
            Rankings
          </li>
          <li className="hover:text-white hover:cursor-pointer border-r border-border px-3">
            Stats
          </li>
        </ul>

        <ul className="flex justify-end items-center gap-3 px-2 text-xs ml-30">
          <li className="flex flex-col items-center hover:cursor-pointer border-r border-l border-border px-3">
            Night<span className="text-green-400 text-[10px]">ON</span>
          </li>
          <li className="flex flex-col items-center w-full hover:cursor-pointer border-r border-border pr-3">
            ! Spoilers:
            <span className="text-green-400 text-[10px] pl-1">ON</span>
          </li>
          <li className="w-10 h-10  border-r border-border pr-3 flex items-center justify-center hover:cursor-pointer">
            Profile
          </li>
          <li className="w-10 h-10 border-r border-border pr-3 flex items-center justify-center hover:cursor-pointer">
            Inbox
          </li>
          <li className="w-10 h-10 border-r border-border pr-3 flex items-center justify-center hover:cursor-pointer">
            Menu
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
