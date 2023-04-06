import React from "react";
import { useContext } from "react";
import accountContext from "../context";


export const Home = () => {
    
        // const accounts = useContext(accountContext);
        // if (accounts !== '') {
        //     return (
        //         <div>home</div>
        //     )
        // } else
        // {
        //     return(
        //         <div>connect wallet</div>
        //     )
        // }
    

    return(
        <div className="h-screen bg-purple-900 ">
            <div className="grid content-end p-8 place-items-center h-screen">
                <div className="h-full bg-purple-300 justify-center">
                    <p>3333 supply</p>
                </div>
            <button onClick={Home} type="button" class="text-white h-20 w-80 justify-self-auto bg-purple-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 mr-2 mb-14 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none font-black text-2xl dark:focus:ring-blue-800">MINT NOW</button>
            </div>
        </div>
    )
}