import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeFirstTimeScreen from "./views/HomeFirstTime";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import WelcomeScreen from "./views/Welcome";
import DefaultHomeScreen from "./views/DefaultHome";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: "transparent",
        activeTintColor: "#678C7F",
      }}
      drawerStyle={{
        backgroundColor: "#FCF4E9",
      }}
      drawerType={"back"}
      sceneContainerStyle={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={DefaultHomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Todos as Notas"
        component={DefaultHomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="file-text" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Todos os Livros"
        component={DefaultHomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="book" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sobre"
        component={DefaultHomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="info" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function AppRoutes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="HomeFirstTime" component={HomeFirstTimeScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppRoutes;
