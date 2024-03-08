// import React, { useState, useEffect, useRef } from 'react';
// import "./Filter.css";

// // Updated to accept props
// function Filter({ filterOption, handleSetFilterOption }) {
//   const [open, setOpen] = useState(false);
 

//   // let menuRef = useRef();

//   // useEffect(() => {
//   //   const handler = (event) => {
//   //     if (!menuRef.current.contains(event.target)) {
//   //       setOpen(false);
//   //     }
//   //   };

//   //   document.addEventListener("mousedown", handler);

//   //   return () => {
//   //     document.removeEventListener("mousedown", handler);
//   //   };
//   // }, [menuRef]);

//   const handleOptionClick = (option) => {
//     if (filterOption === option) {
//       console.log(`${option} unselected`); // Log unselected option
//       handleSetFilterOption(''); // Update parent component
//     } else {
//       console.log(`${option} selected`); // Log selected option
//       handleSetFilterOption(option); // Update parent component
//     }
//   };

//   return (
//     <div className='menu-container'>
//       <button className='trigger' onClick={() => setOpen((prev)=>!prev)}>
//         <span>Filter</span>
//       </button>
//       <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
//       {filterOption}
//         <ul>
//           {/* <DropdownItem text="California" isSelected={filterOption === "US-CA"} onClick={() => handleOptionClick("US-CA")} />
//           <DropdownItem text="Option#2" isSelected={filterOption === "Option#2"} onClick={() => handleOptionClick("Option#2")} />
//           <DropdownItem text="Option#3" isSelected={filterOption === "Option#3"} onClick={() => handleOptionClick("Option#3")} /> */}
//           <DropdownItem text="Right to Access" isSelected={filterOption === "Comsumer Rights"} onClick={() => handleOptionClick("Right to Access")} />
//           <DropdownItem text="Right to Correct" isSelected={filterOption === "Consumer Rights"} onClick={() => handleOptionClick("Right to Correct")} />
//           <DropdownItem text="Right to Delete" isSelected={filterOption === "Consumer Rights"} onClick={() => handleOptionClick("Right to Delete")} />
//           <DropdownItem text="Right to opt out of certain processing" isSelected={filterOption === "Comsumer Rights"} onClick={() => handleOptionClick("Right to opt out of certain processing")} />
//           <DropdownItem text="Right to Portability" isSelected={filterOption === "Consumer Rights"} onClick={() => handleOptionClick("Right to Portability")} />
//           <DropdownItem text="Right to opt out of sales" isSelected={filterOption === "Consumer Rights"} onClick={() => handleOptionClick("Right to opt out of sales")} />
//           <DropdownItem text="Right to opt in for sensitive data processing" isSelected={filterOption === "Comsumer Rights"} onClick={() => handleOptionClick("Right to opt in for sensitive data processing")} />
//           <DropdownItem text="Right against automated decision-making" isSelected={filterOption === "Consumer Rights"} onClick={() => handleOptionClick("Right against automated decision-making")} />
//           <DropdownItem text="Private right of action" isSelected={filterOption === "Consumer Rights"} onClick={() => handleOptionClick("Right to Delete")} />
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


// import React, { useState } from 'react';
// import "./Filter.css";

// function Filter({ filterOption, handleSetFilterOption }) {
//   const [open, setOpen] = useState(false);
//   // New state to control the visibility of Consumer Rights suboptions
//   const [showConsumerRightsOptions, setShowConsumerRightsOptions] = useState(false);

//   const handleOptionClick = (option) => {
//     if (filterOption === option) {
//       console.log(`${option} unselected`); // Log unselected option
//       handleSetFilterOption(''); // Update parent component
//     } else {
//       console.log(`${option} selected`); // Log selected option
//       handleSetFilterOption(option); // Update parent component
//     }
//   };

//   // Function to toggle Consumer Rights suboptions
//   const toggleConsumerRightsOptions = () => {
//     setShowConsumerRightsOptions(prev => !prev);
//   };

//   return (
//     <div className='menu-container'>
//       <button className='trigger' onClick={() => setOpen((prev) => !prev)}>
//         <span>Filter</span>
//       </button>
//       <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
//         <ul>
//           <li className="dropdownItem" onClick={toggleConsumerRightsOptions}>
//             Consumer Rights
//           </li>
//           {showConsumerRightsOptions && (
//             <>
//               <DropdownItem text="Right to Access" isSelected={filterOption === "Right to Access"} onClick={() => handleOptionClick("Right to Access")} />
//               <DropdownItem text="Right to Correct" isSelected={filterOption === "Right to Correct"} onClick={() => handleOptionClick("Right to Correct")} />
//               <DropdownItem text="Right to Delete" isSelected={filterOption === "Right to Delete"} onClick={() => handleOptionClick("Right to Delete")} />
//               <DropdownItem text="Right to opt out of certain processing" isSelected={filterOption === "Right to opt out of certain processing"} onClick={() => handleOptionClick("Right to opt out of certain processing")} />
//               <DropdownItem text="Right to Portability" isSelected={filterOption === "Right to Portability"} onClick={() => handleOptionClick("Right to Portability")} />
//               <DropdownItem text="Right to opt out of sales" isSelected={filterOption === "Right to opt out of sales"} onClick={() => handleOptionClick("Right to opt out of sales")} />
//               <DropdownItem text="Right to opt in for sensitive data processing" isSelected={filterOption === "Right to opt in for sensitive data processing"} onClick={() => handleOptionClick("Right to opt in for sensitive data processing")} />
//               <DropdownItem text="Right against automated decision-making" isSelected={filterOption === "Right against automated decision-making"} onClick={() => handleOptionClick("Right against automated decision-making")} />
//               <DropdownItem text="Private right of action" isSelected={filterOption === "Private right of action"} onClick={() => handleOptionClick("Private right of action")} />
//             </>
//           )}
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



