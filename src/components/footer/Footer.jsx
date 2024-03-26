import Image from "next/image"
import styles from "./footer.module.css"
import icons from "./data"

const Footer = () => {
  return (
    <div className={styles.container}>
     <div>© 2024 Hexoshop. All rights reserved</div>
     <div className={styles.social}>
{
  icons.map((icon)=> 
  <Image src={icon.href} width={20} height={20} className={styles.icon} alt={icon.title} key={icon.id}/>
  
  )
}
     </div>
    </div>
  )
}

export default Footer
