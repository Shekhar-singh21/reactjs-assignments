import { useState } from "react";
import Input from "../../atoms/inputfield/inputField";
import Button from "../../atoms/buttons/button";
import style from './studentLogin.module.css';
import { useNavigate } from "react-router-dom";

export default function StudentLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        const storedData = JSON.parse(localStorage.getItem('inpVal'));

        if (storedData && storedData.email === email && storedData.password === password) {
            alert('Authentication successful');
            navigate('/studentQuizPage');
        } else {
            alert('Invalid email or password');
        }

        console.log(storedData);
    }

    return (
        <div className={style.studentLogin}>
            <h1>Login</h1>
            <form className={style.form} onSubmit={handleLogin}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    performTask={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    performTask={(e) => setPassword(e.target.value)}
                />
                <div className={style.checkbox}>
                    <Input type='checkbox' />
                    <label> Click Here </label>
                </div>
                <Button text="Login" type="submit" />
            </form>
        </div>
    );
}
    