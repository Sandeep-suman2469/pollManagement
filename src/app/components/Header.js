"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { getCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
export default function Header() {
  const [open, setOpen] = useState(false);

  const [userData, setUserData] = useState("");

  const router = useRouter();

  // const cookieData = (window?window.document.cookie:null)

  useEffect(() => {
    const cookieData = getCookie("userData");

    
    if (cookieData) {
      try {
        const parsedData = JSON.parse(cookieData);
        setUserData(parsedData);
        
      } catch (err) {
        console.error("Failed to parse cookie:", err);
      }
    }
   

  }, []);

  
  const handlLogout = () =>{
    
    deleteCookie("userData")
    setUserData("")
    toast.success("Logged out successfully!"); 
    router.push("/");
    }


  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img            
            src="/logo.jpeg"
            alt="user icon"
            width="90"
            height="50"
            className={styles.icon} />
      </div>

      <nav className={styles.nav}>
        <Link href="/home" className={styles.button}>
          Home
        </Link>
        <Link href="#" className={styles.button}>
          About Us
        </Link>
        <Link href="#" className={styles.button}>
          Contact
        </Link>
      </nav>
      <div className={styles.iconWrapper}>
       
       {userData ? (
                     <img
                        onClick={() => setOpen(!open)}
                        src={userData.image}
                        alt="user icon"
                        width="40"
                        height="40"
                        className={styles.icon}
                      />   
                  ) : ( <img
                      onClick={() => setOpen(!open)}
                      src="/icon.png"
                      alt="user icon"
                      width="40"
                      height="40"
                      className={styles.icon}
                    />
                       )}
        {open && (
          <div className={styles.menu}>
            <ul>
              <li className={styles.list}>
                <div>
                  {userData ? (
                    <div>
                      <p>
                        Name :{userData.firstName}&nbsp;{userData.lastName}{" "}
                      </p>
                      <p>Email: {userData.email}</p>
                    </div>
                  ) : (
                    <p>Loading user data...</p>
                  )}
                </div>
                <Link href="#" className={styles.buttons}>
                  Setting
                </Link>
                <button className={styles.buttons} onClick={handlLogout}>Logout</button>
                  
               
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}


