import React, { useReducer } from "react";
import { View } from "react-native";
import ColorCounter from "./components/ColorCounter";

const reducer = (state, action) => {
  const { red, green, blue } = state;
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_RED":
      return { ...state, red: red + payload };
    case "CHANGE_GREEN":
      return { ...state, green: green + payload };
    case "CHANGE_BLUE":
      return { ...state, blue: blue + payload };
    default:
      return state;
  }
};

export default () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  const backgroundColor = `rgb(${red},${green},${blue})`;

  return (
    <View>
      <View style={{ height: 100, width: 100, backgroundColor }}></View>
      <ColorCounter colorName="Red" cb={dispatch} counter={red}></ColorCounter>
      <ColorCounter
        colorName="Green"
        cb={dispatch}
        counter={green}
      ></ColorCounter>
      <ColorCounter
        colorName="Blue"
        cb={dispatch}
        counter={blue}
      ></ColorCounter>
    </View>
  );
};
