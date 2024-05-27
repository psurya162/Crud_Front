import React from 'react';
import { Button } from 'react-bootstrap';
import Navbars from './Components/Navbar';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
const App = () => {
  return (
    <div>
      <Router>
        <Navbars/>
        <Routes>
          <Route exact path='/' element={<Create/>}/>
          <Route exact path='/all' element={<Read/>}/>
          <Route path="/edit/:id" element={<Update />} />

          
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;





// import React, { useState } from 'react';
// import App2 from './App2';

// const App = () => {
//     const [names,setName]=useState("ALok")
//   return (
//     <div>
//     <h1>Parent COmponet</h1>
//     <h3>{names}</h3>
//       <App2 name={names} age ={21}/>
//     </div>
//   );
// }

// export default App;

