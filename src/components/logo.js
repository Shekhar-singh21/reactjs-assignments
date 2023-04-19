import React from 'react'
import logo from './logo.svg'
export default function Logo(){
    return(
        
        <div className="container">
      <header className="container-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
      
        </div>
    )
}