import {fact} from "./factorial.js"
export function result(n, a, x, typ) {
  let sum = 0;
  let out = "";

  //type 0
  if(typ=="0"){
    const p = (x - a[0][0]) / (a[1][0] - a[0][0]);
    for (let i = 1; i <= n; i++) {
    sum = sum + fact(p, i - 1,0) * a[0][i];
    out = out + `×${a[0][i]}+`;
  }
  }
  
  //type 1
  if(typ=="1"){
    const p = (x - a[n-1][0]) / (a[1][0] - a[0][0]);
    for (let i = 1; i <= n; i++) {
    sum = sum + fact(p, i - 1,1) * a[n-i][i];
    out = out + `×${a[n-i][i]}+`;
  }
  }
  const d = document.createElement("p");
  d.style.position = "absolute";
  d.style.top = 250+50*n + "px";
  d.style.left = 22 + "px";
  d.innerHTML = `Result = ${sum}`;
  document.body.appendChild(d);
  console.log(out);
  console.log("result", sum);
}
