import React, { useState } from "react";
import { Image, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import {
  Title,
  WhiteTextInput,
  Subtitle,
  GhostBtn,
  StyledSafeAreaView,
} from "../../styles/GlobalStyles";
import { Container, GradientBackground } from "./styles";
import { DefaultBackgroundColor } from "../../styles/colors";
import NavigationModule from "../../modules/NavigationModule";

const HomeFirstTimeScreen = (props) => {
  const [name, setName] = useState("");
  const nav = NavigationModule(props.navigation);
  return (
    <GradientBackground colors={["#10b26c", "#2AF598"]}>
      <StyledSafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="#212121" />
        <Container>
          <Image source={require("../../../assets/Logo.png")} />
        </Container>
        <Container>
          <Title>Olá {name},</Title>
          <WhiteTextInput
            placeholder={"Qual seu nome ?"}
            onChangeText={(text) => setName(text)}
            maxLength={16}
            selectionColor={DefaultBackgroundColor}
          />
          <GhostBtn onPress={() => nav.GoTo("Welcome")}>
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
  );
};

export default HomeFirstTimeScreen;
