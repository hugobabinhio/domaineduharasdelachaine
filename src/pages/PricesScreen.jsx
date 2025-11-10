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
                            Prix du WE TTC :
                            <br />
                            🎉 <b>-25%</b> le WE du <b>25-26 juillet 2026</b> soit <s>6500€</s> <b>4875€</b>
                            <br />
                            <b>6500€</b> les autres dates de <b>2026</b>
                            <br />
                            <b>6900€</b> en <b>2027</b>
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
                            Prix du WE TTC :
                            <br />
                            <b>4500€</b> en <b>2026</b>
                            <br />
                            <b>4800€</b> en <b>2027</b>
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
                            Prix du WE TTC :
                            <br />
                            🎉 -25% le WE du <b>1-2 août 2026</b> soit <s>8500€</s> <b>6375€</b>
                            <br />
                            <b>8500€</b> les autres dates de <b>2026</b>
                            <br />
                            <b>9500€</b> en <b>2027</b>
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