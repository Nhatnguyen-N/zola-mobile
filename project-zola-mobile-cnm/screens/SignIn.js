import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";

const SignIn = ({ navigation }) => {
  const [fullname, setName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View className="flex-1 bg-blue-700 max-w-full">
      <View className=" mt-[30%] items-center">
        <Text className="text-[50px] font-bold text-white">Welcome</Text>
      </View>
      <View className="items-center mt-10">
        <TextInput
          className="border-2 w-[300px] h-[50px] p-3 mt-5 rounded-lg bg-white"
          placeholder="Email"
        />
        <TextInput
          className="border-2 w-[300px] h-[50px] p-3 mt-5 rounded-lg bg-white"
          placeholder="Password"
        />
        <TouchableOpacity className="w-[200px] h-[50px] items-center mt-1 ml-20">
          <Text className="text-[20px] font-bold text-white">
            forgot password, eh?
          </Text>
        </TouchableOpacity>
      </View>
      <View className="bg-white rounded-full w-[110%] h-[60%] mt-[110%]  absolute right-20 items-center ">
        <TouchableOpacity
          className="w-[120px] h-[50px] items-center mt-7"
          onPress={() => {
            navigation.navigate("ChatScreen");
          }}
        >
          <Text className="text-[30px] font-bold text-blue-700">Sign In</Text>
        </TouchableOpacity>
        <View className="flex-row">
          <Text className="ml-16">Already have an account ?</Text>
          <TouchableOpacity className="w-[80px] h-[30px]">
            <Text className="text-[15px] font-bold text-blue-700">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="bg-orange-600 rounded-full w-[107%] h-[60%] mt-[130%] absolute left-36"></View>
    </View>
  );
};

export default SignIn;
