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
      for (let i = 0; i < n - j; i++) a[i][j + 1] = a[i + 1][j] - a[i][j];
    result(n, a, dim.value);
    display(n, a);
  }
}
function display(n, a) {
  const tx = document.createElement("p");
  tx.style.color = "red";
  const m = [];
  let r = 0;
  m[0] = tx.cloneNode("true");
  m[0].style.position = "absolute";
  m[0].style.top = 270 + "px";
  m[0].style.left = 22 + "px";
  m[0].innerHTML = `x`;
  document.body.appendChild(m[0]);
  m[1] = tx.cloneNode("true");
  m[1].style.position = "absolute";
  m[1].style.top = 270 + "px";
  m[1].style.left = 22 + 50 + "px";
  m[1].innerHTML = `y`;
  document.body.appendChild(m[1]);
  r = 2;
  for (let j = 2; j <= n; j++) {
    m[r] = tx.cloneNode("true");
    m[r].style.position = "absolute";
    m[r].style.top = 270 + "px";
    m[r].style.left = 20 + j * 50 + "px";
    m[r].innerHTML = `&#916<sup>${j - 1}</sup>y`;
    document.body.appendChild(m[r]);
    r = r + 1;
  }

  const d = document.createElement("p");
  let y = 0;
  const z = [];
  for (let i = 0; i < n; i++)
    for (let j = 0; j <= n; j++) {
      if (i + j > n) continue;
      z[y] = d.cloneNode("true");
      z[y].style.position = "absolute";
      z[y].style.top = 300 + i * 30 + "px";
      z[y].style.left = 20 + j * 50 + "px";
      z[y].innerHTML = a[i][j].toString();
      document.body.appendChild(z[y]);
      y = y + 1;
    }
}
function result(n, a, x) {
  let sum = 0;
  let out = "";
  const p = (x - a[0][0]) / (a[1][0] - a[0][0]);
  for (let i = 1; i <= n; i++) {
    sum = sum + fact(p, i - 1) * a[0][i];
    out = out + `×${a[0][i]}+`;
  }
  console.log(out);
  console.log("result", sum);
  function fact(p, u) {
    if (u == 0) return 1;
    else {
      let nm = p,
        dm = 1;
      for (let i = 1; i < u; i++) {
        nm = nm * (p - i);
        dm = dm * (i + 1);
        out = out + ``;
      }
      return nm / dm;
    }
  }
}
