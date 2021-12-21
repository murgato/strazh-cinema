import { Login } from "./src/views/Login/Index";
import { Home } from "./src/views/home";
import { store } from "./src/store";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Provider } from "react-redux";

const AuthStack = createStackNavigator();

export default () => {
  return (
    //Deixando os state visiveis para todo o sistema
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="Home" component={Home} />
        </AuthStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
