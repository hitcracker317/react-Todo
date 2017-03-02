import {createStore} from "redux"

const add = require("./script-add.js"); //外部のjsファイルを参照

console.log("合計値："　+ add.add(120,50)); //script-add.jsのaddメソッドを実行


let store = createStore(function() {
  return "Hello !!!";
});

onload = function(){
  let contents = document.getElementById("main");
  contents.innerHTML = store.getState().toString();
};
