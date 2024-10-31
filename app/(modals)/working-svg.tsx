import { View } from "react-native";
import { Image } from "expo-image";

export default function WorkingSvg() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("@/assets/us.svg")}
        style={{ height: 300, width: 300, overflow: "hidden" }}
      />
    </View>
  );
}
