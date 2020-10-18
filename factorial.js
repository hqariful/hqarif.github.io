export function fact(p, u,k) {
    if (u == 0) return 1;
    else {
      let nm = p,
        dm = 1;

    if(k==0){
        for (let i = 1; i < u; i++) {
        nm = nm * (p - i);
        dm = dm * (i + 1);
      }
    }

    if(k==1){
        for (let i = 1; i < u; i++) {
          nm = nm * (p + i);
          dm = dm * (i + 1);
      }
    }
      return nm / dm;
    }
  }