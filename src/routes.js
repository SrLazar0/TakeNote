import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeFirstTimeScreen from "./views/HomeFirstTime";
import { SafeAreaProvider } from "react-native-safe-area-context";
import WelcomeScreen from "./views/Welcome";
import DefaultHomeScreen from "./views/DefaultHome";

const Stack = createStackNavigator();

function AppRoutes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="HomeFirstTime" component={HomeFirstTimeScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={DefaultHomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppRoutes;
