import React,{useState} from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";



const Navigation = () => {

    const [nav,setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

    const { user} = useUser();


    return (
    <div>
        <div className={!nav ? "fixed left-0 top-0 z-20 w-[25%] h-full bg-white bg-opacity-80 rop-shadow-lg backdrop-blur-lg ease-in-out duration-500 visible lg:hidden xl:hidden 2xl:hidden" : "fixed left-[-100%] z-20 ease-in-out duration-500"}>
            <div className="flex-none mt-4 ml-6 h-18 w-32 my-0 static">
                <img className="my-6" src={logo} />
            </div> 
            <div className="ml-[32%] ">
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <Link to='/home'></Link>
                </SignedOut>
            </div>
            <h1 className="ml-[18%] sm:text-sm sm:ml-[10%]">{user?.firstName}</h1>
            <ul className="mt-32 p-4 fixed">
                <li className="mx-4 mb-12 border-b-2 border-gray-500 hover:border-orange-400 hover:text-orange-400 sm:text-md sm:mx-0" ><Link to='/dashboard'>Dashboard</Link></li>
                <li className="mx-4 mb-12 border-b-2 border-gray-500 hover:border-orange-400 hover:text-orange-400 sm:text-md sm:mx-0" ><Link to='/courses'>FREE Courses</Link></li>
                <li className="mx-4 mb-12 border-b-2 border-gray-500 hover:border-orange-400 hover:text-orange-400 sm:text-md sm:mx-0" ><Link to="/webinars">FREE Tutorial</Link></li>
                <li className="mx-4 mb-12 border-b-2 border-gray-500 hover:border-lime-300 hover:text-cyan-400 sm:text-md sm:mx-0" ><Link to="/expert">Design Courses</Link></li>
            </ul>
        </div>

        <div className="flex visible my-0 pt-0 z-10 sticky mx-14 mt-4 h-24 bg-white bg-opacity-75 drop-shadow-lg backdrop-blur-lg rounded-full sm:mx-2" >
            <div className="flex mt-2 ml-8 h-18 w-36 my-0">
                <img className="my-6 z-10" src={logo} />
            </div> 
            <div className="flex grow justify-center content-stretch my-auto sm:mx-2 md:mx-4 z-0">
                <ul className="flex p-2 justify-content:center my-6">
                    <li className="mx-4 border-b-2 border-transparent visible sm:hidden md:hidden hover:border-orange-400 hover:text-orange-400" ><Link to='/dashboard'>Dashboard</Link></li>
                    <li className="mx-4 border-b-2 border-transparent visible sm:hidden md:hidden hover:border-orange-400 hover:text-orange-400" ><Link to='/courses'>FREE Courses</Link></li>
                    <li className="mx-4 border-b-2 border-transparent visible sm:hidden md:hidden hover:border-orange-400 hover:text-orange-400" ><Link to='/webinars'>FREE Tutorials</Link></li>
                    <li className="font-bold text-violet-500 mx-4 border-b-2 border-transparent visible sm:hidden md:hidden hover:border-lime-300 hover:text-cyan-400" ><Link to='/expert'>Expert Class</Link><sup className="rounded-full py-1 px-2.5 text-md bg-red-500 text-white">1</sup></li>
                </ul>
            </div>
            <div className="flex w-[15%] pl-4 h-24 float-right z-0">
                <div className="flex border-gray-400 w-12 h-8 mt-10 sm:hidden md:hidden">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <Link to='/home'></Link>
                    </SignedOut>
                </div>
                <h1 className="flex w-40 pt-11 sm:hidden md:hidden lg:hidden hover:underline">{user?.firstName}</h1>
                <div onClick={handleNav} className="w-8 h-8 mt-10 mx-4 visible lg:hidden xl:hidden 2xl:hidden sm:mt-12 sm:w-12 sm:h-12">
                    {!nav ? <img src={close} /> : <img src={menu}/>}
                </div>
            </div>
        </div>
    </div>
  )
} 

export default Navigation;
