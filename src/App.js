
import './App.css';
// import SearchBar from './components/molecules/searchBar/searchBar';
import SearchBar from './components/molecules/searchBar/searchBar';
import TodoList from './components/molecules/todoList/todoList';
import Store from './components/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
    <SearchBar/>
    <TodoList/>
    
    </div>
    </Provider>
  );
}

export default App;
