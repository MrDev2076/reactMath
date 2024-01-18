import React, { useState } from 'react';

import './App.css';

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <div class="container">
        <div class="calculator">
          <h1>Calculator</h1>
          <form action="">

            <div class="display">
            <input type="text" value={value}/>
            </div>

            <div class="btn">
            <div>
              <input type="button" value="AC" class="AC"  onClick={e => setValue('')}/>
              <input type="button" value="CE" class="CE"  onClick={e => setValue(typeof value === 'string' ? value.slice(0, -1) : value)}/>
               <input type="button" value="." class="dot"  onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="/"  class="symbol" onClick={e => setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="7"  onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="8"  onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="9"  onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="*" class="symbol"  onClick={e => setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="4"  onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="5"  onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="6"  onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="+" class="symbol"  onClick={e => setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="1"  onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="2"  onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="3"  onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="-" class="symbol"  onClick={e => setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="00"  onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="0"  onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="=" className='equal' onClick={e => setValue(eval(value))} />
            </div>
            </div>
            
            </form>
        </div>
      </div>
    </div>
  );
}

export default App;
