/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { DeliveryContainer } from "../../components/DeliveryContainer";
import { DeliveryModal } from "../../components/DeliveryModal";
import { DeliveryButton } from "../../components/DeliveryButton";
import { Counter } from "../../components/DeliveryModalButtons/index";
import { IoClose } from 'react-icons/io5';
import { useDelivery } from "../../contexts/deliveryContext";
import serviceServices from "../../services/serviceServices";
import { cancelTokenSource } from "../../services/api";
import { Pedido } from "../../components/PedidoDelivery";
import "./style.css"

export function Delivery(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { total, deliveryActions } = useDelivery();
    const [pedidos, setPedidos] = useState([]);
    const [comidas, setComidas] = useState([])


    useEffect(() => {
        async function getComidas() {
            try {
                const comidas = (await serviceServices.getComidas()).data
                setComidas(comidas)
            } catch (err) {
                console.log(err);
            }
        }

        async function getPedidos() {
            try {
                const pedidos = (await serviceServices.getPedidosUser())
                setPedidos(pedidos)
            } catch (err) {
                console.log(err);
            }
        }

        getComidas()
        getPedidos()

        return () => cancelTokenSource.cancel();
    }, []);

    function handleClose() {
        deliveryActions.postPedido()
        setIsModalVisible(false);
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
                        <div className="buttonHeader">
                            <DeliveryButton onClick={() => setIsModalVisible(true)}>
                                <a label="Delivery" className="deliveryButtonStyle">Fazer Pedido +</a>
                            </DeliveryButton>
                        </div>
                    </div>
                    <div className="leavesHeader">
                        <div className="leaves3Png"></div>
                        <div className="leaves4Png"></div>
                        <div className="leaves5Png"></div>
                    </div>
                </div>
            </div>
            <div className="big-container">
                <div className="buttonCelphone">
                    <DeliveryButton onClick={() => setIsModalVisible(true)}>
                        <a label="Delivery" className="deliveryButtonStyle">Fazer Pedido +</a>
                    </DeliveryButton>
                </div>
                <div className="leaves">
                    <div className="leaves2Adjust">
                        <div className="leaves2Png"></div>
                    </div>
                    <div className="leaves1Adjust">
                        <div className="leavesPng">
                        </div>
                    </div>
                </div>
                <div className="container">
                    {
                        pedidos ?
                            pedidos.map((pedido, index) => (
                                <>
                                    {
                                        pedido.comidas.length > 0 &&
                                        <div className="container-header">
                                            <p className="pedido-title">Pedido: {index}</p>
                                            <div className="mini-header">
                                                <p>Item</p>
                                                <p>Quantidade</p>
                                            </div>
                                            <div className="container-body">
                                                {
                                                    pedido.comidas.map(comida => (
                                                        <Pedido comida={comida} />
                                                    ))
                                                }
                                            </div>
                                        </div>  
                                    }
                                </>
                            )) :
                            <p>Não Há Pedidos</p>
                    }
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

                                    if (comida.tipo == "Bebida") {
                                        return (
                                            <Counter key={comida.id} comida={comida} />
                                        )
                                    }
                                })
                            }
                            <h2 className="sectionsTitle">Comidas</h2>

                            {
                                comidas.map(comida => {

                                    if (comida.tipo == "Comida") {
                                        return (
                                            <Counter key={comida.id} comida={comida} />
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
