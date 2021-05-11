//Recieving the selectors
const number = document.querySelector(".number");
const convert = document.querySelector(".convert");
const reset = document.querySelector(".reset");
const binary = document.querySelector(".binary");
const hexa = document.querySelector(".hexa");
const oct = document.querySelector(".oct");

//changing decimal number to base 2 ,16 and 7
function conversions() {
  let binaryNum = Number(number.value).toString(2);
  let hexaNum = Number(number.value).toString(16);
  let octNum = Number(number.value).toString(8);
  binary.innerText = "";
  hexa.innerText = "";
  oct.innerText = "";
  binary.append(binaryNum);
  hexa.append(hexaNum);
  oct.append(octNum);
  convert.disabled = true;
}
//reset function
function resetValue() {
  number.value = "0";
  binary.innerText = "0";
  hexa.innerText = "0";
  oct.innerText = "0";
  convert.disabled = false;
}
//event listenrs
reset.addEventListener("click", resetValue);
convert.addEventListener("click", conversions);
number.addEventListener("click", resetValue);
