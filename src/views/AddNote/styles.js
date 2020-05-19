import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { DarkGreen, PrimaryColor } from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
`;

export const Note = styled.View`
  flex: 1;
  width: ${Dimensions.get("window").width - 32}px;
  background-color: #fcf4e9;
  padding: 16px;
  color: ${DarkGreen};
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0px 0px 4px #000;
  shadow-opacity: 0.5;
  elevation: 5;
`;

export const TitleInput = styled.TextInput`
  font-size: 32px;
  color: ${PrimaryColor};
  font-weight: bold;
  text-align: center;
`;
export const NoteInput = styled.TextInput`
  color: ${DarkGreen};
  font-weight: bold;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledPicker = styled.Picker`
  height: 10px;
`;
