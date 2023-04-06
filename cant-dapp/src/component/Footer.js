import React from 'react'
import { NavLink } from 'react-router-dom'
import merake from '../asset/merake.png'
import { FaTwitter, FaEthereum } from 'react-icons/fa'


function Footer() {
    
    return(
        
<footer className="p-4 bg-purple-300 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between">
        <NavLink  className="flex items-center mb-4 sm:mb-0">
            <img src={merake} className="h-12 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Merakee Hive</span>
        </NavLink>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <NavLink exact to='/' className="mr-4 hover:underline md:mr-6 "><FaTwitter className='h-10 w-10 mr-6'/></NavLink>
            </li>
            <li>
                <NavLink exact to='/' className="mr-4 hover:underline md:mr-6"><FaEthereum className='h-10 w-10 mr-6' /></NavLink>
            </li>
           
            <li>
                <NavLink exact to='/' className="hover:underline"><FaTwitter className='w-10 h-10 mb-4'/></NavLink>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 3 <NavLink exact to='/' className="hover:underline">Hopewell™</NavLink>. All Rights Reserved.
    </span>
</footer>

    )
}

export default Footer;