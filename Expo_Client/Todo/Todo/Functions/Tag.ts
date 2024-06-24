export const ParsedTag = (todo: string) => {
  return todo.split(" ")[0].substring(1, todo.split(" ")[0].length);
};

export const ExtractTodo = (todo: string) => {
  return todo.split(" ").slice(1).join(" ");
};

export const DetermineTag = (todo: string) => {
  return todo.split(" ")[0].substring(0, 1) === "-";
};
