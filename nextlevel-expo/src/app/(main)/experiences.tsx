import { router } from "expo-router";
import { Text } from "react-native";
import { ActionButton, OfferingCard } from "../../components/Controls";
import { Screen } from "../../components/Screen";
import { EXPERIENCES } from "../../data/offerings";
import { colors } from "../../theme";

export default function ExperiencesScreen() {
  return (
    <Screen eyebrow="NEXT LEVEL EXPERIENCES" title="Individual Experiences">
      <Text style={styles.description}>
        Try a new challenge, from immersive VR to an escape-room mission.
      </Text>
      {EXPERIENCES.map((offering) => (
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
