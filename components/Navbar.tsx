import React, { useCallback, useEffect, useState } from 'react';
import { BellIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import AccountMenu from '@/components/AccountMenu';
import MobileMenu from '@/components/MobileMenu';
import NavbarItem from '@/components/NavbarItem';

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const { data: session } = useSession();

  const isAuthenticated = session?.user;


  return (
    <>
    {
      isAuthenticated ?
      <nav className="w-full">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center`}>
        <img src="/images/logo.png" className="h-4 lg:h-7" alt="Logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" active />
          {/* <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" /> */}
          <NavbarItem label="My List" />
          {/* <NavbarItem label="Browse by Languages" /> */}
        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer z-10">
          <p className="text-white text-sm">Browse</p>
          <ChevronDownIcon className={`w-4 text-white fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <MagnifyingGlassIcon className="w-6" />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BellIcon className="w-6" />
          </div>
          <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer z-10">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="" />
            </div>
            <ChevronDownIcon className={`w-4 text-white fill-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
      </nav>
    : 
    <nav className="w-full items-center">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center justify-between`}>
      <img src="/images/logo.png" className="h-4 lg:h-7" alt="Logo" onClick={() => router.push('/homepage')}/>
      <div className="inline-flex ml-8 gap-7">
          <select className='bg-transparent text-white w-[100px] border border-gray-400 rounded-[5px]'>
            <option value="1" className='text-black'>English</option>
            <option value="2" className='text-black'>Hindi</option>
          </select>
          <button onClick={() => router.push('/auth')} className='bg-red-800 text-white rounded-md px-3 py-1 font-semibold'>Sign In</button>
        </div>
      </div>
    </nav>
    }
    </>
  )
}

export default Navbar;
