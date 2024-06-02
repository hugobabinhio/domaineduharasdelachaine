import React from "react";
import domainLogo from '../assets/images/haras_de_la_chaine_logo.png'

function HeaderMenu() {
    return (
        <header>
            <div className="menu">
                <img src={domainLogo} alt="" />
                <div className="navigation-menu">
                    <a href="domaineduharasdelachaine">Le domaine</a>
                    <a href="domaineduharasdelachaine/ecurie">Site de l'écurie</a>
                    <a href="domaineduharasdelachaine/hippodrome">Site de l'hippodrome</a>
                    <a href="domaineduharasdelachaine/prices">Tarifs & réservations</a>
                    <a href="domaineduharasdelachaine/access">Accès</a>
                </div>
            </div>
        </header>
    );
}

export default HeaderMenu;