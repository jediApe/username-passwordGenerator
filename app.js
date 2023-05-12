const usernameChars = "abcdefghijklmnopqrstuvwxyz0123456789";
const passwordChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
const credentialsBox = document.getElementById("credentials-box");

function generateRandomString(length, chars) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generateCredentials() {
  const username = generateRandomString(8, usernameChars);
  const password = generateRandomString(12, passwordChars);
  
  credentialsBox.textContent = `Username: ${username}\nPassword: ${password}`;
  console.log(`Username: ${username}\nPassword: ${password}`);
}

window.onload = function() {
  document.getElementById("generate-button").addEventListener("click", generateCredentials);
}


console.log(generateRandomString);
console.log(credentialsBox.textContent);
console.log(document.getElementById);


