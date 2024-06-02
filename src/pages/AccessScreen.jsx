import React from "react"
import ContactFooter from "../components/ContactFooter"
import HeaderMenu from "../components/HeaderMenu"
import carIcon from "../assets/images/icons/car_icon.png"
import planeIcon from "../assets/images/icons/plane_icon.png"
import trainIcon from "../assets/images/icons/train_icon.png"

function AccessScreen() {
    return (
        <div>
            <HeaderMenu />
            <iframe className="iframe-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1359380.1121579898!2d-2.396905227604598!3d48.282860141034995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48093c5d3d8adbfd%3A0xd17b944f337a1!2sHaras%20de%20la%20Cha%C3%AEne!5e0!3m2!1sfr!2sfr!4v1714756433127!5m2!1sfr!2sfr" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <div className="access-title">
                Accès au domaine
            </div>
            <div className="access-block">
                <div className="access-block-title">
                    <img src={carIcon} alt="" />
                    <span>En voiture</span>
                </div>
                <div className="access-block-detail">
                    <p>
                        Pour accéder au de Domaine du Haras de la Chaîne :
                        <br />
                        - depuis <strong>Paris</strong> via l'A11, prendre sortie n°4 à Laval
                        <br />
                        - depuis <strong>Rennes</strong> et <strong>Caen</strong> via l'A84, prendre sortie Fougères
                    </p>
                </div>

            </div>
            <div className="access-block">
                <div className="access-block-title">
                    <img src={trainIcon} alt="" />
                    <span>En train</span>
                </div>
                <div className="access-block-detail">
                    <p>
                        La gare SNCF de Rennes se trouve à <strong>1h</strong> de route du domaine.
                        <br />
                        Lignes TGV grandes vitesses depuis Paris en <strong>1h30</strong>.
                    </p>
                </div>
            </div>
            <div className="access-block">
                <div className="access-block-title">
                    <img src={planeIcon} alt="" />
                    <span>En avion</span>
                </div>
                <div className="access-block-detail">
                    <p>
                        L'aéroport de Rennes se trouve à <strong>1h</strong> du domaine.
                        <br />
                        Il est desservi par de nombreuses destinations, parmi lesquelles : Paris, Lyon, Marseille, Nice, Londres...
                    </p>
                </div>
            </div>
            <ContactFooter />
        </div >
    )
}

export default AccessScreen;