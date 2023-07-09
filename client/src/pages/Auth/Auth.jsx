import React from 'react'
import { useState } from 'react'
import './Auth.css'
import icon from '../../icon.png'
import AboutAuth from './AboutAuth'

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false)
    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }
  return (
    <div>
        {/* <h1>Auth page</h1> */}
        <section class='auth-section'>
            {isSignup && <AboutAuth/>}
            <div class='auth-container-2'>
                {!isSignup && <img src={icon} alt='devflow' className='login-logo'  height='16px'/>}
                <form>
                    {
                        isSignup && (
                            <label>
                                <h4>Display Name</h4>
                                <input type="text" id='name' name='name' />
                            </label>
                        )
                    }
                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input type="email" name='email' id='email' />
                    </label>
                    <label htmlFor="password">
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <h4>Password</h4>
                            {!isSignup && <p style={{color:"#007ac6",fontSize:"14px"}}>forgot password?</p>}
                        </div>
                        <input type="password" name='password' id='password' />
                        {isSignup && <p style={{color:"#666767",fontSize:"13px"}}>Passwords must contain at least eight characters,<br/>
                         including atleast 1 number and a special character</p>}
                    </label>
                    {
                        isSignup && (
                            <label htmlFor='check'>
                                <input style={{width:'16px',height:'16px'}} type="checkbox" id="check" />
                                <p className='c1' style={{fontSize:"13px"}} >Opt-in to receive occasional,product updates,<br/> user research invitations,company announcements,<br/> and digests.<br/></p>
                            </label>
                        )
                    }
                    <button type='submit' className='auth-btn'>{isSignup ? 'Sign up':'Log in'}</button>
                    {
                        isSignup && (
                            <p style={{color:"#666767",fontSize:"13px"}}>
                                By clicking "Sign up", you agree to our
                                <span style={{color:"#007ac6"}}> terms of<br/> service </span>,
                                <span style={{color:"#007ac6"}}> privacy policy</span> and 
                                <span style={{color:"#007ac6"}}> cookie policy</span>
                            </p>
                        )
                    }
                </form>
                <p>
                    {isSignup ? 'Already have an account?':"Don't have an account?"}
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch} >{isSignup ? "Log in" : "Sign up"}</button>
                </p>
            </div>
        </section>
    </div>
  )
}

export default Auth