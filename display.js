export function display(n, a) {
  const tx = document.createElement("p");
  tx.style.color = "red";
  const m = [];
  let r = 0;

  //x label
  m[0] = tx.cloneNode("true");
  m[0].style.position = "absolute";
  m[0].style.top = 270 + "px";
  m[0].style.left = 22 + "px";
  m[0].innerHTML = `x`;
  document.body.appendChild(m[0]);

  //y label
  m[1] = tx.cloneNode("true");
  m[1].style.position = "absolute";
  m[1].style.top = 270 + "px";
  m[1].style.left = 22 + 50 + "px";
  m[1].innerHTML = `y`;
  document.body.appendChild(m[1]);

  //upper heading of triangle
  for (let j = 2; j <= n; j++) {
    r = r + 1;
    m[r] = tx.cloneNode("true");
    m[r].style.position = "absolute";
    m[r].style.top = 270 + "px";
    m[r].style.left = 20 + j * 50 + "px";
    m[r].innerHTML = `&#916<sup>${j - 1}</sup>y`;
    document.body.appendChild(m[r]);
  }

  //main element of triangle
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
