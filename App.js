import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import SectionListTutorial from "./Tutorial/SelectionListTutorial";
import ReadDataFunc from "./Tutorial/ReadDataFunc";
import PictureTutorial from "./Tutorial/PictureTutorial";
import JustifyContentTutorial from "./Tutorial/JustifyContentTutorial";
import HeightWidthTutorial from "./Tutorial/HeightWidthTutorial";
import FlexTutorial from "./Tutorial/FlexTutorial";
import FlexDirectionTutorial from "./Tutorial/FlexDirectionTutorial";
import FlatListTutorial from "./Tutorial/FlatListTutorial";
import ClassTutorial from "./Tutorial/ClassTutorial";
import ButtonTutorial from "./Tutorial/ButtonTutorial";
import PropsTutorial from "./Tutorial/PropsTutorial";
import PropFatherTutorial from "./Tutorial/PropFatherTutorial";
import StateTutorial from "./Tutorial/StateTutorial";
import StateToInputTutorial from "./Tutorial/StateToInputTutorial";
import SendDataTutorial from "./Tutorial/SendDataTutorial";
import SendDataFromEditText2 from "./Tutorial/SendDataFromEditText";
import Cat from "./Tutorial/Cat";
import Cafe from "./Tutorial/Cat";
import App1 from "./Tutorial/App1";
import InputTextExam from "./Tutorial/InputTextExam";
import Excersise1 from "./Tutorial/Excersise1";
import { Drawer, PaperProvider } from "react-native-paper";
import DemoTheme from "./Tutorial/DemoTheme";
import DemoBottomNavigation from "./Tutorial/DemoBottomNavigation";
import DrawerNavPaper from "./DrawerNavTutorial/DrawerNavPaperCustom";
import DemoHelper from "./Tutorial/DemoHelper";
import Excersise2 from "./AppBar/Excersise2";
import DrawerNav from "./DrawerNavTutorial/DrawerNav";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./AppStackNav/MyStack";
import TabNav from "./TabNavTutorial/TabNav";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function App() {
  const Tab  = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <SectionListTutorial/> */}
      {/* <ReadDataFunc/> */}
      {/* <PictureTutorial/> */}
      {/* <JustifyContentTutorial/> */}
      {/* <HeightWidthTutorial/> */}
      {/* <FlexTutorial/> */}
      {/* <FlexDirectionTutorial/> */}
      {/* <FlatListTutorial/> */}
      {/* <ClassTutorial/> */}
      {/* <ButtonTutorial/> */}
      {/* <PropsTutorial tenNguoi="Nguyen Van A"/> */}
      {/* <PropFatherTutorial />
      <PropsTutorial ten='Nguyen Van V'/> */}
      {/* <StateTutorial/> */}
      {/* <StateToInputTutorial/> */}
      {/* <SendDataTutorial/> */}
      {/* <SendDataFromEditText2/> */}
      {/* <Cafe /> */}
      {/* <App1/> */}
      {/* <InputTextExam/> */}
      {/* <Excersise1/> */}
      {/* <PaperProvider> */}
      {/* <DemoTheme/> */}
      {/* <DemoBottomNavigation/> */}
      {/* <DrawerNav/> */}
      {/* <DemoHelper/> */}
      {/* <Excersise2 />
      </PaperProvider> */}
      <NavigationContainer>
        <PaperProvider>
          <Tab.Navigator>
            <Tab.Screen name="Excersise 2" component={Excersise2} />
            <Tab.Screen name="Tab Navigation" component={TabNav} />
            <Tab.Screen name="Stack Navigation" component={MyStack} />
            <Tab.Screen name="Drawer Navigation" component={DrawerNav} />
          </Tab.Navigator>
          {/* <Excersise2 /> */}
          {/* <TabNav /> */}
          {/* <MyStack /> */}
          {/* <DrawerNav /> */}
        </PaperProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
