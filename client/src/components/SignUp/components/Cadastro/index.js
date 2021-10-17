import React, { useEffect } from "react"
import { useRegister } from "../../../../contexts/registerContext"
import { ButtonSub } from "../ButtonSub/index"
import authServices from "../../../../services/authServices"
import { useForm } from "react-hook-form";
import "./styles.css"
import InputCadastro from "../../../InputCadastro"

export function Cadastro({ next }) {
    const { registerUser } = useRegister();
    const { register, handleSubmit, formState: { errors }, clearErrors, watch} = useForm();

    const accessToken = authServices.getAccessToken();
    
    useEffect(() => {
        if(accessToken) {
            return next()
          }      
    })

    async function onSubmit(data) {
        try {
            const { nome, email, password} = data
            await registerUser(nome, email, password)

            next();
        } catch (error) {
            alert(error.message) 
        }
    }

    return (
        <div className="header">
            <div className="info">
                <div className="input-container">
                    <h1 className="title">Cadastrar - se</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-capsule">
                            <InputCadastro  
                                placeholder="Nome" 
                                {...register("nome", { required: true })}
                                className="inputCadastro"
                                onChange={() => clearErrors("nome")}
                            />
                        </div>
                        {errors.nome && <span>This field is required</span>}
                        <div className="input-capsule">
                            <InputCadastro  
                                placeholder="Email"  
                                className="inputCadastro"
                                {...register("email", { 
                                    required: true,
                                    pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
                                    message: "Please enter a valida Email"
                                })}
                                onChange={() => clearErrors("email")}
                            />
                        </div>
                        {errors.email && errors.email.type === "required" && <span>This field is required</span>}
                        {errors.email && errors.email.type ===   "pattern" && <span>Invalid Email</span>}

                        <div className="input-capsule">
                            <InputCadastro
                                name="password"
                                type="password" 
                                placeholder="Senha" 
                                className="inputCadastro"
                                {...register("password", { 
                                    required: "You must specify a password",
                                    minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 characters"
                                }
                                })}
                                onChange={() => clearErrors("password")}
                            />
                        </div>
                        {errors.password && <span>{errors.password.message}</span>}
                        <div className="input-capsule">
                            <InputCadastro
                                name="password_repeat"
                                type="password" 
                                placeholder="Confirmar Senha"  
                                className="inputCadastro"
                                {...register("password_repeat", { 
                                    validate: (value) => 
                                        value === watch("password") || "The passwords do not match"
                                })}
                                onChange={() => clearErrors("password_repeat")}
                            />
                        </div>
                        {errors.password_repeat && <span>{errors.password_repeat.message}</span>}
                        <div className="buttonDiv">
                            <ButtonSub title="Continuar"/>
                        </div>  
                    </form>
                </div>
            </div>
        </div>
    )
}
