import Login from '../components/Home/login'
import SignUp from '../components/Home/signUp'
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Welcome to the WallApp!</h1>
      <h2>Enter the noise...</h2>
      <Login />
      <SignUp/>
    </div>
  )
}
