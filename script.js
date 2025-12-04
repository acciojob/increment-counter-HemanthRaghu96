//your JS code here. If required.
let count = document.getElementById("counter");
let increment = document.getElementById("increment");
function handleClick() {
  let val = Number(count.innerText);
  alert(val);

  val++;
  count.innerText = val;
}
