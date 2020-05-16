import styled from "styled-components/native";
import { Dimensions } from "react-native";

const defaultContainer = styled.View`
  width: ${Dimensions.get("window").width - 32}px;
  justify-content: center;
`;

export const HeaderContainer = styled(defaultContainer)`
  flex: 0.2;
  flex-direction: row;
  background-color: darkolivegreen;
`;
export const BodyContainer = styled(defaultContainer)`
  flex: 0.7;
  align-items: center;
`;

export const BookContainer = styled(defaultContainer)`
  flex: 0.3;
  background-color: green;
`;
export const NotesContainer = styled(defaultContainer)`
  flex: 0.7;
  background-color: greenyellow;
`;

export const FooterContainer = styled(defaultContainer)`
  flex: 0.1;
  flex-direction: row;
  align-items: center;
`;
