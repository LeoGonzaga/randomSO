import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  TouchableOpacity
} from "react-native";

export default function App() {
  let [index, setIndex] = useState();

  let data = [
    "Plan 9",
    "Inferno",
    "MascOS",
    "QNX",
    "Minix",
    "Mint",
    "TynyOS",
    "TrueOS",
    "FreeBSD",
    "Fedora",
    "Red Hat",
    "Android OS",
    "IOS",
    "FreeRTOS",
    "Amoeba",
    "Arch Linux",
    "Antergos",
    "Black Arch",
    "Kali",
    "Parrot",
    "ReConOs",
    "BORPH"
  ];

  const image = "./assets/logo.png";
  function randomGroup() {
    let number = Math.floor(Math.random() * 21) + 1;
    setIndex(number);
    Alert.alert(number.toString());
  }
  return (
    <View style={styles.container}>
      <View style={styles.labelTitle}>
        <Text>ECOS01 Random!</Text>
      </View>
      <View
        style={{
          flex: 1,
          width: 300,
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <Image source={require(image)} />
        <Text style={styles.labelRandom}>{data[index]}</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => randomGroup()}
        >
          <Text>Sortear grupo </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  labelTitle: {
    marginTop: 50,
    padding: 4
  },
  labelRandom: {
    fontSize: 40,
    alignItems: "center",
    padding: 20,
    textAlign: "center"
  },
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
    marginTop: 100
  }
});
