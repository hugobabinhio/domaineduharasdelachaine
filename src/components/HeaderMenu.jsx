import React from "react";
import { Link } from "react-router-dom";
import domainLogo from '../assets/images/haras_de_la_chaine_logo.png'

function HeaderMenu() {
    return (
        <header>
            <div className="menu">
                <img src={domainLogo} alt="" />
                <div className="navigation-menu">
                    <Link to='/'>Le domaine</Link>
                    <Link to='/ecurie'>Site de l'écurie</Link>
                    <Link to='/hippodrome'>Site de l'hippodrome</Link>
                    <Link to='/prices'>Tarifs & réservations</Link>
                    <Link to='/access'>Accès</Link>
                </div>
            </div>
        </header>
    );
}

export default HeaderMenu;