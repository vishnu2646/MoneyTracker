import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Home, Expense, Income, Detail } from './screens';

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
        </NavigationContainer>
    );
}
