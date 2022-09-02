import Login from '../components/Home/login'
import Link from "next/link"
import SignUp from '../components/Home/signUp'

export default function Home() {
  return (
    <div>
      <h1>Enter the noise</h1>
      <Login />
      <SignUp/>
    </div>
  )
}
