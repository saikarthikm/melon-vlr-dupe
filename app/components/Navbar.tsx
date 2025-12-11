import Image from "next/image";
import logo from "@/public/logo_header.png";

function Navbar() {
  return (
    <header className="bg-nav border border-border p-2.5">
      <nav className="mx-55 flex justify-between px-5">
        <div className="flex gap-10 px-5">
          <Image src={logo} alt={"Logo"} height={40} quality={80}></Image>
          <input className="border border-border"></input>

          <ul className="flex gap-5">
            <li>Forums</li>
            <li>Matches</li>
            <li>Events</li>
            <li>Rankings</li>
            <li>Stats</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>Night Mode & Spoilers</li>
            <li>Profile</li>
            <li>Inbox</li>
            <li>Dropdown</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
