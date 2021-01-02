import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

function AppWrapper() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home"}>
                <Stack.Screen name={"Home"} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppWrapper;
