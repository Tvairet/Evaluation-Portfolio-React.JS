import React from "react";
import email from "../icons/email.png";
import gps from "../icons/gps.png";
import iphone from "../icons/iphone.png";
import carte from "../icons/trifold.png"




function Mentions () {
    return (
        <main className="main">
            <section className="tittle">
                <h1>Mentions légales</h1>
            </section>
            <section className="list">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Editeur du site
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <address>
                            <span>John Doe</span>
                                <div>
                            <img src={carte} alt="une carte"></img>
                                40 rue Laure Diebold
                                </div>
                                <div>
                            <img src={gps} alt="un point gps"></img>
                                69009 Lyon, france
                                </div>
                                <div>
                            <img src={iphone} alt="un téléphone"></img>
                            <a href="tel:1020304050">10 20 30 40 50</a>
                                </div>
                                <div>
                            <img src={email} alt="une enveloppe"></img>
                            <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                                </div>
                            </address>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Hébergeur
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <span className="herbergeur-name">Alwaysdata</span>
                        <address>
                            <span>91 rue du Faubourg Saint-Honoré, 75008 Paris</span>
                            <a href="www.alwaysdata.com">www.alwaysdata.com</a>
                        </address>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Crédits
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <h2>Crédits</h2>
                        <span>Ce site a été réalisé par John Doe, étudiant au 
                            <a href="https://www.centre-europeen-formation.fr/">Centre Européen de formation</a>
                        </span>
                        <span id="italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site 
                            <a href="https://pixabay.com/fr/">Pixabay</a>
                        </span>
                        <span id="italic">La favicon de ce site a été fournie par 
                            <a href="https://pixabay.com/fr/">John doe Icons erstellt von Freepik - Flaticon</a>
                        </span>
                        </div>
                    </div>
                </div>
                </div>
            </section>

        </main>
    );
};

export default Mentions;