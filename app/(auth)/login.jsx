import { StyleSheet} from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'






const login = () => {
  return (
    <ThemedView style = {styles.container}>
        <Spacer/>
        <ThemedText tiltle = {true} style = {styles.title}>
            Login To Your Account
        </ThemedText>

        <Spacer height={100}/>

        <Link href="/register">
          <ThemedText style = {{textAlign: 'center'}}>Don't have an account? Register</ThemedText>
        </Link>

    </ThemedView>
  )
}

export default login


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        justifyContent: 'center',
        fontSize: 18,
        marginBottom: 30,
    }
})