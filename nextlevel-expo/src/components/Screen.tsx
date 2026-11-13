import type { PropsWithChildren } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../theme";
import { BrandMark } from "./BrandArtwork";

interface ScreenProps extends PropsWithChildren {
  eyebrow?: string;
  title: string;
  back?: boolean;
}

export function Screen({ eyebrow, title, back, children }: ScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        {back ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back"
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Text style={styles.backText}>‹</Text>
          </Pressable>
        ) : null}
        <BrandMark />
        <View style={styles.brandCopy}>
          <Text style={styles.brandName}>Next Level Gaming</Text>
          <Text style={styles.brandSubtitle}>& Esports Arena · EST. 2026</Text>
        </View>
      </View>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
        <Text style={styles.title}>{title}</Text>
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  backButton: {
    width: 42,
    height: 44,
    justifyContent: "center",
    marginRight: 8,
  },
  backText: {
    color: colors.white,
    fontSize: 36,
    lineHeight: 40,
  },
  brandCopy: {
    marginLeft: 12,
    flex: 1,
  },
  brandName: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
  },
  brandSubtitle: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 2,
  },
  scroll: {
    flex: 1,
  },
  content: {
    width: "100%",
    maxWidth: 720,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 28,
  },
  eyebrow: {
    color: colors.purple,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.1,
    marginBottom: 8,
  },
  title: {
    color: colors.white,
    fontSize: 32,
    fontWeight: "800",
    lineHeight: 38,
    marginBottom: 12,
  },
});
