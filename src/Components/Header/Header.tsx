import { NavLink } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const HeaderItems = [
        { name: "Home", Url: "/", type: "link" },
        { name: "Services", Url: "/services", type: "link" },
        { name: "About", Url: "/#info-section", type: "about" },
    ];

    // Scroll to info-section on Home page
    function handleAboutClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault();
        if (window.location.pathname === "/") {
            const infoSection = document.getElementById("info-section");
            if (infoSection) {
                infoSection.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.location.href = "/#info-section";
        }
        setMenuOpen(false);
    }

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
                    <NavLink to="/"><img src="./assets/logo/TECH.jpg" alt="logo" /></NavLink>
                </div>

                <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div ref={menuRef} className={`header-items ${menuOpen ? "open" : ""}`}>
                    <ul>
                        {HeaderItems.map((item, idx) => (
                            <li key={idx}>
                                {item.type === "about" ? (
                                    <a href={item.Url} onClick={handleAboutClick}> {item.name} </a>
                                ) : (
                                    <NavLink to={item.Url}> {item.name} </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                    <NavLink to="contacts"><button className="h-button">Contact Us</button></NavLink>
                </div>
            </header>
        </>
    );
}
