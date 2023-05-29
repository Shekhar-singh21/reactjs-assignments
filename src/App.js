import logo from './logo.svg';
import './App.css';
import { Slider } from '@mui/material';

function App() {
  return (
    <div className="App">
    <Slider
  size="small"
  defaultValue={70}
  aria-label="Small"
  valueLabelDisplay="auto"
/>
<Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    
    </div>
  );
}

export default App;
