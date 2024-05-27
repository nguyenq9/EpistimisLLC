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
          <li className="dropdownItem filterCategory" onClick={toggleConsumerRightsOptions}>
            Consumer Rights
          </li>
          {showConsumerRightsOptions && (
            <>
              <DropdownItem text="Access" isSelected={filterOption === "Access"} onClick={() => handleOptionClick("Access")} />
              <DropdownItem text="Correct" isSelected={filterOption === "Correct"} onClick={() => handleOptionClick("Correct")} />
              <DropdownItem text="Delete" isSelected={filterOption === "Delete"} onClick={() => handleOptionClick("Delete")} />
              <DropdownItem text="Opt-Out(Processing)" isSelected={filterOption === "Opt-Out(Processing)"} onClick={() => handleOptionClick("Opt-Out(Processing)")} />
              <DropdownItem text="Portability" isSelected={filterOption === "Portability"} onClick={() => handleOptionClick("Portability")} />
              <DropdownItem text="Opt-Out(Sales)" isSelected={filterOption === "Opt-Out(Sales)"} onClick={() => handleOptionClick("Opt-Out(Sales)")} />
              <DropdownItem text="Opt-In(Processing)" isSelected={filterOption === "Opt-In(Processing)"} onClick={() => handleOptionClick("Opt-In(Processing)")} />
              <DropdownItem text="Anti-Automation" isSelected={filterOption === "Anti-Automation"} onClick={() => handleOptionClick("Anti-Automation")} />
              <DropdownItem text="Private Action" isSelected={filterOption === "Private Action"} onClick={() => handleOptionClick("Private Action")} />
            </>
          )}
          {/* Business Obligations main option and its suboptions */}
          <li className="dropdownItem filterCategory" onClick={toggleBusinessObligationsOptions}>
            Business Obligations
          </li>
          {showBusinessObligationsOptions && (
            <>
              <DropdownItem text="Opt-In(Default)" isSelected={filterOption === "Opt-In(Default)"} onClick={() => handleOptionClick("Opt-In(Default)")} />
              <DropdownItem text="Notice/Transparency" isSelected={filterOption === "Notice/Transparency"} onClick={() => handleOptionClick("Notice/Transparency")} />
              <DropdownItem text="Risk Assessments" isSelected={filterOption === "Risk Assessments"} onClick={() => handleOptionClick("Risk Assessments")} />
              <DropdownItem text="No Discrimination" isSelected={filterOption === "No Discrimination"} onClick={() => handleOptionClick("No Discrimination")} />
              <DropdownItem text="Processing Limits" isSelected={filterOption === "Processing Limits"} onClick={() => handleOptionClick("Processing Limits")} />
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