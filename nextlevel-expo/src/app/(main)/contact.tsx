import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { ActionButton } from "../../components/Controls";
import { Screen } from "../../components/Screen";
import { colors } from "../../theme";

type ContactField = "name" | "email" | "subject" | "message";
type ContactErrors = Partial<Record<ContactField, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [feedback, setFeedback] = useState("");
  const [isValid, setIsValid] = useState(false);

  function validateForm() {
    const nextErrors: ContactErrors = {};
    if (!name.trim()) nextErrors.name = "Enter your name.";
    if (!emailPattern.test(email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!subject.trim()) nextErrors.subject = "Enter a subject.";
    if (!message.trim()) nextErrors.message = "Enter a message.";

    setErrors(nextErrors);
    setIsValid(Object.keys(nextErrors).length === 0);
    setFeedback(
      Object.keys(nextErrors).length === 0
        ? "All fields are valid. This demo does not send or store enquiries."
        : "Please correct the highlighted fields.",
    );
  }

  return (
    <Screen eyebrow="WE'D LOVE TO HEAR FROM YOU" title="Contact">
      <Text style={styles.intro}>
        Next Level Gaming & Esports Arena
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          Business phone, email and street address have not been supplied.
        </Text>
      </View>
      <Text style={styles.sectionTitle}>Send an enquiry</Text>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <FormField
          label="Name"
          value={name}
          onChangeText={setName}
          placeholder="Your name"
          error={errors.name}
          autoCapitalize="words"
        />
        <FormField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Email address"
          error={errors.email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <FormField
          label="Subject"
          value={subject}
          onChangeText={setSubject}
          placeholder="Enquiry subject"
          error={errors.subject}
          autoCapitalize="sentences"
        />
        <FormField
          label="Message"
          value={message}
          onChangeText={setMessage}
          placeholder="How can we help?"
          error={errors.message}
          multiline
          autoCapitalize="sentences"
        />
      </KeyboardAvoidingView>
      <Text style={styles.demoNote}>
        Demo only: this form checks your entries on this device. It does not
        send or store messages.
      </Text>
      <ActionButton label="Review enquiry" onPress={validateForm} />
      {feedback ? (
        <Text
          accessibilityLiveRegion="polite"
          style={[styles.feedback, isValid ? styles.success : styles.error]}
        >
          {feedback}
        </Text>
      ) : null}
    </Screen>
  );
}

interface FormFieldProps {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  error?: string;
  keyboardType?: "default" | "email-address";
  autoCapitalize?: "none" | "words" | "sentences";
  multiline?: boolean;
}

function FormField({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  keyboardType = "default",
  autoCapitalize = "sentences",
  multiline = false,
}: FormFieldProps) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        accessibilityLabel={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.muted}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        multiline={multiline}
        textAlignVertical={multiline ? "top" : "center"}
        style={[styles.input, multiline && styles.messageInput, error && styles.inputError]}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  intro: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  card: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  cardText: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: 21,
    fontWeight: "700",
    marginTop: 22,
    marginBottom: 14,
  },
  field: {
    marginBottom: 12,
  },
  label: {
    color: colors.white,
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    minHeight: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    paddingHorizontal: 14,
    color: colors.white,
    fontSize: 16,
  },
  messageInput: {
    minHeight: 120,
    paddingTop: 12,
  },
  inputError: {
    borderColor: colors.error,
  },
  error: {
    color: colors.error,
    fontSize: 13,
    marginTop: 5,
    lineHeight: 18,
  },
  success: {
    color: colors.blue,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },
  demoNote: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 12,
  },
  feedback: {
    marginBottom: 12,
  },
});
