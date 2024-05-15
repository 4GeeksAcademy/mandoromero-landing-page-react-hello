import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return <footer className="bg-dark text-white text-center">{`copyright © Armando ${year}`}</footer>
};


export default Footer;


