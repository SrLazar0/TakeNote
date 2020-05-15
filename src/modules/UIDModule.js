// import "react-native-get-random-values";
// import { nanoid } from "nanoid";
import * as Random from "expo-random";
import { AsyncStorage } from "react-native";

function UIDModule() {
  async function GenerateUID() {
    let id = await Random.getRandomBytesAsync(1);
    let checkedID = checkID(id[0]);
    return checkedID;
  }

  async function checkID(id) {
    let newID;
    let result = await AsyncStorage.getItem(id);
    if (!result) {
      return id;
    } else {
      while (result != null) {
        newID = await Random.getRandomBytesAsync(1);
        result = await AsyncStorage.getItem(newID[0]);
      }
      return newID[0];
    }
  }

  return {
    GenerateUID,
  };
}

export default UIDModule;
