import {result} from "./result.js"
import {display} from "./display.js"
export function confirm(n,z,a,q,typ) {
    //Newt. Forward = 0
    //Newt Backward = 1
    //Lagrange = 2
    //Bessel = 3
    //Striling = 4
    //Guass C. Diff = 5
    let y = 0;

    //Formating into original Array a[]
    for (let i = 0; i < n; i++)
      for (let j = 0; j < 2; j++) {
        a[i][j] = parseFloat(z[y].value);
        y = y + 1;
      }
    //type 0 & 1
    if(typ=="0"||typ=="1"){
      console.log(typ)
      for (let j = 1; j < n; j++)
      for (let i = 0; i < n - j; i++)
        a[i][j + 1] = a[i + 1][j] - a[i][j];
    }
    
    //main calculation
    display(n, a);
    result(n, a, q, typ);
  }