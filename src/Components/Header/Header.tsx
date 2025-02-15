import { NavLink } from "react-router-dom";
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    const HeaderItems = [
        {name: 'Home', Url: '/'},
        {name: 'Services', Url: '/services'},
        {name: 'Projects', Url: '/projects'},
    ]
    return(
        <>
            <header className="header">
                <div className="logo">
                    <NavLink to='/'><h2>Techtronics</h2></NavLink>
                </div>

                <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                
                <div className={`header-items ${menuOpen ? "open" : ""}`}>
                    
                    <ul> {HeaderItems.map((HeaderItem, index) => 
                        ( <li key={index} > <NavLink to={HeaderItem.Url}> {HeaderItem.name} </NavLink></li>
                    ))}</ul>
                    <NavLink to="contacts" ><button className="h-button">Contact Us</button></NavLink>
                </div>

            </header>
        </>
    )
}