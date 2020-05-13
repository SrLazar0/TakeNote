import styled from "styled-components/native";
import { DefaultBackgroundColor } from "./styles/colors";
import { Dimensions } from "react-native";

export const Title = styled.Text`
  color: ${DefaultBackgroundColor};
  font-size: 32px;
`;

export const TextBody = styled.Text`
  font-size: 16px;
`;

export const TextBodyBold = styled(TextBody)`
  font-weight: bold;
`;

export const WhiteTextBtn = styled(TextBodyBold)`
  color: ${DefaultBackgroundColor};
`;

const DefaultTextInput = styled.TextInput`
  width: ${Dimensions.get("window").width - 32}px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-width: 4px;
  border-radius: 10px;
`;

export const WhiteTextInput = styled(DefaultTextInput)`
  border-bottom-color: ${DefaultBackgroundColor};
  color: ${DefaultBackgroundColor};
  font-size: 32px;
  text-align: center;
`;

export const GhostBtn = styled.TouchableOpacity``;
