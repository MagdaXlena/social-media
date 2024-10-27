import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex p-3 justify-center items-center"> 
        <SignUp />
    </div>
  )
}