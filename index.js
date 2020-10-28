import _ from "lodash";
(function () {
  const findElement = (element) => document.getElementById(element);

  const input = findElement("title");
  const textarea = findElement("description");
  const button = findElement("create-todo");
  const form = findElement("form");
  const todosWraper = findElement("todos");

  let todos = [];

  const getTodos = () => {
    const res = JSON.parse(localStorage.getItem("todos"));
    todos = [...res];
  };
  const updateTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
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
  };

  document.addEventListener("DOMContentLoaded", () => {
    getTodos();
    checkInputs();
    renderTodosList();
  });

  // const cards = document.getElementById("cards");
  // const testList = document.querySelector("#test-list");

  // testList.addEventListener("click", (event) => {
  //   console.log(event.target);
  // });

  // const arr = ['Vova', 'Sasha'];
  // console.log(arr.length)

  // myFirstFunction("hello world");

  // function myFirstFunction(phrase = "lorem") {
  //   console.log(phrase);
  // }

  // const getSumm = (a, b, ...rest) => ({ res: a + b, rest });

  // const getSumm = (a, b, ...rest) => {
  //   return {
  //     res: a + b,
  //     rest,
  //   };
  // };

  // const result = getSumm(2, 5, 10, 12, 28);
  // console.log(result);

  // const key = "user last name";

  // const obj = {
  //   userName: 'Vova',
  //   isAdmin: false,
  //   "user last name": "Mazurets",
  //   address: {
  //     city: "Kremenchuk",
  //   },
  //   sayHi() {
  //     console.log(this.userName)
  //   }
  // };

  // class User {
  //   constructor(name) {
  //     this.name = name;
  //   }

  //   sayHi() {
  //     alert(this.name);
  //   }
  // }
  // const user = new User("Vova");
  // console.log(user);
  // console.log(_.fill(["", "", ""], "a"));

  // const shallowCopy = {...obj, userName: 'Sasha'}

  // shallowCopy.sayHi();

  // const copyOfObject = { ...obj, isAdmin: true };

  // obj.isAdmin = true;

  // obj.address.city = "Kiev";

  // console.log(copyOfObject);

  // const text = "sadklfslkfjlkgjl";
  // const age = 123151355;
  // const bigInt = 1234567890123456789012345678901234567890n;
  // const isAdmin = false;
  // const money = null;
  // let user;

  // const obj = {
  //   user: "Vova",
  //   age: 29,
  //   "user last name": "Mazurets",
  //   1: "sdaff",
  //   sayMyName() {
  //     console.log(this.user);
  //   },
  // };

  // const arr = ["1", "dasdasd", "test", "dada", "daf", 2, "afaf"];
  // console.log(typeof arr);
  // console.log(Array.isArray(arr))

  // if (Array.isArray(arr)) {
  //   arr.map((element) => console.log(element));
  // } else {
  //   return;
  // }

  // const randomColor = () => {
  //   const getColor = () => Math.floor(Math.random() * 256);
  //   return `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
  // };
  // console.log(randomColor());
  // setInterval(() => {
  //   document.getElementById("test").style = `color: ${randomColor()} `;
  // }, 3000);

  // const userName = prompt('Enter your name')
  // alert(`Hello, ${userName}!`)
  // const currentYear = 2020;
  // const userYearBirth = prompt("Enter your birth year, please");

  // if (userYearBirth >= 18 && userYearBirth < 21) {
  //   alert('You can buy alcohol in ukraine');
  // } else if ( userYearBirth >= 21) {
  //   alert('You can buy alcohol in ukraine and drink it');
  // } else {
  //   alert('You are young person')
  // }

  // switch (true) {
  //   case (userYearBirth >= 18 && userYearBirth < 21):
  //     alert("You can buy alcohol in ukraine");
  //     break;
  //   case (userYearBirth >= 21):
  //     alert("You can buy alcohol in ukraine and drink it");
  //     break;
  //   default:
  //     alert("You are young person");
  //     break;
  // }

  // let i = 0

  // while (i < 10) {
  //   console.log(i);
  //   ++i;
  // }

  // for (let index = 0; index < arr.length; index++) {
  //   const element = arr[index];
  //   console.log(element, kpd)
  // }

  // arr.map((e) => {
  //   const element = e;
  //   console.log(element)
  // })

  // const getData = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const parsedRes = await res.json();
  //   const obj = { id: 1, title: 2 };

  //   cards.innerHTML = parsedRes
  //     .map(({ id, title, body }) => {
  //       return `<div>
  //                 <div class="uk-card uk-card-default uk-card-body">
  //                 <h2>${id} - ${title}</h2>
  //                 <p>${body}</p>
  //                 </div>
  //             </div>`;
  //     })
  //     .join("");
  // };
  // const isAuth = false;
  // const title = !!isAuth ? "User is autorised" : `User isn't autorised`;
  // getData();
})();
