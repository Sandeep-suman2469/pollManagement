'use client';

import styles from '../SignUp.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function SignUpForm() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('guest');
  const [error, setError] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(username.trim() === ''  || password.trim() === ''){
        setError('provide required data')
        return;
    }
    router.push('/home');
    setUsername('');
    setPassword('');
    setUserType('Guest');
  }

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend>Username*</legend>
          <input
            className={styles.input}
            type='text'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username*'
            required
          />
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend>Password*</legend>
          <input
            className={styles.input}
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password*'
            required
          />
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend>Signup As</legend>
          <select className={styles.select} 
          id="userType" 
          name="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          >
            <option value="guest">Guest</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </fieldset>

        <button className={styles.btn}>SIGN UP</button>

        <div className={styles.msg}>
          <a href="/login">Already have an account? Sign in</a>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;

