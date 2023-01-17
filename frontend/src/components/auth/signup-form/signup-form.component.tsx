import { TextField, Link as MuiLink } from '@mui/material'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUpForm: React.FC = () => {

    // validate email
    const [email, setEmail] = useState('')
    const [emailErrored, setEmailErrored] = useState(false)

    // validate password
    const [password, setPassword] = useState('')
    const [passwordErrored, setPasswordErrored] = useState(false)

    // handle signup
    const handleSignup =()=>{
        if(!email){
            setEmailErrored(true)
        }else{
            setEmailErrored(false)
        }
        if(!password){
            setPasswordErrored(true)
        }else{
            setPasswordErrored(false)
        }
    }
    return (
        <div className='flex justify-center items-center flex-col h-screen gap-8'>
            <h1 className='text-6xl'>Crypostats</h1>
            <div className="flex flex-col gap-2">
                <TextField 
                label="Email" 
                className='w-80' 
                type="email" 
                required 
                helperText={emailErrored && 'Email is invalid' }
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                error={emailErrored}
                />
                <TextField 
                label="Password" 
                className='w-80' 
                type="password" 
                required 
                helperText={passwordErrored && 'Empty Password Not allowed' }
                value={password}
                onChange={(event)=> setPassword(event.target.value)}
                error={passwordErrored}
                />
                <Link to="/login" className='justify-self-start self-start mt-2'>
                    <MuiLink>Login</MuiLink>
                </Link>

            </div>
            <Button variant='contained' className='w-80' onClick={handleSignup} >
                <span className='p-1'>Sign Up</span>
            </Button>

        </div>
    )
}

export { SignUpForm }