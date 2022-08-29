import Login from '../components/login'
import Link from "next/link"
import SignUp from '../components/signUp'


export default function Home() {
  return (
    <div>
      <h1>Enter the noise</h1>
      <Login />
      <SignUp/>
    </div>
  )
}
