import React, { useState } from "react";
import { DeliveryContainer } from "../../components/DeliveryContainer";
import { DeliveryModal } from "../../components/DeliveryModal";
import { DeliveryButton } from "../../components/DeliveryButton";
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
                            <Link to="/serviços-delivery" label="Login" className="deliveryButtonStyle">Fazer Pedido +</Link>                
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

            </DeliveryModal>
            }
            

        </DeliveryContainer>
    );
}