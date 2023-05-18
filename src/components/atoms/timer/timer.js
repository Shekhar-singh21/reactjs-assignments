import './timer.css'
import { useState,useEffect } from 'react';


export default function Timer(){
    const [seconds, setSeconds] = useState(600);

    useEffect(() => {
      if (seconds > 0) {
        const timer = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
  
        return () => clearInterval(timer);
      }
    }, [seconds]);
  
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
  
      return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    };
  
    return (
      <div className="timer">
        <h1 className='time-alert'>Remaining time: <span>{formatTime(seconds)}</span> s</h1>
        
      </div>
    );
  };
