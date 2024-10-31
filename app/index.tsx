import { Button, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ marginBottom: 28 }}>
        <Button
          title="Open Working SVG"
          onPress={() => router.push("/working-svg")}
        />
      </View>
      <Button
        title="Open Crash SVG"
        onPress={() => router.push("/crash-svg")}
      />
    </View>
  );
}
