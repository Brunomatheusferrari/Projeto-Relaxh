import React from "react";
import { MdClose } from "react-icons/md";
import Sidebar from "./index.jsx";
import { Link } from "react-router-dom";

export function MenuSidebar({ isVisible, closeModal }) {    
    return(
    <>
    <Sidebar isVisible={isVisible}>
        <div className="sidebarBackground">
        <MdClose className="menu-close-button" onClick={closeModal} />
        <div className="leaves1" />
        <div className="menu-container">
            <div className="white-line" />
            <div className="menu-items">
                <Link to="/sobre" className="link">
                <div className="menu-item-container">
                    <p className="item-number">01</p>
                    <p className="menu-item">Sobre</p>
                </div>
                </Link>
                <Link to="/contato" className="link">
                    <div className="menu-item-container">
                    <p className="item-number">02</p>
                    <p className="menu-item">Contato</p>
                </div>
                </Link>
                <Link to="/preços" className="link">
                <div className="menu-item-container">
                    <p className="item-number">03</p>
                    <p className="menu-item">Preços</p>
                </div>
                </Link>
            </div>
        </div>
        <div className="leaves2" />
        </div>
        <div className="darkBackground" onClick={closeModal} />
    </Sidebar>
    
    </>
    );
}