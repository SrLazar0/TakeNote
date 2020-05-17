import SQLiteModule from "./SQLiteModule";
// import * as SQLite from "expo-sqlite";
function BookModule(props) {
  const db = SQLiteModule();
  // const db = SQLite.openDatabase("takenote.db");

  const createBook = async (title) => {
    let sql =
      db.statements.insert +
      "Books (BookTitle, DateTime)" +
      db.statements.values +
      "(?, julianday('now'))";

    try {
      let BookID = await db.insertItem(sql, [title]);
      let book = getBook(BookID);
      return book;
    } catch (error) {
      return error;
    }
  };

  function editBook() {}

  function deleteBook() {}

  async function getBook(BookID) {
    let SelectStatement =
      "SELECT BookID, BookTitle, date(DateTime) as Date, time(DateTime) as Time FROM Books WHERE BookID = ?";
    try {
      let book = await db.selectItem(SelectStatement, [BookID]);
      return book;
    } catch (error) {
      return error;
    }
  }

  function openBook(Book) {
    props.navigation.push("BookDetails", { Book });
  }

  return {
    createBook,
    getBook,
  };
}

export default BookModule;
