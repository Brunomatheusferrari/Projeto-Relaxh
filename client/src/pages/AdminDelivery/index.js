import React from "react";
import { AdminDContainer } from "../../components/AdminDContainer";
import { AdminTable } from "../../components/AdminDContainer/AdminTable";
import { DivPedido } from "../../components/AdminDContainer/DivPedido";


export function AdminDelivery() {
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

            <DivPedido />
            <DivPedido />
            <DivPedido />
            <DivPedido />
            <DivPedido />
            <DivPedido />
            <DivPedido />
          </AdminTable>

          <div className="leaves1" />
      </AdminDContainer>
    );
}