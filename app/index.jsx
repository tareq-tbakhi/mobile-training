import { View, Text, StyleSheet ,Image} from "react-native";
import logo from '../assets/img/logo_light.png';
import { Link } from 'expo-router';
import ThemedView from "../components/ThemedView"
import ThemedText from "../components/ThemedText"
import ThemedLogo from "../components/ThemedLogo"
import Spacer from "../components/Spacer"


export default function Index() {

    
    return (
        <ThemedView style={styles.container}>

            <ThemedLogo />
            <Spacer />
            <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>

            <ThemedText style={{marginTop: 10, marginBottom: 30}}>
                Reading List App
            </ThemedText>

            <Link href="/login" style={styles.link}>
            <ThemedText>Login</ThemedText>
            </Link>

            <Link href="/register" style={styles.link}>
            <ThemedText>Register</ThemedText>
            </Link>

            <Link href="/profile" style={styles.link}>
            <ThemedText>Profile</ThemedText>
            </Link>


        </ThemedView>
    );
}   


const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title:     { fontWeight: 'bold', fontSize: 18 },
  link:      { marginVertical: 10, borderBottomWidth: 1 }
})
