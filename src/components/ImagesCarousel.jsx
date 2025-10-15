import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./ImagesCarousel.css"

function ImagesCarousel({ images }) {
    /* 
        selectedItem={0} : démarre toujours sur la première slide
        autoPlay : fait défiler automatiquement les images
        interval : nombre de sdcondes entre les images lors du défilement
        infiniteLoop : continue le défilement même lorsqu'il est arrivé à la dernière image
        thumbWidth : taille des vignettes
        showIndicators : affichage des curseurs
        showStatus : indicateur du nombre d'images en haut à droite (ex : 1 sur 3)
    */

    // Si les images ne sont pas encore là → rien à afficher
    if (!images || images.length === 0) {
        return <p>Chargement des photos...</p>
    }

    return (
        <div className="carousel-block">
            <Carousel
                selectedItem={0}
                autoPlay={false}
                interval={6000}
                infiniteLoop={true}
                thumbWidth={120}
                showIndicators={false}
                showStatus={false}
            >
                {images.map((slide, i) => (
                    <div key={slide.key} className="carousel-slide">
                        <img src={slide.url} alt={slide.description || `photo ${i + 1}`} />
                        {slide.description && (
                            <p className="custom-legend">{slide.description}</p>
                        )}
                    </div>
                ))}
            </Carousel>
        </div>

    )
}

export default ImagesCarousel