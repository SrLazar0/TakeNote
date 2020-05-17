import * as SQLite from "expo-sqlite";

function SQLiteModule() {
  const db = SQLite.openDatabase("takenote.db");

  const statements = {
    insert: "INSERT INTO ",
    values: " VALUES ",
  };

  function createTables() {
    db.transaction((tx) => {
      tx.executeSql("PRAGMA foreign_keys=on");
      tx.executeSql(
        `create table if not exists [Books] ([BookID] INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT, [BookTitle] NVARCHAR(50) UNIQUE  NULL, DateTime real )`
      );
      tx.executeSql(
        `create table if not exists [Notes] ([NoteID] INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT, [NoteTitle] NVARCHAR(50)  NULL, [NoteText] text, DateTime real, [BookID] INTEGER  NOT NULL,FOREIGN KEY(BookID) REFERENCES Books(BookID) )`
      );
    });
    // Book.createBook("Notes");
  }

  function deleteTable(table) {
    console.log("> Deleting");
    let sql = "DROP TABLE " + table;
    db.transaction((tx) => {
      tx.executeSql("PRAGMA foreign_keys=off");
      tx.executeSql(sql), [];
    });
  }

  const insertItem = (sql, values) =>
    new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          sql,
          values,
          (_, result) => {
            resolve(result.insertId);
          },
          (tx, error) => {
            reject("> [Insert method] " + error);
          }
        );
      });
    });

  const selectItem = (sql, values) =>
    new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          sql,
          values,
          (_, { rows: { _array } }) => {
            resolve(_array);
          },
          (tx, error) => {
            reject("> [Select method] " + error);
          }
        );
      });
    });

  return {
    statements,
    createTables,
    deleteTable,
    insertItem,
    selectItem,
  };
}

export default SQLiteModule;
