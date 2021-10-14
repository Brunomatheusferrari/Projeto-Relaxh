import React, { useEffect } from "react"
import { useRegister } from "../../../../contexts/registerContext"
import { ButtonSub } from "../ButtonSub/index"
import authServices from "../../../../services/authServices"
import { useForm } from "react-hook-form";
import "./styles.css"
import InputCadastro from "../../../InputCadastro"
import NumberInput from "../../../NumberInput"

export function PersonalInfo({ next }) {
    const { signIn } = useRegister();
    const { register, handleSubmit, formState: { errors }, clearErrors} = useForm();

    const accessToken = authServices.getAccessToken();  

    useEffect(() => {
        if (accessToken) {
            return next()
          }
    
    })

    async function onSubmit(data) {
        try {
            await signIn()
            next()
        } catch (err) {
            console.log(err.message)
        }
    }
    
  return (
    <>
    <div className="header">
        <div className="info">
            <div className="input-container">
                <h1 className="title">Informações Pessoais</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-capsule">
                        <InputCadastro
                            placeholder="Nome Completo"  
                            className="inputCadastro"
                            onChange={() => clearErrors("nome")}
                            {...register("nome", { 
                                required: true
                            })}/>
                    </div>
                    {errors.nome && errors.nome.type === "required" && <span>This field is required</span>}
                    <div className="input-capsule">
                        <NumberInput
                            type="number" 
                            placeholder="Telefone" 
                            className="inputCadastro"
                            onChange={() => clearErrors("telefone")}
                            {...register("telefone", { 
                                required: true,
                                pattern: /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/gi,
                                message: "Invalid Email"
                            })}/>
                    </div>
                    {errors.telefone && errors.telefone.type === "pattern" && <span>Invalid Phone Number</span>}
                    {errors.telefone && errors.telefone.type === "required" && <span>This field is required</span>}
                    <div className="input-capsule">
                        <NumberInput
                            type="text" 
                            placeholder="CPF" 
                            className="inputCadastro"
                            onChange={() => clearErrors("cpf")}
                            {...register("cpf", { 
                                required: true,
                                //Se der erro /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
                                //  /^\d{3}\.\d{3}\.\d{3}\\d{2}$/
                                pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
                                message : "Invalid Cpf"
                            })}/>
                    </div>
                    {errors.cpf && errors.cpf.type === "pattern" && <span>Invalid CPF</span>}
                    {errors.cpf && errors.cpf.type === "required" && <span>This field is required</span>}
                    <div className="input-capsule">
                        <InputCadastro
                            placeholder="Endereço"  
                            className="inputCadastro"
                            onChange={() => clearErrors("endereco")}
                            {...register("endereco", { 
                                required: true
                            })}/>
                    </div>
                    {errors.endereco && errors.endereco.type === "required" && <span>This field is required</span>}
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
