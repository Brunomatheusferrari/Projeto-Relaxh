import React from "react"
import { useState } from "react"
import { useRegister } from "../../../../contexts/registerContext"
import { ButtonSub } from "../ButtonSub/index"
import { useForm } from "react-hook-form";
import "./styles.css"
import NumberInput from "../../../NumberInput"
import DateInputCadastro from "../../../DateInputCadastro"
import { SelectInputCadastro } from "../../../SelectInputCadastro"

export function Reserva({ next }) {
  const { dispatch } = useRegister();  
  const { register, handleSubmit, formState: { errors }, watch, clearErrors} = useForm();
  const [tipo_quarto, setTipo_quarto] = useState("Standart")

    function toTimestamp(strDate){
        var datum = Date.parse(strDate);
        return datum/1000;
    }

  function onSubmit(data) {
    const { data_entrada, data_saida, numero_pessoas} = data
    dispatch({ type: "RESERVA", payload: {data_entrada, data_saida, tipo_quarto, numero_pessoas} })
    return next();
  }
  
  return (
    <div className="header">
    <div className="info">
        <div className="input-container">
            <h1 className="title">Reserva</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-capsule">
                    <p className="titleInput">Data de Entrada</p>
                    <DateInputCadastro 
                        type="datetime-local" 
                        {...register("data_entrada", { 
                            required: true,
                            validate: (value) => 
                                toTimestamp(value) > toTimestamp(new Date)
                        })}
                        onChange={() => clearErrors("data_entrada")} 
                        placeholder="Data de Entrada"  
                        className="inputCadastro"/>
                </div>
                {errors.data_entrada && errors.data_entrada.type === "validate" && <span>Invalid Date</span>}
                {errors.data_entrada && errors.data_entrada.type === "required" && <span>This field is required</span>}
                <div className="input-capsule">
                    <p className="titleInput">Data de Saída</p>
                    <DateInputCadastro
                        type="datetime-local"  
                        {...register("data_saida", { 
                            required: true,
                            validate: (value) => 
                               toTimestamp(value) > toTimestamp(watch("data_entrada")) 
                        })}
                        onChange={() => clearErrors("data_saida")} 
                        placeholder="Confirmar Email" 
                        className="inputCadastro"/>
                </div>
                {errors.data_saida && errors.data_saida.type === "validate" && <span>Invalid Date</span>}
                {errors.data_saida && errors.data_saida.type === "required" && <span>This field is required</span>}
                <div className="input-capsule">
                    <p className="titleInput">Número de Pessoas</p>
                    <NumberInput
                        type="number"  
                        {...register("numero_pessoas", { required: true, min: 1, max: 4 })} 
                        onChange={() => clearErrors("numero_pessoas")} 
                        placeholder="Número de Pessoas" 
                        className="inputCadastro"/>
                </div>
                {errors.numero_pessoas && errors.numero_pessoas.type === "required" && <span>This is required</span>}
                {errors.numero_pessoas && errors.numero_pessoas.type === "min" && <span>The minimum value is 1</span> }
                {errors.numero_pessoas && errors.numero_pessoas.type === "max" && <span>The max value is 4</span> }
                <div className="input-capsule">
                    <p className="titleInput">Tipo do Quarto</p>
                    <SelectInputCadastro onChange={(e) => setTipo_quarto(e.target.value)}>
                        <option defaultValue="select" >Standart</option>
                        <option>Premium</option>
                        <option>Deluxe</option>
                    </SelectInputCadastro>
                </div>
                <div>
                    <ButtonSub title="Continuar"/>
                </div>  
            </form>
        </div>
    </div>
    
  </div>
  )
}
