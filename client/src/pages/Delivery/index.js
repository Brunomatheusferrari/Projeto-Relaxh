import React from "react";
import { DeliveryContainer } from "../../components/DeliveryContainer";

export function Delivery(props) {

    return (

        <DeliveryContainer>
            
            <div className="header">
                <div className="headerContents">
                    <div className="forkandKnife"></div>
                    <div className="dash"></div>
                    <h1 className="title">Delivery</h1>
                        
                    <div className="leavesHeader"> 
                        <div className="leaves3Png"></div>
                        <div className="leaves4Png"></div>
                        <div className="leaves5Png"></div>
                    </div>
                </div>
            </div>

            <div className="leaves2Adjust">
                <div className="leaves2Png"></div>
            </div>
            <div className="leaves1Adjust">
                <div className="leavesPng"></div>
            </div>


        </DeliveryContainer>
    );
}