import { View, Text, TextInput, Button, Modal, StyleSheet } from "react-native"
import React, { useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { useReState } from "@raulpesilva/re-state"

export default function AddTaskScreen() {
  const [modalVisible, setModalVisible] = useState(false)
  const [output, setOutput] = useState("")
  const [input, setInput] = useState("")
  const [data, setData] = useReState("data", [""])

  useEffect(() => {
    setData((prevData) => [...prevData, output])
  }, [output])

  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 100,
          marginRight: 20,
          fontSize: 20,
          borderWidth: 2,
        }}
      >
        Click on this button below to add a "New Task" for yourself which will
        appear on the "Task" Page.
      </Text>

      <View style={styles.container}>
        <Button title="Add New Task" onPress={() => setModalVisible(true)} />
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modallayer}>
            <View style={styles.modalView}>
              <Text style={styles.text}>Enter New Task</Text>
              <TextInput
                style={{ width: 300, height: 40, borderWidth: 1, padding: 10 }}
                value={input}
                onChangeText={(t) => setInput(t)}
                onSubmitEditing={() => {
                  setOutput(input)
                }}
                placeholder="Enter Task"
                clearTextOnFocus={true}
              ></TextInput>

              <Button
                title="Submit"
                onPress={() => {
                  setModalVisible(false)
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: "white",
    padding: 50,
    borderRadius: 10,
    borderWidth: 5,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 10,
    shadowRadius: 5,
  },

  modallayer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalView: {
    margin: 30,
    backgroundColor: "#ffff",
    padding: 20,
    borderRadius: 20,
    gap: 10,
  },

  text: {
    margin: 10,
    fontSize: 20,
    textAlign: "center",
  },

  Textinput: {
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    width: "100%",
    margin: "auto",
    textAlign: "center",
  },
})
