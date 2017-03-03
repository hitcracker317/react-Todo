//Reducer
//StoreからActionと現在のStateの2つの要素をReducerに渡す
//Reducerは受け取った2つの要素から新たなStateを返す役悪。

import { combineReducers } from "redux"; //combineReducers：複数のReducerを組み合わせたReducerを作る

//一つ一つのTODOを処理する関数
const todo = (state,action) => {
  switch (action.type) {
    case "add_todo":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case "toggle_todo":
      if (state.id != action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !staet.completed
      });

    default:
      return false;
  }
}


//複数のTODOを処理する関数
const todos = (state　= [],action) => {
  switch (action.type) {
    case "add_todo":
      return [
        ...state,
        todo(undefined, action)
      ];

    case "toggle_todo":
      return state.map(t =>
        todo(t, action)
      );

    default:
      return state;
  }
}

//TODOの表示状態を処理するための関数
const todoFilter = (state　= "show_all",action) => {
  switch (action.type) {
    case "filter_todo":
      return action.fliter;

    default:
      return state;
  }
}

//上記の関数をまとめて外に公開する
const todoApp = combineReducers ({
  todos,
  todoFilter
});

export default todoApp;
