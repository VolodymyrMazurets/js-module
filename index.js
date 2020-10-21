(function () {
  const cards = document.getElementById("cards");
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

  const arr = ["1", "dasdasd", "test", "dada", "daf", 2, "afaf"];
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

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const parsedRes = await res.json();
    const obj = { id: 1, title: 2 };
    // const {id, title} = obj

    cards.innerHTML = parsedRes.map(({ id, title }) => {
      return `<div>
                  <div class="uk-card uk-card-default uk-card-body">${id} - ${title}</div>
              </div>`;
      }).join('');

    // console.log(parsedRes)

    // document.body.innerHTML = `
    // <h1>${parsedRes.title}</h1>
    // `
    // return parsedRes;
  };
  const isAuth = false;
  const title = !!isAuth ? "User is autorised" : `User isn't autorised`;

  getData();

  // console.log(async () => await getData());
})();
