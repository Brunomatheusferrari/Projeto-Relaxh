import React, { useEffect, useState } from "react";
import { AdminDContainer } from "../../components/AdminDContainer";
import { AdminTable } from "../../components/AdminDContainer/AdminTable";
import { DivPedido } from "../../components/AdminDContainer/DivPedido";
import userServices from "../../services/userServices";

export function AdminDelivery({userRole}) {

    const [pedidos, setPedidos] = useState([])

    useEffect(() => {
      async function getServicos(){
        try {
          const res = (await userServices.getServicos()).data
  
          setPedidos(res)
        } catch (error) {
          console.log(error)
        }
      }
 
      getServicos()
    }, [])
    
    return(
      <AdminDContainer>
        <div className="leaves2" />
          <h1 className="title">Gerenciamento de Serviços</h1>
          <AdminTable>
            <div className="adminTableHeader">
              <h3 className="headerText">Pedido</h3>
              <h3 className="headerText">Horário</h3>
              <h3 className="headerText">Nº Quarto</h3>
              <h3 className="headerText">Concluído</h3>
            </div>

            {
              pedidos ?
                  pedidos.map((pedido, index) => (
                      <>
                          {
                              pedido.tipo === "Delivery" &&
                              <DivPedido>
                                <p className="serviceTitle">02 Refigerantes</p>
                                <div className="verticalLine" />
                                <p className="serviceHorario">{pedido.horario}</p>
                                <div className="verticalLine2" />
                                <p className="serviceRoomNumber">{pedido.id_quarto}</p>
                                <div className="verticalLine3" />
                                <input type="checkbox" className="serviceCheckBox" />
                              </DivPedido>  
                          }
                      </>
                  )) :
                  <p>Não Há Pedidos</p>
              }
          
          </AdminTable>

          <div className="leaves1" />
      </AdminDContainer>
    );
}