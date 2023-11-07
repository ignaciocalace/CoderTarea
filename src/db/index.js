import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("sessionsMyRoutine.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS sessionsMyRoutine (localId TEXT PRIMARY KEY NOT NULL , email TEXT NOT NULL, token TEXT NOT NULL)",
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
    });
    resolve();
  });
  return promise;
};

export const insertSession = ({ localId, email, token }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT OR REPLACE INTO sessionsMyRoutine (localId, email, token) VALUES (?, ?, ?);",
        [localId, email, token],
        (_, res) => resolve(res),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const fetchSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM sessionsMyRoutine",
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const deleteSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM sessionsMyRoutine",
        [],
        (_, res) => resolve(res),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};
