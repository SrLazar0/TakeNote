import React from "react";
import { Container } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import {
  Title,
  GhostBtn,
  StyledSafeAreaView,
  Subtitle,
} from "../../styles/GlobalStyles";
import { Feather } from "@expo/vector-icons";
import { DefaultBackgroundColor } from "../../styles/colors";

const WelcomeScreen = (props) => {
  return (
    <LinearGradient
      colors={["#2F2830", "#212121"]}
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
        <Container>
          <Title>Seja bem-vindo ao TakeNote</Title>
          <Subtitle>Uma aplicação simples para uma tarefa simples!</Subtitle>
          <GhostBtn
            style={{ marginTop: 64 }}
            onPress={() => props.navigation.push("Home")}
          >
            <Subtitle>Criar Notas</Subtitle>
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

export default WelcomeScreen;
