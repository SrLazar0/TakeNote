import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { DarkGray } from "../../styles/colors";

const defaultContainer = styled.View`
  width: ${Dimensions.get("window").width - 32}px;
`;

export const HeaderContainer = styled(defaultContainer)`
  flex: 0.2;
`;
export const HeaderContainerTitle = styled(defaultContainer)`
  align-items: center;
  padding-top: 16px;
  flex-direction: row;
`;
export const BodyContainer = styled(defaultContainer)`
  flex: 0.7;
  align-items: center;
`;

export const BookContainer = styled(defaultContainer)`
  flex: 0.4;
`;

export const BookContainerTitle = styled(defaultContainer)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BookList = styled.ScrollView`
  flex: 1;
  flex-direction: row;
`;

export const NoteList = styled.ScrollView`
  flex: 1;
`;

export const NotesContainer = styled(defaultContainer)`
  flex: 0.6;
`;

export const FooterContainer = styled(defaultContainer)`
  flex: 0.1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchInputContainer = styled(defaultContainer)`
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
  border-bottom-width: 4px;
  border-bottom-color: ${DarkGray};
`;
