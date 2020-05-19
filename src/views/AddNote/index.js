import React, { useState } from "react";

import {
  StyledSafeAreaView,
  RoundPrimaryBtn,
  RoundDangerBtn,
} from "../../styles/GlobalStyles";
import { Feather } from "@expo/vector-icons";
import { Container, NoteInput, Note, TitleInput, Footer } from "./styles";
import DropDownSelect from "../../components/DropDownSelect";
import { ScrollView } from "react-native";
import { DefaultBackgroundColor } from "../../styles/colors";

const AddNote = (props) => {
  const [book, setBook] = useState({});

  const addIcon = (
    <Feather name={"plus"} size={32} color={DefaultBackgroundColor} />
  );
  const cancelIcon = (
    <Feather name={"x"} size={32} color={DefaultBackgroundColor} />
  );

  const BookList = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  return (
    <StyledSafeAreaView>
      <Container>
        <Note>
          <TitleInput placeholder={"Título"} />
          <DropDownSelect bookList={BookList} setBook={setBook} />
          <ScrollView>
            <NoteInput multiline={true} placeholder={"Nota"} />
          </ScrollView>
        </Note>
        <Footer>
          <RoundDangerBtn>{cancelIcon}</RoundDangerBtn>
          <RoundPrimaryBtn>{addIcon}</RoundPrimaryBtn>
        </Footer>
      </Container>
    </StyledSafeAreaView>
  );
};

export default AddNote;
