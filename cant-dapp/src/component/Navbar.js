import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import merake from '../asset/merake.png';
import accountContext from './context';
import { Home } from './pages/Home';


function Navbar() {


  const [account, setAccount] = useState('');
const [provider, setProvider] = useState(null);

  const initConnection = async () => {
    if(typeof window.ethereum !== "undefined"){
      console.log("you have metamask");
   const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
     });
    // const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
     //setProvider(tempProvider);
     setAccount(accounts[0]);  //[0]
     console.log(accounts);
    }
    else {
      console.log('please install metamask');
      return (
        <div>Install metamask</div>
      )
    }
    
  };

    return(
          <accountContext.Provider value={account}>
 <nav  className="flex overflow-hidden bg-purple-300 px-2 sm:px-4 py-2.5 dark:bg-gray-900 relative w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div  className="container flex flex-wrap items-center justify-between mx-auto">
  <NavLink exact to="/" className="flex items-center">
      <img src={merake} className="mr-3 h-12" alt="Flowbite Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Merakee Hive</span>
  </NavLink>
  <div className="flex md:order-2">
    {account === "" ? 
      (<button type="button" onClick={initConnection} className="text-white bg-purple-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connect Wallet</button>)
      :
     ( ( <div className="text-white bg-purple-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><p className="button">{account.substring(  0, 6 )}...{account.substring( 42, 36 )} </p></div> ) )
    }
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-purple dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NavLink exact to="/" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink exact to="/about"  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
      </li>
      <li>
        <NavLink exact to="/details" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Details</NavLink>
      </li>
      <li>
        <NavLink exact to="/map" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Map</NavLink>
      </li>
      <li>
        <NavLink exact to="/faq" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FAQ</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

</accountContext.Provider>
    )
}

export default Navbar;