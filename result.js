export function result(n, a, x) {
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
