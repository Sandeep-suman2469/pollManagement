import Header from "./components/Header";
import Link from 'next/link';
export default function Home() {
  return (
    <>
    <header className='header'>
      <nav className='nav'>
        <Link href="/login" className='button'>Login</Link>
        <Link href="/signup" className='button'>Sign Up</Link>
        {/* <Link href="/" className={styles.button}>Logout</Link> */}
      </nav>
    </header>
    </>
  );
}
