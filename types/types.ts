import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {

    DetailScreen: { category: { id: number; name: string; color: string; } };
};
