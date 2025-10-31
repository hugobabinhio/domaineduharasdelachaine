import React from "react"
import ecurieThumbnail from '../assets/images/thumbnail/ecurie_thumbnail.jpg'
import hippodromeThumbnail from '../assets/images/thumbnail/hippodrome_thumbnail.jpg'
import skyViewThumbnail from '../assets/images/thumbnail/sky_view_thumbnail.png'
import ContactFooter from "../components/ContactFooter"
import HeaderMenu from "../components/HeaderMenu"

function PricesScreen() {
    return (
        <div>
            <HeaderMenu />
            <div className="prices-title">
                <h1>Nos offres (2026 à 2027)</h1>
            </div>

            <div className="offers-line">
                <div className="offer-block">
                    <span className="offers-line-title">Site de l'Hippodrome</span>
                    <div className="offer-description">
                        <img src={hippodromeThumbnail} alt="" />
                        <p>
                            Salle de réception & hébergements
                            <br />
                            Prix TTC : <strong>6500€ en 2026 / 6900€ en 2027</strong>
                            <br />
                            <i>Nous contacter pour réserver</i>
                        </p>
                    </div>
                </div>
                <div className="offer-block">
                    <span className="offers-line-title">Site de l'Ecurie</span>
                    <div className="offer-description">
                        <img src={ecurieThumbnail} alt="" />
                        <p>
                            Salle de réception & hébergements
                            <br />
                            Prix TTC : <strong>4500€ en 2026 / 4800€ en 2027</strong>
                            <br />
                            <i>Nous contacter pour réserver</i>
                        </p>
                    </div>
                </div>
                <div className="offer-block">
                    <span className="offers-line-title">Les 2 sites</span>
                    <div className="offer-description">
                        <img src={skyViewThumbnail} alt="" />
                        <p>
                            Salle de réception & hébergements
                            <br />
                            Prix TTC : <strong>8500€ en 2026 / 9500€ en 2027</strong>
                            <br />
                            <i>Nous contacter pour réserver</i>
                        </p>
                    </div>
                </div>
            </div>
            <div className="legend-section">
                <strong></strong> Nous nous réservons le droit de modifier les tarifs pour l'année <strong>2028</strong>.
            </div>

            <ContactFooter />
        </div>

    )
}

export default PricesScreen;