import React from "react";
import email from "../icons/email.png";
import gps from "../icons/gps.png";
import iphone from "../icons/iphone.png";
import carte from "../icons/trifold.png"

const Contact = () => {
    return (
        <main className="main">
            <section className="tittle">
                <h1>Contact</h1>
                <span>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</span>
            </section>
            <section className="contact">
                <form action="" className="form-contact" method="post" >
                    <h2>Formulaire de contact</h2>
                    <div>
                    <input type="text" placeholder="Votre nom" id="nom" required/>
                    </div>
                    <div>
                    <input type="email" placeholder="Votre adresse email" id="email" required/>
                    </div>
                    <input type="tel" placeholder="Vote numéro de téléphone" id="telephone" required/>
                    <input type="text" placeholder="Sujet" id="sujet" required/>
                    <textarea name="message" placeholder="Votre message" cols="60" rows="10" required/>
                    <button type="submit">Envoyer</button>
                </form>
            
            <section className="map">
                <h2>Mes coordonnées</h2>
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
                    <iframe
                    title="adresse de John Doe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.627152462179!2d4.796403976178074!3d45.778661971080815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1777020968076!5m2!1sfr!2sfr" width="540" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </address>
            </section>
            </section>
        </main>
    );
};

export default Contact;
