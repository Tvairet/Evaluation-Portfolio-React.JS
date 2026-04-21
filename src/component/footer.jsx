import React from "react";
import github from "../icons/github.png"
import linkedin from "../icons/linkedin.png"
import twitter from "../icons/twitter.png"


const Footer = () => {
    return (
        <footer>
        <div class="adresse">
        <h4>John Doe</h4>
        <address>
            40 rue Laure Diebold<br/>
            69009 Lyon, France <br/>
            <a href="tel:1020304050">10 20 30 40 50</a> <br/>
            <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
            <div class="social">
            <a href="/" rel="nofollow" target="blank">
                <img src={github} alt="github"/>
            </a>
            <a href="/" rel="nofollow" target="blank">
                <img src={twitter} alt="twitter"/>
            </a>
            <a href="/" rel="nofollow" target="blanl">
                <img src={linkedin} alt="linkedin"/>
            </a>
            </div>
        </address>
        </div>
        <div class="liens">
            <h4>Liens utiles</h4>
            <a href="/">Accueil</a>
            <a href="../pages/Services">Services</a>
            <a href="../pages/Portfolio">Portfolio</a>
            <a href="../pages/Contact">Me contacter</a>
            <a href="../pages/Mentions">Mentions légales</a>           
        </div>
        <div class="realisations">
            <h4>Mes dernières réalisations</h4>
            <a href="../pages/Portfolio">Fresh Food</a>
            <a href="../pages/Portfolio">Restaurent Akira</a>
            <a href="../Portfolio">Espace bien-être</a>
            <a href="../Portfolio">SEO</a>
            <a href="../portfolio">Création d'une API</a>
            <a href="../Portfolio">Maquette d'un site</a>
        </div>
        </footer>
    );
};

export default Footer