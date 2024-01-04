import { StyleSheet, View } from "react-native";
import { NavigationEvents } from 'react-navigation';

import { useAuthContext } from '../context/AuthContext';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const { state, clearErrorMessage, signin } = useAuthContext()

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />

      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />

      <NavLink
        routeName="Signup"
        text="Don't have an account? Sign in instead"
      />
    </View>
  );
}

SigninScreen.navigationOptions = () => {
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
});

export default SigninScreen
