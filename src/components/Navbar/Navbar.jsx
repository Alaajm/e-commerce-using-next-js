"use client";
import Link from 'next/link'
import styles from "./Navbar.module.css"
import links from './data'
import Button from '../../app/ui/Button/Button';
import Logo from '@/app/ui/logo/Logo';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Logo />
      <div className={styles.links}>
        <DarkModeToggle />
       {
        links?.map((link, index)=>(
        <Link href={link.href} className={styles.link} key={link.id}>{link.title}</Link>

        ))
       }  
      <Button />

      </div>
    </div>
  )
}

export default Navbar
