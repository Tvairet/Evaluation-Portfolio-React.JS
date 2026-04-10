import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-secondary text-light text-uppercase fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand text-light" href="#page-top">John Doe</a>
                    <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-0 mx-lg-1">
                        <Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/">Home</Link>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/services">Services</Link>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/portfolio">Portfolio</Link>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/contact">Contact</Link>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/mentions">Mentions légales</Link>
                    </li>
                </ul>
                </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;

