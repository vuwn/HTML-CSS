// RANDOM PASSWORD GENERATOR

function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  console.log("Generated password: ");

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKELMNOQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolsChars = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolsChars : "";

  if (length < 0) {
    return `Password length must be at least 1`;
  }
  if (allowedChars.length === 0) {
    return `At least 1 set of character must be selected`;
  }

  for (let i = 1; i < length; i++) {
    const randomPassword = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars.charAt(randomPassword);
  }
  return password;
}

const numberLenght = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

console.log(` ${generatePassword(
  numberLenght,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
)}
  `);
