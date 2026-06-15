//login page
import { Keyboard, StyleSheet, Pressable, Text } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'
import {TextInput} from 'react-native'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'


 
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =  () => {
    console.log("Login form submitted:", { email, password });
  }


  return (


        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    


    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>


      <ThemedTextInput placeholder="Email" keyboardType="email-address"
        onChangeText={setEmail} value={email}
        style={{width:'80%', marginBottom: 20}}
      />

      <ThemedTextInput placeholder="Password" secureTextEntry
        onChangeText={setPassword} value={password}
        style={{width:'80%', marginBottom: 20}}
      />


      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Login</Text>
      </ThemedButton>



      <Spacer height={100} />
      <Link href="/register" replace>
        <ThemedText style={{ textAlign: "center" }}>
          Register instead
        </ThemedText>
      </Link>
    </ThemedView>


    </TouchableWithoutFeedback>
  )
}
export default Login
 


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title:     { textAlign: "center", fontSize: 18, marginBottom: 30 },

})
