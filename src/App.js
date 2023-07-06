import './App.css';

import { Provider } from 'react-redux';
import Form from './form/Form';
import {store} from './store/store';
import FormShow from './formShow/FormShow';


function App() {
  return (
    <div className="App">

    <Provider store={store}>
      <Form/>
      <FormShow/>
    </Provider>

    
    </div>
  );
}

export default App;
