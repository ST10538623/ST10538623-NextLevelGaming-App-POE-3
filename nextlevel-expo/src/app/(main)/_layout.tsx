import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
import { BottomNavigation } from "../../components/BottomNavigation";
import { colors } from "../../theme";

export default function MainLayout() {
  return (
    <View style={styles.root}>
      <Slot />
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
