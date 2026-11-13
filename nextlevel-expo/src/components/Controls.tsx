import type { ReactNode } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { Offering } from "../data/offerings";
import { formatRand } from "../feeCalculator";
import { colors } from "../theme";

interface ButtonProps {
  label: string;
  onPress: () => void;
  secondary?: boolean;
}

export function ActionButton({ label, onPress, secondary = false }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        secondary ? styles.secondaryButton : styles.primaryButton,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

interface OfferingCardProps {
  offering: Offering;
  onPress: () => void;
}

export function OfferingCard({ offering, onPress }: OfferingCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${offering.name}. ${offering.purpose} ${formatRand(offering.priceRand)}. View details.`}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.cardHeading}>
        <Text style={styles.cardTitle}>{offering.name}</Text>
        <Text style={styles.chevron}>›</Text>
      </View>
      <Text style={styles.cardDescription}>{offering.purpose}</Text>
      <Text style={styles.cardPrice}>{formatRand(offering.priceRand)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    borderRadius: 14,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: colors.blue,
  },
  secondaryButton: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pressed: {
    opacity: 0.78,
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
  },
  sectionTitle: {
    color: colors.white,
    fontSize: 21,
    fontWeight: "700",
    marginTop: 18,
    marginBottom: 12,
  },
  card: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
  },
  cardHeading: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  cardTitle: {
    color: colors.white,
    flex: 1,
    fontSize: 17,
    fontWeight: "700",
    lineHeight: 23,
  },
  chevron: {
    color: colors.blue,
    fontSize: 28,
    lineHeight: 28,
    marginLeft: 8,
  },
  cardDescription: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 6,
  },
  cardPrice: {
    color: colors.blue,
    fontSize: 16,
    fontWeight: "700",
    marginTop: 12,
  },
});
