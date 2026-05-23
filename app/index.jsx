import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";

import logo from "../assets/img/logo_light.png";

const Home = () => {
  return (
    <View style={styles.container}>
        
        <Image source={logo} style={styles.logo} />
    
      <Text style={[styles.title, {marginTop: 20}, {fontFamily: 'Arial'}]}>Welcome UOE app</Text>
    
        <Link style={styles.link} href="/about">About Page</Link>
        <Link style={styles.link} href="/contact">Contact Page</Link>
    </View>
    

  );
}   


export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 50,
  },
  logo:{
    resizeMode: 'contain',
    width: 250,
    height: 120,
    marginVertical: 20,
    //backgroundColor: '#f0f0f0a3',
  },
  link:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  }, 
});
