"use client";
import styles from "./Button.module.css"
const Button = () => {
  return (
    <>
      <button onClick={()=> console.log("log out")} className={styles.logout}>Log out</button>
      
    </>
  )
}

export default Button
