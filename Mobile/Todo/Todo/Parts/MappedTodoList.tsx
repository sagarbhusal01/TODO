import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";

import { TodoResponseType } from "../Types";
import { MappedTodoListStyles } from "../../Styles/Todo/MappedTodoListStyles";
const MappedTodoList = (props: any) => {
  return (
    <View style={MappedTodoListStyles.TodoListContainer}>
      {props.TodoData && (
        <FlatList
          data={props.TodoData}
          renderItem={(item) => RenderingData(item, props)}
          keyExtractor={(names) => names.id}
          ListEmptyComponent={HandleEmptyData}
        />
      )}
    </View>
  );
};

export default MappedTodoList;

const HandleEmptyData = () => {
  return <Text>No Todo Found</Text>;
};

const RenderingData = (names: any, props: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={MappedTodoListStyles.TodoListCell}
      onLongPress={() => {
        if (!names.item.iscompleted) {
          props.HandleToggleTodo(names.item.id);
        }
      }}
    >
      <View style={MappedTodoListStyles.ToggleButtonPlaceholder}>
        {names.item.iscompleted && (
          <TouchableOpacity
            activeOpacity={0.3}
            style={MappedTodoListStyles.ToggleCompletedButton}
            onPress={() => {
              props.HandleToggleTodo(names.item.id);
            }}
          />
        )}
      </View>
      <View style={MappedTodoListStyles.TodoTextPlaceHolder}>
        <Text style={MappedTodoListStyles.TodoText}>{names.item.todo}</Text>
      </View>

      {names.item.iscompleted && (
        <TouchableOpacity
          activeOpacity={0.3}
          style={MappedTodoListStyles.RemoveButton}
          onPress={() => {
            props.HandleDeleteButton(names.item.id);
          }}
        >
          <Image
            source={require("../../assets/Images/Remove.png")}
            style={MappedTodoListStyles.RemoveButtonImage}
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};
