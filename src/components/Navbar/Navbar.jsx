// import { useContext } from "react";
// import { CurrencyContext } from "../../context/CurrencyContext";
import { useNavigate } from 'react-router-dom';
import currencyStore from  '../../state/store';
import SearchBox from '../SearchBox/SearchBox';
import xmark from "../../assets/xmark.svg"
import { useState } from 'react';
import ThemeSwapBtn from '../ThemeSwapBtn/ThemeSwapBtn';
function Navbar() {

    const { setCurrency } = currencyStore();
    const navigate = useNavigate();
    let [searchBox, setSearchBox] = useState(false);

    function goToHome() {
        navigate('/');
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start gap-1">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li ><a onClick={() => setCurrency('inr')}>INR</a></li>
                    <li ><a onClick={() => setCurrency('usd')}>USD</a></li>
                </ul>
                </div>
                <ThemeSwapBtn/>
            </div>
            <div onClick={goToHome} className="navbar-center">
                <a className="btn btn-ghost text-base md:text-xl">Crpto Tracker</a>
            </div>
            <div className="navbar-end flex gap-1 md:gap-4">
            {searchBox && <SearchBox/>}
                <div className='grid place-content-center md:p-2'>
                <button className="btn btn-ghost btn-circle" onClick={()=> {setSearchBox(!searchBox)}}>
                {!searchBox ? <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                : <img className='h-[60%] w-[60%]' src={xmark}></img>
                }
                </button>
               
                </div>
            </div>
        </div>
    )
}

export default Navbar;