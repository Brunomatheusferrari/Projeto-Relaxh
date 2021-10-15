import React, { useEffect, useState } from "react";
import { LimpezaButton } from "../../components/LimpezaButton";
import { ServicoLimpeza } from "../../components/ServicoLimpeza";
import { LimpezaModal } from "../../components/LimpezaModal";
import { Counter } from "../../components/LimpezaModalButtons/index";
import { IoClose } from "react-icons/io5";
import serviceServices from "../../services/serviceServices";
import InputCadastro from "../../components/InputCadastro";
import "../Delivery/style.css"
import { PedidoLimpeza } from "../../components/PedidoLimpeza";
import { DeliveryContainer } from "../../components/DeliveryContainer";
import { SelectInputReserve } from "../../components/SelectInputReserve";

export function Limpeza(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [horario, setHorario] = useState(null);
    const [descricao, setDescricao] = useState("Troca de Lençol");
    const [pedidos, setPedidos] = useState([])
    const [contador, setContador] = useState(0)

    useEffect(() => {   
        async function getPedidos(){
            try {
          
                const pedidosUser = await serviceServices.getPedidosUser()

                console.log(pedidosUser)
    
                setPedidos(pedidosUser)
              
            } catch (error) {
                console.log(error)    
            }
        }

        getPedidos()
    },[])

    async function onSubmit(descricao, horario){
        setIsModalVisible(false)

        const hora = horario.split(":")

        var dt = new Date();
        dt.setHours(hora[0])
        dt.setMinutes(hora[1])
        
        try {
            const quarto = await serviceServices.getQuartoUser()
            const pedido = await serviceServices.postServico({id_quarto: quarto.id,  tipo: "Limpeza", descricao, horario: dt})

            if(!pedido){
                console.log("Não Há Pedidos")
            }

            if(!quarto){
                console.log("Não há quartos")
            }

            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

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

                        <div className="buttonHeader">
                            <LimpezaButton onClick={() => setIsModalVisible(true)}>
                                <a label="Limpeza" className="LimpezaButtonStyle">Agendar horário</a>
                            </LimpezaButton>
                        </div>
                    </div>

                    <div className="leavesHeader">
                        <div className="leaves3Png"></div>
                        <div className="leaves4Png"></div>
                        <div className="leaves5Png"></div>
                    </div>
                </div>
            </div>
            <div className="large-container">
                <div className="container">
                        {
                            pedidos ?
                                pedidos.map((pedido, index) => (
                                    <>
                                        {
                                            pedido.tipo === "Limpeza" &&
                                            <div className="container-header">
                                                <p className="pedido-title">Pedido</p>
                                                <div className="mini-header">
                                                    <p>Tipo</p>
                                                    <p>Horário</p>
                                                </div>
                                                <div className="container-body">
                                                    <PedidoLimpeza key={contador} pedido={pedido}/>
                                                </div>
                                            </div>  
                                        }
                                    </>
                                )) :
                                <p>Não Há Pedidos</p>
                        }
                    </div>
                <div className="Big-Container">
                    <div className="buttonCelphone">
                        <LimpezaButton onClick={() => setIsModalVisible(true)}>
                            <a label="Limpeza" className="LimpezaButtonStyle">Agendar horário</a>
                        </LimpezaButton>
                    </div>
                    
                </div>
                <div className="leaves">
                    <div className="leaves2Adjust">
                        <div className="leaves2Png"></div>
                    </div>
                    <div className="leaves1Adjust">
                        <div className="leavesPng"></div>
                    </div>
                </div>
            </div>
            {
                isModalVisible &&
                <LimpezaModal>
                    <header className="headerModal">
                        <div className="headerModalObjects">
                            <h2 className="titleModal">Selecione o horário de limpeza:</h2>
                            <a onClick={() => setIsModalVisible(false)} className="closeIcon"><IoClose /></a>
                        </div>
                    </header>

                    <div className="ModalContent">
                        <section className="servicos">

                            <Counter onChange={(e) => setHorario(e.target.value) } name="Horário" />
                            <SelectInputReserve onChange={(e) => setDescricao(e.target.value)}>
                                <option>Troca de Lençol</option>
                                <option>Limpeza Básica</option>
                                <option>Limpeza Avançada</option>
                            </SelectInputReserve>

                        </section>
                    </div>

                    <footer className="modalFooter">
                        <div className="footerContainer">
                            <div className="cost">
                                <p className="Pedidos feitos"></p>
                            </div>
                            <div className="button">
                                <LimpezaButton onClick={() => onSubmit(descricao, horario)}>
                                    <a label="Limpeza" className="LimpezaButtonStyle">Enviar</a>
                                </LimpezaButton>

                            </div>
                        </div>
                    </footer>
                </LimpezaModal>
            }
        </ServicoLimpeza>
    )
}