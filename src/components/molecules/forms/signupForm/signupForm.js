import React, { useState } from 'react';
import Button from '../../../atoms/buttons/button';
import Input from '../../../atoms/inputfield/inputField';
import style from './signupform.module.css';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

export default function SignUp() {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === '') {
      alert('Please enter a valid name');
      return;
    }

    if (dateOfBirth.trim() === '') {
      alert('Please enter a valid date of birth');
      return;
    }

    if (email.trim() === '') {
      alert('Please enter a valid email');
      return;
    }

    if (password.trim() === '') {
      alert('Please enter a valid password');
      return;
    } else {
      const inpVal = {
        name,
        dateOfBirth,
        email,
        password
      };

      localStorage.setItem('inpVal', JSON.stringify(inpVal));
      navigate('/studentLogin')
    }
  }

  return (
    <div className={style.form}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className={style.signupForm}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          performTask={(e) => setName(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Date of Birth"
          value={dateOfBirth}
          performTask={(e) => setDateOfBirth(e.target.value)}
        />
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
        <h4>If you already have an account? <NavLink to={'/studentLogin'}>Login </NavLink> </h4>
        <Button text="Submit" type="submit" />
      </form>
    </div>
  );
}
