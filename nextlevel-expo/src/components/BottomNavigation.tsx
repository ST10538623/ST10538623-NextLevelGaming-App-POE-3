import { Pressable, StyleSheet, Text, View } from "react-native";
import { router, usePathname } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../theme";

const destinations = [
  { label: "Home", icon: "⌂", path: "/" },
  { label: "Packages", icon: "▦", path: "/packages" },
  { label: "Play", icon: "◇", path: "/experiences" },
  { label: "Fees", icon: "R$", path: "/calculator" },
  { label: "Contact", icon: "✉", path: "/contact" },
] as const;

export function BottomNavigation() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.bar, { paddingBottom: Math.max(insets.bottom, 4) }]}>
      {destinations.map((destination) => {
        const selected = pathname === destination.path;
        const tint = selected ? colors.blue : colors.muted;
        return (
          <Pressable
            key={destination.path}
            accessibilityRole="tab"
            accessibilityLabel={destination.label}
            accessibilityState={{ selected }}
            onPress={() => router.replace(destination.path)}
            style={styles.item}
          >
            <Text style={[styles.icon, { color: tint }]}>{destination.icon}</Text>
            <Text style={[styles.label, { color: tint }]}>{destination.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderTopColor: colors.border,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: 4,
    paddingHorizontal: 3,
  },
  item: {
    flex: 1,
    minHeight: 54,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 22,
  },
  label: {
    fontSize: 10,
    marginTop: 2,
  },
});
