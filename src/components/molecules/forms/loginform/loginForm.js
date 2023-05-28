import { useEffect, useState } from "react";
import Button from "../../../atoms/buttons/button";
import Input from "../../../atoms/inputfield/inputField";
import style from './loginForm.module.css';
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function getEmail(e) {
        setEmail(e.target.value);
    }

    function getPassword(e) {
        setPassword(e.target.value);
    }

    const storedData = {
        email: 'Admin',
        password: 'Admin'
    };

    

    useEffect(()=>{
        localStorage.setItem('storedData', JSON.stringify(storedData));

},[storedData])



    function handleSubmit(e) {
        e.preventDefault();

        


        if (email === storedData.email && password === storedData.password) {
            alert('Login successful');
            navigate('/adminPage');
        } else {
            alert('Invalid email or password');
        }
    }

    return (
        <div className={style.loginform}>
            <h3>Admin</h3>
            <form action="" className={style.form} onSubmit={handleSubmit}>
                <Input type="text" placeholder="Username" value={email} performTask={getEmail} />
                <Input type="password" placeholder="Password" value={password} performTask={getPassword} />
                <NavLink to={'/adminPage'}><Button text="Login" type="submit" /></NavLink>
            </form>
        </div>
    );
}
