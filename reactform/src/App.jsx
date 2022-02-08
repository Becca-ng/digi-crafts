import React from 'react';
import Form from './components/form.jsx'
import ContactInfo from './components/info.jsx'
import './App.css';

function App() {
  return (
    <div >
    
    <Form />
    <ContactInfo />
    </div>
  );
}

export default App;

// updated 
// import React, { useState } from 'react';
// const LoginForm = (props)=>{
//   const [inputValue, setInputValue] = useState("Default value");
//   return (
//     <input onChange={(e)=>setInputValue(e.currentTarget.value)/>
//   );
// }
// export default LoginForm;
