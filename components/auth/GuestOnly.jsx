import { useEffect } from "react"
import { useUser } from "../../hooks/useUser"
import { useRouter } from "expo-router"
import { Text } from "react-native"
import ThemedLoader from "../ThemedLoader"

const GuestOnly = ({ children }) => {
  const { user, authChecked } = useUser()
  const router = useRouter()
 
  useEffect(() => {
    if (authChecked && user !== null) {
      router.replace("/profile")   // logged in → go to dashboard
    }
  }, [user, authChecked])
 
  if (!authChecked || user) return <ThemedLoader />
  // <Text>Loading</Text>
  return children 
}

export default GuestOnly
