import React, { useState } from "react";
import { Image, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import {
  Title,
  WhiteTextInput,
  Subtitle,
  GhostBtn,
  StyledSafeAreaView,
} from "../../styles/GlobalStyles";

import { Container } from "./styles";
import { DefaultBackgroundColor } from "../../styles/colors";

const HomeFirstTimeScreen = (props) => {
  const [name, setName] = useState("");
  return (
    <LinearGradient
      colors={["#10b26c", "#2AF598"]}
      style={{
        flex: 1,
        height: "100%",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
      }}
    >
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

          <GhostBtn onPress={() => props.navigation.navigate("Welcome")}>
            <Subtitle>Continuar</Subtitle>
            <Feather
              name={"chevron-right"}
              size={32}
              color={DefaultBackgroundColor}
            />
          </GhostBtn>
        </Container>
      </StyledSafeAreaView>
    </LinearGradient>
  );
};

export default HomeFirstTimeScreen;
