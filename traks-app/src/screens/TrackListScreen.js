import { Button, StyleSheet, Text, View } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text>TrackListScreen</Text>

      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
