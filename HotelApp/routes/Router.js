import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import { SplashScreen } from "../screens/SplashScreen";
import { AuthRoutes } from "./AuthRoutes";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "../screens/HomeScreen";
import { CheckInScreen } from "../screens/CheckInScreen"
import { CheckOutScreen } from "../screens/CheckOutScreen"

const Stack = createNativeStackNavigator();

export function Router() {  
    const { state } = useAuth();
    
    return (
        <NavigationContainer>
            {state.isLoading ? (                
                <SplashScreen />
            ) : state.accessToken == null ? (        
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="AuthRoutes" component={AuthRoutes}/>
                </Stack.Navigator>        
            ) : (               
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Check-in" component={CheckInScreen} />
                    <Stack.Screen name="Check-Out" component={CheckOutScreen} />
                </Stack.Navigator>  
            )}
        </NavigationContainer>
    );    
}