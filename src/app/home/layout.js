'use client';
import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { usePathname, useRouter } from 'next/navigation';
import DescriptionIcon from '@mui/icons-material/Description';
import toast, { Toaster } from 'react-hot-toast';

import { useState, useEffect } from "react";
import { getCookie, deleteCookie } from "cookies-next";


const NAVIGATION = [
  { segment: '', title: 'Dashboard', icon: <DescriptionIcon /> }, 
  { segment: 'about', title: 'About Us', icon: <DescriptionIcon /> }, 
  { segment: 'user1', title: 'User Data', icon: <DescriptionIcon /> }, 
];


const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'data-toolpad-color-scheme' },
  colorSchemes: { light: true, dark: true },
  defaultColorScheme: 'light',
});

export default function HomeLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
     const [session, setSession] = useState('');
   
    useEffect(() => {
    const cookieData = getCookie("userData");

    
    if (cookieData) {
      try {
        const parsedData = JSON.parse(cookieData);
        
        console.log("wtuwyduwdyfwuuf",parsedData);
        console.log("wtuwyduwdyfwuuf11",parsedData.firstName);
        console.log("wtuwyduwdyfwuuf11",parsedData.lastName);
        console.log("wtuwyduwdyfwuuf11",parsedData.email);

        //setSession({user:parsedData});
        
        setSession({
          user: {
            name: `${parsedData.firstName} ${parsedData.lastName}`, // 👈 Full name
            email: parsedData.email,
            Gender: parsedData.gender,
            image: parsedData.image || null,
          }
        });

      } catch (err) {
        console.error("Failed to parse cookie:", err);
      }
    }
   

  }, []);

  const authentication = React.useMemo(() => {
    return {
      signIn: (user) => {
        setSession({
         user : {
          name: `${parsedData.firstName} ${parsedData.lastName}`, 
          email: parsedData.email,
          image: parsedData.image || null, 
          firstName: parsedData.firstName, 
          lastName: parsedData.lastName,
         }
        });
      },
      signOut: () => {
         deleteCookie("userData");
        setSession(null);
      
        router.push("/");
      },
    };
  }, []);

  return (
      
     <div data-toolpad-scope>
      <Toaster position="top-right" />
      <AppProvider
        navigation={NAVIGATION}
        session={session}
        authentication={authentication}
        basename="/home"
         branding={{
            logo: <img src="/logo.jpeg"
            alt="user icon"
            width="90"
            height="50"
            className="icon" />,
            title: 'My Dashboard',
            
           }}
        theme={theme}
        router={{
          pathname,
          navigate: (path) => {
            const target = path.startsWith('/home') ? path : `/home${path.startsWith('/') ? path : `/${path}`}`;
            router.push(target)
          }
        }}
      >
        <DashboardLayout>{children}</DashboardLayout>
      </AppProvider>
      </div>
      
    
  );
}
