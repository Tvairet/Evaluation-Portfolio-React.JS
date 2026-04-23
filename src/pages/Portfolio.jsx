import React from "react";
import banner from "../img/banner.jpg";
import fresh from "../img/portfolio/fresh-food.jpg";
import restaurant from "../img/portfolio/restaurant-japonais.jpg";
import espace from "../img/portfolio/espace-bien-etre.jpg";
import seo from "../img/portfolio/seo.jpg";
import api from "../img/portfolio/coder.jpg";
import maquette from "../img/portfolio/screens.jpg"

const Portfolio = () => {
    return (
        <main className="main">
            <section className="banner">
                <img src={banner} alt="une bannière bleue"/>
            </section>
            <section className="tittle">
        <h1>Portfolio</h1>
        <span>Voici quelques-unes de mes réalisations</span>
            </section>
            <section className="portfolio">
                <div class="row row-cols-2 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                        <img src={fresh} class="card-img-top" alt="des légumes"/>
                            <div class="card-body">
                            <h5 class="card-title">Fresh Food</h5>
                            <p class="card-text">Site de vente de produits frais en ligne</p>
                            <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Site réalisé avec PHP et MySQL</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={restaurant} class="card-img-top" alt="des sushis"/>
                            <div class="card-body">
                            <h5 class="card-title">Restaurant Akira</h5>
                            <p class="card-text">Site de vente de produits frais en ligne</p>
                            <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Site réalisé avec WordPress</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={espace} class="card-img-top" alt="un écran reposant"/>
                            <div class="card-body">
                            <h5 class="card-title">Espace bien-être</h5>
                            <p class="card-text">Site de vente de produits frais en ligne</p>
                            <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Site réalisé avec LARAVEL</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={seo} class="card-img-top" alt="des mots"/>
                            <div class="card-body">
                            <h5 class="card-title">SEO</h5>
                            <p class="card-text">Amélioration du référencement d'un site e-commerce</p>
                            <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Utilisation des outils SEO</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={api} class="card-img-top" alt="des codes de programmation"/>
                            <div class="card-body">
                            <h5 class="card-title">Création d'une API</h5>
                            <p class="card-text">Création d'une API RESTFULL publique</p>
                            <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">PHP - SYMFONY</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={maquette} class="card-img-top" alt="un ordinateur et une tablette avec un site web"/>
                            <div class="card-body">
                            <h5 class="card-title">Maquette d'un site web</h5>
                            <p class="card-text">Création du prototype d'un site</p>
                            <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Réalisé avec FIGMA</small>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </main>
    );
};

export default Portfolio;
