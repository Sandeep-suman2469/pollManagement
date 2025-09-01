'use client';
import styles from '../Login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function LoginForm() {
    const router = useRouter();

    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(username.trim() === '' || password.trim() === ''){
            setError('required field')  
        }

        router.push('/home');
        setUsername('')
        setPassword('')
    }

  return (
    <div className={styles.container}>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
         className={styles.input} 
         type='text'
         name='username'
         value={username}
         onChange={(e)=> setUsername(e.target.value)}
         placeholder='username*' required />
        <input 
        className={styles.input} 
         type='password' 
         name='password'
         value={password} 
         onChange={(e)=> setPassword(e.target.value)}
         placeholder='password*' required />
        <button className={styles.btn}>LOGIN</button>
        <p>
          <a href="/signup">Don't have an account? Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
