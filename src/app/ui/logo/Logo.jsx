import Link from "next/link"
import styles from "./Logo.module.css"
const Logo = () => {
  return (
    <div>
      <Link href="/" className={styles.logo}>HEXASHOP</Link>
      
    </div>
  )
}

export default Logo
