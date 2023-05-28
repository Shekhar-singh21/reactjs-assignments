
import { Route, Routes } from 'react-router';
import './App.css';
import AdminLogin from './components/pages/adminLogin/adminLogin';
import DefaultPage from './components/pages/defaultPage/defaultPage';
import SignUp from './components/molecules/forms/signupForm/signupForm';
import StudenLogin from './components/organism/studentLogin/studentLogin';
import StudentPage from './components/pages/studentQuizPage/studentQuizPage';
import AdminPage from './components/pages/adminPage/adminPage';

function App() {
  return (
    <div className="App">
   
    <Routes>
      <Route path='/' element={<DefaultPage/>}/>
      <Route path='/adminLogin' element={<AdminLogin/>}/>
      <Route path='/signupForm' element={<SignUp/>}/>
      <Route path='/studentLogin' element={<StudenLogin/>}/>
      <Route path='/studentQuizpage' element={<StudentPage/>}/>
      <Route path='/adminPage'  element={<AdminPage/>}/>
    </Routes>

    
    </div>
  );
}

export default App;
