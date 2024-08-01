/** @format */

import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import Dashboard from "./screens/Dashboard/Dashboard";
import Category from "./screens/Categories/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Learn from "./screens/Learn/Learn";
import Prices from "./screens/Prices/Prices";
import Profile from "./screens/Profile/Profile";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import DetailScreen from "./screens/Categories/Detail";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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

function MainTabs() {
	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen
				name="Home"
				component={Dashboard}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<Ionicons
								name="home-outline"
								size={20}
								color={focused ? "#fb5607" : "#000"}
							/>
							<Text
								style={{ fontSize: 12, color: focused ? "#fb5607" : "black" }}>
								Home
							</Text>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Category"
				component={Category}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<MaterialIcons
								name="category"
								size={20}
								color={focused ? "#fb5607" : "black"}
							/>
							<Text
								style={{ fontSize: 12, color: focused ? "#fb5607" : "black" }}>
								Category
							</Text>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Learn"
				component={Learn}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								top: -20,
								width: 60,
								height: 60,
								borderRadius: 30,
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: "#fb5607",
							}}>
							<AntDesign name="book" size={25} color="#fff" />
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Prices"
				component={Prices}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<AntDesign
								name="wallet"
								size={20}
								color={focused ? "#fb5607" : "#000"}
							/>
							<Text
								style={{ fontSize: 12, color: focused ? "#fb5607" : "black" }}>
								Wallet
							</Text>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<MaterialIcons
								name="health-and-safety"
								size={20}
								color={focused ? "#fb5607" : "#000"}
							/>
							<Text
								style={{ fontSize: 12, color: focused ? "#fb5607" : "black" }}>
								Profile
							</Text>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			{/* <Tab.Navigator screenOptions={screenOptions}>
				<Tab.Screen
					name="Home"
					component={Dashboard}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<View
									style={{ alignItems: "center", justifyContent: "center" }}>
									<Ionicons
										name="home-outline"
										size={20}
										color={focused ? "#fb5607" : "#000"}
									/>

									<Text
										style={{
											fontSize: 12,
											color: focused ? "#fb5607" : "black",
										}}>
										Home
									</Text>
								</View>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Category"
					component={Category}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<View
									style={{ alignItems: "center", justifyContent: "center" }}>
									<MaterialIcons
										name="category"
										size={20}
										color={focused ? "#fb5607" : "black"}
									/>
									<Text
										style={{
											fontSize: 12,
											color: focused ? "#fb5607" : "black",
										}}>
										Category
									</Text>
								</View>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Learn"
					component={Learn}
					options={{
						tabBarIcon: ({ focused }) => {
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
								</View>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Prices"
					component={Prices}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<View
									style={{ alignItems: "center", justifyContent: "center" }}>
									<AntDesign
										name={focused ? "wallet" : "wallet"}
										size={20}
										color={focused ? "#fb5607" : "#000"}
									/>
									<Text
										style={{
											fontSize: 12,
											color: focused ? "#fb5607" : "black",
										}}>
										Wallet
									</Text>
								</View>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={Profile}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<View
									style={{ alignItems: "center", justifyContent: "center" }}>
									<MaterialIcons
										name="health-and-safety"
										size={20}
										color={focused ? "#fb5607" : "#000"}
									/>
									<Text
										style={{
											fontSize: 12,
											color: focused ? "#fb5607" : "black",
										}}>
										Profile
									</Text>
								</View>
							);
						},
					}}
				/>
			</Tab.Navigator> */}
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Main"
					component={MainTabs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="DetailScreen" component={DetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
