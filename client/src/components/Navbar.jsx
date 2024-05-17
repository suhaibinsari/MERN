import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Navbar = () => {
  const { userIsLoggedIn } = useAuth()

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeMenu = (event) => {
      if (!event.target) return;
      if (isOpen && !((event.target).closest('.menu-container'))) {
        setIsOpen(false);
        console.log(setIsOpen)
      }
    };

    if (isOpen) {
      document.body.addEventListener('click', closeMenu);
    }

    return () => {
      document.body.removeEventListener('click', closeMenu);
    };
  }, [isOpen]);

  return (
    <nav className="bg-gray-400 font-Crafty bg-opacity-25 backdrop-filter rounded-b-3xl w-auto p-4 relative">
      <div className="container mx-auto flex justify-between text-black items-center">
        <div>
          <NavLink to="/">
            {/* <Image src={logo} width={60} height={60} alt='no-img' /> */}
            <h2 className='font-bold text-2xl'>SuhaibMern</h2>
          </NavLink>
        </div>
        <div className="hidden md:block">
          <ul className="flex lg:space-x-12 space-x-4">
            <li>
              <NavLink to="/">
                <span className=" transition-colors duration-300 hover:text-[#D94A2C] cursor-pointer">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <span className=" transition-colors duration-300 hover:text-[#D94A2C] cursor-pointer">About</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <span className=" transition-colors duration-300 hover:text-[#D94A2C] cursor-pointer">Contact</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/service">
                <span className=" transition-colors duration-300 hover:text-[#D94A2C] cursor-pointer">Service</span>
              </NavLink>
            </li>
            {userIsLoggedIn ? (<li>
              <NavLink to="/log-out">
                <span className=" transition-colors duration-300 hover:text-[#D94A2C] cursor-pointer">Logout</span>
              </NavLink>
            </li>) : (
              <>

                <li>
                  <NavLink to="/log-in">
                    <span className=" transition-colors duration-300 hover:text-[#D94A2C] cursor-pointer">Login</span>
                  </NavLink>
                </li>
              </>
            )}


          </ul>
        </div>
        <div className="md:hidden">
          <motion.button
            className=""
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <HiX className='mt-1' size={24} /> : <HiMenu className='mt-1' size={24} />}
          </motion.button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black opacity-50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
        />
      )}
      <motion.div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden fixed flex flex-col items-center justify-center top-0  left-0 rounded-r-3xl  bg-gray-800 w-3/4 h-full z-50 menu-container`}
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <ul className="flex flex-col items-center justify-center space-y-5 mt-2 p-4">
          <li>
            <NavLink to="/">
              {/* <Image src={logo} width={60} height={60} alt='no-img' /> */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <motion.button
                className=""
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Home
              </motion.button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <motion.button
                className=""
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                About
              </motion.button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <motion.button
                className=""
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contact
              </motion.button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <motion.button
                className=""
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* <Button text='Connect Wallet' width="200px" height="50px" backgroundColor="#D94A2C" img={wallet} a="https://www.google.com/" /> */}
              </motion.button>
            </NavLink>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
