import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { MappedTodoListStyles } from "../../Styles/Todo/MappedTodoListStyles";
const MappedTodoList = (props: any) => {
  return (
    <View style={MappedTodoListStyles.TodoListContainer}>
      <FlatList
        data={props.TodoData}
        renderItem={(item) => RenderingData(item, props)}
        keyExtractor={(names) => names.id}
        ListEmptyComponent={HandleEmptyData}
        refreshing={props.refreshing}
        onRefresh={() => props.HandleRefresh()}
      />
      <View style={{ marginTop: 160, backgroundColor: "white" }} />
    </View>
  );
};

export default MappedTodoList;

const HandleEmptyData = () => {
  return <Text style={MappedTodoListStyles.NoTodoList}>No Todo Found</Text>;
};

const RenderingData = (names: any, props: any) => {
  let isIdea = names.item.todo.split(" ")[0].toUpperCase() === "IDEA";
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
      {isIdea ? (
        <View style={MappedTodoListStyles.TodoTextPlaceHolder}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Text style={MappedTodoListStyles.IdeaTag}>Idea</Text>
            <Text style={MappedTodoListStyles.TodoText}>
              {names.item.todo.split(" ").slice(1).join(" ")}
            </Text>
          </View>
        </View>
      ) : (
        <View style={MappedTodoListStyles.TodoTextPlaceHolder}>
          <Text style={MappedTodoListStyles.TodoText}>{names.item.todo}</Text>
        </View>
      )}

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
