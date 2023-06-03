import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Competitions from "../Screens/Competitions/Competitions.route";
import { Colors } from "../Utils/Colors";
import Profile from "../Screens/Profile/Profile.screen";
import Categories from "../Screens/Categories/Categories.screen";
import Enter from "../Screens/Enter/Enter.screen";
import Voting from "../Screens/Voting/Voting.screen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { getAllCompetitions } from "../services/firestore.db";
import { FireBaseProvider } from "../store/FirebaseUser.context";

const Tab = createBottomTabNavigator();

export default function Home() {
  const [competitions, setCompetitions] = useState();

  useEffect(() => {
    getComps();
  }, []);

  const getComps = async () => {
    const allCompetitions = await getAllCompetitions();

    console.log(allCompetitions);
    setCompetitions(allCompetitions);
  };

  //Make firebase call here and parse into enter and into Competitions
  return (
    <FireBaseProvider>
      <Tab.Navigator
        initialRouteName="Competitions"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            borderColor: Colors.White,
            borderTopColor: Colors.White,
            backgroundColor: "transparent",
            borderTopWidth: 3,
            borderWidth: 3,
            borderRadius: 14,
            width: "95%",
            height: 70,
            justifyContent: "center",
            alignSelf: "center",
            marginBottom: 25,
            backgroundColor: Colors.primary,
            // paddingVertical: 5
            paddingBottom: 10,
            paddingHorizontal: 5,
          },
          tabBarActiveTintColor: Colors.secondary,
        }}
      >
        <Tab.Screen
          name={"Competitions"}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={30} />
            ),
          }}
        >
          {(props) => <Competitions {...props} data={competitions} />}
        </Tab.Screen>

        <Tab.Screen
          name={"Vote"}
          component={Voting}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="leaderboard" color={color} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name={"Enter"}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="add-circle-outline"
                color={color}
                size={30}
              />
            ),
          }}
        >
          {(props) => <Enter {...props} data={competitions} />}
        </Tab.Screen>
        <Tab.Screen
          name={"Categories"}
          component={Categories}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="groups" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name={"Profile"}
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person-outline" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </FireBaseProvider>
  );
}
