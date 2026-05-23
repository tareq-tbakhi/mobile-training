import { StyleSheet, Text, View } from 'react-native'
import {Link} from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>


      <Link style={styles.link} href="/">Back Home</Link>
    </View>
  )
}

export default Contact

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
  link:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },    

})
