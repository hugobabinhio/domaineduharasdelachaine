import React from "react"
import marqueeIcon from '../assets/images/icons/marquee_icon.png'
import pmrAccessIcon from '../assets/images/icons/pmr_access_icon.png'
import receptionRoomIcon from '../assets/images/icons/reception_room_icon.png'
import sleepingIcon from '../assets/images/icons/sleeping_icon.png'
import tennisIcon from '../assets/images/icons/tennis_icon.png'
import terraceIcon from '../assets/images/icons/terrace_icon.png'
import hippodromeEmptyRoomPhoto from '../assets/images/hippodrome_empty_room_poho.jpg'
import hippodromeRoomPhoto from '../assets/images/hippodrome_room_photo.jpg'
import hippodromeRoomWindowsPhoto from '../assets/images/hippodrome_room_windows_photo.jpeg'
import coventryBuildings from '../assets/images/photos/coventry/coventry_buildings.jpg'
import coventryCeremony from '../assets/images/photos/coventry/coventry_ceremony.png'
import coventryOutside from '../assets/images/photos/coventry/coventry_outside.jpg'
import coventrySun from '../assets/images/photos/coventry/coventry_sun.jpg'
import paddockHome from '../assets/images/photos/paddock/paddock_home.jfif'
import purSangHome from '../assets/images/photos/pur_sang/pur_sang_home.jpg'
import purSangRoom from '../assets/images/photos/pur_sang/pur_sang_room.jpg'
import sellerieHome from '../assets/images/photos/sellerie/sellerie_home.jpg'
import sellerieRoom from '../assets/images/photos/sellerie/sellerie_room.jpg'
import ContactFooter from '../components/ContactFooter'
import HeaderMenu from "../components/HeaderMenu"
import ImagesCarousel from '../components/ImagesCarousel'
import hippodromeHallWithTables from '../assets/images/photos/hippodrome_hall/hall_with_tables.jpeg'
import hippodromeHeightDecorations from '../assets/images/photos/hippodrome_hall/height_decorations.jpeg'

function HippodromeSiteScreen() {
    return (
        <div>
            <HeaderMenu />
            <div className="hippodrome-title">
                <h1>Le site de l'Hippodrome</h1>
            </div>

            <div className="advantages">
                <div>
                    <img src={receptionRoomIcon} alt="" className="advantages-item" />
                    <span className="advantages-item"><strong>1</strong> salle de réception</span>
                </div>
                <div>
                    <img src={sleepingIcon} alt="" className="advantages-item" />
                    <span className="advantages-item"><strong>84</strong> couchages</span>
                </div>
                <div>
                    <img src={terraceIcon} alt="" className="advantages-item" />
                    <span className="advantages-item"><strong>1</strong> grande terrasse</span>
                </div>
                <div>
                    <img src={marqueeIcon} alt="" className="advantages-item" />
                    <span className="advantages-item"><strong>1</strong> barnum</span>
                </div>
                <div>
                    <img src={tennisIcon} alt="" className="advantages-item" />
                    <span className="advantages-item">Loisirs</span>
                </div>
                <div>
                    <img src={pmrAccessIcon} alt="" className="advantages-item" />
                    <span className="advantages-item">Accès <strong>PMR</strong></span>
                </div>
            </div>

            <div className="information-block odd-section">
                <p className="right-separator">
                    <span className="information-block-title">
                        La salle de réception
                    </span>
                    <br />
                    <span>
                        Cette ancienne étable et sa salle de traite étaient en ruine avant sa rénovation. Grâce à son agrandissement, la surface existante a pu être doublée.
                    </span>
                    <br />
                    <span>
                        Désormais c'est une salle flambant neuve pouvant accueillir jusqu'à <strong>265 convives</strong> dans une pièce de <strong>340 m²</strong>.
                    </span>
                    <br />
                    <span>
                        Elle dispose d'une <strong>cuisine professionnelle</strong> et d'une <strong>terrasse</strong> orientée plein sud.
                    </span>
                    <span>
                        Elle est <strong>accessible</strong> et équipée pour les personnes à mobilité réduite.
                    </span>
                </p>
                <ImagesCarousel images={[hippodromeHallWithTables, hippodromeRoomPhoto, hippodromeRoomWindowsPhoto, hippodromeHeightDecorations, hippodromeEmptyRoomPhoto]}></ImagesCarousel>
            </div>

            <div className="summary-block">
                <p>
                    <h4 className="summary-block-title">Les hébergements de l'hippodrome</h4>
                    <span>
                        En plus de la salle de réception, le site regroupe un semble de <strong>4 logements </strong>
                        avec un total de <strong>85 couchages </strong>:
                    </span>
                    <span>- Le Manoir Coventry (44 couchages)</span>
                    <span>- Le Pur Sang (19 couchages)</span>
                    <span>- La Sellerie (12 couchages)</span>
                    <span>- Le Paddock (10 couchages)</span>
                    <span>
                        Chaque chambre est dotée de ses <strong>sanitaires</strong> et de <strong>sa salle d'eau.</strong>
                    </span>
                </p>
            </div>

            <div className="information-block odd-section">
                <ImagesCarousel images={[coventryOutside, coventrySun, coventryBuildings, coventryCeremony]}></ImagesCarousel>
                <p className="left-separator">
                    <span className="information-block-title">
                        Le Manoir Coventry
                    </span>
                    <br />
                    <span>
                        Dans ce Manoir du 18ème siècle entouré de verdure, vous pourrez recevoir vos hôtes en toute
                        convivialité et confort : <strong>44 couchages</strong> sont à votre disposition.
                    </span>
                    <br />
                    <span>
                        Pour vos <strong>loisirs</strong>, vous disposerez de terrains de tennis, de football, de basket,
                        ainsi que d'une table de tennis de table.
                    </span>
                </p>
            </div>

            <div className="information-block">
                <p className="right-separator">
                    <span className="information-block-title">
                        Le Pur Sang
                    </span>
                    <br />
                    <span>
                        Situé à deux pas de la salle de réception de l'Hippodrome, le Pur Sang est composé de <strong>19 couchages</strong>.
                    </span>
                </p>
                <ImagesCarousel images={[purSangRoom, purSangHome]}></ImagesCarousel>
            </div>

            <div className="information-block odd-section">
                <ImagesCarousel images={[sellerieHome, sellerieRoom]}></ImagesCarousel>
                <p className="left-separator">
                    <span className="information-block-title">
                        La Sellerie
                    </span>
                    <br />
                    <span>
                        Egalement très proche de la salle de réception de l'Hippodrome, la Sellerie dispose de <strong>12 couchages</strong>.
                    </span>
                </p>
            </div>

            <div className="information-block">
                <ImagesCarousel images={[paddockHome]}></ImagesCarousel>
                <p className="left-separator">
                    <span className="information-block-title">
                        Le Paddock
                    </span>
                    <br />
                    <span>
                        Rénové tout récemment, ce bâtiment offre <strong>10 couchages</strong> additionnels.
                    </span>
                </p>
            </div>
            <ContactFooter />
        </div>
    )
}

export default HippodromeSiteScreen;