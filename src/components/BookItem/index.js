import React from "react";
import BookSVG from "../../../assets/Book.svg";
import { View } from "react-native";
import { TextBody } from "../../styles/GlobalStyles";
import { DarkGray } from "../../styles/colors";

export default function BookItem() {
  return (
    <View style={{ marginRight: 16, maxWidth: 90, maxHeight: 171 }}>
      <BookSVG />
      <TextBody Color={DarkGray}>Receitas de Doces</TextBody>
    </View>
  );
}
