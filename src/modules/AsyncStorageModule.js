import { AsyncStorage } from "react-native";

function AsyncStorageModule() {
  async function saveItem(key, Item) {
    let result = await AsyncStorage.setItem(
      key.toString(),
      JSON.stringify(Item)
    );
    return result;
  }

  async function getItem(key) {
    let item;
    try {
      item = await AsyncStorage.getItem(key.toString());
    } catch (error) {
      console.log("> [AsyncStorageModule] getItem: " + error);
    }
    return item;
  }

  async function clearStorage() {
    try {
      await AsyncStorage.clear();
    } catch (error) {}
  }

  return { saveItem, getItem, clearStorage };
}

export default AsyncStorageModule;
