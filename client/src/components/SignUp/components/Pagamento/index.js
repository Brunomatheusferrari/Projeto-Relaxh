import React, { useEffect } from "react"
import { DateInput } from "../../../DateInput"
import { InputPrincipal } from "../../../InputPrincipal/index"
import { ButtonSub } from "../ButtonSub/index"
import { useRegister } from "../../../../contexts/registerContext"
import { useForm } from "react-hook-form";
import authServices from "../../../../services/authServices"
import serviceServices from "../../../../services/serviceServices"

import "./styles.css"
import NumberInput from "../../../NumberInput"
import InputCadastro from "../../../InputCadastro"

export function Pagamento({next}) {
    const {state, createReserva } = useRegister();
    const { register, handleSubmit, formState: { errors }, clearErrors} = useForm();

    useEffect(() => {
        if(!state.data_entrada && !state.data_saida && !state.tipo_quarto && !state.numero_pessoas){
            alert("Preencha as informações da reserva primeiro")
            return next()
        }

        async function getQuartoUser(){
            try {
                const quarto = await serviceServices.getQuartoUser()

                if(quarto){
                    alert("Você já poossui uma reserva")
                    window.location.replace("/")
                }

            } catch (error) {
                console.log(error)
            }
        }

        getQuartoUser()

    })

    async function onSubmit() {
        try {
            await createReserva()
            authServices.refreshToken()
            alert("Criado....Verifique sua caixa de email")
            
            window.location.replace("/")   
        } catch (error) {
            alert(error)
        }
    }

  return (
    <>
    <div className="header">
        <div className="info">
            <div className="input-container">
                <h1 className="title">Pagamento</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-capsule">
                        <InputCadastro
                            placeholder="Número do Cartão"  
                            className="inputCadastro"
                            {...register("numero_cartao", { 
                                required: true,
                                pattern: /^3[47][0-9]{13}$/gi 
                            })}
                            onChange={() => clearErrors("numero_cartão")}
                            />
                    </div>
                    {errors.numero_cartao && errors.numero_cartao.type === "required" && <p>This field is required</p>}
                    {errors.numero_cartao && errors.numero_cartao.type === "pattern" && <p>Invalid Card Code</p>}
                    <div className="input-capsule">
                        <NumberInput
                            type="text" 
                            placeholder="Validade" 
                            className="inputCadastro"
                            {...register("validade", { 
                                required: true,
                                pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/ 
                                })}
                            onChange={() => clearErrors("validade")}
                            />
                    </div>
                    {errors.validade && errors.validade.type === "required" && <p>This field is required</p>}
                    {errors.validade && errors.validade.type === "pattern" && <p>Invalid Format Date</p>}
                    <div className="input-capsule">
                        <NumberInput
                            type="number" 
                            placeholder="CCV" 
                            className="inputCadastro"
                            {...register("ccv", { 
                                required: true,
                                pattern: /^[0-9]{3,4}$/ 
                                })}
                            onChange={() => clearErrors("ccv")}
                            />
                    </div>
                    {errors.ccv && errors.ccv.type === "required" && <p>This field is required</p>}
                    {errors.ccv && errors.ccv.type === "pattern" && <p>Invalid CCV</p>}
                    <div className="input-capsule">
                        <InputCadastro
                            placeholder="Banco"  
                            className="inputCadastro"
                            {...register("banco", { required: true })}
                            onChange={() => clearErrors("banco")}
                            />
                    </div>
                    {errors.banco && errors.banco.type === "required" && <p>This field is required</p>}
                    <div className="buttonDiv">
                    <ButtonSub title="Continuar"/>
                    </div> 
                </form> 
            </div>
        </div>
    </div>
    </>
  )
}
