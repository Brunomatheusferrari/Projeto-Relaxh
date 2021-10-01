import React from "react"
import { useRegister } from "../../../../contexts/registerContext"
import { InputPrincipal } from "../../../InputPrincipal/index"
import { ButtonSub } from "../ButtonSub/index"
import authServices from "../../../../services/authServices"
import { useForm } from "react-hook-form";

import "./styles.css"

export function Cadastro({ next }) {
    const { registerUser } = useRegister();
    const { register, handleSubmit, formState: { errors }, clearErrors, watch} = useForm();

    const accessToken = authServices.getAccessToken();  

    if (accessToken) {
      next()
    }

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
            <h1 className="title">Cadastrar - se</h1>
            <div className="info">
                <div className="input-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-capsule">
                            <InputPrincipal  
                                placeholder="Nome" 
                                {...register("nome", { required: true })}
                                className="inputCadastro"
                                onChange={() => clearErrors("nome")}
                            />
                        </div>
                        {errors.nome && <p>This field is required</p>}
                        <div className="input-capsule">
                            <InputPrincipal  
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
                        {errors.email && errors.email.type === "required" && <p>This field is required</p>}
                        {errors.email && errors.email.type ===   "pattern" && <p>Invalid Email</p>}

                        <div className="input-capsule">
                            <InputPrincipal
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
                        {errors.password && <p>{errors.password.message}</p>}
                        <div className="input-capsule">
                            <InputPrincipal
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
                            {/* a */}
                        </div>
                        {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
                        <div>
                            <ButtonSub title="Continuar"/>
                        </div>  
                    </form>
                </div>
            </div>
        </div>
    )
}
