import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Strazh } from "../../Strazh";
import { MovieDetails } from "../../MovieDetails";

const AuthStack = createStackNavigator();

export function Main({ navigation }: any) {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Strazh" component={Strazh} />
      <AuthStack.Screen name="MovieDetails" component={MovieDetails} />
    </AuthStack.Navigator>
  );
}
