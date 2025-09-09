'use client'
import styles from '../home/home.module.css';
import Header from '../components/Header';
import User1 from '../user1/page';
import User2 from '../user2/page';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { useEffect } from 'react';


export default function HomePage() {
  const router = useRouter();
  useEffect(()=>{
    const token = getCookie('userData');
    console.log("Hvvjbdhk" ,token)
   

    if(!token){
      router.push('/login')
    }
  },[router]) 


  return (
    <>

    <Header/>
    <div className={styles.container}>
      <div className={styles.aside}>
         <Link href="/user1" className={styles.button}>User1</Link><br/> <br/> <br/>
         <Link href="/user2" className={styles.button}>User2</Link>
         </div>
      <div className={styles.section}></div>
     
    </div> 
    </>
  );
}




