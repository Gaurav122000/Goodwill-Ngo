import { useEffect } from 'react';
import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar';

function App() {

  
  useEffect(() => {
    const tokenValue = window.localStorage.getItem("token")
    console.log(tokenValue);
    fetch('http://localhost:3001/userData', {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" ,

      },
      body: JSON.stringify({ token : tokenValue })
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,"Userdata")
    })   
  }
  
  , [])

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <div className="dash">
          <MainDash />
        </div>
      </div>
    </div>
  );
}

export default App;
