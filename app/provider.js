"use client"

import React, { useContext } from 'react'
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from 'react';
import { useEffect } from 'react';
import { UserDetailContext } from '../context/UserDetailContext';
import { ScreenSizeContext } from '../context/ScreenSizeContext';

function provider({ children }) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    const [userDetail, setUserDetail] = useState(null);
    const [screenSize, setScreenSize] = useState('desktop');

    useEffect(() => {
      if(typeof window !== 'undefined'){
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setUserDetail(JSON.parse(userInfo));
        }else{
          setUserDetail(null);
        }
      }
    }, []);

  return (
    <div>
        <ConvexProvider client={convex}>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
          <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
            <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>

        {children}
        </ScreenSizeContext.Provider>
        </UserDetailContext.Provider>
        </GoogleOAuthProvider>;


        </ConvexProvider>
    </div>
  )
}

export default provider


export const useScreenSize = () => {
  return useContext(ScreenSizeContext);
}
