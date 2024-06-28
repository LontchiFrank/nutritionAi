/** @format */

import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import Dashboard from "./screens/Dashboard/Dashboard";
import Category from "./screens/Categories/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Learn from "./screens/Learn/Learn";
import Prices from "./screens/Prices/Prices";
import Profile from "./screens/Profile/Profile";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const screenOptions: any = {
	tabBarShowLbel: false,
	headerShown: false,
	tabBarStyle: {
		position: "absolute",
		botton: 0,
		right: 0,
		left: 0,
		elevation: 0,
		height: 60,
		backgroundColor: "#fff",
		paddingVertical: 17,
	},
	tabBarShowLabel: false,
};

type TabBarIconProps = {
	focused: boolean;
	color: string;
	size: number;
};

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={screenOptions}>
				<Tab.Screen
					name="Home"
					component={Dashboard}
					options={{
						tabBarIcon: (focused: boolean) => {
							return (
								<View
									style={{ alignItems: "center", justifyContent: "center" }}>
									<Ionicons
										name={focused ? "home-outline" : "home-outline"}
										size={20}
										color={focused ? "#fb5607" : "#000"}
									/>
									<Text style={{ fontSize: 12, color: "#000" }}>Home</Text>
								</View>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Category"
					component={Category}
					options={{
						tabBarIcon: (focused: boolean) => {
							return (
								<View
									style={{ alignItems: "center", justifyContent: "center" }}>
									<MaterialIcons
										name={focused ? "category" : "category"}
										size={20}
										color={focused ? "#fb5607" : "#000"}
									/>
									<Text style={{ fontSize: 12, color: "#000" }}>Category</Text>
								</View>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Learn"
					component={Learn}
					options={{
						tabBarIcon: (focused: boolean) => {
							return (
								<View
									style={{
										top: Platform.OS == "ios" ? -20 : -20,
										width: Platform.OS == "ios" ? 50 : 60,
										height: Platform.OS == "ios" ? 50 : 60,
										borderRadius: Platform.OS == "ios" ? 25 : 30,
										alignItems: "center",
										justifyContent: "center",
										backgroundColor: "#fb5607",
									}}>
									<AntDesign
										name={focused ? "book" : "book"}
										size={25}
										color={focused ? "#fff" : "#fff"}
									/>
									{/* <Text style={{ fontSize: 12, color: "#fff" }}>Plan</Text> */}
								</View>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Prices"
					component={Prices}
					options={{
						tabBarIcon: (focused: boolean) => {
							return (
								<View
									style={{ alignItems: "center", justifyContent: "center" }}>
									<AntDesign
										name={focused ? "wallet" : "wallet"}
										size={20}
										color={focused ? "#fb5607" : "#000"}
									/>
									<Text style={{ fontSize: 12, color: "#000" }}>Wallet</Text>
								</View>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={Profile}
					options={{
						tabBarIcon: (focused: boolean) => {
							return (
								<View
									style={{ alignItems: "center", justifyContent: "center" }}>
									<MaterialIcons
										name={focused ? "health-and-safety" : "health-and-safety"}
										size={20}
										color={focused ? "#fb5607" : "#000"}
									/>
									<Text style={{ fontSize: 12, color: "#000" }}>Profile</Text>
								</View>
							);
						},
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
