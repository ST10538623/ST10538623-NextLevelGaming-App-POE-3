import Svg, { Circle, Path, Rect } from "react-native-svg";
import { colors } from "../theme";

export function BrandMark() {
  return (
    <Svg width={42} height={42} viewBox="0 0 48 48" accessibilityLabel="Arena logo">
      <Rect x={2} y={2} width={44} height={44} rx={8} fill={colors.background} />
      <Path d="M24 8 41 38h-9L24 23 16 38H7z" fill={colors.blue} />
      <Path d="M18 32h12v5H18z" fill={colors.purple} />
    </Svg>
  );
}

interface ArenaArtworkProps {
  variant?: "home" | "about";
}

export function ArenaArtwork({ variant = "home" }: ArenaArtworkProps) {
  const about = variant === "about";

  return (
    <Svg
      width="100%"
      height={170}
      viewBox="0 0 360 170"
      accessibilityLabel={
        about ? "Illustration of an esports arena" : "Gaming controller and display"
      }
    >
      <Rect x={1} y={1} width={358} height={168} rx={20} fill={colors.secondary} />
      <Rect
        x={about ? 58 : 22}
        y={25}
        width={about ? 244 : 142}
        height={92}
        rx={8}
        fill={colors.card}
      />
      <Path
        d={about ? "m70 100 48-49 32 31 36-43 50 61z" : "m31 99 33-38 23 22 29-34 40 50z"}
        fill={colors.blue}
      />
      <Path
        d={about ? "m112 105 36-33 24 24 26-21 46 32z" : "m30 104 43-25 24 20 24-19 38 25z"}
        fill={colors.purple}
      />
      <Rect
        x={about ? 148 : 72}
        y={about ? 123 : 122}
        width={about ? 64 : 44}
        height={6}
        rx={3}
        fill={colors.white}
      />
      {about ? (
        <>
          <Rect x={30} y={125} width={48} height={24} rx={6} fill={colors.blue} />
          <Rect x={282} y={125} width={48} height={24} rx={6} fill={colors.purple} />
          <Circle cx={54} cy={119} r={8} fill={colors.white} />
          <Circle cx={306} cy={119} r={8} fill={colors.white} />
        </>
      ) : (
        <>
          <Path
            d="M196 82c0-13 10-23 23-23h41c13 0 23 10 23 23v20c0 8-6 13-13 13-5 0-9-3-12-8l-5-9h-27l-5 9c-3 5-7 8-12 8-7 0-13-5-13-13z"
            fill={colors.card}
          />
          <Path d="M217 76v20m-10-10h20" stroke={colors.blue} strokeWidth={5} />
          <Circle cx={260} cy={77} r={5} fill={colors.purple} />
          <Circle cx={271} cy={91} r={5} fill={colors.purple} />
        </>
      )}
    </Svg>
  );
}
