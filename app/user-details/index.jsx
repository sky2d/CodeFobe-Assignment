import { View, Text, Image } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TailwindProvider } from "nativewind";
import TextField from "../../components/TextField";
import Buttons from "../../components/Buttons";
import { useUserData } from "../../Provider/UserDataProvider";

const UserDetails = () => {
  const { userData ,loading } = useUserData();
  const [index, setIndex] = useState(0);
 


/// handleNext function for rendering next user details
  const handleNext = () => {
    if (index + 1 < userData.length) {
      setIndex(index + 1);
    }
  };

/// handlePrevious function for rendering previous user details
  const handlePrevious = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };


  /// if loading is not available then show loading screen
  if (loading) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text>Loading ..</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 ">
      <View className="h-52 items-center justify-center bg-black rounded-b-3xl relative">
        <Text className=" text-3xl  font-bold text-primary ">
          {userData[index].first_name} {userData[index].last_name}
        </Text>
        <Image
          className="h-24 w-24 rounded-full absolute  transform translate-y-24 -translate-x-1/2 bg-primary  shadow-3xl shadow-red"
          source={{
            uri: userData[index].avatar,
          }}
          resizeMode="cover"
        />
      </View>
      <View className=" items-center">
        <View className="mt-10">
          <TextField text={userData[index].id.toString()} icon="id-badge" />
        </View>
        <TextField text={userData[index].uid} icon="user" />
        <TextField text={userData[index].password} icon="lock" />
        <TextField text={userData[index].first_name} icon="user" />
        <TextField text={userData[index].last_name} icon="user" />
        <TextField text={userData[index].username} icon="user" />
        <TextField text={userData[index].email} icon="envelope" />
        <View className="flex-row justify-between w-full p-2">
          <Buttons
            handlePress={handlePrevious}
            label="Previous"
            disabled={index === 0}
          />
          <Buttons
            handlePress={handleNext}
            label="Next"
            disabled={index === userData.length - 1}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserDetails;
