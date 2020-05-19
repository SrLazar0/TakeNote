import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UserModule from "./modules/UserModule";
import HomeFirstTimeScreen from "./views/HomeFirstTime";
import WelcomeScreen from "./views/Welcome";
import DefaultHomeScreen from "./views/DefaultHome";
import AddNoteScreen from "./views/AddNote";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const User = UserModule;

function checkUser() {
  let user = User().getUser();
  if (user) {
    return HomeDrawer();
  } else {
    return firstTimeStack();
  }
}

function firstTimeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HomeFirstTime" component={HomeFirstTimeScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeDrawer} />
    </Stack.Navigator>
  );
}

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
        component={HomeStack}
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

function HomeStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={"Home"}>
      <Stack.Screen name="Home" component={DefaultHomeScreen} />
      <Stack.Screen name={"AddNote"} component={AddNoteScreen} />
    </Stack.Navigator>
  );
}

function AppRoutes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>{checkUser()}</NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppRoutes;
