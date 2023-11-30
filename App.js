import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import OuterAndInnerFunctionParent from "./TESTING__FUNCTIONS_SCENARIOS/OuterAndInnerFunctionParent";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    //not the bese way to update state if the previous state depends on the current state
    // setCourseGoals([...courseGoals, enteredGoalText]);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    console.log(enteredGoalText);
  };

  console.log("Hello world");

  return (
    <>
      <View style={styles.appContainer}>
        <GoalInput addGoalHandlerParentFn={addGoalHandler} />
        <View style={styles.goalsContainer}>
          {courseGoals.length > 0 ? (
            <FlatList
              data={courseGoals}
              keyExtractor={(item) => item.id}
              renderItem={(itemData) => {
                // console.log(itemData.item.text);
                return <GoalItem text={itemData.item.text} />;
              }}
            />
          ) : (
            <>
              <Text>Enter goals...</Text>
              <OuterAndInnerFunctionParent />
            </>
          )}
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
