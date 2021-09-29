import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Dimensions, Image, View } from "react-native";
import { AppButton } from "../components/AppButton";
import { ValidationInput } from "../components/ValidationInput";
import colors from "../theme/colors";
import { handleEmailChange, handlePasswordChange } from "../utils/commonValidations";
import { useAuth } from "../contexts/AuthContext";
import { Loader } from "../components/Loader";
import { showErrorMessage } from "../utils/errorHandlers";
import imgLogo from "../assets/logoRelaxh.png"
import planta1 from "../assets/leaves1.png"
import planta2 from "../assets/leaves3.png"


const initialState = {
    email: "",
    isEmailValid: false,    
    password: "",
    isPasswordValid: false,    
    isLoginValid: false,
    isLoading: false,       
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function SignInScreen({ navigation }) {
    const { memoContext } = useAuth();    
    const [state, setState] = useState(initialState);
    
    useEffect(() => {        
        setState(prevState => ({
            ...prevState, 
            isLoginValid: prevState.isEmailValid && prevState.isPasswordValid
        }));
    }, [state.isEmailValid, state.isPasswordValid]);

    async function handleSignIn() {
        setState(prevState => ({ ...prevState, isLoading: true }));
        try {            
            await memoContext.signIn(state.email, state.password);
        } catch (err) {
            setState(prevState => ({ 
                ...prevState, 
                isLoading: false,                 
                emailError: true,                
                passwordError: true
            }));
            showErrorMessage(err);
        }        
    }

    function handleNavigateSignUpScreen() {
        setState(initialState);
        navigation.push("SignUp");
    }

    return (            
        <KeyboardAvoidingView behavior="height" style={styles.container}>
        <Image source={planta2} style={styles.planta2}/>
        <Image style={styles.planta1} source={planta1}/>
            <Loader isVisible={state.isLoading} />
            <Image style={styles.logo} source={imgLogo}/>
            <ValidationInput 
                value={state.email}
                onChangeText={text => handleEmailChange(text, setState)}
                placeholder="Seu e-mail"
                labelText="E-mail"
                keyboardType="email-address"
                isValid={state.isEmailValid} />
            
            <ValidationInput 
                value={state.password}
                onChangeText={text => handlePasswordChange(text, setState)}
                placeholder="Sua senha"
                labelText="Senha"
                secureTextEntry={true}
                isValid={state.isPasswordValid} /> 
            <View style={{ width: "100%", margin: 10 }}>
                <AppButton
                    title="Login" 
                    onPress={handleSignIn}
                    disabled={!state.isLoginValid}/>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.darkGreen,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    logo: {
        width: 100,
        height: 150
    },
    planta1:{
        zIndex: -1,
        position: "absolute",
        top: screenHeight - (screenWidth / 2),
        left: screenWidth - (screenWidth + 10),
    },
    planta2:{
      zIndex: -1,
      position: "absolute",
      top: screenHeight - (screenWidth * 2.2),
      left: screenWidth - 350,
      transform: [{scale: 0.5}]
    }
})
