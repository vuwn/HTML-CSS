// Method chaining = Calling one method after another
//                  in one line of code

let username = window.prompt("Enter your username:");

// ----- NO METHOD CHAINING -----

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1); // a|bcd ..
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;
// console.log(username);

// ----- NO METHOD CHAINING -----

username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();

console.log(username);
