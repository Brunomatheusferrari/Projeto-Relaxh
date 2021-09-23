import React from "react";
import { SignUp } from "../../components/SignUp";
import authServices from "../../services/authServices"


export function SignUpContent(props) {

    const accessToken = authServices.getAccessToken();  

    if (accessToken) {
      return window.location.replace("/") 
    }

    return (
        <>
            <SignUp/>   
        </>
    )
}