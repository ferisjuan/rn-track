import { Button, StyleSheet, Text, View } from "react-native";

import { useAuthContext } from '../context/AuthContext';
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = useAuthContext()

  return (
    <>
      <Spacer>
        <Text style={{ fontSize: 44 }}>AccountScreen</Text>


        <Button
          title="Sign Out"
          onPress={signout}
        />
      </Spacer>
    </>
  );
}

const styles = StyleSheet.create({});

export default AccountScreen
