import { StyleSheet, Text, View, FlatList, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const addGoalHandler = (enteredGoalText) => {
    //not the bese way to update state if the previous state depends on the current state
    // setCourseGoals([...courseGoals, enteredGoalText]);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
    // console.log(enteredGoalText);
  };

  const deleteGoalHandler = (id) => {
    Alert.alert(
      "Delete Item?",
      "Are you sure you want to delete this item? This action cannot be undone.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            setCourseGoals((currentCourseGoals) =>
              currentCourseGoals.filter((goal) => goal.id !== id),
            );
            console.log("OK Pressed");
          },
        },
      ],
    );
  };
  // setCourseGoals((currentCourseGoals) =>
  //     currentCourseGoals.filter((goal) => goal.id !== id)

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            visble={modalIsVisible}
            addGoalHandlerParentFn={addGoalHandler}
            onCancel={endAddGoalHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => {
              // console.log(itemData.item.text);
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
