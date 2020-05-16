import styled from "styled-components/native";
import {
  DefaultBackgroundColor,
  PrimaryColor,
  LightPrimaryColor,
} from "./colors";
import { Dimensions } from "react-native";

const StyledText = styled.Text`
  color: ${(props) => props.Color || DefaultBackgroundColor};
  text-align: ${(props) => props.TextAling || "center"};
  font-weight: ${(props) => props.FontWeight || "normal"};
`;

export const Title = styled(StyledText)`
  font-size: 32px;
`;

export const Subtitle = styled(StyledText)`
  font-size: 24px;
`;

export const TextBody = styled(StyledText)`
  font-size: 16px;
`;

const DefaultTextInput = styled.TextInput`
  width: ${Dimensions.get("window").width - 32}px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-width: 4px;
`;

export const WhiteTextInput = styled(DefaultTextInput)`
  border-bottom-color: ${DefaultBackgroundColor};
  color: ${DefaultBackgroundColor};
  font-size: 32px;
  text-align: center;
`;

export const GhostBtn = styled.TouchableOpacity`
  flex-direction: row;
  width: ${Dimensions.get("window").width - 32}px;
  justify-content: center;
  padding: 10px;
`;

export const RoundBtn = styled.TouchableOpacity`
  height: 70px;
  width: 70px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin: 16px;
`;
export const RoundPrimaryBtn = styled(RoundBtn)`
  background-color: ${LightPrimaryColor};
  box-shadow: 0px 0px 20px ${LightPrimaryColor};
  shadow-opacity: 0.5;
  elevation: 5;
`;
export const RoundDangerBtn = styled(RoundBtn)``;

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
