import React, { useState } from "react";
import { DeliveryContainer } from "../../components/DeliveryContainer";
import { DeliveryModal } from "../../components/DeliveryModal";
import { DeliveryButton } from "../../components/DeliveryButton";
import { Counter } from "../../components/DeliveryModalButtons/index";
import { Link } from "react-router-dom";

export function Delivery(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (

        <DeliveryContainer>

            <div className="header">
                <div className="headerContents">
                    <div className="headerObjects">
                        <div className="texts">
                            <div className="forkandKnife"></div>
                            <div className="dash"></div>
                            <h1 className="title">Delivery</h1>
                        </div>

                    <DeliveryButton onClick={() => setIsModalVisible(true)}>                
                            <a  label="Delivery" className="deliveryButtonStyle">Fazer Pedido +</a>                
                        </DeliveryButton>
                    </div>

                    <div className="leavesHeader">
                        <div className="leaves3Png"></div>
                        <div className="leaves4Png"></div>
                        <div className="leaves5Png"></div>
                    </div>
                </div>
            </div>

            <div></div>

            <div className="leaves2Adjust">
                <div className="leaves2Png"></div>
            </div>
            <div className="leaves1Adjust">
                <div className="leavesPng"></div>
            </div>

            {
            isModalVisible &&
            <DeliveryModal>
                <header className="headerModal">
                    <div className="headerModalObjects">
                        <h2 className="titleModal">Pedidos</h2>
                        <a onClick={() => setIsModalVisible(false)}>X</a>
                    </div>
                </header>

                <div className="ModalContent">                   
                    <Counter name="Hamburger" price="56"/>
                    <Counter name="Pizza"  price="56"/>
                    <Counter name="Coca-Cola" price="56"/>
                    <Counter name="Coca-Cola" price="56"/>
                    <Counter name="Pizza" price="56"/>
                    <Counter name="Coca-Cola" price="56"/>
                    <Counter name="Coca-Cola" price="56"/>
                </div>

                <footer className="modalFooter">
                    <div className="footerContainer">
                        <p className="total">+</p>
                        <button>enviar</button>
                    </div>
                </footer>
            </DeliveryModal>
            }
            

        </DeliveryContainer>
    );
}
