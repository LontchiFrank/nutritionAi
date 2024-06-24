/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./screens/Dashboard/Dashboard";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

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
		background: "#fff",
	},
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
						tabBarIcon: ({ focused }: TabBarIconProps) => {
							<View style={{ alignItems: "center", justifyContent: "center" }}>
								<Ionicons
									name={focused ? "home" : "home-outline"}
									size={24}
									color={focused ? "#fb5607" : "#000"}
								/>
								{/* <Ionicons name="home-outline" size={24} color="#000" /> */}
								<Text style={{ fontSize: 25, color: "#000" }}>HomeAlone</Text>
							</View>;
						},
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>

		// <View style={styles.container}>
		// 	<StatusBar style="auto" />
		// 	<Dashboard />
		// </View>
	);
}
