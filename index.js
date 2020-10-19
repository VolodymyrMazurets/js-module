(function () {
  const text = "sadklfslkfjlkgjl";
  const age = 123151355;
  const bigInt = 1234567890123456789012345678901234567890n;
  const isAdmin = false;
  const money = null;
  let user;

  const obj = {
    user: "Vova",
    age: 29,
    "user last name": "Mazurets",
    1: "sdaff",
    sayMyName() {
      console.log(this.user);
    },
  };

  const arr = ["1", "dasdasd", "test", "dada", "daf", 2, "afaf"];
  // console.log(typeof arr);
  // console.log(Array.isArray(arr))

  // if (Array.isArray(arr)) {
  //   arr.map((element) => console.log(element));
  // } else {
  //   return;
  // }

  const randomColor = () => {
    const getColor = () => Math.floor(Math.random() * 256);
    return `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
  };
  console.log(randomColor());
  setInterval(() => {
    document.getElementById("test").style = `color: ${randomColor()} `;
  }, 3000);
})();
