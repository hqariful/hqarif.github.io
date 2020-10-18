import {result} from "./result.js"
import {display} from "./display.js"
document.getElementById("btn").addEventListener("click", function() {
  start()
});
function start() {
  const n = document.getElementById("n").value;
  const a = new Array(n);
  for (let i = 0; i < n; i++) a[i] = new Array(n + 1);
  const d = document.createElement("input");
  d.type = "number";
  const tx = document.createElement("label");
  const ty = document.createElement("label");
  tx.style.position = "absolute";
  tx.style.top = 200 + "px";
  tx.style.left = 5 + "px";
  tx.innerHTML = "x:";
  document.body.appendChild(tx);
  ty.style.position = "absolute";
  ty.style.top = 230 + "px";
  ty.style.left = 5 + "px";
  ty.innerHTML = "y:";
  document.body.appendChild(ty);
  var z = [];
  var y = 0;
  for (let j = 0; j < n; j++)
    for (let i = 0; i < 2; i++) {
      z[y] = d.cloneNode("true");
      z[y].style.position = "absolute";
      z[y].style.left = 20 + j * 40 + "px";
      z[y].style.top = 200 + i * 30 + "px";
      z[y].style.width = 25 + "px";
      document.body.appendChild(z[y]);
      y = y + 1;
    }
  const dim = document.createElement("input");
  dim.placeholder = "value to find";
  dim.style.position = "absolute";
  dim.style.top = 150 + "px";
  dim.style.left = 25 + "px";
  document.body.appendChild(dim);
  const btn = document.createElement("button");
  btn.style.position = "absolute";
  btn.style.top = 230 + "px";
  btn.style.left = n * 40 + 25 + "px";
  btn.innerHTML = "submit";
  btn.onclick = confirm;
  document.body.appendChild(btn);
  function confirm() {
    let y = 0;
    for (let i = 0; i < n; i++)
      for (let j = 0; j < 2; j++) {
        a[i][j] = parseFloat(z[y].value);
        y = y + 1;
      }
    for (let j = 1; j < n; j++)
      for (let i = 0; i < n - j; i++)
        a[i][j + 1] = a[i + 1][j] - a[i][j];
    result(n, a, dim.value);
    display(n, a);
  }
}
