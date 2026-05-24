import { View, Text, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Contact() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Contact</Text>
            <Link href="/" style={styles.link}>Home</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    link: {
        marginVertical: 20,
        borderBottomWidth: 1,
    },
});