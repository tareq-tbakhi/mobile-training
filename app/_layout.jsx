import { Stack } from "expo-router"; 
import { View, Text, StyleSheet } from "react-native";


const RootLayout = () => {
  return (
        <Stack 
            screenOptions={{
                headerStyle: { backgroundColor: "#ddd" },
                headerTintColor: "#000"
            }}>  
            
            <Stack.Screen name="index" options={{title: "Home", headerShown: false}} />
            <Stack.Screen name="about" options={{title: "About"}} />
            <Stack.Screen name="contact" options={{title: "Contact"}} />
        </Stack>  
) 
} 

export default RootLayout;  

const styles = StyleSheet.create({})    