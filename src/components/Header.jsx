import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-24 bg-bgColor-1 flex p-4 justify-between items-center md:justify-around">
      <h1 className="text-xl font-semibold">Icon or Label</h1>

      <nav className="text-sm text-textColor-1">
        {/* Menu list (Desktop) */}
        <ul className="hidden md:flex md:space-x-4 md:items-center md:justify-center">
          <li className="">
            <a href="#" className="text-primary font-bold ">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="md:hover:font-bold md:hover:text-primary">
              Find a Cafe
            </a>
          </li>
          <li>
            <a href="#" className="md:hover:font-bold md:hover:text-primary">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="md:hover:font-bold md:hover:text-primary">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {!open ? <Menu /> : <X />}
        </button>

        {open && (
          <ul className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 py-6 md:hidden">
            <li>
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>

      <div className="hidden md:flex md:space-x-1">
        <Button>
          <a href="#">Login</a>
        </Button>
        <Button color="secondary">
          <a href="#">Sign up</a>
        </Button>
      </div>
    </header>
  );
}

export default Header;
