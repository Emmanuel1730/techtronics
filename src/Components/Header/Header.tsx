import { NavLink } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const HeaderItems = [
        { name: "Home", Url: "/" },
        { name: "Services", Url: "/services" },
        { name: "Projects", Url: "/projects" },
    ];

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <header className="header">
                <div className="logo">
                    <NavLink to="/"><h2>Techtronics</h2></NavLink>
                </div>

                <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div ref={menuRef} className={`header-items ${menuOpen ? "open" : ""}`}>
                    <ul>
                        {HeaderItems.map((HeaderItem, index) => (
                            <li key={index}>
                                <NavLink to={HeaderItem.Url}> {HeaderItem.name} </NavLink>
                            </li>
                        ))}
                    </ul>
                    <NavLink to="contacts"><button className="h-button">Contact Us</button></NavLink>
                </div>
            </header>
        </>
    );
}
