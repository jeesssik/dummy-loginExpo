import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreens';
import SignupScreen from '../screens/SignupScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
const { user } = useAuth();
console.log('user', user);
return (
<NavigationContainer>
    <Stack.Navigator>
    {user ? (
        // Rutas para usuarios autenticados
        <>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        </>
    ) : (
        // Rutas para usuarios no autenticados
        <>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        </>
    )}
    </Stack.Navigator>
</NavigationContainer>
);
};

export default AppNavigator;
