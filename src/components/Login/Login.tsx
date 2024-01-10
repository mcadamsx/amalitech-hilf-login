import React from 'react'
import LoginForm from './LoginForm'
import Header from './Header'
import Footer from './Footer';

export default function Login() {
    const handleLogin = (email: string, password: string) => {

        console.log(`Email: ${email}, Password: ${password}`);
      };
  return (
    <div className='login'>
        <Header/>
        <LoginForm onLogin={handleLogin} />
        <Footer/>
      
    </div>
  )
}
