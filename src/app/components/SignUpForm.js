'use client';

import styles from '../SignUp.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { getCookie } from 'cookies-next';
import { TextField, Button, Box, Typography, Container, Link as MuiLink, FormControl, FormLabel, Select, MenuItem, InputLabel,SelectChangeEvent } from '@mui/material';

function SignUpForm() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('guest');
  const [error, setError] = useState('')


  useEffect(()=>{
    const isAuthenticated = getCookie('userData')

    if(isAuthenticated){
      router.push('/home')
    }
  },[])

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(username.trim() === ''  || password.trim() === ''){
        setError('provide required data')
        return;
    }
    router.push('/home');
    setUsername('');
    setPassword('');
    setUserType('Guest');
   try{
    const response = await  fetch('https://dummyjson.com/user/me', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer /* YOUR_ACCESS_TOKEN_HERE */', // Pass JWT via Authorization header
        },
      })
      .then(res => res.json())
      .then(console.log);

    }catch(err){
      setError('Something went wrong')
    }
  }
  
  const handleUser = () =>{
    
    if(username.trim() !== ''  || password.trim() !== ''){
        toast.success("Useraccount created successfully")
    }
  }

  return (
    // <div className={styles.container}>
    //   <h1>Sign Up</h1>
    //   <form onSubmit={handleSubmit} className={styles.form}>
    //     <fieldset className={styles.fieldset}>
    //       <legend>Username*</legend>
    //       <input
    //         className={styles.input}
    //         type='text'
    //         name='username'
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //         placeholder='username*'
    //         required
    //       />
    //     </fieldset>

    //     <fieldset className={styles.fieldset}>
    //       <legend>Password*</legend>
    //       <input
    //         className={styles.input}
    //         type='password'
    //         name='password'
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         placeholder='password*'
    //         required
    //       />
    //     </fieldset>

    //     <fieldset className={styles.fieldset}>
    //       <legend>Signup As</legend>
    //       <select className={styles.select} 
    //       id="userType" 
    //       name="userType"
    //       value={userType}
    //       onChange={(e) => setUserType(e.target.value)}
    //       >
    //         <option value="guest">Guest</option>
    //         <option value="admin">Admin</option>
    //         <option value="user">User</option>
    //       </select>
    //     </fieldset>

    //     <button onClick={handleUser} className={styles.btn}>SIGN UP</button>

    //     <div className={styles.msg}>
    //       <a href="/login">Already have an account? Sign in</a>
    //     </div>
    //   </form>
    // </div>

    <Container maxWidth="xs">
      <Box sx={{
         mt: 18,
         padding: 4,
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         boxShadow: 3,
         borderRadius:2,
         backgroundColor: 'white'}}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>

       <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}> 
          <TextField
            margin='normal'
            required
            fullWidth
            label='username'
            name='username'
            autoComplete='username'
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
           
            ></TextField>

            <TextField
              margin='normal'
              required
              fullWidth
              label='password'
              name='password'
              type='password'
              autoComplete='password'
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
              ></TextField>

              <FormControl fullWidth sx={{mt:1}}>
                
                <InputLabel id="userType">SignUp As</InputLabel>
                <Select
                  labelId='userType'
                  id='userType'
                  label="signUp As"
                  name='userType'
                  value={userType}
                  onChange={(e)=> setUserType(e.target.value)}
                  >
                    
                        <MenuItem value="Guest">Guest</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="user">User</MenuItem>

                  </Select>
              </FormControl>
              
              

              <Button
                type='submit'
                fullWidth
                variant='contained'
                onClick={handleUser}
                sx={{mt:3, mb:2}}>
                  SIGN UP
               </Button>

               <Typography 
                 variant='body2'>
                  Already have an account?{' '}
                  <MuiLink component={Link} href="/login" >Sign in</MuiLink>
                 </Typography>
       </Box>
      </Box>
    </Container>
  );
}

export default SignUpForm;




