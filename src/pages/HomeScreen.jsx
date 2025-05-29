import { Link } from "react-router-dom";
import opinionBadge from '../assets/images/opinion_badge.png'
import weddingAwardBadge from '../assets/images/wedding_awards_badge.jpg'
import arkIcon from '../assets/images/icons/ark_icon.png'
import catererIcon from '../assets/images/icons/caterer_icon.png'
import peopleIcon from '../assets/images/icons/people_icon.png'
import roomIcon from '../assets/images/icons/room_icon.png'
import sleepingIcon from '../assets/images/icons/sleeping_icon.png'
import locationIcon from '../assets/images/icons/location_icon.png'
import cateringPhoto from '../assets/images/catering_photo.jpg'
import customersFeedback from '../assets/images/customers_feedback.png'
import domainOutsidePhoto from '../assets/images/domain_outside.jpg'
import mariagePhoto from '../assets/images/mariage_photo.jpg'
import seminarPhoto from '../assets/images/seminar_photo.png'
import themePartyPhoto from '../assets/images/theme_party_photo.png'
import HeaderMenu from "../components/HeaderMenu"
import ContactFooter from "../components/ContactFooter"
import { MARIAGE_NET_URL } from "../constants";

function HomeScreen() {
    return (
        <div>
            <HeaderMenu />
            <div className="home-title">
                <h1>Mariages, séminaires, et autres évènements</h1>
                <div className="location">
                    <img src={locationIcon} alt="Location icon" />
                    <a href="https://maps.app.goo.gl/Mbqc2fiks8ke37BF8" target="_blank">à St Pierre des Landes</a>
                </div>
            </div>

            <div className="events">
                <div className="event-item">
                    <img src={mariagePhoto} alt="" />
                    <p className="event-title">évènements de famille</p>
                    <p className="event-subtitle">Mariages, anniversaires, weekend de fête, ...</p>
                    <div>
                        <span>Privatisez entièrement le domaine ou l'un des deux sites pour votre mariage ou votre évènement
                            privé. Partagez ce moment unique dans un lieu authentique et convivial.</span>
                    </div>
                </div>
                <div className="event-item">
                    <img src={seminarPhoto} alt="" />
                    <p className="event-title">évènements professionnels</p>
                    <p className="event-subtitle">Séminaires, congrès, repas d'entreprise, ...</p>
                    <div>
                        <span>
                            Organisez vos événements professionnels à tout moment de l'année, dans une ambiance nature,
                            chic, et conviviale. Boostez la cohésion de vos équipes dans un environnemment propice au bien
                            être.
                        </span>
                    </div>
                </div>
                <div className="event-item">
                    <img src={themePartyPhoto} alt="" />
                    <p className="event-title">autres évènements</p>
                    <p className="event-subtitle">Soirées à thème, diners, concerts, ...</p>
                    <span>Organisez tout type d'évènements aux thématiques variées.</span>
                </div>
            </div>

            <div className="advantages">
                <div>
                    <img src={roomIcon} alt="" className="advantages-item" />
                    <span className="advantages-item"><strong>2</strong> sites</span>
                </div>
                <div>
                    <img src={peopleIcon} alt="" className="advantages-item" />
                    <span className="advantages-item">Jusqu'à <strong>280</strong> personnes</span>
                </div>
                <div>
                    <img src={sleepingIcon} alt="" className="advantages-item" />
                    <span className="advantages-item">Jusqu'à <strong>132</strong> couchages</span>
                </div>
                <div>
                    <img src={catererIcon} alt="" className="advantages-item" />
                    <span className="advantages-item">Partenaires</span>
                </div>
                <div>
                    <img src={arkIcon} alt="" className="advantages-item" />
                    <span className="advantages-item">Aménagements personnalisés</span>
                </div>

            </div>

            <div className="information-block odd-section">
                <img className="white-border" src={domainOutsidePhoto} alt="" />
                <p className="left-separator">
                    <span className="information-block-title">
                        Le domaine
                    </span>
                    <span>
                        Ce domaine vous accueille aux portes de la Bretagne. Il s'étend sur 25 ha de prairies et
                        de bois qui raviront petits et grands.
                    </span>
                    <span>
                        Nous mettons à votre disposition plusieurs espaces distincts et complémentaires en fonction de vos
                        besoins :
                    </span>
                    <span>
                        - le site de <strong>l'Ecurie</strong>, avec sa salle de réception (<strong>140 convives</strong>)
                        et ses hébergements (<strong>42 couchages</strong>).&nbsp;
                        <Link to='/ecurie'>En savoir plus</Link>
                        <br />
                    </span>
                    <span>
                        - le site de <strong>l'Hippodrome</strong>, avec sa salle de réception (<strong>280
                            convives</strong>) et ses hébergements (<strong>85 couchages</strong>).&nbsp;
                        <Link to='/hippodrome'>En savoir plus</Link>
                    </span>
                </p>
            </div>

            <div className="information-block">
                <p className="right-separator">
                    <span className="information-block-title">Nos partenaires</span>
                    <span>Nous proposons une très large gamme de partenaires avec lesquels nous avons l'habitude
                        de travailler :
                    </span>
                    <br />
                    <span>
                        - traiteurs</span>
                    <br />
                    <span>
                        - photographes</span>
                    <br />
                    <span>
                        - DJs
                    </span>
                    <br />
                    <span>
                        - décorateurs
                    </span>
                    <br />
                    <span>
                        - loueurs de barnums
                    </span>
                </p>
                <img className="green-border" src={cateringPhoto} alt="" />
            </div>
            <div className="odd-section">
                <div className="customer-feedback-title">
                    <img src={weddingAwardBadge} alt="" />
                    <p>Avis clients</p>
                    <img src={opinionBadge} alt="" />
                </div>
                <div className="customer-feedback">
                    <a href={MARIAGE_NET_URL}>
                        <img src={customersFeedback} alt="" />
                    </a>
                </div>
            </div>


            <ContactFooter />
        </div>


    )
}

export default HomeScreen;