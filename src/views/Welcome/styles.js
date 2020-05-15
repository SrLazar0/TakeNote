import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  width: ${Dimensions.get("window").width - 32}px;
  justify-content: space-between;
  align-items: center;
`;

export const GradientBackground = styled(LinearGradient)`
  flex: 1;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;
