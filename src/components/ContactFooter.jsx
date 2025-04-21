import React from "react";
import addressIcon from '../assets/images/icons/address_icon.png'
import emailIcon from '../assets/images/icons/email_icon.png'
import facebookIcon from '../assets/images/icons/facebook_icon.png'
import instagramIcon from '../assets/images/icons/instagram_icon.png'
import mariagesNetIcon from '../assets/images/icons/mariages.net_icon.png'
import phoneIcon from '../assets/images/icons/phone_icon.png'
import { FACEBOOK_URL, INSTAGRAM_URL, MARIAGE_NET_URL } from "../constants";

function ContactFooter() {
    return (
        <footer>
            <h4>Contact</h4>
            <div className="contact-information-line">
                <span>Didier Blot : </span>
                <img src={phoneIcon} alt="" />
                <span>06 15 80 55 28</span>
                <br />
                <img src={emailIcon} alt="" />
                <span>didier.blot2014@gmail.com</span>
            </div>
            <div className="contact-information-line">
                <span>Florence Berthelot : </span>
                <img src={phoneIcon} alt="" />
                <span>06 12 96 74 74 </span>
                <br />
                <img src={emailIcon} alt="" />
                <span>florenceberthelot71@free.fr</span>
            </div>
            <div className="contact-information-line">
                <img src={addressIcon} alt="" />
                <span>Le Haut Fousseau 53500 Saint-Pierre des Landes</span>
            </div>
            <div className="social-networks-line">
                <a href={MARIAGE_NET_URL}>
                    <img src={mariagesNetIcon} alt="" />
                </a>
                <a href={INSTAGRAM_URL}>
                    <img src={instagramIcon} alt="" />
                </a>
                <a href={FACEBOOK_URL}>
                    <img src={facebookIcon} alt="" />
                </a>
            </div>
        </footer>

    );
}

export default ContactFooter;