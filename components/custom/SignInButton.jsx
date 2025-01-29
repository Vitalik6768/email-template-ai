import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

function SignInButton() {

  const CreateUser = useMutation(api.users.CreateUser);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          { headers: { Authorization: `Bearer ${tokenResponse?.access_token}` } },
        );

        console.log('User info received:', userInfo.data);
        const user = userInfo.data;
        if (typeof window !== 'undefined') {
          localStorage.setItem('userInfo', JSON.stringify(user));
        }

        if (!user?.name || !user?.email || !user?.picture) {
          console.error('Missing required user information:', user);
          return;
        }

        const result = await CreateUser({
          name: user.name,
          email: user.email,
          picture: user.picture,
        });
        
        console.log('User created/found:', result);
        if (typeof window !== 'undefined') {
          localStorage.setItem('userInfo', JSON.stringify({...result, _id: result._id}));
        }

      } catch (error) {
        console.error('Error during sign in:', error);
        if (error.data) {
          console.error('Detailed error:', error.data);
        }
      }
    },
    onError: errorResponse => console.error('Google login error:', errorResponse),
  });


  return (
    <div>
      <Button onClick={googleLogin}>Get Started</Button>

    </div>
  )
}

export default SignInButton












