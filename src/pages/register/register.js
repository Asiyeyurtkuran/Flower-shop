import { useState } from "react";
import Button from '../../components/button/button'
import TextInput from "../../components/textInput/testInput";
import useAuth from "../../hooks/useAuth";
import { validateEmail, validatePassword } from "../../validation/validation";
import ErrorMessage from "../../components/errorMessage/error";
import "./register.css";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const { onRegister } = useAuth();
    const [formData, setFormData] = useState({ email: "", password: "", firstName: "", lastName: "" });
    const [isEmailValid, setIsEmailValid] = useState(null)
    const [isPasswordValid, setIsPasswordValid] = useState(null)
    const [isEmailTaken, setIsEmailTaken] = useState(null)
    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handelSubmit = () => {
        setIsEmailTaken(false)

        if (validateEmail(formData.email) && validatePassword(formData.password)) {
            const waitForRegisterStatus = async () => {
                const res = await onRegister(formData.email, formData.password)
                res === 'fail' ? setIsEmailTaken(true) : setIsEmailTaken(false)
                navigate('/')
            }
            waitForRegisterStatus()
        }


        validateEmail(formData.email) ? setIsEmailValid(true) : setIsEmailValid(false)
        validatePassword(formData.password) ? setIsPasswordValid(true) : setIsPasswordValid(false)


    }

    return (
        <div className="register">

            <div className="register-form">

                <form className="register-inputs">

                    <label htmlFor="firstName">First Name</label>
                    <TextInput
                        className={"TextInput"}
                        value={formData.firstName}
                        onChange={onChange}
                        type="text"
                        name="firstName"
                    // label={"First Name"}
                    ></TextInput>

                    <label htmlFor="lastName">Last Name</label>
                    <TextInput
                        className={"TextInput"}
                        value={formData.lastName}
                        onChange={onChange}
                        type="text"
                        name="lastName"
                    //   label={"Last Name"}
                    ></TextInput>

                    <label htmlFor="email">Email</label>
                    <TextInput
                        className={"TextInput"}
                        value={formData.email}
                        onChange={onChange}
                        type="email"
                        name="email"
                    //  label={"Email *"}
                    />
                    {isEmailValid === false && <ErrorMessage message={'Please enter a valid Email e.g: example@email.com'} />}
                    {isEmailTaken === true && <ErrorMessage message={'Email is already taken.'} />}
                    <label htmlFor="password">Password</label>
                    <TextInput
                        value={formData.password}
                        onChange={onChange}
                        name="password"
                        //label={"Password *"}
                        type={"password"}
                    />
                    {isPasswordValid === false && <ErrorMessage message={'Password must contain at least one uppercase letter, one number, one special character and be at least 8 characters long.'} />}
                </form>
                <Button classes={"sign-upBttn"}
                    text="Sign up"
                    onClick={() => {
                        handelSubmit()
                        navigate('/')
                    }}
                    
                        
                   
                />
            </div>

        </div>
    );
};

export default Register;
