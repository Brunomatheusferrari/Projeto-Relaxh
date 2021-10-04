import React, { useState } from "react";
import { LimpezaButton } from "../../components/LimpezaButton";
import { ServicoLimpeza } from "../../components/ServicoLimpeza";
import { LimpezaModal } from "../../components/LimpezaModal";
import { Counter } from "../../components/LimpezaModalButtons/index";
import { IoClose } from "react-icons/io5";

export function Limpeza(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (

        <ServicoLimpeza>

            <div className="header">
                <div className="headerContents">
                    <div className="headerObjects">
                        <div className="texts">
                            <div className="cleanerSpray"></div>
                            <div className="dash"></div>
                            <h1 className="title">Serviços de Limpeza</h1>
                        </div>


                        <LimpezaButton onClick={() => setIsModalVisible(true)}>
                            <a label="Limpeza" className="LimpezaButtonStyle">Fazer Pedido +</a>
                        </LimpezaButton>

                    </div>

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
            {
                isModalVisible &&
                <LimpezaModal>
                    <header className="headerModal">
                        <div className="headerModalObjects">
                            <h2 className="titleModal">Pedidos</h2>
                            <a onClick={() => setIsModalVisible(false)} className="closeIcon"><IoClose /></a>
                        </div>
                    </header>

                    <div className="ModalContent">
                        <section className="servicos">

                            <h2 classname="sectionsTitle">Opções de limpeza</h2>
                            <Counter name="Tipo de Limpeza" />
                            <Counter name="Horário" />
                            <Counter name="Quarto" />

                        </section>
                    </div>

                    <footer className="modalFooter">
                        <div className="footerContainer">
                            <div className="cost">
                                <p className="Pedidos feitos"></p>
                            </div>
                            <div className="button">
                                <LimpezaButton onClick={() => setIsModalVisible(false)}>
                                    <a label="Limpeza" className="LimpezaButtonStyle">Finalizar Pedido</a>
                                </LimpezaButton>

                            </div>
                        </div>
                    </footer>
                </LimpezaModal>
            }
        </ServicoLimpeza>
    )
}
