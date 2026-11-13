import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ActionButton, OfferingCard, SectionTitle } from "../../components/Controls";
import { ArenaArtwork } from "../../components/BrandArtwork";
import { Screen } from "../../components/Screen";
import { OFFERINGS } from "../../data/offerings";
import { colors } from "../../theme";

export default function HomeScreen() {
  return (
    <Screen eyebrow="EST. 2026" title={"Play. Compete.\nLevel up."}>
      <Text style={styles.intro}>
        Your gaming and esports arena for all-day play, premium experiences and
        competitive training.
      </Text>
      <View style={styles.artwork}>
        <ArenaArtwork />
      </View>
      <ActionButton
        label="Explore gaming packages"
        onPress={() => router.push("/packages")}
      />
      <ActionButton
        label="Browse individual experiences"
        secondary
        onPress={() => router.push("/experiences")}
      />
      <SectionTitle>Featured offerings</SectionTitle>
      {OFFERINGS.slice(0, 3).map((offering) => (
        <OfferingCard
          key={offering.id}
          offering={offering}
          onPress={() => router.push(`/offering/${offering.id}`)}
        />
      ))}
      <SectionTitle>About the arena</SectionTitle>
      <Text style={styles.intro}>
        A place to play your way, celebrate with friends or sharpen your
        esports skills.
      </Text>
      <Link href="/about" style={styles.aboutLink}>
        About Next Level Gaming
      </Link>
      <Pressable
        accessibilityRole="button"
        onPress={() => router.push("/contact")}
        style={styles.contactLink}
      >
        <Text style={styles.contactText}>Get in touch</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  artwork: {
    marginBottom: 18,
  },
  aboutLink: {
    color: colors.blue,
    fontSize: 15,
    fontWeight: "700",
    paddingVertical: 12,
  },
  contactLink: {
    paddingVertical: 12,
  },
  contactText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "700",
  },
});
