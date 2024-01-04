import { Button, StyleSheet, Text, View } from "react-native";

const AccountScreen = ({ navigation }) => {
  return (
    <>
      <Text>AccountScreen</Text>

      <Button
        title="Go to Sign in"
        onPress={() => navigation.navigate('Signin')}
      />
    </>
  );
}

const styles = StyleSheet.create({});

export default AccountScreen
