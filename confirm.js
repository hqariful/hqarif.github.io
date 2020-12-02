import {result} from "./result.js"
import {display} from "./display.js"
export function confirm(n,z,a,q,typ) {
    //Newt. Forward = 0
    //Newt Backward = 1
    //Lagrange = 2
    //Bessel = 3
    //Striling = 4
    //Guass C. Diff = 5
    //Newt Divided = 6
    let y = 0;

    //Formating into original Array a[]
    for (let i = 0; i < n; i++)
      for (let j = 0; j < 2; j++) {
        a[i][j] = parseFloat(z[y].value);
        y = y + 1;
      }
    //type 0 1 6
    if(typ=="0"||typ=="1"||typ=="6"){
      console.log(typ)
      //denominator valid only for type 6
      let den = 1;  
      for (let j = 1; j < n; j++)
      for (let i = 0; i < n - j; i++){
        if(typ=="6") {den = a[i+j][0]-a[i][0]}
        a[i][j + 1] = (a[i + 1][j] - a[i][j])/den;
      }
      //main calculation
    display(n, a, typ);
    result(n, a, q, typ);
    }
    //type 2
    if(typ=="2"){
      result(n, a, q, typ);
    }
    
    
  }