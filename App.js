import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Home, Expense, Income, Detail } from './screens';
import {
    View,
    Image
} from "react-native";
import { COLORS, icons } from './constants';

const theme = {
    ...DefaultTheme,
    color: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen
                    name="Home" 
                    component={Home}
                    options={{
                        headerShown: false,
                        presentation: 'modal',
                        animationTypeForReplace: 'push',
                        animation:'slide_from_right'
                    }}
                />
                <Stack.Screen 
                    name="Expense" 
                    component={Expense}
                    options={{
                        headerShown: false,
                        presentation: 'modal',
                        animationTypeForReplace: 'push',
                        animation:'slide_from_right'
                    }}
                />
                <Stack.Screen 
                    name="Income" 
                    component={Income}
                    options={{
                        headerShown: false,
                        presentation: 'modal',
                        animationTypeForReplace: 'push',
                        animation:'slide_from_right'
                    }}
                />
                <Stack.Screen 
                    name="Detail" 
                    component={Detail}
                    options={{
                        headerShown: false,
                        presentation: 'modal',
                        animationTypeForReplace: 'push',
                        animation:'slide_from_right'
                    }}
                />
            </Stack.Navigator>
            <View style={{
                height: 70,
                width: 70,
                backgroundColor: COLORS.peach,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: 'center',
                position: "absolute",
                bottom: 0,
                left: 300,
                right: 300,
                zIndex: 1
            }}>
                <Image 
                    source={icons.plus}
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.white
                    }}
                />
            </View>
        </NavigationContainer>
    );
}
