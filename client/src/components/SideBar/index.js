import React from "react";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import Sidebar from "./index.jsx";
import { useMenuContext } from "../../contexts/menuContext.js";

export function MenuSidebar() {
    const { menuState: { visible }, closeMenu } = useMenuContext();

    return(
    <>
    <Sidebar visible={visible}>
        <MdClose className="menu-close-button" />
        <div className="leaves1" />
        <div className="menu-container">
            <div className="white-line" />
            <div className="menu-items">
                <div className="menu-item-container">
                    <p className="item-number">01</p>
                    <p className="menu-item">Sobre</p>
                </div>
                <div className="menu-item-container">
                <p className="item-number">02</p>
                    <p className="menu-item">Contato</p>
                </div>
                <div className="menu-item-container">
                    <p className="item-number">03</p>
                    <p className="menu-item">Preços</p>
                </div>
            </div>
        </div>
        <div className="leaves2" />
    </Sidebar>
    </>
    );
}