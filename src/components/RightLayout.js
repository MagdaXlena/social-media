'use client'

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs"

export default function RightLayout() {
    const [input, setInput] = useState('')
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!input.trim()) return
        router.push(`/search/${input}`);
        }
  return (
    <>
    <div className='absolute top-0 right-0 m-5' >   
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </div> 
    <div className=''>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Search' className='bg-white text-black p-3 rounded-full w-60 absolute bottom-0 right-0' value={input} onChange = {(e) => setInput(e.target.value)} />
        </form>
    </div>
    </>
  )
}
