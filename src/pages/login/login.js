import React, { useContext } from 'react'
import { useState } from 'react';
import TextInput from '../../components/textInput/testInput' 
import Button from '../../components/button/button';
import ErrorMessage from '../../components/errorMessage/error';
import './login.css'
import { AuthContext } from '../../context/context';
import { useNavigate } from "react-router-dom";




const Login = () => {

    const { onLogin } = useContext(AuthContext)
    
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
 

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleLogin = async () => {
        const res = await onLogin(formData.email, formData.password);
        res.status === 'fail' ? setError(true) : setError(false);
    }

  

    return (
        <div className='card'>
            <h2>Log In</h2>

            <div className='login-card'>
                <div className='login-form'>
                    <form className='loginForm'>
                        <label htmlFor="email">Email</label>
                        <TextInput className="email"
                            value={formData.email}
                            name={"email"}
                            onChange={onChange}
                        />
                        <label htmlFor="password">Password</label>
                        <TextInput className="password"
                            value={formData.password}
                            name="password"
                            type={"password"}
                            onChange={onChange} />
                    </form>
                    {error && <ErrorMessage message={'Invalid email and/or password provided'} />}
                    <Button
                        classes={"loginBttn"}
                        text="Log in"
                        onClick={ handleLogin}
                    />
                  
                </div>
               
                <div className='registerdiv'>
                    <h5> Need an Account?</h5>
                    <Button
                        classes={"registerBttn"}
                        text='Register'
                        onClick={() => navigate('/register')} >
                    </Button>
                </div>
                
            </div>

        </div>
    )
}

export default Login


