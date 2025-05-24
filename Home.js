import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useState } from "react"
import { useReState } from "@raulpesilva/re-state"
import { FlatList } from "react-native-gesture-handler"

export default function YourTasksScreen() {
  const [data] = useReState("data", [""])

  const [checkedItems, setCheckedItems] = useState({})

  const toggleCheck = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) =>
          !item ? null : (
            <View style={styles.Row}>
              <Text style={styles.text}>{item}</Text>
              <TouchableOpacity
                style={[styles.checkbox]}
                onPress={() => toggleCheck(index)}
              >
                {checkedItems[index] && <Text style={styles.checkMark}>✓</Text>}
              </TouchableOpacity>
            </View>
          )
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
    height: 1100,
  },
  list: {
    width: "80%",
    height: "50%",
    borderWidth: 1,
    flexGrow: 0,
    padding: 3,
  },
  Row: {
    flexDirection: "row",
    borderColor: "#F87171",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderBottomWidth: 5,
    width: "100%",
  },
  text: {
    flex: 1,
    fontSize: 20,
  },
  checkbox: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  checkMark: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
})
