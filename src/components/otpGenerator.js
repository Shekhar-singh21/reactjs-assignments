import React, { useState } from 'react';
import './otpGenerator.css'

export default function OtpGenerator() {
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  function getNumber(e) {
    setNumber(e.target.value);
  }

  function getOtp(e) {
    e.preventDefault();

    const numberRegex = /^[6-9]\d{9}$/;
    if (!numberRegex.test(number)) {
      setError('Please enter a 10 digit number');
      setSuccessMessage('');
    }

    const url = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP';

    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobile: number }),
    };

    fetch(url, option)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          setNumber('');
          setSuccessMessage('OTP sent successfully.');
          setError('');
        } else {
          throw new Error('Failed to generate OTP.');
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <>
      <div className='generator'>
        <h1>{error}</h1>
        <input  className='inputbx' type="tel" value={number} onChange={getNumber} />
        <button onClick={getOtp}>Get Otp</button>
        <h1>{successMessage}</h1>
      </div>
    </>
  );
}
