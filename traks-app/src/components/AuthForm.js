import { useState } from 'react';
import { StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";

import Spacer from "../components/Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
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

        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

        <Spacer />

        <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginHorizontal: 15
  },
})

export default AuthForm
