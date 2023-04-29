let range = document.querySelector(".password-check .character-range");
let passwordInput = document.querySelector(".password-input");
let count = document.querySelector(".count");
let copyPasswordBtn = document.querySelector(".copy-password-btn");
let showCopied = document.querySelector(".notice-copied");
let uppercaseInput = document.querySelector(".uppercase");
let lowercaseInput = document.querySelector(".lowercase");
let numberInput = document.querySelector(".number");
let symbolInput = document.querySelector(".symbol");
let lv_1 = document.querySelector(".lv-1");
let lv_2 = document.querySelector(".lv-2");
let lv_3 = document.querySelector(".lv-3");
let lv_4 = document.querySelector(".lv-4");
// render password length
passwordInput.addEventListener("input", function () {
  let value = passwordInput.value;
  if (value.length <= 20) {
    count.innerHTML = `${value.length}`;
    range.value = value.length;
  }
  // checking if containing uppercase

  let hasUppercase = /[A-Z]/.test(value);
  if (hasUppercase) {
    uppercaseInput.checked = true;
  } else {
    uppercaseInput.checked = false;
  }
  // checking if containing lowercase
  let hasLowercase = /[a-z]/.test(value);
  if (hasLowercase) {
    lowercaseInput.checked = true;
  } else {
    lowercaseInput.checked = false;
  }
  // checking if containing number
  let hasNumber = /\d/.test(value);
  if (hasNumber) {
    numberInput.checked = true;
  } else {
    numberInput.checked = false;
  }
  // checking if containing symbol
  let hasSymbol = /[^\w\s]/.test(value);
  if (hasSymbol) {
    symbolInput.checked = true;
  } else {
    symbolInput.checked = false;
  }
  // strength expression
  // case 1
  if (
    lowercaseInput.checked ||
    uppercaseInput.checked ||
    numberInput.checked ||
    symbolInput.checked
  ) {
    lv_1.classList.add("red");
  } else {
    lv_1.classList.remove("red");
  }
  // case 2
  if (lowercaseInput.checked && uppercaseInput.checked) {
    lv_1.classList.add("yellow");
    lv_2.classList.add("yellow");
  } else {
    lv_1.classList.remove("yellow");
    lv_2.classList.remove("yellow");
  }
  // case 3
  if (lowercaseInput.checked && uppercaseInput.checked && numberInput.checked) {
    lv_1.classList.add("yellow");
    lv_2.classList.add("yellow");
    lv_3.classList.add("yellow");
  } else {
    lv_1.classList.remove("yellow");
    lv_2.classList.remove("yellow");
    lv_3.classList.remove("yellow");
  }
  // case 4
  if (
    lowercaseInput.checked &&
    uppercaseInput.checked &&
    numberInput.checked &&
    symbolInput.checked
  ) {
    lv_1.classList.add("green");
    lv_2.classList.add("green");
    lv_3.classList.add("green");
    lv_4.classList.add("green");
  } else {
    lv_1.classList.remove("green");
    lv_2.classList.remove("green");
    lv_3.classList.remove("green");
    lv_4.classList.remove("green");
  }
});
// Copy password btn
copyPasswordBtn.onclick = function () {
  passwordInput.select();
  document.execCommand("copy");
  showCopied.style.display = "block";
  setTimeout(function () {
    showCopied.style.display = "none";
  }, 2000);
};
