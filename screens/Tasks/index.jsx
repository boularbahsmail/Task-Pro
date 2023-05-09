import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";

// Components
import Navbar from "../../components/Navbar";

// Icons
import AntDesignIcon from "react-native-vector-icons/AntDesign";
// import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import EntypoIcon from "react-native-vector-icons/Entypo";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Assets
import NoTasks from "../../assets/images/no-data.png";
import appIcon from "../../assets/app-icon.png";

// Tasks Dat
import tasks from "./data";
import Header from "../../components/Header";

const Tasks = ({ navigation }) => {
  const [currentUserFullName, setCurrentUserFullName] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const [tasksStatus, setTasksStatus] = useState("ALL");
  const [todoTasksLength, setTodoTasksLength] = useState([]);
  const [inProgressTasksLength, setInProgressTasksLength] = useState([]);
  const [completeTasksLength, setCompleteTasksLength] = useState([]);

  const getData = async () => {
    try {
      const currentUserFullName = await AsyncStorage.getItem("userFullName");
      if (currentUserFullName !== null) {
        setCurrentUserFullName(currentUserFullName);
      }
    } catch (error) {
      Alert.alert("Error", error);
    }
  };

  const getTime = () => {
    const now = new Date(),
      hour = now.getHours();

    {
      hour >= 5 && hour <= 12
        ? setCurrentTime("Good morning")
        : hour >= 13 && hour <= 17
        ? setCurrentTime("Good afternoon")
        : hour >= 18 && hour <= 20
        ? setCurrentTime("Good evening")
        : setCurrentTime("Good night");
    }
  };

  const countTasksStatus = () => {
    const todoTasks = tasks?.filter((task) => task?.statusSlug === "TODO");
    setTodoTasksLength(todoTasks.length);

    const inProgressTasks = tasks?.filter(
      (task) => task?.statusSlug === "INPROGRESS"
    );
    setInProgressTasksLength(inProgressTasks.length);

    const completeTasks = tasks?.filter(
      (task) => task?.statusSlug === "COMPLETE"
    );
    setCompleteTasksLength(completeTasks.length);
  };

  useEffect(() => {
    getData();
    getTime();
    countTasksStatus();
  });

  return (
    <View className="flex flex-1 relative h-screen bg-white">
      <View className="py-4">
        <Header navigation={navigation} />

        <View className="my-6 px-4">
          <Text className="text-lg font-normal text-gray-500 mb-1">
            {currentTime}
          </Text>
          <Text className="text-4xl font-bold">
            {/* {currentUserFullName.split(" ")[0]} */}
            {currentUserFullName}
          </Text>
        </View>

        <ScrollView
          className="mb-2 px-4 h-16 w-full"
          horizontal
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            paddingRight: 30,
            paddingLeft: 1,
          }}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            className={`py-1 px-4 pr-1 rounded-full border border-[#151515] flex flex-row justify-start items-center ${
              tasksStatus == "ALL" ? "bg-[#151515]" : "bg-white"
            }`}
            activeOpacity={0.7}
            onPress={() => {
              setTasksStatus("ALL");
            }}
          >
            <Text
              className={`text-sm font-semibold ${
                tasksStatus == "ALL" ? "text-white" : "text-[#151515]"
              }`}
            >
              All
            </Text>
            <Text
              className={`text-sm font-semibold ml-2 py-1 px-3 rounded-full ${
                tasksStatus == "ALL"
                  ? "text-[#151515] bg-white"
                  : "text-white bg-[#151515]"
              }`}
            >
              {tasks?.length}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`py-1 px-4 pr-1 rounded-full border border-[#151515] flex flex-row justify-start items-center ${
              tasksStatus == "TODO" ? "bg-[#151515]" : "bg-white"
            }`}
            activeOpacity={0.7}
            onPress={() => {
              setTasksStatus("TODO");
            }}
          >
            <Text
              className={`text-sm font-semibold ${
                tasksStatus == "TODO" ? "text-white" : "text-[#151515]"
              }`}
            >
              To-Do
            </Text>
            <Text
              className={`text-sm font-semibold ml-2 py-1 px-3 rounded-full ${
                tasksStatus == "TODO"
                  ? "text-[#151515] bg-white"
                  : "text-white bg-[#151515]"
              }`}
            >
              {todoTasksLength}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`py-1 px-4 pr-1 rounded-full border border-[#151515] flex flex-row justify-start items-center ${
              tasksStatus == "INPROGRESS" ? "bg-[#151515]" : "bg-white"
            }`}
            activeOpacity={0.7}
            onPress={() => {
              setTasksStatus("INPROGRESS");
            }}
          >
            <Text
              className={`text-sm font-semibold ${
                tasksStatus == "INPROGRESS" ? "text-white" : "text-[#151515]"
              }`}
            >
              In Progress
            </Text>
            <Text
              className={`text-sm font-semibold ml-2 py-1 px-3 rounded-full ${
                tasksStatus == "INPROGRESS"
                  ? "text-[#151515] bg-white"
                  : "text-white bg-[#151515]"
              }`}
            >
              {inProgressTasksLength}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`py-1 px-4 pr-1 rounded-full border border-[#151515] flex flex-row justify-start items-center ${
              tasksStatus == "COMPLETE" ? "bg-[#151515]" : "bg-white"
            }`}
            activeOpacity={0.7}
            onPress={() => {
              setTasksStatus("COMPLETE");
            }}
          >
            <Text
              className={`text-sm font-semibold ${
                tasksStatus == "COMPLETE" ? "text-white" : "text-[#151515]"
              }`}
            >
              Complete
            </Text>
            <Text
              className={`text-sm font-semibold ml-2 py-1 px-3 rounded-full ${
                tasksStatus == "COMPLETE"
                  ? "text-[#151515] bg-white"
                  : "text-white bg-[#151515]"
              }`}
            >
              {completeTasksLength}
            </Text>
          </TouchableOpacity>
        </ScrollView>

        <ScrollView
          className="px-4"
          scrollEnabled={true}
          contentContainerStyle={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 25,
            paddingTop: 20,
            paddingBottom: 300,
          }}
          showsVerticalScrollIndicator={false}
        >
          {tasks.length ? (
            tasks.map((task) =>
              tasksStatus == task?.statusSlug ? (
                <View
                  className="w-full p-4 border border-[#262626] rounded-xl flex flex-col justify-center items-start gap-y-2 pt-1 bg-white border-r-2 border-b-2"
                  key={task?.id}
                >
                  <View className="flex flex-row justify-between items-center w-full">
                    <Text className="text-xl font-semibold">{task?.title}</Text>
                    <TouchableOpacity activeOpacity={0.7}>
                      <EntypoIcon
                        name="dots-three-horizontal"
                        size={16}
                        color="#4b5563"
                      />
                    </TouchableOpacity>
                  </View>
                  <Text className="text-sm text-gray-400 font-normal mb-2">
                    {task?.description}
                  </Text>
                  <View className="flex flex-row justify-between items-center w-full">
                    <View className="flex flex-row justify-start items-center">
                      <AntDesignIcon
                        name="calendar"
                        size={16}
                        color="#4b5563"
                      />
                      <Text className="ml-1 text-gray-600 text-sm">
                        {task?.createdAt}
                      </Text>
                    </View>

                    <View className="flex flex-row justify-center items-center">
                      <View className="flex flex-row justify-start items-center mr-2 border border-gray-200 rounded-full py-1 px-3 pl-1">
                        <AntDesignIcon
                          name="clockcircleo"
                          size={15}
                          color="#4b5563"
                        />
                        <Text className="text-gray-600 text-xs ml-1">
                          {task?.remindWhen}
                        </Text>
                      </View>

                      <View>
                        <Text
                          className={`py-1 px-3 text-white text-xs border rounded-full font-semibold`}
                          style={{
                            backgroundColor: task?.statusColor,
                            borderColor: task?.statusColor,
                          }}
                        >
                          {task?.status}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ) : (
                tasksStatus == "ALL" && (
                  <View
                    className="w-full p-4 border border-[#262626] rounded-xl flex flex-col justify-center items-start gap-y-2 pt-1 bg-white border-r-2 border-b-2"
                    key={task?.id}
                  >
                    <View className="flex flex-row justify-between items-center w-full">
                      <Text className="text-xl font-semibold">
                        {task?.title}
                      </Text>
                      <TouchableOpacity activeOpacity={0.7}>
                        <EntypoIcon
                          name="dots-three-horizontal"
                          size={16}
                          color="#4b5563"
                        />
                      </TouchableOpacity>
                    </View>
                    <Text className="text-sm text-gray-400 font-normal mb-2">
                      {task?.description}
                    </Text>
                    <View className="flex flex-row justify-between items-center w-full">
                      <View className="flex flex-row justify-start items-center">
                        <AntDesignIcon
                          name="calendar"
                          size={16}
                          color="#4b5563"
                        />
                        <Text className="ml-1 text-gray-600 text-sm">
                          {task?.createdAt}
                        </Text>
                      </View>

                      <View className="flex flex-row justify-center items-center">
                        <View className="flex flex-row justify-start items-center mr-2 border border-gray-200 rounded-full py-1 px-3 pl-1">
                          <AntDesignIcon
                            name="clockcircleo"
                            size={15}
                            color="#4b5563"
                          />
                          <Text className="text-gray-600 text-xs ml-1">
                            {task?.remindWhen}
                          </Text>
                        </View>

                        <View>
                          <Text
                            className={`py-1 px-3 text-white text-xs border rounded-full font-semibold`}
                            style={{
                              backgroundColor: task?.statusColor,
                              borderColor: task?.statusColor,
                            }}
                          >
                            {task?.status}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                )
              )
            )
          ) : (
            <View className="flex flex-col justify-center items-center py-10 h-96">
              <Image
                source={NoTasks}
                alt="No-Tasks-Image"
                // style={{ height: 100, width: 100 }}
              />
              <Text className="mt-4 text-md font-normal text-gray-400">
                No tasks to show
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
      <Navbar navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

export default Tasks;
