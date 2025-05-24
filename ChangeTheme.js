import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useReState } from "@raulpesilva/re-state";

export default function ThemeScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [userInput, setUserInput] = useReState("input", "");

  const [bgc, setBgc] = useReState("bgc", "fff");
  return (
    <View style={[styles.container, { backgroundColor: bgc }]}>
      <View
        style={{
          backgroundColor: "#F87171",
          padding: 10,
          width: 200,
          borderRadius: 10,
          shadowColor: "#171717",
          shadowOffset: { width: -1, height: 2 },
          shadowOpacity: 10,
          shadowRadius: 5,
        }}
      >
        <Button title="Dark Mode" onPress={() => setBgc("#0F172A")}></Button>
      </View>
      <View
        style={{
          backgroundColor: "#F87171",
          padding: 10,
          width: 200,
          borderRadius: 10,
          shadowColor: "#171717",
          shadowOffset: { width: -1, height: 2 },
          shadowOpacity: 10,
          shadowRadius: 5,
        }}
      >
        <Button title="Light Mode" onPress={() => setBgc("#ffffff")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
