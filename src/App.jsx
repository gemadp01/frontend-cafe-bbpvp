import { useState } from "react";
import "./App.css";
import { Menu } from "lucide-react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex p-4 justify-between items-center md:justify-around">
        <h1 className="text-xl font-semibold">Icon or Label</h1>

        <nav className="text-textColor-1">
          {/* Menu list (Desktop) */}
          <ul className="hidden md:flex md:space-x-4">
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
        </nav>

        {/* Hamburger (mobile) */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu />
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

        <div className="hidden md:flex">
          <a href="#">Login</a>
          <a href="#">Sign up</a>
        </div>
      </header>
      <main className="min-h-screen">
        <section
          id="section-intro"
          className="flex flex-col basis-1 md:flex-row"
        >
          <div className="order-2 md:order-1">
            <h2>Find the best coffee for you</h2>
            <h3>
              Then you are <br /> the right place.
            </h3>
            <p>
              Temukan café favorit, lihat meja yang kosong, dan cek menu yang
              lagi ready, semua dari HP kamu.
            </p>
            <a href="#">Explore Cafe</a>
          </div>
          <div className="order-1 md:order-2">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="cafe"
              />
            </figure>
          </div>
        </section>
        <section id="section-supported">
          <div>
            {/* <figure>
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="cafe"
              />
            </figure> */}
          </div>
        </section>
        <section id="section-description">
          <h2>
            Our mission is to bring <br />
            happiness to <br />
            our customers.
          </h2>
          <p>
            Kami selalu mendengarkan masukan, memperbaiki kekurangan, dan
            menghadirkan fitur-fitur baru supaya Anda bisa menikmati pengalaman
            yang lebih nyaman dan menyenangkan setiap kali menggunakan layanan
            kami.
          </p>
        </section>
      </main>
      <footer>
        <p>Made with ❤️ by Gema Dodi Pranata </p>
      </footer>
    </>
  );
}

export default App;
