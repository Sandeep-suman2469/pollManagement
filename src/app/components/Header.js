'use client';

import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  
  return (
    <>
    <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/login" className={styles.button}>Home</Link>
          <Link href="/signup" className={styles.button}>About Us</Link>
          <Link href="/" className={styles.button}>Contact</Link>
          <Link href="/login" className={styles.button}>Login</Link>
        </nav>
      </header> 
    </>
  );
}
