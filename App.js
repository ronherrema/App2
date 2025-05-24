import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"

import YourTasksScreen from "./Home"
import AddTaskListScreen from "./AddTaskList"
import AboutUsScreen from "./AboutUs"
import ThemeScreen from "./ChangeTheme"
const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="YOUR TASKS"
        screenOptions={{
          drawerStyle: { backgroundColor: "#FFF8F1", width: 200 }, //Light-cream colour
          headerStyle: { backgroundColor: "#F87171" }, //Coral colour for the heading
        }}
      >
        <Drawer.Screen
          name="YOUR TASKS"
          component={YourTasksScreen} //Different pages
        ></Drawer.Screen>
        <Drawer.Screen
          name="ADD TASK"
          component={AddTaskListScreen} //Different pages
        ></Drawer.Screen>
        <Drawer.Screen
          name="About Us"
          component={AboutUsScreen} //Different pages
        ></Drawer.Screen>
        <Drawer.Screen name="THEME" component={ThemeScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
