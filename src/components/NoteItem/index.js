import React from "react";
import { TextBody } from "../../styles/GlobalStyles";
import { Container, Tag, TextContainer } from "./styles";
import { PrimaryColor, DarkGray } from "../../styles/colors";

const NoteItem = (props) => {
  return (
    <Container>
      <Tag Color={props.Color} />
      <TextContainer>
        <TextBody Color={PrimaryColor} TextAling={"left"}>
          {props.Title || "Titulo da note"}
        </TextBody>
        <TextBody Color={DarkGray} TextAling={"left"}>
          {props.Date || "00/00/0000"}
        </TextBody>
      </TextContainer>
    </Container>
  );
};

export default NoteItem;
