import React, { useState } from "react";
import axios from "axios";
import './otpGenerator.css'
import { Alert } from "@mui/material";




export default function OtpGnerator(){

const [number,setNumber] = useState(' ')
const [error,setError] = useState(' ')
const [successMessage,setSuccessMessage] = useState(' ')


function getMobileNum(e){
    setNumber(e.target.value)
}


    function getOtp(e){
        e.preventDefault();

    // Validate mobile number
    const numberRegex = /^[6-9]\d{9}$/;
    if (!numberRegex.test(number)) {
      setError(<Alert severity="error" variant="filled">Please enter a valid 10-digit mobile number.</Alert>);
      setSuccessMessage(" ");
      return;
    }




    axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',{
    mobile: number
})
.then(res=> {
    if (res.status >= 200 && res.status < 300) {
        setNumber("");
        setSuccessMessage(<Alert severity="success">OTP sent successfully.</Alert>);
        setError(" ")
    } else {
        throw new Error("Failed to generate OTP.");
    }
})
.catch(error => {
    setError(error.message);
          });
        

    }

    return(
        <>
            <div className="validator">
            <h1 className="error">{error}</h1>
                <input type="tel"  value={number} onChange={getMobileNum} />
                <button onClick={getOtp}>Get Otp</button>
                <h1 className="success">{successMessage}</h1>
            </div>
        </>
    )
}