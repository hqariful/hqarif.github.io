export function display(n, a, typ) {
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
    if(typ=="0"||typ=="6")
      m[r].innerHTML = `&#916<sup>${j - 1}</sup>y`;
    if(typ=="1")
      m[r].innerHTML = `&#8711<sup>${j - 1}</sup>y`
    document.body.appendChild(m[r]);
  }

  //count the number of decimals
  Number.prototype.countDecimals = function () {
    if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0; 
}
  //main element of triangle

  //type 0,1
  if(typ=="1"||typ=="0"||typ=="6"){
  const d = document.createElement("p");
  let y = 0;
  let off;
  const z = [];
  for (let i = 0; i < n; i++)
    for (let j = 0; j <= n; j++) {
      if (i + j > n) continue;
      off=1;
      z[y] = d.cloneNode("true");
      z[y].style.position = "absolute";
      if(j>1) off=15*(j-1);    //offset of triangle
      z[y].style.top = 300 + i * 30 + off + "px";
      z[y].style.left = 20 + j * 50 + "px";
      if(!Number.isInteger(a[i][j])&&a[i][j].countDecimals()>4){
        z[y].innerHTML = a[i][j].toExponential(2);
      }
      else
        z[y].innerHTML = a[i][j].toString();
      document.body.appendChild(z[y]);
      y = y + 1;
    }
  }
  //type 2
  if(typ=="2"){
    const d = document.createElement("p");
  }

}
