import React from "react";
import receptionRoomIcon from '../assets/images/icons/reception_room_icon.png'
import sleepingIcon from '../assets/images/icons/sleeping_icon.png'
import terraceIcon from '../assets/images/icons/terrace_icon.png'
import ecurieNightPhoto from '../assets/images/ecurie_night_photo.jpg'
import ecurieRoomPhoto from '../assets/images/ecurie_room_photo.jpg'
import ecurieSunPhoto from '../assets/images/ecurie_sun_photo.png'
import ladsHallPhoto from '../assets/images/lads_hall_photo.jpg'
import ladsHomePhoto from '../assets/images/lads_home_photo.jpg'
import ladsRoomPhoto from '../assets/images/lads_room_photo.jpg'
import etrierHousePhoto from '../assets/images/etrier_house_photo.jpeg'
import etrierLoungePhoto from '../assets/images/etrier_lounge_photo.jpg'
import jockeyHouseOutsidePhoto from '../assets/images/jockey_house_outside_photo.jpg'
import jockeyHouseVerandaPhoto from '../assets/images/jockey_house_veranda_photo.png'
import palfrenierHouseInsidePhoto from '../assets/images/palfrenier_house_inside_photo.png'
import palfrenierHouseOutsidePhoto from '../assets/images/palfrenier_house_outside_photo.png'
import ContactFooter from '../components/ContactFooter'
import HeaderMenu from '../components/HeaderMenu'
import ImagesCarousel from '../components/ImagesCarousel'

function EcurieSiteScreen() {
    return (
        <div>
            <HeaderMenu />
            <div className="ecurie-title">
                <h3>Le site de l'Ecurie</h3>
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
            </div>

            <div className="information-block odd-section">
                <ImagesCarousel images={[ecurieRoomPhoto, ecurieNightPhoto, ecurieSunPhoto]}></ImagesCarousel>
                <p className="left-separator">
                    <span className="information-block-title">
                        La salle de réception
                    </span>
                    <span>
                        Cette ancienne écrurie entièrement transformée allie le charme de l'ancien et du moderne.
                    </span>
                    <span>
                        Située au coeur d'un élevage de purs sangs, elle peut recevoir jusqu'à <strong>145
                            convives</strong> (office de
                        réchauffage, salle de danse, et terrasse).
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
                <ImagesCarousel images={[etrierHousePhoto, etrierLoungePhoto]}></ImagesCarousel>
            </div>

            <div className="information-block">
                <ImagesCarousel images={[ladsHomePhoto, ladsRoomPhoto, ladsHallPhoto]}></ImagesCarousel>
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
                <ImagesCarousel images={[palfrenierHouseOutsidePhoto, palfrenierHouseInsidePhoto]}></ImagesCarousel>
            </div>

            <div className="information-block">
                <ImagesCarousel images={[jockeyHouseOutsidePhoto, jockeyHouseVerandaPhoto]}></ImagesCarousel>
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