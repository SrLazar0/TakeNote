import React from "react";
import { Container, GradientBackground } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import {
  Title,
  GhostBtn,
  StyledSafeAreaView,
  Subtitle,
} from "../../styles/GlobalStyles";
import { Feather } from "@expo/vector-icons";
import { DefaultBackgroundColor } from "../../styles/colors";
import NavigationModule from "../../modules/NavigationModule";

const Welcome = (props) => {
  const nav = NavigationModule(props.navigation);
  return (
    <GradientBackground colors={["#2F2830", "#212121"]}>
      <StyledSafeAreaView>
        <Container>
          <Title>Seja bem-vindo ao TakeNote</Title>
          <Subtitle>Uma aplicação simples para uma tarefa simples!</Subtitle>
          <GhostBtn style={{ marginTop: 64 }} onPress={() => nav.GoTo("Home")}>
            <Subtitle>Criar Notas</Subtitle>
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

export default Welcome;
