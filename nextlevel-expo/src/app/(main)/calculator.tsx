import { useEffect, useMemo, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Screen } from "../../components/Screen";
import { OFFERINGS } from "../../data/offerings";
import { calculateFees, formatRand } from "../../feeCalculator";
import { colors } from "../../theme";

export default function CalculatorScreen() {
  const { offeringId } = useLocalSearchParams<{ offeringId?: string }>();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    if (typeof offeringId !== "string") return;
    setSelectedIds((current) =>
      current.includes(offeringId) ? current : [...current, offeringId],
    );
  }, [offeringId]);

  const selected = useMemo(
    () => OFFERINGS.filter((offering) => selectedIds.includes(offering.id)),
    [selectedIds],
  );
  const summary = useMemo(() => calculateFees(selected), [selected]);

  function toggleOffering(id: string) {
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((selectedId) => selectedId !== id)
        : [...current, id],
    );
  }

  return (
    <Screen eyebrow="PLAN YOUR VISIT" title="Calculate total fees">
      <Text style={styles.description}>
        Select each offering you want to book. Your discount is based on the
        number of different offerings.
      </Text>
      <Text style={styles.sectionTitle}>Select offerings</Text>
      {OFFERINGS.map((offering) => {
        const checked = selectedIds.includes(offering.id);
        return (
          <Pressable
            key={offering.id}
            accessibilityRole="checkbox"
            accessibilityLabel={`${offering.name}, ${formatRand(offering.priceRand)}`}
            accessibilityState={{ checked }}
            onPress={() => toggleOffering(offering.id)}
            style={({ pressed }) => [
              styles.option,
              checked && styles.optionSelected,
              pressed && styles.pressed,
            ]}
          >
            <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
              {checked ? <Text style={styles.checkmark}>✓</Text> : null}
            </View>
            <Text style={styles.optionName}>{offering.name}</Text>
            <Text style={styles.optionPrice}>{formatRand(offering.priceRand)}</Text>
          </Pressable>
        );
      })}
      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Your estimate</Text>
        <Text style={styles.selectedHeading}>Selected offerings</Text>
        {selected.length === 0 ? (
          <Text style={styles.empty}>No offerings selected</Text>
        ) : (
          selected.map((offering) => (
            <SummaryRow
              key={offering.id}
              label={offering.name}
              value={formatRand(offering.priceRand)}
            />
          ))
        )}
        <SummaryRow label="Distinct selections" value={`${summary.bookingCount}`} />
        <SummaryRow label="Subtotal" value={formatRand(summary.subtotalRand)} />
        <SummaryRow label="Discount rate" value={`${summary.discountPercent}%`} />
        <SummaryRow
          label="Discount amount"
          value={formatRand(summary.discountRand)}
        />
        <SummaryRow
          label="Final total"
          value={formatRand(summary.totalRand)}
          emphasize
        />
      </View>
      <Pressable
        accessibilityRole="button"
        onPress={() => setSelectedIds([])}
        style={({ pressed }) => [styles.reset, pressed && styles.pressed]}
      >
        <Text style={styles.resetText}>Reset selections</Text>
      </Pressable>
      <Text style={styles.discounts}>
        Discounts: 1 offering 0% · 2 offerings 5% · 3 offerings 10% · 4 or
        more 15%.
      </Text>
    </Screen>
  );
}

function SummaryRow({
  label,
  value,
  emphasize = false,
}: {
  label: string;
  value: string;
  emphasize?: boolean;
}) {
  return (
    <View style={styles.summaryRow}>
      <Text style={[styles.rowLabel, emphasize && styles.totalLabel]}>
        {label}
      </Text>
      <Text style={[styles.rowValue, emphasize && styles.totalValue]}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 12,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 8,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 58,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  optionSelected: {
    borderColor: colors.blue,
    backgroundColor: colors.secondary,
  },
  pressed: {
    opacity: 0.78,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: colors.muted,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: colors.blue,
    borderColor: colors.blue,
  },
  checkmark: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "700",
  },
  optionName: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 19,
    flex: 1,
  },
  optionPrice: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: "700",
    marginLeft: 8,
  },
  summary: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 18,
    padding: 18,
    marginTop: 14,
  },
  summaryTitle: {
    color: colors.white,
    fontSize: 19,
    fontWeight: "700",
    marginBottom: 14,
  },
  selectedHeading: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 8,
  },
  empty: {
    color: colors.muted,
    fontSize: 14,
    marginBottom: 12,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 11,
    gap: 12,
  },
  rowLabel: {
    color: colors.muted,
    fontSize: 14,
    flex: 1,
    lineHeight: 19,
  },
  rowValue: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
  },
  totalLabel: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
  },
  totalValue: {
    color: colors.blue,
    fontSize: 18,
  },
  reset: {
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: 12,
  },
  resetText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "700",
  },
  discounts: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 10,
  },
});
