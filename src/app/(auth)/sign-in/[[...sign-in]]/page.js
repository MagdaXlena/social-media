'use client'

import { SignIn } from '@clerk/nextjs';
import Typewriter from 'typewriter-effect';


export default function Page() {

  return (
    <div className="flex flex-col p-3 justify-center items-center ">
      <div className="p-12 text-center text-6xl m-0 text-orange-500 ">
          <h1 className="font-sans">
            <Typewriter
              options={{
              strings: ['Welcome To Social Network'],
              autoStart: true,
              loop: true,
              }}
/>
          </h1>
          </div>
        <SignIn />
        
    </div>
  )
}