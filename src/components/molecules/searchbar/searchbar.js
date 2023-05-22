import { useEffect, useState } from "react";
import style from './searchbar.module.css';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const [stateName, setStateName] = useState([]);
  const [show, setShow] = useState(false);

  function getShow() {
    setShow(!show);
  }

  function getInput(e) {
    setInput(e.target.value);
    console.log(input);
  }

  useEffect(() => {
    getStateName();
  }, []);

  function getStateName() {
    fetch('http://cdn-api.co-vin.in/api/v2/admin/location/states')
      .then((resp) => resp.json())
      .then((data) => {
        setStateName(data.states);
        console.log(data.states);
      });
  }

  const filteredStates = stateName.filter((state) =>
    state.state_name.toLowerCase().includes(input.toLowerCase())
  );

  return (
<div className={style.SearchBar}>
     <div className={style.listcontainer}>
      <input
        type="text"
        placeholder="Search state"
        value={input}
        onChange={getInput}
        className={style.inputbox}
      />
      
      {input && (
        <ul className={`${style.list} ${show ? style.showList : ''}`}>
          {filteredStates.map((state, index) => (
            <li key={index}>{state.state_name}</li>
          ))}
        </ul>
      )}
    </div>
</div>
  );
}
