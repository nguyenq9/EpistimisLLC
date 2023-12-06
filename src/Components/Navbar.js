import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";
import "./Navbar.css"

function Navbar(){
const navRef = useRef();

const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav");
}
    return(
        <header>
            <h3 className="logo">Logo</h3>
                <nav ref={navRef}>
                    <a href="/#">Home</a>
                    <a href="/#">Contact Us</a>
                    <a href="/#">About Us</a>
                    <a href="/#">Blog</a>
                    <a href="/#">Privacy Policy</a>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes>

                        </FaTimes>
                    </button>
                </nav>
                
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaBars>

                    </FaBars>
                </button>
        </header>
         
    );

}

export default Navbar;