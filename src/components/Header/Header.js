import Logo from '../Resources/logo.png'
import React from 'react'
import { Link , NavLink } from 'react-router-dom';

function Header() {


  const activeClass = 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500';

  const inActiveClass = 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';


  return (
    <div className='pb-6'>
    
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="/" className="flex items-center">
      <img src={Logo} alt="" width={130}/>
      
  </Link>
  <div className="flex md:order-2">
      <Link to='/Login'>
      <button type="button" className="text-white bg-gray-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-dark-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i className="fa-solid fa-user"></i> LOGIN</button>
      </Link>
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NavLink to="/" className={({isActive}) => isActive ? activeClass : inActiveClass}  end >Home</NavLink>
      </li>
      <li>
        <NavLink to="/AboutUs" className={({isActive}) => isActive ? activeClass : inActiveClass}>About</NavLink>
      </li>
      <li>
        <NavLink to="/OurTeam" className={({isActive}) => isActive ? activeClass : inActiveClass}>Our Team</NavLink>
      </li>
      <li>
        <NavLink to="/Contact" className={({isActive}) => isActive ? activeClass : inActiveClass}>Contact Us</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

</div>
  )
}

export default Header;

// import React from 'react'

// function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header