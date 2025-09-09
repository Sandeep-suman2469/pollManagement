import Header from "./components/Header";
import Link from 'next/link';
export default function Home() {
  return (
    <>
    <header className='header'>
       <img            
            src="/logo.jpeg"
            alt="user icon"
            width="90"
            height="50"
            className="icon"
             />
      <nav className='nav'>
        <Link href="/login" className='button'>Login</Link>
        <Link href="/signup" className='button'>Sign Up</Link>
      </nav>
    </header>
    <h1 className="content">Welcome to Dashboard !!</h1>
    </>
  );
}
