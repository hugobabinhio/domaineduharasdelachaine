import React from "react";
import domainLogo from '../assets/images/haras_de_la_chaine_logo.png'

function HeaderMenu() {
    return (
        <header>
            <div className="menu">
                <img src={domainLogo} alt="" />
                <div className="navigation-menu">
                    <a href="./home">Le domaine</a>
                    <a href="./ecurie">Site de l'écurie</a>
                    <a href="./hippodrome">Site de l'hippodrome</a>
                    <a href="./prices">Tarifs & réservations</a>
                    <a href="./access">Accès</a>
                </div>
            </div>
        </header>
    );
}

export default HeaderMenu;