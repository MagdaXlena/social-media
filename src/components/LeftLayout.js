import React from 'react';
import { GrBlockQuote } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { IoHomeSharp } from "react-icons/io5";
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, RedirectToSignIn } from "@clerk/nextjs"


export default function LeftLayout() {
  return (
    <div className='flex flex-col gap-4 p-3'>
        <Link href='/'>
            <GrBlockQuote className='w-20 h-20 cursor-pointer bg-gray-50 rounded-full text-black p-3' />
        </Link>
        <Link className='flex flex-row pt-8 gap-3' href='/'>
            <IoHomeSharp className='' />
            <span className="font-bold hidden xl:inline">Home</span>
        </Link>
        <Link className='flex flex-row gap-3' href='/profile'>
            <CgProfile />
            <span className="font-bold hidden xl:inline">My Profile</span>
        </Link>
        <button className='bg-orange-500 text-black p-3 mb-5 rounded-full w-60 absolute bottom-0 left-0'>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedOut>

                  <RedirectToSignIn />
        <SignInButton />
        </SignedOut>
      </button>
    </div>
  )
}

