import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <div className="w-full flex">
        <div className="logo flex w-1/4 justify-center align-middle font-bold">
            <span className='text-3xl m-8 p-2'>Empawar</span>
        </div>
        <div className="search w-2/4 flex justify-center align-middle items-center font-normal">
            <div className="flex w-full m-8 bg-gray-100 rounded-l"> 
                <input type="search" className='w-full p-2 outline-none' placeholder="Search your Product" />
                <FontAwesomeIcon className='p-4' icon={faSearch}></FontAwesomeIcon>
            </div>  
        </div>
        <div className="w-1/4 flex justify-center items-center font-medium">
            <ul> 
                <li className="float-left p-2">My Account</li>
                <li className="float-left p-2"> 
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> (0)
                </li>
            </ul>
        </div>
    </div>
  )
}
