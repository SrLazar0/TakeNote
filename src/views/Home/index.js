import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Title,
  WhiteTextInput,
  WhiteTextBtn,
  GhostBtn,
} from "../../GlobalStyles";

import { Container } from "./styles";
import { DefaultBackgroundColor } from "../../styles/colors";

const Home = () => {
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
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
          <GhostBtn>
            <WhiteTextBtn>Continuar</WhiteTextBtn>
          </GhostBtn>
        </Container>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
