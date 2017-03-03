import {createStore} from "redux"; //redux導入
import {addTodo, toggleTodo, filerTodo} from "./action/todo.js"; //外部ファイルのメソッドをインポート
import todoApp from "./reducer/todo.js"; //reducerを受け取る


let store = createStore(todoApp) //ReducerをStoreにセット

onload = function(){

  //TODO追加
  const addTodoContent = document.querySelector(".todo__form");
  const input = addTodoContent.getElementsByTagName("input")[0];
  const todoButton = document.querySelector(".todo__add");

  todoButton.addEventListener("click", () => {
    //todoボタンをクリックしたら「TODOを追加する」というアクションをStoreに渡す
    var todoText = input.value;
    store.dispatch(addTodo(todoText));
  });

  //TODOの完了
  let todoList = document.querySelector(".todo__list");
  let todoContents = todoList.getElementsByTagName("li");
  let todoArray = [...todoContents]; //スプレッド演算子

  todoArray.forEach((value,index) => {
    value.addEventListener("click", event => {
      //TODOをクリックしたら「TODOの状態を切り替える」アクションをstoreに渡す
      store.dispatch(toggleTodo(index));
    });
  });

  //todoのフィルタリング
  //todoのフィルタリング要素を取得してる
  let filterElement = document.querySelector(".todo__filter");
  let filterContents = filterElement.getElementsByTagName("li");
  let filterContentsArray = [...filterContents]; //スプレッド演算子
  filterContentsArray.filter(value => value.nodeName != "#text").forEach(value => {
    value.addEventListener("click", event => {
      //リンクをクリックしたら「TODOのフィルタリング状態を切り替える」アクションをStoreに渡す。
      let filterText = value.innerHTML;
      store.dispatch(filerTodo(filterText));
    });
  });

  //初期値となるStateを取得
  let initialState = todoApp({},{});
  console.log(initialState);

  //TODOを一つ追加する
  let nextState = todoApp(initialState,
    {
      type: "add_todo",
      id:1,
      text: "First todo"
    }
  );

  console.log(nextState);
};
