import React, { useState } from "react";
import { Link } from "react-router-dom";
import domainLogo from '../assets/images/haras_de_la_chaine_logo.png'

function HeaderMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open)
    };

    return (
        <header>
            <div className="menu">
                <img src={domainLogo} alt="" />
                <div className="trigger-3pp-menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`navigation-menu ${isOpen ? "is-open" : ""}`}>
                    <Link to='/'>Le domaine</Link>
                    <Link to='/hippodrome'>Site de l'hippodrome</Link>
                    <Link to='/ecurie'>Site de l'écurie</Link>
                    <Link to='/prices'>Tarifs & réservations</Link>
                    <Link to='/access'>Accès</Link>
                </div>
            </div>
        </header>
    );
}

export default HeaderMenu;