import React from "react";
import photo from "../img/john-doe-about.jpg";

function Home() {

    return (
        <main className="main">
            <section id="slider" >
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
                <a href="https://api.github.com/users/github-john-doe" target="blank">
                    <button type="button" class="btn btn-danger">En savoir plus
                    </button>
                </a>
            </section>
            <section className="presentation">
                <div className="propos">
                    <h3>A propos</h3>
                    <img src={photo} alt="un développeut au travail"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus scelerisque facilisis nibh, vitae posuere dolor porta nec. Duis at mauris in velit condimentum blandit.
                        Nulla tempus est eget nulla facilisis mattis. Fringilla énée purus egestas ornare lobortis.
                        Sed efficace magna non laoreet suscipit. Praesent porta risus eu tortor iaculis hendrerit.</p>        
                </div>
                <div className="competences">
                    <h3>Mes compétences</h3>
                    <span>HTML 90%</span>
                    <div class="progress mb-4">
                        <div class="progress-bar bg-danger" role="progressbar" aria-label="danger example" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span>CSS3 80%</span>
                        <div class="progress mb-4">
                        <div class="progress-bar w-50 bg-info" role="progressbar" aria-label="Info example" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span>Javascript 70%</span>
                        <div class="progress mb-4">
                        <div class="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span>PHP60%</span>
                        <div class="progress mb-4">
                        <div class="progress-bar bg-success" role="progressbar" aria-label="success example" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span>React 50%</span>
                        <div class="progress mb-4">
                        <div class="progress-bar bg-progress" role="progressbar" aria-label="progress example" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    

                </div>
            </section>
        </main>
    );
};

export default Home;