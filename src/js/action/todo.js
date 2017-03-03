//ActionCreater
//アプリケーションで行われる操作(Action)を記す
//Reduxではactionというディレクトリにファイルを作成する。

let todoID = 0; //TODOのID

//TODO追加
export const addTodo = (text) => {
  return {
    type: "add_todo",
    id: todoID++,
    text
  };
};

//TODOを完了する
export const toggleTodo = (id) => {
  return {
    type: "toggle_todo",
    id
  };
};

//TODOをフィルタリング
export const filerTodo = (filter) => {
  return {
    type: "filter_todo",
    filter
  };
};
