import { router } from "expo-router";
import { Text } from "react-native";
import { ActionButton, OfferingCard } from "../../components/Controls";
import { Screen } from "../../components/Screen";
import { PACKAGES } from "../../data/offerings";
import { colors } from "../../theme";

export default function PackagesScreen() {
  return (
    <Screen eyebrow="NEXT LEVEL EXPERIENCES" title="Gaming Packages">
      <Text style={styles.description}>
        Find the right way to play. Tap any package to see all the details.
      </Text>
      {PACKAGES.map((offering) => (
        <OfferingCard
          key={offering.id}
          offering={offering}
          onPress={() => router.push(`/offering/${offering.id}`)}
        />
      ))}
      <Text style={styles.note}>
        Choose any combination in Calculate fees to see your multi-booking
        discount.
      </Text>
      <ActionButton
        label="Calculate total fees"
        onPress={() => router.push("/calculator")}
      />
    </Screen>
  );
}

const styles = {
  description: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 18,
  },
  note: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 6,
    marginBottom: 14,
  },
};
