import React, { useState } from "react";
import { Image, StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import {
  Title,
  WhiteTextInput,
  Subtitle,
  GhostBtn,
  StyledSafeAreaView,
} from "../../styles/GlobalStyles";
import {
  Container,
  GradientBackground,
  StyledKeyboardAvoidingView,
} from "./styles";
import { DefaultBackgroundColor } from "../../styles/colors";
import NavigationModule from "../../modules/NavigationModule";
import UserModule from "../../modules/UserModule";
import SQLiteModule from "../../modules/SQLiteModule";

const HomeFirstTimeScreen = (props) => {
  const [name, setName] = useState("");
  const nav = NavigationModule(props.navigation);
  const Db = SQLiteModule();

  const saveNameAndGo = () => {
    let user = UserModule();
    db.createTables();
    user.createUser(name);
    nav.GoTo("Welcome");
  };

  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <GradientBackground colors={["#10b26c", "#2AF598"]}>
        <StyledSafeAreaView>
          <StatusBar barStyle="light-content" backgroundColor="#212121" />
          <Container>
            <Image source={require("../../../assets/Logo.png")} />
          </Container>
          <Container>
            <Title>Olá {name},</Title>
            <WhiteTextInput
              placeholder={"Qual é o seu nome ?"}
              onChangeText={(text) => setName(text)}
              maxLength={16}
              selectionColor={DefaultBackgroundColor}
            />
            <GhostBtn onPress={saveNameAndGo}>
              <Subtitle>Continuar</Subtitle>
              <Feather
                name={"chevron-right"}
                size={32}
                color={DefaultBackgroundColor}
              />
            </GhostBtn>
          </Container>
        </StyledSafeAreaView>
      </GradientBackground>
    </StyledKeyboardAvoidingView>
  );
};

export default HomeFirstTimeScreen;
