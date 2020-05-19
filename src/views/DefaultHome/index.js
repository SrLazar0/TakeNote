import React, { useState } from "react";
import { StatusBar, View } from "react-native";
import {
  HeaderContainer,
  BodyContainer,
  BookContainer,
  NotesContainer,
  FooterContainer,
  HeaderContainerTitle,
  SearchInputContainer,
  BookContainerTitle,
  BookList,
  NoteList,
} from "./styles";
import {
  StyledSafeAreaView,
  Title,
  GhostBtn,
  Subtitle,
  IconBtn,
  RoundPrimaryBtn,
  GrayIconTextInput,
} from "../../styles/GlobalStyles";
import {
  DefaultBackgroundColor,
  PrimaryColor,
  LightPrimaryColor,
  DarkGray,
  DarkGreen,
} from "../../styles/colors";
import BookModule from "../../modules/BookModule";
import UserModule from "../../modules/UserModule";
import { Feather } from "@expo/vector-icons";
import BookItem from "../../components/BookItem";
import NoteItem from "../../components/NoteItem";

const DefaultHome = (props) => {
  const Book = BookModule();
  const User = UserModule();
  const user = User.getUser();
  const [bookTitle, setBookTitle] = useState("");

  const addNoteIcon = (
    <Feather name={"edit-3"} size={32} color={DefaultBackgroundColor} />
  );
  const addBookIcon = (
    <Feather name={"book"} size={32} color={DefaultBackgroundColor} />
  );

  const createBook = async () => {
    result = await Book.createBook(bookTitle);
    console.log(result);
  };

  return (
    <StyledSafeAreaView
      style={{
        backgroundColor: DefaultBackgroundColor,
      }}
    >
      <StatusBar barStyle="dark-content" />
      <HeaderContainer>
        <HeaderContainerTitle>
          <IconBtn onPress={() => props.navigation.openDrawer()}>
            <Feather name="menu" size={24} color={DarkGray} />
          </IconBtn>
          <View
            style={{
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Title Color={PrimaryColor}>{user.name} </Title>
          </View>
        </HeaderContainerTitle>
        <SearchInputContainer>
          <GrayIconTextInput placeholder={"Buscar por nota"} />
          <Feather name="search" size={24} color={DarkGray} />
        </SearchInputContainer>
      </HeaderContainer>
      <BodyContainer>
        <BookContainer>
          <BookContainerTitle>
            <Subtitle Color={PrimaryColor}>Livros</Subtitle>
            <IconBtn>
              <Feather name="grid" size={24} color={DarkGray} />
            </IconBtn>
          </BookContainerTitle>
          <BookList horizontal={true}>
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
          </BookList>
        </BookContainer>
        <NotesContainer>
          <NoteList>
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
          </NoteList>
        </NotesContainer>
      </BodyContainer>
      <FooterContainer>
        <RoundPrimaryBtn onPress={() => props.navigation.navigate("AddNote")}>
          {addNoteIcon}
        </RoundPrimaryBtn>
        <RoundPrimaryBtn>{addBookIcon}</RoundPrimaryBtn>
      </FooterContainer>
    </StyledSafeAreaView>
  );
};

export default DefaultHome;
