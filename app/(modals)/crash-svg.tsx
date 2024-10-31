import { View } from "react-native";
import { Image } from "expo-image";

export default function CrashSvg() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("@/assets/ni.svg")}
        style={{ height: 300, width: 300, overflow: "hidden" }}
      />
    </View>
  );
}
