// import Header from "./components/Header";
// import Link from 'next/link';
// export default function Home() {
//   return (
//     <>
//     <header className='header'>
//        <img            
//             src="/logo.jpeg"
//             alt="user icon"
//             width="90"
//             height="50"
//             className="icon"
//              />
//       <nav className='nav'>
//         <Link href="/login" className='button'>Login</Link>
//         <Link href="/signup" className='button'>Sign Up</Link>
//       </nav>
//     </header>
//     {/* <h1 className="content">Welcome to Dashboard !!</h1> */}
//     </>
//   );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <Box >
      <AppBar position="static" 
         sx={{ 
          display: 'flex', 
          backgroundColor:'grey',
          flexDirection: 'row',
          alignItems: 'center',
          gap:2, height:70,
          padding:2,
          justifyContent:'space-between'}}>
         
          <img            
            src="/logo.jpeg"
            alt="user icon"
            width="90"
            height="50"
            className="icon"
            sx={{mr:2}}
             />
         
           <Box >
           <Link href="/login" className='button'>Login</Link>
           <Link href="/signup" className='button'>Sign Up</Link>
           </Box>
      </AppBar>
    </Box>
  );
}



