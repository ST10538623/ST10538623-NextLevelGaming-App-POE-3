import { StyleSheet } from "react-native";
import { colors } from "./theme";

export const aboutStyles = StyleSheet.create({
  intro: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  card: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
  },
  heading: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 8,
  },
  body: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
  },
});

export const detailStyles = StyleSheet.create({
  body: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 14,
  },
  priceCard: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    marginBottom: 10,
  },
  priceLabel: {
    color: colors.muted,
    fontSize: 14,
  },
  price: {
    color: colors.blue,
    fontSize: 24,
    fontWeight: "800",
    marginTop: 5,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: 21,
    fontWeight: "700",
    marginTop: 16,
    marginBottom: 12,
  },
  inclusion: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 23,
    marginBottom: 12,
  },
});
