import { Text } from 'react-native-elements';
import { StyleSheet, Pressable } from "react-native";
import { withNavigation } from 'react-navigation';
import Spacer from '../components/Spacer'

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <Pressable onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'navy',
  }
})

export default withNavigation(NavLink)
