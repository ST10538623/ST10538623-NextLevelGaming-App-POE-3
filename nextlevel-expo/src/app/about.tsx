import { router } from "expo-router";
import { Text, View } from "react-native";
import { ActionButton } from "../components/Controls";
import { ArenaArtwork } from "../components/BrandArtwork";
import { Screen } from "../components/Screen";
import { colors } from "../theme";
import { aboutStyles } from "../uiStyles";

const details = [
  {
    title: "Our history",
    body: "Established in 2026, Next Level Gaming & Esports Arena provides a place for gaming, esports and shared experiences.",
  },
  {
    title: "Our vision",
    body: "To be a welcoming arena where players can discover new games, enjoy friendly competition and create lasting memories.",
  },
  {
    title: "Our mission",
    body: "To provide accessible gaming, quality experiences and opportunities for players to learn, compete and connect.",
  },
  {
    title: "Our goals",
    body: "Offer enjoyable gaming for different interests, support players as they build their skills, and make group celebrations memorable.",
  },
];

export default function AboutScreen() {
  return (
    <Screen back eyebrow="EST. 2026 · WHO WE ARE" title="About Us">
      <View style={{ marginBottom: 16 }}>
        <ArenaArtwork variant="about" />
      </View>
      <Text style={aboutStyles.intro}>
        Next Level Gaming & Esports Arena is a place for players, teams and
        friends to play, compete and celebrate.
      </Text>
      {details.map((item) => (
        <View key={item.title} style={aboutStyles.card}>
          <Text style={aboutStyles.heading}>{item.title}</Text>
          <Text style={aboutStyles.body}>{item.body}</Text>
        </View>
      ))}
      <Text style={[aboutStyles.body, { marginVertical: 8 }]}>
        Business phone, email and street address have not been provided. No
        contact details are displayed until verified.
      </Text>
      <ActionButton
        label="Contact the arena"
        onPress={() => router.push("/contact")}
      />
    </Screen>
  );
}
