import React from "react";
import pmrAccessIcon from '../assets/images/icons/pmr_access_icon.png'
import receptionRoomIcon from '../assets/images/icons/reception_room_icon.png'
import sleepingIcon from '../assets/images/icons/sleeping_icon.png'
import terraceIcon from '../assets/images/icons/terrace_icon.png'
import ecurieOutsideNight from '../assets/images/photos/ecurie_hall/ecurie_building_night.jpg'
import ecurieCeremony from '../assets/images/photos/ecurie_hall/ecurie_ceremony.jpeg'
import ecurieHall from '../assets/images/photos/ecurie_hall/ecurie_hall.jpg'
import ecurieOutsideSun from '../assets/images/photos/ecurie_hall/ecurie_outside_sun.png'
import etrierBathroom from '../assets/images/photos/etrier/etrier_bathroom.jpeg'
import etrierHome from '../assets/images/photos/etrier/etrier_home.jpeg'
import etrierKitchen from '../assets/images/photos/etrier/etrier_kitchen.jpeg'
import etrierNature from '../assets/images/photos/etrier/etrier_nature.jpeg'
import etrierRoom from '../assets/images/photos/etrier/etrier_room.jpeg'
import ladsBlueRoom from '../assets/images/photos/lads_house/lads_blue_room.jpg'
import ladsGreenRoom from '../assets/images/photos/lads_house/lads_green_room.jpg'
import ladsHallway from '../assets/images/photos/lads_house/lads_hallway.jpg'
import ladsHome from '../assets/images/photos/lads_house/lads_home.jpg'
import jockeyHome from '../assets/images/photos/jockey/jockey_home.jpeg'
import jockeyLivingRoom from '../assets/images/photos/jockey/jockey_living_room.jpeg'
import jockeyOutside from '../assets/images/photos/jockey//jockey_outside.jpg'
import jockeyRoom from '../assets/images/photos/jockey/jockey_room.jpeg'
import jockeyVeranda from '../assets/images/photos/jockey/jockey_veranda.jpeg'
import palfrenierHome from '../assets/images/photos/palfrenier_house/palfrenier_home.jpeg'
import palfrenierKitchen from '../assets/images/photos/palfrenier_house/palfrenier_kitchen.jpeg'
import palfrenierLivingRoom from '../assets/images/photos/palfrenier_house/palfrenier_living_room.jpeg'

import ContactFooter from '../components/ContactFooter'
import HeaderMenu from '../components/HeaderMenu'
import ImagesCarousel from '../components/ImagesCarousel'

function EcurieSiteScreen() {
    return (
        <div>
            <HeaderMenu />
            <div className="ecurie-title">
                <h1>Le site de l'Ecurie</h1>
            </div>

            <div className="advantages">
                <div>
                    <img src={receptionRoomIcon} alt="" className="advantages-item" />
                    <span className="advantages-item"><strong>1</strong> salle de réception</span>
                </div>
                <div>
                    <img src={sleepingIcon} alt="" className="advantages-item" />
                    <span className="advantages-item"><strong>42</strong> couchages</span>
                </div>
                <div>
                    <img src={terraceIcon} alt="" className="advantages-item" />
                    <span className="advantages-item"><strong>1</strong> grande terrasse</span>
                </div>
                <div>
                    <img src={pmrAccessIcon} alt="" className="advantages-item" />
                    <span className="advantages-item">Accès <strong>PMR</strong></span>
                </div>
            </div>

            <div className="information-block odd-section">
                <ImagesCarousel images={[ecurieHall, ecurieCeremony, ecurieOutsideNight, ecurieOutsideSun]}></ImagesCarousel>
                <p className="left-separator">
                    <span className="information-block-title">
                        La salle de réception
                    </span>
                    <span>
                        Cette ancienne écrurie entièrement transformée allie le charme de l'ancien et du moderne.
                    </span>
                    <span>
                        Située au coeur d'un élevage de purs sangs, elle peut recevoir jusqu'à <strong>140
                            convives</strong> (office de
                        réchauffage, salle de danse, et terrasse).
                    </span>
                    <span>
                        Elle est accessible et équipée pour les personnes à mobilité réduite.
                    </span>
                </p>
            </div>

            <div className="summary-block">
                <p>
                    <h4 className="summary-block-title">Les hébergements de l'écurie</h4>
                    <span>
                        En plus de la salle de réception, le site regroupe un ensemble de <strong>4 maisons </strong>
                        avec un total de <strong>42 couchages </strong>:
                    </span>
                    <span>- la Maison de l'Etrier (14 couchages)</span>
                    <span>- la Maison des Lads (13 couchages)</span>
                    <span>- la Maison du Palefrenier (9 couchages)</span>
                    <span>- la Maison du Jockey (6 couchages)</span>
                    <span>
                        Chaque chambre est dotée de ses <strong>sanitaires</strong> et de <strong>sa salle d'eau.</strong>
                    </span>
                </p>
            </div>

            <div className="information-block odd-section">
                <p className="right-separator">
                    <span className="information-block-title">
                        La maison de l'étrier
                    </span>
                    <br />
                    <span>
                        La Maison de l'Etrier se situe à 950m de la salle de réception de l'Ecurie et dispose de <strong>14 couchages</strong>.
                    </span>
                </p>
                <ImagesCarousel images={[etrierRoom, etrierHome, etrierBathroom, etrierKitchen, etrierNature]}></ImagesCarousel>
            </div>

            <div className="information-block">
                <ImagesCarousel images={[ladsGreenRoom, ladsBlueRoom, ladsHome, ladsHallway]}></ImagesCarousel>
                <p className="left-separator">
                    <span className="information-block-title">
                        La maison des Lads
                    </span>
                    <br />
                    <span>
                        La Maison des Lads se situe à proximité immédiate de la salle de réception de l'Ecurie
                        et
                        présente une capacité de <strong>13 couchages</strong>.
                    </span>
                </p>
            </div>

            <div className="information-block odd-section">
                <p className="right-separator">
                    <span className="information-block-title">
                        La maison du palfrenier
                    </span>
                    <br />
                    <span>
                        Cette maison entièrement rénovée, est située sur un terrain de 2000 m² au milieu de la nature et face aux paddocks.
                        Elle vous offre toutes les commodités : cuisine équipée, 3 chambres, pour un total de <strong>9 couchages</strong>.
                    </span>
                </p>
                <ImagesCarousel images={[palfrenierHome, palfrenierKitchen, palfrenierLivingRoom]}></ImagesCarousel>
            </div>

            <div className="information-block">
                <ImagesCarousel images={[jockeyHome, jockeyRoom, jockeyVeranda, jockeyLivingRoom, jockeyOutside]}></ImagesCarousel>
                <p className="left-separator">
                    <span className="information-block-title">
                        La maison du jockey
                    </span>
                    <br />
                    <span>
                        Cet agréable logis permet de séjourner au milieu du Haras en toute sérénité.
                        Il dispose d'une agréable véranda exposée plein sud et de <strong>6 couchages</strong>.
                    </span>
                </p>
            </div>

            <ContactFooter />
        </div>

    )
}

export default EcurieSiteScreen;