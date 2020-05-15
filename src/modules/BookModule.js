import { AsyncStorage } from "react-native";
import UIDModule from "./UIDModule";

function BookModule(props) {
  async function createBook(title) {
    let id = await UIDModule().GenerateUID();
    let book = {
      id: id.toString(),
      title,
      date: new Date().toLocaleDateString("pt-PT"),
    };
    await saveBook(book);
    return book;
  }

  function editBook() {}

  function deleteBook() {}

  async function getBook(bookID) {
    let book = await AsyncStorage.getItem(bookID);
    return book;
  }

  async function saveBook(book) {
    try {
      await AsyncStorage.setItem(book.id, JSON.stringify(book));
    } catch (error) {
      console.log("> [BookModule] saveBook : " + error);
    }
  }

  function openBook(book) {
    props.navigation.push("BookDetails", { book });
  }

  return {
    createBook,
    getBook,
  };
}

export default BookModule;
