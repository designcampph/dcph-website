import React from "react"
import logo from "../assets/logo.png"
import { SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/clerk-react";
import { Link } from "react-router-dom";


const Navlogin = () => {
    
    return (
    <div>
        <div className="flex visible my-0 pt-0 z-10 sticky mx-14 mt-4 h-24 bg-white bg-opacity-75 drop-shadow-lg backdrop-blur-lg rounded-full sm:mx-2" >
            <div className="flex mt-2 ml-8 h-18 w-36 my-0">
                <img className="my-6 z-10" src={logo} />
            </div> 
            <div className="flex grow justify-center content-stretch my-auto sm:mx-2 md:mx-4 z-0">
            </div>
            <div className="flex w-60 h-24 float-right z-0">
                <div className="text-orange-500 font-bold pt-10 ml-24 hover:text-blue-700 hover:text-underline">
                <SignedOut>
                    <SignInButton forceRedirectUrl={'/dashboard'}/>
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
                </div>
            </div>
        </div>
    </div>
  ); 
} ;

export default Navlogin;
