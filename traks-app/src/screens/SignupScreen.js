import { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from 'react-native-elements';

import Spacer from '../components/Spacer';

import { useAuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, signup } = useAuthContext()

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>

      <Spacer>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          label="Email"
          onChangeText={setEmail}
          value={email}
        />

        <Input
          autoCapitalize="none"
          label="Password"
          onChangeText={setPassword}
          secureTextEntry
          value={password}
        />

        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}

        <Spacer />

        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginHorizontal: 15
  }
});

export default SignupScreen;
