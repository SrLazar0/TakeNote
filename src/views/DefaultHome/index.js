import React from "react";
import { StatusBar } from "react-native";
import { Container } from "./styles";
import { StyledSafeAreaView, Title } from "../../styles/GlobalStyles";
import { DefaultBackgroundColor } from "../../styles/colors";

const DefaultHomeScreen = () => {
  return (
    <StyledSafeAreaView style={{ backgroundColor: DefaultBackgroundColor }}>
      <StatusBar barStyle="dark-content" />
      <Title Color={"tomato"}>Viverra</Title>
    </StyledSafeAreaView>
  );
};

export default DefaultHomeScreen;
