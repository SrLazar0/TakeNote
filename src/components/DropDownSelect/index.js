import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  PrimaryColor,
  DarkGray,
  LightPrimaryColor,
  DarkGreen,
} from "../../styles/colors";
import { TextBody } from "../../styles/GlobalStyles";

function Book({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? "#10b26c20" : "transparent" },
      ]}
    >
      <TextBody Color={selected ? PrimaryColor : DarkGray} TextAling={"left"}>
        {title}
      </TextBody>
    </TouchableOpacity>
  );
}

function ListContainer(onSelect, selected, setBook, bookList) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={bookList}
        renderItem={({ item }) => (
          <Book
            id={item.id}
            title={item.title}
            selected={selected == item.id}
            onSelect={() => onSelect(item, setBook)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const DropDownSelect = (props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();
  const [title, setTitle] = useState();

  const onSelect = (book, setBook) => {
    setSelected(book.id);
    setOpen(!open);
    setTitle(book.title);
    setBook(book);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectBtn} onPress={() => setOpen(!open)}>
        <TextBody Color={PrimaryColor}>{title || "Livro"}</TextBody>
        <Feather name={"chevron-down"} color={DarkGray} size={24} />
      </TouchableOpacity>
      {open && ListContainer(onSelect, selected, props.setBook, props.bookList)}
    </View>
  );
};

export default DropDownSelect;
