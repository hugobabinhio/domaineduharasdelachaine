import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./ImagesCarousel.css"

function ImagesCarousel({ images }) {
    /* 
        autoPlay : fait défiler automatiquement les images
        interval : nombre de sdcondes entre les images lors du défilement
        infiniteLoop : continue le défilement même lorsqu'il est arrivé à la dernière image
        thumbWidth : taille des vignettes
        showIndicators : affichage des curseurs
        showStatus : indicateur du nombre d'images en haut à droite (ex : 1 sur 3)
    */

    return (
        <div className="carousel-block">
            <Carousel
                autoPlay={false}
                interval={6000}
                infiniteLoop
                thumbWidth={120}
                showIndicators={false}
                showStatus={false}
            >
                {images.map(slide => (
                    <div >
                        <img src={slide} alt="" />
                    </div>
                ))}
            </Carousel>
        </div>

    )
}

export default ImagesCarousel