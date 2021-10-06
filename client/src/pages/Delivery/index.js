/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { DeliveryContainer } from "../../components/DeliveryContainer";
import { DeliveryModal } from "../../components/DeliveryModal";
import { DeliveryButton } from "../../components/DeliveryButton";
import { Counter } from "../../components/DeliveryModalButtons/index";
import { IoClose } from 'react-icons/io5';
import { useDelivery } from "../../contexts/deliveryContext";
import serviceServices from "../../services/serviceServices";
import authServices from "../../services/authServices";

export function Delivery(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { total, deliveryActions } = useDelivery();
    const [pedidos, setPedidos] = useState([]);
    const [comidas, setComidas] = useState([])
    

    useEffect(async () => {
        const comidas = (await serviceServices.getComidas()).data
        setComidas(comidas)

        const pedidos = await serviceServices.getPedidosUser()
        setPedidos(pedidos)
    }, []);

    function handleClose() {        
        setIsModalVisible(false);
    }

    async function getComidas(vetorComidas){
        let vetorNovo = []

        vetorComidas.map(async (id) => {
            let comida =(await serviceServices.getComida(id)).data
            vetorNovo.push(comida)
        })

        console.log(vetorNovo)

        return vetorNovo
    }

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
                            <a label="Delivery" className="deliveryButtonStyle">Fazer Pedido +</a>
                        </DeliveryButton>
                    </div>
                    <div className="leavesHeader">
                        <div className="leaves3Png"></div>
                        <div className="leaves4Png"></div>
                        <div className="leaves5Png"></div>
                    </div>
                </div>
            </div>
                <div>
                    <div className="leaves">
                        <div className="leaves2Adjust">
                            <div className="leaves2Png"></div>
                        </div>
                        <div className="leaves1Adjust">
                            <div className="leavesPng">
                        </div>
                    </div>
                </div>
                <div>
                    {pedidos && pedidos.map(pedido => {
                        const comidas = getComidas(pedido)
                        comidas.map(comida => {
                            return (
                                <p>{comida}</p>
                            )
                        })
                    })}
                </div>
            </div>
            {
                isModalVisible &&
                <DeliveryModal>
                    <header className="headerModal">
                        <div className="headerModalObjects">
                            <h2 className="titleModal">Cardápio</h2>
                            <a onClick={() => setIsModalVisible(false)} className="closeIcon"><IoClose /></a>
                        </div>
                    </header>

                    <div className="ModalContent">
                        <section className="foods">
                            <h2 className="sectionsTitle">Comidas</h2>

                        </section>
                        <section className="drinks">
                            <h2 className="sectionsTitle">Bebidas</h2>
                            {
                                comidas.map(comida => {
                                    if(comida.tipo == "Bebida"){
                                        return(
                                            <Counter key={comida.id} name={comida.nome} price={comida.preco}/>
                                            )
                                    }
                                })
                            }
                            <h2 className="sectionsTitle">Comidas</h2>
                            {
                                comidas.map(comida => {
                                    if(comida.tipo == "Comida"){
                                        return(
                                            <Counter key={comida.id} name={comida.nome} price={comida.preco}/>
                                            )
                                    }
                                })
                            }   
                        </section>
                    </div>
                    <footer className="modalFooter">
                        <div className="footerContainer">
                            <div className="cost">
                                <p className="total">R$ {total.toFixed(2)}</p>
                            </div>
                            <div className="button">
                                <DeliveryButton onClick={handleClose}>
                                    <a label="Delivery" className="deliveryButtonStyle">Finalizar Pedido</a>
                                </DeliveryButton>
                            </div>
                        </div>
                    </footer>
                </DeliveryModal>
            }
        </DeliveryContainer>
    );
}
