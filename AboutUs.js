import { View, Text, StyleSheet, Button, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function AboutUsScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          margin: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            borderWidth: 5,
            padding: 10,
          }}
        >
          This app is designed to help you as individuals to stay on track with
          you daily daily goals and tasks. The app is a place that is designed
          for you where you are able to write down your tasks that you want to
          complete and to cross them out once you have completed them.
        </Text>
        <Button title="info" onPress={() => setModalVisible(true)}></Button>
      </SafeAreaView>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View
          style={{
            backgroundColor: "coral",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <ScrollView>
            <View style={styles.ModalContent}>
              <View style={{ gap: 20 }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: 10,
                    shadowColor: "#171717",
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 10,
                    shadowRadius: 5,
                  }}
                >
                  HOW TO USE OUR APP
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: 10,
                  }}
                >
                  This App is one that is very simple and efficient for you to
                  use. Its aim is to help you track and manage your tasks my
                  inputing them and then crossing them out once you have done
                  that task.
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: 10,
                    shadowColor: "#171717",
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 10,
                    shadowRadius: 5,
                  }}
                >
                  INPUT YOUR TASK
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: 10,
                  }}
                >
                  To input your task that you wish to complete is very simple.
                  To input your task that you would like to store within the
                  app, you must go to the "ADD TASK" page, where it will give
                  you the option to write your task down and be stored in the
                  home page of the app.
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: 10,
                    shadowColor: "#171717",
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 10,
                    shadowRadius: 5,
                  }}
                >
                  CROSS OUT TASK
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: 10,
                  }}
                >
                  Once you have inputed your task, it will then show up on the
                  Home Screen of the app where you are then able to cross out
                  the task once you have completed it.
                </Text>
              </View>
            </View>
          </ScrollView>
          <Button title="Done" onPress={() => setModalVisible(false)}></Button>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},

  ModalContent: {
    width: "100%",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 100,
  },
});
