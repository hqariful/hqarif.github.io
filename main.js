import {confirm} from "./confirm.js"

document.getElementById("btn").addEventListener("click", function() {
  start()
});
function start() {
  //creating Array
  const n = document.getElementById("n").value;
  const a = new Array(n);
  for (let i = 0; i < n; i++) a[i] = new Array(n + 1);

  //type of interpolation
  const typ = document.getElementById("i_type");

  //taking value to find
  const dim = document.createElement("input");
  dim.placeholder = "value to find";
  dim.style.position = "absolute";
  dim.style.top = 160 + "px";
  dim.style.left = 25 + "px";
  document.body.appendChild(dim);

  //x and y
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

  //taking computed input
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

  //creating confirm button
  const btn = document.createElement("button");
  btn.style.position = "absolute";
  btn.style.top = 230 + "px";
  btn.style.left = n * 40 + 25 + "px";
  btn.innerHTML = "submit";
  btn.onclick = ys;
  document.body.appendChild(btn);
  function ys(){
    confirm(n,z,a,dim.value,typ.value)
  }
  //   <option value="3">Bessel</option>
  //   <option value="4">Striling</option>
  //   <option value="5">Gauss Central Diff.</option>
  //   
}
