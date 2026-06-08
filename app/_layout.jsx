import { Stack } from 'expo-router';
import {useColorScheme} from 'react-native';
import { Colors } from '../constants/Colors';
import {StatusBar} from 'expo-status-bar';

export default function RootLayout() {


    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;



    return (
        <>
        <StatusBar style="auto" />
        <Stack 
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.navBackground,
            
                },
                headerTintColor: theme.title,
            }}
        >
            <Stack.Screen name="index" options={{ title: 'Home', headerShown: true }} />
            <Stack.Screen name="about" options={{ title: 'About screen'}} />
            <Stack.Screen name="contact" options={{ title: 'contact' }} />
        </Stack>
        </>
    );
}

