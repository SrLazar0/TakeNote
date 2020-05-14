import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.View`
  width: ${Dimensions.get("window").width - 32}px;
  justify-content: space-between;
  align-items: center;
`;
