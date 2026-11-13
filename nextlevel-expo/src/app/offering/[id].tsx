import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { ActionButton } from "../../components/Controls";
import { Screen } from "../../components/Screen";
import { findOfferingById } from "../../data/offerings";
import { formatRand } from "../../feeCalculator";
import { colors } from "../../theme";
import { detailStyles } from "../../uiStyles";

export default function OfferingDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const offering = findOfferingById(id);

  if (!offering) {
    return (
      <Screen back title="Offering not found">
        <Text style={detailStyles.body}>We couldn't find that offering.</Text>
      </Screen>
    );
  }

  return (
    <Screen
      back
      eyebrow={offering.type === "PACKAGE" ? "GAMING PACKAGE" : "INDIVIDUAL EXPERIENCE"}
      title={offering.name}
    >
      <Text style={detailStyles.body}>{offering.purpose}</Text>
      <View style={detailStyles.priceCard}>
        <Text style={detailStyles.priceLabel}>Price</Text>
        <Text style={detailStyles.price}>{formatRand(offering.priceRand)}</Text>
      </View>
      <Text style={detailStyles.sectionTitle}>What's included</Text>
      {offering.inclusions.map((item) => (
        <Text key={item} style={detailStyles.inclusion}>
          <Text style={{ color: colors.blue }}>• </Text>
          {item}
        </Text>
      ))}
      <ActionButton
        label="Add to fee calculation"
        onPress={() =>
          router.push({
            pathname: "/calculator",
            params: { offeringId: offering.id },
          })
        }
      />
      <ActionButton
        label={`Back to ${offering.type === "PACKAGE" ? "packages" : "experiences"}`}
        secondary
        onPress={() => router.back()}
      />
    </Screen>
  );
}
