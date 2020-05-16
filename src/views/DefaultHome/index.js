import React, { useState } from "react";
import { StatusBar, AsyncStorage } from "react-native";
import {
  HeaderContainer,
  BodyContainer,
  BookContainer,
  NotesContainer,
  FooterContainer,
} from "./styles";
import {
  StyledSafeAreaView,
  Title,
  GhostBtn,
  Subtitle,
  RoundPrimaryBtn,
} from "../../styles/GlobalStyles";
import {
  DefaultBackgroundColor,
  PrimaryColor,
  LightPrimaryColor,
} from "../../styles/colors";
import BookModule from "../../modules/BookModule";
import AsyncStorageModule from "../../modules/AsyncStorageModule";
import UserModule from "../../modules/UserModule";
import { Feather } from "@expo/vector-icons";

const DefaultHomeScreen = () => {
  const Book = BookModule();
  const User = UserModule();
  const user = User.getUser();
  const [Books, setBooks] = useState([]);

  const addNoteIcon = (
    <Feather name={"edit-3"} size={32} color={DefaultBackgroundColor} />
  );
  const addBookIcon = (
    <Feather name={"book"} size={32} color={DefaultBackgroundColor} />
  );

  const createBook = async (title) => {
    // let book = await Book.createBook(title);
    AsyncStorageModule().clearStorage();
  };

  return (
    <StyledSafeAreaView
      style={{
        backgroundColor: DefaultBackgroundColor,
        justifyContent: "flex-start",
      }}
    >
      <StatusBar barStyle="dark-content" />
      <HeaderContainer>
        <Title Color={LightPrimaryColor}>{user.name}</Title>
      </HeaderContainer>
      <BodyContainer>
        <BookContainer></BookContainer>
        <NotesContainer></NotesContainer>
      </BodyContainer>
      <FooterContainer>
        <RoundPrimaryBtn>{addNoteIcon}</RoundPrimaryBtn>
        <RoundPrimaryBtn>{addBookIcon}</RoundPrimaryBtn>
      </FooterContainer>
    </StyledSafeAreaView>
  );
};

export default DefaultHomeScreen;
