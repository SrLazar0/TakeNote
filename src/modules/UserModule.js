import { AsyncStorage } from "react-native";
import AsyncStorageModule from "./AsyncStorageModule";
import { useState } from "react";

function UserModule() {
  let storage = AsyncStorageModule();

  function createUser(name) {
    let user = {
      name,
    };
    storage.saveItem("User", user);
  }

  function getUser() {
    const [user, setUser] = useState({});
    try {
      storage.getItem("User").then((result) => {
        setUser(JSON.parse(result));
      });
    } catch (error) {
      console.log("> [UserModule] getUser: " + error);
    }
    return user;
  }

  return { createUser, getUser };
}

export default UserModule;
