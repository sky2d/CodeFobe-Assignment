import { Link } from "expo-router";
import { Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-black">
      <View>
        <Text className="text-sm text-white">
          <Text className="text-primary font-bold">
            Explore a world of connections!
          </Text>{" "}
          where every detail matters. Our app brings you closer to the people
          who make the world vibrant, one profile at a time.
        </Text>
      </View>
      <View>
        <Link
          className="mt-3 bg-primary p-2 rounded-xl hover:animate-pulse"
          href="/user-details">
          <Text className="text-white font-bold text-xl">
            Go to user details
          </Text>
        </Link>
      </View>
      <StatusBar backgroundColor="white" />
    </SafeAreaView>
  );
}