import React, { useState } from 'react';
import "./Filter.css";

function Filter({ filterOption, handleSetFilterOption }) {
  const [open, setOpen] = useState(false);
  // States for each main option's suboptions visibility
  const [showConsumerRightsOptions, setShowConsumerRightsOptions] = useState(false);
  const [showBusinessObligationsOptions, setShowBusinessObligationsOptions] = useState(false);

  const handleOptionClick = (option) => {
    if (filterOption === option) {
      console.log(`${option} unselected`); // Log unselected option
      handleSetFilterOption(''); // Clear the current filter option
    } else {
      console.log(`${option} selected`); // Log selected option
      handleSetFilterOption(option); // Set the new filter option
    }
  };

  // Toggle visibility of Consumer Rights suboptions
  const toggleConsumerRightsOptions = () => {
    setShowConsumerRightsOptions(prev => !prev);
  };

  // Toggle visibility of Business Obligations suboptions
  const toggleBusinessObligationsOptions = () => {
    setShowBusinessObligationsOptions(prev => !prev);
  };

  return (
    <div className='menu-container'>
      <button className='trigger' onClick={() => setOpen((prev) => !prev)}>
        <span>Filter</span>
      </button>
      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <ul>
          <li className="dropdownItem" onClick={toggleConsumerRightsOptions}>
            Consumer Rights
          </li>
          {showConsumerRightsOptions && (
            <>
              <DropdownItem text="Right to Access" isSelected={filterOption === "Right to Access"} onClick={() => handleOptionClick("Right to Access")} />
              <DropdownItem text="Right to Correct" isSelected={filterOption === "Right to Correct"} onClick={() => handleOptionClick("Right to Correct")} />
              <DropdownItem text="Right to Delete" isSelected={filterOption === "Right to Delete"} onClick={() => handleOptionClick("Right to Delete")} />
              <DropdownItem text="Right to opt out of certain processing" isSelected={filterOption === "Right to opt out of certain processing"} onClick={() => handleOptionClick("Right to opt out of certain processing")} />
              <DropdownItem text="Right to Portability" isSelected={filterOption === "Right to Portability"} onClick={() => handleOptionClick("Right to Portability")} />
              <DropdownItem text="Right to opt out of sales" isSelected={filterOption === "Right to opt out of sales"} onClick={() => handleOptionClick("Right to opt out of sales")} />
              <DropdownItem text="Right to opt in for sensitive data processing" isSelected={filterOption === "Right to opt in for sensitive data processing"} onClick={() => handleOptionClick("Right to opt in for sensitive data processing")} />
              <DropdownItem text="Right against automated decision-making" isSelected={filterOption === "Right against automated decision-making"} onClick={() => handleOptionClick("Right against automated decision-making")} />
              <DropdownItem text="Private right of action" isSelected={filterOption === "Private right of action"} onClick={() => handleOptionClick("Private right of action")} />
            </>
          )}
          {/* Business Obligations main option and its suboptions */}
          <li className="dropdownItem" onClick={toggleBusinessObligationsOptions}>
            Business Obligations
          </li>
          {showBusinessObligationsOptions && (
            <>
              <DropdownItem text="Opt in default (Requirement Age)" isSelected={filterOption === "Opt in default (Requirement Age)"} onClick={() => handleOptionClick("Opt in default (Requirement Age)")} />
              <DropdownItem text="Notice/transparancy requirement" isSelected={filterOption === "Notice/transparancy requirement"} onClick={() => handleOptionClick("Notice/transparancy requirement")} />
              <DropdownItem text="Risk Assessments" isSelected={filterOption === "Risk Assessments"} onClick={() => handleOptionClick("Risk Assessments")} />
              <DropdownItem text="Prohibition on discrimination (Exercising Rights)" isSelected={filterOption === "Prohibition on discrimination (Exercising Rights)"} onClick={() => handleOptionClick("Prohibition on discrimination (Exercising Rights)")} />
              <DropdownItem text="Purpose/processing limitation" isSelected={filterOption === "Purpose/processing limitation"} onClick={() => handleOptionClick("Purpose/processing limitation")} />
            </>
          )}
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
