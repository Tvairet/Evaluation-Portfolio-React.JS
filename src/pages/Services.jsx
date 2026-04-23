import React from "react";
import banner from "../img/banner.jpg";
import design from "../icons/brosse.png";
import devweb from "../icons/code.png";
import seo from "../icons/verre.png"

const Services = () => {
    return (
        <main className="main">
            <section className="banner">
                <img src={banner} alt="une bannière bleue"/>
            </section>
            <section className="tittle">
                <h1>Mon offre de services</h1>
                <span>Voici les prestations sur lesquelles je peux intervenir</span>
            </section>
            <section className="services">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">                       
                        <div class="card-body">
                            <img src={design} alt="un pinceau"/>
                            <h5 class="card-title">UX Design</h5>
                            <p class="card-text">L'UX Design est une discipline qui consiste à concevoir des produits 
                                                    (sites web, applications mobiles, logiciels, objects connectés, ect.) en plaçant l'utilisateur au centre des préoccupations. 
                                                    L'objectif est de rendre l'expérience utilisateur la plus fuide et agréable possible.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">                       
                        <div class="card-body">
                            <img src={devweb} alt="un code"/>
                            <h5 class="card-title">Développement web</h5>
                            <p class="card-text">Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation 
                                                    (HTML, CSS, JavaScipt, PHP, ect.) et des frameworks (Bootstrap, React, Angular, ect.)</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <div class="card-body">
                            <img src={seo} alt="une loupe"/>
                            <h5 class="card-title">Référencement</h5>
                            <p class="card-text">Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche 
                                                    (Google, Bing, Yahoo, ect.). L'objectif est d'attirer un maximum de visiteus qualifiés sur le site.</p>
                        </div>
                        </div>
                    </div>
                </div>  
            </section>
        </main>
    );
};

export default Services;