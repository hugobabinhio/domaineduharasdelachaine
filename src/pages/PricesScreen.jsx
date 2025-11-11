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
                        <div>
                            <p>
                                Salle de réception & hébergements
                            </p>
                            <p>
                                🎉 Offre spéciale de <b>-25%</b> soit <s>6500€</s> <b>4875€</b> pour les WE :
                                <br />
                                - du <b>25-26 juillet 2026</b>
                                <br />
                                - du <b>1-2 août 2026</b>
                            </p>
                            <p>
                                Prix des autres WE :
                                <br />
                                - <b>6500€</b> en 2026
                                <br />
                                - <b>6900€</b> en 2027
                            </p>
                            <i>Nous contacter pour réserver</i>
                        </div>

                    </div>
                </div>
                <div className="offer-block">
                    <span className="offers-line-title">Site de l'Ecurie</span>
                    <div className="offer-description">
                        <img src={ecurieThumbnail} alt="" />
                        <div>
                            <p>
                                Salle de réception & hébergements
                            </p>
                            <p>
                                🎉 Offre spéciale de <b>-25%</b> soit <s>4500€</s> <b>3375€</b> pour le WE :
                                <br />
                                - du <b>1-2 août 2026</b>
                            </p>
                            <p>
                                Prix des autres WE :
                                <br />
                                - <b>4500€</b> en <b>2026</b>
                                <br />
                                - <b>4800€</b> en <b>2027</b>
                            </p>
                            <i>Nous contacter pour réserver</i>
                        </div>
                    </div>
                </div>
                <div className="offer-block">
                    <span className="offers-line-title">Les 2 sites</span>
                    <div className="offer-description">
                        <img src={skyViewThumbnail} alt="" />
                        <div>
                            <p>
                                Salle de réception & hébergements
                            </p>
                            <p>
                                Prix des autres WE :
                                <br />
                                - <b>8500€</b> en <b>2026</b>
                                <br />
                                - <b>9500€</b> en <b>2027</b>
                            </p>
                            <i>Nous contacter pour réserver</i>
                        </div>
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