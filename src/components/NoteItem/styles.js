import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { PrimaryColor } from "../../styles/colors";

export const Container = styled.View`
  flex-direction: row;
  width: ${Dimensions.get("window").width - 32}px;
  margin-bottom: 16px;
`;
export const TextContainer = styled.View`
  width: ${Dimensions.get("window").width - 32}px;
  margin-left: 8px;
`;

export const Tag = styled.View`
  width: 8px;
  height: 40px;
  background-color: ${(props) => props.Color || PrimaryColor};
`;
