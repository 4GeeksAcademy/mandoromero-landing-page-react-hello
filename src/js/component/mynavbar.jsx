import React from "react";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand pr-3">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-nav ms-auto navbar-collapse collapse" id="navbarSupportedContent">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#">About</a>
                    <a className="nav-link" href="#">Services</a>
                    <a className="nav-link" href="#">Contact</a>
                </div>
            </div>
        </nav>
    );
}; export default Navbar;

