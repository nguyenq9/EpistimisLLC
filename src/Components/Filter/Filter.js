import Reacr, {useState, useEffect, useRef} from 'react';
import "./Filter.css"
function Filter() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
      setOpen(false);
    }
  };
    
    document.addEventListener("mousedown", handler);

    return() =>{
      document.removeEventListener("mousedown", handler);
    }
  });
  return (
    <div className='menu-container' ref={menuRef}>
      <div className='trigger' onClick={() => {setOpen(!open)}}> 
        <span>Filter</span>
        <img src='filter-icon.png'></img>
      </div>
      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <ul>
          <DropdownItem text = {"Option#1"}/>
          <DropdownItem text = {"Option#2"}/>
          <DropdownItem text = {"Option#3"}/>
        </ul>
      </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className='dropdownItem'>
      <a>{props.text}</a>
    </li>
  );
}
export default Filter;