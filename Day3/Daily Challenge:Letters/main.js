let btnCheck = document.querySelector("button");
let inputEl = document.querySelector("input");
let regExp = /^[a-z]+$/i;

btnCheck.addEventListener("click", () => {
  let value = inputEl.value;
  let found = regExp.test(value)
  let result = found ? "Yes" : "No";
  alert(result)
});
