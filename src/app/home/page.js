// 'use client'
// import styles from '../home/home.module.css';
// import Header from '../components/Header';
// import User1 from '../user1/page';
// import User2 from '../user2/page';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { getCookie } from 'cookies-next';
// import { useEffect } from 'react';


// export default function HomePage() {
//   const router = useRouter();
//   useEffect(()=>{
//     const token = getCookie('userData');
//     console.log("Hvvjbdhk" ,token)
   

//     if(!token){
//       router.push('/login')
//     }
//   },[router]) 


//   return (
//     <>

//     <Header/>
//     <div className={styles.container}>
//       <div className={styles.aside}>
//          <Link href="/user1" className={styles.button}>User1</Link><br/> <br/> <br/>
//          <Link href="/user2" className={styles.button}>User2</Link>
//          </div>
//       <div className={styles.section}></div>
     
//     </div> 
//     </>
//   );
// }


// 'use client';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { createTheme } from '@mui/material/styles';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import DescriptionIcon from '@mui/icons-material/Description';
// import { AppProvider } from '@toolpad/core/AppProvider';
// import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// import { usePathname, useRouter } from 'next/navigation';
// import Link from 'next/link';

// import User1 from '../api/User1';

// // Sidebar navigation items
// const NAVIGATION = [
//    {
//             segment: 'home',
//             title: 'Home',
//             icon: <DescriptionIcon />,
//           },
//           {
//             segment: 'about',
//             title: 'About Us',
//             icon: <DescriptionIcon />,
//           },
//           {
//             segment: 'user1',
//             title: 'UserData',
//             icon: <DescriptionIcon />,
//           },
    
 
// ];

// const theme = createTheme({
//   cssVariables: {
//     colorSchemeSelector: 'data-toolpad-color-scheme',
//   },
//  colorSchemes: { light: true, dark: true },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });


// function PageContent({ pathname }) {
//   return (
//     <Box
//       sx={{
//         py: 4,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//       }}
//     >
//       <Typography variant="h5">Content for {pathname}</Typography>
//     </Box>
//   );
// }



// // Main Layout Component
// export default function DashboardLayoutBasic() {
//   const pathname = usePathname(); // ✅ get current route
//   const router = useRouter(); // ✅ navigate programmatically if needed

  
 

//    const [session, setSession] = React.useState({
//     user: {
//       name: ' ',
//       email: 'bharatkashyap@outlook.com',
//       image: 'https://avatars.githubusercontent.com/u/19550456',
//     },
//   });

//   const authentication = React.useMemo(() => {
//     return {
//       signIn: () => {
//         setSession({
//           user: {
//             name:  userData.firstName,
//             email: userData.email,
//             image: 'https://avatars.githubusercontent.com/u/19550456',
//           },
//         });
//       },
//       signOut: () => {
//         setSession(null);
//       },
//     };
//   }, []);

//   return (
//     <AppProvider
//       navigation={NAVIGATION}
//       session={session}
//       authentication={authentication}
//       branding={{
//             logo: <img src="/logo.jpeg"
//             alt="user icon"
//             width="90"
//             height="50"
//             className="icon" />,
//             title: 'My Dashboard',
//             homeUrl: '/toolpad/core/introduction',
//            }}
//       theme={theme}
//       router={{
//         pathname,
//         navigate: (path) => router.push(path), // ✅ hook up sidebar clicks to Next.js routing
//       }}
//     >
//       <DashboardLayout>
//         <PageContent pathname={pathname} />
//       </DashboardLayout>
//     </AppProvider>
//   );
// }

'use client';
import { Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { useEffect } from 'react';

export default function HomeDashboard() {

  const router = useRouter();
  useEffect(()=>{
    const token = getCookie('userData');
    console.log("Hvvjbdhk" ,token)
   

    if(!token){
      router.push('/login')
    }
  },[router]) 
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4">Welcome to your Dashboard</Typography>
    </Box>
  );
}





