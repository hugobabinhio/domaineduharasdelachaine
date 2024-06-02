import React from "react";
import addressIcon from '../assets/images/icons/address_icon.png'
import emailIcon from '../assets/images/icons/email_icon.png'
import phoneIcon from '../assets/images/icons/phone_icon.png'

function ContactFooter() {
    return (
        <footer>
            <h4>Contact</h4>
            <div className="contact-information-line">
                <span>Didier Blot : </span>
                <img src={phoneIcon} alt="" />
                <span>06 15 80 55 28</span>
                <img src={emailIcon} alt="" />
                <span>didier.blot2014@gmail.com</span>
            </div>
            <div className="contact-information-line">
                <span>Florence Berthelot : </span>
                <img src={phoneIcon} alt="" />
                <span>06 12 96 74 74</span>
                <img src={emailIcon} alt="" />
                <span>florenceberthelot71@free.fr</span>
            </div>
            <div class="contact-information-line">
                <img src={addressIcon} alt="" />
                <span>Le Haut Fousseau 53500 Saint-Pierre des Landes</span>
            </div>
        </footer>

    );
}

export default ContactFooter;