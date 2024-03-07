import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 drop-shadow-md ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to={"/"} className="text-green text-2xl font-bold">Calorator</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex p-2 space-x-4">
              <li>
                <a href="#calculator" className="text-black text-sm font-semibold hover:text-green transition duration-300 ease-in-out">Kalori İhtiyacını Hesapla</a>
              </li> 
              <li> 
                <Link to={"/tarifler"} className="text-black text-sm font-semibold hover:text-green transition duration-300 ease-in-out">Tarifler</Link>
              </li> 
              <li> 
              <Link to={"/sss"} className="text-black text-sm font-semibold hover:text-green transition duration-300 ease-in-out">SSS</Link>
              </li> 
              <li> 
              <Link to={"/destek"} className="text-black text-sm font-semibold hover:text-green transition duration-300 ease-in-out">Destek</Link>
              </li>
            </ul>
            <button className="bg-green hover:bg-green-600 text-white  text-sm font-semibold py-2 px-4 rounded-2xl transition duration-300 ease-in-out">Kaç Kalori?</button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-green focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref} className="md:hidden mt-4 ml-4">
            <ul className="flex flex-col space-y-2">
            <li>
                <a href="#calculator" className="text-black text-sm font-semibold hover:text-green transition duration-300 ease-in-out">Kalori İhtiyacını Hesapla</a>
              </li> 
              <li> 
                <Link to={"/tarifler"} className="text-black text-sm font-semibold hover:text-green transition duration-300 ease-in-out">Tarifler</Link>
              </li> 
              <li> 
              <Link to={"/sss"} className="text-black text-sm font-semibold hover:text-green transition duration-300 ease-in-out">SSS</Link>
              </li> 
              <li> 
              <Link to={"/destek"} className="text-black text-sm font-semibold hover:text-green transition duration-300 ease-in-out">Destek</Link>
              </li>
            </ul>

          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
