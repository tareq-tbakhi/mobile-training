import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack 
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#ddd',
            
                },
                headerTintColor: '#13a01a',
            }}
        >
            <Stack.Screen name="index" options={{ title: 'Home', headerShown: true , headerTitleStyle: { color: '#0e48e9' } }} />
            <Stack.Screen name="about" options={{ title: 'About screen'}} />
            <Stack.Screen name="contact" options={{ title: 'favourite' , headerTintColor: '#ff0000'}} />
        </Stack>
    );
}

