import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const OuterInnerFunctionChild = ({ fnFromParent }) => {
  const [object, setObject] = useState({ name: "kiko", yearOfBirth: 1993 });
  console.log("OUT OF THE FUNCTION", object);
  const functionFromTheChildComponent = () => {
    object.lastName = "karnfil";
    // console.log("Inside the FUNCTION", object);
    fnFromParent(object);
  };

  return (
    <View>
      <Text>Child</Text>
      <Button
        onPress={functionFromTheChildComponent}
        title={"Btn From Child"}
      />
    </View>
  );
};

export default OuterInnerFunctionChild;
