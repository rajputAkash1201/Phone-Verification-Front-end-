import './App.css';
import Popup from './components/Popup';
import { useState } from 'react';

function App() {

  const [buttonPopup, setButtonPopup] = useState(false);

  // document.getElementById("otp") = function() {
  //   if(this.value.length == 6) return false;
  // }

  return (

    <div>
      <main>
        <h1>Click the button to Enter OTP!</h1>
        <br /><br />
        <button onClick={() => setButtonPopup(true)}>Click me!</button>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
    </div>
  )
}

export default App;
