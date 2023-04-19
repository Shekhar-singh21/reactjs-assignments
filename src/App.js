// import React from 'react';
import './App.css';
import ReactBenefits from './components/benifits';
import Button from './components/buttons';
import Logo from './components/logo';

function App() {

  return (
    <div className="App">
      <header className="App-header">       
    <Logo/>
    <ReactBenefits/>
    <Button/>
      </header>
    </div>
  )
}

export default App;
