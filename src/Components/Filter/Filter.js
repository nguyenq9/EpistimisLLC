// import React, {useState, useEffect, useRef} from 'react';
// import "./Filter.css"
// function Filter() {

//   const [open, setOpen] = useState(false);

//   let menuRef = useRef();

//  //function that will console log hello when filter option is clicked
//   const handleClick = () => {
//     console.log("hello");
//   }
  
//   useEffect(() => {
//     let handler = (e)=>{
//       if(!menuRef.current.contains(e.target)){
//       setOpen(false);
//     }
//   };
    
//     document.addEventListener("mousedown", handler);

//     return() =>{
//       document.removeEventListener("mousedown", handler);
//     }
//   });
//   return (
//     <div className='menu-container' ref={menuRef}>
//       <button className='trigger' onClick={() => {setOpen(!open)}}> 
//         <span>Filter</span>
//         {/*<img src='filter-icon.png'></img>*/}
//       </button>
//       <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
//         <ul>
//           <DropdownItem text = {"California"}/>
//           <DropdownItem text = {"Option#2"}/>
//           <DropdownItem text = {"Option#3"}/>
//         </ul>
//       </div>
//     </div>
//   );
// }

// function DropdownItem(props){
//   return(
//     <li className='dropdownItem'>
//       <a>{props.text}</a>
//     </li>
//   );
// }


// export default Filter;





// import React, { useState, useEffect, useRef } from 'react';
// import "./Filter.css";

// function Filter() {
//   const [open, setOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('');

//   let menuRef = useRef();

//   useEffect(() => {
//     const handler = (event) => {
//       if (!menuRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handler);

//     return () => {
//       document.removeEventListener("mousedown", handler);
//     };
//   });

//   const handleOptionClick = (option) => {
//     if (selectedOption === option) {
//       console.log(`${option} unselected`); // Log unselected option
//       setSelectedOption(''); // Unselect if the same option is clicked again
//     } else {
//       console.log(`${option} selected`); // Log selected option
//       setSelectedOption(option); // Select the new option
//     }
//   };

//   return (
//     <div className='menu-container' ref={menuRef}>
//       <button className='trigger' onClick={() => setOpen(!open)}>
//         <span>Filter</span>
//       </button>
//       <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
//         <ul>
//           <DropdownItem text="California" isSelected={selectedOption === "California"} onClick={() => handleOptionClick("California")} />
//           <DropdownItem text="Option#2" isSelected={selectedOption === "Option#2"} onClick={() => handleOptionClick("Option#2")} />
//           <DropdownItem text="Option#3" isSelected={selectedOption === "Option#3"} onClick={() => handleOptionClick("Option#3")} />
//         </ul>
//       </div>
//     </div>
//   );
// }

// function DropdownItem({ text, onClick, isSelected }) {
//   return (
//     <li 
//       className={`dropdownItem ${isSelected ? 'selected' : ''}`} 
//       onClick={onClick}
//     >
//       {text}
//     </li>
//   );
// }

// export default Filter;





import React, { useState, useEffect, useRef } from 'react';
import "./Filter.css";

// Updated to accept props
function Filter({ filterOption, handleSetFilterOption }) {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(filterOption); 

  let menuRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef]);

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      console.log(`${option} unselected`); // Log unselected option
      setSelectedOption(''); // Unselect if the same option is clicked again
      handleSetFilterOption(''); // Update parent component
    } else {
      console.log(`${option} selected`); // Log selected option
      setSelectedOption(option); // Select the new option
      handleSetFilterOption(option); // Update parent component
    }
  };

  return (
    <div className='menu-container' ref={menuRef}>
      <button className='trigger' onClick={() => setOpen(!open)}>
        <span>Filter</span>
      </button>
      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <ul>
          <DropdownItem text="California" isSelected={selectedOption === "California"} onClick={() => handleOptionClick("California")} />
          <DropdownItem text="Option#2" isSelected={selectedOption === "Option#2"} onClick={() => handleOptionClick("Option#2")} />
          <DropdownItem text="Option#3" isSelected={selectedOption === "Option#3"} onClick={() => handleOptionClick("Option#3")} />
        </ul>
      </div>
    </div>
  );
}

function DropdownItem({ text, onClick, isSelected }) {
  return (
    <li 
      className={`dropdownItem ${isSelected ? 'selected' : ''}`} 
      onClick={onClick}
    >
      {text}
    </li>
  );
}

export default Filter;
