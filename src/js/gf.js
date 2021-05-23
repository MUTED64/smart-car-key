function gen_pow_matrix() {
  let q = 10;
  let pm = new Array(2 ** q - 1);
  for (var i = 0; i < pm.length; i++) {
    pm[i] = new Array(2);
  }
  let t = 1;
  for (let i = 0; i < 2 ** q - 1; i++) {
    t = t << 1;
    if (t >> q != 0) {
      t = t ^ 1305;
    }
    pm[i][1] = t;
    pm[t - 1][0] = i + 1;
  }
  return pm;
}

function add(A, B) {
  if (A.length == B.length) {
    let C = new Array(A.length);
    for (let i = 0; i < A.length; i++) {
      C[i] = A[i] ^ B[i];
    }
    return C;
  } else {
    console.log("error");
  }
}

function prod(x, Y, pm) {
  let Out = new Array(Y.length);

  for (let i = 0; i < Y.length; i++) {
    if (Y[i] === 0 || x === 0) {
      Out[i] = 0;
    } else {
      Out[i] =
        pm[(pm[x - 1][0] + pm[Y[i] - 1][0] - 1 + pm.length) % pm.length][1];
    }
  }

  return Out;
}

function cleanZeros(p) {
  if (p[0] !== 0) {
    return p;
  } else {
    let index = p.findIndex((val) => val !== 0);
    return p.slice(index);
  }
}

function polyadd(p1, p2) {
  if (p1.length == p2.length) {
    return add(p1, p2);
  } else if (p1.length > p2.length) {
    while (p1.length !== p2.length) {
      p2.unshift(0);
    }
    return add(p1, p2);
  } else {
    while (p1.length !== p2.length) {
      p1.unshift(0);
    }
    return add(p1, p2);
  }
}

function polyval(p, x, pm) {
  p = cleanZeros(p);
  let y = new Array(x.length);
  for (let i = 0; i < y.length; i++) {
    y[i] = p[p.length - 1];
  }
  let v = new Array(x.length);
  for (let i = 0; i < v.length; i++) {
    v[i] = 1;
  }

  p.slice(0, -1)
    .reverse()
    .forEach((k) => {
      for (let i = 0; i < v.length; i++) {
        v[i] = prod(v[i], x, pm)[i];
      }
      y = add(y, prod(k, v, pm));
    });
  return y;
}

function polyprod(p1, p2, pm) {
  p1 = cleanZeros(p1);
  p2 = cleanZeros(p2);
  if (p1.length < p2.length) {
    let t = p1;
    p1 = p2;
    p2 = t;
  }
  let y = [];
  p2.forEach((k) => {
    y.push(0);
    y = polyadd(y, prod(k, p1, pm));
  });
  return cleanZeros(y);
}

function minpoly(x, pm) {
  let p = [1];
  let roots = new Array(pm.length + 1);
  for (let i = 0; i < roots.length; i++) {
    roots[i] = 0;
  }
  x.forEach((a) => {
    while (roots[a] === 0) {
      p = polyprod(p, [1, a], pm);
      roots[a] = 1;
      if (a === 0) {
        break;
      }
      a = pm[((2 * pm[a - 1][0] + pm.length) % pm.length) - 1][1];
    }
  });

  return p;
}

function pm2(n) {
  let pm2 = [];
  gen_pow_matrix()
    .slice(0, n)
    .forEach((p) => {
      pm2.push(p[1]);
    });
  return pm2;
}

function divide(x, y, pm) {
  if (y === 0) {
    console.log("error");
  }
  if (x === 0) {
    return 0;
  } else {
    return pm[(pm[x - 1][0] - pm[y - 1][0] - 1 + pm.length) % pm.length][1];
  }
}

function polydiv(p1, p2, pm) {
  p1 = cleanZeros(p1);
  p2 = cleanZeros(p2);
  if (p1.length < p2.length) {
    return [0], JSON.parse(JSON.stringify(p1));
  }

  let a = new Array(p1.length - p2.length + 1);
  let b = JSON.parse(JSON.stringify(p1));
  for (let i = 0; i < a.length; i++) {
    a[i] = divide(b[i], p2[0], pm);
    let replace_b = add(b.slice(i, i + p2.length), prod(a[i], p2, pm));
    b.splice(i, replace_b.length, ...replace_b);
  }

  return [a, cleanZeros(b)];
}

function euclid(p1, p2, pm, max_deg = 0) {
  p1 = cleanZeros(p1);
  p2 = cleanZeros(p2);
  let x0 = [1];
  let x = [0];
  let y0 = [0];
  let y = [1];

  let r = JSON.parse(JSON.stringify(p2));

  while (r.length > max_deg + 1) {
    let q = polydiv(p1, p2, pm)[0];
    r = polydiv(p1, p2, pm)[1];

    let t = x0;
    x0 = x;
    x = t;
    t = y0;
    y0 = y;
    y = t;

    x = polyadd(x, polyprod(q, x0, pm));
    y = polyadd(y, polyprod(q, y0, pm));

    p1 = p2;
    p2 = r;
  }

  return [r, x, y];
}

export {
  gen_pow_matrix,
  add,
  prod,
  divide,
  polyadd,
  polydiv,
  polyprod,
  polyval,
  cleanZeros,
  minpoly,
  euclid,
  pm2,
};
