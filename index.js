import "uikit/dist/css/uikit.min.css";
import "./styles/style.scss";

import Cookies from "js-cookie";
import UiKit from "uikit";
import _ from "lodash";
import { storageService } from "./js/helpers";

(function () {
  const findElement = (element) => document.getElementById(element);

  const input = findElement("title");
  const textarea = findElement("description");
  const button = findElement("create-todo");
  const form = findElement("form");
  const todosWraper = findElement("todos");

  let todos = [];

  const getTodos = () => {
    const testCookies = Cookies.get("todos");
    console.log("cookies test", testCookies);
    const res = storageService.todos;
    todos = [...res];
  };
  const updateTodos = () => {
    storageService.todos = todos;
    Cookies.set("todos", todos);
  };

  const renderTodosList = () => {
    todosWraper.innerHTML = todos
      .map((item) => {
        return ` 
          <div class="uk-card uk-card-default uk-card-body uk-margin">
          <input class="uk-checkbox todo-input" type="checkbox" ${
            item.checked ? "checked" : ""
          }>
                <label class="uk-h4 todo-label">${item.title} - ${
          item.descr
        }</label>
                   
            </div>
          `;
      })
      .join("");
  };

  const checkInputs = () =>
    !input.value.length || !textarea.value.length
      ? button.setAttribute("disabled", "true")
      : button.removeAttribute("disabled");

  input.oninput = () => checkInputs();
  textarea.oninput = () => checkInputs();

  form.onsubmit = (event) => {
    event.preventDefault();
    const title = input.value;
    const descr = textarea.value;
    todos.push({
      id: todos.length,
      title,
      descr,
      checked: false,
    });
    input.value = "";
    textarea.value = "";
    updateTodos();
    renderTodosList();
    UiKit.notification({ message: "Todo was created" });
  };

  document.addEventListener("DOMContentLoaded", () => {
    getTodos();
    checkInputs();
    renderTodosList();
  });
})();
