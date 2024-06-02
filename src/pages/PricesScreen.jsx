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
                <h3>Nos offres (2024/2025)</h3>
            </div>
            <div className="offers-line">
                <div className="offer-block">
                    <span className="offers-line-title">Site de l'Ecurie</span>
                    <div className="offer-description">
                        <img src={ecurieThumbnail} alt="" />
                        <p>
                            Salle de réception & hébergements
                            <br />
                            Prix : <strong>4500€ TTC</strong>
                            <br />
                            <i>Nous contacter pour réserver</i>
                        </p>
                    </div>
                </div>
                <div className="offer-block">
                    <span className="offers-line-title">Site de l'Hippodrome</span>
                    <div className="offer-description">
                        <img src={hippodromeThumbnail} alt="" />
                        <p>
                            Salle de réception & hébergements
                            <br />
                            Prix : <strong>6500€ TTC</strong>
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
                            Prix : <strong>8500€ TTC</strong>
                            <br />
                            <i>Nous contacter pour réserver</i>
                        </p>
                    </div>
                </div>
            </div>

            <ContactFooter />
        </div>

    )
}

export default PricesScreen;