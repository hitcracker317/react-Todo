import {createStore} from "redux"; //redux導入
import {addTodo, toggleTodo, filerTodo} from "./action/todo.js"; //外部ファイルのメソッドをインポート


let store = createStore(() => {
  return "Hello !!!";
});

onload = function(){

  //TODO追加
  const addTodoContent = document.querySelector(".todo__form");
  const input = addTodoContent.getElementsByTagName("input")[0];
  const todoButton = addTodoContent.getElementsByTagName("button").addEventListener("click", () => {
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
  let filterElement = ducument.getElementById(".todo__filter");
  let filterContents = filterElement.getElementsByTagName("li");
  filterContents.filter(value => value.nodeName != "#text").forEach(value => {
    value.addEventListener("click", event => {
      //リンクをクリックしたら「TODOのフィルタリング状態を切り替える」アクションをStoreに渡す。
      let filterText = value.innerHTML;
      store.dispatch(filerTodo(filterText));
    });
  });




  let contents = document.getElementById("main");
  contents.innerHTML = store.getState().toString();
};
