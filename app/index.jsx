import { View, Text, StyleSheet ,Image} from "react-native";
import logo from '../assets/img/logo_light.png';
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View style={styles.container}>

            <Image source={logo} style={styles.logo} />
            <Text style={styles.text}>Welcome to UOE application</Text>

            <Link href="/about" style={styles.link}>About</Link>
            <Link href="/contact" style={styles.link}>Contact</Link>

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
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        //marginBottom: 50,
        color: '#000',
    },
    card: {
        width: '80%',
        height: 300,
        backgroundColor: '#9e9e9e',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
   
    },
    logo: {
        width: 300,
        height: 130,
        //marginBottom: 50,
        resizeMode: 'contain',
        //backgroundColor: '#acacac',
        marginVertical: 50,
        opacity: 1,
    },
    link: {
        marginVertical: 20,
        borderBottomWidth: 1,
    },
});