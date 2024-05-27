// import React, { useState } from 'react';

// const Navbar2 = () => {
//   const [object, setObject] = useState({
//     name: "Alok",
//     Branch: "CSE"
//   });
//   const [toggle, setToggle] = useState(false);
//   const [namee, setName] = useState("");
//   const [list, setList] = useState([]);

//   const handleChange = (e) => {
//     setName(e.target.value);
//   }

//   const submitdata = (e) => {
//     e.preventDefault();
//     if(!namee){
//       alert("ENter your name")
//       return;
//     }
//     setList([...list, { name: namee }]);
//     setName(""); // Clear input field after submitting
//   }

//   const handleClick = () => {
//     setToggle(!toggle);
//     setObject({
//       ...object,
//       name: toggle ? "Alok" : "Surya",
//       Branch: toggle ? "CSE" : "Commerce"
//     });
//   }

//   return (
//     <div>
//       <h1>My name is {object.name} and my branch is {object.Branch}</h1>
//       <button onClick={handleClick}>Change</button>
//       <h1>{namee}</h1>
//       <form onSubmit={submitdata}>
//         <input type="text" value={namee} onChange={handleChange} placeholder='Enter your Name' />
//         <button type="submit">Submit</button>
//       </form>
//       <ul>
//         {list.map((item, index) => (
//           <li key={index}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Navbar2;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Navbar2() {

  const [show,setShow]=useState(true)
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={()=>setShow(!show)}
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar2;
