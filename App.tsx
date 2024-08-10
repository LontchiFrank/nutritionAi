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
import AItext from "./screens/Categories/AItext";
import PersonalInfo from "./screens/Personal/PersonlInfo";
import Welcome from "./screens/Personal/Welcome";

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
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Welcome"
					component={Welcome}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="PersonalInfo"
					component={PersonalInfo}
					options={{ headerShown: false }}
				/>
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
