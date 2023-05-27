
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/pages/homepage/home';
import Favorites from './components/pages/favMoviespage/favMovies';
import { Provider } from 'react-redux';
import store from './components/store/store';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favMovies' element={<Favorites/>}/>
    </Routes>
    </Provider>
    
    </div>
  );
}

export default App;
