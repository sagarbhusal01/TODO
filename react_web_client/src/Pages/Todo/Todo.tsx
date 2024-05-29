import "../../Styles/Todo/TodoStyles.css";
import Settings from "./Parts/Settings";
import TextField from "./Parts/TextField";
import TodoList from "./Parts/TodoList";
export default function Todo() {
  const Data = [
    {
      id: 1,
      todo: "Loremipsum@2",
      iscompleted: false,
    },
    {
      id: 2,
      todo: "Loremipsum@2",
      iscompleted: false,
    },
    {
      id: 3,
      todo: "Loremipsum@2",
      iscompleted: false,
    },
    {
      id: 4,
      todo: "Loremipsum@2",
      iscompleted: false,
    },
    {
      id: 5,
      todo: "Loremipsum@2",
      iscompleted: false,
    },
    {
      id: 6,
      todo: "Loremipsum@2",
      iscompleted: false,
    },
  ];

  //   ======================================
  //   ======================================
  //   ======================================
  const HandleDelete = (id: number) => {
    console.log("delete Id number" + id);
  };

  const HandleToggleCompleted = (id: number) => {
    console.log("Toggle Id number" + id);
  };

  const HandleAddTodo = (text: string) => {
    console.log("add todo text" + text);
  };

  const HandleSetting = (text: string) => {
    console.log("Setting text" + text);
  };

  //   ======================================
  //   ======================================
  //   ======================================

  return (
    <>
      <Settings HandleSetting={HandleSetting} />
      <div id="Container">
        <TextField HandleAddTodo={HandleAddTodo} />
        <TodoList
          Data={Data}
          HandleToggleCompleted={HandleToggleCompleted}
          HandleDelete={HandleDelete}
        />
      </div>
    </>
  );
}
