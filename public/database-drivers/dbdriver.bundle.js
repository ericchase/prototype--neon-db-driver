// node_modules/@neondatabase/serverless/index.mjs
function Ge(r) {
  let e = 1779033703,
    t = 3144134277,
    n = 1013904242,
    i = 2773480762,
    s = 1359893119,
    o = 2600822924,
    u = 528734635,
    c = 1541459225,
    h = 0,
    l = 0,
    d = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
    b = a((A, w) => (A >>> w) | (A << (32 - w)), 'rrot'),
    C = new Uint32Array(64),
    B = new Uint8Array(64),
    W = a(() => {
      for (let R = 0, G = 0; R < 16; R++, G += 4) C[R] = (B[G] << 24) | (B[G + 1] << 16) | (B[G + 2] << 8) | B[G + 3];
      for (let R = 16; R < 64; R++) {
        let G = b(C[R - 15], 7) ^ b(C[R - 15], 18) ^ (C[R - 15] >>> 3),
          he = b(C[R - 2], 17) ^ b(C[R - 2], 19) ^ (C[R - 2] >>> 10);
        C[R] = (C[R - 16] + G + C[R - 7] + he) | 0;
      }
      let A = e,
        w = t,
        P = n,
        V = i,
        k = s,
        j = o,
        ce = u,
        ee = c;
      for (let R = 0; R < 64; R++) {
        let G = b(k, 6) ^ b(k, 11) ^ b(k, 25),
          he = (k & j) ^ (~k & ce),
          ye = (ee + G + he + d[R] + C[R]) | 0,
          xe = b(A, 2) ^ b(A, 13) ^ b(A, 22),
          me = (A & w) ^ (A & P) ^ (w & P),
          se = (xe + me) | 0;
        (ee = ce), (ce = j), (j = k), (k = (V + ye) | 0), (V = P), (P = w), (w = A), (A = (ye + se) | 0);
      }
      (e = (e + A) | 0), (t = (t + w) | 0), (n = (n + P) | 0), (i = (i + V) | 0), (s = (s + k) | 0), (o = (o + j) | 0), (u = (u + ce) | 0), (c = (c + ee) | 0), (l = 0);
    }, 'process'),
    X = a((A) => {
      typeof A == 'string' && (A = new TextEncoder().encode(A));
      for (let w = 0; w < A.length; w++) (B[l++] = A[w]), l === 64 && W();
      h += A.length;
    }, 'add'),
    de = a(() => {
      if (((B[l++] = 128), l == 64 && W(), l + 8 > 64)) {
        for (; l < 64; ) B[l++] = 0;
        W();
      }
      for (; l < 58; ) B[l++] = 0;
      let A = h * 8;
      (B[l++] = (A / 1099511627776) & 255), (B[l++] = (A / 4294967296) & 255), (B[l++] = A >>> 24), (B[l++] = (A >>> 16) & 255), (B[l++] = (A >>> 8) & 255), (B[l++] = A & 255), W();
      let w = new Uint8Array(32);
      return (w[0] = e >>> 24), (w[1] = (e >>> 16) & 255), (w[2] = (e >>> 8) & 255), (w[3] = e & 255), (w[4] = t >>> 24), (w[5] = (t >>> 16) & 255), (w[6] = (t >>> 8) & 255), (w[7] = t & 255), (w[8] = n >>> 24), (w[9] = (n >>> 16) & 255), (w[10] = (n >>> 8) & 255), (w[11] = n & 255), (w[12] = i >>> 24), (w[13] = (i >>> 16) & 255), (w[14] = (i >>> 8) & 255), (w[15] = i & 255), (w[16] = s >>> 24), (w[17] = (s >>> 16) & 255), (w[18] = (s >>> 8) & 255), (w[19] = s & 255), (w[20] = o >>> 24), (w[21] = (o >>> 16) & 255), (w[22] = (o >>> 8) & 255), (w[23] = o & 255), (w[24] = u >>> 24), (w[25] = (u >>> 16) & 255), (w[26] = (u >>> 8) & 255), (w[27] = u & 255), (w[28] = c >>> 24), (w[29] = (c >>> 16) & 255), (w[30] = (c >>> 8) & 255), (w[31] = c & 255), w;
    }, 'digest');
  return r === undefined ? { add: X, digest: de } : (X(r), de());
}
function Vo(r) {
  return g.getRandomValues(y.alloc(r));
}
function Ko(r) {
  if (r === 'sha256')
    return {
      update: a(function (e) {
        return {
          digest: a(function () {
            return y.from(Ge(e));
          }, 'digest'),
        };
      }, 'update'),
    };
  if (r === 'md5')
    return {
      update: a(function (e) {
        return {
          digest: a(function () {
            return typeof e == 'string' ? $e.hashStr(e) : $e.hashByteArray(e);
          }, 'digest'),
        };
      }, 'update'),
    };
  throw new Error(`Hash type '${r}' not supported`);
}
function zo(r, e) {
  if (r !== 'sha256') throw new Error(`Only sha256 is supported (requested: '${r}')`);
  return {
    update: a(function (t) {
      return {
        digest: a(function () {
          typeof e == 'string' && (e = new TextEncoder().encode(e)), typeof t == 'string' && (t = new TextEncoder().encode(t));
          let n = e.length;
          if (n > 64) e = Ge(e);
          else if (n < 64) {
            let c = new Uint8Array(64);
            c.set(e), (e = c);
          }
          let i = new Uint8Array(64),
            s = new Uint8Array(64);
          for (let c = 0; c < 64; c++) (i[c] = 54 ^ e[c]), (s[c] = 92 ^ e[c]);
          let o = new Uint8Array(t.length + 64);
          o.set(i, 0), o.set(t, 64);
          let u = new Uint8Array(96);
          return u.set(s, 0), u.set(Ge(o), 64), y.from(Ge(u));
        }, 'digest'),
      };
    }, 'update'),
  };
}
function ou(...r) {
  return r.join('/');
}
function au(r, e) {
  e(new Error('No filesystem'));
}
function fr(r, e = false) {
  let { protocol: t } = new URL(r),
    n = 'http:' + r.substring(t.length),
    { username: i, password: s, host: o, hostname: u, port: c, pathname: h, search: l, searchParams: d, hash: b } = new URL(n);
  (s = decodeURIComponent(s)), (i = decodeURIComponent(i)), (h = decodeURIComponent(h));
  let C = i + ':' + s,
    B = e ? Object.fromEntries(d.entries()) : l;
  return {
    href: r,
    protocol: t,
    auth: C,
    username: i,
    password: s,
    host: o,
    hostname: u,
    port: c,
    pathname: h,
    search: l,
    query: B,
    hash: b,
  };
}
function Fu(r) {
  return 0;
}
function lc({ socket: r, servername: e }) {
  return r.startTls(e), r;
}
function Ys(r, { arrayMode: e, fullResults: t, fetchOptions: n, isolationLevel: i, readOnly: s, deferrable: o, queryCallback: u, resultCallback: c } = {}) {
  if (!r) throw new Error('No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?');
  let h;
  try {
    h = fr(r);
  } catch {
    throw new Error('Database connection string provided to `neon()` is not a valid URL. Connection string: ' + String(r));
  }
  let { protocol: l, username: d, password: b, hostname: C, port: B, pathname: W } = h;
  if ((l !== 'postgres:' && l !== 'postgresql:') || !d || !b || !C || !W) throw new Error('Database connection string format for `neon()` should be: postgresql://user:password@host.tld/dbname?option=value');
  function X(A, ...w) {
    let P, V;
    if (typeof A == 'string') (P = A), (V = w[1]), (w = w[0] ?? []);
    else {
      P = '';
      for (let j = 0; j < A.length; j++) (P += A[j]), j < w.length && (P += '$' + (j + 1));
    }
    w = w.map((j) => (0, Ks.prepareValue)(j));
    let k = {
      query: P,
      params: w,
    };
    return u && u(k), Qc(de, k, V);
  }
  a(X, 'resolve'),
    (X.transaction = async (A, w) => {
      if ((typeof A == 'function' && (A = A(X)), !Array.isArray(A))) throw new Error($s);
      A.forEach((k) => {
        if (k[Symbol.toStringTag] !== 'NeonQueryPromise') throw new Error($s);
      });
      let P = A.map((k) => k.parameterizedQuery),
        V = A.map((k) => k.opts ?? {});
      return de(P, V, w);
    });
  async function de(A, w, P) {
    let { fetchEndpoint: V, fetchFunction: k } = _e,
      j = typeof V == 'function' ? V(C, B) : V,
      ce = Array.isArray(A) ? { queries: A } : A,
      ee = n ?? {},
      R = e ?? false,
      G = t ?? false,
      he = i,
      ye = s,
      xe = o;
    P !== undefined && (P.fetchOptions !== undefined && (ee = { ...ee, ...P.fetchOptions }), P.arrayMode !== undefined && (R = P.arrayMode), P.fullResults !== undefined && (G = P.fullResults), P.isolationLevel !== undefined && (he = P.isolationLevel), P.readOnly !== undefined && (ye = P.readOnly), P.deferrable !== undefined && (xe = P.deferrable)), w !== undefined && !Array.isArray(w) && w.fetchOptions !== undefined && (ee = { ...ee, ...w.fetchOptions });
    let me = { 'Neon-Connection-String': r, 'Neon-Raw-Text-Output': 'true', 'Neon-Array-Mode': 'true' };
    Array.isArray(A) && (he !== undefined && (me['Neon-Batch-Isolation-Level'] = he), ye !== undefined && (me['Neon-Batch-Read-Only'] = String(ye)), xe !== undefined && (me['Neon-Batch-Deferrable'] = String(xe)));
    let se;
    try {
      se = await (k ?? fetch)(j, {
        method: 'POST',
        body: JSON.stringify(ce),
        headers: me,
        ...ee,
      });
    } catch (oe) {
      let U = new Ae(`Error connecting to database: ${oe.message}`);
      throw ((U.sourceError = oe), U);
    }
    if (se.ok) {
      let oe = await se.json();
      if (Array.isArray(A)) {
        let U = oe.results;
        if (!Array.isArray(U)) throw new Ae('Neon internal error: unexpected result format');
        return U.map((K, le) => {
          let It = w[le] ?? {},
            Xs = It.arrayMode ?? R,
            eo = It.fullResults ?? G;
          return Vs(K, {
            arrayMode: Xs,
            fullResults: eo,
            parameterizedQuery: A[le],
            resultCallback: c,
            types: It.types,
          });
        });
      } else {
        let U = w ?? {},
          K = U.arrayMode ?? R,
          le = U.fullResults ?? G;
        return Vs(oe, { arrayMode: K, fullResults: le, parameterizedQuery: A, resultCallback: c, types: U.types });
      }
    } else {
      let { status: oe } = se;
      if (oe === 400) {
        let U = await se.json(),
          K = new Ae(U.message);
        for (let le of qc) K[le] = U[le] ?? undefined;
        throw K;
      } else {
        let U = await se.text();
        throw new Ae(`Server error (HTTP status ${oe}): ${U}`);
      }
    }
  }
  return a(de, 'execute'), X;
}
function Qc(r, e, t) {
  return { [Symbol.toStringTag]: 'NeonQueryPromise', parameterizedQuery: e, opts: t, then: a((n, i) => r(e, t).then(n, i), 'then'), catch: a((n) => r(e, t).catch(n), 'catch'), finally: a((n) => r(e, t).finally(n), 'finally') };
}
function Vs(r, { arrayMode: e, fullResults: t, parameterizedQuery: n, resultCallback: i, types: s }) {
  let o = new zs.default(s),
    u = r.fields.map((l) => l.name),
    c = r.fields.map((l) => o.getTypeParser(l.dataTypeID)),
    h = e === true ? r.rows.map((l) => l.map((d, b) => (d === null ? null : c[b](d)))) : r.rows.map((l) => Object.fromEntries(l.map((d, b) => [u[b], d === null ? null : c[b](d)])));
  return i && i(n, r, h, { arrayMode: e, fullResults: t }), t ? ((r.viaNeonFetch = true), (r.rowAsArray = e), (r.rows = h), (r._parsers = c), (r._types = o), r) : h;
}
function Wc(r, e) {
  if (e)
    return {
      callback: e,
      result: undefined,
    };
  let t,
    n,
    i = a(function (o, u) {
      o ? t(o) : n(u);
    }, 'cb'),
    s = new r(function (o, u) {
      (n = o), (t = u);
    });
  return { callback: i, result: s };
}
var to = Object.create;
var Ce = Object.defineProperty;
var ro = Object.getOwnPropertyDescriptor;
var no = Object.getOwnPropertyNames;
var io = Object.getPrototypeOf;
var so = Object.prototype.hasOwnProperty;
var oo = (r, e, t) => (e in r ? Ce(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : (r[e] = t));
var a = (r, e) => Ce(r, 'name', { value: e, configurable: true });
var z = (r, e) => () => (r && (e = r((r = 0))), e);
var I = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var ie = (r, e) => {
  for (var t in e) Ce(r, t, { get: e[t], enumerable: true });
};
var An = (r, e, t, n) => {
  if ((e && typeof e == 'object') || typeof e == 'function') for (let i of no(e)) !so.call(r, i) && i !== t && Ce(r, i, { get: () => e[i], enumerable: !(n = ro(e, i)) || n.enumerable });
  return r;
};
var Te = (r, e, t) => (
  (t = r != null ? to(io(r)) : {}),
  An(
    e || !r || !r.__esModule
      ? Ce(t, 'default', {
          value: r,
          enumerable: true,
        })
      : t,
    r,
  )
);
var N = (r) => An(Ce({}, '__esModule', { value: true }), r);
var _ = (r, e, t) => oo(r, typeof e != 'symbol' ? e + '' : e, t);
var In = I((nt) => {
  p();
  nt.byteLength = uo;
  nt.toByteArray = ho;
  nt.fromByteArray = po;
  var ae = [],
    te = [],
    ao = typeof Uint8Array < 'u' ? Uint8Array : Array,
    Pt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (ve = 0, Cn = Pt.length; ve < Cn; ++ve) (ae[ve] = Pt[ve]), (te[Pt.charCodeAt(ve)] = ve);
  var ve, Cn;
  te[45] = 62;
  te[95] = 63;
  function Tn(r) {
    var e = r.length;
    if (e % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    var t = r.indexOf('=');
    t === -1 && (t = e);
    var n = t === e ? 0 : 4 - (t % 4);
    return [t, n];
  }
  a(Tn, 'getLens');
  function uo(r) {
    var e = Tn(r),
      t = e[0],
      n = e[1];
    return ((t + n) * 3) / 4 - n;
  }
  a(uo, 'byteLength');
  function co(r, e, t) {
    return ((e + t) * 3) / 4 - t;
  }
  a(co, '_byteLength');
  function ho(r) {
    var e,
      t = Tn(r),
      n = t[0],
      i = t[1],
      s = new ao(co(r, n, i)),
      o = 0,
      u = i > 0 ? n - 4 : n,
      c;
    for (c = 0; c < u; c += 4) (e = (te[r.charCodeAt(c)] << 18) | (te[r.charCodeAt(c + 1)] << 12) | (te[r.charCodeAt(c + 2)] << 6) | te[r.charCodeAt(c + 3)]), (s[o++] = (e >> 16) & 255), (s[o++] = (e >> 8) & 255), (s[o++] = e & 255);
    return i === 2 && ((e = (te[r.charCodeAt(c)] << 2) | (te[r.charCodeAt(c + 1)] >> 4)), (s[o++] = e & 255)), i === 1 && ((e = (te[r.charCodeAt(c)] << 10) | (te[r.charCodeAt(c + 1)] << 4) | (te[r.charCodeAt(c + 2)] >> 2)), (s[o++] = (e >> 8) & 255), (s[o++] = e & 255)), s;
  }
  a(ho, 'toByteArray');
  function lo(r) {
    return ae[(r >> 18) & 63] + ae[(r >> 12) & 63] + ae[(r >> 6) & 63] + ae[r & 63];
  }
  a(lo, 'tripletToBase64');
  function fo(r, e, t) {
    for (var n, i = [], s = e; s < t; s += 3) (n = ((r[s] << 16) & 16711680) + ((r[s + 1] << 8) & 65280) + (r[s + 2] & 255)), i.push(lo(n));
    return i.join('');
  }
  a(fo, 'encodeChunk');
  function po(r) {
    for (var e, t = r.length, n = t % 3, i = [], s = 16383, o = 0, u = t - n; o < u; o += s) i.push(fo(r, o, o + s > u ? u : o + s));
    return n === 1 ? ((e = r[t - 1]), i.push(ae[e >> 2] + ae[(e << 4) & 63] + '==')) : n === 2 && ((e = (r[t - 2] << 8) + r[t - 1]), i.push(ae[e >> 10] + ae[(e >> 4) & 63] + ae[(e << 2) & 63] + '=')), i.join('');
  }
  a(po, 'fromByteArray');
});
var Pn = I((Bt) => {
  p();
  Bt.read = function (r, e, t, n, i) {
    var s,
      o,
      u = i * 8 - n - 1,
      c = (1 << u) - 1,
      h = c >> 1,
      l = -7,
      d = t ? i - 1 : 0,
      b = t ? -1 : 1,
      C = r[e + d];
    for (d += b, s = C & ((1 << -l) - 1), C >>= -l, l += u; l > 0; s = s * 256 + r[e + d], d += b, l -= 8);
    for (o = s & ((1 << -l) - 1), s >>= -l, l += n; l > 0; o = o * 256 + r[e + d], d += b, l -= 8);
    if (s === 0) s = 1 - h;
    else {
      if (s === c) return o ? NaN : (C ? -1 : 1) * (1 / 0);
      (o = o + Math.pow(2, n)), (s = s - h);
    }
    return (C ? -1 : 1) * o * Math.pow(2, s - n);
  };
  Bt.write = function (r, e, t, n, i, s) {
    var o,
      u,
      c,
      h = s * 8 - i - 1,
      l = (1 << h) - 1,
      d = l >> 1,
      b = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      C = n ? 0 : s - 1,
      B = n ? 1 : -1,
      W = e < 0 || (e === 0 && 1 / e < 0) ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? ((u = isNaN(e) ? 1 : 0), (o = l)) : ((o = Math.floor(Math.log(e) / Math.LN2)), e * (c = Math.pow(2, -o)) < 1 && (o--, (c *= 2)), o + d >= 1 ? (e += b / c) : (e += b * Math.pow(2, 1 - d)), e * c >= 2 && (o++, (c /= 2)), o + d >= l ? ((u = 0), (o = l)) : o + d >= 1 ? ((u = (e * c - 1) * Math.pow(2, i)), (o = o + d)) : ((u = e * Math.pow(2, d - 1) * Math.pow(2, i)), (o = 0))); i >= 8; r[t + C] = u & 255, C += B, u /= 256, i -= 8);
    for (o = (o << i) | u, h += i; h > 0; r[t + C] = o & 255, C += B, o /= 256, h -= 8);
    r[t + C - B] |= W * 128;
  };
});
var $n = I((Le) => {
  p();
  var Lt = In(),
    Pe = Pn(),
    Bn = typeof Symbol == 'function' && typeof Symbol.for == 'function' ? Symbol.for('nodejs.util.inspect.custom') : null;
  Le.Buffer = f;
  Le.SlowBuffer = So;
  Le.INSPECT_MAX_BYTES = 50;
  var it = 2147483647;
  Le.kMaxLength = it;
  f.TYPED_ARRAY_SUPPORT = yo();
  !f.TYPED_ARRAY_SUPPORT && typeof console < 'u' && typeof console.error == 'function' && console.error('This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
  function yo() {
    try {
      let r = new Uint8Array(1),
        e = {
          foo: a(function () {
            return 42;
          }, 'foo'),
        };
      return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(r, e), r.foo() === 42;
    } catch {
      return false;
    }
  }
  a(yo, 'typedArraySupport');
  Object.defineProperty(f.prototype, 'parent', {
    enumerable: true,
    get: a(function () {
      if (f.isBuffer(this)) return this.buffer;
    }, 'get'),
  });
  Object.defineProperty(f.prototype, 'offset', {
    enumerable: true,
    get: a(function () {
      if (f.isBuffer(this)) return this.byteOffset;
    }, 'get'),
  });
  function fe(r) {
    if (r > it) throw new RangeError('The value "' + r + '" is invalid for option "size"');
    let e = new Uint8Array(r);
    return Object.setPrototypeOf(e, f.prototype), e;
  }
  a(fe, 'createBuffer');
  function f(r, e, t) {
    if (typeof r == 'number') {
      if (typeof e == 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
      return Dt(r);
    }
    return Mn(r, e, t);
  }
  a(f, 'Buffer');
  f.poolSize = 8192;
  function Mn(r, e, t) {
    if (typeof r == 'string') return go(r, e);
    if (ArrayBuffer.isView(r)) return wo(r);
    if (r == null) throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof r);
    if (ue(r, ArrayBuffer) || (r && ue(r.buffer, ArrayBuffer)) || (typeof SharedArrayBuffer < 'u' && (ue(r, SharedArrayBuffer) || (r && ue(r.buffer, SharedArrayBuffer))))) return Ft(r, e, t);
    if (typeof r == 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    let n = r.valueOf && r.valueOf();
    if (n != null && n !== r) return f.from(n, e, t);
    let i = bo(r);
    if (i) return i;
    if (typeof Symbol < 'u' && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == 'function') return f.from(r[Symbol.toPrimitive]('string'), e, t);
    throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof r);
  }
  a(Mn, 'from');
  f.from = function (r, e, t) {
    return Mn(r, e, t);
  };
  Object.setPrototypeOf(f.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(f, Uint8Array);
  function Dn(r) {
    if (typeof r != 'number') throw new TypeError('"size" argument must be of type number');
    if (r < 0) throw new RangeError('The value "' + r + '" is invalid for option "size"');
  }
  a(Dn, 'assertSize');
  function mo(r, e, t) {
    return Dn(r), r <= 0 ? fe(r) : e !== undefined ? (typeof t == 'string' ? fe(r).fill(e, t) : fe(r).fill(e)) : fe(r);
  }
  a(mo, 'alloc');
  f.alloc = function (r, e, t) {
    return mo(r, e, t);
  };
  function Dt(r) {
    return Dn(r), fe(r < 0 ? 0 : kt(r) | 0);
  }
  a(Dt, 'allocUnsafe');
  f.allocUnsafe = function (r) {
    return Dt(r);
  };
  f.allocUnsafeSlow = function (r) {
    return Dt(r);
  };
  function go(r, e) {
    if (((typeof e != 'string' || e === '') && (e = 'utf8'), !f.isEncoding(e))) throw new TypeError('Unknown encoding: ' + e);
    let t = kn(r, e) | 0,
      n = fe(t),
      i = n.write(r, e);
    return i !== t && (n = n.slice(0, i)), n;
  }
  a(go, 'fromString');
  function Rt(r) {
    let e = r.length < 0 ? 0 : kt(r.length) | 0,
      t = fe(e);
    for (let n = 0; n < e; n += 1) t[n] = r[n] & 255;
    return t;
  }
  a(Rt, 'fromArrayLike');
  function wo(r) {
    if (ue(r, Uint8Array)) {
      let e = new Uint8Array(r);
      return Ft(e.buffer, e.byteOffset, e.byteLength);
    }
    return Rt(r);
  }
  a(wo, 'fromArrayView');
  function Ft(r, e, t) {
    if (e < 0 || r.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
    if (r.byteLength < e + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return e === undefined && t === undefined ? (n = new Uint8Array(r)) : t === undefined ? (n = new Uint8Array(r, e)) : (n = new Uint8Array(r, e, t)), Object.setPrototypeOf(n, f.prototype), n;
  }
  a(Ft, 'fromArrayBuffer');
  function bo(r) {
    if (f.isBuffer(r)) {
      let e = kt(r.length) | 0,
        t = fe(e);
      return t.length === 0 || r.copy(t, 0, 0, e), t;
    }
    if (r.length !== undefined) return typeof r.length != 'number' || Ot(r.length) ? fe(0) : Rt(r);
    if (r.type === 'Buffer' && Array.isArray(r.data)) return Rt(r.data);
  }
  a(bo, 'fromObject');
  function kt(r) {
    if (r >= it) throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + it.toString(16) + ' bytes');
    return r | 0;
  }
  a(kt, 'checked');
  function So(r) {
    return +r != r && (r = 0), f.alloc(+r);
  }
  a(So, 'SlowBuffer');
  f.isBuffer = a(function (e) {
    return e != null && e._isBuffer === true && e !== f.prototype;
  }, 'isBuffer');
  f.compare = a(function (e, t) {
    if ((ue(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), ue(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), !f.isBuffer(e) || !f.isBuffer(t))) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (e === t) return 0;
    let n = e.length,
      i = t.length;
    for (let s = 0, o = Math.min(n, i); s < o; ++s)
      if (e[s] !== t[s]) {
        (n = e[s]), (i = t[s]);
        break;
      }
    return n < i ? -1 : i < n ? 1 : 0;
  }, 'compare');
  f.isEncoding = a(function (e) {
    switch (String(e).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true;
      default:
        return false;
    }
  }, 'isEncoding');
  f.concat = a(function (e, t) {
    if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0) return f.alloc(0);
    let n;
    if (t === undefined) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
    let i = f.allocUnsafe(t),
      s = 0;
    for (n = 0; n < e.length; ++n) {
      let o = e[n];
      if (ue(o, Uint8Array)) s + o.length > i.length ? (f.isBuffer(o) || (o = f.from(o)), o.copy(i, s)) : Uint8Array.prototype.set.call(i, o, s);
      else if (f.isBuffer(o)) o.copy(i, s);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      s += o.length;
    }
    return i;
  }, 'concat');
  function kn(r, e) {
    if (f.isBuffer(r)) return r.length;
    if (ArrayBuffer.isView(r) || ue(r, ArrayBuffer)) return r.byteLength;
    if (typeof r != 'string') throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r);
    let t = r.length,
      n = arguments.length > 2 && arguments[2] === true;
    if (!n && t === 0) return 0;
    let i = false;
    for (;;)
      switch (e) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return t;
        case 'utf8':
        case 'utf-8':
          return Mt(r).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return t * 2;
        case 'hex':
          return t >>> 1;
        case 'base64':
          return Gn(r).length;
        default:
          if (i) return n ? -1 : Mt(r).length;
          (e = ('' + e).toLowerCase()), (i = true);
      }
  }
  a(kn, 'byteLength');
  f.byteLength = kn;
  function xo(r, e, t) {
    let n = false;
    if (((e === undefined || e < 0) && (e = 0), e > this.length || ((t === undefined || t > this.length) && (t = this.length), t <= 0) || ((t >>>= 0), (e >>>= 0), t <= e))) return '';
    for (r || (r = 'utf8'); ; )
      switch (r) {
        case 'hex':
          return Lo(this, e, t);
        case 'utf8':
        case 'utf-8':
          return On(this, e, t);
        case 'ascii':
          return Po(this, e, t);
        case 'latin1':
        case 'binary':
          return Bo(this, e, t);
        case 'base64':
          return To(this, e, t);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return Ro(this, e, t);
        default:
          if (n) throw new TypeError('Unknown encoding: ' + r);
          (r = (r + '').toLowerCase()), (n = true);
      }
  }
  a(xo, 'slowToString');
  f.prototype._isBuffer = true;
  function Ee(r, e, t) {
    let n = r[e];
    (r[e] = r[t]), (r[t] = n);
  }
  a(Ee, 'swap');
  f.prototype.swap16 = a(function () {
    let e = this.length;
    if (e % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for (let t = 0; t < e; t += 2) Ee(this, t, t + 1);
    return this;
  }, 'swap16');
  f.prototype.swap32 = a(function () {
    let e = this.length;
    if (e % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for (let t = 0; t < e; t += 4) Ee(this, t, t + 3), Ee(this, t + 1, t + 2);
    return this;
  }, 'swap32');
  f.prototype.swap64 = a(function () {
    let e = this.length;
    if (e % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for (let t = 0; t < e; t += 8) Ee(this, t, t + 7), Ee(this, t + 1, t + 6), Ee(this, t + 2, t + 5), Ee(this, t + 3, t + 4);
    return this;
  }, 'swap64');
  f.prototype.toString = a(function () {
    let e = this.length;
    return e === 0 ? '' : arguments.length === 0 ? On(this, 0, e) : xo.apply(this, arguments);
  }, 'toString');
  f.prototype.toLocaleString = f.prototype.toString;
  f.prototype.equals = a(function (e) {
    if (!f.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
    return this === e ? true : f.compare(this, e) === 0;
  }, 'equals');
  f.prototype.inspect = a(function () {
    let e = '',
      t = Le.INSPECT_MAX_BYTES;
    return (
      (e = this.toString('hex', 0, t)
        .replace(/(.{2})/g, '$1 ')
        .trim()),
      this.length > t && (e += ' ... '),
      '<Buffer ' + e + '>'
    );
  }, 'inspect');
  Bn && (f.prototype[Bn] = f.prototype.inspect);
  f.prototype.compare = a(function (e, t, n, i, s) {
    if ((ue(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), !f.isBuffer(e))) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
    if ((t === undefined && (t = 0), n === undefined && (n = e ? e.length : 0), i === undefined && (i = 0), s === undefined && (s = this.length), t < 0 || n > e.length || i < 0 || s > this.length)) throw new RangeError('out of range index');
    if (i >= s && t >= n) return 0;
    if (i >= s) return -1;
    if (t >= n) return 1;
    if (((t >>>= 0), (n >>>= 0), (i >>>= 0), (s >>>= 0), this === e)) return 0;
    let o = s - i,
      u = n - t,
      c = Math.min(o, u),
      h = this.slice(i, s),
      l = e.slice(t, n);
    for (let d = 0; d < c; ++d)
      if (h[d] !== l[d]) {
        (o = h[d]), (u = l[d]);
        break;
      }
    return o < u ? -1 : u < o ? 1 : 0;
  }, 'compare');
  function Un(r, e, t, n, i) {
    if (r.length === 0) return -1;
    if ((typeof t == 'string' ? ((n = t), (t = 0)) : t > 2147483647 ? (t = 2147483647) : t < -2147483648 && (t = -2147483648), (t = +t), Ot(t) && (t = i ? 0 : r.length - 1), t < 0 && (t = r.length + t), t >= r.length)) {
      if (i) return -1;
      t = r.length - 1;
    } else if (t < 0)
      if (i) t = 0;
      else return -1;
    if ((typeof e == 'string' && (e = f.from(e, n)), f.isBuffer(e))) return e.length === 0 ? -1 : Ln(r, e, t, n, i);
    if (typeof e == 'number') return (e = e & 255), typeof Uint8Array.prototype.indexOf == 'function' ? (i ? Uint8Array.prototype.indexOf.call(r, e, t) : Uint8Array.prototype.lastIndexOf.call(r, e, t)) : Ln(r, [e], t, n, i);
    throw new TypeError('val must be string, number or Buffer');
  }
  a(Un, 'bidirectionalIndexOf');
  function Ln(r, e, t, n, i) {
    let s = 1,
      o = r.length,
      u = e.length;
    if (n !== undefined && ((n = String(n).toLowerCase()), n === 'ucs2' || n === 'ucs-2' || n === 'utf16le' || n === 'utf-16le')) {
      if (r.length < 2 || e.length < 2) return -1;
      (s = 2), (o /= 2), (u /= 2), (t /= 2);
    }
    function c(l, d) {
      return s === 1 ? l[d] : l.readUInt16BE(d * s);
    }
    a(c, 'read');
    let h;
    if (i) {
      let l = -1;
      for (h = t; h < o; h++)
        if (c(r, h) === c(e, l === -1 ? 0 : h - l)) {
          if ((l === -1 && (l = h), h - l + 1 === u)) return l * s;
        } else l !== -1 && (h -= h - l), (l = -1);
    } else
      for (t + u > o && (t = o - u), h = t; h >= 0; h--) {
        let l = true;
        for (let d = 0; d < u; d++)
          if (c(r, h + d) !== c(e, d)) {
            l = false;
            break;
          }
        if (l) return h;
      }
    return -1;
  }
  a(Ln, 'arrayIndexOf');
  f.prototype.includes = a(function (e, t, n) {
    return this.indexOf(e, t, n) !== -1;
  }, 'includes');
  f.prototype.indexOf = a(function (e, t, n) {
    return Un(this, e, t, n, true);
  }, 'indexOf');
  f.prototype.lastIndexOf = a(function (e, t, n) {
    return Un(this, e, t, n, false);
  }, 'lastIndexOf');
  function vo(r, e, t, n) {
    t = Number(t) || 0;
    let i = r.length - t;
    n ? ((n = Number(n)), n > i && (n = i)) : (n = i);
    let s = e.length;
    n > s / 2 && (n = s / 2);
    let o;
    for (o = 0; o < n; ++o) {
      let u = parseInt(e.substr(o * 2, 2), 16);
      if (Ot(u)) return o;
      r[t + o] = u;
    }
    return o;
  }
  a(vo, 'hexWrite');
  function Eo(r, e, t, n) {
    return st(Mt(e, r.length - t), r, t, n);
  }
  a(Eo, 'utf8Write');
  function _o(r, e, t, n) {
    return st(ko(e), r, t, n);
  }
  a(_o, 'asciiWrite');
  function Ao(r, e, t, n) {
    return st(Gn(e), r, t, n);
  }
  a(Ao, 'base64Write');
  function Co(r, e, t, n) {
    return st(Uo(e, r.length - t), r, t, n);
  }
  a(Co, 'ucs2Write');
  f.prototype.write = a(function (e, t, n, i) {
    if (t === undefined) (i = 'utf8'), (n = this.length), (t = 0);
    else if (n === undefined && typeof t == 'string') (i = t), (n = this.length), (t = 0);
    else if (isFinite(t)) (t = t >>> 0), isFinite(n) ? ((n = n >>> 0), i === undefined && (i = 'utf8')) : ((i = n), (n = undefined));
    else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    let s = this.length - t;
    if (((n === undefined || n > s) && (n = s), (e.length > 0 && (n < 0 || t < 0)) || t > this.length)) throw new RangeError('Attempt to write outside buffer bounds');
    i || (i = 'utf8');
    let o = false;
    for (;;)
      switch (i) {
        case 'hex':
          return vo(this, e, t, n);
        case 'utf8':
        case 'utf-8':
          return Eo(this, e, t, n);
        case 'ascii':
        case 'latin1':
        case 'binary':
          return _o(this, e, t, n);
        case 'base64':
          return Ao(this, e, t, n);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return Co(this, e, t, n);
        default:
          if (o) throw new TypeError('Unknown encoding: ' + i);
          (i = ('' + i).toLowerCase()), (o = true);
      }
  }, 'write');
  f.prototype.toJSON = a(function () {
    return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
  }, 'toJSON');
  function To(r, e, t) {
    return e === 0 && t === r.length ? Lt.fromByteArray(r) : Lt.fromByteArray(r.slice(e, t));
  }
  a(To, 'base64Slice');
  function On(r, e, t) {
    t = Math.min(r.length, t);
    let n = [],
      i = e;
    for (; i < t; ) {
      let s = r[i],
        o = null,
        u = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
      if (i + u <= t) {
        let c, h, l, d;
        switch (u) {
          case 1:
            s < 128 && (o = s);
            break;
          case 2:
            (c = r[i + 1]), (c & 192) === 128 && ((d = ((s & 31) << 6) | (c & 63)), d > 127 && (o = d));
            break;
          case 3:
            (c = r[i + 1]), (h = r[i + 2]), (c & 192) === 128 && (h & 192) === 128 && ((d = ((s & 15) << 12) | ((c & 63) << 6) | (h & 63)), d > 2047 && (d < 55296 || d > 57343) && (o = d));
            break;
          case 4:
            (c = r[i + 1]), (h = r[i + 2]), (l = r[i + 3]), (c & 192) === 128 && (h & 192) === 128 && (l & 192) === 128 && ((d = ((s & 15) << 18) | ((c & 63) << 12) | ((h & 63) << 6) | (l & 63)), d > 65535 && d < 1114112 && (o = d));
        }
      }
      o === null ? ((o = 65533), (u = 1)) : o > 65535 && ((o -= 65536), n.push(((o >>> 10) & 1023) | 55296), (o = 56320 | (o & 1023))), n.push(o), (i += u);
    }
    return Io(n);
  }
  a(On, 'utf8Slice');
  var Rn = 4096;
  function Io(r) {
    let e = r.length;
    if (e <= Rn) return String.fromCharCode.apply(String, r);
    let t = '',
      n = 0;
    for (; n < e; ) t += String.fromCharCode.apply(String, r.slice(n, (n += Rn)));
    return t;
  }
  a(Io, 'decodeCodePointsArray');
  function Po(r, e, t) {
    let n = '';
    t = Math.min(r.length, t);
    for (let i = e; i < t; ++i) n += String.fromCharCode(r[i] & 127);
    return n;
  }
  a(Po, 'asciiSlice');
  function Bo(r, e, t) {
    let n = '';
    t = Math.min(r.length, t);
    for (let i = e; i < t; ++i) n += String.fromCharCode(r[i]);
    return n;
  }
  a(Bo, 'latin1Slice');
  function Lo(r, e, t) {
    let n = r.length;
    (!e || e < 0) && (e = 0), (!t || t < 0 || t > n) && (t = n);
    let i = '';
    for (let s = e; s < t; ++s) i += Oo[r[s]];
    return i;
  }
  a(Lo, 'hexSlice');
  function Ro(r, e, t) {
    let n = r.slice(e, t),
      i = '';
    for (let s = 0; s < n.length - 1; s += 2) i += String.fromCharCode(n[s] + n[s + 1] * 256);
    return i;
  }
  a(Ro, 'utf16leSlice');
  f.prototype.slice = a(function (e, t) {
    let n = this.length;
    (e = ~~e), (t = t === undefined ? n : ~~t), e < 0 ? ((e += n), e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? ((t += n), t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
    let i = this.subarray(e, t);
    return Object.setPrototypeOf(i, f.prototype), i;
  }, 'slice');
  function q(r, e, t) {
    if (r % 1 !== 0 || r < 0) throw new RangeError('offset is not uint');
    if (r + e > t) throw new RangeError('Trying to access beyond buffer length');
  }
  a(q, 'checkOffset');
  f.prototype.readUintLE = f.prototype.readUIntLE = a(function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || q(e, t, this.length);
    let i = this[e],
      s = 1,
      o = 0;
    for (; ++o < t && (s *= 256); ) i += this[e + o] * s;
    return i;
  }, 'readUIntLE');
  f.prototype.readUintBE = f.prototype.readUIntBE = a(function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || q(e, t, this.length);
    let i = this[e + --t],
      s = 1;
    for (; t > 0 && (s *= 256); ) i += this[e + --t] * s;
    return i;
  }, 'readUIntBE');
  f.prototype.readUint8 = f.prototype.readUInt8 = a(function (e, t) {
    return (e = e >>> 0), t || q(e, 1, this.length), this[e];
  }, 'readUInt8');
  f.prototype.readUint16LE = f.prototype.readUInt16LE = a(function (e, t) {
    return (e = e >>> 0), t || q(e, 2, this.length), this[e] | (this[e + 1] << 8);
  }, 'readUInt16LE');
  f.prototype.readUint16BE = f.prototype.readUInt16BE = a(function (e, t) {
    return (e = e >>> 0), t || q(e, 2, this.length), (this[e] << 8) | this[e + 1];
  }, 'readUInt16BE');
  f.prototype.readUint32LE = f.prototype.readUInt32LE = a(function (e, t) {
    return (e = e >>> 0), t || q(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + this[e + 3] * 16777216;
  }, 'readUInt32LE');
  f.prototype.readUint32BE = f.prototype.readUInt32BE = a(function (e, t) {
    return (e = e >>> 0), t || q(e, 4, this.length), this[e] * 16777216 + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
  }, 'readUInt32BE');
  f.prototype.readBigUInt64LE = ge(
    a(function (e) {
      (e = e >>> 0), Be(e, 'offset');
      let t = this[e],
        n = this[e + 7];
      (t === undefined || n === undefined) && We(e, this.length - 8);
      let i = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
        s = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
      return BigInt(i) + (BigInt(s) << BigInt(32));
    }, 'readBigUInt64LE'),
  );
  f.prototype.readBigUInt64BE = ge(
    a(function (e) {
      (e = e >>> 0), Be(e, 'offset');
      let t = this[e],
        n = this[e + 7];
      (t === undefined || n === undefined) && We(e, this.length - 8);
      let i = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
        s = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
      return (BigInt(i) << BigInt(32)) + BigInt(s);
    }, 'readBigUInt64BE'),
  );
  f.prototype.readIntLE = a(function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || q(e, t, this.length);
    let i = this[e],
      s = 1,
      o = 0;
    for (; ++o < t && (s *= 256); ) i += this[e + o] * s;
    return (s *= 128), i >= s && (i -= Math.pow(2, 8 * t)), i;
  }, 'readIntLE');
  f.prototype.readIntBE = a(function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || q(e, t, this.length);
    let i = t,
      s = 1,
      o = this[e + --i];
    for (; i > 0 && (s *= 256); ) o += this[e + --i] * s;
    return (s *= 128), o >= s && (o -= Math.pow(2, 8 * t)), o;
  }, 'readIntBE');
  f.prototype.readInt8 = a(function (e, t) {
    return (e = e >>> 0), t || q(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
  }, 'readInt8');
  f.prototype.readInt16LE = a(function (e, t) {
    (e = e >>> 0), t || q(e, 2, this.length);
    let n = this[e] | (this[e + 1] << 8);
    return n & 32768 ? n | 4294901760 : n;
  }, 'readInt16LE');
  f.prototype.readInt16BE = a(function (e, t) {
    (e = e >>> 0), t || q(e, 2, this.length);
    let n = this[e + 1] | (this[e] << 8);
    return n & 32768 ? n | 4294901760 : n;
  }, 'readInt16BE');
  f.prototype.readInt32LE = a(function (e, t) {
    return (e = e >>> 0), t || q(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
  }, 'readInt32LE');
  f.prototype.readInt32BE = a(function (e, t) {
    return (e = e >>> 0), t || q(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
  }, 'readInt32BE');
  f.prototype.readBigInt64LE = ge(
    a(function (e) {
      (e = e >>> 0), Be(e, 'offset');
      let t = this[e],
        n = this[e + 7];
      (t === undefined || n === undefined) && We(e, this.length - 8);
      let i = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
      return (BigInt(i) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
    }, 'readBigInt64LE'),
  );
  f.prototype.readBigInt64BE = ge(
    a(function (e) {
      (e = e >>> 0), Be(e, 'offset');
      let t = this[e],
        n = this[e + 7];
      (t === undefined || n === undefined) && We(e, this.length - 8);
      let i = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
      return (BigInt(i) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
    }, 'readBigInt64BE'),
  );
  f.prototype.readFloatLE = a(function (e, t) {
    return (e = e >>> 0), t || q(e, 4, this.length), Pe.read(this, e, true, 23, 4);
  }, 'readFloatLE');
  f.prototype.readFloatBE = a(function (e, t) {
    return (e = e >>> 0), t || q(e, 4, this.length), Pe.read(this, e, false, 23, 4);
  }, 'readFloatBE');
  f.prototype.readDoubleLE = a(function (e, t) {
    return (e = e >>> 0), t || q(e, 8, this.length), Pe.read(this, e, true, 52, 8);
  }, 'readDoubleLE');
  f.prototype.readDoubleBE = a(function (e, t) {
    return (e = e >>> 0), t || q(e, 8, this.length), Pe.read(this, e, false, 52, 8);
  }, 'readDoubleBE');
  function Y(r, e, t, n, i, s) {
    if (!f.isBuffer(r)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e > i || e < s) throw new RangeError('"value" argument is out of bounds');
    if (t + n > r.length) throw new RangeError('Index out of range');
  }
  a(Y, 'checkInt');
  f.prototype.writeUintLE = f.prototype.writeUIntLE = a(function (e, t, n, i) {
    if (((e = +e), (t = t >>> 0), (n = n >>> 0), !i)) {
      let u = Math.pow(2, 8 * n) - 1;
      Y(this, e, t, n, u, 0);
    }
    let s = 1,
      o = 0;
    for (this[t] = e & 255; ++o < n && (s *= 256); ) this[t + o] = (e / s) & 255;
    return t + n;
  }, 'writeUIntLE');
  f.prototype.writeUintBE = f.prototype.writeUIntBE = a(function (e, t, n, i) {
    if (((e = +e), (t = t >>> 0), (n = n >>> 0), !i)) {
      let u = Math.pow(2, 8 * n) - 1;
      Y(this, e, t, n, u, 0);
    }
    let s = n - 1,
      o = 1;
    for (this[t + s] = e & 255; --s >= 0 && (o *= 256); ) this[t + s] = (e / o) & 255;
    return t + n;
  }, 'writeUIntBE');
  f.prototype.writeUint8 = f.prototype.writeUInt8 = a(function (e, t, n) {
    return (e = +e), (t = t >>> 0), n || Y(this, e, t, 1, 255, 0), (this[t] = e & 255), t + 1;
  }, 'writeUInt8');
  f.prototype.writeUint16LE = f.prototype.writeUInt16LE = a(function (e, t, n) {
    return (e = +e), (t = t >>> 0), n || Y(this, e, t, 2, 65535, 0), (this[t] = e & 255), (this[t + 1] = e >>> 8), t + 2;
  }, 'writeUInt16LE');
  f.prototype.writeUint16BE = f.prototype.writeUInt16BE = a(function (e, t, n) {
    return (e = +e), (t = t >>> 0), n || Y(this, e, t, 2, 65535, 0), (this[t] = e >>> 8), (this[t + 1] = e & 255), t + 2;
  }, 'writeUInt16BE');
  f.prototype.writeUint32LE = f.prototype.writeUInt32LE = a(function (e, t, n) {
    return (e = +e), (t = t >>> 0), n || Y(this, e, t, 4, 4294967295, 0), (this[t + 3] = e >>> 24), (this[t + 2] = e >>> 16), (this[t + 1] = e >>> 8), (this[t] = e & 255), t + 4;
  }, 'writeUInt32LE');
  f.prototype.writeUint32BE = f.prototype.writeUInt32BE = a(function (e, t, n) {
    return (e = +e), (t = t >>> 0), n || Y(this, e, t, 4, 4294967295, 0), (this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = e & 255), t + 4;
  }, 'writeUInt32BE');
  function Nn(r, e, t, n, i) {
    Hn(e, n, i, r, t, 7);
    let s = Number(e & BigInt(4294967295));
    (r[t++] = s), (s = s >> 8), (r[t++] = s), (s = s >> 8), (r[t++] = s), (s = s >> 8), (r[t++] = s);
    let o = Number((e >> BigInt(32)) & BigInt(4294967295));
    return (r[t++] = o), (o = o >> 8), (r[t++] = o), (o = o >> 8), (r[t++] = o), (o = o >> 8), (r[t++] = o), t;
  }
  a(Nn, 'wrtBigUInt64LE');
  function qn(r, e, t, n, i) {
    Hn(e, n, i, r, t, 7);
    let s = Number(e & BigInt(4294967295));
    (r[t + 7] = s), (s = s >> 8), (r[t + 6] = s), (s = s >> 8), (r[t + 5] = s), (s = s >> 8), (r[t + 4] = s);
    let o = Number((e >> BigInt(32)) & BigInt(4294967295));
    return (r[t + 3] = o), (o = o >> 8), (r[t + 2] = o), (o = o >> 8), (r[t + 1] = o), (o = o >> 8), (r[t] = o), t + 8;
  }
  a(qn, 'wrtBigUInt64BE');
  f.prototype.writeBigUInt64LE = ge(
    a(function (e, t = 0) {
      return Nn(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
    }, 'writeBigUInt64LE'),
  );
  f.prototype.writeBigUInt64BE = ge(
    a(function (e, t = 0) {
      return qn(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
    }, 'writeBigUInt64BE'),
  );
  f.prototype.writeIntLE = a(function (e, t, n, i) {
    if (((e = +e), (t = t >>> 0), !i)) {
      let c = Math.pow(2, 8 * n - 1);
      Y(this, e, t, n, c - 1, -c);
    }
    let s = 0,
      o = 1,
      u = 0;
    for (this[t] = e & 255; ++s < n && (o *= 256); ) e < 0 && u === 0 && this[t + s - 1] !== 0 && (u = 1), (this[t + s] = (((e / o) >> 0) - u) & 255);
    return t + n;
  }, 'writeIntLE');
  f.prototype.writeIntBE = a(function (e, t, n, i) {
    if (((e = +e), (t = t >>> 0), !i)) {
      let c = Math.pow(2, 8 * n - 1);
      Y(this, e, t, n, c - 1, -c);
    }
    let s = n - 1,
      o = 1,
      u = 0;
    for (this[t + s] = e & 255; --s >= 0 && (o *= 256); ) e < 0 && u === 0 && this[t + s + 1] !== 0 && (u = 1), (this[t + s] = (((e / o) >> 0) - u) & 255);
    return t + n;
  }, 'writeIntBE');
  f.prototype.writeInt8 = a(function (e, t, n) {
    return (e = +e), (t = t >>> 0), n || Y(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), (this[t] = e & 255), t + 1;
  }, 'writeInt8');
  f.prototype.writeInt16LE = a(function (e, t, n) {
    return (e = +e), (t = t >>> 0), n || Y(this, e, t, 2, 32767, -32768), (this[t] = e & 255), (this[t + 1] = e >>> 8), t + 2;
  }, 'writeInt16LE');
  f.prototype.writeInt16BE = a(function (e, t, n) {
    return (e = +e), (t = t >>> 0), n || Y(this, e, t, 2, 32767, -32768), (this[t] = e >>> 8), (this[t + 1] = e & 255), t + 2;
  }, 'writeInt16BE');
  f.prototype.writeInt32LE = a(function (e, t, n) {
    return (e = +e), (t = t >>> 0), n || Y(this, e, t, 4, 2147483647, -2147483648), (this[t] = e & 255), (this[t + 1] = e >>> 8), (this[t + 2] = e >>> 16), (this[t + 3] = e >>> 24), t + 4;
  }, 'writeInt32LE');
  f.prototype.writeInt32BE = a(function (e, t, n) {
    return (e = +e), (t = t >>> 0), n || Y(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), (this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = e & 255), t + 4;
  }, 'writeInt32BE');
  f.prototype.writeBigInt64LE = ge(
    a(function (e, t = 0) {
      return Nn(this, e, t, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
    }, 'writeBigInt64LE'),
  );
  f.prototype.writeBigInt64BE = ge(
    a(function (e, t = 0) {
      return qn(this, e, t, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
    }, 'writeBigInt64BE'),
  );
  function Qn(r, e, t, n, i, s) {
    if (t + n > r.length) throw new RangeError('Index out of range');
    if (t < 0) throw new RangeError('Index out of range');
  }
  a(Qn, 'checkIEEE754');
  function Wn(r, e, t, n, i) {
    return (e = +e), (t = t >>> 0), i || Qn(r, e, t, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000), Pe.write(r, e, t, n, 23, 4), t + 4;
  }
  a(Wn, 'writeFloat');
  f.prototype.writeFloatLE = a(function (e, t, n) {
    return Wn(this, e, t, true, n);
  }, 'writeFloatLE');
  f.prototype.writeFloatBE = a(function (e, t, n) {
    return Wn(this, e, t, false, n);
  }, 'writeFloatBE');
  function jn(r, e, t, n, i) {
    return (e = +e), (t = t >>> 0), i || Qn(r, e, t, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), Pe.write(r, e, t, n, 52, 8), t + 8;
  }
  a(jn, 'writeDouble');
  f.prototype.writeDoubleLE = a(function (e, t, n) {
    return jn(this, e, t, true, n);
  }, 'writeDoubleLE');
  f.prototype.writeDoubleBE = a(function (e, t, n) {
    return jn(this, e, t, false, n);
  }, 'writeDoubleBE');
  f.prototype.copy = a(function (e, t, n, i) {
    if (!f.isBuffer(e)) throw new TypeError('argument should be a Buffer');
    if ((n || (n = 0), !i && i !== 0 && (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || e.length === 0 || this.length === 0)) return 0;
    if (t < 0) throw new RangeError('targetStart out of bounds');
    if (n < 0 || n >= this.length) throw new RangeError('Index out of range');
    if (i < 0) throw new RangeError('sourceEnd out of bounds');
    i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
    let s = i - n;
    return this === e && typeof Uint8Array.prototype.copyWithin == 'function' ? this.copyWithin(t, n, i) : Uint8Array.prototype.set.call(e, this.subarray(n, i), t), s;
  }, 'copy');
  f.prototype.fill = a(function (e, t, n, i) {
    if (typeof e == 'string') {
      if ((typeof t == 'string' ? ((i = t), (t = 0), (n = this.length)) : typeof n == 'string' && ((i = n), (n = this.length)), i !== undefined && typeof i != 'string')) throw new TypeError('encoding must be a string');
      if (typeof i == 'string' && !f.isEncoding(i)) throw new TypeError('Unknown encoding: ' + i);
      if (e.length === 1) {
        let o = e.charCodeAt(0);
        ((i === 'utf8' && o < 128) || i === 'latin1') && (e = o);
      }
    } else typeof e == 'number' ? (e = e & 255) : typeof e == 'boolean' && (e = Number(e));
    if (t < 0 || this.length < t || this.length < n) throw new RangeError('Out of range index');
    if (n <= t) return this;
    (t = t >>> 0), (n = n === undefined ? this.length : n >>> 0), e || (e = 0);
    let s;
    if (typeof e == 'number') for (s = t; s < n; ++s) this[s] = e;
    else {
      let o = f.isBuffer(e) ? e : f.from(e, i),
        u = o.length;
      if (u === 0) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
      for (s = 0; s < n - t; ++s) this[s + t] = o[s % u];
    }
    return this;
  }, 'fill');
  var Ie = {};
  function Ut(r, e, t) {
    var n;
    Ie[r] =
      ((n = class extends t {
        constructor() {
          super(),
            Object.defineProperty(this, 'message', {
              value: e.apply(this, arguments),
              writable: true,
              configurable: true,
            }),
            (this.name = `${this.name} [${r}]`),
            this.stack,
            delete this.name;
        }
        get code() {
          return r;
        }
        set code(s) {
          Object.defineProperty(this, 'code', {
            configurable: true,
            enumerable: true,
            value: s,
            writable: true,
          });
        }
        toString() {
          return `${this.name} [${r}]: ${this.message}`;
        }
      }),
      a(n, 'NodeError'),
      n);
  }
  a(Ut, 'E');
  Ut(
    'ERR_BUFFER_OUT_OF_BOUNDS',
    function (r) {
      return r ? `${r} is outside of buffer bounds` : 'Attempt to access memory outside buffer bounds';
    },
    RangeError,
  );
  Ut(
    'ERR_INVALID_ARG_TYPE',
    function (r, e) {
      return `The "${r}" argument must be of type number. Received type ${typeof e}`;
    },
    TypeError,
  );
  Ut(
    'ERR_OUT_OF_RANGE',
    function (r, e, t) {
      let n = `The value of "${r}" is out of range.`,
        i = t;
      return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? (i = Fn(String(t))) : typeof t == 'bigint' && ((i = String(t)), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (i = Fn(i)), (i += 'n')), (n += ` It must be ${e}. Received ${i}`), n;
    },
    RangeError,
  );
  function Fn(r) {
    let e = '',
      t = r.length,
      n = r[0] === '-' ? 1 : 0;
    for (; t >= n + 4; t -= 3) e = `_${r.slice(t - 3, t)}${e}`;
    return `${r.slice(0, t)}${e}`;
  }
  a(Fn, 'addNumericalSeparator');
  function Fo(r, e, t) {
    Be(e, 'offset'), (r[e] === undefined || r[e + t] === undefined) && We(e, r.length - (t + 1));
  }
  a(Fo, 'checkBounds');
  function Hn(r, e, t, n, i, s) {
    if (r > t || r < e) {
      let o = typeof e == 'bigint' ? 'n' : '',
        u;
      throw (s > 3 ? (e === 0 || e === BigInt(0) ? (u = `>= 0${o} and < 2${o} ** ${(s + 1) * 8}${o}`) : (u = `>= -(2${o} ** ${(s + 1) * 8 - 1}${o}) and < 2 ** ${(s + 1) * 8 - 1}${o}`)) : (u = `>= ${e}${o} and <= ${t}${o}`), new Ie.ERR_OUT_OF_RANGE('value', u, r));
    }
    Fo(n, i, s);
  }
  a(Hn, 'checkIntBI');
  function Be(r, e) {
    if (typeof r != 'number') throw new Ie.ERR_INVALID_ARG_TYPE(e, 'number', r);
  }
  a(Be, 'validateNumber');
  function We(r, e, t) {
    throw Math.floor(r) !== r ? (Be(r, t), new Ie.ERR_OUT_OF_RANGE(t || 'offset', 'an integer', r)) : e < 0 ? new Ie.ERR_BUFFER_OUT_OF_BOUNDS() : new Ie.ERR_OUT_OF_RANGE(t || 'offset', `>= ${t ? 1 : 0} and <= ${e}`, r);
  }
  a(We, 'boundsError');
  var Mo = /[^+/0-9A-Za-z-_]/g;
  function Do(r) {
    if (((r = r.split('=')[0]), (r = r.trim().replace(Mo, '')), r.length < 2)) return '';
    for (; r.length % 4 !== 0; ) r = r + '=';
    return r;
  }
  a(Do, 'base64clean');
  function Mt(r, e) {
    e = e || 1 / 0;
    let t,
      n = r.length,
      i = null,
      s = [];
    for (let o = 0; o < n; ++o) {
      if (((t = r.charCodeAt(o)), t > 55295 && t < 57344)) {
        if (!i) {
          if (t > 56319) {
            (e -= 3) > -1 && s.push(239, 191, 189);
            continue;
          } else if (o + 1 === n) {
            (e -= 3) > -1 && s.push(239, 191, 189);
            continue;
          }
          i = t;
          continue;
        }
        if (t < 56320) {
          (e -= 3) > -1 && s.push(239, 191, 189), (i = t);
          continue;
        }
        t = (((i - 55296) << 10) | (t - 56320)) + 65536;
      } else i && (e -= 3) > -1 && s.push(239, 191, 189);
      if (((i = null), t < 128)) {
        if ((e -= 1) < 0) break;
        s.push(t);
      } else if (t < 2048) {
        if ((e -= 2) < 0) break;
        s.push((t >> 6) | 192, (t & 63) | 128);
      } else if (t < 65536) {
        if ((e -= 3) < 0) break;
        s.push((t >> 12) | 224, ((t >> 6) & 63) | 128, (t & 63) | 128);
      } else if (t < 1114112) {
        if ((e -= 4) < 0) break;
        s.push((t >> 18) | 240, ((t >> 12) & 63) | 128, ((t >> 6) & 63) | 128, (t & 63) | 128);
      } else throw new Error('Invalid code point');
    }
    return s;
  }
  a(Mt, 'utf8ToBytes');
  function ko(r) {
    let e = [];
    for (let t = 0; t < r.length; ++t) e.push(r.charCodeAt(t) & 255);
    return e;
  }
  a(ko, 'asciiToBytes');
  function Uo(r, e) {
    let t,
      n,
      i,
      s = [];
    for (let o = 0; o < r.length && !((e -= 2) < 0); ++o) (t = r.charCodeAt(o)), (n = t >> 8), (i = t % 256), s.push(i), s.push(n);
    return s;
  }
  a(Uo, 'utf16leToBytes');
  function Gn(r) {
    return Lt.toByteArray(Do(r));
  }
  a(Gn, 'base64ToBytes');
  function st(r, e, t, n) {
    let i;
    for (i = 0; i < n && !(i + t >= e.length || i >= r.length); ++i) e[i + t] = r[i];
    return i;
  }
  a(st, 'blitBuffer');
  function ue(r, e) {
    return r instanceof e || (r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === e.name);
  }
  a(ue, 'isInstance');
  function Ot(r) {
    return r !== r;
  }
  a(Ot, 'numberIsNaN');
  var Oo = (function () {
    let r = '0123456789abcdef',
      e = new Array(256);
    for (let t = 0; t < 16; ++t) {
      let n = t * 16;
      for (let i = 0; i < 16; ++i) e[n + i] = r[t] + r[i];
    }
    return e;
  })();
  function ge(r) {
    return typeof BigInt > 'u' ? No : r;
  }
  a(ge, 'defineBigIntMethod');
  function No() {
    throw new Error('BigInt not supported');
  }
  a(No, 'BufferBigIntNotDefined');
});
var S;
var x;
var v;
var g;
var y;
var m;
var p = z(() => {
  (S = globalThis), (x = globalThis.setImmediate ?? ((r) => setTimeout(r, 0))), (v = globalThis.clearImmediate ?? ((r) => clearTimeout(r))), (g = globalThis.crypto ?? {});
  g.subtle ?? (g.subtle = {});
  (y = typeof globalThis.Buffer == 'function' && typeof globalThis.Buffer.allocUnsafe == 'function' ? globalThis.Buffer : $n().Buffer), (m = globalThis.process ?? {});
  m.env ?? (m.env = {});
  try {
    m.nextTick(() => {});
  } catch {
    let e = Promise.resolve();
    m.nextTick = e.then.bind(e);
  }
});
var we = I((Xc, Nt) => {
  p();
  var Re = typeof Reflect == 'object' ? Reflect : null,
    Vn =
      Re && typeof Re.apply == 'function'
        ? Re.apply
        : a(function (e, t, n) {
            return Function.prototype.apply.call(e, t, n);
          }, 'ReflectApply'),
    ot;
  Re && typeof Re.ownKeys == 'function'
    ? (ot = Re.ownKeys)
    : Object.getOwnPropertySymbols
      ? (ot = a(function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }, 'ReflectOwnKeys'))
      : (ot = a(function (e) {
          return Object.getOwnPropertyNames(e);
        }, 'ReflectOwnKeys'));
  function qo(r) {
    console && console.warn && console.warn(r);
  }
  a(qo, 'ProcessEmitWarning');
  var zn =
    Number.isNaN ||
    a(function (e) {
      return e !== e;
    }, 'NumberIsNaN');
  function L() {
    L.init.call(this);
  }
  a(L, 'EventEmitter');
  Nt.exports = L;
  Nt.exports.once = Ho;
  L.EventEmitter = L;
  L.prototype._events = undefined;
  L.prototype._eventsCount = 0;
  L.prototype._maxListeners = undefined;
  var Kn = 10;
  function at(r) {
    if (typeof r != 'function') throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
  }
  a(at, 'checkListener');
  Object.defineProperty(L, 'defaultMaxListeners', {
    enumerable: true,
    get: a(function () {
      return Kn;
    }, 'get'),
    set: a(function (r) {
      if (typeof r != 'number' || r < 0 || zn(r)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + r + '.');
      Kn = r;
    }, 'set'),
  });
  L.init = function () {
    (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) && ((this._events = Object.create(null)), (this._eventsCount = 0)), (this._maxListeners = this._maxListeners || undefined);
  };
  L.prototype.setMaxListeners = a(function (e) {
    if (typeof e != 'number' || e < 0 || zn(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + '.');
    return (this._maxListeners = e), this;
  }, 'setMaxListeners');
  function Yn(r) {
    return r._maxListeners === undefined ? L.defaultMaxListeners : r._maxListeners;
  }
  a(Yn, '_getMaxListeners');
  L.prototype.getMaxListeners = a(function () {
    return Yn(this);
  }, 'getMaxListeners');
  L.prototype.emit = a(function (e) {
    for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
    var i = e === 'error',
      s = this._events;
    if (s !== undefined) i = i && s.error === undefined;
    else if (!i) return false;
    if (i) {
      var o;
      if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
      var u = new Error('Unhandled error.' + (o ? ' (' + o.message + ')' : ''));
      throw ((u.context = o), u);
    }
    var c = s[e];
    if (c === undefined) return false;
    if (typeof c == 'function') Vn(c, this, t);
    else for (var h = c.length, l = ti(c, h), n = 0; n < h; ++n) Vn(l[n], this, t);
    return true;
  }, 'emit');
  function Zn(r, e, t, n) {
    var i, s, o;
    if ((at(t), (s = r._events), s === undefined ? ((s = r._events = Object.create(null)), (r._eventsCount = 0)) : (s.newListener !== undefined && (r.emit('newListener', e, t.listener ? t.listener : t), (s = r._events)), (o = s[e])), o === undefined)) (o = s[e] = t), ++r._eventsCount;
    else if ((typeof o == 'function' ? (o = s[e] = n ? [t, o] : [o, t]) : n ? o.unshift(t) : o.push(t), (i = Yn(r)), i > 0 && o.length > i && !o.warned)) {
      o.warned = true;
      var u = new Error('Possible EventEmitter memory leak detected. ' + o.length + ' ' + String(e) + ' listeners added. Use emitter.setMaxListeners() to increase limit');
      (u.name = 'MaxListenersExceededWarning'), (u.emitter = r), (u.type = e), (u.count = o.length), qo(u);
    }
    return r;
  }
  a(Zn, '_addListener');
  L.prototype.addListener = a(function (e, t) {
    return Zn(this, e, t, false);
  }, 'addListener');
  L.prototype.on = L.prototype.addListener;
  L.prototype.prependListener = a(function (e, t) {
    return Zn(this, e, t, true);
  }, 'prependListener');
  function Qo() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), (this.fired = true), arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  a(Qo, 'onceWrapper');
  function Jn(r, e, t) {
    var n = {
        fired: false,
        wrapFn: undefined,
        target: r,
        type: e,
        listener: t,
      },
      i = Qo.bind(n);
    return (i.listener = t), (n.wrapFn = i), i;
  }
  a(Jn, '_onceWrap');
  L.prototype.once = a(function (e, t) {
    return at(t), this.on(e, Jn(this, e, t)), this;
  }, 'once');
  L.prototype.prependOnceListener = a(function (e, t) {
    return at(t), this.prependListener(e, Jn(this, e, t)), this;
  }, 'prependOnceListener');
  L.prototype.removeListener = a(function (e, t) {
    var n, i, s, o, u;
    if ((at(t), (i = this._events), i === undefined)) return this;
    if (((n = i[e]), n === undefined)) return this;
    if (n === t || n.listener === t) --this._eventsCount === 0 ? (this._events = Object.create(null)) : (delete i[e], i.removeListener && this.emit('removeListener', e, n.listener || t));
    else if (typeof n != 'function') {
      for (s = -1, o = n.length - 1; o >= 0; o--)
        if (n[o] === t || n[o].listener === t) {
          (u = n[o].listener), (s = o);
          break;
        }
      if (s < 0) return this;
      s === 0 ? n.shift() : Wo(n, s), n.length === 1 && (i[e] = n[0]), i.removeListener !== undefined && this.emit('removeListener', e, u || t);
    }
    return this;
  }, 'removeListener');
  L.prototype.off = L.prototype.removeListener;
  L.prototype.removeAllListeners = a(function (e) {
    var t, n, i;
    if (((n = this._events), n === undefined)) return this;
    if (n.removeListener === undefined) return arguments.length === 0 ? ((this._events = Object.create(null)), (this._eventsCount = 0)) : n[e] !== undefined && (--this._eventsCount === 0 ? (this._events = Object.create(null)) : delete n[e]), this;
    if (arguments.length === 0) {
      var s = Object.keys(n),
        o;
      for (i = 0; i < s.length; ++i) (o = s[i]), o !== 'removeListener' && this.removeAllListeners(o);
      return this.removeAllListeners('removeListener'), (this._events = Object.create(null)), (this._eventsCount = 0), this;
    }
    if (((t = n[e]), typeof t == 'function')) this.removeListener(e, t);
    else if (t !== undefined) for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
    return this;
  }, 'removeAllListeners');
  function Xn(r, e, t) {
    var n = r._events;
    if (n === undefined) return [];
    var i = n[e];
    return i === undefined ? [] : typeof i == 'function' ? (t ? [i.listener || i] : [i]) : t ? jo(i) : ti(i, i.length);
  }
  a(Xn, '_listeners');
  L.prototype.listeners = a(function (e) {
    return Xn(this, e, true);
  }, 'listeners');
  L.prototype.rawListeners = a(function (e) {
    return Xn(this, e, false);
  }, 'rawListeners');
  L.listenerCount = function (r, e) {
    return typeof r.listenerCount == 'function' ? r.listenerCount(e) : ei.call(r, e);
  };
  L.prototype.listenerCount = ei;
  function ei(r) {
    var e = this._events;
    if (e !== undefined) {
      var t = e[r];
      if (typeof t == 'function') return 1;
      if (t !== undefined) return t.length;
    }
    return 0;
  }
  a(ei, 'listenerCount');
  L.prototype.eventNames = a(function () {
    return this._eventsCount > 0 ? ot(this._events) : [];
  }, 'eventNames');
  function ti(r, e) {
    for (var t = new Array(e), n = 0; n < e; ++n) t[n] = r[n];
    return t;
  }
  a(ti, 'arrayClone');
  function Wo(r, e) {
    for (; e + 1 < r.length; e++) r[e] = r[e + 1];
    r.pop();
  }
  a(Wo, 'spliceOne');
  function jo(r) {
    for (var e = new Array(r.length), t = 0; t < e.length; ++t) e[t] = r[t].listener || r[t];
    return e;
  }
  a(jo, 'unwrapListeners');
  function Ho(r, e) {
    return new Promise(function (t, n) {
      function i(o) {
        r.removeListener(e, s), n(o);
      }
      a(i, 'errorListener');
      function s() {
        typeof r.removeListener == 'function' && r.removeListener('error', i), t([].slice.call(arguments));
      }
      a(s, 'resolver'), ri(r, e, s, { once: true }), e !== 'error' && Go(r, i, { once: true });
    });
  }
  a(Ho, 'once');
  function Go(r, e, t) {
    typeof r.on == 'function' && ri(r, 'error', e, t);
  }
  a(Go, 'addErrorHandlerIfEventEmitter');
  function ri(r, e, t, n) {
    if (typeof r.on == 'function') n.once ? r.once(e, t) : r.on(e, t);
    else if (typeof r.addEventListener == 'function')
      r.addEventListener(
        e,
        a(function i(s) {
          n.once && r.removeEventListener(e, i), t(s);
        }, 'wrapListener'),
      );
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof r);
  }
  a(ri, 'eventTargetAgnosticAddListener');
});
var je = {};
ie(je, { default: () => $o });
var $o;
var He = z(() => {
  p();
  $o = {};
});
var ni = z(() => {
  p();
  a(Ge, 'sha256');
});
var O;
var $e;
var ii = z(() => {
  p();
  O = class O2 {
    constructor() {
      _(this, '_dataLength', 0);
      _(this, '_bufferLength', 0);
      _(this, '_state', new Int32Array(4));
      _(this, '_buffer', new ArrayBuffer(68));
      _(this, '_buffer8');
      _(this, '_buffer32');
      (this._buffer8 = new Uint8Array(this._buffer, 0, 68)), (this._buffer32 = new Uint32Array(this._buffer, 0, 17)), this.start();
    }
    static hashByteArray(e, t = false) {
      return this.onePassHasher.start().appendByteArray(e).end(t);
    }
    static hashStr(e, t = false) {
      return this.onePassHasher.start().appendStr(e).end(t);
    }
    static hashAsciiStr(e, t = false) {
      return this.onePassHasher.start().appendAsciiStr(e).end(t);
    }
    static _hex(e) {
      let { hexChars: t, hexOut: n } = O2,
        i,
        s,
        o,
        u;
      for (u = 0; u < 4; u += 1) for (s = u * 8, i = e[u], o = 0; o < 8; o += 2) (n[s + 1 + o] = t.charAt(i & 15)), (i >>>= 4), (n[s + 0 + o] = t.charAt(i & 15)), (i >>>= 4);
      return n.join('');
    }
    static _md5cycle(e, t) {
      let n = e[0],
        i = e[1],
        s = e[2],
        o = e[3];
      (n += (((i & s) | (~i & o)) + t[0] - 680876936) | 0), (n = (((n << 7) | (n >>> 25)) + i) | 0), (o += (((n & i) | (~n & s)) + t[1] - 389564586) | 0), (o = (((o << 12) | (o >>> 20)) + n) | 0), (s += (((o & n) | (~o & i)) + t[2] + 606105819) | 0), (s = (((s << 17) | (s >>> 15)) + o) | 0), (i += (((s & o) | (~s & n)) + t[3] - 1044525330) | 0), (i = (((i << 22) | (i >>> 10)) + s) | 0), (n += (((i & s) | (~i & o)) + t[4] - 176418897) | 0), (n = (((n << 7) | (n >>> 25)) + i) | 0), (o += (((n & i) | (~n & s)) + t[5] + 1200080426) | 0), (o = (((o << 12) | (o >>> 20)) + n) | 0), (s += (((o & n) | (~o & i)) + t[6] - 1473231341) | 0), (s = (((s << 17) | (s >>> 15)) + o) | 0), (i += (((s & o) | (~s & n)) + t[7] - 45705983) | 0), (i = (((i << 22) | (i >>> 10)) + s) | 0), (n += (((i & s) | (~i & o)) + t[8] + 1770035416) | 0), (n = (((n << 7) | (n >>> 25)) + i) | 0), (o += (((n & i) | (~n & s)) + t[9] - 1958414417) | 0), (o = (((o << 12) | (o >>> 20)) + n) | 0), (s += (((o & n) | (~o & i)) + t[10] - 42063) | 0), (s = (((s << 17) | (s >>> 15)) + o) | 0), (i += (((s & o) | (~s & n)) + t[11] - 1990404162) | 0), (i = (((i << 22) | (i >>> 10)) + s) | 0), (n += (((i & s) | (~i & o)) + t[12] + 1804603682) | 0), (n = (((n << 7) | (n >>> 25)) + i) | 0), (o += (((n & i) | (~n & s)) + t[13] - 40341101) | 0), (o = (((o << 12) | (o >>> 20)) + n) | 0), (s += (((o & n) | (~o & i)) + t[14] - 1502002290) | 0), (s = (((s << 17) | (s >>> 15)) + o) | 0), (i += (((s & o) | (~s & n)) + t[15] + 1236535329) | 0), (i = (((i << 22) | (i >>> 10)) + s) | 0), (n += (((i & o) | (s & ~o)) + t[1] - 165796510) | 0), (n = (((n << 5) | (n >>> 27)) + i) | 0), (o += (((n & s) | (i & ~s)) + t[6] - 1069501632) | 0), (o = (((o << 9) | (o >>> 23)) + n) | 0), (s += (((o & i) | (n & ~i)) + t[11] + 643717713) | 0), (s = (((s << 14) | (s >>> 18)) + o) | 0), (i += (((s & n) | (o & ~n)) + t[0] - 373897302) | 0), (i = (((i << 20) | (i >>> 12)) + s) | 0), (n += (((i & o) | (s & ~o)) + t[5] - 701558691) | 0), (n = (((n << 5) | (n >>> 27)) + i) | 0), (o += (((n & s) | (i & ~s)) + t[10] + 38016083) | 0), (o = (((o << 9) | (o >>> 23)) + n) | 0), (s += (((o & i) | (n & ~i)) + t[15] - 660478335) | 0), (s = (((s << 14) | (s >>> 18)) + o) | 0), (i += (((s & n) | (o & ~n)) + t[4] - 405537848) | 0), (i = (((i << 20) | (i >>> 12)) + s) | 0), (n += (((i & o) | (s & ~o)) + t[9] + 568446438) | 0), (n = (((n << 5) | (n >>> 27)) + i) | 0), (o += (((n & s) | (i & ~s)) + t[14] - 1019803690) | 0), (o = (((o << 9) | (o >>> 23)) + n) | 0), (s += (((o & i) | (n & ~i)) + t[3] - 187363961) | 0), (s = (((s << 14) | (s >>> 18)) + o) | 0), (i += (((s & n) | (o & ~n)) + t[8] + 1163531501) | 0), (i = (((i << 20) | (i >>> 12)) + s) | 0), (n += (((i & o) | (s & ~o)) + t[13] - 1444681467) | 0), (n = (((n << 5) | (n >>> 27)) + i) | 0), (o += (((n & s) | (i & ~s)) + t[2] - 51403784) | 0), (o = (((o << 9) | (o >>> 23)) + n) | 0), (s += (((o & i) | (n & ~i)) + t[7] + 1735328473) | 0), (s = (((s << 14) | (s >>> 18)) + o) | 0), (i += (((s & n) | (o & ~n)) + t[12] - 1926607734) | 0), (i = (((i << 20) | (i >>> 12)) + s) | 0), (n += ((i ^ s ^ o) + t[5] - 378558) | 0), (n = (((n << 4) | (n >>> 28)) + i) | 0), (o += ((n ^ i ^ s) + t[8] - 2022574463) | 0), (o = (((o << 11) | (o >>> 21)) + n) | 0), (s += ((o ^ n ^ i) + t[11] + 1839030562) | 0), (s = (((s << 16) | (s >>> 16)) + o) | 0), (i += ((s ^ o ^ n) + t[14] - 35309556) | 0), (i = (((i << 23) | (i >>> 9)) + s) | 0), (n += ((i ^ s ^ o) + t[1] - 1530992060) | 0), (n = (((n << 4) | (n >>> 28)) + i) | 0), (o += ((n ^ i ^ s) + t[4] + 1272893353) | 0), (o = (((o << 11) | (o >>> 21)) + n) | 0), (s += ((o ^ n ^ i) + t[7] - 155497632) | 0), (s = (((s << 16) | (s >>> 16)) + o) | 0), (i += ((s ^ o ^ n) + t[10] - 1094730640) | 0), (i = (((i << 23) | (i >>> 9)) + s) | 0), (n += ((i ^ s ^ o) + t[13] + 681279174) | 0), (n = (((n << 4) | (n >>> 28)) + i) | 0), (o += ((n ^ i ^ s) + t[0] - 358537222) | 0), (o = (((o << 11) | (o >>> 21)) + n) | 0), (s += ((o ^ n ^ i) + t[3] - 722521979) | 0), (s = (((s << 16) | (s >>> 16)) + o) | 0), (i += ((s ^ o ^ n) + t[6] + 76029189) | 0), (i = (((i << 23) | (i >>> 9)) + s) | 0), (n += ((i ^ s ^ o) + t[9] - 640364487) | 0), (n = (((n << 4) | (n >>> 28)) + i) | 0), (o += ((n ^ i ^ s) + t[12] - 421815835) | 0), (o = (((o << 11) | (o >>> 21)) + n) | 0), (s += ((o ^ n ^ i) + t[15] + 530742520) | 0), (s = (((s << 16) | (s >>> 16)) + o) | 0), (i += ((s ^ o ^ n) + t[2] - 995338651) | 0), (i = (((i << 23) | (i >>> 9)) + s) | 0), (n += ((s ^ (i | ~o)) + t[0] - 198630844) | 0), (n = (((n << 6) | (n >>> 26)) + i) | 0), (o += ((i ^ (n | ~s)) + t[7] + 1126891415) | 0), (o = (((o << 10) | (o >>> 22)) + n) | 0), (s += ((n ^ (o | ~i)) + t[14] - 1416354905) | 0), (s = (((s << 15) | (s >>> 17)) + o) | 0), (i += ((o ^ (s | ~n)) + t[5] - 57434055) | 0), (i = (((i << 21) | (i >>> 11)) + s) | 0), (n += ((s ^ (i | ~o)) + t[12] + 1700485571) | 0), (n = (((n << 6) | (n >>> 26)) + i) | 0), (o += ((i ^ (n | ~s)) + t[3] - 1894986606) | 0), (o = (((o << 10) | (o >>> 22)) + n) | 0), (s += ((n ^ (o | ~i)) + t[10] - 1051523) | 0), (s = (((s << 15) | (s >>> 17)) + o) | 0), (i += ((o ^ (s | ~n)) + t[1] - 2054922799) | 0), (i = (((i << 21) | (i >>> 11)) + s) | 0), (n += ((s ^ (i | ~o)) + t[8] + 1873313359) | 0), (n = (((n << 6) | (n >>> 26)) + i) | 0), (o += ((i ^ (n | ~s)) + t[15] - 30611744) | 0), (o = (((o << 10) | (o >>> 22)) + n) | 0), (s += ((n ^ (o | ~i)) + t[6] - 1560198380) | 0), (s = (((s << 15) | (s >>> 17)) + o) | 0), (i += ((o ^ (s | ~n)) + t[13] + 1309151649) | 0), (i = (((i << 21) | (i >>> 11)) + s) | 0), (n += ((s ^ (i | ~o)) + t[4] - 145523070) | 0), (n = (((n << 6) | (n >>> 26)) + i) | 0), (o += ((i ^ (n | ~s)) + t[11] - 1120210379) | 0), (o = (((o << 10) | (o >>> 22)) + n) | 0), (s += ((n ^ (o | ~i)) + t[2] + 718787259) | 0), (s = (((s << 15) | (s >>> 17)) + o) | 0), (i += ((o ^ (s | ~n)) + t[9] - 343485551) | 0), (i = (((i << 21) | (i >>> 11)) + s) | 0), (e[0] = (n + e[0]) | 0), (e[1] = (i + e[1]) | 0), (e[2] = (s + e[2]) | 0), (e[3] = (o + e[3]) | 0);
    }
    start() {
      return (this._dataLength = 0), (this._bufferLength = 0), this._state.set(O2.stateIdentity), this;
    }
    appendStr(e) {
      let t = this._buffer8,
        n = this._buffer32,
        i = this._bufferLength,
        s,
        o;
      for (o = 0; o < e.length; o += 1) {
        if (((s = e.charCodeAt(o)), s < 128)) t[i++] = s;
        else if (s < 2048) (t[i++] = (s >>> 6) + 192), (t[i++] = (s & 63) | 128);
        else if (s < 55296 || s > 56319) (t[i++] = (s >>> 12) + 224), (t[i++] = ((s >>> 6) & 63) | 128), (t[i++] = (s & 63) | 128);
        else {
          if (((s = (s - 55296) * 1024 + (e.charCodeAt(++o) - 56320) + 65536), s > 1114111)) throw new Error('Unicode standard supports code points up to U+10FFFF');
          (t[i++] = (s >>> 18) + 240), (t[i++] = ((s >>> 12) & 63) | 128), (t[i++] = ((s >>> 6) & 63) | 128), (t[i++] = (s & 63) | 128);
        }
        i >= 64 && ((this._dataLength += 64), O2._md5cycle(this._state, n), (i -= 64), (n[0] = n[16]));
      }
      return (this._bufferLength = i), this;
    }
    appendAsciiStr(e) {
      let t = this._buffer8,
        n = this._buffer32,
        i = this._bufferLength,
        s,
        o = 0;
      for (;;) {
        for (s = Math.min(e.length - o, 64 - i); s--; ) t[i++] = e.charCodeAt(o++);
        if (i < 64) break;
        (this._dataLength += 64), O2._md5cycle(this._state, n), (i = 0);
      }
      return (this._bufferLength = i), this;
    }
    appendByteArray(e) {
      let t = this._buffer8,
        n = this._buffer32,
        i = this._bufferLength,
        s,
        o = 0;
      for (;;) {
        for (s = Math.min(e.length - o, 64 - i); s--; ) t[i++] = e[o++];
        if (i < 64) break;
        (this._dataLength += 64), O2._md5cycle(this._state, n), (i = 0);
      }
      return (this._bufferLength = i), this;
    }
    getState() {
      let e = this._state;
      return { buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)), buflen: this._bufferLength, length: this._dataLength, state: [e[0], e[1], e[2], e[3]] };
    }
    setState(e) {
      let { buffer: t, state: n } = e,
        i = this._state,
        s;
      for (this._dataLength = e.length, this._bufferLength = e.buflen, i[0] = n[0], i[1] = n[1], i[2] = n[2], i[3] = n[3], s = 0; s < t.length; s += 1) this._buffer8[s] = t.charCodeAt(s);
    }
    end(e = false) {
      let t = this._bufferLength,
        n = this._buffer8,
        i = this._buffer32,
        s = (t >> 2) + 1;
      this._dataLength += t;
      let o = this._dataLength * 8;
      if (((n[t] = 128), (n[t + 1] = n[t + 2] = n[t + 3] = 0), i.set(O2.buffer32Identity.subarray(s), s), t > 55 && (O2._md5cycle(this._state, i), i.set(O2.buffer32Identity)), o <= 4294967295)) i[14] = o;
      else {
        let u = o.toString(16).match(/(.*?)(.{0,8})$/);
        if (u === null) return;
        let c = parseInt(u[2], 16),
          h = parseInt(u[1], 16) || 0;
        (i[14] = c), (i[15] = h);
      }
      return O2._md5cycle(this._state, i), e ? this._state : O2._hex(this._state);
    }
  };
  a(O, 'Md5'), _(O, 'stateIdentity', new Int32Array([1732584193, -271733879, -1732584194, 271733878])), _(O, 'buffer32Identity', new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), _(O, 'hexChars', '0123456789abcdef'), _(O, 'hexOut', []), _(O, 'onePassHasher', new O());
  $e = O;
});
var qt = {};
ie(qt, { createHash: () => Ko, createHmac: () => zo, randomBytes: () => Vo });
var Qt = z(() => {
  p();
  ni();
  ii();
  a(Vo, 'randomBytes');
  a(Ko, 'createHash');
  a(zo, 'createHmac');
});
var jt = I((si) => {
  p();
  si.parse = function (r, e) {
    return new Wt(r, e).parse();
  };
  var ut = class ut2 {
    constructor(e, t) {
      (this.source = e), (this.transform = t || Yo), (this.position = 0), (this.entries = []), (this.recorded = []), (this.dimension = 0);
    }
    isEof() {
      return this.position >= this.source.length;
    }
    nextCharacter() {
      var e = this.source[this.position++];
      return e === '\\' ? { value: this.source[this.position++], escaped: true } : { value: e, escaped: false };
    }
    record(e) {
      this.recorded.push(e);
    }
    newEntry(e) {
      var t;
      (this.recorded.length > 0 || e) && ((t = this.recorded.join('')), t === 'NULL' && !e && (t = null), t !== null && (t = this.transform(t)), this.entries.push(t), (this.recorded = []));
    }
    consumeDimensions() {
      if (this.source[0] === '[')
        for (; !this.isEof(); ) {
          var e = this.nextCharacter();
          if (e.value === '=') break;
        }
    }
    parse(e) {
      var t, n, i;
      for (this.consumeDimensions(); !this.isEof(); )
        if (((t = this.nextCharacter()), t.value === '{' && !i)) this.dimension++, this.dimension > 1 && ((n = new ut2(this.source.substr(this.position - 1), this.transform)), this.entries.push(n.parse(true)), (this.position += n.position - 2));
        else if (t.value === '}' && !i) {
          if ((this.dimension--, !this.dimension && (this.newEntry(), e))) return this.entries;
        } else t.value === '"' && !t.escaped ? (i && this.newEntry(true), (i = !i)) : t.value === ',' && !i ? this.newEntry() : this.record(t.value);
      if (this.dimension !== 0) throw new Error('array dimension not balanced');
      return this.entries;
    }
  };
  a(ut, 'ArrayParser');
  var Wt = ut;
  function Yo(r) {
    return r;
  }
  a(Yo, 'identity');
});
var Ht = I((mh, oi) => {
  p();
  var Zo = jt();
  oi.exports = {
    create: a(function (r, e) {
      return {
        parse: a(function () {
          return Zo.parse(r, e);
        }, 'parse'),
      };
    }, 'create'),
  };
});
var ci = I((bh, ui) => {
  p();
  var Jo = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
    Xo = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,
    ea = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,
    ta = /^-?infinity$/;
  ui.exports = a(function (e) {
    if (ta.test(e)) return Number(e.replace('i', 'I'));
    var t = Jo.exec(e);
    if (!t) return ra(e) || null;
    var n = !!t[8],
      i = parseInt(t[1], 10);
    n && (i = ai(i));
    var s = parseInt(t[2], 10) - 1,
      o = t[3],
      u = parseInt(t[4], 10),
      c = parseInt(t[5], 10),
      h = parseInt(t[6], 10),
      l = t[7];
    l = l ? 1000 * parseFloat(l) : 0;
    var d,
      b = na(e);
    return b != null ? ((d = new Date(Date.UTC(i, s, o, u, c, h, l))), Gt(i) && d.setUTCFullYear(i), b !== 0 && d.setTime(d.getTime() - b)) : ((d = new Date(i, s, o, u, c, h, l)), Gt(i) && d.setFullYear(i)), d;
  }, 'parseDate');
  function ra(r) {
    var e = Xo.exec(r);
    if (e) {
      var t = parseInt(e[1], 10),
        n = !!e[4];
      n && (t = ai(t));
      var i = parseInt(e[2], 10) - 1,
        s = e[3],
        o = new Date(t, i, s);
      return Gt(t) && o.setFullYear(t), o;
    }
  }
  a(ra, 'getDate');
  function na(r) {
    if (r.endsWith('+00')) return 0;
    var e = ea.exec(r.split(' ')[1]);
    if (e) {
      var t = e[1];
      if (t === 'Z') return 0;
      var n = t === '-' ? -1 : 1,
        i = parseInt(e[2], 10) * 3600 + parseInt(e[3] || 0, 10) * 60 + parseInt(e[4] || 0, 10);
      return i * n * 1000;
    }
  }
  a(na, 'timeZoneOffset');
  function ai(r) {
    return -(r - 1);
  }
  a(ai, 'bcYearToNegativeYear');
  function Gt(r) {
    return r >= 0 && r < 100;
  }
  a(Gt, 'is0To99');
});
var li = I((vh, hi) => {
  p();
  hi.exports = sa;
  var ia = Object.prototype.hasOwnProperty;
  function sa(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t) ia.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }
  a(sa, 'extend');
});
var di = I((Ah, pi) => {
  p();
  var oa = li();
  pi.exports = Fe;
  function Fe(r) {
    if (!(this instanceof Fe)) return new Fe(r);
    oa(this, wa(r));
  }
  a(Fe, 'PostgresInterval');
  var aa = ['seconds', 'minutes', 'hours', 'days', 'months', 'years'];
  Fe.prototype.toPostgres = function () {
    var r = aa.filter(this.hasOwnProperty, this);
    return (
      this.milliseconds && r.indexOf('seconds') < 0 && r.push('seconds'),
      r.length === 0
        ? '0'
        : r
            .map(function (e) {
              var t = this[e] || 0;
              return e === 'seconds' && this.milliseconds && (t = (t + this.milliseconds / 1000).toFixed(6).replace(/\.?0+$/, '')), t + ' ' + e;
            }, this)
            .join(' ')
    );
  };
  var ua = { years: 'Y', months: 'M', days: 'D', hours: 'H', minutes: 'M', seconds: 'S' },
    ca = ['years', 'months', 'days'],
    ha = ['hours', 'minutes', 'seconds'];
  Fe.prototype.toISOString = Fe.prototype.toISO = function () {
    var r = ca.map(t, this).join(''),
      e = ha.map(t, this).join('');
    return 'P' + r + 'T' + e;
    function t(n) {
      var i = this[n] || 0;
      return n === 'seconds' && this.milliseconds && (i = (i + this.milliseconds / 1000).toFixed(6).replace(/0+$/, '')), i + ua[n];
    }
  };
  var $t = '([+-]?\\d+)',
    la = $t + '\\s+years?',
    fa = $t + '\\s+mons?',
    pa = $t + '\\s+days?',
    da = '([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?',
    ya = new RegExp(
      [la, fa, pa, da]
        .map(function (r) {
          return '(' + r + ')?';
        })
        .join('\\s*'),
    ),
    fi = {
      years: 2,
      months: 4,
      days: 6,
      hours: 9,
      minutes: 10,
      seconds: 11,
      milliseconds: 12,
    },
    ma = ['hours', 'minutes', 'seconds', 'milliseconds'];
  function ga(r) {
    var e = r + '000000'.slice(r.length);
    return parseInt(e, 10) / 1000;
  }
  a(ga, 'parseMilliseconds');
  function wa(r) {
    if (!r) return {};
    var e = ya.exec(r),
      t = e[8] === '-';
    return Object.keys(fi).reduce(function (n, i) {
      var s = fi[i],
        o = e[s];
      return !o || ((o = i === 'milliseconds' ? ga(o) : parseInt(o, 10)), !o) || (t && ~ma.indexOf(i) && (o *= -1), (n[i] = o)), n;
    }, {});
  }
  a(wa, 'parse');
});
var mi = I((Ih, yi) => {
  p();
  yi.exports = a(function (e) {
    if (/^\\x/.test(e)) return new y(e.substr(2), 'hex');
    for (var t = '', n = 0; n < e.length; )
      if (e[n] !== '\\') (t += e[n]), ++n;
      else if (/[0-7]{3}/.test(e.substr(n + 1, 3))) (t += String.fromCharCode(parseInt(e.substr(n + 1, 3), 8))), (n += 4);
      else {
        for (var i = 1; n + i < e.length && e[n + i] === '\\'; ) i++;
        for (var s = 0; s < Math.floor(i / 2); ++s) t += '\\';
        n += Math.floor(i / 2) * 2;
      }
    return new y(t, 'binary');
  }, 'parseBytea');
});
var Ei = I((Lh, vi) => {
  p();
  var Ve = jt(),
    Ke = Ht(),
    ct = ci(),
    wi = di(),
    bi = mi();
  function ht(r) {
    return a(function (t) {
      return t === null ? t : r(t);
    }, 'nullAllowed');
  }
  a(ht, 'allowNull');
  function Si(r) {
    return r === null ? r : r === 'TRUE' || r === 't' || r === 'true' || r === 'y' || r === 'yes' || r === 'on' || r === '1';
  }
  a(Si, 'parseBool');
  function ba(r) {
    return r ? Ve.parse(r, Si) : null;
  }
  a(ba, 'parseBoolArray');
  function Sa(r) {
    return parseInt(r, 10);
  }
  a(Sa, 'parseBaseTenInt');
  function Vt(r) {
    return r ? Ve.parse(r, ht(Sa)) : null;
  }
  a(Vt, 'parseIntegerArray');
  function xa(r) {
    return r
      ? Ve.parse(
          r,
          ht(function (e) {
            return xi(e).trim();
          }),
        )
      : null;
  }
  a(xa, 'parseBigIntegerArray');
  var va = a(function (r) {
      if (!r) return null;
      var e = Ke.create(r, function (t) {
        return t !== null && (t = Zt(t)), t;
      });
      return e.parse();
    }, 'parsePointArray'),
    Kt = a(function (r) {
      if (!r) return null;
      var e = Ke.create(r, function (t) {
        return t !== null && (t = parseFloat(t)), t;
      });
      return e.parse();
    }, 'parseFloatArray'),
    re = a(function (r) {
      if (!r) return null;
      var e = Ke.create(r);
      return e.parse();
    }, 'parseStringArray'),
    zt = a(function (r) {
      if (!r) return null;
      var e = Ke.create(r, function (t) {
        return t !== null && (t = ct(t)), t;
      });
      return e.parse();
    }, 'parseDateArray'),
    Ea = a(function (r) {
      if (!r) return null;
      var e = Ke.create(r, function (t) {
        return t !== null && (t = wi(t)), t;
      });
      return e.parse();
    }, 'parseIntervalArray'),
    _a = a(function (r) {
      return r ? Ve.parse(r, ht(bi)) : null;
    }, 'parseByteAArray'),
    Yt = a(function (r) {
      return parseInt(r, 10);
    }, 'parseInteger'),
    xi = a(function (r) {
      var e = String(r);
      return /^\d+$/.test(e) ? e : r;
    }, 'parseBigInteger'),
    gi = a(function (r) {
      return r ? Ve.parse(r, ht(JSON.parse)) : null;
    }, 'parseJsonArray'),
    Zt = a(function (r) {
      return r[0] !== '(' ? null : ((r = r.substring(1, r.length - 1).split(',')), { x: parseFloat(r[0]), y: parseFloat(r[1]) });
    }, 'parsePoint'),
    Aa = a(function (r) {
      if (r[0] !== '<' && r[1] !== '(') return null;
      for (var e = '(', t = '', n = false, i = 2; i < r.length - 1; i++) {
        if ((n || (e += r[i]), r[i] === ')')) {
          n = true;
          continue;
        } else if (!n) continue;
        r[i] !== ',' && (t += r[i]);
      }
      var s = Zt(e);
      return (s.radius = parseFloat(t)), s;
    }, 'parseCircle'),
    Ca = a(function (r) {
      r(20, xi), r(21, Yt), r(23, Yt), r(26, Yt), r(700, parseFloat), r(701, parseFloat), r(16, Si), r(1082, ct), r(1114, ct), r(1184, ct), r(600, Zt), r(651, re), r(718, Aa), r(1000, ba), r(1001, _a), r(1005, Vt), r(1007, Vt), r(1028, Vt), r(1016, xa), r(1017, va), r(1021, Kt), r(1022, Kt), r(1231, Kt), r(1014, re), r(1015, re), r(1008, re), r(1009, re), r(1040, re), r(1041, re), r(1115, zt), r(1182, zt), r(1185, zt), r(1186, wi), r(1187, Ea), r(17, bi), r(114, JSON.parse.bind(JSON)), r(3802, JSON.parse.bind(JSON)), r(199, gi), r(3807, gi), r(3907, re), r(2951, re), r(791, re), r(1183, re), r(1270, re);
    }, 'init');
  vi.exports = { init: Ca };
});
var Ai = I((Mh, _i) => {
  p();
  var Z = 1e6;
  function Ta(r) {
    var e = r.readInt32BE(0),
      t = r.readUInt32BE(4),
      n = '';
    e < 0 && ((e = ~e + (t === 0)), (t = (~t + 1) >>> 0), (n = '-'));
    var i = '',
      s,
      o,
      u,
      c,
      h,
      l;
    {
      if (((s = e % Z), (e = (e / Z) >>> 0), (o = 4294967296 * s + t), (t = (o / Z) >>> 0), (u = '' + (o - Z * t)), t === 0 && e === 0)) return n + u + i;
      for (c = '', h = 6 - u.length, l = 0; l < h; l++) c += '0';
      i = c + u + i;
    }
    {
      if (((s = e % Z), (e = (e / Z) >>> 0), (o = 4294967296 * s + t), (t = (o / Z) >>> 0), (u = '' + (o - Z * t)), t === 0 && e === 0)) return n + u + i;
      for (c = '', h = 6 - u.length, l = 0; l < h; l++) c += '0';
      i = c + u + i;
    }
    {
      if (((s = e % Z), (e = (e / Z) >>> 0), (o = 4294967296 * s + t), (t = (o / Z) >>> 0), (u = '' + (o - Z * t)), t === 0 && e === 0)) return n + u + i;
      for (c = '', h = 6 - u.length, l = 0; l < h; l++) c += '0';
      i = c + u + i;
    }
    return (s = e % Z), (o = 4294967296 * s + t), (u = '' + (o % Z)), n + u + i;
  }
  a(Ta, 'readInt8');
  _i.exports = Ta;
});
var Bi = I((Uh, Pi) => {
  p();
  var Ia = Ai(),
    F = a(function (r, e, t, n, i) {
      (t = t || 0),
        (n = n || false),
        (i =
          i ||
          function (C, B, W) {
            return C * Math.pow(2, W) + B;
          });
      var s = t >> 3,
        o = a(function (C) {
          return n ? ~C & 255 : C;
        }, 'inv'),
        u = 255,
        c = 8 - (t % 8);
      e < c && ((u = (255 << (8 - e)) & 255), (c = e)), t && (u = u >> t % 8);
      var h = 0;
      (t % 8) + e >= 8 && (h = i(0, o(r[s]) & u, c));
      for (var l = (e + t) >> 3, d = s + 1; d < l; d++) h = i(h, o(r[d]), 8);
      var b = (e + t) % 8;
      return b > 0 && (h = i(h, o(r[l]) >> (8 - b), b)), h;
    }, 'parseBits'),
    Ii = a(function (r, e, t) {
      var n = Math.pow(2, t - 1) - 1,
        i = F(r, 1),
        s = F(r, t, 1);
      if (s === 0) return 0;
      var o = 1,
        u = a(function (h, l, d) {
          h === 0 && (h = 1);
          for (var b = 1; b <= d; b++) (o /= 2), (l & (1 << (d - b))) > 0 && (h += o);
          return h;
        }, 'parsePrecisionBits'),
        c = F(r, e, t + 1, false, u);
      return s == Math.pow(2, t + 1) - 1 ? (c === 0 ? (i === 0 ? 1 / 0 : -1 / 0) : NaN) : (i === 0 ? 1 : -1) * Math.pow(2, s - n) * c;
    }, 'parseFloatFromBits'),
    Pa = a(function (r) {
      return F(r, 1) == 1 ? -1 * (F(r, 15, 1, true) + 1) : F(r, 15, 1);
    }, 'parseInt16'),
    Ci = a(function (r) {
      return F(r, 1) == 1 ? -1 * (F(r, 31, 1, true) + 1) : F(r, 31, 1);
    }, 'parseInt32'),
    Ba = a(function (r) {
      return Ii(r, 23, 8);
    }, 'parseFloat32'),
    La = a(function (r) {
      return Ii(r, 52, 11);
    }, 'parseFloat64'),
    Ra = a(function (r) {
      var e = F(r, 16, 32);
      if (e == 49152) return NaN;
      for (var t = Math.pow(1e4, F(r, 16, 16)), n = 0, i = [], s = F(r, 16), o = 0; o < s; o++) (n += F(r, 16, 64 + 16 * o) * t), (t /= 1e4);
      var u = Math.pow(10, F(r, 16, 48));
      return ((e === 0 ? 1 : -1) * Math.round(n * u)) / u;
    }, 'parseNumeric'),
    Ti = a(function (r, e) {
      var t = F(e, 1),
        n = F(e, 63, 1),
        i = new Date(((t === 0 ? 1 : -1) * n) / 1000 + 946684800000);
      return (
        r || i.setTime(i.getTime() + i.getTimezoneOffset() * 60000),
        (i.usec = n % 1000),
        (i.getMicroSeconds = function () {
          return this.usec;
        }),
        (i.setMicroSeconds = function (s) {
          this.usec = s;
        }),
        (i.getUTCMicroSeconds = function () {
          return this.usec;
        }),
        i
      );
    }, 'parseDate'),
    ze = a(function (r) {
      for (var e = F(r, 32), t = F(r, 32, 32), n = F(r, 32, 64), i = 96, s = [], o = 0; o < e; o++) (s[o] = F(r, 32, i)), (i += 32), (i += 32);
      var u = a(function (h) {
          var l = F(r, 32, i);
          if (((i += 32), l == 4294967295)) return null;
          var d;
          if (h == 23 || h == 20) return (d = F(r, l * 8, i)), (i += l * 8), d;
          if (h == 25) return (d = r.toString(this.encoding, i >> 3, (i += l << 3) >> 3)), d;
          console.log('ERROR: ElementType not implemented: ' + h);
        }, 'parseElement'),
        c = a(function (h, l) {
          var d = [],
            b;
          if (h.length > 1) {
            var C = h.shift();
            for (b = 0; b < C; b++) d[b] = c(h, l);
            h.unshift(C);
          } else for (b = 0; b < h[0]; b++) d[b] = u(l);
          return d;
        }, 'parse');
      return c(s, n);
    }, 'parseArray'),
    Fa = a(function (r) {
      return r.toString('utf8');
    }, 'parseText'),
    Ma = a(function (r) {
      return r === null ? null : F(r, 8) > 0;
    }, 'parseBool'),
    Da = a(function (r) {
      r(20, Ia), r(21, Pa), r(23, Ci), r(26, Ci), r(1700, Ra), r(700, Ba), r(701, La), r(16, Ma), r(1114, Ti.bind(null, false)), r(1184, Ti.bind(null, true)), r(1000, ze), r(1007, ze), r(1016, ze), r(1008, ze), r(1009, ze), r(25, Fa);
    }, 'init');
  Pi.exports = { init: Da };
});
var Ri = I((qh, Li) => {
  p();
  Li.exports = {
    BOOL: 16,
    BYTEA: 17,
    CHAR: 18,
    INT8: 20,
    INT2: 21,
    INT4: 23,
    REGPROC: 24,
    TEXT: 25,
    OID: 26,
    TID: 27,
    XID: 28,
    CID: 29,
    JSON: 114,
    XML: 142,
    PG_NODE_TREE: 194,
    SMGR: 210,
    PATH: 602,
    POLYGON: 604,
    CIDR: 650,
    FLOAT4: 700,
    FLOAT8: 701,
    ABSTIME: 702,
    RELTIME: 703,
    TINTERVAL: 704,
    CIRCLE: 718,
    MACADDR8: 774,
    MONEY: 790,
    MACADDR: 829,
    INET: 869,
    ACLITEM: 1033,
    BPCHAR: 1042,
    VARCHAR: 1043,
    DATE: 1082,
    TIME: 1083,
    TIMESTAMP: 1114,
    TIMESTAMPTZ: 1184,
    INTERVAL: 1186,
    TIMETZ: 1266,
    BIT: 1560,
    VARBIT: 1562,
    NUMERIC: 1700,
    REFCURSOR: 1790,
    REGPROCEDURE: 2202,
    REGOPER: 2203,
    REGOPERATOR: 2204,
    REGCLASS: 2205,
    REGTYPE: 2206,
    UUID: 2950,
    TXID_SNAPSHOT: 2970,
    PG_LSN: 3220,
    PG_NDISTINCT: 3361,
    PG_DEPENDENCIES: 3402,
    TSVECTOR: 3614,
    TSQUERY: 3615,
    GTSVECTOR: 3642,
    REGCONFIG: 3734,
    REGDICTIONARY: 3769,
    JSONB: 3802,
    REGNAMESPACE: 4089,
    REGROLE: 4096,
  };
});
var Je = I((Ze) => {
  p();
  var ka = Ei(),
    Ua = Bi(),
    Oa = Ht(),
    Na = Ri();
  Ze.getTypeParser = qa;
  Ze.setTypeParser = Qa;
  Ze.arrayParser = Oa;
  Ze.builtins = Na;
  var Ye = { text: {}, binary: {} };
  function Fi(r) {
    return String(r);
  }
  a(Fi, 'noParse');
  function qa(r, e) {
    return (e = e || 'text'), (Ye[e] && Ye[e][r]) || Fi;
  }
  a(qa, 'getTypeParser');
  function Qa(r, e, t) {
    typeof e == 'function' && ((t = e), (e = 'text')), (Ye[e][r] = t);
  }
  a(Qa, 'setTypeParser');
  ka.init(function (r, e) {
    Ye.text[r] = e;
  });
  Ua.init(function (r, e) {
    Ye.binary[r] = e;
  });
});
var Xe = I((Gh, Jt) => {
  p();
  Jt.exports = {
    host: 'localhost',
    user: m.platform === 'win32' ? m.env.USERNAME : m.env.USER,
    database: undefined,
    password: null,
    connectionString: undefined,
    port: 5432,
    rows: 0,
    binary: false,
    max: 10,
    idleTimeoutMillis: 30000,
    client_encoding: '',
    ssl: false,
    application_name: undefined,
    fallback_application_name: undefined,
    options: undefined,
    parseInputDatesAsUTC: false,
    statement_timeout: false,
    lock_timeout: false,
    idle_in_transaction_session_timeout: false,
    query_timeout: false,
    connect_timeout: 0,
    keepalives: 1,
    keepalives_idle: 0,
  };
  var Me = Je(),
    Wa = Me.getTypeParser(20, 'text'),
    ja = Me.getTypeParser(1016, 'text');
  Jt.exports.__defineSetter__('parseInt8', function (r) {
    Me.setTypeParser(20, 'text', r ? Me.getTypeParser(23, 'text') : Wa), Me.setTypeParser(1016, 'text', r ? Me.getTypeParser(1007, 'text') : ja);
  });
});
var et = I((Vh, Di) => {
  p();
  var Ha = (Qt(), N(qt)),
    Ga = Xe();
  function $a(r) {
    var e = r.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return '"' + e + '"';
  }
  a($a, 'escapeElement');
  function Mi(r) {
    for (var e = '{', t = 0; t < r.length; t++) t > 0 && (e = e + ','), r[t] === null || typeof r[t] > 'u' ? (e = e + 'NULL') : Array.isArray(r[t]) ? (e = e + Mi(r[t])) : r[t] instanceof y ? (e += '\\\\x' + r[t].toString('hex')) : (e += $a(lt(r[t])));
    return (e = e + '}'), e;
  }
  a(Mi, 'arrayString');
  var lt = a(function (r, e) {
    if (r == null) return null;
    if (r instanceof y) return r;
    if (ArrayBuffer.isView(r)) {
      var t = y.from(r.buffer, r.byteOffset, r.byteLength);
      return t.length === r.byteLength ? t : t.slice(r.byteOffset, r.byteOffset + r.byteLength);
    }
    return r instanceof Date ? (Ga.parseInputDatesAsUTC ? za(r) : Ka(r)) : Array.isArray(r) ? Mi(r) : typeof r == 'object' ? Va(r, e) : r.toString();
  }, 'prepareValue');
  function Va(r, e) {
    if (r && typeof r.toPostgres == 'function') {
      if (((e = e || []), e.indexOf(r) !== -1)) throw new Error('circular reference detected while preparing "' + r + '" for query');
      return e.push(r), lt(r.toPostgres(lt), e);
    }
    return JSON.stringify(r);
  }
  a(Va, 'prepareObject');
  function H(r, e) {
    for (r = '' + r; r.length < e; ) r = '0' + r;
    return r;
  }
  a(H, 'pad');
  function Ka(r) {
    var e = -r.getTimezoneOffset(),
      t = r.getFullYear(),
      n = t < 1;
    n && (t = Math.abs(t) + 1);
    var i = H(t, 4) + '-' + H(r.getMonth() + 1, 2) + '-' + H(r.getDate(), 2) + 'T' + H(r.getHours(), 2) + ':' + H(r.getMinutes(), 2) + ':' + H(r.getSeconds(), 2) + '.' + H(r.getMilliseconds(), 3);
    return e < 0 ? ((i += '-'), (e *= -1)) : (i += '+'), (i += H(Math.floor(e / 60), 2) + ':' + H(e % 60, 2)), n && (i += ' BC'), i;
  }
  a(Ka, 'dateToString');
  function za(r) {
    var e = r.getUTCFullYear(),
      t = e < 1;
    t && (e = Math.abs(e) + 1);
    var n = H(e, 4) + '-' + H(r.getUTCMonth() + 1, 2) + '-' + H(r.getUTCDate(), 2) + 'T' + H(r.getUTCHours(), 2) + ':' + H(r.getUTCMinutes(), 2) + ':' + H(r.getUTCSeconds(), 2) + '.' + H(r.getUTCMilliseconds(), 3);
    return (n += '+00:00'), t && (n += ' BC'), n;
  }
  a(za, 'dateToStringUTC');
  function Ya(r, e, t) {
    return (r = typeof r == 'string' ? { text: r } : r), e && (typeof e == 'function' ? (r.callback = e) : (r.values = e)), t && (r.callback = t), r;
  }
  a(Ya, 'normalizeQueryConfig');
  var Xt = a(function (r) {
      return Ha.createHash('md5').update(r, 'utf-8').digest('hex');
    }, 'md5'),
    Za = a(function (r, e, t) {
      var n = Xt(e + r),
        i = Xt(y.concat([y.from(n), t]));
      return 'md5' + i;
    }, 'postgresMd5PasswordHash');
  Di.exports = {
    prepareValue: a(function (e) {
      return lt(e);
    }, 'prepareValueWrapper'),
    normalizeQueryConfig: Ya,
    postgresMd5PasswordHash: Za,
    md5: Xt,
  };
});
var qi = I((Yh, Ni) => {
  p();
  var er = (Qt(), N(qt));
  function Ja(r) {
    if (r.indexOf('SCRAM-SHA-256') === -1) throw new Error('SASL: Only mechanism SCRAM-SHA-256 is currently supported');
    let e = er.randomBytes(18).toString('base64');
    return { mechanism: 'SCRAM-SHA-256', clientNonce: e, response: 'n,,n=*,r=' + e, message: 'SASLInitialResponse' };
  }
  a(Ja, 'startSession');
  function Xa(r, e, t) {
    if (r.message !== 'SASLInitialResponse') throw new Error('SASL: Last message was not SASLInitialResponse');
    if (typeof e != 'string') throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string');
    if (typeof t != 'string') throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string');
    let n = ru(t);
    if (n.nonce.startsWith(r.clientNonce)) {
      if (n.nonce.length === r.clientNonce.length) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short');
    } else throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce');
    var i = y.from(n.salt, 'base64'),
      s = su(e, i, n.iteration),
      o = De(s, 'Client Key'),
      u = iu(o),
      c = 'n=*,r=' + r.clientNonce,
      h = 'r=' + n.nonce + ',s=' + n.salt + ',i=' + n.iteration,
      l = 'c=biws,r=' + n.nonce,
      d = c + ',' + h + ',' + l,
      b = De(u, d),
      C = Oi(o, b),
      B = C.toString('base64'),
      W = De(s, 'Server Key'),
      X = De(W, d);
    (r.message = 'SASLResponse'), (r.serverSignature = X.toString('base64')), (r.response = l + ',p=' + B);
  }
  a(Xa, 'continueSession');
  function eu(r, e) {
    if (r.message !== 'SASLResponse') throw new Error('SASL: Last message was not SASLResponse');
    if (typeof e != 'string') throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string');
    let { serverSignature: t } = nu(e);
    if (t !== r.serverSignature) throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match');
  }
  a(eu, 'finalizeSession');
  function tu(r) {
    if (typeof r != 'string') throw new TypeError('SASL: text must be a string');
    return r
      .split('')
      .map((e, t) => r.charCodeAt(t))
      .every((e) => (e >= 33 && e <= 43) || (e >= 45 && e <= 126));
  }
  a(tu, 'isPrintableChars');
  function ki(r) {
    return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(r);
  }
  a(ki, 'isBase64');
  function Ui(r) {
    if (typeof r != 'string') throw new TypeError('SASL: attribute pairs text must be a string');
    return new Map(
      r.split(',').map((e) => {
        if (!/^.=/.test(e)) throw new Error('SASL: Invalid attribute pair entry');
        let t = e[0],
          n = e.substring(2);
        return [t, n];
      }),
    );
  }
  a(Ui, 'parseAttributePairs');
  function ru(r) {
    let e = Ui(r),
      t = e.get('r');
    if (t) {
      if (!tu(t)) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters');
    } else throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing');
    let n = e.get('s');
    if (n) {
      if (!ki(n)) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64');
    } else throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing');
    let i = e.get('i');
    if (i) {
      if (!/^[1-9][0-9]*$/.test(i)) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration count');
    } else throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing');
    let s = parseInt(i, 10);
    return { nonce: t, salt: n, iteration: s };
  }
  a(ru, 'parseServerFirstMessage');
  function nu(r) {
    let t = Ui(r).get('v');
    if (t) {
      if (!ki(t)) throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64');
    } else throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing');
    return { serverSignature: t };
  }
  a(nu, 'parseServerFinalMessage');
  function Oi(r, e) {
    if (!y.isBuffer(r)) throw new TypeError('first argument must be a Buffer');
    if (!y.isBuffer(e)) throw new TypeError('second argument must be a Buffer');
    if (r.length !== e.length) throw new Error('Buffer lengths must match');
    if (r.length === 0) throw new Error('Buffers cannot be empty');
    return y.from(r.map((t, n) => r[n] ^ e[n]));
  }
  a(Oi, 'xorBuffers');
  function iu(r) {
    return er.createHash('sha256').update(r).digest();
  }
  a(iu, 'sha256');
  function De(r, e) {
    return er.createHmac('sha256', r).update(e).digest();
  }
  a(De, 'hmacSha256');
  function su(r, e, t) {
    for (var n = De(r, y.concat([e, y.from([0, 0, 0, 1])])), i = n, s = 0; s < t - 1; s++) (n = De(r, n)), (i = Oi(i, n));
    return i;
  }
  a(su, 'Hi');
  Ni.exports = { startSession: Ja, continueSession: Xa, finalizeSession: eu };
});
var tr = {};
ie(tr, { join: () => ou });
var rr = z(() => {
  p();
  a(ou, 'join');
});
var nr = {};
ie(nr, { stat: () => au });
var ir = z(() => {
  p();
  a(au, 'stat');
});
var sr = {};
ie(sr, { default: () => uu });
var uu;
var or = z(() => {
  p();
  uu = {};
});
var Qi = {};
ie(Qi, { StringDecoder: () => ar });
var ur;
var ar;
var Wi = z(() => {
  p();
  ur = class ur2 {
    constructor(e) {
      _(this, 'td');
      this.td = new TextDecoder(e);
    }
    write(e) {
      return this.td.decode(e, { stream: true });
    }
    end(e) {
      return this.td.decode(e);
    }
  };
  a(ur, 'StringDecoder');
  ar = ur;
});
var $i = I((ol, Gi) => {
  p();
  var { Transform: cu } = (or(), N(sr)),
    { StringDecoder: hu } = (Wi(), N(Qi)),
    be = Symbol('last'),
    ft = Symbol('decoder');
  function lu(r, e, t) {
    let n;
    if (this.overflow) {
      if (((n = this[ft].write(r).split(this.matcher)), n.length === 1)) return t();
      n.shift(), (this.overflow = false);
    } else (this[be] += this[ft].write(r)), (n = this[be].split(this.matcher));
    this[be] = n.pop();
    for (let i = 0; i < n.length; i++)
      try {
        Hi(this, this.mapper(n[i]));
      } catch (s) {
        return t(s);
      }
    if (((this.overflow = this[be].length > this.maxLength), this.overflow && !this.skipOverflow)) {
      t(new Error('maximum buffer reached'));
      return;
    }
    t();
  }
  a(lu, 'transform');
  function fu(r) {
    if (((this[be] += this[ft].end()), this[be]))
      try {
        Hi(this, this.mapper(this[be]));
      } catch (e) {
        return r(e);
      }
    r();
  }
  a(fu, 'flush');
  function Hi(r, e) {
    e !== undefined && r.push(e);
  }
  a(Hi, 'push');
  function ji(r) {
    return r;
  }
  a(ji, 'noop');
  function pu(r, e, t) {
    switch (((r = r || /\r?\n/), (e = e || ji), (t = t || {}), arguments.length)) {
      case 1:
        typeof r == 'function' ? ((e = r), (r = /\r?\n/)) : typeof r == 'object' && !(r instanceof RegExp) && !r[Symbol.split] && ((t = r), (r = /\r?\n/));
        break;
      case 2:
        typeof r == 'function' ? ((t = e), (e = r), (r = /\r?\n/)) : typeof e == 'object' && ((t = e), (e = ji));
    }
    (t = Object.assign({}, t)), (t.autoDestroy = true), (t.transform = lu), (t.flush = fu), (t.readableObjectMode = true);
    let n = new cu(t);
    return (
      (n[be] = ''),
      (n[ft] = new hu('utf8')),
      (n.matcher = r),
      (n.mapper = e),
      (n.maxLength = t.maxLength),
      (n.skipOverflow = t.skipOverflow || false),
      (n.overflow = false),
      (n._destroy = function (i, s) {
        (this._writableState.errorEmitted = false), s(i);
      }),
      n
    );
  }
  a(pu, 'split');
  Gi.exports = pu;
});
var zi = I((cl, pe) => {
  p();
  var Vi = (rr(), N(tr)),
    du = (or(), N(sr)).Stream,
    yu = $i(),
    Ki = (He(), N(je)),
    mu = 5432,
    pt = m.platform === 'win32',
    tt = m.stderr,
    gu = 56,
    wu = 7,
    bu = 61440,
    Su = 32768;
  function xu(r) {
    return (r & bu) == Su;
  }
  a(xu, 'isRegFile');
  var ke = ['host', 'port', 'database', 'user', 'password'],
    cr = ke.length,
    vu = ke[cr - 1];
  function hr() {
    var r = tt instanceof du && tt.writable === true;
    if (r) {
      var e = Array.prototype.slice.call(arguments).concat(`
`);
      tt.write(Ki.format.apply(Ki, e));
    }
  }
  a(hr, 'warn');
  Object.defineProperty(pe.exports, 'isWin', {
    get: a(function () {
      return pt;
    }, 'get'),
    set: a(function (r) {
      pt = r;
    }, 'set'),
  });
  pe.exports.warnTo = function (r) {
    var e = tt;
    return (tt = r), e;
  };
  pe.exports.getFileName = function (r) {
    var e = r || m.env,
      t = e.PGPASSFILE || (pt ? Vi.join(e.APPDATA || './', 'postgresql', 'pgpass.conf') : Vi.join(e.HOME || './', '.pgpass'));
    return t;
  };
  pe.exports.usePgPass = function (r, e) {
    return Object.prototype.hasOwnProperty.call(m.env, 'PGPASSWORD') ? false : pt ? true : ((e = e || '<unkn>'), xu(r.mode) ? (r.mode & (gu | wu) ? (hr('WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less', e), false) : true) : (hr('WARNING: password file "%s" is not a plain file', e), false));
  };
  var Eu = (pe.exports.match = function (r, e) {
    return ke.slice(0, -1).reduce(function (t, n, i) {
      return i == 1 && Number(r[n] || mu) === Number(e[n]) ? t && true : t && (e[n] === '*' || e[n] === r[n]);
    }, true);
  });
  pe.exports.getPassword = function (r, e, t) {
    var n,
      i = e.pipe(yu());
    function s(c) {
      var h = _u(c);
      h && Au(h) && Eu(r, h) && ((n = h[vu]), i.end());
    }
    a(s, 'onLine');
    var o = a(function () {
        e.destroy(), t(n);
      }, 'onEnd'),
      u = a(function (c) {
        e.destroy(), hr('WARNING: error on reading file: %s', c), t(undefined);
      }, 'onErr');
    e.on('error', u), i.on('data', s).on('end', o).on('error', u);
  };
  var _u = (pe.exports.parseLine = function (r) {
      if (r.length < 11 || r.match(/^\s+#/)) return null;
      for (
        var e = '',
          t = '',
          n = 0,
          i = 0,
          s = 0,
          o = {},
          u = false,
          c = a(function (l, d, b) {
            var C = r.substring(d, b);
            Object.hasOwnProperty.call(m.env, 'PGPASS_NO_DEESCAPE') || (C = C.replace(/\\([:\\])/g, '$1')), (o[ke[l]] = C);
          }, 'addToObj'),
          h = 0;
        h < r.length - 1;
        h += 1
      ) {
        if (((e = r.charAt(h + 1)), (t = r.charAt(h)), (u = n == cr - 1), u)) {
          c(n, i);
          break;
        }
        h >= 0 && e == ':' && t !== '\\' && (c(n, i, h + 1), (i = h + 2), (n += 1));
      }
      return (o = Object.keys(o).length === cr ? o : null), o;
    }),
    Au = (pe.exports.isValidEntry = function (r) {
      for (
        var e = {
            0: function (o) {
              return o.length > 0;
            },
            1: function (o) {
              return o === '*' ? true : ((o = Number(o)), isFinite(o) && o > 0 && o < 9007199254740992 && Math.floor(o) === o);
            },
            2: function (o) {
              return o.length > 0;
            },
            3: function (o) {
              return o.length > 0;
            },
            4: function (o) {
              return o.length > 0;
            },
          },
          t = 0;
        t < ke.length;
        t += 1
      ) {
        var n = e[t],
          i = r[ke[t]] || '',
          s = n(i);
        if (!s) return false;
      }
      return true;
    });
});
var Zi = I((pl, lr) => {
  p();
  var fl = (rr(), N(tr)),
    Yi = (ir(), N(nr)),
    dt = zi();
  lr.exports = function (r, e) {
    var t = dt.getFileName();
    Yi.stat(t, function (n, i) {
      if (n || !dt.usePgPass(i, t)) return e(undefined);
      var s = Yi.createReadStream(t);
      dt.getPassword(r, s, e);
    });
  };
  lr.exports.warnTo = dt.warnTo;
});
var mt = I((yl, Ji) => {
  p();
  var Cu = Je();
  function yt(r) {
    (this._types = r || Cu), (this.text = {}), (this.binary = {});
  }
  a(yt, 'TypeOverrides');
  yt.prototype.getOverrides = function (r) {
    switch (r) {
      case 'text':
        return this.text;
      case 'binary':
        return this.binary;
      default:
        return {};
    }
  };
  yt.prototype.setTypeParser = function (r, e, t) {
    typeof e == 'function' && ((t = e), (e = 'text')), (this.getOverrides(e)[r] = t);
  };
  yt.prototype.getTypeParser = function (r, e) {
    return (e = e || 'text'), this.getOverrides(e)[r] || this._types.getTypeParser(r, e);
  };
  Ji.exports = yt;
});
var Xi = {};
ie(Xi, { default: () => Tu });
var Tu;
var es = z(() => {
  p();
  Tu = {};
});
var ts = {};
ie(ts, { parse: () => fr });
var pr = z(() => {
  p();
  a(fr, 'parse');
});
var ns = I((xl, rs) => {
  p();
  var Iu = (pr(), N(ts)),
    dr = (ir(), N(nr));
  function yr(r) {
    if (r.charAt(0) === '/') {
      var t = r.split(' ');
      return { host: t[0], database: t[1] };
    }
    var e = Iu.parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r) ? encodeURI(r).replace(/\%25(\d\d)/g, '%$1') : r, true),
      t = e.query;
    for (var n in t) Array.isArray(t[n]) && (t[n] = t[n][t[n].length - 1]);
    var i = (e.auth || ':').split(':');
    if (((t.user = i[0]), (t.password = i.splice(1).join(':')), (t.port = e.port), e.protocol == 'socket:')) return (t.host = decodeURI(e.pathname)), (t.database = e.query.db), (t.client_encoding = e.query.encoding), t;
    t.host || (t.host = e.hostname);
    var s = e.pathname;
    if (!t.host && s && /^%2f/i.test(s)) {
      var o = s.split('/');
      (t.host = decodeURIComponent(o[0])), (s = o.splice(1).join('/'));
    }
    switch ((s && s.charAt(0) === '/' && (s = s.slice(1) || null), (t.database = s && decodeURI(s)), (t.ssl === 'true' || t.ssl === '1') && (t.ssl = true), t.ssl === '0' && (t.ssl = false), (t.sslcert || t.sslkey || t.sslrootcert || t.sslmode) && (t.ssl = {}), t.sslcert && (t.ssl.cert = dr.readFileSync(t.sslcert).toString()), t.sslkey && (t.ssl.key = dr.readFileSync(t.sslkey).toString()), t.sslrootcert && (t.ssl.ca = dr.readFileSync(t.sslrootcert).toString()), t.sslmode)) {
      case 'disable': {
        t.ssl = false;
        break;
      }
      case 'prefer':
      case 'require':
      case 'verify-ca':
      case 'verify-full':
        break;
      case 'no-verify': {
        t.ssl.rejectUnauthorized = false;
        break;
      }
    }
    return t;
  }
  a(yr, 'parse');
  rs.exports = yr;
  yr.parse = yr;
});
var gt = I((_l, os) => {
  p();
  var Pu = (es(), N(Xi)),
    ss = Xe(),
    is = ns().parse,
    $ = a(function (r, e, t) {
      return t === undefined ? (t = m.env['PG' + r.toUpperCase()]) : t === false || (t = m.env[t]), e[r] || t || ss[r];
    }, 'val'),
    Bu = a(function () {
      switch (m.env.PGSSLMODE) {
        case 'disable':
          return false;
        case 'prefer':
        case 'require':
        case 'verify-ca':
        case 'verify-full':
          return true;
        case 'no-verify':
          return { rejectUnauthorized: false };
      }
      return ss.ssl;
    }, 'readSSLConfigFromEnvironment'),
    Ue = a(function (r) {
      return "'" + ('' + r).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
    }, 'quoteParamValue'),
    ne = a(function (r, e, t) {
      var n = e[t];
      n != null && r.push(t + '=' + Ue(n));
    }, 'add'),
    gr = class gr2 {
      constructor(e) {
        (e = typeof e == 'string' ? is(e) : e || {}),
          e.connectionString && (e = Object.assign({}, e, is(e.connectionString))),
          (this.user = $('user', e)),
          (this.database = $('database', e)),
          this.database === undefined && (this.database = this.user),
          (this.port = parseInt($('port', e), 10)),
          (this.host = $('host', e)),
          Object.defineProperty(this, 'password', {
            configurable: true,
            enumerable: false,
            writable: true,
            value: $('password', e),
          }),
          (this.binary = $('binary', e)),
          (this.options = $('options', e)),
          (this.ssl = typeof e.ssl > 'u' ? Bu() : e.ssl),
          typeof this.ssl == 'string' && this.ssl === 'true' && (this.ssl = true),
          this.ssl === 'no-verify' && (this.ssl = { rejectUnauthorized: false }),
          this.ssl && this.ssl.key && Object.defineProperty(this.ssl, 'key', { enumerable: false }),
          (this.client_encoding = $('client_encoding', e)),
          (this.replication = $('replication', e)),
          (this.isDomainSocket = !(this.host || '').indexOf('/')),
          (this.application_name = $('application_name', e, 'PGAPPNAME')),
          (this.fallback_application_name = $('fallback_application_name', e, false)),
          (this.statement_timeout = $('statement_timeout', e, false)),
          (this.lock_timeout = $('lock_timeout', e, false)),
          (this.idle_in_transaction_session_timeout = $('idle_in_transaction_session_timeout', e, false)),
          (this.query_timeout = $('query_timeout', e, false)),
          e.connectionTimeoutMillis === undefined ? (this.connect_timeout = m.env.PGCONNECT_TIMEOUT || 0) : (this.connect_timeout = Math.floor(e.connectionTimeoutMillis / 1000)),
          e.keepAlive === false ? (this.keepalives = 0) : e.keepAlive === true && (this.keepalives = 1),
          typeof e.keepAliveInitialDelayMillis == 'number' && (this.keepalives_idle = Math.floor(e.keepAliveInitialDelayMillis / 1000));
      }
      getLibpqConnectionString(e) {
        var t = [];
        ne(t, this, 'user'), ne(t, this, 'password'), ne(t, this, 'port'), ne(t, this, 'application_name'), ne(t, this, 'fallback_application_name'), ne(t, this, 'connect_timeout'), ne(t, this, 'options');
        var n = typeof this.ssl == 'object' ? this.ssl : this.ssl ? { sslmode: this.ssl } : {};
        if ((ne(t, n, 'sslmode'), ne(t, n, 'sslca'), ne(t, n, 'sslkey'), ne(t, n, 'sslcert'), ne(t, n, 'sslrootcert'), this.database && t.push('dbname=' + Ue(this.database)), this.replication && t.push('replication=' + Ue(this.replication)), this.host && t.push('host=' + Ue(this.host)), this.isDomainSocket)) return e(null, t.join(' '));
        this.client_encoding && t.push('client_encoding=' + Ue(this.client_encoding)),
          Pu.lookup(this.host, function (i, s) {
            return i ? e(i, null) : (t.push('hostaddr=' + Ue(s)), e(null, t.join(' ')));
          });
      }
    };
  a(gr, 'ConnectionParameters');
  var mr = gr;
  os.exports = mr;
});
var cs = I((Tl, us) => {
  p();
  var Lu = Je(),
    as = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
    br = class br2 {
      constructor(e, t) {
        (this.command = null), (this.rowCount = null), (this.oid = null), (this.rows = []), (this.fields = []), (this._parsers = undefined), (this._types = t), (this.RowCtor = null), (this.rowAsArray = e === 'array'), this.rowAsArray && (this.parseRow = this._parseRowAsArray);
      }
      addCommandComplete(e) {
        var t;
        e.text ? (t = as.exec(e.text)) : (t = as.exec(e.command)), t && ((this.command = t[1]), t[3] ? ((this.oid = parseInt(t[2], 10)), (this.rowCount = parseInt(t[3], 10))) : t[2] && (this.rowCount = parseInt(t[2], 10)));
      }
      _parseRowAsArray(e) {
        for (var t = new Array(e.length), n = 0, i = e.length; n < i; n++) {
          var s = e[n];
          s !== null ? (t[n] = this._parsers[n](s)) : (t[n] = null);
        }
        return t;
      }
      parseRow(e) {
        for (var t = {}, n = 0, i = e.length; n < i; n++) {
          var s = e[n],
            o = this.fields[n].name;
          s !== null ? (t[o] = this._parsers[n](s)) : (t[o] = null);
        }
        return t;
      }
      addRow(e) {
        this.rows.push(e);
      }
      addFields(e) {
        (this.fields = e), this.fields.length && (this._parsers = new Array(e.length));
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          this._types ? (this._parsers[t] = this._types.getTypeParser(n.dataTypeID, n.format || 'text')) : (this._parsers[t] = Lu.getTypeParser(n.dataTypeID, n.format || 'text'));
        }
      }
    };
  a(br, 'Result');
  var wr = br;
  us.exports = wr;
});
var ps = I((Bl, fs) => {
  p();
  var { EventEmitter: Ru } = we(),
    hs = cs(),
    ls = et(),
    xr = class xr2 extends Ru {
      constructor(e, t, n) {
        super(), (e = ls.normalizeQueryConfig(e, t, n)), (this.text = e.text), (this.values = e.values), (this.rows = e.rows), (this.types = e.types), (this.name = e.name), (this.binary = e.binary), (this.portal = e.portal || ''), (this.callback = e.callback), (this._rowMode = e.rowMode), m.domain && e.callback && (this.callback = m.domain.bind(e.callback)), (this._result = new hs(this._rowMode, this.types)), (this._results = this._result), (this.isPreparedStatement = false), (this._canceledDueToError = false), (this._promise = null);
      }
      requiresPreparation() {
        return this.name || this.rows ? true : !this.text || !this.values ? false : this.values.length > 0;
      }
      _checkForMultirow() {
        this._result.command && (Array.isArray(this._results) || (this._results = [this._result]), (this._result = new hs(this._rowMode, this.types)), this._results.push(this._result));
      }
      handleRowDescription(e) {
        this._checkForMultirow(), this._result.addFields(e.fields), (this._accumulateRows = this.callback || !this.listeners('row').length);
      }
      handleDataRow(e) {
        let t;
        if (!this._canceledDueToError) {
          try {
            t = this._result.parseRow(e.fields);
          } catch (n) {
            this._canceledDueToError = n;
            return;
          }
          this.emit('row', t, this._result), this._accumulateRows && this._result.addRow(t);
        }
      }
      handleCommandComplete(e, t) {
        this._checkForMultirow(), this._result.addCommandComplete(e), this.rows && t.sync();
      }
      handleEmptyQuery(e) {
        this.rows && e.sync();
      }
      handleError(e, t) {
        if ((this._canceledDueToError && ((e = this._canceledDueToError), (this._canceledDueToError = false)), this.callback)) return this.callback(e);
        this.emit('error', e);
      }
      handleReadyForQuery(e) {
        if (this._canceledDueToError) return this.handleError(this._canceledDueToError, e);
        if (this.callback)
          try {
            this.callback(null, this._results);
          } catch (t) {
            m.nextTick(() => {
              throw t;
            });
          }
        this.emit('end', this._results);
      }
      submit(e) {
        if (typeof this.text != 'string' && typeof this.name != 'string') return new Error('A query must have either text or a name. Supplying neither is unsupported.');
        let t = e.parsedStatements[this.name];
        return this.text && t && this.text !== t ? new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`) : this.values && !Array.isArray(this.values) ? new Error('Query values must be an array') : (this.requiresPreparation() ? this.prepare(e) : e.query(this.text), null);
      }
      hasBeenParsed(e) {
        return this.name && e.parsedStatements[this.name];
      }
      handlePortalSuspended(e) {
        this._getRows(e, this.rows);
      }
      _getRows(e, t) {
        e.execute({ portal: this.portal, rows: t }), t ? e.flush() : e.sync();
      }
      prepare(e) {
        (this.isPreparedStatement = true), this.hasBeenParsed(e) || e.parse({ text: this.text, name: this.name, types: this.types });
        try {
          e.bind({ portal: this.portal, statement: this.name, values: this.values, binary: this.binary, valueMapper: ls.prepareValue });
        } catch (t) {
          this.handleError(t, e);
          return;
        }
        e.describe({ type: 'P', name: this.portal || '' }), this._getRows(e, this.rows);
      }
      handleCopyInResponse(e) {
        e.sendCopyFail('No source stream defined');
      }
      handleCopyData(e, t) {}
    };
  a(xr, 'Query');
  var Sr = xr;
  fs.exports = Sr;
});
var ys = {};
ie(ys, { Socket: () => _e, isIP: () => Fu });
var ds;
var Mu;
var E;
var _e;
var wt = z(() => {
  p();
  ds = Te(we(), 1);
  a(Fu, 'isIP');
  (Mu = a((r) => r.replace(/^[^.]+\./, 'api.'), 'transformHost')),
    (E = class E2 extends ds.EventEmitter {
      constructor() {
        super(...arguments);
        _(this, 'opts', {});
        _(this, 'connecting', false);
        _(this, 'pending', true);
        _(this, 'writable', true);
        _(this, 'encrypted', false);
        _(this, 'authorized', false);
        _(this, 'destroyed', false);
        _(this, 'ws', null);
        _(this, 'writeBuffer');
        _(this, 'tlsState', 0);
        _(this, 'tlsRead');
        _(this, 'tlsWrite');
      }
      static get poolQueryViaFetch() {
        return E2.opts.poolQueryViaFetch ?? E2.defaults.poolQueryViaFetch;
      }
      static set poolQueryViaFetch(t) {
        E2.opts.poolQueryViaFetch = t;
      }
      static get fetchEndpoint() {
        return E2.opts.fetchEndpoint ?? E2.defaults.fetchEndpoint;
      }
      static set fetchEndpoint(t) {
        E2.opts.fetchEndpoint = t;
      }
      static get fetchConnectionCache() {
        return true;
      }
      static set fetchConnectionCache(t) {
        console.warn('The `fetchConnectionCache` option is deprecated (now always `true`)');
      }
      static get fetchFunction() {
        return E2.opts.fetchFunction ?? E2.defaults.fetchFunction;
      }
      static set fetchFunction(t) {
        E2.opts.fetchFunction = t;
      }
      static get webSocketConstructor() {
        return E2.opts.webSocketConstructor ?? E2.defaults.webSocketConstructor;
      }
      static set webSocketConstructor(t) {
        E2.opts.webSocketConstructor = t;
      }
      get webSocketConstructor() {
        return this.opts.webSocketConstructor ?? E2.webSocketConstructor;
      }
      set webSocketConstructor(t) {
        this.opts.webSocketConstructor = t;
      }
      static get wsProxy() {
        return E2.opts.wsProxy ?? E2.defaults.wsProxy;
      }
      static set wsProxy(t) {
        E2.opts.wsProxy = t;
      }
      get wsProxy() {
        return this.opts.wsProxy ?? E2.wsProxy;
      }
      set wsProxy(t) {
        this.opts.wsProxy = t;
      }
      static get coalesceWrites() {
        return E2.opts.coalesceWrites ?? E2.defaults.coalesceWrites;
      }
      static set coalesceWrites(t) {
        E2.opts.coalesceWrites = t;
      }
      get coalesceWrites() {
        return this.opts.coalesceWrites ?? E2.coalesceWrites;
      }
      set coalesceWrites(t) {
        this.opts.coalesceWrites = t;
      }
      static get useSecureWebSocket() {
        return E2.opts.useSecureWebSocket ?? E2.defaults.useSecureWebSocket;
      }
      static set useSecureWebSocket(t) {
        E2.opts.useSecureWebSocket = t;
      }
      get useSecureWebSocket() {
        return this.opts.useSecureWebSocket ?? E2.useSecureWebSocket;
      }
      set useSecureWebSocket(t) {
        this.opts.useSecureWebSocket = t;
      }
      static get forceDisablePgSSL() {
        return E2.opts.forceDisablePgSSL ?? E2.defaults.forceDisablePgSSL;
      }
      static set forceDisablePgSSL(t) {
        E2.opts.forceDisablePgSSL = t;
      }
      get forceDisablePgSSL() {
        return this.opts.forceDisablePgSSL ?? E2.forceDisablePgSSL;
      }
      set forceDisablePgSSL(t) {
        this.opts.forceDisablePgSSL = t;
      }
      static get disableSNI() {
        return E2.opts.disableSNI ?? E2.defaults.disableSNI;
      }
      static set disableSNI(t) {
        E2.opts.disableSNI = t;
      }
      get disableSNI() {
        return this.opts.disableSNI ?? E2.disableSNI;
      }
      set disableSNI(t) {
        this.opts.disableSNI = t;
      }
      static get pipelineConnect() {
        return E2.opts.pipelineConnect ?? E2.defaults.pipelineConnect;
      }
      static set pipelineConnect(t) {
        E2.opts.pipelineConnect = t;
      }
      get pipelineConnect() {
        return this.opts.pipelineConnect ?? E2.pipelineConnect;
      }
      set pipelineConnect(t) {
        this.opts.pipelineConnect = t;
      }
      static get subtls() {
        return E2.opts.subtls ?? E2.defaults.subtls;
      }
      static set subtls(t) {
        E2.opts.subtls = t;
      }
      get subtls() {
        return this.opts.subtls ?? E2.subtls;
      }
      set subtls(t) {
        this.opts.subtls = t;
      }
      static get pipelineTLS() {
        return E2.opts.pipelineTLS ?? E2.defaults.pipelineTLS;
      }
      static set pipelineTLS(t) {
        E2.opts.pipelineTLS = t;
      }
      get pipelineTLS() {
        return this.opts.pipelineTLS ?? E2.pipelineTLS;
      }
      set pipelineTLS(t) {
        this.opts.pipelineTLS = t;
      }
      static get rootCerts() {
        return E2.opts.rootCerts ?? E2.defaults.rootCerts;
      }
      static set rootCerts(t) {
        E2.opts.rootCerts = t;
      }
      get rootCerts() {
        return this.opts.rootCerts ?? E2.rootCerts;
      }
      set rootCerts(t) {
        this.opts.rootCerts = t;
      }
      wsProxyAddrForHost(t, n) {
        let i = this.wsProxy;
        if (i === undefined) throw new Error('No WebSocket proxy is configured. Please see https://github.com/neondatabase/serverless/blob/main/CONFIG.md#wsproxy-string--host-string-port-number--string--string');
        return typeof i == 'function' ? i(t, n) : `${i}?address=${t}:${n}`;
      }
      setNoDelay() {
        return this;
      }
      setKeepAlive() {
        return this;
      }
      ref() {
        return this;
      }
      unref() {
        return this;
      }
      connect(t, n, i) {
        (this.connecting = true), i && this.once('connect', i);
        let s = a(() => {
            (this.connecting = false), (this.pending = false), this.emit('connect'), this.emit('ready');
          }, 'handleWebSocketOpen'),
          o = a((c, h = false) => {
            (c.binaryType = 'arraybuffer'),
              c.addEventListener('error', (l) => {
                this.emit('error', l), this.emit('close');
              }),
              c.addEventListener('message', (l) => {
                if (this.tlsState === 0) {
                  let d = y.from(l.data);
                  this.emit('data', d);
                }
              }),
              c.addEventListener('close', () => {
                this.emit('close');
              }),
              h ? s() : c.addEventListener('open', s);
          }, 'configureWebSocket'),
          u;
        try {
          u = this.wsProxyAddrForHost(n, typeof t == 'string' ? parseInt(t, 10) : t);
        } catch (c) {
          this.emit('error', c), this.emit('close');
          return;
        }
        try {
          let h = (this.useSecureWebSocket ? 'wss:' : 'ws:') + '//' + u;
          if (this.webSocketConstructor !== undefined) (this.ws = new this.webSocketConstructor(h)), o(this.ws);
          else
            try {
              (this.ws = new WebSocket(h)), o(this.ws);
            } catch {
              (this.ws = new __unstable_WebSocket(h)), o(this.ws);
            }
        } catch (c) {
          let l = (this.useSecureWebSocket ? 'https:' : 'http:') + '//' + u;
          fetch(l, { headers: { Upgrade: 'websocket' } })
            .then((d) => {
              if (((this.ws = d.webSocket), this.ws == null)) throw c;
              this.ws.accept(), o(this.ws, true);
            })
            .catch((d) => {
              this.emit('error', new Error(`All attempts to open a WebSocket to connect to the database failed. Please refer to https://github.com/neondatabase/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined. Details: ${d.message}`)), this.emit('close');
            });
        }
      }
      async startTls(t) {
        if (this.subtls === undefined) throw new Error('For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls library. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for more information.');
        this.tlsState = 1;
        let n = this.subtls.TrustedCert.fromPEM(this.rootCerts),
          i = new this.subtls.WebSocketReadQueue(this.ws),
          s = i.read.bind(i),
          o = this.rawWrite.bind(this),
          [u, c] = await this.subtls.startTls(t, n, s, o, { useSNI: !this.disableSNI, expectPreData: this.pipelineTLS ? new Uint8Array([83]) : undefined });
        (this.tlsRead = u), (this.tlsWrite = c), (this.tlsState = 2), (this.encrypted = true), (this.authorized = true), this.emit('secureConnection', this), this.tlsReadLoop();
      }
      async tlsReadLoop() {
        for (;;) {
          let t = await this.tlsRead();
          if (t === undefined) break;
          {
            let n = y.from(t);
            this.emit('data', n);
          }
        }
      }
      rawWrite(t) {
        if (!this.coalesceWrites) {
          this.ws.send(t);
          return;
        }
        if (this.writeBuffer === undefined)
          (this.writeBuffer = t),
            setTimeout(() => {
              this.ws.send(this.writeBuffer), (this.writeBuffer = undefined);
            }, 0);
        else {
          let n = new Uint8Array(this.writeBuffer.length + t.length);
          n.set(this.writeBuffer), n.set(t, this.writeBuffer.length), (this.writeBuffer = n);
        }
      }
      write(t, n = 'utf8', i = (s) => {}) {
        return t.length === 0
          ? (i(), true)
          : (typeof t == 'string' && (t = y.from(t, n)),
            this.tlsState === 0
              ? (this.rawWrite(t), i())
              : this.tlsState === 1
                ? this.once('secureConnection', () => {
                    this.write(t, n, i);
                  })
                : (this.tlsWrite(t), i()),
            true);
      }
      end(t = y.alloc(0), n = 'utf8', i = () => {}) {
        return (
          this.write(t, n, () => {
            this.ws.close(), i();
          }),
          this
        );
      }
      destroy() {
        return (this.destroyed = true), this.end();
      }
    });
  a(E, 'Socket'),
    _(E, 'defaults', {
      poolQueryViaFetch: false,
      fetchEndpoint: a((t) => 'https://' + Mu(t) + '/sql', 'fetchEndpoint'),
      fetchConnectionCache: true,
      fetchFunction: undefined,
      webSocketConstructor: undefined,
      wsProxy: a((t) => t + '/v2', 'wsProxy'),
      useSecureWebSocket: true,
      forceDisablePgSSL: true,
      coalesceWrites: true,
      pipelineConnect: 'password',
      subtls: undefined,
      rootCerts: '',
      pipelineTLS: false,
      disableSNI: false,
    }),
    _(E, 'opts', {});
  _e = E;
});
var Yr = I((T) => {
  p();
  Object.defineProperty(T, '__esModule', { value: true });
  T.NoticeMessage = T.DataRowMessage = T.CommandCompleteMessage = T.ReadyForQueryMessage = T.NotificationResponseMessage = T.BackendKeyDataMessage = T.AuthenticationMD5Password = T.ParameterStatusMessage = T.ParameterDescriptionMessage = T.RowDescriptionMessage = T.Field = T.CopyResponse = T.CopyDataMessage = T.DatabaseError = T.copyDone = T.emptyQuery = T.replicationStart = T.portalSuspended = T.noData = T.closeComplete = T.bindComplete = T.parseComplete = undefined;
  T.parseComplete = { name: 'parseComplete', length: 5 };
  T.bindComplete = { name: 'bindComplete', length: 5 };
  T.closeComplete = { name: 'closeComplete', length: 5 };
  T.noData = { name: 'noData', length: 5 };
  T.portalSuspended = { name: 'portalSuspended', length: 5 };
  T.replicationStart = { name: 'replicationStart', length: 4 };
  T.emptyQuery = { name: 'emptyQuery', length: 4 };
  T.copyDone = { name: 'copyDone', length: 4 };
  var kr = class kr2 extends Error {
    constructor(e, t, n) {
      super(e), (this.length = t), (this.name = n);
    }
  };
  a(kr, 'DatabaseError');
  var vr = kr;
  T.DatabaseError = vr;
  var Ur = class Ur2 {
    constructor(e, t) {
      (this.length = e), (this.chunk = t), (this.name = 'copyData');
    }
  };
  a(Ur, 'CopyDataMessage');
  var Er = Ur;
  T.CopyDataMessage = Er;
  var Or = class Or2 {
    constructor(e, t, n, i) {
      (this.length = e), (this.name = t), (this.binary = n), (this.columnTypes = new Array(i));
    }
  };
  a(Or, 'CopyResponse');
  var _r = Or;
  T.CopyResponse = _r;
  var Nr = class Nr2 {
    constructor(e, t, n, i, s, o, u) {
      (this.name = e), (this.tableID = t), (this.columnID = n), (this.dataTypeID = i), (this.dataTypeSize = s), (this.dataTypeModifier = o), (this.format = u);
    }
  };
  a(Nr, 'Field');
  var Ar = Nr;
  T.Field = Ar;
  var qr = class qr2 {
    constructor(e, t) {
      (this.length = e), (this.fieldCount = t), (this.name = 'rowDescription'), (this.fields = new Array(this.fieldCount));
    }
  };
  a(qr, 'RowDescriptionMessage');
  var Cr = qr;
  T.RowDescriptionMessage = Cr;
  var Qr = class Qr2 {
    constructor(e, t) {
      (this.length = e), (this.parameterCount = t), (this.name = 'parameterDescription'), (this.dataTypeIDs = new Array(this.parameterCount));
    }
  };
  a(Qr, 'ParameterDescriptionMessage');
  var Tr = Qr;
  T.ParameterDescriptionMessage = Tr;
  var Wr = class Wr2 {
    constructor(e, t, n) {
      (this.length = e), (this.parameterName = t), (this.parameterValue = n), (this.name = 'parameterStatus');
    }
  };
  a(Wr, 'ParameterStatusMessage');
  var Ir = Wr;
  T.ParameterStatusMessage = Ir;
  var jr = class jr2 {
    constructor(e, t) {
      (this.length = e), (this.salt = t), (this.name = 'authenticationMD5Password');
    }
  };
  a(jr, 'AuthenticationMD5Password');
  var Pr = jr;
  T.AuthenticationMD5Password = Pr;
  var Hr = class Hr2 {
    constructor(e, t, n) {
      (this.length = e), (this.processID = t), (this.secretKey = n), (this.name = 'backendKeyData');
    }
  };
  a(Hr, 'BackendKeyDataMessage');
  var Br = Hr;
  T.BackendKeyDataMessage = Br;
  var Gr = class Gr2 {
    constructor(e, t, n, i) {
      (this.length = e), (this.processId = t), (this.channel = n), (this.payload = i), (this.name = 'notification');
    }
  };
  a(Gr, 'NotificationResponseMessage');
  var Lr = Gr;
  T.NotificationResponseMessage = Lr;
  var $r = class $r2 {
    constructor(e, t) {
      (this.length = e), (this.status = t), (this.name = 'readyForQuery');
    }
  };
  a($r, 'ReadyForQueryMessage');
  var Rr = $r;
  T.ReadyForQueryMessage = Rr;
  var Vr = class Vr2 {
    constructor(e, t) {
      (this.length = e), (this.text = t), (this.name = 'commandComplete');
    }
  };
  a(Vr, 'CommandCompleteMessage');
  var Fr = Vr;
  T.CommandCompleteMessage = Fr;
  var Kr = class Kr2 {
    constructor(e, t) {
      (this.length = e), (this.fields = t), (this.name = 'dataRow'), (this.fieldCount = t.length);
    }
  };
  a(Kr, 'DataRowMessage');
  var Mr = Kr;
  T.DataRowMessage = Mr;
  var zr = class zr2 {
    constructor(e, t) {
      (this.length = e), (this.message = t), (this.name = 'notice');
    }
  };
  a(zr, 'NoticeMessage');
  var Dr = zr;
  T.NoticeMessage = Dr;
});
var ms = I((bt) => {
  p();
  Object.defineProperty(bt, '__esModule', { value: true });
  bt.Writer = undefined;
  var Jr = class Jr2 {
    constructor(e = 256) {
      (this.size = e), (this.offset = 5), (this.headerPosition = 0), (this.buffer = y.allocUnsafe(e));
    }
    ensure(e) {
      var t = this.buffer.length - this.offset;
      if (t < e) {
        var n = this.buffer,
          i = n.length + (n.length >> 1) + e;
        (this.buffer = y.allocUnsafe(i)), n.copy(this.buffer);
      }
    }
    addInt32(e) {
      return this.ensure(4), (this.buffer[this.offset++] = (e >>> 24) & 255), (this.buffer[this.offset++] = (e >>> 16) & 255), (this.buffer[this.offset++] = (e >>> 8) & 255), (this.buffer[this.offset++] = (e >>> 0) & 255), this;
    }
    addInt16(e) {
      return this.ensure(2), (this.buffer[this.offset++] = (e >>> 8) & 255), (this.buffer[this.offset++] = (e >>> 0) & 255), this;
    }
    addCString(e) {
      if (!e) this.ensure(1);
      else {
        var t = y.byteLength(e);
        this.ensure(t + 1), this.buffer.write(e, this.offset, 'utf-8'), (this.offset += t);
      }
      return (this.buffer[this.offset++] = 0), this;
    }
    addString(e = '') {
      var t = y.byteLength(e);
      return this.ensure(t), this.buffer.write(e, this.offset), (this.offset += t), this;
    }
    add(e) {
      return this.ensure(e.length), e.copy(this.buffer, this.offset), (this.offset += e.length), this;
    }
    join(e) {
      if (e) {
        this.buffer[this.headerPosition] = e;
        let t = this.offset - (this.headerPosition + 1);
        this.buffer.writeInt32BE(t, this.headerPosition + 1);
      }
      return this.buffer.slice(e ? 0 : 5, this.offset);
    }
    flush(e) {
      var t = this.join(e);
      return (this.offset = 5), (this.headerPosition = 0), (this.buffer = y.allocUnsafe(this.size)), t;
    }
  };
  a(Jr, 'Writer');
  var Zr = Jr;
  bt.Writer = Zr;
});
var ws = I((xt) => {
  p();
  Object.defineProperty(xt, '__esModule', { value: true });
  xt.serialize = undefined;
  var Xr = ms(),
    M = new Xr.Writer(),
    Du = a((r) => {
      M.addInt16(3).addInt16(0);
      for (let n of Object.keys(r)) M.addCString(n).addCString(r[n]);
      M.addCString('client_encoding').addCString('UTF8');
      var e = M.addCString('').flush(),
        t = e.length + 4;
      return new Xr.Writer().addInt32(t).add(e).flush();
    }, 'startup'),
    ku = a(() => {
      let r = y.allocUnsafe(8);
      return r.writeInt32BE(8, 0), r.writeInt32BE(80877103, 4), r;
    }, 'requestSsl'),
    Uu = a((r) => M.addCString(r).flush(112), 'password'),
    Ou = a(function (r, e) {
      return M.addCString(r).addInt32(y.byteLength(e)).addString(e), M.flush(112);
    }, 'sendSASLInitialResponseMessage'),
    Nu = a(function (r) {
      return M.addString(r).flush(112);
    }, 'sendSCRAMClientFinalMessage'),
    qu = a((r) => M.addCString(r).flush(81), 'query'),
    gs = [],
    Qu = a((r) => {
      let e = r.name || '';
      e.length > 63 && (console.error('Warning! Postgres only supports 63 characters for query names.'), console.error('You supplied %s (%s)', e, e.length), console.error('This can cause conflicts and silent errors executing queries'));
      let t = r.types || gs;
      for (var n = t.length, i = M.addCString(e).addCString(r.text).addInt16(n), s = 0; s < n; s++) i.addInt32(t[s]);
      return M.flush(80);
    }, 'parse'),
    Oe = new Xr.Writer(),
    Wu = a(function (r, e) {
      for (let t = 0; t < r.length; t++) {
        let n = e ? e(r[t], t) : r[t];
        n == null ? (M.addInt16(0), Oe.addInt32(-1)) : n instanceof y ? (M.addInt16(1), Oe.addInt32(n.length), Oe.add(n)) : (M.addInt16(0), Oe.addInt32(y.byteLength(n)), Oe.addString(n));
      }
    }, 'writeValues'),
    ju = a((r = {}) => {
      let e = r.portal || '',
        t = r.statement || '',
        n = r.binary || false,
        i = r.values || gs,
        s = i.length;
      return M.addCString(e).addCString(t), M.addInt16(s), Wu(i, r.valueMapper), M.addInt16(s), M.add(Oe.flush()), M.addInt16(n ? 1 : 0), M.flush(66);
    }, 'bind'),
    Hu = y.from([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]),
    Gu = a((r) => {
      if (!r || (!r.portal && !r.rows)) return Hu;
      let e = r.portal || '',
        t = r.rows || 0,
        n = y.byteLength(e),
        i = 4 + n + 1 + 4,
        s = y.allocUnsafe(1 + i);
      return (s[0] = 69), s.writeInt32BE(i, 1), s.write(e, 5, 'utf-8'), (s[n + 5] = 0), s.writeUInt32BE(t, s.length - 4), s;
    }, 'execute'),
    $u = a((r, e) => {
      let t = y.allocUnsafe(16);
      return t.writeInt32BE(16, 0), t.writeInt16BE(1234, 4), t.writeInt16BE(5678, 6), t.writeInt32BE(r, 8), t.writeInt32BE(e, 12), t;
    }, 'cancel'),
    en = a((r, e) => {
      let n = 4 + y.byteLength(e) + 1,
        i = y.allocUnsafe(1 + n);
      return (i[0] = r), i.writeInt32BE(n, 1), i.write(e, 5, 'utf-8'), (i[n] = 0), i;
    }, 'cstringMessage'),
    Vu = M.addCString('P').flush(68),
    Ku = M.addCString('S').flush(68),
    zu = a((r) => (r.name ? en(68, `${r.type}${r.name || ''}`) : r.type === 'P' ? Vu : Ku), 'describe'),
    Yu = a((r) => {
      let e = `${r.type}${r.name || ''}`;
      return en(67, e);
    }, 'close'),
    Zu = a((r) => M.add(r).flush(100), 'copyData'),
    Ju = a((r) => en(102, r), 'copyFail'),
    St = a((r) => y.from([r, 0, 0, 0, 4]), 'codeOnlyBuffer'),
    Xu = St(72),
    ec = St(83),
    tc = St(88),
    rc = St(99),
    nc = {
      startup: Du,
      password: Uu,
      requestSsl: ku,
      sendSASLInitialResponseMessage: Ou,
      sendSCRAMClientFinalMessage: Nu,
      query: qu,
      parse: Qu,
      bind: ju,
      execute: Gu,
      describe: zu,
      close: Yu,
      flush: a(() => Xu, 'flush'),
      sync: a(() => ec, 'sync'),
      end: a(() => tc, 'end'),
      copyData: Zu,
      copyDone: a(() => rc, 'copyDone'),
      copyFail: Ju,
      cancel: $u,
    };
  xt.serialize = nc;
});
var bs = I((vt) => {
  p();
  Object.defineProperty(vt, '__esModule', { value: true });
  vt.BufferReader = undefined;
  var ic = y.allocUnsafe(0),
    rn = class rn2 {
      constructor(e = 0) {
        (this.offset = e), (this.buffer = ic), (this.encoding = 'utf-8');
      }
      setBuffer(e, t) {
        (this.offset = e), (this.buffer = t);
      }
      int16() {
        let e = this.buffer.readInt16BE(this.offset);
        return (this.offset += 2), e;
      }
      byte() {
        let e = this.buffer[this.offset];
        return this.offset++, e;
      }
      int32() {
        let e = this.buffer.readInt32BE(this.offset);
        return (this.offset += 4), e;
      }
      string(e) {
        let t = this.buffer.toString(this.encoding, this.offset, this.offset + e);
        return (this.offset += e), t;
      }
      cstring() {
        let e = this.offset,
          t = e;
        for (; this.buffer[t++] !== 0; );
        return (this.offset = t), this.buffer.toString(this.encoding, e, t - 1);
      }
      bytes(e) {
        let t = this.buffer.slice(this.offset, this.offset + e);
        return (this.offset += e), t;
      }
    };
  a(rn, 'BufferReader');
  var tn = rn;
  vt.BufferReader = tn;
});
var vs = I((Et) => {
  p();
  Object.defineProperty(Et, '__esModule', { value: true });
  Et.Parser = undefined;
  var D = Yr(),
    sc = bs(),
    nn = 1,
    oc = 4,
    Ss = nn + oc,
    xs = y.allocUnsafe(0),
    on = class on2 {
      constructor(e) {
        if (((this.buffer = xs), (this.bufferLength = 0), (this.bufferOffset = 0), (this.reader = new sc.BufferReader()), e?.mode === 'binary')) throw new Error('Binary mode not supported yet');
        this.mode = e?.mode || 'text';
      }
      parse(e, t) {
        this.mergeBuffer(e);
        let n = this.bufferOffset + this.bufferLength,
          i = this.bufferOffset;
        for (; i + Ss <= n; ) {
          let s = this.buffer[i],
            o = this.buffer.readUInt32BE(i + nn),
            u = nn + o;
          if (u + i <= n) {
            let c = this.handlePacket(i + Ss, s, o, this.buffer);
            t(c), (i += u);
          } else break;
        }
        i === n ? ((this.buffer = xs), (this.bufferLength = 0), (this.bufferOffset = 0)) : ((this.bufferLength = n - i), (this.bufferOffset = i));
      }
      mergeBuffer(e) {
        if (this.bufferLength > 0) {
          let t = this.bufferLength + e.byteLength;
          if (t + this.bufferOffset > this.buffer.byteLength) {
            let i;
            if (t <= this.buffer.byteLength && this.bufferOffset >= this.bufferLength) i = this.buffer;
            else {
              let s = this.buffer.byteLength * 2;
              for (; t >= s; ) s *= 2;
              i = y.allocUnsafe(s);
            }
            this.buffer.copy(i, 0, this.bufferOffset, this.bufferOffset + this.bufferLength), (this.buffer = i), (this.bufferOffset = 0);
          }
          e.copy(this.buffer, this.bufferOffset + this.bufferLength), (this.bufferLength = t);
        } else (this.buffer = e), (this.bufferOffset = 0), (this.bufferLength = e.byteLength);
      }
      handlePacket(e, t, n, i) {
        switch (t) {
          case 50:
            return D.bindComplete;
          case 49:
            return D.parseComplete;
          case 51:
            return D.closeComplete;
          case 110:
            return D.noData;
          case 115:
            return D.portalSuspended;
          case 99:
            return D.copyDone;
          case 87:
            return D.replicationStart;
          case 73:
            return D.emptyQuery;
          case 68:
            return this.parseDataRowMessage(e, n, i);
          case 67:
            return this.parseCommandCompleteMessage(e, n, i);
          case 90:
            return this.parseReadyForQueryMessage(e, n, i);
          case 65:
            return this.parseNotificationMessage(e, n, i);
          case 82:
            return this.parseAuthenticationResponse(e, n, i);
          case 83:
            return this.parseParameterStatusMessage(e, n, i);
          case 75:
            return this.parseBackendKeyData(e, n, i);
          case 69:
            return this.parseErrorMessage(e, n, i, 'error');
          case 78:
            return this.parseErrorMessage(e, n, i, 'notice');
          case 84:
            return this.parseRowDescriptionMessage(e, n, i);
          case 116:
            return this.parseParameterDescriptionMessage(e, n, i);
          case 71:
            return this.parseCopyInMessage(e, n, i);
          case 72:
            return this.parseCopyOutMessage(e, n, i);
          case 100:
            return this.parseCopyData(e, n, i);
          default:
            return new D.DatabaseError('received invalid response: ' + t.toString(16), n, 'error');
        }
      }
      parseReadyForQueryMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.string(1);
        return new D.ReadyForQueryMessage(t, i);
      }
      parseCommandCompleteMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.cstring();
        return new D.CommandCompleteMessage(t, i);
      }
      parseCopyData(e, t, n) {
        let i = n.slice(e, e + (t - 4));
        return new D.CopyDataMessage(t, i);
      }
      parseCopyInMessage(e, t, n) {
        return this.parseCopyMessage(e, t, n, 'copyInResponse');
      }
      parseCopyOutMessage(e, t, n) {
        return this.parseCopyMessage(e, t, n, 'copyOutResponse');
      }
      parseCopyMessage(e, t, n, i) {
        this.reader.setBuffer(e, n);
        let s = this.reader.byte() !== 0,
          o = this.reader.int16(),
          u = new D.CopyResponse(t, i, s, o);
        for (let c = 0; c < o; c++) u.columnTypes[c] = this.reader.int16();
        return u;
      }
      parseNotificationMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int32(),
          s = this.reader.cstring(),
          o = this.reader.cstring();
        return new D.NotificationResponseMessage(t, i, s, o);
      }
      parseRowDescriptionMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int16(),
          s = new D.RowDescriptionMessage(t, i);
        for (let o = 0; o < i; o++) s.fields[o] = this.parseField();
        return s;
      }
      parseField() {
        let e = this.reader.cstring(),
          t = this.reader.int32(),
          n = this.reader.int16(),
          i = this.reader.int32(),
          s = this.reader.int16(),
          o = this.reader.int32(),
          u = this.reader.int16() === 0 ? 'text' : 'binary';
        return new D.Field(e, t, n, i, s, o, u);
      }
      parseParameterDescriptionMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int16(),
          s = new D.ParameterDescriptionMessage(t, i);
        for (let o = 0; o < i; o++) s.dataTypeIDs[o] = this.reader.int32();
        return s;
      }
      parseDataRowMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int16(),
          s = new Array(i);
        for (let o = 0; o < i; o++) {
          let u = this.reader.int32();
          s[o] = u === -1 ? null : this.reader.string(u);
        }
        return new D.DataRowMessage(t, s);
      }
      parseParameterStatusMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.cstring(),
          s = this.reader.cstring();
        return new D.ParameterStatusMessage(t, i, s);
      }
      parseBackendKeyData(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int32(),
          s = this.reader.int32();
        return new D.BackendKeyDataMessage(t, i, s);
      }
      parseAuthenticationResponse(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int32(),
          s = { name: 'authenticationOk', length: t };
        switch (i) {
          case 0:
            break;
          case 3:
            s.length === 8 && (s.name = 'authenticationCleartextPassword');
            break;
          case 5:
            if (s.length === 12) {
              s.name = 'authenticationMD5Password';
              let u = this.reader.bytes(4);
              return new D.AuthenticationMD5Password(t, u);
            }
            break;
          case 10:
            (s.name = 'authenticationSASL'), (s.mechanisms = []);
            let o;
            do (o = this.reader.cstring()), o && s.mechanisms.push(o);
            while (o);
            break;
          case 11:
            (s.name = 'authenticationSASLContinue'), (s.data = this.reader.string(t - 8));
            break;
          case 12:
            (s.name = 'authenticationSASLFinal'), (s.data = this.reader.string(t - 8));
            break;
          default:
            throw new Error('Unknown authenticationOk message type ' + i);
        }
        return s;
      }
      parseErrorMessage(e, t, n, i) {
        this.reader.setBuffer(e, n);
        let s = {},
          o = this.reader.string(1);
        for (; o !== '\0'; ) (s[o] = this.reader.cstring()), (o = this.reader.string(1));
        let u = s.M,
          c = i === 'notice' ? new D.NoticeMessage(t, u) : new D.DatabaseError(u, t, i);
        return (c.severity = s.S), (c.code = s.C), (c.detail = s.D), (c.hint = s.H), (c.position = s.P), (c.internalPosition = s.p), (c.internalQuery = s.q), (c.where = s.W), (c.schema = s.s), (c.table = s.t), (c.column = s.c), (c.dataType = s.d), (c.constraint = s.n), (c.file = s.F), (c.line = s.L), (c.routine = s.R), c;
      }
    };
  a(on, 'Parser');
  var sn = on;
  Et.Parser = sn;
});
var an = I((Se) => {
  p();
  Object.defineProperty(Se, '__esModule', { value: true });
  Se.DatabaseError = Se.serialize = Se.parse = undefined;
  var ac = Yr();
  Object.defineProperty(Se, 'DatabaseError', {
    enumerable: true,
    get: a(function () {
      return ac.DatabaseError;
    }, 'get'),
  });
  var uc = ws();
  Object.defineProperty(Se, 'serialize', {
    enumerable: true,
    get: a(function () {
      return uc.serialize;
    }, 'get'),
  });
  var cc = vs();
  function hc(r, e) {
    let t = new cc.Parser();
    return r.on('data', (n) => t.parse(n, e)), new Promise((n) => r.on('end', () => n()));
  }
  a(hc, 'parse');
  Se.parse = hc;
});
var Es = {};
ie(Es, { connect: () => lc });
var _s = z(() => {
  p();
  a(lc, 'connect');
});
var hn = I((tf, Ts) => {
  p();
  var As = (wt(), N(ys)),
    fc = we().EventEmitter,
    { parse: pc, serialize: Q } = an(),
    Cs = Q.flush(),
    dc = Q.sync(),
    yc = Q.end(),
    cn = class cn2 extends fc {
      constructor(e) {
        super(), (e = e || {}), (this.stream = e.stream || new As.Socket()), (this._keepAlive = e.keepAlive), (this._keepAliveInitialDelayMillis = e.keepAliveInitialDelayMillis), (this.lastBuffer = false), (this.parsedStatements = {}), (this.ssl = e.ssl || false), (this._ending = false), (this._emitMessage = false);
        var t = this;
        this.on('newListener', function (n) {
          n === 'message' && (t._emitMessage = true);
        });
      }
      connect(e, t) {
        var n = this;
        (this._connecting = true),
          this.stream.setNoDelay(true),
          this.stream.connect(e, t),
          this.stream.once('connect', function () {
            n._keepAlive && n.stream.setKeepAlive(true, n._keepAliveInitialDelayMillis), n.emit('connect');
          });
        let i = a(function (s) {
          (n._ending && (s.code === 'ECONNRESET' || s.code === 'EPIPE')) || n.emit('error', s);
        }, 'reportStreamError');
        if (
          (this.stream.on('error', i),
          this.stream.on('close', function () {
            n.emit('end');
          }),
          !this.ssl)
        )
          return this.attachListeners(this.stream);
        this.stream.once('data', function (s) {
          var o = s.toString('utf8');
          switch (o) {
            case 'S':
              break;
            case 'N':
              return n.stream.end(), n.emit('error', new Error('The server does not support SSL connections'));
            default:
              return n.stream.end(), n.emit('error', new Error('There was an error establishing an SSL connection'));
          }
          var u = (_s(), N(Es));
          let c = { socket: n.stream };
          n.ssl !== true && (Object.assign(c, n.ssl), 'key' in n.ssl && (c.key = n.ssl.key)), As.isIP(t) === 0 && (c.servername = t);
          try {
            n.stream = u.connect(c);
          } catch (h) {
            return n.emit('error', h);
          }
          n.attachListeners(n.stream), n.stream.on('error', i), n.emit('sslconnect');
        });
      }
      attachListeners(e) {
        e.on('end', () => {
          this.emit('end');
        }),
          pc(e, (t) => {
            var n = t.name === 'error' ? 'errorMessage' : t.name;
            this._emitMessage && this.emit('message', t), this.emit(n, t);
          });
      }
      requestSsl() {
        this.stream.write(Q.requestSsl());
      }
      startup(e) {
        this.stream.write(Q.startup(e));
      }
      cancel(e, t) {
        this._send(Q.cancel(e, t));
      }
      password(e) {
        this._send(Q.password(e));
      }
      sendSASLInitialResponseMessage(e, t) {
        this._send(Q.sendSASLInitialResponseMessage(e, t));
      }
      sendSCRAMClientFinalMessage(e) {
        this._send(Q.sendSCRAMClientFinalMessage(e));
      }
      _send(e) {
        return this.stream.writable ? this.stream.write(e) : false;
      }
      query(e) {
        this._send(Q.query(e));
      }
      parse(e) {
        this._send(Q.parse(e));
      }
      bind(e) {
        this._send(Q.bind(e));
      }
      execute(e) {
        this._send(Q.execute(e));
      }
      flush() {
        this.stream.writable && this.stream.write(Cs);
      }
      sync() {
        (this._ending = true), this._send(Cs), this._send(dc);
      }
      ref() {
        this.stream.ref();
      }
      unref() {
        this.stream.unref();
      }
      end() {
        if (((this._ending = true), !this._connecting || !this.stream.writable)) {
          this.stream.end();
          return;
        }
        return this.stream.write(yc, () => {
          this.stream.end();
        });
      }
      close(e) {
        this._send(Q.close(e));
      }
      describe(e) {
        this._send(Q.describe(e));
      }
      sendCopyFromChunk(e) {
        this._send(Q.copyData(e));
      }
      endCopyFrom() {
        this._send(Q.copyDone());
      }
      sendCopyFail(e) {
        this._send(Q.copyFail(e));
      }
    };
  a(cn, 'Connection');
  var un = cn;
  Ts.exports = un;
});
var Bs = I((of, Ps) => {
  p();
  var mc = we().EventEmitter,
    sf = (He(), N(je)),
    gc = et(),
    ln = qi(),
    wc = Zi(),
    bc = mt(),
    Sc = gt(),
    Is = ps(),
    xc = Xe(),
    vc = hn(),
    fn = class fn2 extends mc {
      constructor(e) {
        super(), (this.connectionParameters = new Sc(e)), (this.user = this.connectionParameters.user), (this.database = this.connectionParameters.database), (this.port = this.connectionParameters.port), (this.host = this.connectionParameters.host), Object.defineProperty(this, 'password', { configurable: true, enumerable: false, writable: true, value: this.connectionParameters.password }), (this.replication = this.connectionParameters.replication);
        var t = e || {};
        (this._Promise = t.Promise || S.Promise), (this._types = new bc(t.types)), (this._ending = false), (this._connecting = false), (this._connected = false), (this._connectionError = false), (this._queryable = true), (this.connection = t.connection || new vc({ stream: t.stream, ssl: this.connectionParameters.ssl, keepAlive: t.keepAlive || false, keepAliveInitialDelayMillis: t.keepAliveInitialDelayMillis || 0, encoding: this.connectionParameters.client_encoding || 'utf8' })), (this.queryQueue = []), (this.binary = t.binary || xc.binary), (this.processID = null), (this.secretKey = null), (this.ssl = this.connectionParameters.ssl || false), this.ssl && this.ssl.key && Object.defineProperty(this.ssl, 'key', { enumerable: false }), (this._connectionTimeoutMillis = t.connectionTimeoutMillis || 0);
      }
      _errorAllQueries(e) {
        let t = a((n) => {
          m.nextTick(() => {
            n.handleError(e, this.connection);
          });
        }, 'enqueueError');
        this.activeQuery && (t(this.activeQuery), (this.activeQuery = null)), this.queryQueue.forEach(t), (this.queryQueue.length = 0);
      }
      _connect(e) {
        var t = this,
          n = this.connection;
        if (((this._connectionCallback = e), this._connecting || this._connected)) {
          let i = new Error('Client has already been connected. You cannot reuse a client.');
          m.nextTick(() => {
            e(i);
          });
          return;
        }
        (this._connecting = true),
          this.connectionTimeoutHandle,
          this._connectionTimeoutMillis > 0 &&
            (this.connectionTimeoutHandle = setTimeout(() => {
              (n._ending = true), n.stream.destroy(new Error('timeout expired'));
            }, this._connectionTimeoutMillis)),
          this.host && this.host.indexOf('/') === 0 ? n.connect(this.host + '/.s.PGSQL.' + this.port) : n.connect(this.port, this.host),
          n.on('connect', function () {
            t.ssl ? n.requestSsl() : n.startup(t.getStartupConf());
          }),
          n.on('sslconnect', function () {
            n.startup(t.getStartupConf());
          }),
          this._attachListeners(n),
          n.once('end', () => {
            let i = this._ending ? new Error('Connection terminated') : new Error('Connection terminated unexpectedly');
            clearTimeout(this.connectionTimeoutHandle),
              this._errorAllQueries(i),
              this._ending || (this._connecting && !this._connectionError ? (this._connectionCallback ? this._connectionCallback(i) : this._handleErrorEvent(i)) : this._connectionError || this._handleErrorEvent(i)),
              m.nextTick(() => {
                this.emit('end');
              });
          });
      }
      connect(e) {
        if (e) {
          this._connect(e);
          return;
        }
        return new this._Promise((t, n) => {
          this._connect((i) => {
            i ? n(i) : t();
          });
        });
      }
      _attachListeners(e) {
        e.on('authenticationCleartextPassword', this._handleAuthCleartextPassword.bind(this)), e.on('authenticationMD5Password', this._handleAuthMD5Password.bind(this)), e.on('authenticationSASL', this._handleAuthSASL.bind(this)), e.on('authenticationSASLContinue', this._handleAuthSASLContinue.bind(this)), e.on('authenticationSASLFinal', this._handleAuthSASLFinal.bind(this)), e.on('backendKeyData', this._handleBackendKeyData.bind(this)), e.on('error', this._handleErrorEvent.bind(this)), e.on('errorMessage', this._handleErrorMessage.bind(this)), e.on('readyForQuery', this._handleReadyForQuery.bind(this)), e.on('notice', this._handleNotice.bind(this)), e.on('rowDescription', this._handleRowDescription.bind(this)), e.on('dataRow', this._handleDataRow.bind(this)), e.on('portalSuspended', this._handlePortalSuspended.bind(this)), e.on('emptyQuery', this._handleEmptyQuery.bind(this)), e.on('commandComplete', this._handleCommandComplete.bind(this)), e.on('parseComplete', this._handleParseComplete.bind(this)), e.on('copyInResponse', this._handleCopyInResponse.bind(this)), e.on('copyData', this._handleCopyData.bind(this)), e.on('notification', this._handleNotification.bind(this));
      }
      _checkPgPass(e) {
        let t = this.connection;
        typeof this.password == 'function'
          ? this._Promise
              .resolve()
              .then(() => this.password())
              .then((n) => {
                if (n !== undefined) {
                  if (typeof n != 'string') {
                    t.emit('error', new TypeError('Password must be a string'));
                    return;
                  }
                  this.connectionParameters.password = this.password = n;
                } else this.connectionParameters.password = this.password = null;
                e();
              })
              .catch((n) => {
                t.emit('error', n);
              })
          : this.password !== null
            ? e()
            : wc(this.connectionParameters, (n) => {
                n !== undefined && (this.connectionParameters.password = this.password = n), e();
              });
      }
      _handleAuthCleartextPassword(e) {
        this._checkPgPass(() => {
          this.connection.password(this.password);
        });
      }
      _handleAuthMD5Password(e) {
        this._checkPgPass(() => {
          let t = gc.postgresMd5PasswordHash(this.user, this.password, e.salt);
          this.connection.password(t);
        });
      }
      _handleAuthSASL(e) {
        this._checkPgPass(() => {
          (this.saslSession = ln.startSession(e.mechanisms)), this.connection.sendSASLInitialResponseMessage(this.saslSession.mechanism, this.saslSession.response);
        });
      }
      _handleAuthSASLContinue(e) {
        ln.continueSession(this.saslSession, this.password, e.data), this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
      }
      _handleAuthSASLFinal(e) {
        ln.finalizeSession(this.saslSession, e.data), (this.saslSession = null);
      }
      _handleBackendKeyData(e) {
        (this.processID = e.processID), (this.secretKey = e.secretKey);
      }
      _handleReadyForQuery(e) {
        this._connecting && ((this._connecting = false), (this._connected = true), clearTimeout(this.connectionTimeoutHandle), this._connectionCallback && (this._connectionCallback(null, this), (this._connectionCallback = null)), this.emit('connect'));
        let { activeQuery: t } = this;
        (this.activeQuery = null), (this.readyForQuery = true), t && t.handleReadyForQuery(this.connection), this._pulseQueryQueue();
      }
      _handleErrorWhileConnecting(e) {
        if (!this._connectionError) {
          if (((this._connectionError = true), clearTimeout(this.connectionTimeoutHandle), this._connectionCallback)) return this._connectionCallback(e);
          this.emit('error', e);
        }
      }
      _handleErrorEvent(e) {
        if (this._connecting) return this._handleErrorWhileConnecting(e);
        (this._queryable = false), this._errorAllQueries(e), this.emit('error', e);
      }
      _handleErrorMessage(e) {
        if (this._connecting) return this._handleErrorWhileConnecting(e);
        let t = this.activeQuery;
        if (!t) {
          this._handleErrorEvent(e);
          return;
        }
        (this.activeQuery = null), t.handleError(e, this.connection);
      }
      _handleRowDescription(e) {
        this.activeQuery.handleRowDescription(e);
      }
      _handleDataRow(e) {
        this.activeQuery.handleDataRow(e);
      }
      _handlePortalSuspended(e) {
        this.activeQuery.handlePortalSuspended(this.connection);
      }
      _handleEmptyQuery(e) {
        this.activeQuery.handleEmptyQuery(this.connection);
      }
      _handleCommandComplete(e) {
        this.activeQuery.handleCommandComplete(e, this.connection);
      }
      _handleParseComplete(e) {
        this.activeQuery.name && (this.connection.parsedStatements[this.activeQuery.name] = this.activeQuery.text);
      }
      _handleCopyInResponse(e) {
        this.activeQuery.handleCopyInResponse(this.connection);
      }
      _handleCopyData(e) {
        this.activeQuery.handleCopyData(e, this.connection);
      }
      _handleNotification(e) {
        this.emit('notification', e);
      }
      _handleNotice(e) {
        this.emit('notice', e);
      }
      getStartupConf() {
        var e = this.connectionParameters,
          t = { user: e.user, database: e.database },
          n = e.application_name || e.fallback_application_name;
        return n && (t.application_name = n), e.replication && (t.replication = '' + e.replication), e.statement_timeout && (t.statement_timeout = String(parseInt(e.statement_timeout, 10))), e.lock_timeout && (t.lock_timeout = String(parseInt(e.lock_timeout, 10))), e.idle_in_transaction_session_timeout && (t.idle_in_transaction_session_timeout = String(parseInt(e.idle_in_transaction_session_timeout, 10))), e.options && (t.options = e.options), t;
      }
      cancel(e, t) {
        if (e.activeQuery === t) {
          var n = this.connection;
          this.host && this.host.indexOf('/') === 0 ? n.connect(this.host + '/.s.PGSQL.' + this.port) : n.connect(this.port, this.host),
            n.on('connect', function () {
              n.cancel(e.processID, e.secretKey);
            });
        } else e.queryQueue.indexOf(t) !== -1 && e.queryQueue.splice(e.queryQueue.indexOf(t), 1);
      }
      setTypeParser(e, t, n) {
        return this._types.setTypeParser(e, t, n);
      }
      getTypeParser(e, t) {
        return this._types.getTypeParser(e, t);
      }
      escapeIdentifier(e) {
        return '"' + e.replace(/"/g, '""') + '"';
      }
      escapeLiteral(e) {
        for (var t = false, n = "'", i = 0; i < e.length; i++) {
          var s = e[i];
          s === "'" ? (n += s + s) : s === '\\' ? ((n += s + s), (t = true)) : (n += s);
        }
        return (n += "'"), t === true && (n = ' E' + n), n;
      }
      _pulseQueryQueue() {
        if (this.readyForQuery === true)
          if (((this.activeQuery = this.queryQueue.shift()), this.activeQuery)) {
            (this.readyForQuery = false), (this.hasExecuted = true);
            let e = this.activeQuery.submit(this.connection);
            e &&
              m.nextTick(() => {
                this.activeQuery.handleError(e, this.connection), (this.readyForQuery = true), this._pulseQueryQueue();
              });
          } else this.hasExecuted && ((this.activeQuery = null), this.emit('drain'));
      }
      query(e, t, n) {
        var i, s, o, u, c;
        if (e == null) throw new TypeError('Client was passed a null or undefined query');
        return (
          typeof e.submit == 'function'
            ? ((o = e.query_timeout || this.connectionParameters.query_timeout), (s = i = e), typeof t == 'function' && (i.callback = i.callback || t))
            : ((o = this.connectionParameters.query_timeout),
              (i = new Is(e, t, n)),
              i.callback ||
                (s = new this._Promise((h, l) => {
                  i.callback = (d, b) => (d ? l(d) : h(b));
                }))),
          o &&
            ((c = i.callback),
            (u = setTimeout(() => {
              var h = new Error('Query read timeout');
              m.nextTick(() => {
                i.handleError(h, this.connection);
              }),
                c(h),
                (i.callback = () => {});
              var l = this.queryQueue.indexOf(i);
              l > -1 && this.queryQueue.splice(l, 1), this._pulseQueryQueue();
            }, o)),
            (i.callback = (h, l) => {
              clearTimeout(u), c(h, l);
            })),
          this.binary && !i.binary && (i.binary = true),
          i._result && !i._result._types && (i._result._types = this._types),
          this._queryable
            ? this._ending
              ? (m.nextTick(() => {
                  i.handleError(new Error('Client was closed and is not queryable'), this.connection);
                }),
                s)
              : (this.queryQueue.push(i), this._pulseQueryQueue(), s)
            : (m.nextTick(() => {
                i.handleError(new Error('Client has encountered a connection error and is not queryable'), this.connection);
              }),
              s)
        );
      }
      ref() {
        this.connection.ref();
      }
      unref() {
        this.connection.unref();
      }
      end(e) {
        if (((this._ending = true), !this.connection._connecting))
          if (e) e();
          else return this._Promise.resolve();
        if ((this.activeQuery || !this._queryable ? this.connection.stream.destroy() : this.connection.end(), e)) this.connection.once('end', e);
        else
          return new this._Promise((t) => {
            this.connection.once('end', t);
          });
      }
    };
  a(fn, 'Client');
  var _t = fn;
  _t.Query = Is;
  Ps.exports = _t;
});
var Ms = I((cf, Fs) => {
  p();
  var Ec = we().EventEmitter,
    Ls = a(function () {}, 'NOOP'),
    Rs = a((r, e) => {
      let t = r.findIndex(e);
      return t === -1 ? undefined : r.splice(t, 1)[0];
    }, 'removeWhere'),
    yn = class yn2 {
      constructor(e, t, n) {
        (this.client = e), (this.idleListener = t), (this.timeoutId = n);
      }
    };
  a(yn, 'IdleItem');
  var pn = yn,
    mn = class mn2 {
      constructor(e) {
        this.callback = e;
      }
    };
  a(mn, 'PendingItem');
  var Ne = mn;
  function _c() {
    throw new Error('Release called on client which has already been released to the pool.');
  }
  a(_c, 'throwOnDoubleRelease');
  function At(r, e) {
    if (e) return { callback: e, result: undefined };
    let t,
      n,
      i = a(function (o, u) {
        o ? t(o) : n(u);
      }, 'cb'),
      s = new r(function (o, u) {
        (n = o), (t = u);
      }).catch((o) => {
        throw (Error.captureStackTrace(o), o);
      });
    return { callback: i, result: s };
  }
  a(At, 'promisify');
  function Ac(r, e) {
    return a(function t(n) {
      (n.client = e),
        e.removeListener('error', t),
        e.on('error', () => {
          r.log('additional client error after disconnection due to error', n);
        }),
        r._remove(e),
        r.emit('error', n, e);
    }, 'idleListener');
  }
  a(Ac, 'makeIdleListener');
  var gn = class gn2 extends Ec {
    constructor(e, t) {
      super(), (this.options = Object.assign({}, e)), e != null && 'password' in e && Object.defineProperty(this.options, 'password', { configurable: true, enumerable: false, writable: true, value: e.password }), e != null && e.ssl && e.ssl.key && Object.defineProperty(this.options.ssl, 'key', { enumerable: false }), (this.options.max = this.options.max || this.options.poolSize || 10), (this.options.maxUses = this.options.maxUses || 1 / 0), (this.options.allowExitOnIdle = this.options.allowExitOnIdle || false), (this.options.maxLifetimeSeconds = this.options.maxLifetimeSeconds || 0), (this.log = this.options.log || function () {}), (this.Client = this.options.Client || t || Ct().Client), (this.Promise = this.options.Promise || S.Promise), typeof this.options.idleTimeoutMillis > 'u' && (this.options.idleTimeoutMillis = 1e4), (this._clients = []), (this._idle = []), (this._expired = new WeakSet()), (this._pendingQueue = []), (this._endCallback = undefined), (this.ending = false), (this.ended = false);
    }
    _isFull() {
      return this._clients.length >= this.options.max;
    }
    _pulseQueue() {
      if ((this.log('pulse queue'), this.ended)) {
        this.log('pulse queue ended');
        return;
      }
      if (this.ending) {
        this.log('pulse queue on ending'),
          this._idle.length &&
            this._idle.slice().map((t) => {
              this._remove(t.client);
            }),
          this._clients.length || ((this.ended = true), this._endCallback());
        return;
      }
      if (!this._pendingQueue.length) {
        this.log('no queued requests');
        return;
      }
      if (!this._idle.length && this._isFull()) return;
      let e = this._pendingQueue.shift();
      if (this._idle.length) {
        let t = this._idle.pop();
        clearTimeout(t.timeoutId);
        let n = t.client;
        n.ref && n.ref();
        let i = t.idleListener;
        return this._acquireClient(n, e, i, false);
      }
      if (!this._isFull()) return this.newClient(e);
      throw new Error('unexpected condition');
    }
    _remove(e) {
      let t = Rs(this._idle, (n) => n.client === e);
      t !== undefined && clearTimeout(t.timeoutId), (this._clients = this._clients.filter((n) => n !== e)), e.end(), this.emit('remove', e);
    }
    connect(e) {
      if (this.ending) {
        let i = new Error('Cannot use a pool after calling end on the pool');
        return e ? e(i) : this.Promise.reject(i);
      }
      let t = At(this.Promise, e),
        n = t.result;
      if (this._isFull() || this._idle.length) {
        if ((this._idle.length && m.nextTick(() => this._pulseQueue()), !this.options.connectionTimeoutMillis)) return this._pendingQueue.push(new Ne(t.callback)), n;
        let i = a((u, c, h) => {
            clearTimeout(o), t.callback(u, c, h);
          }, 'queueCallback'),
          s = new Ne(i),
          o = setTimeout(() => {
            Rs(this._pendingQueue, (u) => u.callback === i), (s.timedOut = true), t.callback(new Error('timeout exceeded when trying to connect'));
          }, this.options.connectionTimeoutMillis);
        return this._pendingQueue.push(s), n;
      }
      return this.newClient(new Ne(t.callback)), n;
    }
    newClient(e) {
      let t = new this.Client(this.options);
      this._clients.push(t);
      let n = Ac(this, t);
      this.log('checking client timeout');
      let i,
        s = false;
      this.options.connectionTimeoutMillis &&
        (i = setTimeout(() => {
          this.log('ending client due to timeout'), (s = true), t.connection ? t.connection.stream.destroy() : t.end();
        }, this.options.connectionTimeoutMillis)),
        this.log('connecting new client'),
        t.connect((o) => {
          if ((i && clearTimeout(i), t.on('error', n), o)) this.log('client failed to connect', o), (this._clients = this._clients.filter((u) => u !== t)), s && (o.message = 'Connection terminated due to connection timeout'), this._pulseQueue(), e.timedOut || e.callback(o, undefined, Ls);
          else {
            if ((this.log('new client connected'), this.options.maxLifetimeSeconds !== 0)) {
              let u = setTimeout(() => {
                this.log('ending client due to expired lifetime'), this._expired.add(t), this._idle.findIndex((h) => h.client === t) !== -1 && this._acquireClient(t, new Ne((h, l, d) => d()), n, false);
              }, this.options.maxLifetimeSeconds * 1000);
              u.unref(), t.once('end', () => clearTimeout(u));
            }
            return this._acquireClient(t, e, n, true);
          }
        });
    }
    _acquireClient(e, t, n, i) {
      i && this.emit('connect', e),
        this.emit('acquire', e),
        (e.release = this._releaseOnce(e, n)),
        e.removeListener('error', n),
        t.timedOut
          ? i && this.options.verify
            ? this.options.verify(e, e.release)
            : e.release()
          : i && this.options.verify
            ? this.options.verify(e, (s) => {
                if (s) return e.release(s), t.callback(s, undefined, Ls);
                t.callback(undefined, e, e.release);
              })
            : t.callback(undefined, e, e.release);
    }
    _releaseOnce(e, t) {
      let n = false;
      return (i) => {
        n && _c(), (n = true), this._release(e, t, i);
      };
    }
    _release(e, t, n) {
      if ((e.on('error', t), (e._poolUseCount = (e._poolUseCount || 0) + 1), this.emit('release', n, e), n || this.ending || !e._queryable || e._ending || e._poolUseCount >= this.options.maxUses)) {
        e._poolUseCount >= this.options.maxUses && this.log('remove expended client'), this._remove(e), this._pulseQueue();
        return;
      }
      if (this._expired.has(e)) {
        this.log('remove expired client'), this._expired.delete(e), this._remove(e), this._pulseQueue();
        return;
      }
      let s;
      this.options.idleTimeoutMillis &&
        ((s = setTimeout(() => {
          this.log('remove idle client'), this._remove(e);
        }, this.options.idleTimeoutMillis)),
        this.options.allowExitOnIdle && s.unref()),
        this.options.allowExitOnIdle && e.unref(),
        this._idle.push(new pn(e, t, s)),
        this._pulseQueue();
    }
    query(e, t, n) {
      if (typeof e == 'function') {
        let s = At(this.Promise, e);
        return (
          x(function () {
            return s.callback(new Error('Passing a function as the first parameter to pool.query is not supported'));
          }),
          s.result
        );
      }
      typeof t == 'function' && ((n = t), (t = undefined));
      let i = At(this.Promise, n);
      return (
        (n = i.callback),
        this.connect((s, o) => {
          if (s) return n(s);
          let u = false,
            c = a((h) => {
              u || ((u = true), o.release(h), n(h));
            }, 'onError');
          o.once('error', c), this.log('dispatching query');
          try {
            o.query(e, t, (h, l) => {
              if ((this.log('query dispatched'), o.removeListener('error', c), !u)) return (u = true), o.release(h), h ? n(h) : n(undefined, l);
            });
          } catch (h) {
            return o.release(h), n(h);
          }
        }),
        i.result
      );
    }
    end(e) {
      if ((this.log('ending'), this.ending)) {
        let n = new Error('Called end on pool more than once');
        return e ? e(n) : this.Promise.reject(n);
      }
      this.ending = true;
      let t = At(this.Promise, e);
      return (this._endCallback = t.callback), this._pulseQueue(), t.result;
    }
    get waitingCount() {
      return this._pendingQueue.length;
    }
    get idleCount() {
      return this._idle.length;
    }
    get expiredCount() {
      return this._clients.reduce((e, t) => e + (this._expired.has(t) ? 1 : 0), 0);
    }
    get totalCount() {
      return this._clients.length;
    }
  };
  a(gn, 'Pool');
  var dn = gn;
  Fs.exports = dn;
});
var Ds = {};
ie(Ds, { default: () => Cc });
var Cc;
var ks = z(() => {
  p();
  Cc = {};
});
var Us = I((pf, Tc) => {
  Tc.exports = {
    name: 'pg',
    version: '8.8.0',
    description: 'PostgreSQL client - pure javascript & libpq with the same API',
    keywords: ['database', 'libpq', 'pg', 'postgre', 'postgres', 'postgresql', 'rdbms'],
    homepage: 'https://github.com/brianc/node-postgres',
    repository: { type: 'git', url: 'git://github.com/brianc/node-postgres.git', directory: 'packages/pg' },
    author: 'Brian Carlson <brian.m.carlson@gmail.com>',
    main: './lib',
    dependencies: {
      'buffer-writer': '2.0.0',
      'packet-reader': '1.0.0',
      'pg-connection-string': '^2.5.0',
      'pg-pool': '^3.5.2',
      'pg-protocol': '^1.5.0',
      'pg-types': '^2.1.0',
      pgpass: '1.x',
    },
    devDependencies: { async: '2.6.4', bluebird: '3.5.2', co: '4.6.0', 'pg-copy-streams': '0.3.0' },
    peerDependencies: { 'pg-native': '>=3.0.1' },
    peerDependenciesMeta: {
      'pg-native': { optional: true },
    },
    scripts: { test: 'make test-all' },
    files: ['lib', 'SPONSORS.md'],
    license: 'MIT',
    engines: { node: '>= 8.0.0' },
    gitHead: 'c99fb2c127ddf8d712500db2c7b9a5491a178655',
  };
});
var qs = I((df, Ns) => {
  p();
  var Os = we().EventEmitter,
    Ic = (He(), N(je)),
    wn = et(),
    qe = (Ns.exports = function (r, e, t) {
      Os.call(this),
        (r = wn.normalizeQueryConfig(r, e, t)),
        (this.text = r.text),
        (this.values = r.values),
        (this.name = r.name),
        (this.callback = r.callback),
        (this.state = 'new'),
        (this._arrayMode = r.rowMode === 'array'),
        (this._emitRowEvents = false),
        this.on(
          'newListener',
          function (n) {
            n === 'row' && (this._emitRowEvents = true);
          }.bind(this),
        );
    });
  Ic.inherits(qe, Os);
  var Pc = { sqlState: 'code', statementPosition: 'position', messagePrimary: 'message', context: 'where', schemaName: 'schema', tableName: 'table', columnName: 'column', dataTypeName: 'dataType', constraintName: 'constraint', sourceFile: 'file', sourceLine: 'line', sourceFunction: 'routine' };
  qe.prototype.handleError = function (r) {
    var e = this.native.pq.resultErrorFields();
    if (e)
      for (var t in e) {
        var n = Pc[t] || t;
        r[n] = e[t];
      }
    this.callback ? this.callback(r) : this.emit('error', r), (this.state = 'error');
  };
  qe.prototype.then = function (r, e) {
    return this._getPromise().then(r, e);
  };
  qe.prototype.catch = function (r) {
    return this._getPromise().catch(r);
  };
  qe.prototype._getPromise = function () {
    return this._promise
      ? this._promise
      : ((this._promise = new Promise(
          function (r, e) {
            this._once('end', r), this._once('error', e);
          }.bind(this),
        )),
        this._promise);
  };
  qe.prototype.submit = function (r) {
    this.state = 'running';
    var e = this;
    (this.native = r.native), (r.native.arrayMode = this._arrayMode);
    var t = a(function (s, o, u) {
      if (
        ((r.native.arrayMode = false),
        x(function () {
          e.emit('_done');
        }),
        s)
      )
        return e.handleError(s);
      e._emitRowEvents &&
        (u.length > 1
          ? o.forEach((c, h) => {
              c.forEach((l) => {
                e.emit('row', l, u[h]);
              });
            })
          : o.forEach(function (c) {
              e.emit('row', c, u);
            })),
        (e.state = 'end'),
        e.emit('end', u),
        e.callback && e.callback(null, u);
    }, 'after');
    if ((m.domain && (t = m.domain.bind(t)), this.name)) {
      this.name.length > 63 && (console.error('Warning! Postgres only supports 63 characters for query names.'), console.error('You supplied %s (%s)', this.name, this.name.length), console.error('This can cause conflicts and silent errors executing queries'));
      var n = (this.values || []).map(wn.prepareValue);
      if (r.namedQueries[this.name]) {
        if (this.text && r.namedQueries[this.name] !== this.text) {
          let s = new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
          return t(s);
        }
        return r.native.execute(this.name, n, t);
      }
      return r.native.prepare(this.name, this.text, n.length, function (s) {
        return s ? t(s) : ((r.namedQueries[e.name] = e.text), e.native.execute(e.name, n, t));
      });
    } else if (this.values) {
      if (!Array.isArray(this.values)) {
        let s = new Error('Query values must be an array');
        return t(s);
      }
      var i = this.values.map(wn.prepareValue);
      r.native.query(this.text, i, t);
    } else r.native.query(this.text, t);
  };
});
var Hs = I((wf, js) => {
  p();
  var Bc = (ks(), N(Ds)),
    Lc = mt(),
    gf = Us(),
    Qs = we().EventEmitter,
    Rc = (He(), N(je)),
    Fc = gt(),
    Ws = qs(),
    J = (js.exports = function (r) {
      Qs.call(this), (r = r || {}), (this._Promise = r.Promise || S.Promise), (this._types = new Lc(r.types)), (this.native = new Bc({ types: this._types })), (this._queryQueue = []), (this._ending = false), (this._connecting = false), (this._connected = false), (this._queryable = true);
      var e = (this.connectionParameters = new Fc(r));
      (this.user = e.user),
        Object.defineProperty(this, 'password', {
          configurable: true,
          enumerable: false,
          writable: true,
          value: e.password,
        }),
        (this.database = e.database),
        (this.host = e.host),
        (this.port = e.port),
        (this.namedQueries = {});
    });
  J.Query = Ws;
  Rc.inherits(J, Qs);
  J.prototype._errorAllQueries = function (r) {
    let e = a((t) => {
      m.nextTick(() => {
        (t.native = this.native), t.handleError(r);
      });
    }, 'enqueueError');
    this._hasActiveQuery() && (e(this._activeQuery), (this._activeQuery = null)), this._queryQueue.forEach(e), (this._queryQueue.length = 0);
  };
  J.prototype._connect = function (r) {
    var e = this;
    if (this._connecting) {
      m.nextTick(() => r(new Error('Client has already been connected. You cannot reuse a client.')));
      return;
    }
    (this._connecting = true),
      this.connectionParameters.getLibpqConnectionString(function (t, n) {
        if (t) return r(t);
        e.native.connect(n, function (i) {
          if (i) return e.native.end(), r(i);
          (e._connected = true),
            e.native.on('error', function (s) {
              (e._queryable = false), e._errorAllQueries(s), e.emit('error', s);
            }),
            e.native.on('notification', function (s) {
              e.emit('notification', { channel: s.relname, payload: s.extra });
            }),
            e.emit('connect'),
            e._pulseQueryQueue(true),
            r();
        });
      });
  };
  J.prototype.connect = function (r) {
    if (r) {
      this._connect(r);
      return;
    }
    return new this._Promise((e, t) => {
      this._connect((n) => {
        n ? t(n) : e();
      });
    });
  };
  J.prototype.query = function (r, e, t) {
    var n, i, s, o, u;
    if (r == null) throw new TypeError('Client was passed a null or undefined query');
    if (typeof r.submit == 'function') (s = r.query_timeout || this.connectionParameters.query_timeout), (i = n = r), typeof e == 'function' && (r.callback = e);
    else if (((s = this.connectionParameters.query_timeout), (n = new Ws(r, e, t)), !n.callback)) {
      let c, h;
      (i = new this._Promise((l, d) => {
        (c = l), (h = d);
      })),
        (n.callback = (l, d) => (l ? h(l) : c(d)));
    }
    return (
      s &&
        ((u = n.callback),
        (o = setTimeout(() => {
          var c = new Error('Query read timeout');
          m.nextTick(() => {
            n.handleError(c, this.connection);
          }),
            u(c),
            (n.callback = () => {});
          var h = this._queryQueue.indexOf(n);
          h > -1 && this._queryQueue.splice(h, 1), this._pulseQueryQueue();
        }, s)),
        (n.callback = (c, h) => {
          clearTimeout(o), u(c, h);
        })),
      this._queryable
        ? this._ending
          ? ((n.native = this.native),
            m.nextTick(() => {
              n.handleError(new Error('Client was closed and is not queryable'));
            }),
            i)
          : (this._queryQueue.push(n), this._pulseQueryQueue(), i)
        : ((n.native = this.native),
          m.nextTick(() => {
            n.handleError(new Error('Client has encountered a connection error and is not queryable'));
          }),
          i)
    );
  };
  J.prototype.end = function (r) {
    var e = this;
    (this._ending = true), this._connected || this.once('connect', this.end.bind(this, r));
    var t;
    return (
      r ||
        (t = new this._Promise(function (n, i) {
          r = a((s) => (s ? i(s) : n()), 'cb');
        })),
      this.native.end(function () {
        e._errorAllQueries(new Error('Connection terminated')),
          m.nextTick(() => {
            e.emit('end'), r && r();
          });
      }),
      t
    );
  };
  J.prototype._hasActiveQuery = function () {
    return this._activeQuery && this._activeQuery.state !== 'error' && this._activeQuery.state !== 'end';
  };
  J.prototype._pulseQueryQueue = function (r) {
    if (this._connected && !this._hasActiveQuery()) {
      var e = this._queryQueue.shift();
      if (!e) {
        r || this.emit('drain');
        return;
      }
      (this._activeQuery = e), e.submit(this);
      var t = this;
      e.once('_done', function () {
        t._pulseQueryQueue();
      });
    }
  };
  J.prototype.cancel = function (r) {
    this._activeQuery === r ? this.native.cancel(function () {}) : this._queryQueue.indexOf(r) !== -1 && this._queryQueue.splice(this._queryQueue.indexOf(r), 1);
  };
  J.prototype.ref = function () {};
  J.prototype.unref = function () {};
  J.prototype.setTypeParser = function (r, e, t) {
    return this._types.setTypeParser(r, e, t);
  };
  J.prototype.getTypeParser = function (r, e) {
    return this._types.getTypeParser(r, e);
  };
});
var bn = I((xf, Gs) => {
  p();
  Gs.exports = Hs();
});
var Ct = I((Ef, rt) => {
  p();
  var Mc = Bs(),
    Dc = Xe(),
    kc = hn(),
    Uc = Ms(),
    { DatabaseError: Oc } = an(),
    Nc = a((r) => {
      var e;
      return (
        (e = class extends Uc {
          constructor(n) {
            super(n, r);
          }
        }),
        a(e, 'BoundPool'),
        e
      );
    }, 'poolFactory'),
    Sn = a(function (r) {
      (this.defaults = Dc), (this.Client = r), (this.Query = this.Client.Query), (this.Pool = Nc(this.Client)), (this._pools = []), (this.Connection = kc), (this.types = Je()), (this.DatabaseError = Oc);
    }, 'PG');
  typeof m.env.NODE_PG_FORCE_NATIVE < 'u'
    ? (rt.exports = new Sn(bn()))
    : ((rt.exports = new Sn(Mc)),
      Object.defineProperty(rt.exports, 'native', {
        configurable: true,
        enumerable: false,
        get() {
          var r = null;
          try {
            r = new Sn(bn());
          } catch (e) {
            if (e.code !== 'MODULE_NOT_FOUND') throw e;
          }
          return Object.defineProperty(rt.exports, 'native', { value: r }), r;
        },
      }));
});
p();
var Tt = Te(Ct());
wt();
p();
pr();
wt();
var Ks = Te(et());
var zs = Te(mt());
var xn = class xn2 extends Error {
  constructor() {
    super(...arguments);
    _(this, 'name', 'NeonDbError');
    _(this, 'severity');
    _(this, 'code');
    _(this, 'detail');
    _(this, 'hint');
    _(this, 'position');
    _(this, 'internalPosition');
    _(this, 'internalQuery');
    _(this, 'where');
    _(this, 'schema');
    _(this, 'table');
    _(this, 'column');
    _(this, 'dataType');
    _(this, 'constraint');
    _(this, 'file');
    _(this, 'line');
    _(this, 'routine');
    _(this, 'sourceError');
  }
};
a(xn, 'NeonDbError');
var Ae = xn;
var $s = 'transaction() expects an array of queries, or a function returning an array of queries';
var qc = ['severity', 'code', 'detail', 'hint', 'position', 'internalPosition', 'internalQuery', 'where', 'schema', 'table', 'column', 'dataType', 'constraint', 'file', 'line', 'routine'];
a(Ys, 'neon');
a(Qc, 'createNeonQueryPromise');
a(Vs, 'processQueryResult');
var Js = Te(gt());
var Qe = Te(Ct());
var En = class En2 extends Tt.Client {
  constructor(t) {
    super(t);
    this.config = t;
  }
  get neonConfig() {
    return this.connection.stream;
  }
  connect(t) {
    let { neonConfig: n } = this;
    n.forceDisablePgSSL && (this.ssl = this.connection.ssl = false), this.ssl && n.useSecureWebSocket && console.warn('SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = true). Double encryption will increase latency and CPU usage. It may be appropriate to disable SSL in the Postgres connection parameters or set forceDisablePgSSL = true.');
    let i = this.config?.host !== undefined || this.config?.connectionString !== undefined || m.env.PGHOST !== undefined,
      s = m.env.USER ?? m.env.USERNAME;
    if (!i && this.host === 'localhost' && this.user === s && this.database === s && this.password === null) throw new Error(`No database host or connection string was set, and key parameters have default values (host: localhost, user: ${s}, db: ${s}, password: null). Is an environment variable missing? Alternatively, if you intended to connect with these parameters, please set the host to 'localhost' explicitly.`);
    let o = super.connect(t),
      u = n.pipelineTLS && this.ssl,
      c = n.pipelineConnect === 'password';
    if (!u && !n.pipelineConnect) return o;
    let h = this.connection;
    if ((u && h.on('connect', () => h.stream.emit('data', 'S')), c)) {
      h.removeAllListeners('authenticationCleartextPassword'), h.removeAllListeners('readyForQuery'), h.once('readyForQuery', () => h.on('readyForQuery', this._handleReadyForQuery.bind(this)));
      let l = this.ssl ? 'sslconnect' : 'connect';
      h.on(l, () => {
        this._handleAuthCleartextPassword(), this._handleReadyForQuery();
      });
    }
    return o;
  }
  async _handleAuthSASLContinue(t) {
    let n = this.saslSession,
      i = this.password,
      s = t.data;
    if (n.message !== 'SASLInitialResponse' || typeof i != 'string' || typeof s != 'string') throw new Error('SASL: protocol error');
    let o = Object.fromEntries(
        s.split(',').map((U) => {
          if (!/^.=/.test(U)) throw new Error('SASL: Invalid attribute pair entry');
          let K = U[0],
            le = U.substring(2);
          return [K, le];
        }),
      ),
      u = o.r,
      c = o.s,
      h = o.i;
    if (!u || !/^[!-+--~]+$/.test(u)) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprintable');
    if (!c || !/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(c)) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64');
    if (!h || !/^[1-9][0-9]*$/.test(h)) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count');
    if (!u.startsWith(n.clientNonce)) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce');
    if (u.length === n.clientNonce.length) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short');
    let l = parseInt(h, 10),
      d = y.from(c, 'base64'),
      b = new TextEncoder(),
      C = b.encode(i),
      B = await g.subtle.importKey('raw', C, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']),
      W = new Uint8Array(await g.subtle.sign('HMAC', B, y.concat([d, y.from([0, 0, 0, 1])]))),
      X = W;
    for (var de = 0; de < l - 1; de++) (W = new Uint8Array(await g.subtle.sign('HMAC', B, W))), (X = y.from(X.map((U, K) => X[K] ^ W[K])));
    let A = X,
      w = await g.subtle.importKey('raw', A, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']),
      P = new Uint8Array(await g.subtle.sign('HMAC', w, b.encode('Client Key'))),
      V = await g.subtle.digest('SHA-256', P),
      k = 'n=*,r=' + n.clientNonce,
      j = 'r=' + u + ',s=' + c + ',i=' + l,
      ce = 'c=biws,r=' + u,
      ee = k + ',' + j + ',' + ce,
      R = await g.subtle.importKey('raw', V, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']);
    var G = new Uint8Array(await g.subtle.sign('HMAC', R, b.encode(ee))),
      he = y.from(P.map((U, K) => P[K] ^ G[K])),
      ye = he.toString('base64');
    let xe = await g.subtle.importKey('raw', A, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']),
      me = await g.subtle.sign('HMAC', xe, b.encode('Server Key')),
      se = await g.subtle.importKey('raw', me, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']);
    var oe = y.from(await g.subtle.sign('HMAC', se, b.encode(ee)));
    (n.message = 'SASLResponse'), (n.serverSignature = oe.toString('base64')), (n.response = ce + ',p=' + ye), this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
  }
};
a(En, 'NeonClient');
var vn = En;
a(Wc, 'promisify');
var _n = class _n2 extends Tt.Pool {
  constructor() {
    super(...arguments);
    _(this, 'Client', vn);
    _(this, 'hasFetchUnsupportedListeners', false);
  }
  on(t, n) {
    return t !== 'error' && (this.hasFetchUnsupportedListeners = true), super.on(t, n);
  }
  query(t, n, i) {
    if (!_e.poolQueryViaFetch || this.hasFetchUnsupportedListeners || typeof t == 'function') return super.query(t, n, i);
    typeof n == 'function' && ((i = n), (n = undefined));
    let s = Wc(this.Promise, i);
    i = s.callback;
    try {
      let o = new Js.default(this.options),
        u = encodeURIComponent,
        c = encodeURI,
        h = `postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}/${c(o.database)}`,
        l = typeof t == 'string' ? t : t.text,
        d = n ?? t.values ?? [];
      Ys(h, { fullResults: true, arrayMode: t.rowMode === 'array' })(l, d, { types: t.types ?? this.options?.types })
        .then((C) => i(undefined, C))
        .catch((C) => i(C));
    } catch (o) {
      i(o);
    }
    return s.result;
  }
};
a(_n, 'NeonPool');
var export_ClientBase = Qe.ClientBase;
var export_Connection = Qe.Connection;
var export_DatabaseError = Qe.DatabaseError;
var export_Query = Qe.Query;
var export_defaults = Qe.defaults;
var export_types = Qe.types;
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/

// src/database-drivers/dbdriver.bundle.ts
async function localhost_query(text, params) {
  const local_address = 'http://127.0.0.1:8000';
  return (
    await fetch(local_address + '/database', {
      method: 'POST',
      body: JSON.stringify({ text, params }),
    })
  ).json();
}
var DatabaseDriver = {
  getLocalhost() {
    return localhost_query;
  },
  getNeon(connection_string) {
    return Ys(connection_string);
  },
};
var DatabaseDriver_Copyright_Notices = {
  '@neondatabase/serverless': `
    ----------------------------------------------------------------------------

    https://github.com/feross/ieee754

    Copyright 2008 Fair Oaks Labs, Inc.

    Redistribution and use in source and binary forms, with or without 
    modification, are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.

    2. Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

    3. Neither the name of the copyright holder nor the names of its 
    contributors may be used to endorse or promote products derived from this 
    software without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
    ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE 
    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
    CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
    SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
    INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
    CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
    ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
    POSSIBILITY OF SUCH DAMAGE.

    ----------------------------------------------------------------------------

    https://github.com/feross/buffer

    The MIT License (MIT)

    Copyright (c) Feross Aboukhadijeh, and other contributors.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to 
    deal in the Software without restriction, including without limitation the 
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
    sell copies of the Software, and to permit persons to whom the Software is 
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in 
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.

    Parts of this software are based on node.js:

    Copyright Node.js contributors. All rights reserved.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to 
    deal in the Software without restriction, including without limitation the 
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
    sell copies of the Software, and to permit persons to whom the Software is 
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in 
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.

    See https://github.com/nodejs/node/blob/main/LICENSE for more information.

    ----------------------------------------------------------------------------

    https://github.com/neondatabase/serverless

    MIT License

    Copyright (c) 2022 - 2024 Neon Inc.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to 
    deal in the Software without restriction, including without limitation the 
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
    sell copies of the Software, and to permit persons to whom the Software is 
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in 
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.

    ----------------------------------------------------------------------------
  `,
};
export { DatabaseDriver_Copyright_Notices, DatabaseDriver };

//# debugId=6C03423AAD64355664756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzXFxAbmVvbmRhdGFiYXNlXFxzZXJ2ZXJsZXNzXFxpbmRleC5tanMiLCAic3JjXFxkYXRhYmFzZS1kcml2ZXJzXFxkYmRyaXZlci5idW5kbGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAidmFyIHRvPU9iamVjdC5jcmVhdGU7dmFyIENlPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgcm89T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgbm89T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIGlvPU9iamVjdC5nZXRQcm90b3R5cGVPZixzbz1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBvbz0ocixlLHQpPT5lIGluIHI/Q2UocixlLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSk6XG5yW2VdPXQ7dmFyIGE9KHIsZSk9PkNlKHIsXCJuYW1lXCIse3ZhbHVlOmUsY29uZmlndXJhYmxlOiEwfSk7dmFyIHo9KHIsZSk9PigpPT4ociYmKGU9cihyPTApKSxlKTt2YXIgST0ocixlKT0+KCk9PihlfHxyKChlPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxlKSxlLmV4cG9ydHMpLGllPShyLGUpPT57Zm9yKHZhciB0IGluIGUpXG5DZShyLHQse2dldDplW3RdLGVudW1lcmFibGU6ITB9KX0sQW49KHIsZSx0LG4pPT57aWYoZSYmdHlwZW9mIGU9PVwib2JqZWN0XCJ8fHR5cGVvZiBlPT1cblwiZnVuY3Rpb25cIilmb3IobGV0IGkgb2Ygbm8oZSkpIXNvLmNhbGwocixpKSYmaSE9PXQmJkNlKHIsaSx7Z2V0OigpPT5lW2ldLGVudW1lcmFibGU6IShuPVxucm8oZSxpKSl8fG4uZW51bWVyYWJsZX0pO3JldHVybiByfTt2YXIgVGU9KHIsZSx0KT0+KHQ9ciE9bnVsbD90byhpbyhyKSk6e30sQW4oZXx8IXJ8fCFyLl9fZXNNb2R1bGU/Q2UodCxcImRlZmF1bHRcIix7XG52YWx1ZTpyLGVudW1lcmFibGU6ITB9KTp0LHIpKSxOPXI9PkFuKENlKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIpO3ZhciBfPShyLGUsdCk9Pm9vKHIsdHlwZW9mIGUhPVwic3ltYm9sXCI/ZStcIlwiOmUsdCk7dmFyIEluPUkobnQ9PntcInVzZSBzdHJpY3RcIjtwKCk7bnQuYnl0ZUxlbmd0aD11bztudC50b0J5dGVBcnJheT1obztudC5mcm9tQnl0ZUFycmF5PVxucG87dmFyIGFlPVtdLHRlPVtdLGFvPXR5cGVvZiBVaW50OEFycmF5PFwidVwiP1VpbnQ4QXJyYXk6QXJyYXksUHQ9XCJBQkNERUZHSElKS0xNTk9cXFxuUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO2Zvcih2ZT0wLENuPVB0Lmxlbmd0aDt2ZTxDbjsrK3ZlKVxuYWVbdmVdPVB0W3ZlXSx0ZVtQdC5jaGFyQ29kZUF0KHZlKV09dmU7dmFyIHZlLENuO3RlWzQ1XT02Mjt0ZVs5NV09NjM7ZnVuY3Rpb24gVG4ocil7XG52YXIgZT1yLmxlbmd0aDtpZihlJTQ+MCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBcXFxubGUgb2YgNFwiKTt2YXIgdD1yLmluZGV4T2YoXCI9XCIpO3Q9PT0tMSYmKHQ9ZSk7dmFyIG49dD09PWU/MDo0LXQlNDtyZXR1cm5bdCxuXX1hKFRuLFxuXCJnZXRMZW5zXCIpO2Z1bmN0aW9uIHVvKHIpe3ZhciBlPVRuKHIpLHQ9ZVswXSxuPWVbMV07cmV0dXJuKHQrbikqMy80LW59YSh1byxcImJ5dGVcXFxuTGVuZ3RoXCIpO2Z1bmN0aW9uIGNvKHIsZSx0KXtyZXR1cm4oZSt0KSozLzQtdH1hKGNvLFwiX2J5dGVMZW5ndGhcIik7ZnVuY3Rpb24gaG8ocil7XG52YXIgZSx0PVRuKHIpLG49dFswXSxpPXRbMV0scz1uZXcgYW8oY28ocixuLGkpKSxvPTAsdT1pPjA/bi00Om4sYztmb3IoYz0wO2M8dTtjKz1cbjQpZT10ZVtyLmNoYXJDb2RlQXQoYyldPDwxOHx0ZVtyLmNoYXJDb2RlQXQoYysxKV08PDEyfHRlW3IuY2hhckNvZGVBdChjKzIpXTw8Nnx0ZVtyLlxuY2hhckNvZGVBdChjKzMpXSxzW28rK109ZT4+MTYmMjU1LHNbbysrXT1lPj44JjI1NSxzW28rK109ZSYyNTU7cmV0dXJuIGk9PT0yJiYoZT1cbnRlW3IuY2hhckNvZGVBdChjKV08PDJ8dGVbci5jaGFyQ29kZUF0KGMrMSldPj40LHNbbysrXT1lJjI1NSksaT09PTEmJihlPXRlW3IuY2hhckNvZGVBdChcbmMpXTw8MTB8dGVbci5jaGFyQ29kZUF0KGMrMSldPDw0fHRlW3IuY2hhckNvZGVBdChjKzIpXT4+MixzW28rK109ZT4+OCYyNTUsc1tvKytdPVxuZSYyNTUpLHN9YShobyxcInRvQnl0ZUFycmF5XCIpO2Z1bmN0aW9uIGxvKHIpe3JldHVybiBhZVtyPj4xOCY2M10rYWVbcj4+MTImNjNdK2FlW3I+PlxuNiY2M10rYWVbciY2M119YShsbyxcInRyaXBsZXRUb0Jhc2U2NFwiKTtmdW5jdGlvbiBmbyhyLGUsdCl7Zm9yKHZhciBuLGk9W10scz1lO3M8dDtzKz1cbjMpbj0ocltzXTw8MTYmMTY3MTE2ODApKyhyW3MrMV08PDgmNjUyODApKyhyW3MrMl0mMjU1KSxpLnB1c2gobG8obikpO3JldHVybiBpLmpvaW4oXG5cIlwiKX1hKGZvLFwiZW5jb2RlQ2h1bmtcIik7ZnVuY3Rpb24gcG8ocil7Zm9yKHZhciBlLHQ9ci5sZW5ndGgsbj10JTMsaT1bXSxzPTE2MzgzLG89MCxcbnU9dC1uO288dTtvKz1zKWkucHVzaChmbyhyLG8sbytzPnU/dTpvK3MpKTtyZXR1cm4gbj09PTE/KGU9clt0LTFdLGkucHVzaChhZVtlPj4yXStcbmFlW2U8PDQmNjNdK1wiPT1cIikpOm49PT0yJiYoZT0oclt0LTJdPDw4KStyW3QtMV0saS5wdXNoKGFlW2U+PjEwXSthZVtlPj40JjYzXSthZVtlPDxcbjImNjNdK1wiPVwiKSksaS5qb2luKFwiXCIpfWEocG8sXCJmcm9tQnl0ZUFycmF5XCIpfSk7dmFyIFBuPUkoQnQ9PntwKCk7QnQucmVhZD1mdW5jdGlvbihyLGUsdCxuLGkpe3ZhciBzLG8sdT1pKjgtbi0xLGM9KDE8PHUpLTEsaD1jPj5cbjEsbD0tNyxkPXQ/aS0xOjAsYj10Py0xOjEsQz1yW2UrZF07Zm9yKGQrPWIscz1DJigxPDwtbCktMSxDPj49LWwsbCs9dTtsPjA7cz1zKjI1NitcbnJbZStkXSxkKz1iLGwtPTgpO2ZvcihvPXMmKDE8PC1sKS0xLHM+Pj0tbCxsKz1uO2w+MDtvPW8qMjU2K3JbZStkXSxkKz1iLGwtPTgpO2lmKHM9PT1cbjApcz0xLWg7ZWxzZXtpZihzPT09YylyZXR1cm4gbz9OYU46KEM/LTE6MSkqKDEvMCk7bz1vK01hdGgucG93KDIsbikscz1zLWh9cmV0dXJuKEM/XG4tMToxKSpvKk1hdGgucG93KDIscy1uKX07QnQud3JpdGU9ZnVuY3Rpb24ocixlLHQsbixpLHMpe3ZhciBvLHUsYyxoPXMqOC1pLTEsbD0oMTw8XG5oKS0xLGQ9bD4+MSxiPWk9PT0yMz9NYXRoLnBvdygyLC0yNCktTWF0aC5wb3coMiwtNzcpOjAsQz1uPzA6cy0xLEI9bj8xOi0xLFc9ZTwwfHxcbmU9PT0wJiYxL2U8MD8xOjA7Zm9yKGU9TWF0aC5hYnMoZSksaXNOYU4oZSl8fGU9PT0xLzA/KHU9aXNOYU4oZSk/MTowLG89bCk6KG89TWF0aC5cbmZsb29yKE1hdGgubG9nKGUpL01hdGguTE4yKSxlKihjPU1hdGgucG93KDIsLW8pKTwxJiYoby0tLGMqPTIpLG8rZD49MT9lKz1iL2M6ZSs9XG5iKk1hdGgucG93KDIsMS1kKSxlKmM+PTImJihvKyssYy89MiksbytkPj1sPyh1PTAsbz1sKTpvK2Q+PTE/KHU9KGUqYy0xKSpNYXRoLnBvdyhcbjIsaSksbz1vK2QpOih1PWUqTWF0aC5wb3coMixkLTEpKk1hdGgucG93KDIsaSksbz0wKSk7aT49ODtyW3QrQ109dSYyNTUsQys9Qix1Lz0yNTYsXG5pLT04KTtmb3Iobz1vPDxpfHUsaCs9aTtoPjA7clt0K0NdPW8mMjU1LEMrPUIsby89MjU2LGgtPTgpO3JbdCtDLUJdfD1XKjEyOH19KTt2YXIgJG49SShMZT0+e1widXNlIHN0cmljdFwiO3AoKTt2YXIgTHQ9SW4oKSxQZT1QbigpLEJuPXR5cGVvZiBTeW1ib2w9PVwiZnVuY3Rpb25cIiYmXG50eXBlb2YgU3ltYm9sLmZvcj09XCJmdW5jdGlvblwiP1N5bWJvbC5mb3IoXCJub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbVwiKTpudWxsO0xlLkJ1ZmZlcj1cbmY7TGUuU2xvd0J1ZmZlcj1TbztMZS5JTlNQRUNUX01BWF9CWVRFUz01MDt2YXIgaXQ9MjE0NzQ4MzY0NztMZS5rTWF4TGVuZ3RoPWl0O2YuXG5UWVBFRF9BUlJBWV9TVVBQT1JUPXlvKCk7IWYuVFlQRURfQVJSQVlfU1VQUE9SVCYmdHlwZW9mIGNvbnNvbGU8XCJ1XCImJnR5cGVvZiBjb25zb2xlLlxuZXJyb3I9PVwiZnVuY3Rpb25cIiYmY29uc29sZS5lcnJvcihcIlRoaXMgYnJvd3NlciBsYWNrcyB0eXBlZCBhcnJheSAoVWludDhBcnJheSkgc3VcXFxucHBvcnQgd2hpY2ggaXMgcmVxdWlyZWQgYnkgYGJ1ZmZlcmAgdjUueC4gVXNlIGBidWZmZXJgIHY0LnggaWYgeW91IHJlcXVpcmUgb2xkIGJcXFxucm93c2VyIHN1cHBvcnQuXCIpO2Z1bmN0aW9uIHlvKCl7dHJ5e2xldCByPW5ldyBVaW50OEFycmF5KDEpLGU9e2ZvbzphKGZ1bmN0aW9uKCl7XG5yZXR1cm4gNDJ9LFwiZm9vXCIpfTtyZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mKGUsVWludDhBcnJheS5wcm90b3R5cGUpLE9iamVjdC5zZXRQcm90b3R5cGVPZihcbnIsZSksci5mb28oKT09PTQyfWNhdGNoe3JldHVybiExfX1hKHlvLFwidHlwZWRBcnJheVN1cHBvcnRcIik7T2JqZWN0LmRlZmluZVByb3BlcnR5KFxuZi5wcm90b3R5cGUsXCJwYXJlbnRcIix7ZW51bWVyYWJsZTohMCxnZXQ6YShmdW5jdGlvbigpe2lmKGYuaXNCdWZmZXIodGhpcykpcmV0dXJuIHRoaXMuXG5idWZmZXJ9LFwiZ2V0XCIpfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGYucHJvdG90eXBlLFwib2Zmc2V0XCIse2VudW1lcmFibGU6ITAsZ2V0OmEoXG5mdW5jdGlvbigpe2lmKGYuaXNCdWZmZXIodGhpcykpcmV0dXJuIHRoaXMuYnl0ZU9mZnNldH0sXCJnZXRcIil9KTtmdW5jdGlvbiBmZShyKXtpZihyPlxuaXQpdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBcIicrcisnXCIgaXMgaW52YWxpZCBmb3Igb3B0aW9uIFwic2l6ZVwiJyk7bGV0IGU9bmV3IFVpbnQ4QXJyYXkoXG5yKTtyZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mKGUsZi5wcm90b3R5cGUpLGV9YShmZSxcImNyZWF0ZUJ1ZmZlclwiKTtmdW5jdGlvbiBmKHIsZSx0KXtcbmlmKHR5cGVvZiByPT1cIm51bWJlclwiKXtpZih0eXBlb2YgZT09XCJzdHJpbmdcIil0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJzdHJpbmdcIiBhXFxcbnJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIHN0cmluZy4gUmVjZWl2ZWQgdHlwZSBudW1iZXInKTtyZXR1cm4gRHQocil9cmV0dXJuIE1uKHIsXG5lLHQpfWEoZixcIkJ1ZmZlclwiKTtmLnBvb2xTaXplPTgxOTI7ZnVuY3Rpb24gTW4ocixlLHQpe2lmKHR5cGVvZiByPT1cInN0cmluZ1wiKXJldHVybiBnbyhcbnIsZSk7aWYoQXJyYXlCdWZmZXIuaXNWaWV3KHIpKXJldHVybiB3byhyKTtpZihyPT1udWxsKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgZlxcXG5pcnN0IGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgQXJyYXktbFxcXG5pa2UgT2JqZWN0LiBSZWNlaXZlZCB0eXBlIFwiK3R5cGVvZiByKTtpZih1ZShyLEFycmF5QnVmZmVyKXx8ciYmdWUoci5idWZmZXIsQXJyYXlCdWZmZXIpfHxcbnR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlcjxcInVcIiYmKHVlKHIsU2hhcmVkQXJyYXlCdWZmZXIpfHxyJiZ1ZShyLmJ1ZmZlcixTaGFyZWRBcnJheUJ1ZmZlcikpKVxucmV0dXJuIEZ0KHIsZSx0KTtpZih0eXBlb2Ygcj09XCJudW1iZXJcIil0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ2YWx1ZVwiIGFyZ3VtZW50XFxcbiBtdXN0IG5vdCBiZSBvZiB0eXBlIG51bWJlci4gUmVjZWl2ZWQgdHlwZSBudW1iZXInKTtsZXQgbj1yLnZhbHVlT2YmJnIudmFsdWVPZigpO1xuaWYobiE9bnVsbCYmbiE9PXIpcmV0dXJuIGYuZnJvbShuLGUsdCk7bGV0IGk9Ym8ocik7aWYoaSlyZXR1cm4gaTtpZih0eXBlb2YgU3ltYm9sPFxuXCJ1XCImJlN5bWJvbC50b1ByaW1pdGl2ZSE9bnVsbCYmdHlwZW9mIHJbU3ltYm9sLnRvUHJpbWl0aXZlXT09XCJmdW5jdGlvblwiKXJldHVybiBmLlxuZnJvbShyW1N5bWJvbC50b1ByaW1pdGl2ZV0oXCJzdHJpbmdcIiksZSx0KTt0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGZpcnN0IGFyZ3VtZW5cXFxudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIEFycmF5LWxpa2UgT2JqZWN0LiBcXFxuUmVjZWl2ZWQgdHlwZSBcIit0eXBlb2Ygcil9YShNbixcImZyb21cIik7Zi5mcm9tPWZ1bmN0aW9uKHIsZSx0KXtyZXR1cm4gTW4ocixlLHQpfTtcbk9iamVjdC5zZXRQcm90b3R5cGVPZihmLnByb3RvdHlwZSxVaW50OEFycmF5LnByb3RvdHlwZSk7T2JqZWN0LnNldFByb3RvdHlwZU9mKGYsXG5VaW50OEFycmF5KTtmdW5jdGlvbiBEbihyKXtpZih0eXBlb2YgciE9XCJudW1iZXJcIil0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmdcXFxudW1lbnQgbXVzdCBiZSBvZiB0eXBlIG51bWJlcicpO2lmKHI8MCl0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIFwiJytyKydcIiBpc1xcXG4gaW52YWxpZCBmb3Igb3B0aW9uIFwic2l6ZVwiJyl9YShEbixcImFzc2VydFNpemVcIik7ZnVuY3Rpb24gbW8ocixlLHQpe3JldHVybiBEbihyKSxcbnI8PTA/ZmUocik6ZSE9PXZvaWQgMD90eXBlb2YgdD09XCJzdHJpbmdcIj9mZShyKS5maWxsKGUsdCk6ZmUocikuZmlsbChlKTpmZShyKX1hKG1vLFxuXCJhbGxvY1wiKTtmLmFsbG9jPWZ1bmN0aW9uKHIsZSx0KXtyZXR1cm4gbW8ocixlLHQpfTtmdW5jdGlvbiBEdChyKXtyZXR1cm4gRG4ociksZmUoXG5yPDA/MDprdChyKXwwKX1hKER0LFwiYWxsb2NVbnNhZmVcIik7Zi5hbGxvY1Vuc2FmZT1mdW5jdGlvbihyKXtyZXR1cm4gRHQocil9O2YuYWxsb2NVbnNhZmVTbG93PVxuZnVuY3Rpb24ocil7cmV0dXJuIER0KHIpfTtmdW5jdGlvbiBnbyhyLGUpe2lmKCh0eXBlb2YgZSE9XCJzdHJpbmdcInx8ZT09PVwiXCIpJiYoZT1cIlxcXG51dGY4XCIpLCFmLmlzRW5jb2RpbmcoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gZW5jb2Rpbmc6IFwiK2UpO2xldCB0PWtuKHIsZSl8XG4wLG49ZmUodCksaT1uLndyaXRlKHIsZSk7cmV0dXJuIGkhPT10JiYobj1uLnNsaWNlKDAsaSkpLG59YShnbyxcImZyb21TdHJpbmdcIik7ZnVuY3Rpb24gUnQocil7XG5sZXQgZT1yLmxlbmd0aDwwPzA6a3Qoci5sZW5ndGgpfDAsdD1mZShlKTtmb3IobGV0IG49MDtuPGU7bis9MSl0W25dPXJbbl0mMjU1O3JldHVybiB0fVxuYShSdCxcImZyb21BcnJheUxpa2VcIik7ZnVuY3Rpb24gd28ocil7aWYodWUocixVaW50OEFycmF5KSl7bGV0IGU9bmV3IFVpbnQ4QXJyYXkocik7XG5yZXR1cm4gRnQoZS5idWZmZXIsZS5ieXRlT2Zmc2V0LGUuYnl0ZUxlbmd0aCl9cmV0dXJuIFJ0KHIpfWEod28sXCJmcm9tQXJyYXlWaWV3XCIpO1xuZnVuY3Rpb24gRnQocixlLHQpe2lmKGU8MHx8ci5ieXRlTGVuZ3RoPGUpdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wib2Zmc2V0XCIgaXMgb3V0c1xcXG5pZGUgb2YgYnVmZmVyIGJvdW5kcycpO2lmKHIuYnl0ZUxlbmd0aDxlKyh0fHwwKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJsZW5ndGhcIiBpXFxcbnMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzJyk7bGV0IG47cmV0dXJuIGU9PT12b2lkIDAmJnQ9PT12b2lkIDA/bj1uZXcgVWludDhBcnJheShcbnIpOnQ9PT12b2lkIDA/bj1uZXcgVWludDhBcnJheShyLGUpOm49bmV3IFVpbnQ4QXJyYXkocixlLHQpLE9iamVjdC5zZXRQcm90b3R5cGVPZihcbm4sZi5wcm90b3R5cGUpLG59YShGdCxcImZyb21BcnJheUJ1ZmZlclwiKTtmdW5jdGlvbiBibyhyKXtpZihmLmlzQnVmZmVyKHIpKXtsZXQgZT1rdChcbnIubGVuZ3RoKXwwLHQ9ZmUoZSk7cmV0dXJuIHQubGVuZ3RoPT09MHx8ci5jb3B5KHQsMCwwLGUpLHR9aWYoci5sZW5ndGghPT12b2lkIDApXG5yZXR1cm4gdHlwZW9mIHIubGVuZ3RoIT1cIm51bWJlclwifHxPdChyLmxlbmd0aCk/ZmUoMCk6UnQocik7aWYoci50eXBlPT09XCJCdWZmZXJcIiYmXG5BcnJheS5pc0FycmF5KHIuZGF0YSkpcmV0dXJuIFJ0KHIuZGF0YSl9YShibyxcImZyb21PYmplY3RcIik7ZnVuY3Rpb24ga3Qocil7aWYocj49XG5pdCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkF0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gc2l6ZTogMHhcIitcbml0LnRvU3RyaW5nKDE2KStcIiBieXRlc1wiKTtyZXR1cm4gcnwwfWEoa3QsXCJjaGVja2VkXCIpO2Z1bmN0aW9uIFNvKHIpe3JldHVybityIT1yJiZcbihyPTApLGYuYWxsb2MoK3IpfWEoU28sXCJTbG93QnVmZmVyXCIpO2YuaXNCdWZmZXI9YShmdW5jdGlvbihlKXtyZXR1cm4gZSE9bnVsbCYmZS5cbl9pc0J1ZmZlcj09PSEwJiZlIT09Zi5wcm90b3R5cGV9LFwiaXNCdWZmZXJcIik7Zi5jb21wYXJlPWEoZnVuY3Rpb24oZSx0KXtpZih1ZShlLFVpbnQ4QXJyYXkpJiZcbihlPWYuZnJvbShlLGUub2Zmc2V0LGUuYnl0ZUxlbmd0aCkpLHVlKHQsVWludDhBcnJheSkmJih0PWYuZnJvbSh0LHQub2Zmc2V0LHQuYnl0ZUxlbmd0aCkpLFxuIWYuaXNCdWZmZXIoZSl8fCFmLmlzQnVmZmVyKHQpKXRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImJ1ZjFcIiwgXCJidWYyXCIgYXJndW1lbnRzXFxcbiBtdXN0IGJlIG9uZSBvZiB0eXBlIEJ1ZmZlciBvciBVaW50OEFycmF5Jyk7aWYoZT09PXQpcmV0dXJuIDA7bGV0IG49ZS5sZW5ndGgsaT10LlxubGVuZ3RoO2ZvcihsZXQgcz0wLG89TWF0aC5taW4obixpKTtzPG87KytzKWlmKGVbc10hPT10W3NdKXtuPWVbc10saT10W3NdO2JyZWFrfXJldHVybiBuPFxuaT8tMTppPG4/MTowfSxcImNvbXBhcmVcIik7Zi5pc0VuY29kaW5nPWEoZnVuY3Rpb24oZSl7c3dpdGNoKFN0cmluZyhlKS50b0xvd2VyQ2FzZSgpKXtjYXNlXCJcXFxuaGV4XCI6Y2FzZVwidXRmOFwiOmNhc2VcInV0Zi04XCI6Y2FzZVwiYXNjaWlcIjpjYXNlXCJsYXRpbjFcIjpjYXNlXCJiaW5hcnlcIjpjYXNlXCJiYXNlNjRcIjpjYXNlXCJcXFxudWNzMlwiOmNhc2VcInVjcy0yXCI6Y2FzZVwidXRmMTZsZVwiOmNhc2VcInV0Zi0xNmxlXCI6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX19LFwiaXNFblxcXG5jb2RpbmdcIik7Zi5jb25jYXQ9YShmdW5jdGlvbihlLHQpe2lmKCFBcnJheS5pc0FycmF5KGUpKXRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzXFxcbnRcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKTtpZihlLmxlbmd0aD09PTApcmV0dXJuIGYuYWxsb2MoMCk7bGV0IG47XG5pZih0PT09dm9pZCAwKWZvcih0PTAsbj0wO248ZS5sZW5ndGg7KytuKXQrPWVbbl0ubGVuZ3RoO2xldCBpPWYuYWxsb2NVbnNhZmUodCkscz0wO1xuZm9yKG49MDtuPGUubGVuZ3RoOysrbil7bGV0IG89ZVtuXTtpZih1ZShvLFVpbnQ4QXJyYXkpKXMrby5sZW5ndGg+aS5sZW5ndGg/KGYuaXNCdWZmZXIoXG5vKXx8KG89Zi5mcm9tKG8pKSxvLmNvcHkoaSxzKSk6VWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoaSxvLHMpO2Vsc2UgaWYoZi5pc0J1ZmZlcihcbm8pKW8uY29weShpLHMpO2Vsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZcXFxuZmVycycpO3MrPW8ubGVuZ3RofXJldHVybiBpfSxcImNvbmNhdFwiKTtmdW5jdGlvbiBrbihyLGUpe2lmKGYuaXNCdWZmZXIocikpcmV0dXJuIHIuXG5sZW5ndGg7aWYoQXJyYXlCdWZmZXIuaXNWaWV3KHIpfHx1ZShyLEFycmF5QnVmZmVyKSlyZXR1cm4gci5ieXRlTGVuZ3RoO2lmKHR5cGVvZiByIT1cblwic3RyaW5nXCIpdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwic3RyaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIFxcXG5CdWZmZXIsIG9yIEFycmF5QnVmZmVyLiBSZWNlaXZlZCB0eXBlICcrdHlwZW9mIHIpO2xldCB0PXIubGVuZ3RoLG49YXJndW1lbnRzLmxlbmd0aD5cbjImJmFyZ3VtZW50c1syXT09PSEwO2lmKCFuJiZ0PT09MClyZXR1cm4gMDtsZXQgaT0hMTtmb3IoOzspc3dpdGNoKGUpe2Nhc2VcImFzY2lpXCI6Y2FzZVwiXFxcbmxhdGluMVwiOmNhc2VcImJpbmFyeVwiOnJldHVybiB0O2Nhc2VcInV0ZjhcIjpjYXNlXCJ1dGYtOFwiOnJldHVybiBNdChyKS5sZW5ndGg7Y2FzZVwidWNcXFxuczJcIjpjYXNlXCJ1Y3MtMlwiOmNhc2VcInV0ZjE2bGVcIjpjYXNlXCJ1dGYtMTZsZVwiOnJldHVybiB0KjI7Y2FzZVwiaGV4XCI6cmV0dXJuIHQ+Pj4xO2Nhc2VcIlxcXG5iYXNlNjRcIjpyZXR1cm4gR24ocikubGVuZ3RoO2RlZmF1bHQ6aWYoaSlyZXR1cm4gbj8tMTpNdChyKS5sZW5ndGg7ZT0oXCJcIitlKS50b0xvd2VyQ2FzZSgpLFxuaT0hMH19YShrbixcImJ5dGVMZW5ndGhcIik7Zi5ieXRlTGVuZ3RoPWtuO2Z1bmN0aW9uIHhvKHIsZSx0KXtsZXQgbj0hMTtpZigoZT09PXZvaWQgMHx8XG5lPDApJiYoZT0wKSxlPnRoaXMubGVuZ3RofHwoKHQ9PT12b2lkIDB8fHQ+dGhpcy5sZW5ndGgpJiYodD10aGlzLmxlbmd0aCksdDw9MCl8fFxuKHQ+Pj49MCxlPj4+PTAsdDw9ZSkpcmV0dXJuXCJcIjtmb3Iocnx8KHI9XCJ1dGY4XCIpOzspc3dpdGNoKHIpe2Nhc2VcImhleFwiOnJldHVybiBMbyhcbnRoaXMsZSx0KTtjYXNlXCJ1dGY4XCI6Y2FzZVwidXRmLThcIjpyZXR1cm4gT24odGhpcyxlLHQpO2Nhc2VcImFzY2lpXCI6cmV0dXJuIFBvKHRoaXMsXG5lLHQpO2Nhc2VcImxhdGluMVwiOmNhc2VcImJpbmFyeVwiOnJldHVybiBCbyh0aGlzLGUsdCk7Y2FzZVwiYmFzZTY0XCI6cmV0dXJuIFRvKHRoaXMsZSxcbnQpO2Nhc2VcInVjczJcIjpjYXNlXCJ1Y3MtMlwiOmNhc2VcInV0ZjE2bGVcIjpjYXNlXCJ1dGYtMTZsZVwiOnJldHVybiBSbyh0aGlzLGUsdCk7ZGVmYXVsdDpcbmlmKG4pdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gZW5jb2Rpbmc6IFwiK3IpO3I9KHIrXCJcIikudG9Mb3dlckNhc2UoKSxuPSEwfX1hKFxueG8sXCJzbG93VG9TdHJpbmdcIik7Zi5wcm90b3R5cGUuX2lzQnVmZmVyPSEwO2Z1bmN0aW9uIEVlKHIsZSx0KXtsZXQgbj1yW2VdO3JbZV09clt0XSxcbnJbdF09bn1hKEVlLFwic3dhcFwiKTtmLnByb3RvdHlwZS5zd2FwMTY9YShmdW5jdGlvbigpe2xldCBlPXRoaXMubGVuZ3RoO2lmKGUlMiE9PTApXG50aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkJ1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzXCIpO2ZvcihsZXQgdD0wO3Q8XG5lO3QrPTIpRWUodGhpcyx0LHQrMSk7cmV0dXJuIHRoaXN9LFwic3dhcDE2XCIpO2YucHJvdG90eXBlLnN3YXAzMj1hKGZ1bmN0aW9uKCl7bGV0IGU9dGhpcy5cbmxlbmd0aDtpZihlJTQhPT0wKXRocm93IG5ldyBSYW5nZUVycm9yKFwiQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdFxcXG5zXCIpO2ZvcihsZXQgdD0wO3Q8ZTt0Kz00KUVlKHRoaXMsdCx0KzMpLEVlKHRoaXMsdCsxLHQrMik7cmV0dXJuIHRoaXN9LFwic3dhcDMyXCIpO1xuZi5wcm90b3R5cGUuc3dhcDY0PWEoZnVuY3Rpb24oKXtsZXQgZT10aGlzLmxlbmd0aDtpZihlJTghPT0wKXRocm93IG5ldyBSYW5nZUVycm9yKFxuXCJCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0c1wiKTtmb3IobGV0IHQ9MDt0PGU7dCs9OClFZSh0aGlzLHQsdCs3KSxcbkVlKHRoaXMsdCsxLHQrNiksRWUodGhpcyx0KzIsdCs1KSxFZSh0aGlzLHQrMyx0KzQpO3JldHVybiB0aGlzfSxcInN3YXA2NFwiKTtmLnByb3RvdHlwZS5cbnRvU3RyaW5nPWEoZnVuY3Rpb24oKXtsZXQgZT10aGlzLmxlbmd0aDtyZXR1cm4gZT09PTA/XCJcIjphcmd1bWVudHMubGVuZ3RoPT09MD9PbihcbnRoaXMsMCxlKTp4by5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LFwidG9TdHJpbmdcIik7Zi5wcm90b3R5cGUudG9Mb2NhbGVTdHJpbmc9Zi5wcm90b3R5cGUuXG50b1N0cmluZztmLnByb3RvdHlwZS5lcXVhbHM9YShmdW5jdGlvbihlKXtpZighZi5pc0J1ZmZlcihlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFxuXCJBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyXCIpO3JldHVybiB0aGlzPT09ZT8hMDpmLmNvbXBhcmUodGhpcyxlKT09PTB9LFwiZXF1YWxzXCIpO1xuZi5wcm90b3R5cGUuaW5zcGVjdD1hKGZ1bmN0aW9uKCl7bGV0IGU9XCJcIix0PUxlLklOU1BFQ1RfTUFYX0JZVEVTO3JldHVybiBlPXRoaXMudG9TdHJpbmcoXG5cImhleFwiLDAsdCkucmVwbGFjZSgvKC57Mn0pL2csXCIkMSBcIikudHJpbSgpLHRoaXMubGVuZ3RoPnQmJihlKz1cIiAuLi4gXCIpLFwiPEJ1ZmZlciBcIitcbmUrXCI+XCJ9LFwiaW5zcGVjdFwiKTtCbiYmKGYucHJvdG90eXBlW0JuXT1mLnByb3RvdHlwZS5pbnNwZWN0KTtmLnByb3RvdHlwZS5jb21wYXJlPVxuYShmdW5jdGlvbihlLHQsbixpLHMpe2lmKHVlKGUsVWludDhBcnJheSkmJihlPWYuZnJvbShlLGUub2Zmc2V0LGUuYnl0ZUxlbmd0aCkpLCFmLlxuaXNCdWZmZXIoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwidGFyZ2V0XCIgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBCdWZmZVxcXG5yIG9yIFVpbnQ4QXJyYXkuIFJlY2VpdmVkIHR5cGUgJyt0eXBlb2YgZSk7aWYodD09PXZvaWQgMCYmKHQ9MCksbj09PXZvaWQgMCYmKG49ZT9cbmUubGVuZ3RoOjApLGk9PT12b2lkIDAmJihpPTApLHM9PT12b2lkIDAmJihzPXRoaXMubGVuZ3RoKSx0PDB8fG4+ZS5sZW5ndGh8fGk8MHx8XG5zPnRoaXMubGVuZ3RoKXRocm93IG5ldyBSYW5nZUVycm9yKFwib3V0IG9mIHJhbmdlIGluZGV4XCIpO2lmKGk+PXMmJnQ+PW4pcmV0dXJuIDA7XG5pZihpPj1zKXJldHVybi0xO2lmKHQ+PW4pcmV0dXJuIDE7aWYodD4+Pj0wLG4+Pj49MCxpPj4+PTAscz4+Pj0wLHRoaXM9PT1lKXJldHVybiAwO1xubGV0IG89cy1pLHU9bi10LGM9TWF0aC5taW4obyx1KSxoPXRoaXMuc2xpY2UoaSxzKSxsPWUuc2xpY2UodCxuKTtmb3IobGV0IGQ9MDtkPGM7KytkKVxuaWYoaFtkXSE9PWxbZF0pe289aFtkXSx1PWxbZF07YnJlYWt9cmV0dXJuIG88dT8tMTp1PG8/MTowfSxcImNvbXBhcmVcIik7ZnVuY3Rpb24gVW4ocixlLHQsbixpKXtcbmlmKHIubGVuZ3RoPT09MClyZXR1cm4tMTtpZih0eXBlb2YgdD09XCJzdHJpbmdcIj8obj10LHQ9MCk6dD4yMTQ3NDgzNjQ3P3Q9MjE0NzQ4MzY0NzpcbnQ8LTIxNDc0ODM2NDgmJih0PS0yMTQ3NDgzNjQ4KSx0PSt0LE90KHQpJiYodD1pPzA6ci5sZW5ndGgtMSksdDwwJiYodD1yLmxlbmd0aCt0KSxcbnQ+PXIubGVuZ3RoKXtpZihpKXJldHVybi0xO3Q9ci5sZW5ndGgtMX1lbHNlIGlmKHQ8MClpZihpKXQ9MDtlbHNlIHJldHVybi0xO2lmKHR5cGVvZiBlPT1cblwic3RyaW5nXCImJihlPWYuZnJvbShlLG4pKSxmLmlzQnVmZmVyKGUpKXJldHVybiBlLmxlbmd0aD09PTA/LTE6TG4ocixlLHQsbixpKTtpZih0eXBlb2YgZT09XG5cIm51bWJlclwiKXJldHVybiBlPWUmMjU1LHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mPT1cImZ1bmN0aW9uXCI/aT9VaW50OEFycmF5LlxucHJvdG90eXBlLmluZGV4T2YuY2FsbChyLGUsdCk6VWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChyLGUsdCk6TG4ocixcbltlXSx0LG4saSk7dGhyb3cgbmV3IFR5cGVFcnJvcihcInZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlclwiKX1hKFVuLFwiYmlkXFxcbmlyZWN0aW9uYWxJbmRleE9mXCIpO2Z1bmN0aW9uIExuKHIsZSx0LG4saSl7bGV0IHM9MSxvPXIubGVuZ3RoLHU9ZS5sZW5ndGg7aWYobiE9PVxudm9pZCAwJiYobj1TdHJpbmcobikudG9Mb3dlckNhc2UoKSxuPT09XCJ1Y3MyXCJ8fG49PT1cInVjcy0yXCJ8fG49PT1cInV0ZjE2bGVcInx8bj09PVwiXFxcbnV0Zi0xNmxlXCIpKXtpZihyLmxlbmd0aDwyfHxlLmxlbmd0aDwyKXJldHVybi0xO3M9MixvLz0yLHUvPTIsdC89Mn1mdW5jdGlvbiBjKGwsZCl7XG5yZXR1cm4gcz09PTE/bFtkXTpsLnJlYWRVSW50MTZCRShkKnMpfWEoYyxcInJlYWRcIik7bGV0IGg7aWYoaSl7bGV0IGw9LTE7Zm9yKGg9dDtoPFxubztoKyspaWYoYyhyLGgpPT09YyhlLGw9PT0tMT8wOmgtbCkpe2lmKGw9PT0tMSYmKGw9aCksaC1sKzE9PT11KXJldHVybiBsKnN9ZWxzZSBsIT09XG4tMSYmKGgtPWgtbCksbD0tMX1lbHNlIGZvcih0K3U+byYmKHQ9by11KSxoPXQ7aD49MDtoLS0pe2xldCBsPSEwO2ZvcihsZXQgZD0wO2Q8dTtkKyspXG5pZihjKHIsaCtkKSE9PWMoZSxkKSl7bD0hMTticmVha31pZihsKXJldHVybiBofXJldHVybi0xfWEoTG4sXCJhcnJheUluZGV4T2ZcIik7Zi5wcm90b3R5cGUuXG5pbmNsdWRlcz1hKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5pbmRleE9mKGUsdCxuKSE9PS0xfSxcImluY2x1ZGVzXCIpO2YucHJvdG90eXBlLlxuaW5kZXhPZj1hKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gVW4odGhpcyxlLHQsbiwhMCl9LFwiaW5kZXhPZlwiKTtmLnByb3RvdHlwZS5sYXN0SW5kZXhPZj1cbmEoZnVuY3Rpb24oZSx0LG4pe3JldHVybiBVbih0aGlzLGUsdCxuLCExKX0sXCJsYXN0SW5kZXhPZlwiKTtmdW5jdGlvbiB2byhyLGUsdCxuKXtcbnQ9TnVtYmVyKHQpfHwwO2xldCBpPXIubGVuZ3RoLXQ7bj8obj1OdW1iZXIobiksbj5pJiYobj1pKSk6bj1pO2xldCBzPWUubGVuZ3RoO24+XG5zLzImJihuPXMvMik7bGV0IG87Zm9yKG89MDtvPG47KytvKXtsZXQgdT1wYXJzZUludChlLnN1YnN0cihvKjIsMiksMTYpO2lmKE90KHUpKVxucmV0dXJuIG87clt0K29dPXV9cmV0dXJuIG99YSh2byxcImhleFdyaXRlXCIpO2Z1bmN0aW9uIEVvKHIsZSx0LG4pe3JldHVybiBzdChNdChlLFxuci5sZW5ndGgtdCkscix0LG4pfWEoRW8sXCJ1dGY4V3JpdGVcIik7ZnVuY3Rpb24gX28ocixlLHQsbil7cmV0dXJuIHN0KGtvKGUpLHIsdCxuKX1cbmEoX28sXCJhc2NpaVdyaXRlXCIpO2Z1bmN0aW9uIEFvKHIsZSx0LG4pe3JldHVybiBzdChHbihlKSxyLHQsbil9YShBbyxcImJhc2U2NFdyaXRlXCIpO1xuZnVuY3Rpb24gQ28ocixlLHQsbil7cmV0dXJuIHN0KFVvKGUsci5sZW5ndGgtdCkscix0LG4pfWEoQ28sXCJ1Y3MyV3JpdGVcIik7Zi5wcm90b3R5cGUuXG53cml0ZT1hKGZ1bmN0aW9uKGUsdCxuLGkpe2lmKHQ9PT12b2lkIDApaT1cInV0ZjhcIixuPXRoaXMubGVuZ3RoLHQ9MDtlbHNlIGlmKG49PT12b2lkIDAmJlxudHlwZW9mIHQ9PVwic3RyaW5nXCIpaT10LG49dGhpcy5sZW5ndGgsdD0wO2Vsc2UgaWYoaXNGaW5pdGUodCkpdD10Pj4+MCxpc0Zpbml0ZShuKT9cbihuPW4+Pj4wLGk9PT12b2lkIDAmJihpPVwidXRmOFwiKSk6KGk9bixuPXZvaWQgMCk7ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJCdWZmZXIud3JpXFxcbnRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWRcIik7bGV0IHM9dGhpcy5sZW5ndGgtXG50O2lmKChuPT09dm9pZCAwfHxuPnMpJiYobj1zKSxlLmxlbmd0aD4wJiYobjwwfHx0PDApfHx0PnRoaXMubGVuZ3RoKXRocm93IG5ldyBSYW5nZUVycm9yKFxuXCJBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kc1wiKTtpfHwoaT1cInV0ZjhcIik7bGV0IG89ITE7Zm9yKDs7KXN3aXRjaChpKXtjYXNlXCJcXFxuaGV4XCI6cmV0dXJuIHZvKHRoaXMsZSx0LG4pO2Nhc2VcInV0ZjhcIjpjYXNlXCJ1dGYtOFwiOnJldHVybiBFbyh0aGlzLGUsdCxuKTtjYXNlXCJhc2NcXFxuaWlcIjpjYXNlXCJsYXRpbjFcIjpjYXNlXCJiaW5hcnlcIjpyZXR1cm4gX28odGhpcyxlLHQsbik7Y2FzZVwiYmFzZTY0XCI6cmV0dXJuIEFvKHRoaXMsXG5lLHQsbik7Y2FzZVwidWNzMlwiOmNhc2VcInVjcy0yXCI6Y2FzZVwidXRmMTZsZVwiOmNhc2VcInV0Zi0xNmxlXCI6cmV0dXJuIENvKHRoaXMsZSx0LG4pO2RlZmF1bHQ6XG5pZihvKXRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmtub3duIGVuY29kaW5nOiBcIitpKTtpPShcIlwiK2kpLnRvTG93ZXJDYXNlKCksbz0hMH19LFwiXFxcbndyaXRlXCIpO2YucHJvdG90eXBlLnRvSlNPTj1hKGZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6XCJCdWZmZXJcIixkYXRhOkFycmF5LnByb3RvdHlwZS5cbnNsaWNlLmNhbGwodGhpcy5fYXJyfHx0aGlzLDApfX0sXCJ0b0pTT05cIik7ZnVuY3Rpb24gVG8ocixlLHQpe3JldHVybiBlPT09MCYmdD09PXIuXG5sZW5ndGg/THQuZnJvbUJ5dGVBcnJheShyKTpMdC5mcm9tQnl0ZUFycmF5KHIuc2xpY2UoZSx0KSl9YShUbyxcImJhc2U2NFNsaWNlXCIpO2Z1bmN0aW9uIE9uKHIsZSx0KXtcbnQ9TWF0aC5taW4oci5sZW5ndGgsdCk7bGV0IG49W10saT1lO2Zvcig7aTx0Oyl7bGV0IHM9cltpXSxvPW51bGwsdT1zPjIzOT80OnM+MjIzP1xuMzpzPjE5MT8yOjE7aWYoaSt1PD10KXtsZXQgYyxoLGwsZDtzd2l0Y2godSl7Y2FzZSAxOnM8MTI4JiYobz1zKTticmVhaztjYXNlIDI6Yz1cbnJbaSsxXSwoYyYxOTIpPT09MTI4JiYoZD0ocyYzMSk8PDZ8YyY2MyxkPjEyNyYmKG89ZCkpO2JyZWFrO2Nhc2UgMzpjPXJbaSsxXSxoPXJbaStcbjJdLChjJjE5Mik9PT0xMjgmJihoJjE5Mik9PT0xMjgmJihkPShzJjE1KTw8MTJ8KGMmNjMpPDw2fGgmNjMsZD4yMDQ3JiYoZDw1NTI5Nnx8XG5kPjU3MzQzKSYmKG89ZCkpO2JyZWFrO2Nhc2UgNDpjPXJbaSsxXSxoPXJbaSsyXSxsPXJbaSszXSwoYyYxOTIpPT09MTI4JiYoaCYxOTIpPT09XG4xMjgmJihsJjE5Mik9PT0xMjgmJihkPShzJjE1KTw8MTh8KGMmNjMpPDwxMnwoaCY2Myk8PDZ8bCY2MyxkPjY1NTM1JiZkPDExMTQxMTImJlxuKG89ZCkpfX1vPT09bnVsbD8obz02NTUzMyx1PTEpOm8+NjU1MzUmJihvLT02NTUzNixuLnB1c2gobz4+PjEwJjEwMjN8NTUyOTYpLG89NTYzMjB8XG5vJjEwMjMpLG4ucHVzaChvKSxpKz11fXJldHVybiBJbyhuKX1hKE9uLFwidXRmOFNsaWNlXCIpO3ZhciBSbj00MDk2O2Z1bmN0aW9uIElvKHIpe1xubGV0IGU9ci5sZW5ndGg7aWYoZTw9Um4pcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLHIpO2xldCB0PVwiXCIsbj0wO1xuZm9yKDtuPGU7KXQrPVN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLHIuc2xpY2UobixuKz1SbikpO3JldHVybiB0fWEoSW8sXCJkXFxcbmVjb2RlQ29kZVBvaW50c0FycmF5XCIpO2Z1bmN0aW9uIFBvKHIsZSx0KXtsZXQgbj1cIlwiO3Q9TWF0aC5taW4oci5sZW5ndGgsdCk7Zm9yKGxldCBpPWU7aTxcbnQ7KytpKW4rPVN0cmluZy5mcm9tQ2hhckNvZGUocltpXSYxMjcpO3JldHVybiBufWEoUG8sXCJhc2NpaVNsaWNlXCIpO2Z1bmN0aW9uIEJvKHIsZSx0KXtcbmxldCBuPVwiXCI7dD1NYXRoLm1pbihyLmxlbmd0aCx0KTtmb3IobGV0IGk9ZTtpPHQ7KytpKW4rPVN0cmluZy5mcm9tQ2hhckNvZGUocltpXSk7XG5yZXR1cm4gbn1hKEJvLFwibGF0aW4xU2xpY2VcIik7ZnVuY3Rpb24gTG8ocixlLHQpe2xldCBuPXIubGVuZ3RoOyghZXx8ZTwwKSYmKGU9MCksXG4oIXR8fHQ8MHx8dD5uKSYmKHQ9bik7bGV0IGk9XCJcIjtmb3IobGV0IHM9ZTtzPHQ7KytzKWkrPU9vW3Jbc11dO3JldHVybiBpfWEoTG8sXCJoZVxcXG54U2xpY2VcIik7ZnVuY3Rpb24gUm8ocixlLHQpe2xldCBuPXIuc2xpY2UoZSx0KSxpPVwiXCI7Zm9yKGxldCBzPTA7czxuLmxlbmd0aC0xO3MrPVxuMilpKz1TdHJpbmcuZnJvbUNoYXJDb2RlKG5bc10rbltzKzFdKjI1Nik7cmV0dXJuIGl9YShSbyxcInV0ZjE2bGVTbGljZVwiKTtmLnByb3RvdHlwZS5cbnNsaWNlPWEoZnVuY3Rpb24oZSx0KXtsZXQgbj10aGlzLmxlbmd0aDtlPX5+ZSx0PXQ9PT12b2lkIDA/bjp+fnQsZTwwPyhlKz1uLGU8MCYmXG4oZT0wKSk6ZT5uJiYoZT1uKSx0PDA/KHQrPW4sdDwwJiYodD0wKSk6dD5uJiYodD1uKSx0PGUmJih0PWUpO2xldCBpPXRoaXMuc3ViYXJyYXkoXG5lLHQpO3JldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YoaSxmLnByb3RvdHlwZSksaX0sXCJzbGljZVwiKTtmdW5jdGlvbiBxKHIsZSx0KXtpZihyJVxuMSE9PTB8fHI8MCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIm9mZnNldCBpcyBub3QgdWludFwiKTtpZihyK2U+dCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcblwiVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aFwiKX1hKHEsXCJjaGVja09mZnNldFwiKTtmLnByb3RvdHlwZS5yZWFkVWludExFPVxuZi5wcm90b3R5cGUucmVhZFVJbnRMRT1hKGZ1bmN0aW9uKGUsdCxuKXtlPWU+Pj4wLHQ9dD4+PjAsbnx8cShlLHQsdGhpcy5sZW5ndGgpO2xldCBpPXRoaXNbZV0sXG5zPTEsbz0wO2Zvcig7KytvPHQmJihzKj0yNTYpOylpKz10aGlzW2Urb10qcztyZXR1cm4gaX0sXCJyZWFkVUludExFXCIpO2YucHJvdG90eXBlLlxucmVhZFVpbnRCRT1mLnByb3RvdHlwZS5yZWFkVUludEJFPWEoZnVuY3Rpb24oZSx0LG4pe2U9ZT4+PjAsdD10Pj4+MCxufHxxKGUsdCx0aGlzLlxubGVuZ3RoKTtsZXQgaT10aGlzW2UrLS10XSxzPTE7Zm9yKDt0PjAmJihzKj0yNTYpOylpKz10aGlzW2UrLS10XSpzO3JldHVybiBpfSxcInJlXFxcbmFkVUludEJFXCIpO2YucHJvdG90eXBlLnJlYWRVaW50OD1mLnByb3RvdHlwZS5yZWFkVUludDg9YShmdW5jdGlvbihlLHQpe3JldHVybiBlPVxuZT4+PjAsdHx8cShlLDEsdGhpcy5sZW5ndGgpLHRoaXNbZV19LFwicmVhZFVJbnQ4XCIpO2YucHJvdG90eXBlLnJlYWRVaW50MTZMRT1mLnByb3RvdHlwZS5cbnJlYWRVSW50MTZMRT1hKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9ZT4+PjAsdHx8cShlLDIsdGhpcy5sZW5ndGgpLHRoaXNbZV18dGhpc1tlK1xuMV08PDh9LFwicmVhZFVJbnQxNkxFXCIpO2YucHJvdG90eXBlLnJlYWRVaW50MTZCRT1mLnByb3RvdHlwZS5yZWFkVUludDE2QkU9YShmdW5jdGlvbihlLHQpe1xucmV0dXJuIGU9ZT4+PjAsdHx8cShlLDIsdGhpcy5sZW5ndGgpLHRoaXNbZV08PDh8dGhpc1tlKzFdfSxcInJlYWRVSW50MTZCRVwiKTtmLnByb3RvdHlwZS5cbnJlYWRVaW50MzJMRT1mLnByb3RvdHlwZS5yZWFkVUludDMyTEU9YShmdW5jdGlvbihlLHQpe3JldHVybiBlPWU+Pj4wLHR8fHEoZSw0LHRoaXMuXG5sZW5ndGgpLCh0aGlzW2VdfHRoaXNbZSsxXTw8OHx0aGlzW2UrMl08PDE2KSt0aGlzW2UrM10qMTY3NzcyMTZ9LFwicmVhZFVJbnQzMkxFXCIpO1xuZi5wcm90b3R5cGUucmVhZFVpbnQzMkJFPWYucHJvdG90eXBlLnJlYWRVSW50MzJCRT1hKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9ZT4+PjAsXG50fHxxKGUsNCx0aGlzLmxlbmd0aCksdGhpc1tlXSoxNjc3NzIxNisodGhpc1tlKzFdPDwxNnx0aGlzW2UrMl08PDh8dGhpc1tlKzNdKX0sXCJcXFxucmVhZFVJbnQzMkJFXCIpO2YucHJvdG90eXBlLnJlYWRCaWdVSW50NjRMRT1nZShhKGZ1bmN0aW9uKGUpe2U9ZT4+PjAsQmUoZSxcIm9mZnNldFwiKTtcbmxldCB0PXRoaXNbZV0sbj10aGlzW2UrN107KHQ9PT12b2lkIDB8fG49PT12b2lkIDApJiZXZShlLHRoaXMubGVuZ3RoLTgpO2xldCBpPXQrXG50aGlzWysrZV0qMioqOCt0aGlzWysrZV0qMioqMTYrdGhpc1srK2VdKjIqKjI0LHM9dGhpc1srK2VdK3RoaXNbKytlXSoyKio4K3RoaXNbKytlXSpcbjIqKjE2K24qMioqMjQ7cmV0dXJuIEJpZ0ludChpKSsoQmlnSW50KHMpPDxCaWdJbnQoMzIpKX0sXCJyZWFkQmlnVUludDY0TEVcIikpO2YucHJvdG90eXBlLlxucmVhZEJpZ1VJbnQ2NEJFPWdlKGEoZnVuY3Rpb24oZSl7ZT1lPj4+MCxCZShlLFwib2Zmc2V0XCIpO2xldCB0PXRoaXNbZV0sbj10aGlzW2UrN107XG4odD09PXZvaWQgMHx8bj09PXZvaWQgMCkmJldlKGUsdGhpcy5sZW5ndGgtOCk7bGV0IGk9dCoyKioyNCt0aGlzWysrZV0qMioqMTYrdGhpc1srK2VdKlxuMioqOCt0aGlzWysrZV0scz10aGlzWysrZV0qMioqMjQrdGhpc1srK2VdKjIqKjE2K3RoaXNbKytlXSoyKio4K247cmV0dXJuKEJpZ0ludChcbmkpPDxCaWdJbnQoMzIpKStCaWdJbnQocyl9LFwicmVhZEJpZ1VJbnQ2NEJFXCIpKTtmLnByb3RvdHlwZS5yZWFkSW50TEU9YShmdW5jdGlvbihlLHQsbil7XG5lPWU+Pj4wLHQ9dD4+PjAsbnx8cShlLHQsdGhpcy5sZW5ndGgpO2xldCBpPXRoaXNbZV0scz0xLG89MDtmb3IoOysrbzx0JiYocyo9MjU2KTspXG5pKz10aGlzW2Urb10qcztyZXR1cm4gcyo9MTI4LGk+PXMmJihpLT1NYXRoLnBvdygyLDgqdCkpLGl9LFwicmVhZEludExFXCIpO2YucHJvdG90eXBlLlxucmVhZEludEJFPWEoZnVuY3Rpb24oZSx0LG4pe2U9ZT4+PjAsdD10Pj4+MCxufHxxKGUsdCx0aGlzLmxlbmd0aCk7bGV0IGk9dCxzPTEsbz10aGlzW2UrXG4tLWldO2Zvcig7aT4wJiYocyo9MjU2KTspbys9dGhpc1tlKy0taV0qcztyZXR1cm4gcyo9MTI4LG8+PXMmJihvLT1NYXRoLnBvdygyLDgqdCkpLFxub30sXCJyZWFkSW50QkVcIik7Zi5wcm90b3R5cGUucmVhZEludDg9YShmdW5jdGlvbihlLHQpe3JldHVybiBlPWU+Pj4wLHR8fHEoZSwxLHRoaXMuXG5sZW5ndGgpLHRoaXNbZV0mMTI4PygyNTUtdGhpc1tlXSsxKSotMTp0aGlzW2VdfSxcInJlYWRJbnQ4XCIpO2YucHJvdG90eXBlLnJlYWRJbnQxNkxFPVxuYShmdW5jdGlvbihlLHQpe2U9ZT4+PjAsdHx8cShlLDIsdGhpcy5sZW5ndGgpO2xldCBuPXRoaXNbZV18dGhpc1tlKzFdPDw4O3JldHVybiBuJlxuMzI3Njg/bnw0Mjk0OTAxNzYwOm59LFwicmVhZEludDE2TEVcIik7Zi5wcm90b3R5cGUucmVhZEludDE2QkU9YShmdW5jdGlvbihlLHQpe2U9ZT4+PlxuMCx0fHxxKGUsMix0aGlzLmxlbmd0aCk7bGV0IG49dGhpc1tlKzFdfHRoaXNbZV08PDg7cmV0dXJuIG4mMzI3Njg/bnw0Mjk0OTAxNzYwOm59LFxuXCJyZWFkSW50MTZCRVwiKTtmLnByb3RvdHlwZS5yZWFkSW50MzJMRT1hKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9ZT4+PjAsdHx8cShlLDQsdGhpcy5cbmxlbmd0aCksdGhpc1tlXXx0aGlzW2UrMV08PDh8dGhpc1tlKzJdPDwxNnx0aGlzW2UrM108PDI0fSxcInJlYWRJbnQzMkxFXCIpO2YucHJvdG90eXBlLlxucmVhZEludDMyQkU9YShmdW5jdGlvbihlLHQpe3JldHVybiBlPWU+Pj4wLHR8fHEoZSw0LHRoaXMubGVuZ3RoKSx0aGlzW2VdPDwyNHx0aGlzW2UrXG4xXTw8MTZ8dGhpc1tlKzJdPDw4fHRoaXNbZSszXX0sXCJyZWFkSW50MzJCRVwiKTtmLnByb3RvdHlwZS5yZWFkQmlnSW50NjRMRT1nZShhKGZ1bmN0aW9uKGUpe1xuZT1lPj4+MCxCZShlLFwib2Zmc2V0XCIpO2xldCB0PXRoaXNbZV0sbj10aGlzW2UrN107KHQ9PT12b2lkIDB8fG49PT12b2lkIDApJiZXZShlLFxudGhpcy5sZW5ndGgtOCk7bGV0IGk9dGhpc1tlKzRdK3RoaXNbZSs1XSoyKio4K3RoaXNbZSs2XSoyKioxNisobjw8MjQpO3JldHVybihCaWdJbnQoXG5pKTw8QmlnSW50KDMyKSkrQmlnSW50KHQrdGhpc1srK2VdKjIqKjgrdGhpc1srK2VdKjIqKjE2K3RoaXNbKytlXSoyKioyNCl9LFwicmVhZEJcXFxuaWdJbnQ2NExFXCIpKTtmLnByb3RvdHlwZS5yZWFkQmlnSW50NjRCRT1nZShhKGZ1bmN0aW9uKGUpe2U9ZT4+PjAsQmUoZSxcIm9mZnNldFwiKTtcbmxldCB0PXRoaXNbZV0sbj10aGlzW2UrN107KHQ9PT12b2lkIDB8fG49PT12b2lkIDApJiZXZShlLHRoaXMubGVuZ3RoLTgpO2xldCBpPSh0PDxcbjI0KSt0aGlzWysrZV0qMioqMTYrdGhpc1srK2VdKjIqKjgrdGhpc1srK2VdO3JldHVybihCaWdJbnQoaSk8PEJpZ0ludCgzMikpK0JpZ0ludChcbnRoaXNbKytlXSoyKioyNCt0aGlzWysrZV0qMioqMTYrdGhpc1srK2VdKjIqKjgrbil9LFwicmVhZEJpZ0ludDY0QkVcIikpO2YucHJvdG90eXBlLlxucmVhZEZsb2F0TEU9YShmdW5jdGlvbihlLHQpe3JldHVybiBlPWU+Pj4wLHR8fHEoZSw0LHRoaXMubGVuZ3RoKSxQZS5yZWFkKHRoaXMsZSxcbiEwLDIzLDQpfSxcInJlYWRGbG9hdExFXCIpO2YucHJvdG90eXBlLnJlYWRGbG9hdEJFPWEoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1lPj4+MCxcbnR8fHEoZSw0LHRoaXMubGVuZ3RoKSxQZS5yZWFkKHRoaXMsZSwhMSwyMyw0KX0sXCJyZWFkRmxvYXRCRVwiKTtmLnByb3RvdHlwZS5yZWFkRG91YmxlTEU9XG5hKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9ZT4+PjAsdHx8cShlLDgsdGhpcy5sZW5ndGgpLFBlLnJlYWQodGhpcyxlLCEwLDUyLDgpfSxcInJcXFxuZWFkRG91YmxlTEVcIik7Zi5wcm90b3R5cGUucmVhZERvdWJsZUJFPWEoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1lPj4+MCx0fHxxKGUsOCx0aGlzLlxubGVuZ3RoKSxQZS5yZWFkKHRoaXMsZSwhMSw1Miw4KX0sXCJyZWFkRG91YmxlQkVcIik7ZnVuY3Rpb24gWShyLGUsdCxuLGkscyl7aWYoIWYuaXNCdWZmZXIoXG5yKSl0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKTtpZihlPml8fGU8XG5zKXRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpO2lmKHQrbj5yLmxlbmd0aCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcblwiSW5kZXggb3V0IG9mIHJhbmdlXCIpfWEoWSxcImNoZWNrSW50XCIpO2YucHJvdG90eXBlLndyaXRlVWludExFPWYucHJvdG90eXBlLndyaXRlVUludExFPVxuYShmdW5jdGlvbihlLHQsbixpKXtpZihlPStlLHQ9dD4+PjAsbj1uPj4+MCwhaSl7bGV0IHU9TWF0aC5wb3coMiw4Km4pLTE7WSh0aGlzLGUsXG50LG4sdSwwKX1sZXQgcz0xLG89MDtmb3IodGhpc1t0XT1lJjI1NTsrK288biYmKHMqPTI1Nik7KXRoaXNbdCtvXT1lL3MmMjU1O3JldHVybiB0K1xubn0sXCJ3cml0ZVVJbnRMRVwiKTtmLnByb3RvdHlwZS53cml0ZVVpbnRCRT1mLnByb3RvdHlwZS53cml0ZVVJbnRCRT1hKGZ1bmN0aW9uKGUsdCxuLGkpe1xuaWYoZT0rZSx0PXQ+Pj4wLG49bj4+PjAsIWkpe2xldCB1PU1hdGgucG93KDIsOCpuKS0xO1kodGhpcyxlLHQsbix1LDApfWxldCBzPW4tMSxcbm89MTtmb3IodGhpc1t0K3NdPWUmMjU1Oy0tcz49MCYmKG8qPTI1Nik7KXRoaXNbdCtzXT1lL28mMjU1O3JldHVybiB0K259LFwid3JpdGVVSVxcXG5udEJFXCIpO2YucHJvdG90eXBlLndyaXRlVWludDg9Zi5wcm90b3R5cGUud3JpdGVVSW50OD1hKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gZT1cbitlLHQ9dD4+PjAsbnx8WSh0aGlzLGUsdCwxLDI1NSwwKSx0aGlzW3RdPWUmMjU1LHQrMX0sXCJ3cml0ZVVJbnQ4XCIpO2YucHJvdG90eXBlLndyaXRlVWludDE2TEU9XG5mLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFPWEoZnVuY3Rpb24oZSx0LG4pe3JldHVybiBlPStlLHQ9dD4+PjAsbnx8WSh0aGlzLGUsdCwyLFxuNjU1MzUsMCksdGhpc1t0XT1lJjI1NSx0aGlzW3QrMV09ZT4+PjgsdCsyfSxcIndyaXRlVUludDE2TEVcIik7Zi5wcm90b3R5cGUud3JpdGVVaW50MTZCRT1cbmYucHJvdG90eXBlLndyaXRlVUludDE2QkU9YShmdW5jdGlvbihlLHQsbil7cmV0dXJuIGU9K2UsdD10Pj4+MCxufHxZKHRoaXMsZSx0LDIsXG42NTUzNSwwKSx0aGlzW3RdPWU+Pj44LHRoaXNbdCsxXT1lJjI1NSx0KzJ9LFwid3JpdGVVSW50MTZCRVwiKTtmLnByb3RvdHlwZS53cml0ZVVpbnQzMkxFPVxuZi5wcm90b3R5cGUud3JpdGVVSW50MzJMRT1hKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gZT0rZSx0PXQ+Pj4wLG58fFkodGhpcyxlLHQsNCxcbjQyOTQ5NjcyOTUsMCksdGhpc1t0KzNdPWU+Pj4yNCx0aGlzW3QrMl09ZT4+PjE2LHRoaXNbdCsxXT1lPj4+OCx0aGlzW3RdPWUmMjU1LHQrXG40fSxcIndyaXRlVUludDMyTEVcIik7Zi5wcm90b3R5cGUud3JpdGVVaW50MzJCRT1mLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFPWEoZnVuY3Rpb24oZSx0LG4pe1xucmV0dXJuIGU9K2UsdD10Pj4+MCxufHxZKHRoaXMsZSx0LDQsNDI5NDk2NzI5NSwwKSx0aGlzW3RdPWU+Pj4yNCx0aGlzW3QrMV09ZT4+PjE2LFxudGhpc1t0KzJdPWU+Pj44LHRoaXNbdCszXT1lJjI1NSx0KzR9LFwid3JpdGVVSW50MzJCRVwiKTtmdW5jdGlvbiBObihyLGUsdCxuLGkpe0huKFxuZSxuLGkscix0LDcpO2xldCBzPU51bWJlcihlJkJpZ0ludCg0Mjk0OTY3Mjk1KSk7clt0KytdPXMscz1zPj44LHJbdCsrXT1zLHM9cz4+OCxcbnJbdCsrXT1zLHM9cz4+OCxyW3QrK109cztsZXQgbz1OdW1iZXIoZT4+QmlnSW50KDMyKSZCaWdJbnQoNDI5NDk2NzI5NSkpO3JldHVybiByW3QrK109XG5vLG89bz4+OCxyW3QrK109byxvPW8+Pjgsclt0KytdPW8sbz1vPj44LHJbdCsrXT1vLHR9YShObixcIndydEJpZ1VJbnQ2NExFXCIpO2Z1bmN0aW9uIHFuKHIsZSx0LG4saSl7XG5IbihlLG4saSxyLHQsNyk7bGV0IHM9TnVtYmVyKGUmQmlnSW50KDQyOTQ5NjcyOTUpKTtyW3QrN109cyxzPXM+Pjgsclt0KzZdPXMscz1zPj5cbjgsclt0KzVdPXMscz1zPj44LHJbdCs0XT1zO2xldCBvPU51bWJlcihlPj5CaWdJbnQoMzIpJkJpZ0ludCg0Mjk0OTY3Mjk1KSk7cmV0dXJuIHJbdCtcbjNdPW8sbz1vPj44LHJbdCsyXT1vLG89bz4+OCxyW3QrMV09byxvPW8+Pjgsclt0XT1vLHQrOH1hKHFuLFwid3J0QmlnVUludDY0QkVcIik7Zi5cbnByb3RvdHlwZS53cml0ZUJpZ1VJbnQ2NExFPWdlKGEoZnVuY3Rpb24oZSx0PTApe3JldHVybiBObih0aGlzLGUsdCxCaWdJbnQoMCksQmlnSW50KFxuXCIweGZmZmZmZmZmZmZmZmZmZmZcIikpfSxcIndyaXRlQmlnVUludDY0TEVcIikpO2YucHJvdG90eXBlLndyaXRlQmlnVUludDY0QkU9Z2UoYShmdW5jdGlvbihlLHQ9MCl7XG5yZXR1cm4gcW4odGhpcyxlLHQsQmlnSW50KDApLEJpZ0ludChcIjB4ZmZmZmZmZmZmZmZmZmZmZlwiKSl9LFwid3JpdGVCaWdVSW50NjRCRVwiKSk7XG5mLnByb3RvdHlwZS53cml0ZUludExFPWEoZnVuY3Rpb24oZSx0LG4saSl7aWYoZT0rZSx0PXQ+Pj4wLCFpKXtsZXQgYz1NYXRoLnBvdygyLFxuOCpuLTEpO1kodGhpcyxlLHQsbixjLTEsLWMpfWxldCBzPTAsbz0xLHU9MDtmb3IodGhpc1t0XT1lJjI1NTsrK3M8biYmKG8qPTI1Nik7KWU8XG4wJiZ1PT09MCYmdGhpc1t0K3MtMV0hPT0wJiYodT0xKSx0aGlzW3Qrc109KGUvbz4+MCktdSYyNTU7cmV0dXJuIHQrbn0sXCJ3cml0ZUludExcXFxuRVwiKTtmLnByb3RvdHlwZS53cml0ZUludEJFPWEoZnVuY3Rpb24oZSx0LG4saSl7aWYoZT0rZSx0PXQ+Pj4wLCFpKXtsZXQgYz1NYXRoLnBvdyhcbjIsOCpuLTEpO1kodGhpcyxlLHQsbixjLTEsLWMpfWxldCBzPW4tMSxvPTEsdT0wO2Zvcih0aGlzW3Qrc109ZSYyNTU7LS1zPj0wJiYobyo9XG4yNTYpOyllPDAmJnU9PT0wJiZ0aGlzW3QrcysxXSE9PTAmJih1PTEpLHRoaXNbdCtzXT0oZS9vPj4wKS11JjI1NTtyZXR1cm4gdCtufSxcIndcXFxucml0ZUludEJFXCIpO2YucHJvdG90eXBlLndyaXRlSW50OD1hKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gZT0rZSx0PXQ+Pj4wLG58fFkodGhpcyxcbmUsdCwxLDEyNywtMTI4KSxlPDAmJihlPTI1NStlKzEpLHRoaXNbdF09ZSYyNTUsdCsxfSxcIndyaXRlSW50OFwiKTtmLnByb3RvdHlwZS53cml0ZUludDE2TEU9XG5hKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gZT0rZSx0PXQ+Pj4wLG58fFkodGhpcyxlLHQsMiwzMjc2NywtMzI3NjgpLHRoaXNbdF09ZSYyNTUsXG50aGlzW3QrMV09ZT4+PjgsdCsyfSxcIndyaXRlSW50MTZMRVwiKTtmLnByb3RvdHlwZS53cml0ZUludDE2QkU9YShmdW5jdGlvbihlLHQsbil7XG5yZXR1cm4gZT0rZSx0PXQ+Pj4wLG58fFkodGhpcyxlLHQsMiwzMjc2NywtMzI3NjgpLHRoaXNbdF09ZT4+PjgsdGhpc1t0KzFdPWUmMjU1LFxudCsyfSxcIndyaXRlSW50MTZCRVwiKTtmLnByb3RvdHlwZS53cml0ZUludDMyTEU9YShmdW5jdGlvbihlLHQsbil7cmV0dXJuIGU9K2UsdD10Pj4+XG4wLG58fFkodGhpcyxlLHQsNCwyMTQ3NDgzNjQ3LC0yMTQ3NDgzNjQ4KSx0aGlzW3RdPWUmMjU1LHRoaXNbdCsxXT1lPj4+OCx0aGlzW3QrMl09XG5lPj4+MTYsdGhpc1t0KzNdPWU+Pj4yNCx0KzR9LFwid3JpdGVJbnQzMkxFXCIpO2YucHJvdG90eXBlLndyaXRlSW50MzJCRT1hKGZ1bmN0aW9uKGUsdCxuKXtcbnJldHVybiBlPStlLHQ9dD4+PjAsbnx8WSh0aGlzLGUsdCw0LDIxNDc0ODM2NDcsLTIxNDc0ODM2NDgpLGU8MCYmKGU9NDI5NDk2NzI5NStlK1xuMSksdGhpc1t0XT1lPj4+MjQsdGhpc1t0KzFdPWU+Pj4xNix0aGlzW3QrMl09ZT4+PjgsdGhpc1t0KzNdPWUmMjU1LHQrNH0sXCJ3cml0ZUluXFxcbnQzMkJFXCIpO2YucHJvdG90eXBlLndyaXRlQmlnSW50NjRMRT1nZShhKGZ1bmN0aW9uKGUsdD0wKXtyZXR1cm4gTm4odGhpcyxlLHQsLUJpZ0ludChcblwiMHg4MDAwMDAwMDAwMDAwMDAwXCIpLEJpZ0ludChcIjB4N2ZmZmZmZmZmZmZmZmZmZlwiKSl9LFwid3JpdGVCaWdJbnQ2NExFXCIpKTtmLnByb3RvdHlwZS5cbndyaXRlQmlnSW50NjRCRT1nZShhKGZ1bmN0aW9uKGUsdD0wKXtyZXR1cm4gcW4odGhpcyxlLHQsLUJpZ0ludChcIjB4ODAwMDAwMDAwMDAwMFxcXG4wMDBcIiksQmlnSW50KFwiMHg3ZmZmZmZmZmZmZmZmZmZmXCIpKX0sXCJ3cml0ZUJpZ0ludDY0QkVcIikpO2Z1bmN0aW9uIFFuKHIsZSx0LG4saSxzKXtcbmlmKHQrbj5yLmxlbmd0aCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkluZGV4IG91dCBvZiByYW5nZVwiKTtpZih0PDApdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG5cIkluZGV4IG91dCBvZiByYW5nZVwiKX1hKFFuLFwiY2hlY2tJRUVFNzU0XCIpO2Z1bmN0aW9uIFduKHIsZSx0LG4saSl7cmV0dXJuIGU9K2UsdD1cbnQ+Pj4wLGl8fFFuKHIsZSx0LDQsMzQwMjgyMzQ2NjM4NTI4ODZlMjIsLTM0MDI4MjM0NjYzODUyODg2ZTIyKSxQZS53cml0ZShyLGUsdCxuLFxuMjMsNCksdCs0fWEoV24sXCJ3cml0ZUZsb2F0XCIpO2YucHJvdG90eXBlLndyaXRlRmxvYXRMRT1hKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gV24oXG50aGlzLGUsdCwhMCxuKX0sXCJ3cml0ZUZsb2F0TEVcIik7Zi5wcm90b3R5cGUud3JpdGVGbG9hdEJFPWEoZnVuY3Rpb24oZSx0LG4pe3JldHVybiBXbihcbnRoaXMsZSx0LCExLG4pfSxcIndyaXRlRmxvYXRCRVwiKTtmdW5jdGlvbiBqbihyLGUsdCxuLGkpe3JldHVybiBlPStlLHQ9dD4+PjAsaXx8UW4oXG5yLGUsdCw4LDE3OTc2OTMxMzQ4NjIzMTU3ZTI5MiwtMTc5NzY5MzEzNDg2MjMxNTdlMjkyKSxQZS53cml0ZShyLGUsdCxuLDUyLDgpLHQrOH1cbmEoam4sXCJ3cml0ZURvdWJsZVwiKTtmLnByb3RvdHlwZS53cml0ZURvdWJsZUxFPWEoZnVuY3Rpb24oZSx0LG4pe3JldHVybiBqbih0aGlzLGUsXG50LCEwLG4pfSxcIndyaXRlRG91YmxlTEVcIik7Zi5wcm90b3R5cGUud3JpdGVEb3VibGVCRT1hKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gam4oXG50aGlzLGUsdCwhMSxuKX0sXCJ3cml0ZURvdWJsZUJFXCIpO2YucHJvdG90eXBlLmNvcHk9YShmdW5jdGlvbihlLHQsbixpKXtpZighZi5pc0J1ZmZlcihcbmUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJhcmd1bWVudCBzaG91bGQgYmUgYSBCdWZmZXJcIik7aWYobnx8KG49MCksIWkmJmkhPT0wJiYoaT1cbnRoaXMubGVuZ3RoKSx0Pj1lLmxlbmd0aCYmKHQ9ZS5sZW5ndGgpLHR8fCh0PTApLGk+MCYmaTxuJiYoaT1uKSxpPT09bnx8ZS5sZW5ndGg9PT1cbjB8fHRoaXMubGVuZ3RoPT09MClyZXR1cm4gMDtpZih0PDApdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJ0YXJnZXRTdGFydCBvdXQgb2YgYm91blxcXG5kc1wiKTtpZihuPDB8fG4+PXRoaXMubGVuZ3RoKXRocm93IG5ldyBSYW5nZUVycm9yKFwiSW5kZXggb3V0IG9mIHJhbmdlXCIpO2lmKGk8MCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcblwic291cmNlRW5kIG91dCBvZiBib3VuZHNcIik7aT50aGlzLmxlbmd0aCYmKGk9dGhpcy5sZW5ndGgpLGUubGVuZ3RoLXQ8aS1uJiYoaT1lLmxlbmd0aC1cbnQrbik7bGV0IHM9aS1uO3JldHVybiB0aGlzPT09ZSYmdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW49PVwiZnVuY3Rpb1xcXG5uXCI/dGhpcy5jb3B5V2l0aGluKHQsbixpKTpVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChlLHRoaXMuc3ViYXJyYXkobixpKSx0KSxcbnN9LFwiY29weVwiKTtmLnByb3RvdHlwZS5maWxsPWEoZnVuY3Rpb24oZSx0LG4saSl7aWYodHlwZW9mIGU9PVwic3RyaW5nXCIpe2lmKHR5cGVvZiB0PT1cblwic3RyaW5nXCI/KGk9dCx0PTAsbj10aGlzLmxlbmd0aCk6dHlwZW9mIG49PVwic3RyaW5nXCImJihpPW4sbj10aGlzLmxlbmd0aCksaSE9PXZvaWQgMCYmXG50eXBlb2YgaSE9XCJzdHJpbmdcIil0aHJvdyBuZXcgVHlwZUVycm9yKFwiZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZ1wiKTtpZih0eXBlb2YgaT09XG5cInN0cmluZ1wiJiYhZi5pc0VuY29kaW5nKGkpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmtub3duIGVuY29kaW5nOiBcIitpKTtpZihlLmxlbmd0aD09PVxuMSl7bGV0IG89ZS5jaGFyQ29kZUF0KDApOyhpPT09XCJ1dGY4XCImJm88MTI4fHxpPT09XCJsYXRpbjFcIikmJihlPW8pfX1lbHNlIHR5cGVvZiBlPT1cblwibnVtYmVyXCI/ZT1lJjI1NTp0eXBlb2YgZT09XCJib29sZWFuXCImJihlPU51bWJlcihlKSk7aWYodDwwfHx0aGlzLmxlbmd0aDx0fHx0aGlzLlxubGVuZ3RoPG4pdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJPdXQgb2YgcmFuZ2UgaW5kZXhcIik7aWYobjw9dClyZXR1cm4gdGhpczt0PXQ+Pj4wLFxubj1uPT09dm9pZCAwP3RoaXMubGVuZ3RoOm4+Pj4wLGV8fChlPTApO2xldCBzO2lmKHR5cGVvZiBlPT1cIm51bWJlclwiKWZvcihzPXQ7czxuOysrcylcbnRoaXNbc109ZTtlbHNle2xldCBvPWYuaXNCdWZmZXIoZSk/ZTpmLmZyb20oZSxpKSx1PW8ubGVuZ3RoO2lmKHU9PT0wKXRocm93IG5ldyBUeXBlRXJyb3IoXG4nVGhlIHZhbHVlIFwiJytlKydcIiBpcyBpbnZhbGlkIGZvciBhcmd1bWVudCBcInZhbHVlXCInKTtmb3Iocz0wO3M8bi10Oysrcyl0aGlzW3MrdF09XG5vW3MldV19cmV0dXJuIHRoaXN9LFwiZmlsbFwiKTt2YXIgSWU9e307ZnVuY3Rpb24gVXQocixlLHQpe3ZhciBuO0llW3JdPShuPWNsYXNzIGV4dGVuZHMgdHtjb25zdHJ1Y3Rvcigpe1xuc3VwZXIoKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcIm1lc3NhZ2VcIix7dmFsdWU6ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyksd3JpdGFibGU6ITAsXG5jb25maWd1cmFibGU6ITB9KSx0aGlzLm5hbWU9YCR7dGhpcy5uYW1lfSBbJHtyfV1gLHRoaXMuc3RhY2ssZGVsZXRlIHRoaXMubmFtZX1nZXQgY29kZSgpe1xucmV0dXJuIHJ9c2V0IGNvZGUocyl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjb2RlXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLFxudmFsdWU6cyx3cml0YWJsZTohMH0pfXRvU3RyaW5nKCl7cmV0dXJuYCR7dGhpcy5uYW1lfSBbJHtyfV06ICR7dGhpcy5tZXNzYWdlfWB9fSxcbmEobixcIk5vZGVFcnJvclwiKSxuKX1hKFV0LFwiRVwiKTtVdChcIkVSUl9CVUZGRVJfT1VUX09GX0JPVU5EU1wiLGZ1bmN0aW9uKHIpe3JldHVybiByP1xuYCR7cn0gaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzYDpcIkF0dGVtcHQgdG8gYWNjZXNzIG1lbW9yeSBvdXRzaWRlIGJ1ZmZlciBib3VuXFxcbmRzXCJ9LFJhbmdlRXJyb3IpO1V0KFwiRVJSX0lOVkFMSURfQVJHX1RZUEVcIixmdW5jdGlvbihyLGUpe3JldHVybmBUaGUgXCIke3J9XCIgYXJndW1cXFxuZW50IG11c3QgYmUgb2YgdHlwZSBudW1iZXIuIFJlY2VpdmVkIHR5cGUgJHt0eXBlb2YgZX1gfSxUeXBlRXJyb3IpO1V0KFwiRVJSX09VVF9PXFxcbkZfUkFOR0VcIixmdW5jdGlvbihyLGUsdCl7bGV0IG49YFRoZSB2YWx1ZSBvZiBcIiR7cn1cIiBpcyBvdXQgb2YgcmFuZ2UuYCxpPXQ7cmV0dXJuIE51bWJlci5cbmlzSW50ZWdlcih0KSYmTWF0aC5hYnModCk+MioqMzI/aT1GbihTdHJpbmcodCkpOnR5cGVvZiB0PT1cImJpZ2ludFwiJiYoaT1TdHJpbmcodCksXG4odD5CaWdJbnQoMikqKkJpZ0ludCgzMil8fHQ8LShCaWdJbnQoMikqKkJpZ0ludCgzMikpKSYmKGk9Rm4oaSkpLGkrPVwiblwiKSxuKz1gIEl0XFxcbiBtdXN0IGJlICR7ZX0uIFJlY2VpdmVkICR7aX1gLG59LFJhbmdlRXJyb3IpO2Z1bmN0aW9uIEZuKHIpe2xldCBlPVwiXCIsdD1yLmxlbmd0aCxcbm49clswXT09PVwiLVwiPzE6MDtmb3IoO3Q+PW4rNDt0LT0zKWU9YF8ke3Iuc2xpY2UodC0zLHQpfSR7ZX1gO3JldHVybmAke3Iuc2xpY2UoMCxcbnQpfSR7ZX1gfWEoRm4sXCJhZGROdW1lcmljYWxTZXBhcmF0b3JcIik7ZnVuY3Rpb24gRm8ocixlLHQpe0JlKGUsXCJvZmZzZXRcIiksKHJbZV09PT1cbnZvaWQgMHx8cltlK3RdPT09dm9pZCAwKSYmV2UoZSxyLmxlbmd0aC0odCsxKSl9YShGbyxcImNoZWNrQm91bmRzXCIpO2Z1bmN0aW9uIEhuKHIsZSx0LG4saSxzKXtcbmlmKHI+dHx8cjxlKXtsZXQgbz10eXBlb2YgZT09XCJiaWdpbnRcIj9cIm5cIjpcIlwiLHU7dGhyb3cgcz4zP2U9PT0wfHxlPT09QmlnSW50KDApP3U9XG5gPj0gMCR7b30gYW5kIDwgMiR7b30gKiogJHsocysxKSo4fSR7b31gOnU9YD49IC0oMiR7b30gKiogJHsocysxKSo4LTF9JHtvfSkgYW5kIFxcXG48IDIgKiogJHsocysxKSo4LTF9JHtvfWA6dT1gPj0gJHtlfSR7b30gYW5kIDw9ICR7dH0ke299YCxuZXcgSWUuRVJSX09VVF9PRl9SQU5HRShcblwidmFsdWVcIix1LHIpfUZvKG4saSxzKX1hKEhuLFwiY2hlY2tJbnRCSVwiKTtmdW5jdGlvbiBCZShyLGUpe2lmKHR5cGVvZiByIT1cIm51bWJlclwiKVxudGhyb3cgbmV3IEllLkVSUl9JTlZBTElEX0FSR19UWVBFKGUsXCJudW1iZXJcIixyKX1hKEJlLFwidmFsaWRhdGVOdW1iZXJcIik7ZnVuY3Rpb24gV2UocixlLHQpe1xudGhyb3cgTWF0aC5mbG9vcihyKSE9PXI/KEJlKHIsdCksbmV3IEllLkVSUl9PVVRfT0ZfUkFOR0UodHx8XCJvZmZzZXRcIixcImFuIGludGVnZXJcIixcbnIpKTplPDA/bmV3IEllLkVSUl9CVUZGRVJfT1VUX09GX0JPVU5EUzpuZXcgSWUuRVJSX09VVF9PRl9SQU5HRSh0fHxcIm9mZnNldFwiLGA+PSAke3Q/XG4xOjB9IGFuZCA8PSAke2V9YCxyKX1hKFdlLFwiYm91bmRzRXJyb3JcIik7dmFyIE1vPS9bXisvMC05QS1aYS16LV9dL2c7ZnVuY3Rpb24gRG8ocil7XG5pZihyPXIuc3BsaXQoXCI9XCIpWzBdLHI9ci50cmltKCkucmVwbGFjZShNbyxcIlwiKSxyLmxlbmd0aDwyKXJldHVyblwiXCI7Zm9yKDtyLmxlbmd0aCVcbjQhPT0wOylyPXIrXCI9XCI7cmV0dXJuIHJ9YShEbyxcImJhc2U2NGNsZWFuXCIpO2Z1bmN0aW9uIE10KHIsZSl7ZT1lfHwxLzA7bGV0IHQsbj1yLlxubGVuZ3RoLGk9bnVsbCxzPVtdO2ZvcihsZXQgbz0wO288bjsrK28pe2lmKHQ9ci5jaGFyQ29kZUF0KG8pLHQ+NTUyOTUmJnQ8NTczNDQpe2lmKCFpKXtcbmlmKHQ+NTYzMTkpeyhlLT0zKT4tMSYmcy5wdXNoKDIzOSwxOTEsMTg5KTtjb250aW51ZX1lbHNlIGlmKG8rMT09PW4peyhlLT0zKT4tMSYmXG5zLnB1c2goMjM5LDE5MSwxODkpO2NvbnRpbnVlfWk9dDtjb250aW51ZX1pZih0PDU2MzIwKXsoZS09Myk+LTEmJnMucHVzaCgyMzksMTkxLFxuMTg5KSxpPXQ7Y29udGludWV9dD0oaS01NTI5Njw8MTB8dC01NjMyMCkrNjU1MzZ9ZWxzZSBpJiYoZS09Myk+LTEmJnMucHVzaCgyMzksMTkxLFxuMTg5KTtpZihpPW51bGwsdDwxMjgpe2lmKChlLT0xKTwwKWJyZWFrO3MucHVzaCh0KX1lbHNlIGlmKHQ8MjA0OCl7aWYoKGUtPTIpPDApYnJlYWs7XG5zLnB1c2godD4+NnwxOTIsdCY2M3wxMjgpfWVsc2UgaWYodDw2NTUzNil7aWYoKGUtPTMpPDApYnJlYWs7cy5wdXNoKHQ+PjEyfDIyNCx0Pj5cbjYmNjN8MTI4LHQmNjN8MTI4KX1lbHNlIGlmKHQ8MTExNDExMil7aWYoKGUtPTQpPDApYnJlYWs7cy5wdXNoKHQ+PjE4fDI0MCx0Pj4xMiY2M3xcbjEyOCx0Pj42JjYzfDEyOCx0JjYzfDEyOCl9ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvZGUgcG9pbnRcIil9cmV0dXJuIHN9YShcbk10LFwidXRmOFRvQnl0ZXNcIik7ZnVuY3Rpb24ga28ocil7bGV0IGU9W107Zm9yKGxldCB0PTA7dDxyLmxlbmd0aDsrK3QpZS5wdXNoKHIuY2hhckNvZGVBdChcbnQpJjI1NSk7cmV0dXJuIGV9YShrbyxcImFzY2lpVG9CeXRlc1wiKTtmdW5jdGlvbiBVbyhyLGUpe2xldCB0LG4saSxzPVtdO2ZvcihsZXQgbz0wO288XG5yLmxlbmd0aCYmISgoZS09Mik8MCk7KytvKXQ9ci5jaGFyQ29kZUF0KG8pLG49dD4+OCxpPXQlMjU2LHMucHVzaChpKSxzLnB1c2gobik7cmV0dXJuIHN9XG5hKFVvLFwidXRmMTZsZVRvQnl0ZXNcIik7ZnVuY3Rpb24gR24ocil7cmV0dXJuIEx0LnRvQnl0ZUFycmF5KERvKHIpKX1hKEduLFwiYmFzZTY0VFxcXG5vQnl0ZXNcIik7ZnVuY3Rpb24gc3QocixlLHQsbil7bGV0IGk7Zm9yKGk9MDtpPG4mJiEoaSt0Pj1lLmxlbmd0aHx8aT49ci5sZW5ndGgpOysraSlcbmVbaSt0XT1yW2ldO3JldHVybiBpfWEoc3QsXCJibGl0QnVmZmVyXCIpO2Z1bmN0aW9uIHVlKHIsZSl7cmV0dXJuIHIgaW5zdGFuY2VvZiBlfHxcbnIhPW51bGwmJnIuY29uc3RydWN0b3IhPW51bGwmJnIuY29uc3RydWN0b3IubmFtZSE9bnVsbCYmci5jb25zdHJ1Y3Rvci5uYW1lPT09ZS5uYW1lfVxuYSh1ZSxcImlzSW5zdGFuY2VcIik7ZnVuY3Rpb24gT3Qocil7cmV0dXJuIHIhPT1yfWEoT3QsXCJudW1iZXJJc05hTlwiKTt2YXIgT289ZnVuY3Rpb24oKXtcbmxldCByPVwiMDEyMzQ1Njc4OWFiY2RlZlwiLGU9bmV3IEFycmF5KDI1Nik7Zm9yKGxldCB0PTA7dDwxNjsrK3Qpe2xldCBuPXQqMTY7Zm9yKGxldCBpPTA7aTxcbjE2OysraSllW24raV09clt0XStyW2ldfXJldHVybiBlfSgpO2Z1bmN0aW9uIGdlKHIpe3JldHVybiB0eXBlb2YgQmlnSW50PlwidVwiP05vOnJ9XG5hKGdlLFwiZGVmaW5lQmlnSW50TWV0aG9kXCIpO2Z1bmN0aW9uIE5vKCl7dGhyb3cgbmV3IEVycm9yKFwiQmlnSW50IG5vdCBzdXBwb3J0ZWRcIil9XG5hKE5vLFwiQnVmZmVyQmlnSW50Tm90RGVmaW5lZFwiKX0pO3ZhciBTLHgsdixnLHksbSxwPXooKCk9PntcInVzZSBzdHJpY3RcIjtTPWdsb2JhbFRoaXMseD1nbG9iYWxUaGlzLnNldEltbWVkaWF0ZT8/KHI9PnNldFRpbWVvdXQoXG5yLDApKSx2PWdsb2JhbFRoaXMuY2xlYXJJbW1lZGlhdGU/PyhyPT5jbGVhclRpbWVvdXQocikpLGc9Z2xvYmFsVGhpcy5jcnlwdG8/P3t9O1xuZy5zdWJ0bGU/PyhnLnN1YnRsZT17fSk7eT10eXBlb2YgZ2xvYmFsVGhpcy5CdWZmZXI9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGdsb2JhbFRoaXMuXG5CdWZmZXIuYWxsb2NVbnNhZmU9PVwiZnVuY3Rpb25cIj9nbG9iYWxUaGlzLkJ1ZmZlcjokbigpLkJ1ZmZlcixtPWdsb2JhbFRoaXMucHJvY2Vzcz8/XG57fTttLmVudj8/KG0uZW52PXt9KTt0cnl7bS5uZXh0VGljaygoKT0+e30pfWNhdGNoe2xldCBlPVByb21pc2UucmVzb2x2ZSgpO20ubmV4dFRpY2s9XG5lLnRoZW4uYmluZChlKX19KTt2YXIgd2U9SSgoWGMsTnQpPT57XCJ1c2Ugc3RyaWN0XCI7cCgpO3ZhciBSZT10eXBlb2YgUmVmbGVjdD09XCJvYmplY3RcIj9SZWZsZWN0Om51bGwsXG5Wbj1SZSYmdHlwZW9mIFJlLmFwcGx5PT1cImZ1bmN0aW9uXCI/UmUuYXBwbHk6YShmdW5jdGlvbihlLHQsbil7cmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5cbmFwcGx5LmNhbGwoZSx0LG4pfSxcIlJlZmxlY3RBcHBseVwiKSxvdDtSZSYmdHlwZW9mIFJlLm93bktleXM9PVwiZnVuY3Rpb25cIj9vdD1SZS5vd25LZXlzOlxuT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scz9vdD1hKGZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhcbmUpLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpKX0sXCJSZWZsZWN0T3duS2V5c1wiKTpvdD1hKGZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuXG5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUpfSxcIlJlZmxlY3RPd25LZXlzXCIpO2Z1bmN0aW9uIHFvKHIpe2NvbnNvbGUmJmNvbnNvbGUud2FybiYmXG5jb25zb2xlLndhcm4ocil9YShxbyxcIlByb2Nlc3NFbWl0V2FybmluZ1wiKTt2YXIgem49TnVtYmVyLmlzTmFOfHxhKGZ1bmN0aW9uKGUpe3JldHVybiBlIT09XG5lfSxcIk51bWJlcklzTmFOXCIpO2Z1bmN0aW9uIEwoKXtMLmluaXQuY2FsbCh0aGlzKX1hKEwsXCJFdmVudEVtaXR0ZXJcIik7TnQuZXhwb3J0cz1cbkw7TnQuZXhwb3J0cy5vbmNlPUhvO0wuRXZlbnRFbWl0dGVyPUw7TC5wcm90b3R5cGUuX2V2ZW50cz12b2lkIDA7TC5wcm90b3R5cGUuX2V2ZW50c0NvdW50PVxuMDtMLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzPXZvaWQgMDt2YXIgS249MTA7ZnVuY3Rpb24gYXQocil7aWYodHlwZW9mIHIhPVwiZnVuY3RpXFxcbm9uXCIpdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpXFxcbnZlZCB0eXBlICcrdHlwZW9mIHIpfWEoYXQsXCJjaGVja0xpc3RlbmVyXCIpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShMLFwiZGVmYXVsdE1heExpXFxcbnN0ZW5lcnNcIix7ZW51bWVyYWJsZTohMCxnZXQ6YShmdW5jdGlvbigpe3JldHVybiBLbn0sXCJnZXRcIiksc2V0OmEoZnVuY3Rpb24ocil7aWYodHlwZW9mIHIhPVxuXCJudW1iZXJcInx8cjwwfHx6bihyKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzXFxcbiBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnK3IrXCIuXCIpO0tuPXJ9LFwic2V0XCIpfSk7XG5MLmluaXQ9ZnVuY3Rpb24oKXsodGhpcy5fZXZlbnRzPT09dm9pZCAwfHx0aGlzLl9ldmVudHM9PT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuXG5fZXZlbnRzKSYmKHRoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMuX2V2ZW50c0NvdW50PTApLHRoaXMuX21heExpc3RlbmVycz1cbnRoaXMuX21heExpc3RlbmVyc3x8dm9pZCAwfTtMLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnM9YShmdW5jdGlvbihlKXtpZih0eXBlb2YgZSE9XG5cIm51bWJlclwifHxlPDB8fHpuKGUpKXRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBcXFxubXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcrZStcIi5cIik7cmV0dXJuIHRoaXMuX21heExpc3RlbmVycz1lLHRoaXN9LFxuXCJzZXRNYXhMaXN0ZW5lcnNcIik7ZnVuY3Rpb24gWW4ocil7cmV0dXJuIHIuX21heExpc3RlbmVycz09PXZvaWQgMD9MLmRlZmF1bHRNYXhMaXN0ZW5lcnM6XG5yLl9tYXhMaXN0ZW5lcnN9YShZbixcIl9nZXRNYXhMaXN0ZW5lcnNcIik7TC5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzPWEoZnVuY3Rpb24oKXtcbnJldHVybiBZbih0aGlzKX0sXCJnZXRNYXhMaXN0ZW5lcnNcIik7TC5wcm90b3R5cGUuZW1pdD1hKGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXSxcbm49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXQucHVzaChhcmd1bWVudHNbbl0pO3ZhciBpPWU9PT1cImVycm9yXCIscz10aGlzLl9ldmVudHM7XG5pZihzIT09dm9pZCAwKWk9aSYmcy5lcnJvcj09PXZvaWQgMDtlbHNlIGlmKCFpKXJldHVybiExO2lmKGkpe3ZhciBvO2lmKHQubGVuZ3RoPlxuMCYmKG89dFswXSksbyBpbnN0YW5jZW9mIEVycm9yKXRocm93IG87dmFyIHU9bmV3IEVycm9yKFwiVW5oYW5kbGVkIGVycm9yLlwiKyhvP1wiIChcIitcbm8ubWVzc2FnZStcIilcIjpcIlwiKSk7dGhyb3cgdS5jb250ZXh0PW8sdX12YXIgYz1zW2VdO2lmKGM9PT12b2lkIDApcmV0dXJuITE7aWYodHlwZW9mIGM9PVxuXCJmdW5jdGlvblwiKVZuKGMsdGhpcyx0KTtlbHNlIGZvcih2YXIgaD1jLmxlbmd0aCxsPXRpKGMsaCksbj0wO248aDsrK24pVm4obFtuXSx0aGlzLFxudCk7cmV0dXJuITB9LFwiZW1pdFwiKTtmdW5jdGlvbiBabihyLGUsdCxuKXt2YXIgaSxzLG87aWYoYXQodCkscz1yLl9ldmVudHMscz09PXZvaWQgMD9cbihzPXIuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLHIuX2V2ZW50c0NvdW50PTApOihzLm5ld0xpc3RlbmVyIT09dm9pZCAwJiYoci5lbWl0KFxuXCJuZXdMaXN0ZW5lclwiLGUsdC5saXN0ZW5lcj90Lmxpc3RlbmVyOnQpLHM9ci5fZXZlbnRzKSxvPXNbZV0pLG89PT12b2lkIDApbz1zW2VdPVxudCwrK3IuX2V2ZW50c0NvdW50O2Vsc2UgaWYodHlwZW9mIG89PVwiZnVuY3Rpb25cIj9vPXNbZV09bj9bdCxvXTpbbyx0XTpuP28udW5zaGlmdChcbnQpOm8ucHVzaCh0KSxpPVluKHIpLGk+MCYmby5sZW5ndGg+aSYmIW8ud2FybmVkKXtvLndhcm5lZD0hMDt2YXIgdT1uZXcgRXJyb3IoXCJQb1xcXG5zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiBcIitvLmxlbmd0aCtcIiBcIitTdHJpbmcoZSkrXCIgbGlzdGVuZXJzIGFcXFxuZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXRcIik7dS5uYW1lPVwiTWF4TGlzdGVuZXJzRXhjZVxcXG5lZGVkV2FybmluZ1wiLHUuZW1pdHRlcj1yLHUudHlwZT1lLHUuY291bnQ9by5sZW5ndGgscW8odSl9cmV0dXJuIHJ9YShabixcIl9hZGRMaXN0XFxcbmVuZXJcIik7TC5wcm90b3R5cGUuYWRkTGlzdGVuZXI9YShmdW5jdGlvbihlLHQpe3JldHVybiBabih0aGlzLGUsdCwhMSl9LFwiYWRkTGlzdGVcXFxubmVyXCIpO0wucHJvdG90eXBlLm9uPUwucHJvdG90eXBlLmFkZExpc3RlbmVyO0wucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lcj1hKGZ1bmN0aW9uKGUsdCl7XG5yZXR1cm4gWm4odGhpcyxlLHQsITApfSxcInByZXBlbmRMaXN0ZW5lclwiKTtmdW5jdGlvbiBRbygpe2lmKCF0aGlzLmZpcmVkKXJldHVybiB0aGlzLlxudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSx0aGlzLndyYXBGbiksdGhpcy5maXJlZD0hMCxhcmd1bWVudHMubGVuZ3RoPT09MD9cbnRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk6dGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCxhcmd1bWVudHMpfWEoUW8sXG5cIm9uY2VXcmFwcGVyXCIpO2Z1bmN0aW9uIEpuKHIsZSx0KXt2YXIgbj17ZmlyZWQ6ITEsd3JhcEZuOnZvaWQgMCx0YXJnZXQ6cix0eXBlOmUsXG5saXN0ZW5lcjp0fSxpPVFvLmJpbmQobik7cmV0dXJuIGkubGlzdGVuZXI9dCxuLndyYXBGbj1pLGl9YShKbixcIl9vbmNlV3JhcFwiKTtMLnByb3RvdHlwZS5cbm9uY2U9YShmdW5jdGlvbihlLHQpe3JldHVybiBhdCh0KSx0aGlzLm9uKGUsSm4odGhpcyxlLHQpKSx0aGlzfSxcIm9uY2VcIik7TC5wcm90b3R5cGUuXG5wcmVwZW5kT25jZUxpc3RlbmVyPWEoZnVuY3Rpb24oZSx0KXtyZXR1cm4gYXQodCksdGhpcy5wcmVwZW5kTGlzdGVuZXIoZSxKbih0aGlzLFxuZSx0KSksdGhpc30sXCJwcmVwZW5kT25jZUxpc3RlbmVyXCIpO0wucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyPWEoZnVuY3Rpb24oZSx0KXt2YXIgbixcbmkscyxvLHU7aWYoYXQodCksaT10aGlzLl9ldmVudHMsaT09PXZvaWQgMClyZXR1cm4gdGhpcztpZihuPWlbZV0sbj09PXZvaWQgMClyZXR1cm4gdGhpcztcbmlmKG49PT10fHxuLmxpc3RlbmVyPT09dCktLXRoaXMuX2V2ZW50c0NvdW50PT09MD90aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKTpcbihkZWxldGUgaVtlXSxpLnJlbW92ZUxpc3RlbmVyJiZ0aGlzLmVtaXQoXCJyZW1vdmVMaXN0ZW5lclwiLGUsbi5saXN0ZW5lcnx8dCkpO2Vsc2UgaWYodHlwZW9mIG4hPVxuXCJmdW5jdGlvblwiKXtmb3Iocz0tMSxvPW4ubGVuZ3RoLTE7bz49MDtvLS0paWYobltvXT09PXR8fG5bb10ubGlzdGVuZXI9PT10KXt1PW5bb10uXG5saXN0ZW5lcixzPW87YnJlYWt9aWYoczwwKXJldHVybiB0aGlzO3M9PT0wP24uc2hpZnQoKTpXbyhuLHMpLG4ubGVuZ3RoPT09MSYmKGlbZV09XG5uWzBdKSxpLnJlbW92ZUxpc3RlbmVyIT09dm9pZCAwJiZ0aGlzLmVtaXQoXCJyZW1vdmVMaXN0ZW5lclwiLGUsdXx8dCl9cmV0dXJuIHRoaXN9LFxuXCJyZW1vdmVMaXN0ZW5lclwiKTtMLnByb3RvdHlwZS5vZmY9TC5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7TC5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzPVxuYShmdW5jdGlvbihlKXt2YXIgdCxuLGk7aWYobj10aGlzLl9ldmVudHMsbj09PXZvaWQgMClyZXR1cm4gdGhpcztpZihuLnJlbW92ZUxpc3RlbmVyPT09XG52b2lkIDApcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg9PT0wPyh0aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLl9ldmVudHNDb3VudD1cbjApOm5bZV0hPT12b2lkIDAmJigtLXRoaXMuX2V2ZW50c0NvdW50PT09MD90aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKTpkZWxldGUgbltlXSksXG50aGlzO2lmKGFyZ3VtZW50cy5sZW5ndGg9PT0wKXt2YXIgcz1PYmplY3Qua2V5cyhuKSxvO2ZvcihpPTA7aTxzLmxlbmd0aDsrK2kpbz1zW2ldLFxubyE9PVwicmVtb3ZlTGlzdGVuZXJcIiYmdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMobyk7cmV0dXJuIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKFxuXCJyZW1vdmVMaXN0ZW5lclwiKSx0aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLl9ldmVudHNDb3VudD0wLHRoaXN9aWYodD1cbm5bZV0sdHlwZW9mIHQ9PVwiZnVuY3Rpb25cIil0aGlzLnJlbW92ZUxpc3RlbmVyKGUsdCk7ZWxzZSBpZih0IT09dm9pZCAwKWZvcihpPXQubGVuZ3RoLVxuMTtpPj0wO2ktLSl0aGlzLnJlbW92ZUxpc3RlbmVyKGUsdFtpXSk7cmV0dXJuIHRoaXN9LFwicmVtb3ZlQWxsTGlzdGVuZXJzXCIpO2Z1bmN0aW9uIFhuKHIsZSx0KXtcbnZhciBuPXIuX2V2ZW50cztpZihuPT09dm9pZCAwKXJldHVybltdO3ZhciBpPW5bZV07cmV0dXJuIGk9PT12b2lkIDA/W106dHlwZW9mIGk9PVxuXCJmdW5jdGlvblwiP3Q/W2kubGlzdGVuZXJ8fGldOltpXTp0P2pvKGkpOnRpKGksaS5sZW5ndGgpfWEoWG4sXCJfbGlzdGVuZXJzXCIpO0wucHJvdG90eXBlLlxubGlzdGVuZXJzPWEoZnVuY3Rpb24oZSl7cmV0dXJuIFhuKHRoaXMsZSwhMCl9LFwibGlzdGVuZXJzXCIpO0wucHJvdG90eXBlLnJhd0xpc3RlbmVycz1cbmEoZnVuY3Rpb24oZSl7cmV0dXJuIFhuKHRoaXMsZSwhMSl9LFwicmF3TGlzdGVuZXJzXCIpO0wubGlzdGVuZXJDb3VudD1mdW5jdGlvbihyLGUpe1xucmV0dXJuIHR5cGVvZiByLmxpc3RlbmVyQ291bnQ9PVwiZnVuY3Rpb25cIj9yLmxpc3RlbmVyQ291bnQoZSk6ZWkuY2FsbChyLGUpfTtMLnByb3RvdHlwZS5cbmxpc3RlbmVyQ291bnQ9ZWk7ZnVuY3Rpb24gZWkocil7dmFyIGU9dGhpcy5fZXZlbnRzO2lmKGUhPT12b2lkIDApe3ZhciB0PWVbcl07aWYodHlwZW9mIHQ9PVxuXCJmdW5jdGlvblwiKXJldHVybiAxO2lmKHQhPT12b2lkIDApcmV0dXJuIHQubGVuZ3RofXJldHVybiAwfWEoZWksXCJsaXN0ZW5lckNvdW50XCIpO1xuTC5wcm90b3R5cGUuZXZlbnROYW1lcz1hKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50PjA/b3QodGhpcy5fZXZlbnRzKTpcbltdfSxcImV2ZW50TmFtZXNcIik7ZnVuY3Rpb24gdGkocixlKXtmb3IodmFyIHQ9bmV3IEFycmF5KGUpLG49MDtuPGU7KytuKXRbbl09cltuXTtcbnJldHVybiB0fWEodGksXCJhcnJheUNsb25lXCIpO2Z1bmN0aW9uIFdvKHIsZSl7Zm9yKDtlKzE8ci5sZW5ndGg7ZSsrKXJbZV09cltlKzFdO3IuXG5wb3AoKX1hKFdvLFwic3BsaWNlT25lXCIpO2Z1bmN0aW9uIGpvKHIpe2Zvcih2YXIgZT1uZXcgQXJyYXkoci5sZW5ndGgpLHQ9MDt0PGUubGVuZ3RoOysrdClcbmVbdF09clt0XS5saXN0ZW5lcnx8clt0XTtyZXR1cm4gZX1hKGpvLFwidW53cmFwTGlzdGVuZXJzXCIpO2Z1bmN0aW9uIEhvKHIsZSl7cmV0dXJuIG5ldyBQcm9taXNlKFxuZnVuY3Rpb24odCxuKXtmdW5jdGlvbiBpKG8pe3IucmVtb3ZlTGlzdGVuZXIoZSxzKSxuKG8pfWEoaSxcImVycm9yTGlzdGVuZXJcIik7ZnVuY3Rpb24gcygpe1xudHlwZW9mIHIucmVtb3ZlTGlzdGVuZXI9PVwiZnVuY3Rpb25cIiYmci5yZW1vdmVMaXN0ZW5lcihcImVycm9yXCIsaSksdChbXS5zbGljZS5jYWxsKFxuYXJndW1lbnRzKSl9YShzLFwicmVzb2x2ZXJcIikscmkocixlLHMse29uY2U6ITB9KSxlIT09XCJlcnJvclwiJiZHbyhyLGkse29uY2U6ITB9KX0pfVxuYShIbyxcIm9uY2VcIik7ZnVuY3Rpb24gR28ocixlLHQpe3R5cGVvZiByLm9uPT1cImZ1bmN0aW9uXCImJnJpKHIsXCJlcnJvclwiLGUsdCl9YShHbyxcblwiYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXJcIik7ZnVuY3Rpb24gcmkocixlLHQsbil7aWYodHlwZW9mIHIub249PVwiZnVuY3Rpb25cIilcbm4ub25jZT9yLm9uY2UoZSx0KTpyLm9uKGUsdCk7ZWxzZSBpZih0eXBlb2Ygci5hZGRFdmVudExpc3RlbmVyPT1cImZ1bmN0aW9uXCIpci5hZGRFdmVudExpc3RlbmVyKFxuZSxhKGZ1bmN0aW9uIGkocyl7bi5vbmNlJiZyLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxpKSx0KHMpfSxcIndyYXBMaXN0ZW5lclwiKSk7ZWxzZVxudGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwiZW1pdHRlclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBFdmVudEVtaXR0ZXIuIFJlY2VpdlxcXG5lZCB0eXBlICcrdHlwZW9mIHIpfWEocmksXCJldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXJcIil9KTt2YXIgamU9e307aWUoamUse2RlZmF1bHQ6KCk9PiRvfSk7dmFyICRvLEhlPXooKCk9PntcInVzZSBzdHJpY3RcIjtwKCk7JG89e319KTtmdW5jdGlvbiBHZShyKXtsZXQgZT0xNzc5MDMzNzAzLHQ9MzE0NDEzNDI3NyxuPTEwMTM5MDQyNDIsaT0yNzczNDgwNzYyLHM9MTM1OTg5MzExOSxcbm89MjYwMDgyMjkyNCx1PTUyODczNDYzNSxjPTE1NDE0NTkyMjUsaD0wLGw9MCxkPVsxMTE2MzUyNDA4LDE4OTk0NDc0NDEsMzA0OTMyMzQ3MSxcbjM5MjEwMDk1NzMsOTYxOTg3MTYzLDE1MDg5NzA5OTMsMjQ1MzYzNTc0OCwyODcwNzYzMjIxLDM2MjQzODEwODAsMzEwNTk4NDAxLDYwNzIyNTI3OCxcbjE0MjY4ODE5ODcsMTkyNTA3ODM4OCwyMTYyMDc4MjA2LDI2MTQ4ODgxMDMsMzI0ODIyMjU4MCwzODM1MzkwNDAxLDQwMjIyMjQ3NzQsMjY0MzQ3MDc4LFxuNjA0ODA3NjI4LDc3MDI1NTk4MywxMjQ5MTUwMTIyLDE1NTUwODE2OTIsMTk5NjA2NDk4NiwyNTU0MjIwODgyLDI4MjE4MzQzNDksMjk1Mjk5NjgwOCxcbjMyMTAzMTM2NzEsMzMzNjU3MTg5MSwzNTg0NTI4NzExLDExMzkyNjk5MywzMzgyNDE4OTUsNjY2MzA3MjA1LDc3MzUyOTkxMiwxMjk0NzU3MzcyLFxuMTM5NjE4MjI5MSwxNjk1MTgzNzAwLDE5ODY2NjEwNTEsMjE3NzAyNjM1MCwyNDU2OTU2MDM3LDI3MzA0ODU5MjEsMjgyMDMwMjQxMSwzMjU5NzMwODAwLFxuMzM0NTc2NDc3MSwzNTE2MDY1ODE3LDM2MDAzNTI4MDQsNDA5NDU3MTkwOSwyNzU0MjMzNDQsNDMwMjI3NzM0LDUwNjk0ODYxNiw2NTkwNjA1NTYsXG44ODM5OTc4NzcsOTU4MTM5NTcxLDEzMjI4MjIyMTgsMTUzNzAwMjA2MywxNzQ3ODczNzc5LDE5NTU1NjIyMjIsMjAyNDEwNDgxNSwyMjI3NzMwNDUyLFxuMjM2MTg1MjQyNCwyNDI4NDM2NDc0LDI3NTY3MzQxODcsMzIwNDAzMTQ3OSwzMzI5MzI1Mjk4XSxiPWEoKEEsdyk9PkE+Pj53fEE8PDMyLXcsXG5cInJyb3RcIiksQz1uZXcgVWludDMyQXJyYXkoNjQpLEI9bmV3IFVpbnQ4QXJyYXkoNjQpLFc9YSgoKT0+e2ZvcihsZXQgUj0wLEc9MDtSPDE2O1IrKyxcbkcrPTQpQ1tSXT1CW0ddPDwyNHxCW0crMV08PDE2fEJbRysyXTw8OHxCW0crM107Zm9yKGxldCBSPTE2O1I8NjQ7UisrKXtsZXQgRz1iKENbUi1cbjE1XSw3KV5iKENbUi0xNV0sMTgpXkNbUi0xNV0+Pj4zLGhlPWIoQ1tSLTJdLDE3KV5iKENbUi0yXSwxOSleQ1tSLTJdPj4+MTA7Q1tSXT1DW1ItXG4xNl0rRytDW1ItN10raGV8MH1sZXQgQT1lLHc9dCxQPW4sVj1pLGs9cyxqPW8sY2U9dSxlZT1jO2ZvcihsZXQgUj0wO1I8NjQ7UisrKXtsZXQgRz1iKFxuayw2KV5iKGssMTEpXmIoaywyNSksaGU9ayZqXn5rJmNlLHllPWVlK0craGUrZFtSXStDW1JdfDAseGU9YihBLDIpXmIoQSwxMyleYihBLDIyKSxcbm1lPUEmd15BJlBedyZQLHNlPXhlK21lfDA7ZWU9Y2UsY2U9aixqPWssaz1WK3llfDAsVj1QLFA9dyx3PUEsQT15ZStzZXwwfWU9ZStBfDAsXG50PXQrd3wwLG49bitQfDAsaT1pK1Z8MCxzPXMra3wwLG89bytqfDAsdT11K2NlfDAsYz1jK2VlfDAsbD0wfSxcInByb2Nlc3NcIiksWD1hKEE9PntcbnR5cGVvZiBBPT1cInN0cmluZ1wiJiYoQT1uZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoQSkpO2ZvcihsZXQgdz0wO3c8QS5sZW5ndGg7dysrKUJbbCsrXT1cbkFbd10sbD09PTY0JiZXKCk7aCs9QS5sZW5ndGh9LFwiYWRkXCIpLGRlPWEoKCk9PntpZihCW2wrK109MTI4LGw9PTY0JiZXKCksbCs4PjY0KXtcbmZvcig7bDw2NDspQltsKytdPTA7VygpfWZvcig7bDw1ODspQltsKytdPTA7bGV0IEE9aCo4O0JbbCsrXT1BLzEwOTk1MTE2Mjc3NzYmMjU1LFxuQltsKytdPUEvNDI5NDk2NzI5NiYyNTUsQltsKytdPUE+Pj4yNCxCW2wrK109QT4+PjE2JjI1NSxCW2wrK109QT4+PjgmMjU1LEJbbCsrXT1cbkEmMjU1LFcoKTtsZXQgdz1uZXcgVWludDhBcnJheSgzMik7cmV0dXJuIHdbMF09ZT4+PjI0LHdbMV09ZT4+PjE2JjI1NSx3WzJdPWU+Pj44JlxuMjU1LHdbM109ZSYyNTUsd1s0XT10Pj4+MjQsd1s1XT10Pj4+MTYmMjU1LHdbNl09dD4+PjgmMjU1LHdbN109dCYyNTUsd1s4XT1uPj4+MjQsXG53WzldPW4+Pj4xNiYyNTUsd1sxMF09bj4+PjgmMjU1LHdbMTFdPW4mMjU1LHdbMTJdPWk+Pj4yNCx3WzEzXT1pPj4+MTYmMjU1LHdbMTRdPVxuaT4+PjgmMjU1LHdbMTVdPWkmMjU1LHdbMTZdPXM+Pj4yNCx3WzE3XT1zPj4+MTYmMjU1LHdbMThdPXM+Pj44JjI1NSx3WzE5XT1zJjI1NSxcbndbMjBdPW8+Pj4yNCx3WzIxXT1vPj4+MTYmMjU1LHdbMjJdPW8+Pj44JjI1NSx3WzIzXT1vJjI1NSx3WzI0XT11Pj4+MjQsd1syNV09dT4+PlxuMTYmMjU1LHdbMjZdPXU+Pj44JjI1NSx3WzI3XT11JjI1NSx3WzI4XT1jPj4+MjQsd1syOV09Yz4+PjE2JjI1NSx3WzMwXT1jPj4+OCYyNTUsXG53WzMxXT1jJjI1NSx3fSxcImRpZ2VzdFwiKTtyZXR1cm4gcj09PXZvaWQgMD97YWRkOlgsZGlnZXN0OmRlfTooWChyKSxkZSgpKX12YXIgbmk9eihcbigpPT57XCJ1c2Ugc3RyaWN0XCI7cCgpO2EoR2UsXCJzaGEyNTZcIil9KTt2YXIgTywkZSxpaT16KCgpPT57XCJ1c2Ugc3RyaWN0XCI7cCgpO089Y2xhc3MgT3tjb25zdHJ1Y3Rvcigpe18odGhpcyxcIl9kYXRhTGVuZ3RoXCIsXG4wKTtfKHRoaXMsXCJfYnVmZmVyTGVuZ3RoXCIsMCk7Xyh0aGlzLFwiX3N0YXRlXCIsbmV3IEludDMyQXJyYXkoNCkpO18odGhpcyxcIl9idWZmZXJcIixcbm5ldyBBcnJheUJ1ZmZlcig2OCkpO18odGhpcyxcIl9idWZmZXI4XCIpO18odGhpcyxcIl9idWZmZXIzMlwiKTt0aGlzLl9idWZmZXI4PW5ldyBVaW50OEFycmF5KFxudGhpcy5fYnVmZmVyLDAsNjgpLHRoaXMuX2J1ZmZlcjMyPW5ldyBVaW50MzJBcnJheSh0aGlzLl9idWZmZXIsMCwxNyksdGhpcy5zdGFydCgpfXN0YXRpYyBoYXNoQnl0ZUFycmF5KGUsdD0hMSl7XG5yZXR1cm4gdGhpcy5vbmVQYXNzSGFzaGVyLnN0YXJ0KCkuYXBwZW5kQnl0ZUFycmF5KGUpLmVuZCh0KX1zdGF0aWMgaGFzaFN0cihlLHQ9ITEpe1xucmV0dXJuIHRoaXMub25lUGFzc0hhc2hlci5zdGFydCgpLmFwcGVuZFN0cihlKS5lbmQodCl9c3RhdGljIGhhc2hBc2NpaVN0cihlLHQ9ITEpe1xucmV0dXJuIHRoaXMub25lUGFzc0hhc2hlci5zdGFydCgpLmFwcGVuZEFzY2lpU3RyKGUpLmVuZCh0KX1zdGF0aWMgX2hleChlKXtsZXQgdD1PLlxuaGV4Q2hhcnMsbj1PLmhleE91dCxpLHMsbyx1O2Zvcih1PTA7dTw0O3UrPTEpZm9yKHM9dSo4LGk9ZVt1XSxvPTA7bzw4O28rPTIpbltzKzErXG5vXT10LmNoYXJBdChpJjE1KSxpPj4+PTQsbltzKzArb109dC5jaGFyQXQoaSYxNSksaT4+Pj00O3JldHVybiBuLmpvaW4oXCJcIil9c3RhdGljIF9tZDVjeWNsZShlLHQpe1xubGV0IG49ZVswXSxpPWVbMV0scz1lWzJdLG89ZVszXTtuKz0oaSZzfH5pJm8pK3RbMF0tNjgwODc2OTM2fDAsbj0objw8N3xuPj4+MjUpK2l8XG4wLG8rPShuJml8fm4mcykrdFsxXS0zODk1NjQ1ODZ8MCxvPShvPDwxMnxvPj4+MjApK258MCxzKz0obyZufH5vJmkpK3RbMl0rNjA2MTA1ODE5fFxuMCxzPShzPDwxN3xzPj4+MTUpK298MCxpKz0ocyZvfH5zJm4pK3RbM10tMTA0NDUyNTMzMHwwLGk9KGk8PDIyfGk+Pj4xMCkrc3wwLG4rPShpJlxuc3x+aSZvKSt0WzRdLTE3NjQxODg5N3wwLG49KG48PDd8bj4+PjI1KStpfDAsbys9KG4maXx+biZzKSt0WzVdKzEyMDAwODA0MjZ8MCxvPShvPDxcbjEyfG8+Pj4yMCkrbnwwLHMrPShvJm58fm8maSkrdFs2XS0xNDczMjMxMzQxfDAscz0oczw8MTd8cz4+PjE1KStvfDAsaSs9KHMmb3x+cyZuKStcbnRbN10tNDU3MDU5ODN8MCxpPShpPDwyMnxpPj4+MTApK3N8MCxuKz0oaSZzfH5pJm8pK3RbOF0rMTc3MDAzNTQxNnwwLG49KG48PDd8bj4+PlxuMjUpK2l8MCxvKz0obiZpfH5uJnMpK3RbOV0tMTk1ODQxNDQxN3wwLG89KG88PDEyfG8+Pj4yMCkrbnwwLHMrPShvJm58fm8maSkrdFsxMF0tXG40MjA2M3wwLHM9KHM8PDE3fHM+Pj4xNSkrb3wwLGkrPShzJm98fnMmbikrdFsxMV0tMTk5MDQwNDE2MnwwLGk9KGk8PDIyfGk+Pj4xMCkrc3xcbjAsbis9KGkmc3x+aSZvKSt0WzEyXSsxODA0NjAzNjgyfDAsbj0objw8N3xuPj4+MjUpK2l8MCxvKz0obiZpfH5uJnMpK3RbMTNdLTQwMzQxMTAxfFxuMCxvPShvPDwxMnxvPj4+MjApK258MCxzKz0obyZufH5vJmkpK3RbMTRdLTE1MDIwMDIyOTB8MCxzPShzPDwxN3xzPj4+MTUpK298MCxpKz1cbihzJm98fnMmbikrdFsxNV0rMTIzNjUzNTMyOXwwLGk9KGk8PDIyfGk+Pj4xMCkrc3wwLG4rPShpJm98cyZ+bykrdFsxXS0xNjU3OTY1MTB8XG4wLG49KG48PDV8bj4+PjI3KStpfDAsbys9KG4mc3xpJn5zKSt0WzZdLTEwNjk1MDE2MzJ8MCxvPShvPDw5fG8+Pj4yMykrbnwwLHMrPShvJlxuaXxuJn5pKSt0WzExXSs2NDM3MTc3MTN8MCxzPShzPDwxNHxzPj4+MTgpK298MCxpKz0ocyZufG8mfm4pK3RbMF0tMzczODk3MzAyfDAsaT1cbihpPDwyMHxpPj4+MTIpK3N8MCxuKz0oaSZvfHMmfm8pK3RbNV0tNzAxNTU4NjkxfDAsbj0objw8NXxuPj4+MjcpK2l8MCxvKz0obiZzfGkmXG5+cykrdFsxMF0rMzgwMTYwODN8MCxvPShvPDw5fG8+Pj4yMykrbnwwLHMrPShvJml8biZ+aSkrdFsxNV0tNjYwNDc4MzM1fDAscz0oczw8MTR8XG5zPj4+MTgpK298MCxpKz0ocyZufG8mfm4pK3RbNF0tNDA1NTM3ODQ4fDAsaT0oaTw8MjB8aT4+PjEyKStzfDAsbis9KGkmb3xzJn5vKSt0WzldK1xuNTY4NDQ2NDM4fDAsbj0objw8NXxuPj4+MjcpK2l8MCxvKz0obiZzfGkmfnMpK3RbMTRdLTEwMTk4MDM2OTB8MCxvPShvPDw5fG8+Pj4yMykrXG5ufDAscys9KG8maXxuJn5pKSt0WzNdLTE4NzM2Mzk2MXwwLHM9KHM8PDE0fHM+Pj4xOCkrb3wwLGkrPShzJm58byZ+bikrdFs4XSsxMTYzNTMxNTAxfFxuMCxpPShpPDwyMHxpPj4+MTIpK3N8MCxuKz0oaSZvfHMmfm8pK3RbMTNdLTE0NDQ2ODE0Njd8MCxuPShuPDw1fG4+Pj4yNykraXwwLG8rPShuJlxuc3xpJn5zKSt0WzJdLTUxNDAzNzg0fDAsbz0obzw8OXxvPj4+MjMpK258MCxzKz0obyZpfG4mfmkpK3RbN10rMTczNTMyODQ3M3wwLHM9KHM8PFxuMTR8cz4+PjE4KStvfDAsaSs9KHMmbnxvJn5uKSt0WzEyXS0xOTI2NjA3NzM0fDAsaT0oaTw8MjB8aT4+PjEyKStzfDAsbis9KGlec15vKStcbnRbNV0tMzc4NTU4fDAsbj0objw8NHxuPj4+MjgpK2l8MCxvKz0obl5pXnMpK3RbOF0tMjAyMjU3NDQ2M3wwLG89KG88PDExfG8+Pj4yMSkrXG5ufDAscys9KG9ebl5pKSt0WzExXSsxODM5MDMwNTYyfDAscz0oczw8MTZ8cz4+PjE2KStvfDAsaSs9KHNeb15uKSt0WzE0XS0zNTMwOTU1NnxcbjAsaT0oaTw8MjN8aT4+PjkpK3N8MCxuKz0oaV5zXm8pK3RbMV0tMTUzMDk5MjA2MHwwLG49KG48PDR8bj4+PjI4KStpfDAsbys9KG5eaV5zKStcbnRbNF0rMTI3Mjg5MzM1M3wwLG89KG88PDExfG8+Pj4yMSkrbnwwLHMrPShvXm5eaSkrdFs3XS0xNTU0OTc2MzJ8MCxzPShzPDwxNnxzPj4+XG4xNikrb3wwLGkrPShzXm9ebikrdFsxMF0tMTA5NDczMDY0MHwwLGk9KGk8PDIzfGk+Pj45KStzfDAsbis9KGlec15vKSt0WzEzXSs2ODEyNzkxNzR8XG4wLG49KG48PDR8bj4+PjI4KStpfDAsbys9KG5eaV5zKSt0WzBdLTM1ODUzNzIyMnwwLG89KG88PDExfG8+Pj4yMSkrbnwwLHMrPShvXm5eaSkrXG50WzNdLTcyMjUyMTk3OXwwLHM9KHM8PDE2fHM+Pj4xNikrb3wwLGkrPShzXm9ebikrdFs2XSs3NjAyOTE4OXwwLGk9KGk8PDIzfGk+Pj45KStcbnN8MCxuKz0oaV5zXm8pK3RbOV0tNjQwMzY0NDg3fDAsbj0objw8NHxuPj4+MjgpK2l8MCxvKz0obl5pXnMpK3RbMTJdLTQyMTgxNTgzNXwwLFxubz0obzw8MTF8bz4+PjIxKStufDAscys9KG9ebl5pKSt0WzE1XSs1MzA3NDI1MjB8MCxzPShzPDwxNnxzPj4+MTYpK298MCxpKz0oc15vXm4pK1xudFsyXS05OTUzMzg2NTF8MCxpPShpPDwyM3xpPj4+OSkrc3wwLG4rPShzXihpfH5vKSkrdFswXS0xOTg2MzA4NDR8MCxuPShuPDw2fG4+Pj5cbjI2KStpfDAsbys9KGleKG58fnMpKSt0WzddKzExMjY4OTE0MTV8MCxvPShvPDwxMHxvPj4+MjIpK258MCxzKz0obl4ob3x+aSkpK3RbMTRdLVxuMTQxNjM1NDkwNXwwLHM9KHM8PDE1fHM+Pj4xNykrb3wwLGkrPShvXihzfH5uKSkrdFs1XS01NzQzNDA1NXwwLGk9KGk8PDIxfGk+Pj4xMSkrXG5zfDAsbis9KHNeKGl8fm8pKSt0WzEyXSsxNzAwNDg1NTcxfDAsbj0objw8NnxuPj4+MjYpK2l8MCxvKz0oaV4obnx+cykpK3RbM10tMTg5NDk4NjYwNnxcbjAsbz0obzw8MTB8bz4+PjIyKStufDAscys9KG5eKG98fmkpKSt0WzEwXS0xMDUxNTIzfDAscz0oczw8MTV8cz4+PjE3KStvfDAsaSs9KG9eXG4oc3x+bikpK3RbMV0tMjA1NDkyMjc5OXwwLGk9KGk8PDIxfGk+Pj4xMSkrc3wwLG4rPShzXihpfH5vKSkrdFs4XSsxODczMzEzMzU5fDAsbj1cbihuPDw2fG4+Pj4yNikraXwwLG8rPShpXihufH5zKSkrdFsxNV0tMzA2MTE3NDR8MCxvPShvPDwxMHxvPj4+MjIpK258MCxzKz0obl4ob3x+aSkpK1xudFs2XS0xNTYwMTk4MzgwfDAscz0oczw8MTV8cz4+PjE3KStvfDAsaSs9KG9eKHN8fm4pKSt0WzEzXSsxMzA5MTUxNjQ5fDAsaT0oaTw8MjF8XG5pPj4+MTEpK3N8MCxuKz0oc14oaXx+bykpK3RbNF0tMTQ1NTIzMDcwfDAsbj0objw8NnxuPj4+MjYpK2l8MCxvKz0oaV4obnx+cykpK3RbMTFdLVxuMTEyMDIxMDM3OXwwLG89KG88PDEwfG8+Pj4yMikrbnwwLHMrPShuXihvfH5pKSkrdFsyXSs3MTg3ODcyNTl8MCxzPShzPDwxNXxzPj4+MTcpK1xub3wwLGkrPShvXihzfH5uKSkrdFs5XS0zNDM0ODU1NTF8MCxpPShpPDwyMXxpPj4+MTEpK3N8MCxlWzBdPW4rZVswXXwwLGVbMV09aStlWzFdfFxuMCxlWzJdPXMrZVsyXXwwLGVbM109bytlWzNdfDB9c3RhcnQoKXtyZXR1cm4gdGhpcy5fZGF0YUxlbmd0aD0wLHRoaXMuX2J1ZmZlckxlbmd0aD1cbjAsdGhpcy5fc3RhdGUuc2V0KE8uc3RhdGVJZGVudGl0eSksdGhpc31hcHBlbmRTdHIoZSl7bGV0IHQ9dGhpcy5fYnVmZmVyOCxuPXRoaXMuXG5fYnVmZmVyMzIsaT10aGlzLl9idWZmZXJMZW5ndGgscyxvO2ZvcihvPTA7bzxlLmxlbmd0aDtvKz0xKXtpZihzPWUuY2hhckNvZGVBdChvKSxcbnM8MTI4KXRbaSsrXT1zO2Vsc2UgaWYoczwyMDQ4KXRbaSsrXT0ocz4+PjYpKzE5Mix0W2krK109cyY2M3wxMjg7ZWxzZSBpZihzPDU1Mjk2fHxcbnM+NTYzMTkpdFtpKytdPShzPj4+MTIpKzIyNCx0W2krK109cz4+PjYmNjN8MTI4LHRbaSsrXT1zJjYzfDEyODtlbHNle2lmKHM9KHMtNTUyOTYpKlxuMTAyNCsoZS5jaGFyQ29kZUF0KCsrbyktNTYzMjApKzY1NTM2LHM+MTExNDExMSl0aHJvdyBuZXcgRXJyb3IoXCJVbmljb2RlIHN0YW5kYXJkXFxcbiBzdXBwb3J0cyBjb2RlIHBvaW50cyB1cCB0byBVKzEwRkZGRlwiKTt0W2krK109KHM+Pj4xOCkrMjQwLHRbaSsrXT1zPj4+MTImNjN8MTI4LFxudFtpKytdPXM+Pj42JjYzfDEyOCx0W2krK109cyY2M3wxMjh9aT49NjQmJih0aGlzLl9kYXRhTGVuZ3RoKz02NCxPLl9tZDVjeWNsZSh0aGlzLlxuX3N0YXRlLG4pLGktPTY0LG5bMF09blsxNl0pfXJldHVybiB0aGlzLl9idWZmZXJMZW5ndGg9aSx0aGlzfWFwcGVuZEFzY2lpU3RyKGUpe2xldCB0PXRoaXMuXG5fYnVmZmVyOCxuPXRoaXMuX2J1ZmZlcjMyLGk9dGhpcy5fYnVmZmVyTGVuZ3RoLHMsbz0wO2Zvcig7Oyl7Zm9yKHM9TWF0aC5taW4oZS5sZW5ndGgtXG5vLDY0LWkpO3MtLTspdFtpKytdPWUuY2hhckNvZGVBdChvKyspO2lmKGk8NjQpYnJlYWs7dGhpcy5fZGF0YUxlbmd0aCs9NjQsTy5fbWQ1Y3ljbGUoXG50aGlzLl9zdGF0ZSxuKSxpPTB9cmV0dXJuIHRoaXMuX2J1ZmZlckxlbmd0aD1pLHRoaXN9YXBwZW5kQnl0ZUFycmF5KGUpe2xldCB0PXRoaXMuXG5fYnVmZmVyOCxuPXRoaXMuX2J1ZmZlcjMyLGk9dGhpcy5fYnVmZmVyTGVuZ3RoLHMsbz0wO2Zvcig7Oyl7Zm9yKHM9TWF0aC5taW4oZS5sZW5ndGgtXG5vLDY0LWkpO3MtLTspdFtpKytdPWVbbysrXTtpZihpPDY0KWJyZWFrO3RoaXMuX2RhdGFMZW5ndGgrPTY0LE8uX21kNWN5Y2xlKHRoaXMuX3N0YXRlLFxubiksaT0wfXJldHVybiB0aGlzLl9idWZmZXJMZW5ndGg9aSx0aGlzfWdldFN0YXRlKCl7bGV0IGU9dGhpcy5fc3RhdGU7cmV0dXJue2J1ZmZlcjpTdHJpbmcuXG5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxBcnJheS5mcm9tKHRoaXMuX2J1ZmZlcjgpKSxidWZsZW46dGhpcy5fYnVmZmVyTGVuZ3RoLGxlbmd0aDp0aGlzLlxuX2RhdGFMZW5ndGgsc3RhdGU6W2VbMF0sZVsxXSxlWzJdLGVbM11dfX1zZXRTdGF0ZShlKXtsZXQgdD1lLmJ1ZmZlcixuPWUuc3RhdGUsaT10aGlzLlxuX3N0YXRlLHM7Zm9yKHRoaXMuX2RhdGFMZW5ndGg9ZS5sZW5ndGgsdGhpcy5fYnVmZmVyTGVuZ3RoPWUuYnVmbGVuLGlbMF09blswXSxpWzFdPVxublsxXSxpWzJdPW5bMl0saVszXT1uWzNdLHM9MDtzPHQubGVuZ3RoO3MrPTEpdGhpcy5fYnVmZmVyOFtzXT10LmNoYXJDb2RlQXQocyl9ZW5kKGU9ITEpe1xubGV0IHQ9dGhpcy5fYnVmZmVyTGVuZ3RoLG49dGhpcy5fYnVmZmVyOCxpPXRoaXMuX2J1ZmZlcjMyLHM9KHQ+PjIpKzE7dGhpcy5fZGF0YUxlbmd0aCs9XG50O2xldCBvPXRoaXMuX2RhdGFMZW5ndGgqODtpZihuW3RdPTEyOCxuW3QrMV09blt0KzJdPW5bdCszXT0wLGkuc2V0KE8uYnVmZmVyMzJJZGVudGl0eS5cbnN1YmFycmF5KHMpLHMpLHQ+NTUmJihPLl9tZDVjeWNsZSh0aGlzLl9zdGF0ZSxpKSxpLnNldChPLmJ1ZmZlcjMySWRlbnRpdHkpKSxvPD00Mjk0OTY3Mjk1KVxuaVsxNF09bztlbHNle2xldCB1PW8udG9TdHJpbmcoMTYpLm1hdGNoKC8oLio/KSguezAsOH0pJC8pO2lmKHU9PT1udWxsKXJldHVybjtsZXQgYz1wYXJzZUludChcbnVbMl0sMTYpLGg9cGFyc2VJbnQodVsxXSwxNil8fDA7aVsxNF09YyxpWzE1XT1ofXJldHVybiBPLl9tZDVjeWNsZSh0aGlzLl9zdGF0ZSxpKSxcbmU/dGhpcy5fc3RhdGU6Ty5faGV4KHRoaXMuX3N0YXRlKX19O2EoTyxcIk1kNVwiKSxfKE8sXCJzdGF0ZUlkZW50aXR5XCIsbmV3IEludDMyQXJyYXkoXG5bMTczMjU4NDE5MywtMjcxNzMzODc5LC0xNzMyNTg0MTk0LDI3MTczMzg3OF0pKSxfKE8sXCJidWZmZXIzMklkZW50aXR5XCIsbmV3IEludDMyQXJyYXkoXG5bMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF0pKSxfKE8sXCJoZXhDaGFyc1wiLFwiMDEyMzQ1Njc4OWFiY2RlZlwiKSxfKE8sXCJoZXhPXFxcbnV0XCIsW10pLF8oTyxcIm9uZVBhc3NIYXNoZXJcIixuZXcgTyk7JGU9T30pO3ZhciBxdD17fTtpZShxdCx7Y3JlYXRlSGFzaDooKT0+S28sY3JlYXRlSG1hYzooKT0+em8scmFuZG9tQnl0ZXM6KCk9PlZvfSk7ZnVuY3Rpb24gVm8ocil7XG5yZXR1cm4gZy5nZXRSYW5kb21WYWx1ZXMoeS5hbGxvYyhyKSl9ZnVuY3Rpb24gS28ocil7aWYocj09PVwic2hhMjU2XCIpcmV0dXJue3VwZGF0ZTphKFxuZnVuY3Rpb24oZSl7cmV0dXJue2RpZ2VzdDphKGZ1bmN0aW9uKCl7cmV0dXJuIHkuZnJvbShHZShlKSl9LFwiZGlnZXN0XCIpfX0sXCJ1cGRhdGVcIil9O1xuaWYocj09PVwibWQ1XCIpcmV0dXJue3VwZGF0ZTphKGZ1bmN0aW9uKGUpe3JldHVybntkaWdlc3Q6YShmdW5jdGlvbigpe3JldHVybiB0eXBlb2YgZT09XG5cInN0cmluZ1wiPyRlLmhhc2hTdHIoZSk6JGUuaGFzaEJ5dGVBcnJheShlKX0sXCJkaWdlc3RcIil9fSxcInVwZGF0ZVwiKX07dGhyb3cgbmV3IEVycm9yKFxuYEhhc2ggdHlwZSAnJHtyfScgbm90IHN1cHBvcnRlZGApfWZ1bmN0aW9uIHpvKHIsZSl7aWYociE9PVwic2hhMjU2XCIpdGhyb3cgbmV3IEVycm9yKFxuYE9ubHkgc2hhMjU2IGlzIHN1cHBvcnRlZCAocmVxdWVzdGVkOiAnJHtyfScpYCk7cmV0dXJue3VwZGF0ZTphKGZ1bmN0aW9uKHQpe3JldHVybntcbmRpZ2VzdDphKGZ1bmN0aW9uKCl7dHlwZW9mIGU9PVwic3RyaW5nXCImJihlPW5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShlKSksdHlwZW9mIHQ9PVxuXCJzdHJpbmdcIiYmKHQ9bmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHQpKTtsZXQgbj1lLmxlbmd0aDtpZihuPjY0KWU9R2UoZSk7ZWxzZSBpZihuPFxuNjQpe2xldCBjPW5ldyBVaW50OEFycmF5KDY0KTtjLnNldChlKSxlPWN9bGV0IGk9bmV3IFVpbnQ4QXJyYXkoNjQpLHM9bmV3IFVpbnQ4QXJyYXkoXG42NCk7Zm9yKGxldCBjPTA7Yzw2NDtjKyspaVtjXT01NF5lW2NdLHNbY109OTJeZVtjXTtsZXQgbz1uZXcgVWludDhBcnJheSh0Lmxlbmd0aCtcbjY0KTtvLnNldChpLDApLG8uc2V0KHQsNjQpO2xldCB1PW5ldyBVaW50OEFycmF5KDk2KTtyZXR1cm4gdS5zZXQocywwKSx1LnNldChHZShvKSxcbjY0KSx5LmZyb20oR2UodSkpfSxcImRpZ2VzdFwiKX19LFwidXBkYXRlXCIpfX12YXIgUXQ9eigoKT0+e1widXNlIHN0cmljdFwiO3AoKTtuaSgpO2lpKCk7XG5hKFZvLFwicmFuZG9tQnl0ZXNcIik7YShLbyxcImNyZWF0ZUhhc2hcIik7YSh6byxcImNyZWF0ZUhtYWNcIil9KTt2YXIganQ9SShzaT0+e1widXNlIHN0cmljdFwiO3AoKTtzaS5wYXJzZT1mdW5jdGlvbihyLGUpe3JldHVybiBuZXcgV3QocixlKS5wYXJzZSgpfTtcbnZhciB1dD1jbGFzcyB1dHtjb25zdHJ1Y3RvcihlLHQpe3RoaXMuc291cmNlPWUsdGhpcy50cmFuc2Zvcm09dHx8WW8sdGhpcy5wb3NpdGlvbj1cbjAsdGhpcy5lbnRyaWVzPVtdLHRoaXMucmVjb3JkZWQ9W10sdGhpcy5kaW1lbnNpb249MH1pc0VvZigpe3JldHVybiB0aGlzLnBvc2l0aW9uPj1cbnRoaXMuc291cmNlLmxlbmd0aH1uZXh0Q2hhcmFjdGVyKCl7dmFyIGU9dGhpcy5zb3VyY2VbdGhpcy5wb3NpdGlvbisrXTtyZXR1cm4gZT09PVxuXCJcXFxcXCI/e3ZhbHVlOnRoaXMuc291cmNlW3RoaXMucG9zaXRpb24rK10sZXNjYXBlZDohMH06e3ZhbHVlOmUsZXNjYXBlZDohMX19cmVjb3JkKGUpe1xudGhpcy5yZWNvcmRlZC5wdXNoKGUpfW5ld0VudHJ5KGUpe3ZhciB0Oyh0aGlzLnJlY29yZGVkLmxlbmd0aD4wfHxlKSYmKHQ9dGhpcy5yZWNvcmRlZC5cbmpvaW4oXCJcIiksdD09PVwiTlVMTFwiJiYhZSYmKHQ9bnVsbCksdCE9PW51bGwmJih0PXRoaXMudHJhbnNmb3JtKHQpKSx0aGlzLmVudHJpZXMucHVzaChcbnQpLHRoaXMucmVjb3JkZWQ9W10pfWNvbnN1bWVEaW1lbnNpb25zKCl7aWYodGhpcy5zb3VyY2VbMF09PT1cIltcIilmb3IoOyF0aGlzLmlzRW9mKCk7KXtcbnZhciBlPXRoaXMubmV4dENoYXJhY3RlcigpO2lmKGUudmFsdWU9PT1cIj1cIilicmVha319cGFyc2UoZSl7dmFyIHQsbixpO2Zvcih0aGlzLmNvbnN1bWVEaW1lbnNpb25zKCk7IXRoaXMuXG5pc0VvZigpOylpZih0PXRoaXMubmV4dENoYXJhY3RlcigpLHQudmFsdWU9PT1cIntcIiYmIWkpdGhpcy5kaW1lbnNpb24rKyx0aGlzLmRpbWVuc2lvbj5cbjEmJihuPW5ldyB1dCh0aGlzLnNvdXJjZS5zdWJzdHIodGhpcy5wb3NpdGlvbi0xKSx0aGlzLnRyYW5zZm9ybSksdGhpcy5lbnRyaWVzLnB1c2goXG5uLnBhcnNlKCEwKSksdGhpcy5wb3NpdGlvbis9bi5wb3NpdGlvbi0yKTtlbHNlIGlmKHQudmFsdWU9PT1cIn1cIiYmIWkpe2lmKHRoaXMuZGltZW5zaW9uLS0sXG4hdGhpcy5kaW1lbnNpb24mJih0aGlzLm5ld0VudHJ5KCksZSkpcmV0dXJuIHRoaXMuZW50cmllc31lbHNlIHQudmFsdWU9PT0nXCInJiYhdC5cbmVzY2FwZWQ/KGkmJnRoaXMubmV3RW50cnkoITApLGk9IWkpOnQudmFsdWU9PT1cIixcIiYmIWk/dGhpcy5uZXdFbnRyeSgpOnRoaXMucmVjb3JkKFxudC52YWx1ZSk7aWYodGhpcy5kaW1lbnNpb24hPT0wKXRocm93IG5ldyBFcnJvcihcImFycmF5IGRpbWVuc2lvbiBub3QgYmFsYW5jZWRcIik7cmV0dXJuIHRoaXMuXG5lbnRyaWVzfX07YSh1dCxcIkFycmF5UGFyc2VyXCIpO3ZhciBXdD11dDtmdW5jdGlvbiBZbyhyKXtyZXR1cm4gcn1hKFlvLFwiaWRlbnRpdHlcIil9KTt2YXIgSHQ9SSgobWgsb2kpPT57cCgpO3ZhciBabz1qdCgpO29pLmV4cG9ydHM9e2NyZWF0ZTphKGZ1bmN0aW9uKHIsZSl7cmV0dXJue3BhcnNlOmEoXG5mdW5jdGlvbigpe3JldHVybiBaby5wYXJzZShyLGUpfSxcInBhcnNlXCIpfX0sXCJjcmVhdGVcIil9fSk7dmFyIGNpPUkoKGJoLHVpKT0+e1widXNlIHN0cmljdFwiO3AoKTt2YXIgSm89LyhcXGR7MSx9KS0oXFxkezJ9KS0oXFxkezJ9KSAoXFxkezJ9KTooXFxkezJ9KTooXFxkezJ9KShcXC5cXGR7MSx9KT8uKj8oIEJDKT8kLyxcblhvPS9eKFxcZHsxLH0pLShcXGR7Mn0pLShcXGR7Mn0pKCBCQyk/JC8sZWE9LyhbWistXSkoXFxkezJ9KT86PyhcXGR7Mn0pPzo/KFxcZHsyfSk/Lyx0YT0vXi0/aW5maW5pdHkkLztcbnVpLmV4cG9ydHM9YShmdW5jdGlvbihlKXtpZih0YS50ZXN0KGUpKXJldHVybiBOdW1iZXIoZS5yZXBsYWNlKFwiaVwiLFwiSVwiKSk7dmFyIHQ9Sm8uXG5leGVjKGUpO2lmKCF0KXJldHVybiByYShlKXx8bnVsbDt2YXIgbj0hIXRbOF0saT1wYXJzZUludCh0WzFdLDEwKTtuJiYoaT1haShpKSk7dmFyIHM9cGFyc2VJbnQoXG50WzJdLDEwKS0xLG89dFszXSx1PXBhcnNlSW50KHRbNF0sMTApLGM9cGFyc2VJbnQodFs1XSwxMCksaD1wYXJzZUludCh0WzZdLDEwKSxsPXRbN107XG5sPWw/MWUzKnBhcnNlRmxvYXQobCk6MDt2YXIgZCxiPW5hKGUpO3JldHVybiBiIT1udWxsPyhkPW5ldyBEYXRlKERhdGUuVVRDKGkscyxvLFxudSxjLGgsbCkpLEd0KGkpJiZkLnNldFVUQ0Z1bGxZZWFyKGkpLGIhPT0wJiZkLnNldFRpbWUoZC5nZXRUaW1lKCktYikpOihkPW5ldyBEYXRlKFxuaSxzLG8sdSxjLGgsbCksR3QoaSkmJmQuc2V0RnVsbFllYXIoaSkpLGR9LFwicGFyc2VEYXRlXCIpO2Z1bmN0aW9uIHJhKHIpe3ZhciBlPVhvLlxuZXhlYyhyKTtpZihlKXt2YXIgdD1wYXJzZUludChlWzFdLDEwKSxuPSEhZVs0XTtuJiYodD1haSh0KSk7dmFyIGk9cGFyc2VJbnQoZVsyXSxcbjEwKS0xLHM9ZVszXSxvPW5ldyBEYXRlKHQsaSxzKTtyZXR1cm4gR3QodCkmJm8uc2V0RnVsbFllYXIodCksb319YShyYSxcImdldERhdGVcIik7XG5mdW5jdGlvbiBuYShyKXtpZihyLmVuZHNXaXRoKFwiKzAwXCIpKXJldHVybiAwO3ZhciBlPWVhLmV4ZWMoci5zcGxpdChcIiBcIilbMV0pO2lmKGUpe1xudmFyIHQ9ZVsxXTtpZih0PT09XCJaXCIpcmV0dXJuIDA7dmFyIG49dD09PVwiLVwiPy0xOjEsaT1wYXJzZUludChlWzJdLDEwKSozNjAwK3BhcnNlSW50KFxuZVszXXx8MCwxMCkqNjArcGFyc2VJbnQoZVs0XXx8MCwxMCk7cmV0dXJuIGkqbioxZTN9fWEobmEsXCJ0aW1lWm9uZU9mZnNldFwiKTtmdW5jdGlvbiBhaShyKXtcbnJldHVybi0oci0xKX1hKGFpLFwiYmNZZWFyVG9OZWdhdGl2ZVllYXJcIik7ZnVuY3Rpb24gR3Qocil7cmV0dXJuIHI+PTAmJnI8MTAwfWEoR3QsXG5cImlzMFRvOTlcIil9KTt2YXIgbGk9SSgodmgsaGkpPT57cCgpO2hpLmV4cG9ydHM9c2E7dmFyIGlhPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7ZnVuY3Rpb24gc2Eocil7XG5mb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgdD1hcmd1bWVudHNbZV07Zm9yKHZhciBuIGluIHQpaWEuY2FsbCh0LFxubikmJihyW25dPXRbbl0pfXJldHVybiByfWEoc2EsXCJleHRlbmRcIil9KTt2YXIgZGk9SSgoQWgscGkpPT57XCJ1c2Ugc3RyaWN0XCI7cCgpO3ZhciBvYT1saSgpO3BpLmV4cG9ydHM9RmU7ZnVuY3Rpb24gRmUocil7aWYoISh0aGlzIGluc3RhbmNlb2ZcbkZlKSlyZXR1cm4gbmV3IEZlKHIpO29hKHRoaXMsd2EocikpfWEoRmUsXCJQb3N0Z3Jlc0ludGVydmFsXCIpO3ZhciBhYT1bXCJzZWNvbmRzXCIsXCJcXFxubWludXRlc1wiLFwiaG91cnNcIixcImRheXNcIixcIm1vbnRoc1wiLFwieWVhcnNcIl07RmUucHJvdG90eXBlLnRvUG9zdGdyZXM9ZnVuY3Rpb24oKXt2YXIgcj1hYS5cbmZpbHRlcih0aGlzLmhhc093blByb3BlcnR5LHRoaXMpO3JldHVybiB0aGlzLm1pbGxpc2Vjb25kcyYmci5pbmRleE9mKFwic2Vjb25kc1wiKTxcbjAmJnIucHVzaChcInNlY29uZHNcIiksci5sZW5ndGg9PT0wP1wiMFwiOnIubWFwKGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXNbZV18fDA7cmV0dXJuIGU9PT1cblwic2Vjb25kc1wiJiZ0aGlzLm1pbGxpc2Vjb25kcyYmKHQ9KHQrdGhpcy5taWxsaXNlY29uZHMvMWUzKS50b0ZpeGVkKDYpLnJlcGxhY2UoL1xcLj8wKyQvLFxuXCJcIikpLHQrXCIgXCIrZX0sdGhpcykuam9pbihcIiBcIil9O3ZhciB1YT17eWVhcnM6XCJZXCIsbW9udGhzOlwiTVwiLGRheXM6XCJEXCIsaG91cnM6XCJIXCIsbWludXRlczpcIlxcXG5NXCIsc2Vjb25kczpcIlNcIn0sY2E9W1wieWVhcnNcIixcIm1vbnRoc1wiLFwiZGF5c1wiXSxoYT1bXCJob3Vyc1wiLFwibWludXRlc1wiLFwic2Vjb25kc1wiXTtGZS5cbnByb3RvdHlwZS50b0lTT1N0cmluZz1GZS5wcm90b3R5cGUudG9JU089ZnVuY3Rpb24oKXt2YXIgcj1jYS5tYXAodCx0aGlzKS5qb2luKFwiXCIpLFxuZT1oYS5tYXAodCx0aGlzKS5qb2luKFwiXCIpO3JldHVyblwiUFwiK3IrXCJUXCIrZTtmdW5jdGlvbiB0KG4pe3ZhciBpPXRoaXNbbl18fDA7cmV0dXJuIG49PT1cblwic2Vjb25kc1wiJiZ0aGlzLm1pbGxpc2Vjb25kcyYmKGk9KGkrdGhpcy5taWxsaXNlY29uZHMvMWUzKS50b0ZpeGVkKDYpLnJlcGxhY2UoLzArJC8sXG5cIlwiKSksaSt1YVtuXX19O3ZhciAkdD1cIihbKy1dP1xcXFxkKylcIixsYT0kdCtcIlxcXFxzK3llYXJzP1wiLGZhPSR0K1wiXFxcXHMrbW9ucz9cIixwYT0kdCtcIlxcXG5cXFxccytkYXlzP1wiLGRhPVwiKFsrLV0pPyhbXFxcXGRdKik6KFxcXFxkXFxcXGQpOihcXFxcZFxcXFxkKVxcXFwuPyhcXFxcZHsxLDZ9KT9cIix5YT1uZXcgUmVnRXhwKFtcbmxhLGZhLHBhLGRhXS5tYXAoZnVuY3Rpb24ocil7cmV0dXJuXCIoXCIrcitcIik/XCJ9KS5qb2luKFwiXFxcXHMqXCIpKSxmaT17eWVhcnM6Mixtb250aHM6NCxcbmRheXM6Nixob3Vyczo5LG1pbnV0ZXM6MTAsc2Vjb25kczoxMSxtaWxsaXNlY29uZHM6MTJ9LG1hPVtcImhvdXJzXCIsXCJtaW51dGVzXCIsXCJzZWNcXFxub25kc1wiLFwibWlsbGlzZWNvbmRzXCJdO2Z1bmN0aW9uIGdhKHIpe3ZhciBlPXIrXCIwMDAwMDBcIi5zbGljZShyLmxlbmd0aCk7cmV0dXJuIHBhcnNlSW50KFxuZSwxMCkvMWUzfWEoZ2EsXCJwYXJzZU1pbGxpc2Vjb25kc1wiKTtmdW5jdGlvbiB3YShyKXtpZighcilyZXR1cm57fTt2YXIgZT15YS5leGVjKFxuciksdD1lWzhdPT09XCItXCI7cmV0dXJuIE9iamVjdC5rZXlzKGZpKS5yZWR1Y2UoZnVuY3Rpb24obixpKXt2YXIgcz1maVtpXSxvPWVbc107cmV0dXJuIW98fFxuKG89aT09PVwibWlsbGlzZWNvbmRzXCI/Z2Eobyk6cGFyc2VJbnQobywxMCksIW8pfHwodCYmfm1hLmluZGV4T2YoaSkmJihvKj0tMSksbltpXT1cbm8pLG59LHt9KX1hKHdhLFwicGFyc2VcIil9KTt2YXIgbWk9SSgoSWgseWkpPT57XCJ1c2Ugc3RyaWN0XCI7cCgpO3lpLmV4cG9ydHM9YShmdW5jdGlvbihlKXtpZigvXlxcXFx4Ly50ZXN0KGUpKXJldHVybiBuZXcgeShcbmUuc3Vic3RyKDIpLFwiaGV4XCIpO2Zvcih2YXIgdD1cIlwiLG49MDtuPGUubGVuZ3RoOylpZihlW25dIT09XCJcXFxcXCIpdCs9ZVtuXSwrK247ZWxzZSBpZigvWzAtN117M30vLlxudGVzdChlLnN1YnN0cihuKzEsMykpKXQrPVN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZS5zdWJzdHIobisxLDMpLDgpKSxuKz00O2Vsc2V7XG5mb3IodmFyIGk9MTtuK2k8ZS5sZW5ndGgmJmVbbitpXT09PVwiXFxcXFwiOylpKys7Zm9yKHZhciBzPTA7czxNYXRoLmZsb29yKGkvMik7KytzKXQrPVxuXCJcXFxcXCI7bis9TWF0aC5mbG9vcihpLzIpKjJ9cmV0dXJuIG5ldyB5KHQsXCJiaW5hcnlcIil9LFwicGFyc2VCeXRlYVwiKX0pO3ZhciBFaT1JKChMaCx2aSk9PntwKCk7dmFyIFZlPWp0KCksS2U9SHQoKSxjdD1jaSgpLHdpPWRpKCksYmk9bWkoKTtmdW5jdGlvbiBodChyKXtcbnJldHVybiBhKGZ1bmN0aW9uKHQpe3JldHVybiB0PT09bnVsbD90OnIodCl9LFwibnVsbEFsbG93ZWRcIil9YShodCxcImFsbG93TnVsbFwiKTtmdW5jdGlvbiBTaShyKXtcbnJldHVybiByPT09bnVsbD9yOnI9PT1cIlRSVUVcInx8cj09PVwidFwifHxyPT09XCJ0cnVlXCJ8fHI9PT1cInlcInx8cj09PVwieWVzXCJ8fHI9PT1cIm9uXCJ8fFxucj09PVwiMVwifWEoU2ksXCJwYXJzZUJvb2xcIik7ZnVuY3Rpb24gYmEocil7cmV0dXJuIHI/VmUucGFyc2UocixTaSk6bnVsbH1hKGJhLFwicGFyc1xcXG5lQm9vbEFycmF5XCIpO2Z1bmN0aW9uIFNhKHIpe3JldHVybiBwYXJzZUludChyLDEwKX1hKFNhLFwicGFyc2VCYXNlVGVuSW50XCIpO2Z1bmN0aW9uIFZ0KHIpe1xucmV0dXJuIHI/VmUucGFyc2UocixodChTYSkpOm51bGx9YShWdCxcInBhcnNlSW50ZWdlckFycmF5XCIpO2Z1bmN0aW9uIHhhKHIpe3JldHVybiByP1xuVmUucGFyc2UocixodChmdW5jdGlvbihlKXtyZXR1cm4geGkoZSkudHJpbSgpfSkpOm51bGx9YSh4YSxcInBhcnNlQmlnSW50ZWdlckFycmF5XCIpO1xudmFyIHZhPWEoZnVuY3Rpb24ocil7aWYoIXIpcmV0dXJuIG51bGw7dmFyIGU9S2UuY3JlYXRlKHIsZnVuY3Rpb24odCl7cmV0dXJuIHQhPT1cbm51bGwmJih0PVp0KHQpKSx0fSk7cmV0dXJuIGUucGFyc2UoKX0sXCJwYXJzZVBvaW50QXJyYXlcIiksS3Q9YShmdW5jdGlvbihyKXtpZighcilcbnJldHVybiBudWxsO3ZhciBlPUtlLmNyZWF0ZShyLGZ1bmN0aW9uKHQpe3JldHVybiB0IT09bnVsbCYmKHQ9cGFyc2VGbG9hdCh0KSksdH0pO1xucmV0dXJuIGUucGFyc2UoKX0sXCJwYXJzZUZsb2F0QXJyYXlcIikscmU9YShmdW5jdGlvbihyKXtpZighcilyZXR1cm4gbnVsbDt2YXIgZT1LZS5cbmNyZWF0ZShyKTtyZXR1cm4gZS5wYXJzZSgpfSxcInBhcnNlU3RyaW5nQXJyYXlcIiksenQ9YShmdW5jdGlvbihyKXtpZighcilyZXR1cm4gbnVsbDtcbnZhciBlPUtlLmNyZWF0ZShyLGZ1bmN0aW9uKHQpe3JldHVybiB0IT09bnVsbCYmKHQ9Y3QodCkpLHR9KTtyZXR1cm4gZS5wYXJzZSgpfSxcIlxcXG5wYXJzZURhdGVBcnJheVwiKSxFYT1hKGZ1bmN0aW9uKHIpe2lmKCFyKXJldHVybiBudWxsO3ZhciBlPUtlLmNyZWF0ZShyLGZ1bmN0aW9uKHQpe1xucmV0dXJuIHQhPT1udWxsJiYodD13aSh0KSksdH0pO3JldHVybiBlLnBhcnNlKCl9LFwicGFyc2VJbnRlcnZhbEFycmF5XCIpLF9hPWEoZnVuY3Rpb24ocil7XG5yZXR1cm4gcj9WZS5wYXJzZShyLGh0KGJpKSk6bnVsbH0sXCJwYXJzZUJ5dGVBQXJyYXlcIiksWXQ9YShmdW5jdGlvbihyKXtyZXR1cm4gcGFyc2VJbnQoXG5yLDEwKX0sXCJwYXJzZUludGVnZXJcIikseGk9YShmdW5jdGlvbihyKXt2YXIgZT1TdHJpbmcocik7cmV0dXJuL15cXGQrJC8udGVzdChlKT9lOlxucn0sXCJwYXJzZUJpZ0ludGVnZXJcIiksZ2k9YShmdW5jdGlvbihyKXtyZXR1cm4gcj9WZS5wYXJzZShyLGh0KEpTT04ucGFyc2UpKTpudWxsfSxcblwicGFyc2VKc29uQXJyYXlcIiksWnQ9YShmdW5jdGlvbihyKXtyZXR1cm4gclswXSE9PVwiKFwiP251bGw6KHI9ci5zdWJzdHJpbmcoMSxyLmxlbmd0aC1cbjEpLnNwbGl0KFwiLFwiKSx7eDpwYXJzZUZsb2F0KHJbMF0pLHk6cGFyc2VGbG9hdChyWzFdKX0pfSxcInBhcnNlUG9pbnRcIiksQWE9YShmdW5jdGlvbihyKXtcbmlmKHJbMF0hPT1cIjxcIiYmclsxXSE9PVwiKFwiKXJldHVybiBudWxsO2Zvcih2YXIgZT1cIihcIix0PVwiXCIsbj0hMSxpPTI7aTxyLmxlbmd0aC0xO2krKyl7XG5pZihufHwoZSs9cltpXSkscltpXT09PVwiKVwiKXtuPSEwO2NvbnRpbnVlfWVsc2UgaWYoIW4pY29udGludWU7cltpXSE9PVwiLFwiJiYodCs9cltpXSl9XG52YXIgcz1adChlKTtyZXR1cm4gcy5yYWRpdXM9cGFyc2VGbG9hdCh0KSxzfSxcInBhcnNlQ2lyY2xlXCIpLENhPWEoZnVuY3Rpb24ocil7cigyMCxcbnhpKSxyKDIxLFl0KSxyKDIzLFl0KSxyKDI2LFl0KSxyKDcwMCxwYXJzZUZsb2F0KSxyKDcwMSxwYXJzZUZsb2F0KSxyKDE2LFNpKSxyKDEwODIsXG5jdCkscigxMTE0LGN0KSxyKDExODQsY3QpLHIoNjAwLFp0KSxyKDY1MSxyZSkscig3MTgsQWEpLHIoMWUzLGJhKSxyKDEwMDEsX2EpLHIoMTAwNSxcblZ0KSxyKDEwMDcsVnQpLHIoMTAyOCxWdCkscigxMDE2LHhhKSxyKDEwMTcsdmEpLHIoMTAyMSxLdCkscigxMDIyLEt0KSxyKDEyMzEsS3QpLFxucigxMDE0LHJlKSxyKDEwMTUscmUpLHIoMTAwOCxyZSkscigxMDA5LHJlKSxyKDEwNDAscmUpLHIoMTA0MSxyZSkscigxMTE1LHp0KSxyKDExODIsXG56dCkscigxMTg1LHp0KSxyKDExODYsd2kpLHIoMTE4NyxFYSkscigxNyxiaSkscigxMTQsSlNPTi5wYXJzZS5iaW5kKEpTT04pKSxyKDM4MDIsXG5KU09OLnBhcnNlLmJpbmQoSlNPTikpLHIoMTk5LGdpKSxyKDM4MDcsZ2kpLHIoMzkwNyxyZSkscigyOTUxLHJlKSxyKDc5MSxyZSkscigxMTgzLFxucmUpLHIoMTI3MCxyZSl9LFwiaW5pdFwiKTt2aS5leHBvcnRzPXtpbml0OkNhfX0pO3ZhciBBaT1JKChNaCxfaSk9PntcInVzZSBzdHJpY3RcIjtwKCk7dmFyIFo9MWU2O2Z1bmN0aW9uIFRhKHIpe3ZhciBlPXIucmVhZEludDMyQkUoXG4wKSx0PXIucmVhZFVJbnQzMkJFKDQpLG49XCJcIjtlPDAmJihlPX5lKyh0PT09MCksdD1+dCsxPj4+MCxuPVwiLVwiKTt2YXIgaT1cIlwiLHMsbyx1LFxuYyxoLGw7e2lmKHM9ZSVaLGU9ZS9aPj4+MCxvPTQyOTQ5NjcyOTYqcyt0LHQ9by9aPj4+MCx1PVwiXCIrKG8tWip0KSx0PT09MCYmZT09PTApcmV0dXJuIG4rXG51K2k7Zm9yKGM9XCJcIixoPTYtdS5sZW5ndGgsbD0wO2w8aDtsKyspYys9XCIwXCI7aT1jK3UraX17aWYocz1lJVosZT1lL1o+Pj4wLG89NDI5NDk2NzI5NipcbnMrdCx0PW8vWj4+PjAsdT1cIlwiKyhvLVoqdCksdD09PTAmJmU9PT0wKXJldHVybiBuK3UraTtmb3IoYz1cIlwiLGg9Ni11Lmxlbmd0aCxsPTA7bDxcbmg7bCsrKWMrPVwiMFwiO2k9Yyt1K2l9e2lmKHM9ZSVaLGU9ZS9aPj4+MCxvPTQyOTQ5NjcyOTYqcyt0LHQ9by9aPj4+MCx1PVwiXCIrKG8tWip0KSxcbnQ9PT0wJiZlPT09MClyZXR1cm4gbit1K2k7Zm9yKGM9XCJcIixoPTYtdS5sZW5ndGgsbD0wO2w8aDtsKyspYys9XCIwXCI7aT1jK3UraX1yZXR1cm4gcz1cbmUlWixvPTQyOTQ5NjcyOTYqcyt0LHU9XCJcIitvJVosbit1K2l9YShUYSxcInJlYWRJbnQ4XCIpO19pLmV4cG9ydHM9VGF9KTt2YXIgQmk9SSgoVWgsUGkpPT57cCgpO3ZhciBJYT1BaSgpLEY9YShmdW5jdGlvbihyLGUsdCxuLGkpe3Q9dHx8MCxuPW58fCExLGk9aXx8ZnVuY3Rpb24oQyxCLFcpe1xucmV0dXJuIEMqTWF0aC5wb3coMixXKStCfTt2YXIgcz10Pj4zLG89YShmdW5jdGlvbihDKXtyZXR1cm4gbj9+QyYyNTU6Q30sXCJpbnZcIiksdT0yNTUsXG5jPTgtdCU4O2U8YyYmKHU9MjU1PDw4LWUmMjU1LGM9ZSksdCYmKHU9dT4+dCU4KTt2YXIgaD0wO3QlOCtlPj04JiYoaD1pKDAsbyhyW3NdKSZcbnUsYykpO2Zvcih2YXIgbD1lK3Q+PjMsZD1zKzE7ZDxsO2QrKyloPWkoaCxvKHJbZF0pLDgpO3ZhciBiPShlK3QpJTg7cmV0dXJuIGI+MCYmXG4oaD1pKGgsbyhyW2xdKT4+OC1iLGIpKSxofSxcInBhcnNlQml0c1wiKSxJaT1hKGZ1bmN0aW9uKHIsZSx0KXt2YXIgbj1NYXRoLnBvdygyLHQtXG4xKS0xLGk9RihyLDEpLHM9RihyLHQsMSk7aWYocz09PTApcmV0dXJuIDA7dmFyIG89MSx1PWEoZnVuY3Rpb24oaCxsLGQpe2g9PT0wJiYoaD1cbjEpO2Zvcih2YXIgYj0xO2I8PWQ7YisrKW8vPTIsKGwmMTw8ZC1iKT4wJiYoaCs9byk7cmV0dXJuIGh9LFwicGFyc2VQcmVjaXNpb25CaXRzXCIpLFxuYz1GKHIsZSx0KzEsITEsdSk7cmV0dXJuIHM9PU1hdGgucG93KDIsdCsxKS0xP2M9PT0wP2k9PT0wPzEvMDotMS8wOk5hTjooaT09PTA/MTpcbi0xKSpNYXRoLnBvdygyLHMtbikqY30sXCJwYXJzZUZsb2F0RnJvbUJpdHNcIiksUGE9YShmdW5jdGlvbihyKXtyZXR1cm4gRihyLDEpPT0xPy0xKlxuKEYociwxNSwxLCEwKSsxKTpGKHIsMTUsMSl9LFwicGFyc2VJbnQxNlwiKSxDaT1hKGZ1bmN0aW9uKHIpe3JldHVybiBGKHIsMSk9PTE/LTEqKEYoXG5yLDMxLDEsITApKzEpOkYociwzMSwxKX0sXCJwYXJzZUludDMyXCIpLEJhPWEoZnVuY3Rpb24ocil7cmV0dXJuIElpKHIsMjMsOCl9LFwicGFyc1xcXG5lRmxvYXQzMlwiKSxMYT1hKGZ1bmN0aW9uKHIpe3JldHVybiBJaShyLDUyLDExKX0sXCJwYXJzZUZsb2F0NjRcIiksUmE9YShmdW5jdGlvbihyKXtcbnZhciBlPUYociwxNiwzMik7aWYoZT09NDkxNTIpcmV0dXJuIE5hTjtmb3IodmFyIHQ9TWF0aC5wb3coMWU0LEYociwxNiwxNikpLG49MCxpPVtdLFxucz1GKHIsMTYpLG89MDtvPHM7bysrKW4rPUYociwxNiw2NCsxNipvKSp0LHQvPTFlNDt2YXIgdT1NYXRoLnBvdygxMCxGKHIsMTYsNDgpKTtcbnJldHVybihlPT09MD8xOi0xKSpNYXRoLnJvdW5kKG4qdSkvdX0sXCJwYXJzZU51bWVyaWNcIiksVGk9YShmdW5jdGlvbihyLGUpe3ZhciB0PUYoXG5lLDEpLG49RihlLDYzLDEpLGk9bmV3IERhdGUoKHQ9PT0wPzE6LTEpKm4vMWUzKzk0NjY4NDhlNSk7cmV0dXJuIHJ8fGkuc2V0VGltZShpLlxuZ2V0VGltZSgpK2kuZ2V0VGltZXpvbmVPZmZzZXQoKSo2ZTQpLGkudXNlYz1uJTFlMyxpLmdldE1pY3JvU2Vjb25kcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLlxudXNlY30saS5zZXRNaWNyb1NlY29uZHM9ZnVuY3Rpb24ocyl7dGhpcy51c2VjPXN9LGkuZ2V0VVRDTWljcm9TZWNvbmRzPWZ1bmN0aW9uKCl7XG5yZXR1cm4gdGhpcy51c2VjfSxpfSxcInBhcnNlRGF0ZVwiKSx6ZT1hKGZ1bmN0aW9uKHIpe2Zvcih2YXIgZT1GKHIsMzIpLHQ9RihyLDMyLDMyKSxcbm49RihyLDMyLDY0KSxpPTk2LHM9W10sbz0wO288ZTtvKyspc1tvXT1GKHIsMzIsaSksaSs9MzIsaSs9MzI7dmFyIHU9YShmdW5jdGlvbihoKXtcbnZhciBsPUYociwzMixpKTtpZihpKz0zMixsPT00Mjk0OTY3Mjk1KXJldHVybiBudWxsO3ZhciBkO2lmKGg9PTIzfHxoPT0yMClyZXR1cm4gZD1cbkYocixsKjgsaSksaSs9bCo4LGQ7aWYoaD09MjUpcmV0dXJuIGQ9ci50b1N0cmluZyh0aGlzLmVuY29kaW5nLGk+PjMsKGkrPWw8PDMpPj4zKSxcbmQ7Y29uc29sZS5sb2coXCJFUlJPUjogRWxlbWVudFR5cGUgbm90IGltcGxlbWVudGVkOiBcIitoKX0sXCJwYXJzZUVsZW1lbnRcIiksYz1hKGZ1bmN0aW9uKGgsbCl7XG52YXIgZD1bXSxiO2lmKGgubGVuZ3RoPjEpe3ZhciBDPWguc2hpZnQoKTtmb3IoYj0wO2I8QztiKyspZFtiXT1jKGgsbCk7aC51bnNoaWZ0KFxuQyl9ZWxzZSBmb3IoYj0wO2I8aFswXTtiKyspZFtiXT11KGwpO3JldHVybiBkfSxcInBhcnNlXCIpO3JldHVybiBjKHMsbil9LFwicGFyc2VBcnJcXFxuYXlcIiksRmE9YShmdW5jdGlvbihyKXtyZXR1cm4gci50b1N0cmluZyhcInV0ZjhcIil9LFwicGFyc2VUZXh0XCIpLE1hPWEoZnVuY3Rpb24ocil7cmV0dXJuIHI9PT1cbm51bGw/bnVsbDpGKHIsOCk+MH0sXCJwYXJzZUJvb2xcIiksRGE9YShmdW5jdGlvbihyKXtyKDIwLElhKSxyKDIxLFBhKSxyKDIzLENpKSxyKDI2LFxuQ2kpLHIoMTcwMCxSYSkscig3MDAsQmEpLHIoNzAxLExhKSxyKDE2LE1hKSxyKDExMTQsVGkuYmluZChudWxsLCExKSkscigxMTg0LFRpLmJpbmQoXG5udWxsLCEwKSkscigxZTMsemUpLHIoMTAwNyx6ZSkscigxMDE2LHplKSxyKDEwMDgsemUpLHIoMTAwOSx6ZSkscigyNSxGYSl9LFwiaW5pdFwiKTtcblBpLmV4cG9ydHM9e2luaXQ6RGF9fSk7dmFyIFJpPUkoKHFoLExpKT0+e3AoKTtMaS5leHBvcnRzPXtCT09MOjE2LEJZVEVBOjE3LENIQVI6MTgsSU5UODoyMCxJTlQyOjIxLElOVDQ6MjMsXG5SRUdQUk9DOjI0LFRFWFQ6MjUsT0lEOjI2LFRJRDoyNyxYSUQ6MjgsQ0lEOjI5LEpTT046MTE0LFhNTDoxNDIsUEdfTk9ERV9UUkVFOjE5NCxcblNNR1I6MjEwLFBBVEg6NjAyLFBPTFlHT046NjA0LENJRFI6NjUwLEZMT0FUNDo3MDAsRkxPQVQ4OjcwMSxBQlNUSU1FOjcwMixSRUxUSU1FOjcwMyxcblRJTlRFUlZBTDo3MDQsQ0lSQ0xFOjcxOCxNQUNBRERSODo3NzQsTU9ORVk6NzkwLE1BQ0FERFI6ODI5LElORVQ6ODY5LEFDTElURU06MTAzMyxcbkJQQ0hBUjoxMDQyLFZBUkNIQVI6MTA0MyxEQVRFOjEwODIsVElNRToxMDgzLFRJTUVTVEFNUDoxMTE0LFRJTUVTVEFNUFRaOjExODQsSU5URVJWQUw6MTE4NixcblRJTUVUWjoxMjY2LEJJVDoxNTYwLFZBUkJJVDoxNTYyLE5VTUVSSUM6MTcwMCxSRUZDVVJTT1I6MTc5MCxSRUdQUk9DRURVUkU6MjIwMixSRUdPUEVSOjIyMDMsXG5SRUdPUEVSQVRPUjoyMjA0LFJFR0NMQVNTOjIyMDUsUkVHVFlQRToyMjA2LFVVSUQ6Mjk1MCxUWElEX1NOQVBTSE9UOjI5NzAsUEdfTFNOOjMyMjAsXG5QR19ORElTVElOQ1Q6MzM2MSxQR19ERVBFTkRFTkNJRVM6MzQwMixUU1ZFQ1RPUjozNjE0LFRTUVVFUlk6MzYxNSxHVFNWRUNUT1I6MzY0MixcblJFR0NPTkZJRzozNzM0LFJFR0RJQ1RJT05BUlk6Mzc2OSxKU09OQjozODAyLFJFR05BTUVTUEFDRTo0MDg5LFJFR1JPTEU6NDA5Nn19KTt2YXIgSmU9SShaZT0+e3AoKTt2YXIga2E9RWkoKSxVYT1CaSgpLE9hPUh0KCksTmE9UmkoKTtaZS5nZXRUeXBlUGFyc2VyPXFhO1plLnNldFR5cGVQYXJzZXI9XG5RYTtaZS5hcnJheVBhcnNlcj1PYTtaZS5idWlsdGlucz1OYTt2YXIgWWU9e3RleHQ6e30sYmluYXJ5Ont9fTtmdW5jdGlvbiBGaShyKXtyZXR1cm4gU3RyaW5nKFxucil9YShGaSxcIm5vUGFyc2VcIik7ZnVuY3Rpb24gcWEocixlKXtyZXR1cm4gZT1lfHxcInRleHRcIixZZVtlXSYmWWVbZV1bcl18fEZpfWEocWEsXG5cImdldFR5cGVQYXJzZXJcIik7ZnVuY3Rpb24gUWEocixlLHQpe3R5cGVvZiBlPT1cImZ1bmN0aW9uXCImJih0PWUsZT1cInRleHRcIiksWWVbZV1bcl09XG50fWEoUWEsXCJzZXRUeXBlUGFyc2VyXCIpO2thLmluaXQoZnVuY3Rpb24ocixlKXtZZS50ZXh0W3JdPWV9KTtVYS5pbml0KGZ1bmN0aW9uKHIsZSl7XG5ZZS5iaW5hcnlbcl09ZX0pfSk7dmFyIFhlPUkoKEdoLEp0KT0+e1widXNlIHN0cmljdFwiO3AoKTtKdC5leHBvcnRzPXtob3N0OlwibG9jYWxob3N0XCIsdXNlcjptLnBsYXRmb3JtPT09XG5cIndpbjMyXCI/bS5lbnYuVVNFUk5BTUU6bS5lbnYuVVNFUixkYXRhYmFzZTp2b2lkIDAscGFzc3dvcmQ6bnVsbCxjb25uZWN0aW9uU3RyaW5nOnZvaWQgMCxcbnBvcnQ6NTQzMixyb3dzOjAsYmluYXJ5OiExLG1heDoxMCxpZGxlVGltZW91dE1pbGxpczozZTQsY2xpZW50X2VuY29kaW5nOlwiXCIsc3NsOiExLFxuYXBwbGljYXRpb25fbmFtZTp2b2lkIDAsZmFsbGJhY2tfYXBwbGljYXRpb25fbmFtZTp2b2lkIDAsb3B0aW9uczp2b2lkIDAscGFyc2VJbnB1dERhdGVzQXNVVEM6ITEsXG5zdGF0ZW1lbnRfdGltZW91dDohMSxsb2NrX3RpbWVvdXQ6ITEsaWRsZV9pbl90cmFuc2FjdGlvbl9zZXNzaW9uX3RpbWVvdXQ6ITEscXVlcnlfdGltZW91dDohMSxcbmNvbm5lY3RfdGltZW91dDowLGtlZXBhbGl2ZXM6MSxrZWVwYWxpdmVzX2lkbGU6MH07dmFyIE1lPUplKCksV2E9TWUuZ2V0VHlwZVBhcnNlcihcbjIwLFwidGV4dFwiKSxqYT1NZS5nZXRUeXBlUGFyc2VyKDEwMTYsXCJ0ZXh0XCIpO0p0LmV4cG9ydHMuX19kZWZpbmVTZXR0ZXJfXyhcInBhcnNlSW5cXFxudDhcIixmdW5jdGlvbihyKXtNZS5zZXRUeXBlUGFyc2VyKDIwLFwidGV4dFwiLHI/TWUuZ2V0VHlwZVBhcnNlcigyMyxcInRleHRcIik6V2EpLE1lLlxuc2V0VHlwZVBhcnNlcigxMDE2LFwidGV4dFwiLHI/TWUuZ2V0VHlwZVBhcnNlcigxMDA3LFwidGV4dFwiKTpqYSl9KX0pO3ZhciBldD1JKChWaCxEaSk9PntcInVzZSBzdHJpY3RcIjtwKCk7dmFyIEhhPShRdCgpLE4ocXQpKSxHYT1YZSgpO2Z1bmN0aW9uICRhKHIpe3ZhciBlPXIuXG5yZXBsYWNlKC9cXFxcL2csXCJcXFxcXFxcXFwiKS5yZXBsYWNlKC9cIi9nLCdcXFxcXCInKTtyZXR1cm4nXCInK2UrJ1wiJ31hKCRhLFwiZXNjYXBlRWxlbWVudFwiKTtcbmZ1bmN0aW9uIE1pKHIpe2Zvcih2YXIgZT1cIntcIix0PTA7dDxyLmxlbmd0aDt0KyspdD4wJiYoZT1lK1wiLFwiKSxyW3RdPT09bnVsbHx8dHlwZW9mIHJbdF0+XG5cInVcIj9lPWUrXCJOVUxMXCI6QXJyYXkuaXNBcnJheShyW3RdKT9lPWUrTWkoclt0XSk6clt0XWluc3RhbmNlb2YgeT9lKz1cIlxcXFxcXFxceFwiK3JbdF0uXG50b1N0cmluZyhcImhleFwiKTplKz0kYShsdChyW3RdKSk7cmV0dXJuIGU9ZStcIn1cIixlfWEoTWksXCJhcnJheVN0cmluZ1wiKTt2YXIgbHQ9YShmdW5jdGlvbihyLGUpe1xuaWYocj09bnVsbClyZXR1cm4gbnVsbDtpZihyIGluc3RhbmNlb2YgeSlyZXR1cm4gcjtpZihBcnJheUJ1ZmZlci5pc1ZpZXcocikpe3ZhciB0PXkuXG5mcm9tKHIuYnVmZmVyLHIuYnl0ZU9mZnNldCxyLmJ5dGVMZW5ndGgpO3JldHVybiB0Lmxlbmd0aD09PXIuYnl0ZUxlbmd0aD90OnQuc2xpY2UoXG5yLmJ5dGVPZmZzZXQsci5ieXRlT2Zmc2V0K3IuYnl0ZUxlbmd0aCl9cmV0dXJuIHIgaW5zdGFuY2VvZiBEYXRlP0dhLnBhcnNlSW5wdXREYXRlc0FzVVRDP1xuemEocik6S2Eocik6QXJyYXkuaXNBcnJheShyKT9NaShyKTp0eXBlb2Ygcj09XCJvYmplY3RcIj9WYShyLGUpOnIudG9TdHJpbmcoKX0sXCJwcmVcXFxucGFyZVZhbHVlXCIpO2Z1bmN0aW9uIFZhKHIsZSl7aWYociYmdHlwZW9mIHIudG9Qb3N0Z3Jlcz09XCJmdW5jdGlvblwiKXtpZihlPWV8fFtdLGUuXG5pbmRleE9mKHIpIT09LTEpdGhyb3cgbmV3IEVycm9yKCdjaXJjdWxhciByZWZlcmVuY2UgZGV0ZWN0ZWQgd2hpbGUgcHJlcGFyaW5nIFwiJytcbnIrJ1wiIGZvciBxdWVyeScpO3JldHVybiBlLnB1c2gociksbHQoci50b1Bvc3RncmVzKGx0KSxlKX1yZXR1cm4gSlNPTi5zdHJpbmdpZnkocil9XG5hKFZhLFwicHJlcGFyZU9iamVjdFwiKTtmdW5jdGlvbiBIKHIsZSl7Zm9yKHI9XCJcIityO3IubGVuZ3RoPGU7KXI9XCIwXCIrcjtyZXR1cm4gcn1hKFxuSCxcInBhZFwiKTtmdW5jdGlvbiBLYShyKXt2YXIgZT0tci5nZXRUaW1lem9uZU9mZnNldCgpLHQ9ci5nZXRGdWxsWWVhcigpLG49dDwxO24mJlxuKHQ9TWF0aC5hYnModCkrMSk7dmFyIGk9SCh0LDQpK1wiLVwiK0goci5nZXRNb250aCgpKzEsMikrXCItXCIrSChyLmdldERhdGUoKSwyKStcIlRcIitcbkgoci5nZXRIb3VycygpLDIpK1wiOlwiK0goci5nZXRNaW51dGVzKCksMikrXCI6XCIrSChyLmdldFNlY29uZHMoKSwyKStcIi5cIitIKHIuZ2V0TWlsbGlzZWNvbmRzKCksXG4zKTtyZXR1cm4gZTwwPyhpKz1cIi1cIixlKj0tMSk6aSs9XCIrXCIsaSs9SChNYXRoLmZsb29yKGUvNjApLDIpK1wiOlwiK0goZSU2MCwyKSxuJiYoaSs9XG5cIiBCQ1wiKSxpfWEoS2EsXCJkYXRlVG9TdHJpbmdcIik7ZnVuY3Rpb24gemEocil7dmFyIGU9ci5nZXRVVENGdWxsWWVhcigpLHQ9ZTwxO3QmJihlPVxuTWF0aC5hYnMoZSkrMSk7dmFyIG49SChlLDQpK1wiLVwiK0goci5nZXRVVENNb250aCgpKzEsMikrXCItXCIrSChyLmdldFVUQ0RhdGUoKSwyKStcIlxcXG5UXCIrSChyLmdldFVUQ0hvdXJzKCksMikrXCI6XCIrSChyLmdldFVUQ01pbnV0ZXMoKSwyKStcIjpcIitIKHIuZ2V0VVRDU2Vjb25kcygpLDIpK1wiLlwiK1xuSChyLmdldFVUQ01pbGxpc2Vjb25kcygpLDMpO3JldHVybiBuKz1cIiswMDowMFwiLHQmJihuKz1cIiBCQ1wiKSxufWEoemEsXCJkYXRlVG9TdHJpblxcXG5nVVRDXCIpO2Z1bmN0aW9uIFlhKHIsZSx0KXtyZXR1cm4gcj10eXBlb2Ygcj09XCJzdHJpbmdcIj97dGV4dDpyfTpyLGUmJih0eXBlb2YgZT09XCJcXFxuZnVuY3Rpb25cIj9yLmNhbGxiYWNrPWU6ci52YWx1ZXM9ZSksdCYmKHIuY2FsbGJhY2s9dCkscn1hKFlhLFwibm9ybWFsaXplUXVlcnlDb25maVxcXG5nXCIpO3ZhciBYdD1hKGZ1bmN0aW9uKHIpe3JldHVybiBIYS5jcmVhdGVIYXNoKFwibWQ1XCIpLnVwZGF0ZShyLFwidXRmLThcIikuZGlnZXN0KFwiaFxcXG5leFwiKX0sXCJtZDVcIiksWmE9YShmdW5jdGlvbihyLGUsdCl7dmFyIG49WHQoZStyKSxpPVh0KHkuY29uY2F0KFt5LmZyb20obiksdF0pKTtyZXR1cm5cIlxcXG5tZDVcIitpfSxcInBvc3RncmVzTWQ1UGFzc3dvcmRIYXNoXCIpO0RpLmV4cG9ydHM9e3ByZXBhcmVWYWx1ZTphKGZ1bmN0aW9uKGUpe3JldHVybiBsdChcbmUpfSxcInByZXBhcmVWYWx1ZVdyYXBwZXJcIiksbm9ybWFsaXplUXVlcnlDb25maWc6WWEscG9zdGdyZXNNZDVQYXNzd29yZEhhc2g6WmEsbWQ1Olh0fX0pO3ZhciBxaT1JKChZaCxOaSk9PntcInVzZSBzdHJpY3RcIjtwKCk7dmFyIGVyPShRdCgpLE4ocXQpKTtmdW5jdGlvbiBKYShyKXtpZihyLmluZGV4T2YoXG5cIlNDUkFNLVNIQS0yNTZcIik9PT0tMSl0aHJvdyBuZXcgRXJyb3IoXCJTQVNMOiBPbmx5IG1lY2hhbmlzbSBTQ1JBTS1TSEEtMjU2IGlzIGN1clxcXG5yZW50bHkgc3VwcG9ydGVkXCIpO2xldCBlPWVyLnJhbmRvbUJ5dGVzKDE4KS50b1N0cmluZyhcImJhc2U2NFwiKTtyZXR1cm57bWVjaGFuaXNtOlwiXFxcblNDUkFNLVNIQS0yNTZcIixjbGllbnROb25jZTplLHJlc3BvbnNlOlwibiwsbj0qLHI9XCIrZSxtZXNzYWdlOlwiU0FTTEluaXRpYWxSZXNwb25zZVwifX1cbmEoSmEsXCJzdGFydFNlc3Npb25cIik7ZnVuY3Rpb24gWGEocixlLHQpe2lmKHIubWVzc2FnZSE9PVwiU0FTTEluaXRpYWxSZXNwb25zZVwiKXRocm93IG5ldyBFcnJvcihcblwiU0FTTDogTGFzdCBtZXNzYWdlIHdhcyBub3QgU0FTTEluaXRpYWxSZXNwb25zZVwiKTtpZih0eXBlb2YgZSE9XCJzdHJpbmdcIil0aHJvdyBuZXcgRXJyb3IoXG5cIlNBU0w6IFNDUkFNLVNFUlZFUi1GSVJTVC1NRVNTQUdFOiBjbGllbnQgcGFzc3dvcmQgbXVzdCBiZSBhIHN0cmluZ1wiKTtpZih0eXBlb2YgdCE9XG5cInN0cmluZ1wiKXRocm93IG5ldyBFcnJvcihcIlNBU0w6IFNDUkFNLVNFUlZFUi1GSVJTVC1NRVNTQUdFOiBzZXJ2ZXJEYXRhIG11c3QgYmUgYVxcXG4gc3RyaW5nXCIpO2xldCBuPXJ1KHQpO2lmKG4ubm9uY2Uuc3RhcnRzV2l0aChyLmNsaWVudE5vbmNlKSl7aWYobi5ub25jZS5sZW5ndGg9PT1cbnIuY2xpZW50Tm9uY2UubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIlNBU0w6IFNDUkFNLVNFUlZFUi1GSVJTVC1NRVNTQUdFOiBzZXJ2ZXIgblxcXG5vbmNlIGlzIHRvbyBzaG9ydFwiKX1lbHNlIHRocm93IG5ldyBFcnJvcihcIlNBU0w6IFNDUkFNLVNFUlZFUi1GSVJTVC1NRVNTQUdFOiBzZXJ2XFxcbmVyIG5vbmNlIGRvZXMgbm90IHN0YXJ0IHdpdGggY2xpZW50IG5vbmNlXCIpO3ZhciBpPXkuZnJvbShuLnNhbHQsXCJiYXNlNjRcIikscz1zdShlLFxuaSxuLml0ZXJhdGlvbiksbz1EZShzLFwiQ2xpZW50IEtleVwiKSx1PWl1KG8pLGM9XCJuPSoscj1cIityLmNsaWVudE5vbmNlLGg9XCJyPVwiK24ubm9uY2UrXG5cIixzPVwiK24uc2FsdCtcIixpPVwiK24uaXRlcmF0aW9uLGw9XCJjPWJpd3Mscj1cIituLm5vbmNlLGQ9YytcIixcIitoK1wiLFwiK2wsYj1EZSh1LGQpLEM9T2koXG5vLGIpLEI9Qy50b1N0cmluZyhcImJhc2U2NFwiKSxXPURlKHMsXCJTZXJ2ZXIgS2V5XCIpLFg9RGUoVyxkKTtyLm1lc3NhZ2U9XCJTQVNMUmVzcG9uXFxcbnNlXCIsci5zZXJ2ZXJTaWduYXR1cmU9WC50b1N0cmluZyhcImJhc2U2NFwiKSxyLnJlc3BvbnNlPWwrXCIscD1cIitCfWEoWGEsXCJjb250aW51ZVNlXFxcbnNzaW9uXCIpO2Z1bmN0aW9uIGV1KHIsZSl7aWYoci5tZXNzYWdlIT09XCJTQVNMUmVzcG9uc2VcIil0aHJvdyBuZXcgRXJyb3IoXCJTQVNMOiBMYVxcXG5zdCBtZXNzYWdlIHdhcyBub3QgU0FTTFJlc3BvbnNlXCIpO2lmKHR5cGVvZiBlIT1cInN0cmluZ1wiKXRocm93IG5ldyBFcnJvcihcIlNBU0w6IFNcXFxuQ1JBTS1TRVJWRVItRklOQUwtTUVTU0FHRTogc2VydmVyRGF0YSBtdXN0IGJlIGEgc3RyaW5nXCIpO2xldHtzZXJ2ZXJTaWduYXR1cmU6dH09bnUoXG5lKTtpZih0IT09ci5zZXJ2ZXJTaWduYXR1cmUpdGhyb3cgbmV3IEVycm9yKFwiU0FTTDogU0NSQU0tU0VSVkVSLUZJTkFMLU1FU1NBR0U6IHNcXFxuZXJ2ZXIgc2lnbmF0dXJlIGRvZXMgbm90IG1hdGNoXCIpfWEoZXUsXCJmaW5hbGl6ZVNlc3Npb25cIik7ZnVuY3Rpb24gdHUocil7aWYodHlwZW9mIHIhPVxuXCJzdHJpbmdcIil0aHJvdyBuZXcgVHlwZUVycm9yKFwiU0FTTDogdGV4dCBtdXN0IGJlIGEgc3RyaW5nXCIpO3JldHVybiByLnNwbGl0KFwiXCIpLm1hcChcbihlLHQpPT5yLmNoYXJDb2RlQXQodCkpLmV2ZXJ5KGU9PmU+PTMzJiZlPD00M3x8ZT49NDUmJmU8PTEyNil9YSh0dSxcImlzUHJpbnRhYmxlQ1xcXG5oYXJzXCIpO2Z1bmN0aW9uIGtpKHIpe3JldHVybi9eKD86W2EtekEtWjAtOSsvXXs0fSkqKD86W2EtekEtWjAtOSsvXXsyfT09fFthLXpBLVowLTkrL117M309KT8kLy5cbnRlc3Qocil9YShraSxcImlzQmFzZTY0XCIpO2Z1bmN0aW9uIFVpKHIpe2lmKHR5cGVvZiByIT1cInN0cmluZ1wiKXRocm93IG5ldyBUeXBlRXJyb3IoXG5cIlNBU0w6IGF0dHJpYnV0ZSBwYWlycyB0ZXh0IG11c3QgYmUgYSBzdHJpbmdcIik7cmV0dXJuIG5ldyBNYXAoci5zcGxpdChcIixcIikubWFwKGU9PntcbmlmKCEvXi49Ly50ZXN0KGUpKXRocm93IG5ldyBFcnJvcihcIlNBU0w6IEludmFsaWQgYXR0cmlidXRlIHBhaXIgZW50cnlcIik7bGV0IHQ9ZVswXSxcbm49ZS5zdWJzdHJpbmcoMik7cmV0dXJuW3Qsbl19KSl9YShVaSxcInBhcnNlQXR0cmlidXRlUGFpcnNcIik7ZnVuY3Rpb24gcnUocil7bGV0IGU9VWkoXG5yKSx0PWUuZ2V0KFwiclwiKTtpZih0KXtpZighdHUodCkpdGhyb3cgbmV3IEVycm9yKFwiU0FTTDogU0NSQU0tU0VSVkVSLUZJUlNULU1FU1NBR1xcXG5FOiBub25jZSBtdXN0IG9ubHkgY29udGFpbiBwcmludGFibGUgY2hhcmFjdGVyc1wiKX1lbHNlIHRocm93IG5ldyBFcnJvcihcIlNBU0w6IFNDXFxcblJBTS1TRVJWRVItRklSU1QtTUVTU0FHRTogbm9uY2UgbWlzc2luZ1wiKTtsZXQgbj1lLmdldChcInNcIik7aWYobil7aWYoIWtpKG4pKXRocm93IG5ldyBFcnJvcihcblwiU0FTTDogU0NSQU0tU0VSVkVSLUZJUlNULU1FU1NBR0U6IHNhbHQgbXVzdCBiZSBiYXNlNjRcIil9ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJTXFxcbkFTTDogU0NSQU0tU0VSVkVSLUZJUlNULU1FU1NBR0U6IHNhbHQgbWlzc2luZ1wiKTtsZXQgaT1lLmdldChcImlcIik7aWYoaSl7aWYoIS9eWzEtOV1bMC05XSokLy5cbnRlc3QoaSkpdGhyb3cgbmV3IEVycm9yKFwiU0FTTDogU0NSQU0tU0VSVkVSLUZJUlNULU1FU1NBR0U6IGludmFsaWQgaXRlcmF0aW9uIGNvdVxcXG5udFwiKX1lbHNlIHRocm93IG5ldyBFcnJvcihcIlNBU0w6IFNDUkFNLVNFUlZFUi1GSVJTVC1NRVNTQUdFOiBpdGVyYXRpb24gbWlzc2luZ1wiKTtcbmxldCBzPXBhcnNlSW50KGksMTApO3JldHVybntub25jZTp0LHNhbHQ6bixpdGVyYXRpb246c319YShydSxcInBhcnNlU2VydmVyRmlyc3RNZVxcXG5zc2FnZVwiKTtmdW5jdGlvbiBudShyKXtsZXQgdD1VaShyKS5nZXQoXCJ2XCIpO2lmKHQpe2lmKCFraSh0KSl0aHJvdyBuZXcgRXJyb3IoXCJTQVNcXFxuTDogU0NSQU0tU0VSVkVSLUZJTkFMLU1FU1NBR0U6IHNlcnZlciBzaWduYXR1cmUgbXVzdCBiZSBiYXNlNjRcIil9ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXG5cIlNBU0w6IFNDUkFNLVNFUlZFUi1GSU5BTC1NRVNTQUdFOiBzZXJ2ZXIgc2lnbmF0dXJlIGlzIG1pc3NpbmdcIik7cmV0dXJue3NlcnZlclNpZ25hdHVyZTp0fX1cbmEobnUsXCJwYXJzZVNlcnZlckZpbmFsTWVzc2FnZVwiKTtmdW5jdGlvbiBPaShyLGUpe2lmKCF5LmlzQnVmZmVyKHIpKXRocm93IG5ldyBUeXBlRXJyb3IoXG5cImZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXJcIik7aWYoIXkuaXNCdWZmZXIoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcInNlY29uZFxcXG4gYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlclwiKTtpZihyLmxlbmd0aCE9PWUubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkJ1ZmZlciBsZW5nXFxcbnRocyBtdXN0IG1hdGNoXCIpO2lmKHIubGVuZ3RoPT09MCl0aHJvdyBuZXcgRXJyb3IoXCJCdWZmZXJzIGNhbm5vdCBiZSBlbXB0eVwiKTtyZXR1cm4geS5cbmZyb20oci5tYXAoKHQsbik9PnJbbl1eZVtuXSkpfWEoT2ksXCJ4b3JCdWZmZXJzXCIpO2Z1bmN0aW9uIGl1KHIpe3JldHVybiBlci5jcmVhdGVIYXNoKFxuXCJzaGEyNTZcIikudXBkYXRlKHIpLmRpZ2VzdCgpfWEoaXUsXCJzaGEyNTZcIik7ZnVuY3Rpb24gRGUocixlKXtyZXR1cm4gZXIuY3JlYXRlSG1hYyhcblwic2hhMjU2XCIscikudXBkYXRlKGUpLmRpZ2VzdCgpfWEoRGUsXCJobWFjU2hhMjU2XCIpO2Z1bmN0aW9uIHN1KHIsZSx0KXtmb3IodmFyIG49RGUoXG5yLHkuY29uY2F0KFtlLHkuZnJvbShbMCwwLDAsMV0pXSkpLGk9bixzPTA7czx0LTE7cysrKW49RGUocixuKSxpPU9pKGksbik7cmV0dXJuIGl9XG5hKHN1LFwiSGlcIik7TmkuZXhwb3J0cz17c3RhcnRTZXNzaW9uOkphLGNvbnRpbnVlU2Vzc2lvbjpYYSxmaW5hbGl6ZVNlc3Npb246ZXV9fSk7dmFyIHRyPXt9O2llKHRyLHtqb2luOigpPT5vdX0pO2Z1bmN0aW9uIG91KC4uLnIpe3JldHVybiByLmpvaW4oXCIvXCIpfXZhciBycj16KCgpPT57XG5cInVzZSBzdHJpY3RcIjtwKCk7YShvdSxcImpvaW5cIil9KTt2YXIgbnI9e307aWUobnIse3N0YXQ6KCk9PmF1fSk7ZnVuY3Rpb24gYXUocixlKXtlKG5ldyBFcnJvcihcIk5vIGZpbGVzeXN0ZW1cIikpfXZhciBpcj16KFxuKCk9PntcInVzZSBzdHJpY3RcIjtwKCk7YShhdSxcInN0YXRcIil9KTt2YXIgc3I9e307aWUoc3Ise2RlZmF1bHQ6KCk9PnV1fSk7dmFyIHV1LG9yPXooKCk9PntcInVzZSBzdHJpY3RcIjtwKCk7dXU9e319KTt2YXIgUWk9e307aWUoUWkse1N0cmluZ0RlY29kZXI6KCk9PmFyfSk7dmFyIHVyLGFyLFdpPXooKCk9PntcInVzZSBzdHJpY3RcIjtwKCk7dXI9XG5jbGFzcyB1cntjb25zdHJ1Y3RvcihlKXtfKHRoaXMsXCJ0ZFwiKTt0aGlzLnRkPW5ldyBUZXh0RGVjb2RlcihlKX13cml0ZShlKXtyZXR1cm4gdGhpcy5cbnRkLmRlY29kZShlLHtzdHJlYW06ITB9KX1lbmQoZSl7cmV0dXJuIHRoaXMudGQuZGVjb2RlKGUpfX07YSh1cixcIlN0cmluZ0RlY29kZXJcIik7XG5hcj11cn0pO3ZhciAkaT1JKChvbCxHaSk9PntcInVzZSBzdHJpY3RcIjtwKCk7dmFye1RyYW5zZm9ybTpjdX09KG9yKCksTihzcikpLHtTdHJpbmdEZWNvZGVyOmh1fT0oV2koKSxOKFFpKSksXG5iZT1TeW1ib2woXCJsYXN0XCIpLGZ0PVN5bWJvbChcImRlY29kZXJcIik7ZnVuY3Rpb24gbHUocixlLHQpe2xldCBuO2lmKHRoaXMub3ZlcmZsb3cpe1xuaWYobj10aGlzW2Z0XS53cml0ZShyKS5zcGxpdCh0aGlzLm1hdGNoZXIpLG4ubGVuZ3RoPT09MSlyZXR1cm4gdCgpO24uc2hpZnQoKSx0aGlzLlxub3ZlcmZsb3c9ITF9ZWxzZSB0aGlzW2JlXSs9dGhpc1tmdF0ud3JpdGUociksbj10aGlzW2JlXS5zcGxpdCh0aGlzLm1hdGNoZXIpO3RoaXNbYmVdPVxubi5wb3AoKTtmb3IobGV0IGk9MDtpPG4ubGVuZ3RoO2krKyl0cnl7SGkodGhpcyx0aGlzLm1hcHBlcihuW2ldKSl9Y2F0Y2gocyl7cmV0dXJuIHQoXG5zKX1pZih0aGlzLm92ZXJmbG93PXRoaXNbYmVdLmxlbmd0aD50aGlzLm1heExlbmd0aCx0aGlzLm92ZXJmbG93JiYhdGhpcy5za2lwT3ZlcmZsb3cpe1xudChuZXcgRXJyb3IoXCJtYXhpbXVtIGJ1ZmZlciByZWFjaGVkXCIpKTtyZXR1cm59dCgpfWEobHUsXCJ0cmFuc2Zvcm1cIik7ZnVuY3Rpb24gZnUocil7XG5pZih0aGlzW2JlXSs9dGhpc1tmdF0uZW5kKCksdGhpc1tiZV0pdHJ5e0hpKHRoaXMsdGhpcy5tYXBwZXIodGhpc1tiZV0pKX1jYXRjaChlKXtcbnJldHVybiByKGUpfXIoKX1hKGZ1LFwiZmx1c2hcIik7ZnVuY3Rpb24gSGkocixlKXtlIT09dm9pZCAwJiZyLnB1c2goZSl9YShIaSxcInB1c2hcIik7XG5mdW5jdGlvbiBqaShyKXtyZXR1cm4gcn1hKGppLFwibm9vcFwiKTtmdW5jdGlvbiBwdShyLGUsdCl7c3dpdGNoKHI9cnx8L1xccj9cXG4vLGU9ZXx8XG5qaSx0PXR8fHt9LGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgMTp0eXBlb2Ygcj09XCJmdW5jdGlvblwiPyhlPXIscj0vXFxyP1xcbi8pOnR5cGVvZiByPT1cblwib2JqZWN0XCImJiEociBpbnN0YW5jZW9mIFJlZ0V4cCkmJiFyW1N5bWJvbC5zcGxpdF0mJih0PXIscj0vXFxyP1xcbi8pO2JyZWFrO2Nhc2UgMjpcbnR5cGVvZiByPT1cImZ1bmN0aW9uXCI/KHQ9ZSxlPXIscj0vXFxyP1xcbi8pOnR5cGVvZiBlPT1cIm9iamVjdFwiJiYodD1lLGU9amkpfXQ9T2JqZWN0LlxuYXNzaWduKHt9LHQpLHQuYXV0b0Rlc3Ryb3k9ITAsdC50cmFuc2Zvcm09bHUsdC5mbHVzaD1mdSx0LnJlYWRhYmxlT2JqZWN0TW9kZT0hMDtcbmxldCBuPW5ldyBjdSh0KTtyZXR1cm4gbltiZV09XCJcIixuW2Z0XT1uZXcgaHUoXCJ1dGY4XCIpLG4ubWF0Y2hlcj1yLG4ubWFwcGVyPWUsbi5tYXhMZW5ndGg9XG50Lm1heExlbmd0aCxuLnNraXBPdmVyZmxvdz10LnNraXBPdmVyZmxvd3x8ITEsbi5vdmVyZmxvdz0hMSxuLl9kZXN0cm95PWZ1bmN0aW9uKGkscyl7XG50aGlzLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZD0hMSxzKGkpfSxufWEocHUsXCJzcGxpdFwiKTtHaS5leHBvcnRzPXB1fSk7dmFyIHppPUkoKGNsLHBlKT0+e1widXNlIHN0cmljdFwiO3AoKTt2YXIgVmk9KHJyKCksTih0cikpLGR1PShvcigpLE4oc3IpKS5TdHJlYW0seXU9JGkoKSxcbktpPShIZSgpLE4oamUpKSxtdT01NDMyLHB0PW0ucGxhdGZvcm09PT1cIndpbjMyXCIsdHQ9bS5zdGRlcnIsZ3U9NTYsd3U9NyxidT02MTQ0MCxcblN1PTMyNzY4O2Z1bmN0aW9uIHh1KHIpe3JldHVybihyJmJ1KT09U3V9YSh4dSxcImlzUmVnRmlsZVwiKTt2YXIga2U9W1wiaG9zdFwiLFwicG9ydFwiLFxuXCJkYXRhYmFzZVwiLFwidXNlclwiLFwicGFzc3dvcmRcIl0sY3I9a2UubGVuZ3RoLHZ1PWtlW2NyLTFdO2Z1bmN0aW9uIGhyKCl7dmFyIHI9dHQgaW5zdGFuY2VvZlxuZHUmJnR0LndyaXRhYmxlPT09ITA7aWYocil7dmFyIGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5jb25jYXQoYFxuYCk7dHQud3JpdGUoS2kuZm9ybWF0LmFwcGx5KEtpLGUpKX19YShocixcIndhcm5cIik7T2JqZWN0LmRlZmluZVByb3BlcnR5KHBlLmV4cG9ydHMsXG5cImlzV2luXCIse2dldDphKGZ1bmN0aW9uKCl7cmV0dXJuIHB0fSxcImdldFwiKSxzZXQ6YShmdW5jdGlvbihyKXtwdD1yfSxcInNldFwiKX0pO3BlLlxuZXhwb3J0cy53YXJuVG89ZnVuY3Rpb24ocil7dmFyIGU9dHQ7cmV0dXJuIHR0PXIsZX07cGUuZXhwb3J0cy5nZXRGaWxlTmFtZT1mdW5jdGlvbihyKXtcbnZhciBlPXJ8fG0uZW52LHQ9ZS5QR1BBU1NGSUxFfHwocHQ/Vmkuam9pbihlLkFQUERBVEF8fFwiLi9cIixcInBvc3RncmVzcWxcIixcInBncGFzcy5cXFxuY29uZlwiKTpWaS5qb2luKGUuSE9NRXx8XCIuL1wiLFwiLnBncGFzc1wiKSk7cmV0dXJuIHR9O3BlLmV4cG9ydHMudXNlUGdQYXNzPWZ1bmN0aW9uKHIsZSl7XG5yZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0uZW52LFwiUEdQQVNTV09SRFwiKT8hMTpwdD8hMDooZT1lfHxcIlxcXG48dW5rbj5cIix4dShyLm1vZGUpP3IubW9kZSYoZ3V8d3UpPyhocignV0FSTklORzogcGFzc3dvcmQgZmlsZSBcIiVzXCIgaGFzIGdyb3VwIG9yIFxcXG53b3JsZCBhY2Nlc3M7IHBlcm1pc3Npb25zIHNob3VsZCBiZSB1PXJ3ICgwNjAwKSBvciBsZXNzJyxlKSwhMSk6ITA6KGhyKCdXQVJOSU5HOlxcXG4gcGFzc3dvcmQgZmlsZSBcIiVzXCIgaXMgbm90IGEgcGxhaW4gZmlsZScsZSksITEpKX07dmFyIEV1PXBlLmV4cG9ydHMubWF0Y2g9ZnVuY3Rpb24ocixlKXtcbnJldHVybiBrZS5zbGljZSgwLC0xKS5yZWR1Y2UoZnVuY3Rpb24odCxuLGkpe3JldHVybiBpPT0xJiZOdW1iZXIocltuXXx8bXUpPT09TnVtYmVyKFxuZVtuXSk/dCYmITA6dCYmKGVbbl09PT1cIipcInx8ZVtuXT09PXJbbl0pfSwhMCl9O3BlLmV4cG9ydHMuZ2V0UGFzc3dvcmQ9ZnVuY3Rpb24ocixlLHQpe1xudmFyIG4saT1lLnBpcGUoeXUoKSk7ZnVuY3Rpb24gcyhjKXt2YXIgaD1fdShjKTtoJiZBdShoKSYmRXUocixoKSYmKG49aFt2dV0saS5lbmQoKSl9XG5hKHMsXCJvbkxpbmVcIik7dmFyIG89YShmdW5jdGlvbigpe2UuZGVzdHJveSgpLHQobil9LFwib25FbmRcIiksdT1hKGZ1bmN0aW9uKGMpe2UuZGVzdHJveSgpLFxuaHIoXCJXQVJOSU5HOiBlcnJvciBvbiByZWFkaW5nIGZpbGU6ICVzXCIsYyksdCh2b2lkIDApfSxcIm9uRXJyXCIpO2Uub24oXCJlcnJvclwiLHUpLGkuXG5vbihcImRhdGFcIixzKS5vbihcImVuZFwiLG8pLm9uKFwiZXJyb3JcIix1KX07dmFyIF91PXBlLmV4cG9ydHMucGFyc2VMaW5lPWZ1bmN0aW9uKHIpe1xuaWYoci5sZW5ndGg8MTF8fHIubWF0Y2goL15cXHMrIy8pKXJldHVybiBudWxsO2Zvcih2YXIgZT1cIlwiLHQ9XCJcIixuPTAsaT0wLHM9MCxvPXt9LFxudT0hMSxjPWEoZnVuY3Rpb24obCxkLGIpe3ZhciBDPXIuc3Vic3RyaW5nKGQsYik7T2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobS5lbnYsXG5cIlBHUEFTU19OT19ERUVTQ0FQRVwiKXx8KEM9Qy5yZXBsYWNlKC9cXFxcKFs6XFxcXF0pL2csXCIkMVwiKSksb1trZVtsXV09Q30sXCJhZGRUb09ialwiKSxcbmg9MDtoPHIubGVuZ3RoLTE7aCs9MSl7aWYoZT1yLmNoYXJBdChoKzEpLHQ9ci5jaGFyQXQoaCksdT1uPT1jci0xLHUpe2MobixpKTticmVha31cbmg+PTAmJmU9PVwiOlwiJiZ0IT09XCJcXFxcXCImJihjKG4saSxoKzEpLGk9aCsyLG4rPTEpfXJldHVybiBvPU9iamVjdC5rZXlzKG8pLmxlbmd0aD09PVxuY3I/bzpudWxsLG99LEF1PXBlLmV4cG9ydHMuaXNWYWxpZEVudHJ5PWZ1bmN0aW9uKHIpe2Zvcih2YXIgZT17MDpmdW5jdGlvbihvKXtyZXR1cm4gby5cbmxlbmd0aD4wfSwxOmZ1bmN0aW9uKG8pe3JldHVybiBvPT09XCIqXCI/ITA6KG89TnVtYmVyKG8pLGlzRmluaXRlKG8pJiZvPjAmJm88OTAwNzE5OTI1NDc0MDk5MiYmXG5NYXRoLmZsb29yKG8pPT09byl9LDI6ZnVuY3Rpb24obyl7cmV0dXJuIG8ubGVuZ3RoPjB9LDM6ZnVuY3Rpb24obyl7cmV0dXJuIG8ubGVuZ3RoPlxuMH0sNDpmdW5jdGlvbihvKXtyZXR1cm4gby5sZW5ndGg+MH19LHQ9MDt0PGtlLmxlbmd0aDt0Kz0xKXt2YXIgbj1lW3RdLGk9cltrZVt0XV18fFxuXCJcIixzPW4oaSk7aWYoIXMpcmV0dXJuITF9cmV0dXJuITB9fSk7dmFyIFppPUkoKHBsLGxyKT0+e1widXNlIHN0cmljdFwiO3AoKTt2YXIgZmw9KHJyKCksTih0cikpLFlpPShpcigpLE4obnIpKSxkdD16aSgpO1xubHIuZXhwb3J0cz1mdW5jdGlvbihyLGUpe3ZhciB0PWR0LmdldEZpbGVOYW1lKCk7WWkuc3RhdCh0LGZ1bmN0aW9uKG4saSl7aWYobnx8IWR0LlxudXNlUGdQYXNzKGksdCkpcmV0dXJuIGUodm9pZCAwKTt2YXIgcz1ZaS5jcmVhdGVSZWFkU3RyZWFtKHQpO2R0LmdldFBhc3N3b3JkKHIscyxcbmUpfSl9O2xyLmV4cG9ydHMud2FyblRvPWR0Lndhcm5Ub30pO3ZhciBtdD1JKCh5bCxKaSk9PntcInVzZSBzdHJpY3RcIjtwKCk7dmFyIEN1PUplKCk7ZnVuY3Rpb24geXQocil7dGhpcy5fdHlwZXM9cnx8Q3UsXG50aGlzLnRleHQ9e30sdGhpcy5iaW5hcnk9e319YSh5dCxcIlR5cGVPdmVycmlkZXNcIik7eXQucHJvdG90eXBlLmdldE92ZXJyaWRlcz1mdW5jdGlvbihyKXtcbnN3aXRjaChyKXtjYXNlXCJ0ZXh0XCI6cmV0dXJuIHRoaXMudGV4dDtjYXNlXCJiaW5hcnlcIjpyZXR1cm4gdGhpcy5iaW5hcnk7ZGVmYXVsdDpyZXR1cm57fX19O1xueXQucHJvdG90eXBlLnNldFR5cGVQYXJzZXI9ZnVuY3Rpb24ocixlLHQpe3R5cGVvZiBlPT1cImZ1bmN0aW9uXCImJih0PWUsZT1cInRleHRcIiksXG50aGlzLmdldE92ZXJyaWRlcyhlKVtyXT10fTt5dC5wcm90b3R5cGUuZ2V0VHlwZVBhcnNlcj1mdW5jdGlvbihyLGUpe3JldHVybiBlPWV8fFxuXCJ0ZXh0XCIsdGhpcy5nZXRPdmVycmlkZXMoZSlbcl18fHRoaXMuX3R5cGVzLmdldFR5cGVQYXJzZXIocixlKX07SmkuZXhwb3J0cz15dH0pO3ZhciBYaT17fTtpZShYaSx7ZGVmYXVsdDooKT0+VHV9KTt2YXIgVHUsZXM9eigoKT0+e1widXNlIHN0cmljdFwiO3AoKTtUdT17fX0pO3ZhciB0cz17fTtpZSh0cyx7cGFyc2U6KCk9PmZyfSk7ZnVuY3Rpb24gZnIocixlPSExKXtsZXR7cHJvdG9jb2w6dH09bmV3IFVSTChyKSxuPVwiXFxcbmh0dHA6XCIrci5zdWJzdHJpbmcodC5sZW5ndGgpLHt1c2VybmFtZTppLHBhc3N3b3JkOnMsaG9zdDpvLGhvc3RuYW1lOnUscG9ydDpjLHBhdGhuYW1lOmgsXG5zZWFyY2g6bCxzZWFyY2hQYXJhbXM6ZCxoYXNoOmJ9PW5ldyBVUkwobik7cz1kZWNvZGVVUklDb21wb25lbnQocyksaT1kZWNvZGVVUklDb21wb25lbnQoXG5pKSxoPWRlY29kZVVSSUNvbXBvbmVudChoKTtsZXQgQz1pK1wiOlwiK3MsQj1lP09iamVjdC5mcm9tRW50cmllcyhkLmVudHJpZXMoKSk6bDtyZXR1cm57XG5ocmVmOnIscHJvdG9jb2w6dCxhdXRoOkMsdXNlcm5hbWU6aSxwYXNzd29yZDpzLGhvc3Q6byxob3N0bmFtZTp1LHBvcnQ6YyxwYXRobmFtZTpoLFxuc2VhcmNoOmwscXVlcnk6QixoYXNoOmJ9fXZhciBwcj16KCgpPT57XCJ1c2Ugc3RyaWN0XCI7cCgpO2EoZnIsXCJwYXJzZVwiKX0pO3ZhciBucz1JKCh4bCxycyk9PntcInVzZSBzdHJpY3RcIjtwKCk7dmFyIEl1PShwcigpLE4odHMpKSxkcj0oaXIoKSxOKG5yKSk7ZnVuY3Rpb24geXIocil7XG5pZihyLmNoYXJBdCgwKT09PVwiL1wiKXt2YXIgdD1yLnNwbGl0KFwiIFwiKTtyZXR1cm57aG9zdDp0WzBdLGRhdGFiYXNlOnRbMV19fXZhciBlPUl1LlxucGFyc2UoLyB8JVteYS1mMC05XXwlW2EtZjAtOV1bXmEtZjAtOV0vaS50ZXN0KHIpP2VuY29kZVVSSShyKS5yZXBsYWNlKC9cXCUyNShcXGRcXGQpL2csXG5cIiUkMVwiKTpyLCEwKSx0PWUucXVlcnk7Zm9yKHZhciBuIGluIHQpQXJyYXkuaXNBcnJheSh0W25dKSYmKHRbbl09dFtuXVt0W25dLmxlbmd0aC1cbjFdKTt2YXIgaT0oZS5hdXRofHxcIjpcIikuc3BsaXQoXCI6XCIpO2lmKHQudXNlcj1pWzBdLHQucGFzc3dvcmQ9aS5zcGxpY2UoMSkuam9pbihcIjpcIiksXG50LnBvcnQ9ZS5wb3J0LGUucHJvdG9jb2w9PVwic29ja2V0OlwiKXJldHVybiB0Lmhvc3Q9ZGVjb2RlVVJJKGUucGF0aG5hbWUpLHQuZGF0YWJhc2U9XG5lLnF1ZXJ5LmRiLHQuY2xpZW50X2VuY29kaW5nPWUucXVlcnkuZW5jb2RpbmcsdDt0Lmhvc3R8fCh0Lmhvc3Q9ZS5ob3N0bmFtZSk7dmFyIHM9ZS5cbnBhdGhuYW1lO2lmKCF0Lmhvc3QmJnMmJi9eJTJmL2kudGVzdChzKSl7dmFyIG89cy5zcGxpdChcIi9cIik7dC5ob3N0PWRlY29kZVVSSUNvbXBvbmVudChcbm9bMF0pLHM9by5zcGxpY2UoMSkuam9pbihcIi9cIil9c3dpdGNoKHMmJnMuY2hhckF0KDApPT09XCIvXCImJihzPXMuc2xpY2UoMSl8fG51bGwpLFxudC5kYXRhYmFzZT1zJiZkZWNvZGVVUkkocyksKHQuc3NsPT09XCJ0cnVlXCJ8fHQuc3NsPT09XCIxXCIpJiYodC5zc2w9ITApLHQuc3NsPT09XCIwXCImJlxuKHQuc3NsPSExKSwodC5zc2xjZXJ0fHx0LnNzbGtleXx8dC5zc2xyb290Y2VydHx8dC5zc2xtb2RlKSYmKHQuc3NsPXt9KSx0LnNzbGNlcnQmJlxuKHQuc3NsLmNlcnQ9ZHIucmVhZEZpbGVTeW5jKHQuc3NsY2VydCkudG9TdHJpbmcoKSksdC5zc2xrZXkmJih0LnNzbC5rZXk9ZHIucmVhZEZpbGVTeW5jKFxudC5zc2xrZXkpLnRvU3RyaW5nKCkpLHQuc3Nscm9vdGNlcnQmJih0LnNzbC5jYT1kci5yZWFkRmlsZVN5bmModC5zc2xyb290Y2VydCkudG9TdHJpbmcoKSksXG50LnNzbG1vZGUpe2Nhc2VcImRpc2FibGVcIjp7dC5zc2w9ITE7YnJlYWt9Y2FzZVwicHJlZmVyXCI6Y2FzZVwicmVxdWlyZVwiOmNhc2VcInZlcmlmeS1cXFxuY2FcIjpjYXNlXCJ2ZXJpZnktZnVsbFwiOmJyZWFrO2Nhc2VcIm5vLXZlcmlmeVwiOnt0LnNzbC5yZWplY3RVbmF1dGhvcml6ZWQ9ITE7YnJlYWt9fVxucmV0dXJuIHR9YSh5cixcInBhcnNlXCIpO3JzLmV4cG9ydHM9eXI7eXIucGFyc2U9eXJ9KTt2YXIgZ3Q9SSgoX2wsb3MpPT57XCJ1c2Ugc3RyaWN0XCI7cCgpO3ZhciBQdT0oZXMoKSxOKFhpKSksc3M9WGUoKSxpcz1ucygpLnBhcnNlLCQ9YShcbmZ1bmN0aW9uKHIsZSx0KXtyZXR1cm4gdD09PXZvaWQgMD90PW0uZW52W1wiUEdcIityLnRvVXBwZXJDYXNlKCldOnQ9PT0hMXx8KHQ9bS5lbnZbdF0pLFxuZVtyXXx8dHx8c3Nbcl19LFwidmFsXCIpLEJ1PWEoZnVuY3Rpb24oKXtzd2l0Y2gobS5lbnYuUEdTU0xNT0RFKXtjYXNlXCJkaXNhYmxlXCI6cmV0dXJuITE7Y2FzZVwiXFxcbnByZWZlclwiOmNhc2VcInJlcXVpcmVcIjpjYXNlXCJ2ZXJpZnktY2FcIjpjYXNlXCJ2ZXJpZnktZnVsbFwiOnJldHVybiEwO2Nhc2VcIm5vLXZlcmlmeVwiOlxucmV0dXJue3JlamVjdFVuYXV0aG9yaXplZDohMX19cmV0dXJuIHNzLnNzbH0sXCJyZWFkU1NMQ29uZmlnRnJvbUVudmlyb25tZW50XCIpLFVlPWEoXG5mdW5jdGlvbihyKXtyZXR1cm5cIidcIisoXCJcIityKS5yZXBsYWNlKC9cXFxcL2csXCJcXFxcXFxcXFwiKS5yZXBsYWNlKC8nL2csXCJcXFxcJ1wiKStcIidcIn0sXCJxdW9cXFxudGVQYXJhbVZhbHVlXCIpLG5lPWEoZnVuY3Rpb24ocixlLHQpe3ZhciBuPWVbdF07biE9bnVsbCYmci5wdXNoKHQrXCI9XCIrVWUobikpfSxcImFkXFxcbmRcIiksZ3I9Y2xhc3MgZ3J7Y29uc3RydWN0b3IoZSl7ZT10eXBlb2YgZT09XCJzdHJpbmdcIj9pcyhlKTplfHx7fSxlLmNvbm5lY3Rpb25TdHJpbmcmJlxuKGU9T2JqZWN0LmFzc2lnbih7fSxlLGlzKGUuY29ubmVjdGlvblN0cmluZykpKSx0aGlzLnVzZXI9JChcInVzZXJcIixlKSx0aGlzLmRhdGFiYXNlPVxuJChcImRhdGFiYXNlXCIsZSksdGhpcy5kYXRhYmFzZT09PXZvaWQgMCYmKHRoaXMuZGF0YWJhc2U9dGhpcy51c2VyKSx0aGlzLnBvcnQ9cGFyc2VJbnQoXG4kKFwicG9ydFwiLGUpLDEwKSx0aGlzLmhvc3Q9JChcImhvc3RcIixlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInBhc3N3b3JkXCIse2NvbmZpZ3VyYWJsZTohMCxcbmVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsdmFsdWU6JChcInBhc3N3b3JkXCIsZSl9KSx0aGlzLmJpbmFyeT0kKFwiYmluYXJ5XCIsZSksdGhpcy5cbm9wdGlvbnM9JChcIm9wdGlvbnNcIixlKSx0aGlzLnNzbD10eXBlb2YgZS5zc2w+XCJ1XCI/QnUoKTplLnNzbCx0eXBlb2YgdGhpcy5zc2w9PVwic3RcXFxucmluZ1wiJiZ0aGlzLnNzbD09PVwidHJ1ZVwiJiYodGhpcy5zc2w9ITApLHRoaXMuc3NsPT09XCJuby12ZXJpZnlcIiYmKHRoaXMuc3NsPXtyZWplY3RVbmF1dGhvcml6ZWQ6ITF9KSxcbnRoaXMuc3NsJiZ0aGlzLnNzbC5rZXkmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnNzbCxcImtleVwiLHtlbnVtZXJhYmxlOiExfSksdGhpcy5cbmNsaWVudF9lbmNvZGluZz0kKFwiY2xpZW50X2VuY29kaW5nXCIsZSksdGhpcy5yZXBsaWNhdGlvbj0kKFwicmVwbGljYXRpb25cIixlKSx0aGlzLlxuaXNEb21haW5Tb2NrZXQ9ISh0aGlzLmhvc3R8fFwiXCIpLmluZGV4T2YoXCIvXCIpLHRoaXMuYXBwbGljYXRpb25fbmFtZT0kKFwiYXBwbGljYXRpb1xcXG5uX25hbWVcIixlLFwiUEdBUFBOQU1FXCIpLHRoaXMuZmFsbGJhY2tfYXBwbGljYXRpb25fbmFtZT0kKFwiZmFsbGJhY2tfYXBwbGljYXRpb25fbmFcXFxubWVcIixlLCExKSx0aGlzLnN0YXRlbWVudF90aW1lb3V0PSQoXCJzdGF0ZW1lbnRfdGltZW91dFwiLGUsITEpLHRoaXMubG9ja190aW1lb3V0PSQoXG5cImxvY2tfdGltZW91dFwiLGUsITEpLHRoaXMuaWRsZV9pbl90cmFuc2FjdGlvbl9zZXNzaW9uX3RpbWVvdXQ9JChcImlkbGVfaW5fdHJhbnNhY1xcXG50aW9uX3Nlc3Npb25fdGltZW91dFwiLGUsITEpLHRoaXMucXVlcnlfdGltZW91dD0kKFwicXVlcnlfdGltZW91dFwiLGUsITEpLGUuY29ubmVjdGlvblRpbWVvdXRNaWxsaXM9PT1cbnZvaWQgMD90aGlzLmNvbm5lY3RfdGltZW91dD1tLmVudi5QR0NPTk5FQ1RfVElNRU9VVHx8MDp0aGlzLmNvbm5lY3RfdGltZW91dD1NYXRoLlxuZmxvb3IoZS5jb25uZWN0aW9uVGltZW91dE1pbGxpcy8xZTMpLGUua2VlcEFsaXZlPT09ITE/dGhpcy5rZWVwYWxpdmVzPTA6ZS5rZWVwQWxpdmU9PT1cbiEwJiYodGhpcy5rZWVwYWxpdmVzPTEpLHR5cGVvZiBlLmtlZXBBbGl2ZUluaXRpYWxEZWxheU1pbGxpcz09XCJudW1iZXJcIiYmKHRoaXMua2VlcGFsaXZlc19pZGxlPVxuTWF0aC5mbG9vcihlLmtlZXBBbGl2ZUluaXRpYWxEZWxheU1pbGxpcy8xZTMpKX1nZXRMaWJwcUNvbm5lY3Rpb25TdHJpbmcoZSl7dmFyIHQ9W107XG5uZSh0LHRoaXMsXCJ1c2VyXCIpLG5lKHQsdGhpcyxcInBhc3N3b3JkXCIpLG5lKHQsdGhpcyxcInBvcnRcIiksbmUodCx0aGlzLFwiYXBwbGljYXRpb25cXFxuX25hbWVcIiksbmUodCx0aGlzLFwiZmFsbGJhY2tfYXBwbGljYXRpb25fbmFtZVwiKSxuZSh0LHRoaXMsXCJjb25uZWN0X3RpbWVvdXRcIiksbmUodCxcbnRoaXMsXCJvcHRpb25zXCIpO3ZhciBuPXR5cGVvZiB0aGlzLnNzbD09XCJvYmplY3RcIj90aGlzLnNzbDp0aGlzLnNzbD97c3NsbW9kZTp0aGlzLlxuc3NsfTp7fTtpZihuZSh0LG4sXCJzc2xtb2RlXCIpLG5lKHQsbixcInNzbGNhXCIpLG5lKHQsbixcInNzbGtleVwiKSxuZSh0LG4sXCJzc2xjZXJ0XCIpLFxubmUodCxuLFwic3Nscm9vdGNlcnRcIiksdGhpcy5kYXRhYmFzZSYmdC5wdXNoKFwiZGJuYW1lPVwiK1VlKHRoaXMuZGF0YWJhc2UpKSx0aGlzLnJlcGxpY2F0aW9uJiZcbnQucHVzaChcInJlcGxpY2F0aW9uPVwiK1VlKHRoaXMucmVwbGljYXRpb24pKSx0aGlzLmhvc3QmJnQucHVzaChcImhvc3Q9XCIrVWUodGhpcy5ob3N0KSksXG50aGlzLmlzRG9tYWluU29ja2V0KXJldHVybiBlKG51bGwsdC5qb2luKFwiIFwiKSk7dGhpcy5jbGllbnRfZW5jb2RpbmcmJnQucHVzaChcImNsaVxcXG5lbnRfZW5jb2Rpbmc9XCIrVWUodGhpcy5jbGllbnRfZW5jb2RpbmcpKSxQdS5sb29rdXAodGhpcy5ob3N0LGZ1bmN0aW9uKGkscyl7cmV0dXJuIGk/XG5lKGksbnVsbCk6KHQucHVzaChcImhvc3RhZGRyPVwiK1VlKHMpKSxlKG51bGwsdC5qb2luKFwiIFwiKSkpfSl9fTthKGdyLFwiQ29ubmVjdGlvblBhXFxcbnJhbWV0ZXJzXCIpO3ZhciBtcj1ncjtvcy5leHBvcnRzPW1yfSk7dmFyIGNzPUkoKFRsLHVzKT0+e1widXNlIHN0cmljdFwiO3AoKTt2YXIgTHU9SmUoKSxhcz0vXihbQS1aYS16XSspKD86IChcXGQrKSk/KD86IChcXGQrKSk/LyxcbmJyPWNsYXNzIGJye2NvbnN0cnVjdG9yKGUsdCl7dGhpcy5jb21tYW5kPW51bGwsdGhpcy5yb3dDb3VudD1udWxsLHRoaXMub2lkPW51bGwsXG50aGlzLnJvd3M9W10sdGhpcy5maWVsZHM9W10sdGhpcy5fcGFyc2Vycz12b2lkIDAsdGhpcy5fdHlwZXM9dCx0aGlzLlJvd0N0b3I9bnVsbCxcbnRoaXMucm93QXNBcnJheT1lPT09XCJhcnJheVwiLHRoaXMucm93QXNBcnJheSYmKHRoaXMucGFyc2VSb3c9dGhpcy5fcGFyc2VSb3dBc0FycmF5KX1hZGRDb21tYW5kQ29tcGxldGUoZSl7XG52YXIgdDtlLnRleHQ/dD1hcy5leGVjKGUudGV4dCk6dD1hcy5leGVjKGUuY29tbWFuZCksdCYmKHRoaXMuY29tbWFuZD10WzFdLHRbM10/KHRoaXMuXG5vaWQ9cGFyc2VJbnQodFsyXSwxMCksdGhpcy5yb3dDb3VudD1wYXJzZUludCh0WzNdLDEwKSk6dFsyXSYmKHRoaXMucm93Q291bnQ9cGFyc2VJbnQoXG50WzJdLDEwKSkpfV9wYXJzZVJvd0FzQXJyYXkoZSl7Zm9yKHZhciB0PW5ldyBBcnJheShlLmxlbmd0aCksbj0wLGk9ZS5sZW5ndGg7bjxpO24rKyl7XG52YXIgcz1lW25dO3MhPT1udWxsP3Rbbl09dGhpcy5fcGFyc2Vyc1tuXShzKTp0W25dPW51bGx9cmV0dXJuIHR9cGFyc2VSb3coZSl7Zm9yKHZhciB0PXt9LFxubj0wLGk9ZS5sZW5ndGg7bjxpO24rKyl7dmFyIHM9ZVtuXSxvPXRoaXMuZmllbGRzW25dLm5hbWU7cyE9PW51bGw/dFtvXT10aGlzLl9wYXJzZXJzW25dKFxucyk6dFtvXT1udWxsfXJldHVybiB0fWFkZFJvdyhlKXt0aGlzLnJvd3MucHVzaChlKX1hZGRGaWVsZHMoZSl7dGhpcy5maWVsZHM9ZSx0aGlzLlxuZmllbGRzLmxlbmd0aCYmKHRoaXMuX3BhcnNlcnM9bmV3IEFycmF5KGUubGVuZ3RoKSk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe3ZhciBuPWVbdF07XG50aGlzLl90eXBlcz90aGlzLl9wYXJzZXJzW3RdPXRoaXMuX3R5cGVzLmdldFR5cGVQYXJzZXIobi5kYXRhVHlwZUlELG4uZm9ybWF0fHxcInRcXFxuZXh0XCIpOnRoaXMuX3BhcnNlcnNbdF09THUuZ2V0VHlwZVBhcnNlcihuLmRhdGFUeXBlSUQsbi5mb3JtYXR8fFwidGV4dFwiKX19fTthKGJyLFwiXFxcblJlc3VsdFwiKTt2YXIgd3I9YnI7dXMuZXhwb3J0cz13cn0pO3ZhciBwcz1JKChCbCxmcyk9PntcInVzZSBzdHJpY3RcIjtwKCk7dmFye0V2ZW50RW1pdHRlcjpSdX09d2UoKSxocz1jcygpLGxzPWV0KCkseHI9Y2xhc3MgeHIgZXh0ZW5kcyBSdXtjb25zdHJ1Y3RvcihlLHQsbil7XG5zdXBlcigpLGU9bHMubm9ybWFsaXplUXVlcnlDb25maWcoZSx0LG4pLHRoaXMudGV4dD1lLnRleHQsdGhpcy52YWx1ZXM9ZS52YWx1ZXMsdGhpcy5cbnJvd3M9ZS5yb3dzLHRoaXMudHlwZXM9ZS50eXBlcyx0aGlzLm5hbWU9ZS5uYW1lLHRoaXMuYmluYXJ5PWUuYmluYXJ5LHRoaXMucG9ydGFsPVxuZS5wb3J0YWx8fFwiXCIsdGhpcy5jYWxsYmFjaz1lLmNhbGxiYWNrLHRoaXMuX3Jvd01vZGU9ZS5yb3dNb2RlLG0uZG9tYWluJiZlLmNhbGxiYWNrJiZcbih0aGlzLmNhbGxiYWNrPW0uZG9tYWluLmJpbmQoZS5jYWxsYmFjaykpLHRoaXMuX3Jlc3VsdD1uZXcgaHModGhpcy5fcm93TW9kZSx0aGlzLlxudHlwZXMpLHRoaXMuX3Jlc3VsdHM9dGhpcy5fcmVzdWx0LHRoaXMuaXNQcmVwYXJlZFN0YXRlbWVudD0hMSx0aGlzLl9jYW5jZWxlZER1ZVRvRXJyb3I9XG4hMSx0aGlzLl9wcm9taXNlPW51bGx9cmVxdWlyZXNQcmVwYXJhdGlvbigpe3JldHVybiB0aGlzLm5hbWV8fHRoaXMucm93cz8hMDohdGhpcy5cbnRleHR8fCF0aGlzLnZhbHVlcz8hMTp0aGlzLnZhbHVlcy5sZW5ndGg+MH1fY2hlY2tGb3JNdWx0aXJvdygpe3RoaXMuX3Jlc3VsdC5jb21tYW5kJiZcbihBcnJheS5pc0FycmF5KHRoaXMuX3Jlc3VsdHMpfHwodGhpcy5fcmVzdWx0cz1bdGhpcy5fcmVzdWx0XSksdGhpcy5fcmVzdWx0PW5ldyBocyhcbnRoaXMuX3Jvd01vZGUsdGhpcy50eXBlcyksdGhpcy5fcmVzdWx0cy5wdXNoKHRoaXMuX3Jlc3VsdCkpfWhhbmRsZVJvd0Rlc2NyaXB0aW9uKGUpe1xudGhpcy5fY2hlY2tGb3JNdWx0aXJvdygpLHRoaXMuX3Jlc3VsdC5hZGRGaWVsZHMoZS5maWVsZHMpLHRoaXMuX2FjY3VtdWxhdGVSb3dzPXRoaXMuXG5jYWxsYmFja3x8IXRoaXMubGlzdGVuZXJzKFwicm93XCIpLmxlbmd0aH1oYW5kbGVEYXRhUm93KGUpe2xldCB0O2lmKCF0aGlzLl9jYW5jZWxlZER1ZVRvRXJyb3Ipe1xudHJ5e3Q9dGhpcy5fcmVzdWx0LnBhcnNlUm93KGUuZmllbGRzKX1jYXRjaChuKXt0aGlzLl9jYW5jZWxlZER1ZVRvRXJyb3I9bjtyZXR1cm59XG50aGlzLmVtaXQoXCJyb3dcIix0LHRoaXMuX3Jlc3VsdCksdGhpcy5fYWNjdW11bGF0ZVJvd3MmJnRoaXMuX3Jlc3VsdC5hZGRSb3codCl9fWhhbmRsZUNvbW1hbmRDb21wbGV0ZShlLHQpe1xudGhpcy5fY2hlY2tGb3JNdWx0aXJvdygpLHRoaXMuX3Jlc3VsdC5hZGRDb21tYW5kQ29tcGxldGUoZSksdGhpcy5yb3dzJiZ0LnN5bmMoKX1oYW5kbGVFbXB0eVF1ZXJ5KGUpe1xudGhpcy5yb3dzJiZlLnN5bmMoKX1oYW5kbGVFcnJvcihlLHQpe2lmKHRoaXMuX2NhbmNlbGVkRHVlVG9FcnJvciYmKGU9dGhpcy5fY2FuY2VsZWREdWVUb0Vycm9yLFxudGhpcy5fY2FuY2VsZWREdWVUb0Vycm9yPSExKSx0aGlzLmNhbGxiYWNrKXJldHVybiB0aGlzLmNhbGxiYWNrKGUpO3RoaXMuZW1pdChcImVyXFxcbnJvclwiLGUpfWhhbmRsZVJlYWR5Rm9yUXVlcnkoZSl7aWYodGhpcy5fY2FuY2VsZWREdWVUb0Vycm9yKXJldHVybiB0aGlzLmhhbmRsZUVycm9yKFxudGhpcy5fY2FuY2VsZWREdWVUb0Vycm9yLGUpO2lmKHRoaXMuY2FsbGJhY2spdHJ5e3RoaXMuY2FsbGJhY2sobnVsbCx0aGlzLl9yZXN1bHRzKX1jYXRjaCh0KXtcbm0ubmV4dFRpY2soKCk9Pnt0aHJvdyB0fSl9dGhpcy5lbWl0KFwiZW5kXCIsdGhpcy5fcmVzdWx0cyl9c3VibWl0KGUpe2lmKHR5cGVvZiB0aGlzLlxudGV4dCE9XCJzdHJpbmdcIiYmdHlwZW9mIHRoaXMubmFtZSE9XCJzdHJpbmdcIilyZXR1cm4gbmV3IEVycm9yKFwiQSBxdWVyeSBtdXN0IGhhdmUgZVxcXG5pdGhlciB0ZXh0IG9yIGEgbmFtZS4gU3VwcGx5aW5nIG5laXRoZXIgaXMgdW5zdXBwb3J0ZWQuXCIpO2xldCB0PWUucGFyc2VkU3RhdGVtZW50c1t0aGlzLlxubmFtZV07cmV0dXJuIHRoaXMudGV4dCYmdCYmdGhpcy50ZXh0IT09dD9uZXcgRXJyb3IoYFByZXBhcmVkIHN0YXRlbWVudHMgbXVzdCBiZSBcXFxudW5pcXVlIC0gJyR7dGhpcy5uYW1lfScgd2FzIHVzZWQgZm9yIGEgZGlmZmVyZW50IHN0YXRlbWVudGApOnRoaXMudmFsdWVzJiYhQXJyYXkuXG5pc0FycmF5KHRoaXMudmFsdWVzKT9uZXcgRXJyb3IoXCJRdWVyeSB2YWx1ZXMgbXVzdCBiZSBhbiBhcnJheVwiKToodGhpcy5yZXF1aXJlc1ByZXBhcmF0aW9uKCk/XG50aGlzLnByZXBhcmUoZSk6ZS5xdWVyeSh0aGlzLnRleHQpLG51bGwpfWhhc0JlZW5QYXJzZWQoZSl7cmV0dXJuIHRoaXMubmFtZSYmZS5wYXJzZWRTdGF0ZW1lbnRzW3RoaXMuXG5uYW1lXX1oYW5kbGVQb3J0YWxTdXNwZW5kZWQoZSl7dGhpcy5fZ2V0Um93cyhlLHRoaXMucm93cyl9X2dldFJvd3MoZSx0KXtlLmV4ZWN1dGUoXG57cG9ydGFsOnRoaXMucG9ydGFsLHJvd3M6dH0pLHQ/ZS5mbHVzaCgpOmUuc3luYygpfXByZXBhcmUoZSl7dGhpcy5pc1ByZXBhcmVkU3RhdGVtZW50PVxuITAsdGhpcy5oYXNCZWVuUGFyc2VkKGUpfHxlLnBhcnNlKHt0ZXh0OnRoaXMudGV4dCxuYW1lOnRoaXMubmFtZSx0eXBlczp0aGlzLnR5cGVzfSk7XG50cnl7ZS5iaW5kKHtwb3J0YWw6dGhpcy5wb3J0YWwsc3RhdGVtZW50OnRoaXMubmFtZSx2YWx1ZXM6dGhpcy52YWx1ZXMsYmluYXJ5OnRoaXMuXG5iaW5hcnksdmFsdWVNYXBwZXI6bHMucHJlcGFyZVZhbHVlfSl9Y2F0Y2godCl7dGhpcy5oYW5kbGVFcnJvcih0LGUpO3JldHVybn1lLmRlc2NyaWJlKFxue3R5cGU6XCJQXCIsbmFtZTp0aGlzLnBvcnRhbHx8XCJcIn0pLHRoaXMuX2dldFJvd3MoZSx0aGlzLnJvd3MpfWhhbmRsZUNvcHlJblJlc3BvbnNlKGUpe1xuZS5zZW5kQ29weUZhaWwoXCJObyBzb3VyY2Ugc3RyZWFtIGRlZmluZWRcIil9aGFuZGxlQ29weURhdGEoZSx0KXt9fTthKHhyLFwiUXVlcnlcIik7XG52YXIgU3I9eHI7ZnMuZXhwb3J0cz1Tcn0pO3ZhciB5cz17fTtpZSh5cyx7U29ja2V0OigpPT5fZSxpc0lQOigpPT5GdX0pO2Z1bmN0aW9uIEZ1KHIpe3JldHVybiAwfXZhciBkcyxNdSxFLFxuX2Usd3Q9eigoKT0+e1widXNlIHN0cmljdFwiO3AoKTtkcz1UZSh3ZSgpLDEpO2EoRnUsXCJpc0lQXCIpO011PWEocj0+ci5yZXBsYWNlKC9eW14uXStcXC4vLFxuXCJhcGkuXCIpLFwidHJhbnNmb3JtSG9zdFwiKSxFPWNsYXNzIEUgZXh0ZW5kcyBkcy5FdmVudEVtaXR0ZXJ7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpO1xuXyh0aGlzLFwib3B0c1wiLHt9KTtfKHRoaXMsXCJjb25uZWN0aW5nXCIsITEpO18odGhpcyxcInBlbmRpbmdcIiwhMCk7Xyh0aGlzLFwid3JpdGFibGVcIixcbiEwKTtfKHRoaXMsXCJlbmNyeXB0ZWRcIiwhMSk7Xyh0aGlzLFwiYXV0aG9yaXplZFwiLCExKTtfKHRoaXMsXCJkZXN0cm95ZWRcIiwhMSk7Xyh0aGlzLFxuXCJ3c1wiLG51bGwpO18odGhpcyxcIndyaXRlQnVmZmVyXCIpO18odGhpcyxcInRsc1N0YXRlXCIsMCk7Xyh0aGlzLFwidGxzUmVhZFwiKTtfKHRoaXMsXCJcXFxudGxzV3JpdGVcIil9c3RhdGljIGdldCBwb29sUXVlcnlWaWFGZXRjaCgpe3JldHVybiBFLm9wdHMucG9vbFF1ZXJ5VmlhRmV0Y2g/P0UuZGVmYXVsdHMuXG5wb29sUXVlcnlWaWFGZXRjaH1zdGF0aWMgc2V0IHBvb2xRdWVyeVZpYUZldGNoKHQpe0Uub3B0cy5wb29sUXVlcnlWaWFGZXRjaD10fXN0YXRpYyBnZXQgZmV0Y2hFbmRwb2ludCgpe1xucmV0dXJuIEUub3B0cy5mZXRjaEVuZHBvaW50Pz9FLmRlZmF1bHRzLmZldGNoRW5kcG9pbnR9c3RhdGljIHNldCBmZXRjaEVuZHBvaW50KHQpe1xuRS5vcHRzLmZldGNoRW5kcG9pbnQ9dH1zdGF0aWMgZ2V0IGZldGNoQ29ubmVjdGlvbkNhY2hlKCl7cmV0dXJuITB9c3RhdGljIHNldCBmZXRjaENvbm5lY3Rpb25DYWNoZSh0KXtcbmNvbnNvbGUud2FybihcIlRoZSBgZmV0Y2hDb25uZWN0aW9uQ2FjaGVgIG9wdGlvbiBpcyBkZXByZWNhdGVkIChub3cgYWx3YXlzIGB0cnVlYFxcXG4pXCIpfXN0YXRpYyBnZXQgZmV0Y2hGdW5jdGlvbigpe3JldHVybiBFLm9wdHMuZmV0Y2hGdW5jdGlvbj8/RS5kZWZhdWx0cy5mZXRjaEZ1bmN0aW9ufXN0YXRpYyBzZXQgZmV0Y2hGdW5jdGlvbih0KXtcbkUub3B0cy5mZXRjaEZ1bmN0aW9uPXR9c3RhdGljIGdldCB3ZWJTb2NrZXRDb25zdHJ1Y3Rvcigpe3JldHVybiBFLm9wdHMud2ViU29ja2V0Q29uc3RydWN0b3I/P1xuRS5kZWZhdWx0cy53ZWJTb2NrZXRDb25zdHJ1Y3Rvcn1zdGF0aWMgc2V0IHdlYlNvY2tldENvbnN0cnVjdG9yKHQpe0Uub3B0cy53ZWJTb2NrZXRDb25zdHJ1Y3Rvcj1cbnR9Z2V0IHdlYlNvY2tldENvbnN0cnVjdG9yKCl7cmV0dXJuIHRoaXMub3B0cy53ZWJTb2NrZXRDb25zdHJ1Y3Rvcj8/RS53ZWJTb2NrZXRDb25zdHJ1Y3Rvcn1zZXQgd2ViU29ja2V0Q29uc3RydWN0b3IodCl7XG50aGlzLm9wdHMud2ViU29ja2V0Q29uc3RydWN0b3I9dH1zdGF0aWMgZ2V0IHdzUHJveHkoKXtyZXR1cm4gRS5vcHRzLndzUHJveHk/P0UuZGVmYXVsdHMuXG53c1Byb3h5fXN0YXRpYyBzZXQgd3NQcm94eSh0KXtFLm9wdHMud3NQcm94eT10fWdldCB3c1Byb3h5KCl7cmV0dXJuIHRoaXMub3B0cy53c1Byb3h5Pz9cbkUud3NQcm94eX1zZXQgd3NQcm94eSh0KXt0aGlzLm9wdHMud3NQcm94eT10fXN0YXRpYyBnZXQgY29hbGVzY2VXcml0ZXMoKXtyZXR1cm4gRS5cbm9wdHMuY29hbGVzY2VXcml0ZXM/P0UuZGVmYXVsdHMuY29hbGVzY2VXcml0ZXN9c3RhdGljIHNldCBjb2FsZXNjZVdyaXRlcyh0KXtFLm9wdHMuXG5jb2FsZXNjZVdyaXRlcz10fWdldCBjb2FsZXNjZVdyaXRlcygpe3JldHVybiB0aGlzLm9wdHMuY29hbGVzY2VXcml0ZXM/P0UuY29hbGVzY2VXcml0ZXN9c2V0IGNvYWxlc2NlV3JpdGVzKHQpe1xudGhpcy5vcHRzLmNvYWxlc2NlV3JpdGVzPXR9c3RhdGljIGdldCB1c2VTZWN1cmVXZWJTb2NrZXQoKXtyZXR1cm4gRS5vcHRzLnVzZVNlY3VyZVdlYlNvY2tldD8/XG5FLmRlZmF1bHRzLnVzZVNlY3VyZVdlYlNvY2tldH1zdGF0aWMgc2V0IHVzZVNlY3VyZVdlYlNvY2tldCh0KXtFLm9wdHMudXNlU2VjdXJlV2ViU29ja2V0PVxudH1nZXQgdXNlU2VjdXJlV2ViU29ja2V0KCl7cmV0dXJuIHRoaXMub3B0cy51c2VTZWN1cmVXZWJTb2NrZXQ/P0UudXNlU2VjdXJlV2ViU29ja2V0fXNldCB1c2VTZWN1cmVXZWJTb2NrZXQodCl7XG50aGlzLm9wdHMudXNlU2VjdXJlV2ViU29ja2V0PXR9c3RhdGljIGdldCBmb3JjZURpc2FibGVQZ1NTTCgpe3JldHVybiBFLm9wdHMuZm9yY2VEaXNhYmxlUGdTU0w/P1xuRS5kZWZhdWx0cy5mb3JjZURpc2FibGVQZ1NTTH1zdGF0aWMgc2V0IGZvcmNlRGlzYWJsZVBnU1NMKHQpe0Uub3B0cy5mb3JjZURpc2FibGVQZ1NTTD1cbnR9Z2V0IGZvcmNlRGlzYWJsZVBnU1NMKCl7cmV0dXJuIHRoaXMub3B0cy5mb3JjZURpc2FibGVQZ1NTTD8/RS5mb3JjZURpc2FibGVQZ1NTTH1zZXQgZm9yY2VEaXNhYmxlUGdTU0wodCl7XG50aGlzLm9wdHMuZm9yY2VEaXNhYmxlUGdTU0w9dH1zdGF0aWMgZ2V0IGRpc2FibGVTTkkoKXtyZXR1cm4gRS5vcHRzLmRpc2FibGVTTkk/P1xuRS5kZWZhdWx0cy5kaXNhYmxlU05JfXN0YXRpYyBzZXQgZGlzYWJsZVNOSSh0KXtFLm9wdHMuZGlzYWJsZVNOST10fWdldCBkaXNhYmxlU05JKCl7XG5yZXR1cm4gdGhpcy5vcHRzLmRpc2FibGVTTkk/P0UuZGlzYWJsZVNOSX1zZXQgZGlzYWJsZVNOSSh0KXt0aGlzLm9wdHMuZGlzYWJsZVNOST1cbnR9c3RhdGljIGdldCBwaXBlbGluZUNvbm5lY3QoKXtyZXR1cm4gRS5vcHRzLnBpcGVsaW5lQ29ubmVjdD8/RS5kZWZhdWx0cy5waXBlbGluZUNvbm5lY3R9c3RhdGljIHNldCBwaXBlbGluZUNvbm5lY3QodCl7XG5FLm9wdHMucGlwZWxpbmVDb25uZWN0PXR9Z2V0IHBpcGVsaW5lQ29ubmVjdCgpe3JldHVybiB0aGlzLm9wdHMucGlwZWxpbmVDb25uZWN0Pz9cbkUucGlwZWxpbmVDb25uZWN0fXNldCBwaXBlbGluZUNvbm5lY3QodCl7dGhpcy5vcHRzLnBpcGVsaW5lQ29ubmVjdD10fXN0YXRpYyBnZXQgc3VidGxzKCl7XG5yZXR1cm4gRS5vcHRzLnN1YnRscz8/RS5kZWZhdWx0cy5zdWJ0bHN9c3RhdGljIHNldCBzdWJ0bHModCl7RS5vcHRzLnN1YnRscz10fWdldCBzdWJ0bHMoKXtcbnJldHVybiB0aGlzLm9wdHMuc3VidGxzPz9FLnN1YnRsc31zZXQgc3VidGxzKHQpe3RoaXMub3B0cy5zdWJ0bHM9dH1zdGF0aWMgZ2V0IHBpcGVsaW5lVExTKCl7XG5yZXR1cm4gRS5vcHRzLnBpcGVsaW5lVExTPz9FLmRlZmF1bHRzLnBpcGVsaW5lVExTfXN0YXRpYyBzZXQgcGlwZWxpbmVUTFModCl7RS5vcHRzLlxucGlwZWxpbmVUTFM9dH1nZXQgcGlwZWxpbmVUTFMoKXtyZXR1cm4gdGhpcy5vcHRzLnBpcGVsaW5lVExTPz9FLnBpcGVsaW5lVExTfXNldCBwaXBlbGluZVRMUyh0KXtcbnRoaXMub3B0cy5waXBlbGluZVRMUz10fXN0YXRpYyBnZXQgcm9vdENlcnRzKCl7cmV0dXJuIEUub3B0cy5yb290Q2VydHM/P0UuZGVmYXVsdHMuXG5yb290Q2VydHN9c3RhdGljIHNldCByb290Q2VydHModCl7RS5vcHRzLnJvb3RDZXJ0cz10fWdldCByb290Q2VydHMoKXtyZXR1cm4gdGhpcy5cbm9wdHMucm9vdENlcnRzPz9FLnJvb3RDZXJ0c31zZXQgcm9vdENlcnRzKHQpe3RoaXMub3B0cy5yb290Q2VydHM9dH13c1Byb3h5QWRkckZvckhvc3QodCxuKXtcbmxldCBpPXRoaXMud3NQcm94eTtpZihpPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIk5vIFdlYlNvY2tldCBwcm94eSBpcyBjb25maWd1clxcXG5lZC4gUGxlYXNlIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbmVvbmRhdGFiYXNlL3NlcnZlcmxlc3MvYmxvYi9tYWluL0NPTkZJRy5tZCN3c1xcXG5wcm94eS1zdHJpbmctLWhvc3Qtc3RyaW5nLXBvcnQtbnVtYmVyLS1zdHJpbmctLXN0cmluZ1wiKTtyZXR1cm4gdHlwZW9mIGk9PVwiZnVuY3RpXFxcbm9uXCI/aSh0LG4pOmAke2l9P2FkZHJlc3M9JHt0fToke259YH1zZXROb0RlbGF5KCl7cmV0dXJuIHRoaXN9c2V0S2VlcEFsaXZlKCl7cmV0dXJuIHRoaXN9cmVmKCl7XG5yZXR1cm4gdGhpc311bnJlZigpe3JldHVybiB0aGlzfWNvbm5lY3QodCxuLGkpe3RoaXMuY29ubmVjdGluZz0hMCxpJiZ0aGlzLm9uY2UoXCJcXFxuY29ubmVjdFwiLGkpO2xldCBzPWEoKCk9Pnt0aGlzLmNvbm5lY3Rpbmc9ITEsdGhpcy5wZW5kaW5nPSExLHRoaXMuZW1pdChcImNvbm5lY3RcIiksXG50aGlzLmVtaXQoXCJyZWFkeVwiKX0sXCJoYW5kbGVXZWJTb2NrZXRPcGVuXCIpLG89YSgoYyxoPSExKT0+e2MuYmluYXJ5VHlwZT1cImFycmF5YnVmXFxcbmZlclwiLGMuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbD0+e3RoaXMuZW1pdChcImVycm9yXCIsbCksdGhpcy5lbWl0KFwiY2xvc2VcIil9KSxjLlxuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixsPT57aWYodGhpcy50bHNTdGF0ZT09PTApe2xldCBkPXkuZnJvbShsLmRhdGEpO3RoaXMuZW1pdChcblwiZGF0YVwiLGQpfX0pLGMuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9Pnt0aGlzLmVtaXQoXCJjbG9zZVwiKX0pLGg/cygpOmMuYWRkRXZlbnRMaXN0ZW5lcihcblwib3BlblwiLHMpfSxcImNvbmZpZ3VyZVdlYlNvY2tldFwiKSx1O3RyeXt1PXRoaXMud3NQcm94eUFkZHJGb3JIb3N0KG4sdHlwZW9mIHQ9PVwic3RcXFxucmluZ1wiP3BhcnNlSW50KHQsMTApOnQpfWNhdGNoKGMpe3RoaXMuZW1pdChcImVycm9yXCIsYyksdGhpcy5lbWl0KFwiY2xvc2VcIik7cmV0dXJufVxudHJ5e2xldCBoPSh0aGlzLnVzZVNlY3VyZVdlYlNvY2tldD9cIndzczpcIjpcIndzOlwiKStcIi8vXCIrdTtpZih0aGlzLndlYlNvY2tldENvbnN0cnVjdG9yIT09XG52b2lkIDApdGhpcy53cz1uZXcgdGhpcy53ZWJTb2NrZXRDb25zdHJ1Y3RvcihoKSxvKHRoaXMud3MpO2Vsc2UgdHJ5e3RoaXMud3M9bmV3IFdlYlNvY2tldChcbmgpLG8odGhpcy53cyl9Y2F0Y2h7dGhpcy53cz1uZXcgX191bnN0YWJsZV9XZWJTb2NrZXQoaCksbyh0aGlzLndzKX19Y2F0Y2goYyl7bGV0IGw9KHRoaXMuXG51c2VTZWN1cmVXZWJTb2NrZXQ/XCJodHRwczpcIjpcImh0dHA6XCIpK1wiLy9cIit1O2ZldGNoKGwse2hlYWRlcnM6e1VwZ3JhZGU6XCJ3ZWJzb2NrZXRcIn19KS5cbnRoZW4oZD0+e2lmKHRoaXMud3M9ZC53ZWJTb2NrZXQsdGhpcy53cz09bnVsbCl0aHJvdyBjO3RoaXMud3MuYWNjZXB0KCksbyh0aGlzLndzLFxuITApfSkuY2F0Y2goZD0+e3RoaXMuZW1pdChcImVycm9yXCIsbmV3IEVycm9yKGBBbGwgYXR0ZW1wdHMgdG8gb3BlbiBhIFdlYlNvY2tldCB0b1xcXG4gY29ubmVjdCB0byB0aGUgZGF0YWJhc2UgZmFpbGVkLiBQbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly9naXRodWIuY29tL25lb25kYXRhYmFzZVxcXG4vc2VydmVybGVzcy9ibG9iL21haW4vQ09ORklHLm1kI3dlYnNvY2tldGNvbnN0cnVjdG9yLXR5cGVvZi13ZWJzb2NrZXQtLXVuZGVmaW5lZFxcXG4uIERldGFpbHM6ICR7ZC5tZXNzYWdlfWApKSx0aGlzLmVtaXQoXCJjbG9zZVwiKX0pfX1hc3luYyBzdGFydFRscyh0KXtpZih0aGlzLnN1YnRscz09PVxudm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkZvciBQb3N0Z3JlcyBTU0wgY29ubmVjdGlvbnMsIHlvdSBtdXN0IHNldCBgbmVvbkNvbmZpZy5zXFxcbnVidGxzYCB0byB0aGUgc3VidGxzIGxpYnJhcnkuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmVvbmRhdGFiYXNlL3NlcnZlcmxlc3MvYmxvXFxcbmIvbWFpbi9DT05GSUcubWQgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpO3RoaXMudGxzU3RhdGU9MTtsZXQgbj10aGlzLnN1YnRscy5UcnVzdGVkQ2VydC5cbmZyb21QRU0odGhpcy5yb290Q2VydHMpLGk9bmV3IHRoaXMuc3VidGxzLldlYlNvY2tldFJlYWRRdWV1ZSh0aGlzLndzKSxzPWkucmVhZC5iaW5kKFxuaSksbz10aGlzLnJhd1dyaXRlLmJpbmQodGhpcyksW3UsY109YXdhaXQgdGhpcy5zdWJ0bHMuc3RhcnRUbHModCxuLHMsbyx7dXNlU05JOiF0aGlzLlxuZGlzYWJsZVNOSSxleHBlY3RQcmVEYXRhOnRoaXMucGlwZWxpbmVUTFM/bmV3IFVpbnQ4QXJyYXkoWzgzXSk6dm9pZCAwfSk7dGhpcy50bHNSZWFkPVxudSx0aGlzLnRsc1dyaXRlPWMsdGhpcy50bHNTdGF0ZT0yLHRoaXMuZW5jcnlwdGVkPSEwLHRoaXMuYXV0aG9yaXplZD0hMCx0aGlzLmVtaXQoXG5cInNlY3VyZUNvbm5lY3Rpb25cIix0aGlzKSx0aGlzLnRsc1JlYWRMb29wKCl9YXN5bmMgdGxzUmVhZExvb3AoKXtmb3IoOzspe2xldCB0PWF3YWl0IHRoaXMuXG50bHNSZWFkKCk7aWYodD09PXZvaWQgMClicmVhazt7bGV0IG49eS5mcm9tKHQpO3RoaXMuZW1pdChcImRhdGFcIixuKX19fXJhd1dyaXRlKHQpe1xuaWYoIXRoaXMuY29hbGVzY2VXcml0ZXMpe3RoaXMud3Muc2VuZCh0KTtyZXR1cm59aWYodGhpcy53cml0ZUJ1ZmZlcj09PXZvaWQgMCl0aGlzLlxud3JpdGVCdWZmZXI9dCxzZXRUaW1lb3V0KCgpPT57dGhpcy53cy5zZW5kKHRoaXMud3JpdGVCdWZmZXIpLHRoaXMud3JpdGVCdWZmZXI9dm9pZCAwfSxcbjApO2Vsc2V7bGV0IG49bmV3IFVpbnQ4QXJyYXkodGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgrdC5sZW5ndGgpO24uc2V0KHRoaXMud3JpdGVCdWZmZXIpLFxubi5zZXQodCx0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCksdGhpcy53cml0ZUJ1ZmZlcj1ufX13cml0ZSh0LG49XCJ1dGY4XCIsaT1zPT57fSl7cmV0dXJuIHQuXG5sZW5ndGg9PT0wPyhpKCksITApOih0eXBlb2YgdD09XCJzdHJpbmdcIiYmKHQ9eS5mcm9tKHQsbikpLHRoaXMudGxzU3RhdGU9PT0wPyh0aGlzLlxucmF3V3JpdGUodCksaSgpKTp0aGlzLnRsc1N0YXRlPT09MT90aGlzLm9uY2UoXCJzZWN1cmVDb25uZWN0aW9uXCIsKCk9Pnt0aGlzLndyaXRlKFxudCxuLGkpfSk6KHRoaXMudGxzV3JpdGUodCksaSgpKSwhMCl9ZW5kKHQ9eS5hbGxvYygwKSxuPVwidXRmOFwiLGk9KCk9Pnt9KXtyZXR1cm4gdGhpcy5cbndyaXRlKHQsbiwoKT0+e3RoaXMud3MuY2xvc2UoKSxpKCl9KSx0aGlzfWRlc3Ryb3koKXtyZXR1cm4gdGhpcy5kZXN0cm95ZWQ9ITAsdGhpcy5cbmVuZCgpfX07YShFLFwiU29ja2V0XCIpLF8oRSxcImRlZmF1bHRzXCIse3Bvb2xRdWVyeVZpYUZldGNoOiExLGZldGNoRW5kcG9pbnQ6YSh0PT5cImhcXFxudHRwczovL1wiK011KHQpK1wiL3NxbFwiLFwiZmV0Y2hFbmRwb2ludFwiKSxmZXRjaENvbm5lY3Rpb25DYWNoZTohMCxmZXRjaEZ1bmN0aW9uOnZvaWQgMCxcbndlYlNvY2tldENvbnN0cnVjdG9yOnZvaWQgMCx3c1Byb3h5OmEodD0+dCtcIi92MlwiLFwid3NQcm94eVwiKSx1c2VTZWN1cmVXZWJTb2NrZXQ6ITAsXG5mb3JjZURpc2FibGVQZ1NTTDohMCxjb2FsZXNjZVdyaXRlczohMCxwaXBlbGluZUNvbm5lY3Q6XCJwYXNzd29yZFwiLHN1YnRsczp2b2lkIDAsXG5yb290Q2VydHM6XCJcIixwaXBlbGluZVRMUzohMSxkaXNhYmxlU05JOiExfSksXyhFLFwib3B0c1wiLHt9KTtfZT1FfSk7dmFyIFlyPUkoVD0+e1widXNlIHN0cmljdFwiO3AoKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoVCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtULlxuTm90aWNlTWVzc2FnZT1ULkRhdGFSb3dNZXNzYWdlPVQuQ29tbWFuZENvbXBsZXRlTWVzc2FnZT1ULlJlYWR5Rm9yUXVlcnlNZXNzYWdlPVQuXG5Ob3RpZmljYXRpb25SZXNwb25zZU1lc3NhZ2U9VC5CYWNrZW5kS2V5RGF0YU1lc3NhZ2U9VC5BdXRoZW50aWNhdGlvbk1ENVBhc3N3b3JkPVxuVC5QYXJhbWV0ZXJTdGF0dXNNZXNzYWdlPVQuUGFyYW1ldGVyRGVzY3JpcHRpb25NZXNzYWdlPVQuUm93RGVzY3JpcHRpb25NZXNzYWdlPVQuXG5GaWVsZD1ULkNvcHlSZXNwb25zZT1ULkNvcHlEYXRhTWVzc2FnZT1ULkRhdGFiYXNlRXJyb3I9VC5jb3B5RG9uZT1ULmVtcHR5UXVlcnk9VC5cbnJlcGxpY2F0aW9uU3RhcnQ9VC5wb3J0YWxTdXNwZW5kZWQ9VC5ub0RhdGE9VC5jbG9zZUNvbXBsZXRlPVQuYmluZENvbXBsZXRlPVQucGFyc2VDb21wbGV0ZT1cbnZvaWQgMDtULnBhcnNlQ29tcGxldGU9e25hbWU6XCJwYXJzZUNvbXBsZXRlXCIsbGVuZ3RoOjV9O1QuYmluZENvbXBsZXRlPXtuYW1lOlwiYmluXFxcbmRDb21wbGV0ZVwiLGxlbmd0aDo1fTtULmNsb3NlQ29tcGxldGU9e25hbWU6XCJjbG9zZUNvbXBsZXRlXCIsbGVuZ3RoOjV9O1Qubm9EYXRhPXtuYW1lOlwiXFxcbm5vRGF0YVwiLGxlbmd0aDo1fTtULnBvcnRhbFN1c3BlbmRlZD17bmFtZTpcInBvcnRhbFN1c3BlbmRlZFwiLGxlbmd0aDo1fTtULnJlcGxpY2F0aW9uU3RhcnQ9XG57bmFtZTpcInJlcGxpY2F0aW9uU3RhcnRcIixsZW5ndGg6NH07VC5lbXB0eVF1ZXJ5PXtuYW1lOlwiZW1wdHlRdWVyeVwiLGxlbmd0aDo0fTtULmNvcHlEb25lPVxue25hbWU6XCJjb3B5RG9uZVwiLGxlbmd0aDo0fTt2YXIga3I9Y2xhc3Mga3IgZXh0ZW5kcyBFcnJvcntjb25zdHJ1Y3RvcihlLHQsbil7c3VwZXIoXG5lKSx0aGlzLmxlbmd0aD10LHRoaXMubmFtZT1ufX07YShrcixcIkRhdGFiYXNlRXJyb3JcIik7dmFyIHZyPWtyO1QuRGF0YWJhc2VFcnJvcj12cjtcbnZhciBVcj1jbGFzcyBVcntjb25zdHJ1Y3RvcihlLHQpe3RoaXMubGVuZ3RoPWUsdGhpcy5jaHVuaz10LHRoaXMubmFtZT1cImNvcHlEYXRhXCJ9fTtcbmEoVXIsXCJDb3B5RGF0YU1lc3NhZ2VcIik7dmFyIEVyPVVyO1QuQ29weURhdGFNZXNzYWdlPUVyO3ZhciBPcj1jbGFzcyBPcntjb25zdHJ1Y3RvcihlLHQsbixpKXtcbnRoaXMubGVuZ3RoPWUsdGhpcy5uYW1lPXQsdGhpcy5iaW5hcnk9bix0aGlzLmNvbHVtblR5cGVzPW5ldyBBcnJheShpKX19O2EoT3IsXCJDb1xcXG5weVJlc3BvbnNlXCIpO3ZhciBfcj1PcjtULkNvcHlSZXNwb25zZT1fcjt2YXIgTnI9Y2xhc3MgTnJ7Y29uc3RydWN0b3IoZSx0LG4saSxzLG8sdSl7XG50aGlzLm5hbWU9ZSx0aGlzLnRhYmxlSUQ9dCx0aGlzLmNvbHVtbklEPW4sdGhpcy5kYXRhVHlwZUlEPWksdGhpcy5kYXRhVHlwZVNpemU9cyxcbnRoaXMuZGF0YVR5cGVNb2RpZmllcj1vLHRoaXMuZm9ybWF0PXV9fTthKE5yLFwiRmllbGRcIik7dmFyIEFyPU5yO1QuRmllbGQ9QXI7dmFyIHFyPWNsYXNzIHFye2NvbnN0cnVjdG9yKGUsdCl7XG50aGlzLmxlbmd0aD1lLHRoaXMuZmllbGRDb3VudD10LHRoaXMubmFtZT1cInJvd0Rlc2NyaXB0aW9uXCIsdGhpcy5maWVsZHM9bmV3IEFycmF5KFxudGhpcy5maWVsZENvdW50KX19O2EocXIsXCJSb3dEZXNjcmlwdGlvbk1lc3NhZ2VcIik7dmFyIENyPXFyO1QuUm93RGVzY3JpcHRpb25NZXNzYWdlPVxuQ3I7dmFyIFFyPWNsYXNzIFFye2NvbnN0cnVjdG9yKGUsdCl7dGhpcy5sZW5ndGg9ZSx0aGlzLnBhcmFtZXRlckNvdW50PXQsdGhpcy5uYW1lPVxuXCJwYXJhbWV0ZXJEZXNjcmlwdGlvblwiLHRoaXMuZGF0YVR5cGVJRHM9bmV3IEFycmF5KHRoaXMucGFyYW1ldGVyQ291bnQpfX07YShRcixcIlBcXFxuYXJhbWV0ZXJEZXNjcmlwdGlvbk1lc3NhZ2VcIik7dmFyIFRyPVFyO1QuUGFyYW1ldGVyRGVzY3JpcHRpb25NZXNzYWdlPVRyO3ZhciBXcj1jbGFzcyBXcntjb25zdHJ1Y3RvcihlLHQsbil7XG50aGlzLmxlbmd0aD1lLHRoaXMucGFyYW1ldGVyTmFtZT10LHRoaXMucGFyYW1ldGVyVmFsdWU9bix0aGlzLm5hbWU9XCJwYXJhbWV0ZXJTdGFcXFxudHVzXCJ9fTthKFdyLFwiUGFyYW1ldGVyU3RhdHVzTWVzc2FnZVwiKTt2YXIgSXI9V3I7VC5QYXJhbWV0ZXJTdGF0dXNNZXNzYWdlPUlyO3ZhciBqcj1jbGFzcyBqcntjb25zdHJ1Y3RvcihlLHQpe1xudGhpcy5sZW5ndGg9ZSx0aGlzLnNhbHQ9dCx0aGlzLm5hbWU9XCJhdXRoZW50aWNhdGlvbk1ENVBhc3N3b3JkXCJ9fTthKGpyLFwiQXV0aGVudGlcXFxuY2F0aW9uTUQ1UGFzc3dvcmRcIik7dmFyIFByPWpyO1QuQXV0aGVudGljYXRpb25NRDVQYXNzd29yZD1Qcjt2YXIgSHI9Y2xhc3MgSHJ7Y29uc3RydWN0b3IoZSx0LG4pe1xudGhpcy5sZW5ndGg9ZSx0aGlzLnByb2Nlc3NJRD10LHRoaXMuc2VjcmV0S2V5PW4sdGhpcy5uYW1lPVwiYmFja2VuZEtleURhdGFcIn19O2EoSHIsXG5cIkJhY2tlbmRLZXlEYXRhTWVzc2FnZVwiKTt2YXIgQnI9SHI7VC5CYWNrZW5kS2V5RGF0YU1lc3NhZ2U9QnI7dmFyIEdyPWNsYXNzIEdye2NvbnN0cnVjdG9yKGUsdCxuLGkpe1xudGhpcy5sZW5ndGg9ZSx0aGlzLnByb2Nlc3NJZD10LHRoaXMuY2hhbm5lbD1uLHRoaXMucGF5bG9hZD1pLHRoaXMubmFtZT1cIm5vdGlmaWNhXFxcbnRpb25cIn19O2EoR3IsXCJOb3RpZmljYXRpb25SZXNwb25zZU1lc3NhZ2VcIik7dmFyIExyPUdyO1QuTm90aWZpY2F0aW9uUmVzcG9uc2VNZXNzYWdlPVxuTHI7dmFyICRyPWNsYXNzICRye2NvbnN0cnVjdG9yKGUsdCl7dGhpcy5sZW5ndGg9ZSx0aGlzLnN0YXR1cz10LHRoaXMubmFtZT1cInJlYWR5XFxcbkZvclF1ZXJ5XCJ9fTthKCRyLFwiUmVhZHlGb3JRdWVyeU1lc3NhZ2VcIik7dmFyIFJyPSRyO1QuUmVhZHlGb3JRdWVyeU1lc3NhZ2U9UnI7dmFyIFZyPWNsYXNzIFZye2NvbnN0cnVjdG9yKGUsdCl7XG50aGlzLmxlbmd0aD1lLHRoaXMudGV4dD10LHRoaXMubmFtZT1cImNvbW1hbmRDb21wbGV0ZVwifX07YShWcixcIkNvbW1hbmRDb21wbGV0ZU1lc1xcXG5zYWdlXCIpO3ZhciBGcj1WcjtULkNvbW1hbmRDb21wbGV0ZU1lc3NhZ2U9RnI7dmFyIEtyPWNsYXNzIEtye2NvbnN0cnVjdG9yKGUsdCl7dGhpcy5cbmxlbmd0aD1lLHRoaXMuZmllbGRzPXQsdGhpcy5uYW1lPVwiZGF0YVJvd1wiLHRoaXMuZmllbGRDb3VudD10Lmxlbmd0aH19O2EoS3IsXCJEYXRhXFxcblJvd01lc3NhZ2VcIik7dmFyIE1yPUtyO1QuRGF0YVJvd01lc3NhZ2U9TXI7dmFyIHpyPWNsYXNzIHpye2NvbnN0cnVjdG9yKGUsdCl7dGhpcy5cbmxlbmd0aD1lLHRoaXMubWVzc2FnZT10LHRoaXMubmFtZT1cIm5vdGljZVwifX07YSh6cixcIk5vdGljZU1lc3NhZ2VcIik7dmFyIERyPXpyO1QuTm90aWNlTWVzc2FnZT1cbkRyfSk7dmFyIG1zPUkoYnQ9PntcInVzZSBzdHJpY3RcIjtwKCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGJ0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO1xuYnQuV3JpdGVyPXZvaWQgMDt2YXIgSnI9Y2xhc3MgSnJ7Y29uc3RydWN0b3IoZT0yNTYpe3RoaXMuc2l6ZT1lLHRoaXMub2Zmc2V0PTUsdGhpcy5cbmhlYWRlclBvc2l0aW9uPTAsdGhpcy5idWZmZXI9eS5hbGxvY1Vuc2FmZShlKX1lbnN1cmUoZSl7dmFyIHQ9dGhpcy5idWZmZXIubGVuZ3RoLVxudGhpcy5vZmZzZXQ7aWYodDxlKXt2YXIgbj10aGlzLmJ1ZmZlcixpPW4ubGVuZ3RoKyhuLmxlbmd0aD4+MSkrZTt0aGlzLmJ1ZmZlcj15LmFsbG9jVW5zYWZlKFxuaSksbi5jb3B5KHRoaXMuYnVmZmVyKX19YWRkSW50MzIoZSl7cmV0dXJuIHRoaXMuZW5zdXJlKDQpLHRoaXMuYnVmZmVyW3RoaXMub2Zmc2V0KytdPVxuZT4+PjI0JjI1NSx0aGlzLmJ1ZmZlclt0aGlzLm9mZnNldCsrXT1lPj4+MTYmMjU1LHRoaXMuYnVmZmVyW3RoaXMub2Zmc2V0KytdPWU+Pj5cbjgmMjU1LHRoaXMuYnVmZmVyW3RoaXMub2Zmc2V0KytdPWU+Pj4wJjI1NSx0aGlzfWFkZEludDE2KGUpe3JldHVybiB0aGlzLmVuc3VyZSgyKSxcbnRoaXMuYnVmZmVyW3RoaXMub2Zmc2V0KytdPWU+Pj44JjI1NSx0aGlzLmJ1ZmZlclt0aGlzLm9mZnNldCsrXT1lPj4+MCYyNTUsdGhpc31hZGRDU3RyaW5nKGUpe1xuaWYoIWUpdGhpcy5lbnN1cmUoMSk7ZWxzZXt2YXIgdD15LmJ5dGVMZW5ndGgoZSk7dGhpcy5lbnN1cmUodCsxKSx0aGlzLmJ1ZmZlci53cml0ZShcbmUsdGhpcy5vZmZzZXQsXCJ1dGYtOFwiKSx0aGlzLm9mZnNldCs9dH1yZXR1cm4gdGhpcy5idWZmZXJbdGhpcy5vZmZzZXQrK109MCx0aGlzfWFkZFN0cmluZyhlPVwiXCIpe1xudmFyIHQ9eS5ieXRlTGVuZ3RoKGUpO3JldHVybiB0aGlzLmVuc3VyZSh0KSx0aGlzLmJ1ZmZlci53cml0ZShlLHRoaXMub2Zmc2V0KSx0aGlzLlxub2Zmc2V0Kz10LHRoaXN9YWRkKGUpe3JldHVybiB0aGlzLmVuc3VyZShlLmxlbmd0aCksZS5jb3B5KHRoaXMuYnVmZmVyLHRoaXMub2Zmc2V0KSxcbnRoaXMub2Zmc2V0Kz1lLmxlbmd0aCx0aGlzfWpvaW4oZSl7aWYoZSl7dGhpcy5idWZmZXJbdGhpcy5oZWFkZXJQb3NpdGlvbl09ZTtsZXQgdD10aGlzLlxub2Zmc2V0LSh0aGlzLmhlYWRlclBvc2l0aW9uKzEpO3RoaXMuYnVmZmVyLndyaXRlSW50MzJCRSh0LHRoaXMuaGVhZGVyUG9zaXRpb24rMSl9XG5yZXR1cm4gdGhpcy5idWZmZXIuc2xpY2UoZT8wOjUsdGhpcy5vZmZzZXQpfWZsdXNoKGUpe3ZhciB0PXRoaXMuam9pbihlKTtyZXR1cm4gdGhpcy5cbm9mZnNldD01LHRoaXMuaGVhZGVyUG9zaXRpb249MCx0aGlzLmJ1ZmZlcj15LmFsbG9jVW5zYWZlKHRoaXMuc2l6ZSksdH19O2EoSnIsXCJXclxcXG5pdGVyXCIpO3ZhciBacj1KcjtidC5Xcml0ZXI9WnJ9KTt2YXIgd3M9SSh4dD0+e1widXNlIHN0cmljdFwiO3AoKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoeHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7XG54dC5zZXJpYWxpemU9dm9pZCAwO3ZhciBYcj1tcygpLE09bmV3IFhyLldyaXRlcixEdT1hKHI9PntNLmFkZEludDE2KDMpLmFkZEludDE2KFxuMCk7Zm9yKGxldCBuIG9mIE9iamVjdC5rZXlzKHIpKU0uYWRkQ1N0cmluZyhuKS5hZGRDU3RyaW5nKHJbbl0pO00uYWRkQ1N0cmluZyhcImNsXFxcbmllbnRfZW5jb2RpbmdcIikuYWRkQ1N0cmluZyhcIlVURjhcIik7dmFyIGU9TS5hZGRDU3RyaW5nKFwiXCIpLmZsdXNoKCksdD1lLmxlbmd0aCs0O3JldHVybiBuZXcgWHIuXG5Xcml0ZXIoKS5hZGRJbnQzMih0KS5hZGQoZSkuZmx1c2goKX0sXCJzdGFydHVwXCIpLGt1PWEoKCk9PntsZXQgcj15LmFsbG9jVW5zYWZlKDgpO1xucmV0dXJuIHIud3JpdGVJbnQzMkJFKDgsMCksci53cml0ZUludDMyQkUoODA4NzcxMDMsNCkscn0sXCJyZXF1ZXN0U3NsXCIpLFV1PWEocj0+TS5cbmFkZENTdHJpbmcocikuZmx1c2goMTEyKSxcInBhc3N3b3JkXCIpLE91PWEoZnVuY3Rpb24ocixlKXtyZXR1cm4gTS5hZGRDU3RyaW5nKHIpLmFkZEludDMyKFxueS5ieXRlTGVuZ3RoKGUpKS5hZGRTdHJpbmcoZSksTS5mbHVzaCgxMTIpfSxcInNlbmRTQVNMSW5pdGlhbFJlc3BvbnNlTWVzc2FnZVwiKSxOdT1hKFxuZnVuY3Rpb24ocil7cmV0dXJuIE0uYWRkU3RyaW5nKHIpLmZsdXNoKDExMil9LFwic2VuZFNDUkFNQ2xpZW50RmluYWxNZXNzYWdlXCIpLHF1PWEoXG5yPT5NLmFkZENTdHJpbmcocikuZmx1c2goODEpLFwicXVlcnlcIiksZ3M9W10sUXU9YShyPT57bGV0IGU9ci5uYW1lfHxcIlwiO2UubGVuZ3RoPjYzJiZcbihjb25zb2xlLmVycm9yKFwiV2FybmluZyEgUG9zdGdyZXMgb25seSBzdXBwb3J0cyA2MyBjaGFyYWN0ZXJzIGZvciBxdWVyeSBuYW1lcy5cIiksXG5jb25zb2xlLmVycm9yKFwiWW91IHN1cHBsaWVkICVzICglcylcIixlLGUubGVuZ3RoKSxjb25zb2xlLmVycm9yKFwiVGhpcyBjYW4gY2F1c2UgY1xcXG5vbmZsaWN0cyBhbmQgc2lsZW50IGVycm9ycyBleGVjdXRpbmcgcXVlcmllc1wiKSk7bGV0IHQ9ci50eXBlc3x8Z3M7Zm9yKHZhciBuPXQubGVuZ3RoLFxuaT1NLmFkZENTdHJpbmcoZSkuYWRkQ1N0cmluZyhyLnRleHQpLmFkZEludDE2KG4pLHM9MDtzPG47cysrKWkuYWRkSW50MzIodFtzXSk7cmV0dXJuIE0uXG5mbHVzaCg4MCl9LFwicGFyc2VcIiksT2U9bmV3IFhyLldyaXRlcixXdT1hKGZ1bmN0aW9uKHIsZSl7Zm9yKGxldCB0PTA7dDxyLmxlbmd0aDt0Kyspe1xubGV0IG49ZT9lKHJbdF0sdCk6clt0XTtuPT1udWxsPyhNLmFkZEludDE2KDApLE9lLmFkZEludDMyKC0xKSk6biBpbnN0YW5jZW9mIHk/KE0uXG5hZGRJbnQxNigxKSxPZS5hZGRJbnQzMihuLmxlbmd0aCksT2UuYWRkKG4pKTooTS5hZGRJbnQxNigwKSxPZS5hZGRJbnQzMih5LmJ5dGVMZW5ndGgoXG5uKSksT2UuYWRkU3RyaW5nKG4pKX19LFwid3JpdGVWYWx1ZXNcIiksanU9YSgocj17fSk9PntsZXQgZT1yLnBvcnRhbHx8XCJcIix0PXIuc3RhdGVtZW50fHxcblwiXCIsbj1yLmJpbmFyeXx8ITEsaT1yLnZhbHVlc3x8Z3Mscz1pLmxlbmd0aDtyZXR1cm4gTS5hZGRDU3RyaW5nKGUpLmFkZENTdHJpbmcodCksXG5NLmFkZEludDE2KHMpLFd1KGksci52YWx1ZU1hcHBlciksTS5hZGRJbnQxNihzKSxNLmFkZChPZS5mbHVzaCgpKSxNLmFkZEludDE2KG4/MTpcbjApLE0uZmx1c2goNjYpfSxcImJpbmRcIiksSHU9eS5mcm9tKFs2OSwwLDAsMCw5LDAsMCwwLDAsMF0pLEd1PWEocj0+e2lmKCFyfHwhci5wb3J0YWwmJlxuIXIucm93cylyZXR1cm4gSHU7bGV0IGU9ci5wb3J0YWx8fFwiXCIsdD1yLnJvd3N8fDAsbj15LmJ5dGVMZW5ndGgoZSksaT00K24rMSs0LHM9eS5cbmFsbG9jVW5zYWZlKDEraSk7cmV0dXJuIHNbMF09Njkscy53cml0ZUludDMyQkUoaSwxKSxzLndyaXRlKGUsNSxcInV0Zi04XCIpLHNbbis1XT1cbjAscy53cml0ZVVJbnQzMkJFKHQscy5sZW5ndGgtNCksc30sXCJleGVjdXRlXCIpLCR1PWEoKHIsZSk9PntsZXQgdD15LmFsbG9jVW5zYWZlKDE2KTtcbnJldHVybiB0LndyaXRlSW50MzJCRSgxNiwwKSx0LndyaXRlSW50MTZCRSgxMjM0LDQpLHQud3JpdGVJbnQxNkJFKDU2NzgsNiksdC53cml0ZUludDMyQkUoXG5yLDgpLHQud3JpdGVJbnQzMkJFKGUsMTIpLHR9LFwiY2FuY2VsXCIpLGVuPWEoKHIsZSk9PntsZXQgbj00K3kuYnl0ZUxlbmd0aChlKSsxLGk9eS5cbmFsbG9jVW5zYWZlKDErbik7cmV0dXJuIGlbMF09cixpLndyaXRlSW50MzJCRShuLDEpLGkud3JpdGUoZSw1LFwidXRmLThcIiksaVtuXT0wLGl9LFxuXCJjc3RyaW5nTWVzc2FnZVwiKSxWdT1NLmFkZENTdHJpbmcoXCJQXCIpLmZsdXNoKDY4KSxLdT1NLmFkZENTdHJpbmcoXCJTXCIpLmZsdXNoKDY4KSxcbnp1PWEocj0+ci5uYW1lP2VuKDY4LGAke3IudHlwZX0ke3IubmFtZXx8XCJcIn1gKTpyLnR5cGU9PT1cIlBcIj9WdTpLdSxcImRlc2NyaWJlXCIpLFl1PWEoXG5yPT57bGV0IGU9YCR7ci50eXBlfSR7ci5uYW1lfHxcIlwifWA7cmV0dXJuIGVuKDY3LGUpfSxcImNsb3NlXCIpLFp1PWEocj0+TS5hZGQocikuZmx1c2goXG4xMDApLFwiY29weURhdGFcIiksSnU9YShyPT5lbigxMDIsciksXCJjb3B5RmFpbFwiKSxTdD1hKHI9PnkuZnJvbShbciwwLDAsMCw0XSksXCJjb2RlXFxcbk9ubHlCdWZmZXJcIiksWHU9U3QoNzIpLGVjPVN0KDgzKSx0Yz1TdCg4OCkscmM9U3QoOTkpLG5jPXtzdGFydHVwOkR1LHBhc3N3b3JkOlV1LFxucmVxdWVzdFNzbDprdSxzZW5kU0FTTEluaXRpYWxSZXNwb25zZU1lc3NhZ2U6T3Usc2VuZFNDUkFNQ2xpZW50RmluYWxNZXNzYWdlOk51LHF1ZXJ5OnF1LFxucGFyc2U6UXUsYmluZDpqdSxleGVjdXRlOkd1LGRlc2NyaWJlOnp1LGNsb3NlOll1LGZsdXNoOmEoKCk9Plh1LFwiZmx1c2hcIiksc3luYzphKFxuKCk9PmVjLFwic3luY1wiKSxlbmQ6YSgoKT0+dGMsXCJlbmRcIiksY29weURhdGE6WnUsY29weURvbmU6YSgoKT0+cmMsXCJjb3B5RG9uZVwiKSxjb3B5RmFpbDpKdSxcbmNhbmNlbDokdX07eHQuc2VyaWFsaXplPW5jfSk7dmFyIGJzPUkodnQ9PntcInVzZSBzdHJpY3RcIjtwKCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHZ0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO1xudnQuQnVmZmVyUmVhZGVyPXZvaWQgMDt2YXIgaWM9eS5hbGxvY1Vuc2FmZSgwKSxybj1jbGFzcyBybntjb25zdHJ1Y3RvcihlPTApe3RoaXMuXG5vZmZzZXQ9ZSx0aGlzLmJ1ZmZlcj1pYyx0aGlzLmVuY29kaW5nPVwidXRmLThcIn1zZXRCdWZmZXIoZSx0KXt0aGlzLm9mZnNldD1lLHRoaXMuXG5idWZmZXI9dH1pbnQxNigpe2xldCBlPXRoaXMuYnVmZmVyLnJlYWRJbnQxNkJFKHRoaXMub2Zmc2V0KTtyZXR1cm4gdGhpcy5vZmZzZXQrPVxuMixlfWJ5dGUoKXtsZXQgZT10aGlzLmJ1ZmZlclt0aGlzLm9mZnNldF07cmV0dXJuIHRoaXMub2Zmc2V0KyssZX1pbnQzMigpe2xldCBlPXRoaXMuXG5idWZmZXIucmVhZEludDMyQkUodGhpcy5vZmZzZXQpO3JldHVybiB0aGlzLm9mZnNldCs9NCxlfXN0cmluZyhlKXtsZXQgdD10aGlzLmJ1ZmZlci5cbnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcsdGhpcy5vZmZzZXQsdGhpcy5vZmZzZXQrZSk7cmV0dXJuIHRoaXMub2Zmc2V0Kz1lLHR9Y3N0cmluZygpe1xubGV0IGU9dGhpcy5vZmZzZXQsdD1lO2Zvcig7dGhpcy5idWZmZXJbdCsrXSE9PTA7KTtyZXR1cm4gdGhpcy5vZmZzZXQ9dCx0aGlzLmJ1ZmZlci5cbnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcsZSx0LTEpfWJ5dGVzKGUpe2xldCB0PXRoaXMuYnVmZmVyLnNsaWNlKHRoaXMub2Zmc2V0LHRoaXMuXG5vZmZzZXQrZSk7cmV0dXJuIHRoaXMub2Zmc2V0Kz1lLHR9fTthKHJuLFwiQnVmZmVyUmVhZGVyXCIpO3ZhciB0bj1ybjt2dC5CdWZmZXJSZWFkZXI9XG50bn0pO3ZhciB2cz1JKEV0PT57XCJ1c2Ugc3RyaWN0XCI7cCgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShFdCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtcbkV0LlBhcnNlcj12b2lkIDA7dmFyIEQ9WXIoKSxzYz1icygpLG5uPTEsb2M9NCxTcz1ubitvYyx4cz15LmFsbG9jVW5zYWZlKDApLG9uPWNsYXNzIG9ue2NvbnN0cnVjdG9yKGUpe1xuaWYodGhpcy5idWZmZXI9eHMsdGhpcy5idWZmZXJMZW5ndGg9MCx0aGlzLmJ1ZmZlck9mZnNldD0wLHRoaXMucmVhZGVyPW5ldyBzYy5CdWZmZXJSZWFkZXIsXG5lPy5tb2RlPT09XCJiaW5hcnlcIil0aHJvdyBuZXcgRXJyb3IoXCJCaW5hcnkgbW9kZSBub3Qgc3VwcG9ydGVkIHlldFwiKTt0aGlzLm1vZGU9ZT8uXG5tb2RlfHxcInRleHRcIn1wYXJzZShlLHQpe3RoaXMubWVyZ2VCdWZmZXIoZSk7bGV0IG49dGhpcy5idWZmZXJPZmZzZXQrdGhpcy5idWZmZXJMZW5ndGgsXG5pPXRoaXMuYnVmZmVyT2Zmc2V0O2Zvcig7aStTczw9bjspe2xldCBzPXRoaXMuYnVmZmVyW2ldLG89dGhpcy5idWZmZXIucmVhZFVJbnQzMkJFKFxuaStubiksdT1ubitvO2lmKHUraTw9bil7bGV0IGM9dGhpcy5oYW5kbGVQYWNrZXQoaStTcyxzLG8sdGhpcy5idWZmZXIpO3QoYyksaSs9dX1lbHNlXG5icmVha31pPT09bj8odGhpcy5idWZmZXI9eHMsdGhpcy5idWZmZXJMZW5ndGg9MCx0aGlzLmJ1ZmZlck9mZnNldD0wKToodGhpcy5idWZmZXJMZW5ndGg9XG5uLWksdGhpcy5idWZmZXJPZmZzZXQ9aSl9bWVyZ2VCdWZmZXIoZSl7aWYodGhpcy5idWZmZXJMZW5ndGg+MCl7bGV0IHQ9dGhpcy5idWZmZXJMZW5ndGgrXG5lLmJ5dGVMZW5ndGg7aWYodCt0aGlzLmJ1ZmZlck9mZnNldD50aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKXtsZXQgaTtpZih0PD10aGlzLmJ1ZmZlci5cbmJ5dGVMZW5ndGgmJnRoaXMuYnVmZmVyT2Zmc2V0Pj10aGlzLmJ1ZmZlckxlbmd0aClpPXRoaXMuYnVmZmVyO2Vsc2V7bGV0IHM9dGhpcy5idWZmZXIuXG5ieXRlTGVuZ3RoKjI7Zm9yKDt0Pj1zOylzKj0yO2k9eS5hbGxvY1Vuc2FmZShzKX10aGlzLmJ1ZmZlci5jb3B5KGksMCx0aGlzLmJ1ZmZlck9mZnNldCxcbnRoaXMuYnVmZmVyT2Zmc2V0K3RoaXMuYnVmZmVyTGVuZ3RoKSx0aGlzLmJ1ZmZlcj1pLHRoaXMuYnVmZmVyT2Zmc2V0PTB9ZS5jb3B5KHRoaXMuXG5idWZmZXIsdGhpcy5idWZmZXJPZmZzZXQrdGhpcy5idWZmZXJMZW5ndGgpLHRoaXMuYnVmZmVyTGVuZ3RoPXR9ZWxzZSB0aGlzLmJ1ZmZlcj1cbmUsdGhpcy5idWZmZXJPZmZzZXQ9MCx0aGlzLmJ1ZmZlckxlbmd0aD1lLmJ5dGVMZW5ndGh9aGFuZGxlUGFja2V0KGUsdCxuLGkpe3N3aXRjaCh0KXtjYXNlIDUwOlxucmV0dXJuIEQuYmluZENvbXBsZXRlO2Nhc2UgNDk6cmV0dXJuIEQucGFyc2VDb21wbGV0ZTtjYXNlIDUxOnJldHVybiBELmNsb3NlQ29tcGxldGU7Y2FzZSAxMTA6XG5yZXR1cm4gRC5ub0RhdGE7Y2FzZSAxMTU6cmV0dXJuIEQucG9ydGFsU3VzcGVuZGVkO2Nhc2UgOTk6cmV0dXJuIEQuY29weURvbmU7Y2FzZSA4NzpcbnJldHVybiBELnJlcGxpY2F0aW9uU3RhcnQ7Y2FzZSA3MzpyZXR1cm4gRC5lbXB0eVF1ZXJ5O2Nhc2UgNjg6cmV0dXJuIHRoaXMucGFyc2VEYXRhUm93TWVzc2FnZShcbmUsbixpKTtjYXNlIDY3OnJldHVybiB0aGlzLnBhcnNlQ29tbWFuZENvbXBsZXRlTWVzc2FnZShlLG4saSk7Y2FzZSA5MDpyZXR1cm4gdGhpcy5cbnBhcnNlUmVhZHlGb3JRdWVyeU1lc3NhZ2UoZSxuLGkpO2Nhc2UgNjU6cmV0dXJuIHRoaXMucGFyc2VOb3RpZmljYXRpb25NZXNzYWdlKGUsXG5uLGkpO2Nhc2UgODI6cmV0dXJuIHRoaXMucGFyc2VBdXRoZW50aWNhdGlvblJlc3BvbnNlKGUsbixpKTtjYXNlIDgzOnJldHVybiB0aGlzLlxucGFyc2VQYXJhbWV0ZXJTdGF0dXNNZXNzYWdlKGUsbixpKTtjYXNlIDc1OnJldHVybiB0aGlzLnBhcnNlQmFja2VuZEtleURhdGEoZSxuLGkpO2Nhc2UgNjk6XG5yZXR1cm4gdGhpcy5wYXJzZUVycm9yTWVzc2FnZShlLG4saSxcImVycm9yXCIpO2Nhc2UgNzg6cmV0dXJuIHRoaXMucGFyc2VFcnJvck1lc3NhZ2UoXG5lLG4saSxcIm5vdGljZVwiKTtjYXNlIDg0OnJldHVybiB0aGlzLnBhcnNlUm93RGVzY3JpcHRpb25NZXNzYWdlKGUsbixpKTtjYXNlIDExNjpyZXR1cm4gdGhpcy5cbnBhcnNlUGFyYW1ldGVyRGVzY3JpcHRpb25NZXNzYWdlKGUsbixpKTtjYXNlIDcxOnJldHVybiB0aGlzLnBhcnNlQ29weUluTWVzc2FnZShlLFxubixpKTtjYXNlIDcyOnJldHVybiB0aGlzLnBhcnNlQ29weU91dE1lc3NhZ2UoZSxuLGkpO2Nhc2UgMTAwOnJldHVybiB0aGlzLnBhcnNlQ29weURhdGEoXG5lLG4saSk7ZGVmYXVsdDpyZXR1cm4gbmV3IEQuRGF0YWJhc2VFcnJvcihcInJlY2VpdmVkIGludmFsaWQgcmVzcG9uc2U6IFwiK3QudG9TdHJpbmcoXG4xNiksbixcImVycm9yXCIpfX1wYXJzZVJlYWR5Rm9yUXVlcnlNZXNzYWdlKGUsdCxuKXt0aGlzLnJlYWRlci5zZXRCdWZmZXIoZSxuKTtsZXQgaT10aGlzLlxucmVhZGVyLnN0cmluZygxKTtyZXR1cm4gbmV3IEQuUmVhZHlGb3JRdWVyeU1lc3NhZ2UodCxpKX1wYXJzZUNvbW1hbmRDb21wbGV0ZU1lc3NhZ2UoZSx0LG4pe1xudGhpcy5yZWFkZXIuc2V0QnVmZmVyKGUsbik7bGV0IGk9dGhpcy5yZWFkZXIuY3N0cmluZygpO3JldHVybiBuZXcgRC5Db21tYW5kQ29tcGxldGVNZXNzYWdlKFxudCxpKX1wYXJzZUNvcHlEYXRhKGUsdCxuKXtsZXQgaT1uLnNsaWNlKGUsZSsodC00KSk7cmV0dXJuIG5ldyBELkNvcHlEYXRhTWVzc2FnZShcbnQsaSl9cGFyc2VDb3B5SW5NZXNzYWdlKGUsdCxuKXtyZXR1cm4gdGhpcy5wYXJzZUNvcHlNZXNzYWdlKGUsdCxuLFwiY29weUluUmVzcG9uc1xcXG5lXCIpfXBhcnNlQ29weU91dE1lc3NhZ2UoZSx0LG4pe3JldHVybiB0aGlzLnBhcnNlQ29weU1lc3NhZ2UoZSx0LG4sXCJjb3B5T3V0UmVzcG9uXFxcbnNlXCIpfXBhcnNlQ29weU1lc3NhZ2UoZSx0LG4saSl7dGhpcy5yZWFkZXIuc2V0QnVmZmVyKGUsbik7bGV0IHM9dGhpcy5yZWFkZXIuYnl0ZSgpIT09XG4wLG89dGhpcy5yZWFkZXIuaW50MTYoKSx1PW5ldyBELkNvcHlSZXNwb25zZSh0LGkscyxvKTtmb3IobGV0IGM9MDtjPG87YysrKXUuY29sdW1uVHlwZXNbY109XG50aGlzLnJlYWRlci5pbnQxNigpO3JldHVybiB1fXBhcnNlTm90aWZpY2F0aW9uTWVzc2FnZShlLHQsbil7dGhpcy5yZWFkZXIuc2V0QnVmZmVyKFxuZSxuKTtsZXQgaT10aGlzLnJlYWRlci5pbnQzMigpLHM9dGhpcy5yZWFkZXIuY3N0cmluZygpLG89dGhpcy5yZWFkZXIuY3N0cmluZygpO3JldHVybiBuZXcgRC5cbk5vdGlmaWNhdGlvblJlc3BvbnNlTWVzc2FnZSh0LGkscyxvKX1wYXJzZVJvd0Rlc2NyaXB0aW9uTWVzc2FnZShlLHQsbil7dGhpcy5yZWFkZXIuXG5zZXRCdWZmZXIoZSxuKTtsZXQgaT10aGlzLnJlYWRlci5pbnQxNigpLHM9bmV3IEQuUm93RGVzY3JpcHRpb25NZXNzYWdlKHQsaSk7Zm9yKGxldCBvPTA7bzxcbmk7bysrKXMuZmllbGRzW29dPXRoaXMucGFyc2VGaWVsZCgpO3JldHVybiBzfXBhcnNlRmllbGQoKXtsZXQgZT10aGlzLnJlYWRlci5jc3RyaW5nKCksXG50PXRoaXMucmVhZGVyLmludDMyKCksbj10aGlzLnJlYWRlci5pbnQxNigpLGk9dGhpcy5yZWFkZXIuaW50MzIoKSxzPXRoaXMucmVhZGVyLlxuaW50MTYoKSxvPXRoaXMucmVhZGVyLmludDMyKCksdT10aGlzLnJlYWRlci5pbnQxNigpPT09MD9cInRleHRcIjpcImJpbmFyeVwiO3JldHVybiBuZXcgRC5cbkZpZWxkKGUsdCxuLGkscyxvLHUpfXBhcnNlUGFyYW1ldGVyRGVzY3JpcHRpb25NZXNzYWdlKGUsdCxuKXt0aGlzLnJlYWRlci5zZXRCdWZmZXIoXG5lLG4pO2xldCBpPXRoaXMucmVhZGVyLmludDE2KCkscz1uZXcgRC5QYXJhbWV0ZXJEZXNjcmlwdGlvbk1lc3NhZ2UodCxpKTtmb3IobGV0IG89MDtvPFxuaTtvKyspcy5kYXRhVHlwZUlEc1tvXT10aGlzLnJlYWRlci5pbnQzMigpO3JldHVybiBzfXBhcnNlRGF0YVJvd01lc3NhZ2UoZSx0LG4pe3RoaXMuXG5yZWFkZXIuc2V0QnVmZmVyKGUsbik7bGV0IGk9dGhpcy5yZWFkZXIuaW50MTYoKSxzPW5ldyBBcnJheShpKTtmb3IobGV0IG89MDtvPGk7bysrKXtcbmxldCB1PXRoaXMucmVhZGVyLmludDMyKCk7c1tvXT11PT09LTE/bnVsbDp0aGlzLnJlYWRlci5zdHJpbmcodSl9cmV0dXJuIG5ldyBELkRhdGFSb3dNZXNzYWdlKFxudCxzKX1wYXJzZVBhcmFtZXRlclN0YXR1c01lc3NhZ2UoZSx0LG4pe3RoaXMucmVhZGVyLnNldEJ1ZmZlcihlLG4pO2xldCBpPXRoaXMucmVhZGVyLlxuY3N0cmluZygpLHM9dGhpcy5yZWFkZXIuY3N0cmluZygpO3JldHVybiBuZXcgRC5QYXJhbWV0ZXJTdGF0dXNNZXNzYWdlKHQsaSxzKX1wYXJzZUJhY2tlbmRLZXlEYXRhKGUsdCxuKXtcbnRoaXMucmVhZGVyLnNldEJ1ZmZlcihlLG4pO2xldCBpPXRoaXMucmVhZGVyLmludDMyKCkscz10aGlzLnJlYWRlci5pbnQzMigpO3JldHVybiBuZXcgRC5cbkJhY2tlbmRLZXlEYXRhTWVzc2FnZSh0LGkscyl9cGFyc2VBdXRoZW50aWNhdGlvblJlc3BvbnNlKGUsdCxuKXt0aGlzLnJlYWRlci5zZXRCdWZmZXIoXG5lLG4pO2xldCBpPXRoaXMucmVhZGVyLmludDMyKCkscz17bmFtZTpcImF1dGhlbnRpY2F0aW9uT2tcIixsZW5ndGg6dH07c3dpdGNoKGkpe2Nhc2UgMDpcbmJyZWFrO2Nhc2UgMzpzLmxlbmd0aD09PTgmJihzLm5hbWU9XCJhdXRoZW50aWNhdGlvbkNsZWFydGV4dFBhc3N3b3JkXCIpO2JyZWFrO2Nhc2UgNTpcbmlmKHMubGVuZ3RoPT09MTIpe3MubmFtZT1cImF1dGhlbnRpY2F0aW9uTUQ1UGFzc3dvcmRcIjtsZXQgdT10aGlzLnJlYWRlci5ieXRlcyg0KTtcbnJldHVybiBuZXcgRC5BdXRoZW50aWNhdGlvbk1ENVBhc3N3b3JkKHQsdSl9YnJlYWs7Y2FzZSAxMDpzLm5hbWU9XCJhdXRoZW50aWNhdGlvblxcXG5TQVNMXCIscy5tZWNoYW5pc21zPVtdO2xldCBvO2RvIG89dGhpcy5yZWFkZXIuY3N0cmluZygpLG8mJnMubWVjaGFuaXNtcy5wdXNoKG8pO3doaWxlKG8pO1xuYnJlYWs7Y2FzZSAxMTpzLm5hbWU9XCJhdXRoZW50aWNhdGlvblNBU0xDb250aW51ZVwiLHMuZGF0YT10aGlzLnJlYWRlci5zdHJpbmcodC04KTtcbmJyZWFrO2Nhc2UgMTI6cy5uYW1lPVwiYXV0aGVudGljYXRpb25TQVNMRmluYWxcIixzLmRhdGE9dGhpcy5yZWFkZXIuc3RyaW5nKHQtOCk7YnJlYWs7ZGVmYXVsdDpcbnRocm93IG5ldyBFcnJvcihcIlVua25vd24gYXV0aGVudGljYXRpb25PayBtZXNzYWdlIHR5cGUgXCIraSl9cmV0dXJuIHN9cGFyc2VFcnJvck1lc3NhZ2UoZSx0LG4saSl7XG50aGlzLnJlYWRlci5zZXRCdWZmZXIoZSxuKTtsZXQgcz17fSxvPXRoaXMucmVhZGVyLnN0cmluZygxKTtmb3IoO28hPT1cIlxcMFwiOylzW29dPVxudGhpcy5yZWFkZXIuY3N0cmluZygpLG89dGhpcy5yZWFkZXIuc3RyaW5nKDEpO2xldCB1PXMuTSxjPWk9PT1cIm5vdGljZVwiP25ldyBELk5vdGljZU1lc3NhZ2UoXG50LHUpOm5ldyBELkRhdGFiYXNlRXJyb3IodSx0LGkpO3JldHVybiBjLnNldmVyaXR5PXMuUyxjLmNvZGU9cy5DLGMuZGV0YWlsPXMuRCxjLlxuaGludD1zLkgsYy5wb3NpdGlvbj1zLlAsYy5pbnRlcm5hbFBvc2l0aW9uPXMucCxjLmludGVybmFsUXVlcnk9cy5xLGMud2hlcmU9cy5XLGMuXG5zY2hlbWE9cy5zLGMudGFibGU9cy50LGMuY29sdW1uPXMuYyxjLmRhdGFUeXBlPXMuZCxjLmNvbnN0cmFpbnQ9cy5uLGMuZmlsZT1zLkYsYy5cbmxpbmU9cy5MLGMucm91dGluZT1zLlIsY319O2Eob24sXCJQYXJzZXJcIik7dmFyIHNuPW9uO0V0LlBhcnNlcj1zbn0pO3ZhciBhbj1JKFNlPT57XCJ1c2Ugc3RyaWN0XCI7cCgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShTZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtcblNlLkRhdGFiYXNlRXJyb3I9U2Uuc2VyaWFsaXplPVNlLnBhcnNlPXZvaWQgMDt2YXIgYWM9WXIoKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5TZSxcIkRhdGFiYXNlRXJyb3JcIix7ZW51bWVyYWJsZTohMCxnZXQ6YShmdW5jdGlvbigpe3JldHVybiBhYy5EYXRhYmFzZUVycm9yfSxcImdldFwiKX0pO1xudmFyIHVjPXdzKCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KFNlLFwic2VyaWFsaXplXCIse2VudW1lcmFibGU6ITAsZ2V0OmEoZnVuY3Rpb24oKXtcbnJldHVybiB1Yy5zZXJpYWxpemV9LFwiZ2V0XCIpfSk7dmFyIGNjPXZzKCk7ZnVuY3Rpb24gaGMocixlKXtsZXQgdD1uZXcgY2MuUGFyc2VyO3JldHVybiByLlxub24oXCJkYXRhXCIsbj0+dC5wYXJzZShuLGUpKSxuZXcgUHJvbWlzZShuPT5yLm9uKFwiZW5kXCIsKCk9Pm4oKSkpfWEoaGMsXCJwYXJzZVwiKTtTZS5cbnBhcnNlPWhjfSk7dmFyIEVzPXt9O2llKEVzLHtjb25uZWN0OigpPT5sY30pO2Z1bmN0aW9uIGxjKHtzb2NrZXQ6cixzZXJ2ZXJuYW1lOmV9KXtyZXR1cm4gci5cbnN0YXJ0VGxzKGUpLHJ9dmFyIF9zPXooKCk9PntcInVzZSBzdHJpY3RcIjtwKCk7YShsYyxcImNvbm5lY3RcIil9KTt2YXIgaG49SSgodGYsVHMpPT57XCJ1c2Ugc3RyaWN0XCI7cCgpO3ZhciBBcz0od3QoKSxOKHlzKSksZmM9d2UoKS5FdmVudEVtaXR0ZXIse3BhcnNlOnBjLFxuc2VyaWFsaXplOlF9PWFuKCksQ3M9US5mbHVzaCgpLGRjPVEuc3luYygpLHljPVEuZW5kKCksY249Y2xhc3MgY24gZXh0ZW5kcyBmY3tjb25zdHJ1Y3RvcihlKXtcbnN1cGVyKCksZT1lfHx7fSx0aGlzLnN0cmVhbT1lLnN0cmVhbXx8bmV3IEFzLlNvY2tldCx0aGlzLl9rZWVwQWxpdmU9ZS5rZWVwQWxpdmUsXG50aGlzLl9rZWVwQWxpdmVJbml0aWFsRGVsYXlNaWxsaXM9ZS5rZWVwQWxpdmVJbml0aWFsRGVsYXlNaWxsaXMsdGhpcy5sYXN0QnVmZmVyPVxuITEsdGhpcy5wYXJzZWRTdGF0ZW1lbnRzPXt9LHRoaXMuc3NsPWUuc3NsfHwhMSx0aGlzLl9lbmRpbmc9ITEsdGhpcy5fZW1pdE1lc3NhZ2U9XG4hMTt2YXIgdD10aGlzO3RoaXMub24oXCJuZXdMaXN0ZW5lclwiLGZ1bmN0aW9uKG4pe249PT1cIm1lc3NhZ2VcIiYmKHQuX2VtaXRNZXNzYWdlPSEwKX0pfWNvbm5lY3QoZSx0KXtcbnZhciBuPXRoaXM7dGhpcy5fY29ubmVjdGluZz0hMCx0aGlzLnN0cmVhbS5zZXROb0RlbGF5KCEwKSx0aGlzLnN0cmVhbS5jb25uZWN0KGUsXG50KSx0aGlzLnN0cmVhbS5vbmNlKFwiY29ubmVjdFwiLGZ1bmN0aW9uKCl7bi5fa2VlcEFsaXZlJiZuLnN0cmVhbS5zZXRLZWVwQWxpdmUoITAsXG5uLl9rZWVwQWxpdmVJbml0aWFsRGVsYXlNaWxsaXMpLG4uZW1pdChcImNvbm5lY3RcIil9KTtsZXQgaT1hKGZ1bmN0aW9uKHMpe24uX2VuZGluZyYmXG4ocy5jb2RlPT09XCJFQ09OTlJFU0VUXCJ8fHMuY29kZT09PVwiRVBJUEVcIil8fG4uZW1pdChcImVycm9yXCIscyl9LFwicmVwb3J0U3RyZWFtRXJyb3JcIik7XG5pZih0aGlzLnN0cmVhbS5vbihcImVycm9yXCIsaSksdGhpcy5zdHJlYW0ub24oXCJjbG9zZVwiLGZ1bmN0aW9uKCl7bi5lbWl0KFwiZW5kXCIpfSksIXRoaXMuXG5zc2wpcmV0dXJuIHRoaXMuYXR0YWNoTGlzdGVuZXJzKHRoaXMuc3RyZWFtKTt0aGlzLnN0cmVhbS5vbmNlKFwiZGF0YVwiLGZ1bmN0aW9uKHMpe1xudmFyIG89cy50b1N0cmluZyhcInV0ZjhcIik7c3dpdGNoKG8pe2Nhc2VcIlNcIjpicmVhaztjYXNlXCJOXCI6cmV0dXJuIG4uc3RyZWFtLmVuZCgpLG4uXG5lbWl0KFwiZXJyb3JcIixuZXcgRXJyb3IoXCJUaGUgc2VydmVyIGRvZXMgbm90IHN1cHBvcnQgU1NMIGNvbm5lY3Rpb25zXCIpKTtkZWZhdWx0OnJldHVybiBuLlxuc3RyZWFtLmVuZCgpLG4uZW1pdChcImVycm9yXCIsbmV3IEVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIGVzdGFibGlzaGluZyBhbiBTU0wgY29cXFxubm5lY3Rpb25cIikpfXZhciB1PShfcygpLE4oRXMpKTtsZXQgYz17c29ja2V0Om4uc3RyZWFtfTtuLnNzbCE9PSEwJiYoT2JqZWN0LmFzc2lnbihcbmMsbi5zc2wpLFwia2V5XCJpbiBuLnNzbCYmKGMua2V5PW4uc3NsLmtleSkpLEFzLmlzSVAodCk9PT0wJiYoYy5zZXJ2ZXJuYW1lPXQpO3RyeXtcbm4uc3RyZWFtPXUuY29ubmVjdChjKX1jYXRjaChoKXtyZXR1cm4gbi5lbWl0KFwiZXJyb3JcIixoKX1uLmF0dGFjaExpc3RlbmVycyhuLnN0cmVhbSksXG5uLnN0cmVhbS5vbihcImVycm9yXCIsaSksbi5lbWl0KFwic3NsY29ubmVjdFwiKX0pfWF0dGFjaExpc3RlbmVycyhlKXtlLm9uKFwiZW5kXCIsKCk9PntcbnRoaXMuZW1pdChcImVuZFwiKX0pLHBjKGUsdD0+e3ZhciBuPXQubmFtZT09PVwiZXJyb3JcIj9cImVycm9yTWVzc2FnZVwiOnQubmFtZTt0aGlzLl9lbWl0TWVzc2FnZSYmXG50aGlzLmVtaXQoXCJtZXNzYWdlXCIsdCksdGhpcy5lbWl0KG4sdCl9KX1yZXF1ZXN0U3NsKCl7dGhpcy5zdHJlYW0ud3JpdGUoUS5yZXF1ZXN0U3NsKCkpfXN0YXJ0dXAoZSl7XG50aGlzLnN0cmVhbS53cml0ZShRLnN0YXJ0dXAoZSkpfWNhbmNlbChlLHQpe3RoaXMuX3NlbmQoUS5jYW5jZWwoZSx0KSl9cGFzc3dvcmQoZSl7XG50aGlzLl9zZW5kKFEucGFzc3dvcmQoZSkpfXNlbmRTQVNMSW5pdGlhbFJlc3BvbnNlTWVzc2FnZShlLHQpe3RoaXMuX3NlbmQoUS5zZW5kU0FTTEluaXRpYWxSZXNwb25zZU1lc3NhZ2UoXG5lLHQpKX1zZW5kU0NSQU1DbGllbnRGaW5hbE1lc3NhZ2UoZSl7dGhpcy5fc2VuZChRLnNlbmRTQ1JBTUNsaWVudEZpbmFsTWVzc2FnZShlKSl9X3NlbmQoZSl7XG5yZXR1cm4gdGhpcy5zdHJlYW0ud3JpdGFibGU/dGhpcy5zdHJlYW0ud3JpdGUoZSk6ITF9cXVlcnkoZSl7dGhpcy5fc2VuZChRLnF1ZXJ5KFxuZSkpfXBhcnNlKGUpe3RoaXMuX3NlbmQoUS5wYXJzZShlKSl9YmluZChlKXt0aGlzLl9zZW5kKFEuYmluZChlKSl9ZXhlY3V0ZShlKXt0aGlzLlxuX3NlbmQoUS5leGVjdXRlKGUpKX1mbHVzaCgpe3RoaXMuc3RyZWFtLndyaXRhYmxlJiZ0aGlzLnN0cmVhbS53cml0ZShDcyl9c3luYygpe3RoaXMuXG5fZW5kaW5nPSEwLHRoaXMuX3NlbmQoQ3MpLHRoaXMuX3NlbmQoZGMpfXJlZigpe3RoaXMuc3RyZWFtLnJlZigpfXVucmVmKCl7dGhpcy5zdHJlYW0uXG51bnJlZigpfWVuZCgpe2lmKHRoaXMuX2VuZGluZz0hMCwhdGhpcy5fY29ubmVjdGluZ3x8IXRoaXMuc3RyZWFtLndyaXRhYmxlKXt0aGlzLlxuc3RyZWFtLmVuZCgpO3JldHVybn1yZXR1cm4gdGhpcy5zdHJlYW0ud3JpdGUoeWMsKCk9Pnt0aGlzLnN0cmVhbS5lbmQoKX0pfWNsb3NlKGUpe1xudGhpcy5fc2VuZChRLmNsb3NlKGUpKX1kZXNjcmliZShlKXt0aGlzLl9zZW5kKFEuZGVzY3JpYmUoZSkpfXNlbmRDb3B5RnJvbUNodW5rKGUpe1xudGhpcy5fc2VuZChRLmNvcHlEYXRhKGUpKX1lbmRDb3B5RnJvbSgpe3RoaXMuX3NlbmQoUS5jb3B5RG9uZSgpKX1zZW5kQ29weUZhaWwoZSl7XG50aGlzLl9zZW5kKFEuY29weUZhaWwoZSkpfX07YShjbixcIkNvbm5lY3Rpb25cIik7dmFyIHVuPWNuO1RzLmV4cG9ydHM9dW59KTt2YXIgQnM9SSgob2YsUHMpPT57XCJ1c2Ugc3RyaWN0XCI7cCgpO3ZhciBtYz13ZSgpLkV2ZW50RW1pdHRlcixzZj0oSGUoKSxOKGplKSksZ2M9ZXQoKSxcbmxuPXFpKCksd2M9WmkoKSxiYz1tdCgpLFNjPWd0KCksSXM9cHMoKSx4Yz1YZSgpLHZjPWhuKCksZm49Y2xhc3MgZm4gZXh0ZW5kcyBtY3tjb25zdHJ1Y3RvcihlKXtcbnN1cGVyKCksdGhpcy5jb25uZWN0aW9uUGFyYW1ldGVycz1uZXcgU2MoZSksdGhpcy51c2VyPXRoaXMuY29ubmVjdGlvblBhcmFtZXRlcnMuXG51c2VyLHRoaXMuZGF0YWJhc2U9dGhpcy5jb25uZWN0aW9uUGFyYW1ldGVycy5kYXRhYmFzZSx0aGlzLnBvcnQ9dGhpcy5jb25uZWN0aW9uUGFyYW1ldGVycy5cbnBvcnQsdGhpcy5ob3N0PXRoaXMuY29ubmVjdGlvblBhcmFtZXRlcnMuaG9zdCxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInBhc3N3b1xcXG5yZFwiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCx2YWx1ZTp0aGlzLmNvbm5lY3Rpb25QYXJhbWV0ZXJzLnBhc3N3b3JkfSksXG50aGlzLnJlcGxpY2F0aW9uPXRoaXMuY29ubmVjdGlvblBhcmFtZXRlcnMucmVwbGljYXRpb247dmFyIHQ9ZXx8e307dGhpcy5fUHJvbWlzZT1cbnQuUHJvbWlzZXx8Uy5Qcm9taXNlLHRoaXMuX3R5cGVzPW5ldyBiYyh0LnR5cGVzKSx0aGlzLl9lbmRpbmc9ITEsdGhpcy5fY29ubmVjdGluZz1cbiExLHRoaXMuX2Nvbm5lY3RlZD0hMSx0aGlzLl9jb25uZWN0aW9uRXJyb3I9ITEsdGhpcy5fcXVlcnlhYmxlPSEwLHRoaXMuY29ubmVjdGlvbj1cbnQuY29ubmVjdGlvbnx8bmV3IHZjKHtzdHJlYW06dC5zdHJlYW0sc3NsOnRoaXMuY29ubmVjdGlvblBhcmFtZXRlcnMuc3NsLGtlZXBBbGl2ZTp0Llxua2VlcEFsaXZlfHwhMSxrZWVwQWxpdmVJbml0aWFsRGVsYXlNaWxsaXM6dC5rZWVwQWxpdmVJbml0aWFsRGVsYXlNaWxsaXN8fDAsZW5jb2Rpbmc6dGhpcy5cbmNvbm5lY3Rpb25QYXJhbWV0ZXJzLmNsaWVudF9lbmNvZGluZ3x8XCJ1dGY4XCJ9KSx0aGlzLnF1ZXJ5UXVldWU9W10sdGhpcy5iaW5hcnk9dC5cbmJpbmFyeXx8eGMuYmluYXJ5LHRoaXMucHJvY2Vzc0lEPW51bGwsdGhpcy5zZWNyZXRLZXk9bnVsbCx0aGlzLnNzbD10aGlzLmNvbm5lY3Rpb25QYXJhbWV0ZXJzLlxuc3NsfHwhMSx0aGlzLnNzbCYmdGhpcy5zc2wua2V5JiZPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5zc2wsXCJrZXlcIix7ZW51bWVyYWJsZTohMX0pLFxudGhpcy5fY29ubmVjdGlvblRpbWVvdXRNaWxsaXM9dC5jb25uZWN0aW9uVGltZW91dE1pbGxpc3x8MH1fZXJyb3JBbGxRdWVyaWVzKGUpe2xldCB0PWEoXG5uPT57bS5uZXh0VGljaygoKT0+e24uaGFuZGxlRXJyb3IoZSx0aGlzLmNvbm5lY3Rpb24pfSl9LFwiZW5xdWV1ZUVycm9yXCIpO3RoaXMuYWN0aXZlUXVlcnkmJlxuKHQodGhpcy5hY3RpdmVRdWVyeSksdGhpcy5hY3RpdmVRdWVyeT1udWxsKSx0aGlzLnF1ZXJ5UXVldWUuZm9yRWFjaCh0KSx0aGlzLnF1ZXJ5UXVldWUuXG5sZW5ndGg9MH1fY29ubmVjdChlKXt2YXIgdD10aGlzLG49dGhpcy5jb25uZWN0aW9uO2lmKHRoaXMuX2Nvbm5lY3Rpb25DYWxsYmFjaz1lLFxudGhpcy5fY29ubmVjdGluZ3x8dGhpcy5fY29ubmVjdGVkKXtsZXQgaT1uZXcgRXJyb3IoXCJDbGllbnQgaGFzIGFscmVhZHkgYmVlbiBjb25uXFxcbmVjdGVkLiBZb3UgY2Fubm90IHJldXNlIGEgY2xpZW50LlwiKTttLm5leHRUaWNrKCgpPT57ZShpKX0pO3JldHVybn10aGlzLl9jb25uZWN0aW5nPVxuITAsdGhpcy5jb25uZWN0aW9uVGltZW91dEhhbmRsZSx0aGlzLl9jb25uZWN0aW9uVGltZW91dE1pbGxpcz4wJiYodGhpcy5jb25uZWN0aW9uVGltZW91dEhhbmRsZT1cbnNldFRpbWVvdXQoKCk9PntuLl9lbmRpbmc9ITAsbi5zdHJlYW0uZGVzdHJveShuZXcgRXJyb3IoXCJ0aW1lb3V0IGV4cGlyZWRcIikpfSx0aGlzLlxuX2Nvbm5lY3Rpb25UaW1lb3V0TWlsbGlzKSksdGhpcy5ob3N0JiZ0aGlzLmhvc3QuaW5kZXhPZihcIi9cIik9PT0wP24uY29ubmVjdCh0aGlzLlxuaG9zdCtcIi8ucy5QR1NRTC5cIit0aGlzLnBvcnQpOm4uY29ubmVjdCh0aGlzLnBvcnQsdGhpcy5ob3N0KSxuLm9uKFwiY29ubmVjdFwiLGZ1bmN0aW9uKCl7XG50LnNzbD9uLnJlcXVlc3RTc2woKTpuLnN0YXJ0dXAodC5nZXRTdGFydHVwQ29uZigpKX0pLG4ub24oXCJzc2xjb25uZWN0XCIsZnVuY3Rpb24oKXtcbm4uc3RhcnR1cCh0LmdldFN0YXJ0dXBDb25mKCkpfSksdGhpcy5fYXR0YWNoTGlzdGVuZXJzKG4pLG4ub25jZShcImVuZFwiLCgpPT57bGV0IGk9dGhpcy5cbl9lbmRpbmc/bmV3IEVycm9yKFwiQ29ubmVjdGlvbiB0ZXJtaW5hdGVkXCIpOm5ldyBFcnJvcihcIkNvbm5lY3Rpb24gdGVybWluYXRlZCB1bmV4XFxcbnBlY3RlZGx5XCIpO2NsZWFyVGltZW91dCh0aGlzLmNvbm5lY3Rpb25UaW1lb3V0SGFuZGxlKSx0aGlzLl9lcnJvckFsbFF1ZXJpZXMoaSksdGhpcy5cbl9lbmRpbmd8fCh0aGlzLl9jb25uZWN0aW5nJiYhdGhpcy5fY29ubmVjdGlvbkVycm9yP3RoaXMuX2Nvbm5lY3Rpb25DYWxsYmFjaz90aGlzLlxuX2Nvbm5lY3Rpb25DYWxsYmFjayhpKTp0aGlzLl9oYW5kbGVFcnJvckV2ZW50KGkpOnRoaXMuX2Nvbm5lY3Rpb25FcnJvcnx8dGhpcy5faGFuZGxlRXJyb3JFdmVudChcbmkpKSxtLm5leHRUaWNrKCgpPT57dGhpcy5lbWl0KFwiZW5kXCIpfSl9KX1jb25uZWN0KGUpe2lmKGUpe3RoaXMuX2Nvbm5lY3QoZSk7cmV0dXJufVxucmV0dXJuIG5ldyB0aGlzLl9Qcm9taXNlKCh0LG4pPT57dGhpcy5fY29ubmVjdChpPT57aT9uKGkpOnQoKX0pfSl9X2F0dGFjaExpc3RlbmVycyhlKXtcbmUub24oXCJhdXRoZW50aWNhdGlvbkNsZWFydGV4dFBhc3N3b3JkXCIsdGhpcy5faGFuZGxlQXV0aENsZWFydGV4dFBhc3N3b3JkLmJpbmQodGhpcykpLFxuZS5vbihcImF1dGhlbnRpY2F0aW9uTUQ1UGFzc3dvcmRcIix0aGlzLl9oYW5kbGVBdXRoTUQ1UGFzc3dvcmQuYmluZCh0aGlzKSksZS5vbihcImFcXFxudXRoZW50aWNhdGlvblNBU0xcIix0aGlzLl9oYW5kbGVBdXRoU0FTTC5iaW5kKHRoaXMpKSxlLm9uKFwiYXV0aGVudGljYXRpb25TQVNMQ29udFxcXG5pbnVlXCIsdGhpcy5faGFuZGxlQXV0aFNBU0xDb250aW51ZS5iaW5kKHRoaXMpKSxlLm9uKFwiYXV0aGVudGljYXRpb25TQVNMRmluYWxcIix0aGlzLlxuX2hhbmRsZUF1dGhTQVNMRmluYWwuYmluZCh0aGlzKSksZS5vbihcImJhY2tlbmRLZXlEYXRhXCIsdGhpcy5faGFuZGxlQmFja2VuZEtleURhdGEuXG5iaW5kKHRoaXMpKSxlLm9uKFwiZXJyb3JcIix0aGlzLl9oYW5kbGVFcnJvckV2ZW50LmJpbmQodGhpcykpLGUub24oXCJlcnJvck1lc3NhZ2VcIixcbnRoaXMuX2hhbmRsZUVycm9yTWVzc2FnZS5iaW5kKHRoaXMpKSxlLm9uKFwicmVhZHlGb3JRdWVyeVwiLHRoaXMuX2hhbmRsZVJlYWR5Rm9yUXVlcnkuXG5iaW5kKHRoaXMpKSxlLm9uKFwibm90aWNlXCIsdGhpcy5faGFuZGxlTm90aWNlLmJpbmQodGhpcykpLGUub24oXCJyb3dEZXNjcmlwdGlvblwiLHRoaXMuXG5faGFuZGxlUm93RGVzY3JpcHRpb24uYmluZCh0aGlzKSksZS5vbihcImRhdGFSb3dcIix0aGlzLl9oYW5kbGVEYXRhUm93LmJpbmQodGhpcykpLFxuZS5vbihcInBvcnRhbFN1c3BlbmRlZFwiLHRoaXMuX2hhbmRsZVBvcnRhbFN1c3BlbmRlZC5iaW5kKHRoaXMpKSxlLm9uKFwiZW1wdHlRdWVyeVwiLFxudGhpcy5faGFuZGxlRW1wdHlRdWVyeS5iaW5kKHRoaXMpKSxlLm9uKFwiY29tbWFuZENvbXBsZXRlXCIsdGhpcy5faGFuZGxlQ29tbWFuZENvbXBsZXRlLlxuYmluZCh0aGlzKSksZS5vbihcInBhcnNlQ29tcGxldGVcIix0aGlzLl9oYW5kbGVQYXJzZUNvbXBsZXRlLmJpbmQodGhpcykpLGUub24oXCJjb3BcXFxueUluUmVzcG9uc2VcIix0aGlzLl9oYW5kbGVDb3B5SW5SZXNwb25zZS5iaW5kKHRoaXMpKSxlLm9uKFwiY29weURhdGFcIix0aGlzLl9oYW5kbGVDb3B5RGF0YS5cbmJpbmQodGhpcykpLGUub24oXCJub3RpZmljYXRpb25cIix0aGlzLl9oYW5kbGVOb3RpZmljYXRpb24uYmluZCh0aGlzKSl9X2NoZWNrUGdQYXNzKGUpe1xubGV0IHQ9dGhpcy5jb25uZWN0aW9uO3R5cGVvZiB0aGlzLnBhc3N3b3JkPT1cImZ1bmN0aW9uXCI/dGhpcy5fUHJvbWlzZS5yZXNvbHZlKCkudGhlbihcbigpPT50aGlzLnBhc3N3b3JkKCkpLnRoZW4obj0+e2lmKG4hPT12b2lkIDApe2lmKHR5cGVvZiBuIT1cInN0cmluZ1wiKXt0LmVtaXQoXCJlcnJvXFxcbnJcIixuZXcgVHlwZUVycm9yKFwiUGFzc3dvcmQgbXVzdCBiZSBhIHN0cmluZ1wiKSk7cmV0dXJufXRoaXMuY29ubmVjdGlvblBhcmFtZXRlcnMuXG5wYXNzd29yZD10aGlzLnBhc3N3b3JkPW59ZWxzZSB0aGlzLmNvbm5lY3Rpb25QYXJhbWV0ZXJzLnBhc3N3b3JkPXRoaXMucGFzc3dvcmQ9bnVsbDtcbmUoKX0pLmNhdGNoKG49Pnt0LmVtaXQoXCJlcnJvclwiLG4pfSk6dGhpcy5wYXNzd29yZCE9PW51bGw/ZSgpOndjKHRoaXMuY29ubmVjdGlvblBhcmFtZXRlcnMsXG5uPT57biE9PXZvaWQgMCYmKHRoaXMuY29ubmVjdGlvblBhcmFtZXRlcnMucGFzc3dvcmQ9dGhpcy5wYXNzd29yZD1uKSxlKCl9KX1faGFuZGxlQXV0aENsZWFydGV4dFBhc3N3b3JkKGUpe1xudGhpcy5fY2hlY2tQZ1Bhc3MoKCk9Pnt0aGlzLmNvbm5lY3Rpb24ucGFzc3dvcmQodGhpcy5wYXNzd29yZCl9KX1faGFuZGxlQXV0aE1ENVBhc3N3b3JkKGUpe1xudGhpcy5fY2hlY2tQZ1Bhc3MoKCk9PntsZXQgdD1nYy5wb3N0Z3Jlc01kNVBhc3N3b3JkSGFzaCh0aGlzLnVzZXIsdGhpcy5wYXNzd29yZCxcbmUuc2FsdCk7dGhpcy5jb25uZWN0aW9uLnBhc3N3b3JkKHQpfSl9X2hhbmRsZUF1dGhTQVNMKGUpe3RoaXMuX2NoZWNrUGdQYXNzKCgpPT57XG50aGlzLnNhc2xTZXNzaW9uPWxuLnN0YXJ0U2Vzc2lvbihlLm1lY2hhbmlzbXMpLHRoaXMuY29ubmVjdGlvbi5zZW5kU0FTTEluaXRpYWxSZXNwb25zZU1lc3NhZ2UoXG50aGlzLnNhc2xTZXNzaW9uLm1lY2hhbmlzbSx0aGlzLnNhc2xTZXNzaW9uLnJlc3BvbnNlKX0pfV9oYW5kbGVBdXRoU0FTTENvbnRpbnVlKGUpe1xubG4uY29udGludWVTZXNzaW9uKHRoaXMuc2FzbFNlc3Npb24sdGhpcy5wYXNzd29yZCxlLmRhdGEpLHRoaXMuY29ubmVjdGlvbi5zZW5kU0NSQU1DbGllbnRGaW5hbE1lc3NhZ2UoXG50aGlzLnNhc2xTZXNzaW9uLnJlc3BvbnNlKX1faGFuZGxlQXV0aFNBU0xGaW5hbChlKXtsbi5maW5hbGl6ZVNlc3Npb24odGhpcy5zYXNsU2Vzc2lvbixcbmUuZGF0YSksdGhpcy5zYXNsU2Vzc2lvbj1udWxsfV9oYW5kbGVCYWNrZW5kS2V5RGF0YShlKXt0aGlzLnByb2Nlc3NJRD1lLnByb2Nlc3NJRCxcbnRoaXMuc2VjcmV0S2V5PWUuc2VjcmV0S2V5fV9oYW5kbGVSZWFkeUZvclF1ZXJ5KGUpe3RoaXMuX2Nvbm5lY3RpbmcmJih0aGlzLl9jb25uZWN0aW5nPVxuITEsdGhpcy5fY29ubmVjdGVkPSEwLGNsZWFyVGltZW91dCh0aGlzLmNvbm5lY3Rpb25UaW1lb3V0SGFuZGxlKSx0aGlzLl9jb25uZWN0aW9uQ2FsbGJhY2smJlxuKHRoaXMuX2Nvbm5lY3Rpb25DYWxsYmFjayhudWxsLHRoaXMpLHRoaXMuX2Nvbm5lY3Rpb25DYWxsYmFjaz1udWxsKSx0aGlzLmVtaXQoXCJjXFxcbm9ubmVjdFwiKSk7bGV0e2FjdGl2ZVF1ZXJ5OnR9PXRoaXM7dGhpcy5hY3RpdmVRdWVyeT1udWxsLHRoaXMucmVhZHlGb3JRdWVyeT0hMCx0JiZcbnQuaGFuZGxlUmVhZHlGb3JRdWVyeSh0aGlzLmNvbm5lY3Rpb24pLHRoaXMuX3B1bHNlUXVlcnlRdWV1ZSgpfV9oYW5kbGVFcnJvcldoaWxlQ29ubmVjdGluZyhlKXtcbmlmKCF0aGlzLl9jb25uZWN0aW9uRXJyb3Ipe2lmKHRoaXMuX2Nvbm5lY3Rpb25FcnJvcj0hMCxjbGVhclRpbWVvdXQodGhpcy5jb25uZWN0aW9uVGltZW91dEhhbmRsZSksXG50aGlzLl9jb25uZWN0aW9uQ2FsbGJhY2spcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25DYWxsYmFjayhlKTt0aGlzLmVtaXQoXCJlcnJvclwiLGUpfX1faGFuZGxlRXJyb3JFdmVudChlKXtcbmlmKHRoaXMuX2Nvbm5lY3RpbmcpcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yV2hpbGVDb25uZWN0aW5nKGUpO3RoaXMuX3F1ZXJ5YWJsZT0hMSxcbnRoaXMuX2Vycm9yQWxsUXVlcmllcyhlKSx0aGlzLmVtaXQoXCJlcnJvclwiLGUpfV9oYW5kbGVFcnJvck1lc3NhZ2UoZSl7aWYodGhpcy5fY29ubmVjdGluZylcbnJldHVybiB0aGlzLl9oYW5kbGVFcnJvcldoaWxlQ29ubmVjdGluZyhlKTtsZXQgdD10aGlzLmFjdGl2ZVF1ZXJ5O2lmKCF0KXt0aGlzLl9oYW5kbGVFcnJvckV2ZW50KFxuZSk7cmV0dXJufXRoaXMuYWN0aXZlUXVlcnk9bnVsbCx0LmhhbmRsZUVycm9yKGUsdGhpcy5jb25uZWN0aW9uKX1faGFuZGxlUm93RGVzY3JpcHRpb24oZSl7XG50aGlzLmFjdGl2ZVF1ZXJ5LmhhbmRsZVJvd0Rlc2NyaXB0aW9uKGUpfV9oYW5kbGVEYXRhUm93KGUpe3RoaXMuYWN0aXZlUXVlcnkuaGFuZGxlRGF0YVJvdyhcbmUpfV9oYW5kbGVQb3J0YWxTdXNwZW5kZWQoZSl7dGhpcy5hY3RpdmVRdWVyeS5oYW5kbGVQb3J0YWxTdXNwZW5kZWQodGhpcy5jb25uZWN0aW9uKX1faGFuZGxlRW1wdHlRdWVyeShlKXtcbnRoaXMuYWN0aXZlUXVlcnkuaGFuZGxlRW1wdHlRdWVyeSh0aGlzLmNvbm5lY3Rpb24pfV9oYW5kbGVDb21tYW5kQ29tcGxldGUoZSl7dGhpcy5cbmFjdGl2ZVF1ZXJ5LmhhbmRsZUNvbW1hbmRDb21wbGV0ZShlLHRoaXMuY29ubmVjdGlvbil9X2hhbmRsZVBhcnNlQ29tcGxldGUoZSl7dGhpcy5cbmFjdGl2ZVF1ZXJ5Lm5hbWUmJih0aGlzLmNvbm5lY3Rpb24ucGFyc2VkU3RhdGVtZW50c1t0aGlzLmFjdGl2ZVF1ZXJ5Lm5hbWVdPXRoaXMuXG5hY3RpdmVRdWVyeS50ZXh0KX1faGFuZGxlQ29weUluUmVzcG9uc2UoZSl7dGhpcy5hY3RpdmVRdWVyeS5oYW5kbGVDb3B5SW5SZXNwb25zZShcbnRoaXMuY29ubmVjdGlvbil9X2hhbmRsZUNvcHlEYXRhKGUpe3RoaXMuYWN0aXZlUXVlcnkuaGFuZGxlQ29weURhdGEoZSx0aGlzLmNvbm5lY3Rpb24pfV9oYW5kbGVOb3RpZmljYXRpb24oZSl7XG50aGlzLmVtaXQoXCJub3RpZmljYXRpb25cIixlKX1faGFuZGxlTm90aWNlKGUpe3RoaXMuZW1pdChcIm5vdGljZVwiLGUpfWdldFN0YXJ0dXBDb25mKCl7XG52YXIgZT10aGlzLmNvbm5lY3Rpb25QYXJhbWV0ZXJzLHQ9e3VzZXI6ZS51c2VyLGRhdGFiYXNlOmUuZGF0YWJhc2V9LG49ZS5hcHBsaWNhdGlvbl9uYW1lfHxcbmUuZmFsbGJhY2tfYXBwbGljYXRpb25fbmFtZTtyZXR1cm4gbiYmKHQuYXBwbGljYXRpb25fbmFtZT1uKSxlLnJlcGxpY2F0aW9uJiYodC5yZXBsaWNhdGlvbj1cblwiXCIrZS5yZXBsaWNhdGlvbiksZS5zdGF0ZW1lbnRfdGltZW91dCYmKHQuc3RhdGVtZW50X3RpbWVvdXQ9U3RyaW5nKHBhcnNlSW50KGUuc3RhdGVtZW50X3RpbWVvdXQsXG4xMCkpKSxlLmxvY2tfdGltZW91dCYmKHQubG9ja190aW1lb3V0PVN0cmluZyhwYXJzZUludChlLmxvY2tfdGltZW91dCwxMCkpKSxlLmlkbGVfaW5fdHJhbnNhY3Rpb25fc2Vzc2lvbl90aW1lb3V0JiZcbih0LmlkbGVfaW5fdHJhbnNhY3Rpb25fc2Vzc2lvbl90aW1lb3V0PVN0cmluZyhwYXJzZUludChlLmlkbGVfaW5fdHJhbnNhY3Rpb25fc2Vzc2lvbl90aW1lb3V0LFxuMTApKSksZS5vcHRpb25zJiYodC5vcHRpb25zPWUub3B0aW9ucyksdH1jYW5jZWwoZSx0KXtpZihlLmFjdGl2ZVF1ZXJ5PT09dCl7dmFyIG49dGhpcy5cbmNvbm5lY3Rpb247dGhpcy5ob3N0JiZ0aGlzLmhvc3QuaW5kZXhPZihcIi9cIik9PT0wP24uY29ubmVjdCh0aGlzLmhvc3QrXCIvLnMuUEdTUUwuXCIrXG50aGlzLnBvcnQpOm4uY29ubmVjdCh0aGlzLnBvcnQsdGhpcy5ob3N0KSxuLm9uKFwiY29ubmVjdFwiLGZ1bmN0aW9uKCl7bi5jYW5jZWwoZS5wcm9jZXNzSUQsXG5lLnNlY3JldEtleSl9KX1lbHNlIGUucXVlcnlRdWV1ZS5pbmRleE9mKHQpIT09LTEmJmUucXVlcnlRdWV1ZS5zcGxpY2UoZS5xdWVyeVF1ZXVlLlxuaW5kZXhPZih0KSwxKX1zZXRUeXBlUGFyc2VyKGUsdCxuKXtyZXR1cm4gdGhpcy5fdHlwZXMuc2V0VHlwZVBhcnNlcihlLHQsbil9Z2V0VHlwZVBhcnNlcihlLHQpe1xucmV0dXJuIHRoaXMuX3R5cGVzLmdldFR5cGVQYXJzZXIoZSx0KX1lc2NhcGVJZGVudGlmaWVyKGUpe3JldHVybidcIicrZS5yZXBsYWNlKC9cIi9nLFxuJ1wiXCInKSsnXCInfWVzY2FwZUxpdGVyYWwoZSl7Zm9yKHZhciB0PSExLG49XCInXCIsaT0wO2k8ZS5sZW5ndGg7aSsrKXt2YXIgcz1lW2ldO3M9PT1cblwiJ1wiP24rPXMrczpzPT09XCJcXFxcXCI/KG4rPXMrcyx0PSEwKTpuKz1zfXJldHVybiBuKz1cIidcIix0PT09ITAmJihuPVwiIEVcIituKSxufV9wdWxzZVF1ZXJ5UXVldWUoKXtcbmlmKHRoaXMucmVhZHlGb3JRdWVyeT09PSEwKWlmKHRoaXMuYWN0aXZlUXVlcnk9dGhpcy5xdWVyeVF1ZXVlLnNoaWZ0KCksdGhpcy5hY3RpdmVRdWVyeSl7XG50aGlzLnJlYWR5Rm9yUXVlcnk9ITEsdGhpcy5oYXNFeGVjdXRlZD0hMDtsZXQgZT10aGlzLmFjdGl2ZVF1ZXJ5LnN1Ym1pdCh0aGlzLmNvbm5lY3Rpb24pO1xuZSYmbS5uZXh0VGljaygoKT0+e3RoaXMuYWN0aXZlUXVlcnkuaGFuZGxlRXJyb3IoZSx0aGlzLmNvbm5lY3Rpb24pLHRoaXMucmVhZHlGb3JRdWVyeT1cbiEwLHRoaXMuX3B1bHNlUXVlcnlRdWV1ZSgpfSl9ZWxzZSB0aGlzLmhhc0V4ZWN1dGVkJiYodGhpcy5hY3RpdmVRdWVyeT1udWxsLHRoaXMuXG5lbWl0KFwiZHJhaW5cIikpfXF1ZXJ5KGUsdCxuKXt2YXIgaSxzLG8sdSxjO2lmKGU9PW51bGwpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsaWVudFxcXG4gd2FzIHBhc3NlZCBhIG51bGwgb3IgdW5kZWZpbmVkIHF1ZXJ5XCIpO3JldHVybiB0eXBlb2YgZS5zdWJtaXQ9PVwiZnVuY3Rpb25cIj8obz1lLlxucXVlcnlfdGltZW91dHx8dGhpcy5jb25uZWN0aW9uUGFyYW1ldGVycy5xdWVyeV90aW1lb3V0LHM9aT1lLHR5cGVvZiB0PT1cImZ1bmN0aW9uXCImJlxuKGkuY2FsbGJhY2s9aS5jYWxsYmFja3x8dCkpOihvPXRoaXMuY29ubmVjdGlvblBhcmFtZXRlcnMucXVlcnlfdGltZW91dCxpPW5ldyBJcyhcbmUsdCxuKSxpLmNhbGxiYWNrfHwocz1uZXcgdGhpcy5fUHJvbWlzZSgoaCxsKT0+e2kuY2FsbGJhY2s9KGQsYik9PmQ/bChkKTpoKGIpfSkpKSxcbm8mJihjPWkuY2FsbGJhY2ssdT1zZXRUaW1lb3V0KCgpPT57dmFyIGg9bmV3IEVycm9yKFwiUXVlcnkgcmVhZCB0aW1lb3V0XCIpO20ubmV4dFRpY2soXG4oKT0+e2kuaGFuZGxlRXJyb3IoaCx0aGlzLmNvbm5lY3Rpb24pfSksYyhoKSxpLmNhbGxiYWNrPSgpPT57fTt2YXIgbD10aGlzLnF1ZXJ5UXVldWUuXG5pbmRleE9mKGkpO2w+LTEmJnRoaXMucXVlcnlRdWV1ZS5zcGxpY2UobCwxKSx0aGlzLl9wdWxzZVF1ZXJ5UXVldWUoKX0sbyksaS5jYWxsYmFjaz1cbihoLGwpPT57Y2xlYXJUaW1lb3V0KHUpLGMoaCxsKX0pLHRoaXMuYmluYXJ5JiYhaS5iaW5hcnkmJihpLmJpbmFyeT0hMCksaS5fcmVzdWx0JiZcbiFpLl9yZXN1bHQuX3R5cGVzJiYoaS5fcmVzdWx0Ll90eXBlcz10aGlzLl90eXBlcyksdGhpcy5fcXVlcnlhYmxlP3RoaXMuX2VuZGluZz8obS5cbm5leHRUaWNrKCgpPT57aS5oYW5kbGVFcnJvcihuZXcgRXJyb3IoXCJDbGllbnQgd2FzIGNsb3NlZCBhbmQgaXMgbm90IHF1ZXJ5YWJsZVwiKSxcbnRoaXMuY29ubmVjdGlvbil9KSxzKToodGhpcy5xdWVyeVF1ZXVlLnB1c2goaSksdGhpcy5fcHVsc2VRdWVyeVF1ZXVlKCkscyk6KG0ubmV4dFRpY2soXG4oKT0+e2kuaGFuZGxlRXJyb3IobmV3IEVycm9yKFwiQ2xpZW50IGhhcyBlbmNvdW50ZXJlZCBhIGNvbm5lY3Rpb24gZXJyb3IgYW5kIGlzIG5cXFxub3QgcXVlcnlhYmxlXCIpLHRoaXMuY29ubmVjdGlvbil9KSxzKX1yZWYoKXt0aGlzLmNvbm5lY3Rpb24ucmVmKCl9dW5yZWYoKXt0aGlzLmNvbm5lY3Rpb24uXG51bnJlZigpfWVuZChlKXtpZih0aGlzLl9lbmRpbmc9ITAsIXRoaXMuY29ubmVjdGlvbi5fY29ubmVjdGluZylpZihlKWUoKTtlbHNlIHJldHVybiB0aGlzLlxuX1Byb21pc2UucmVzb2x2ZSgpO2lmKHRoaXMuYWN0aXZlUXVlcnl8fCF0aGlzLl9xdWVyeWFibGU/dGhpcy5jb25uZWN0aW9uLnN0cmVhbS5cbmRlc3Ryb3koKTp0aGlzLmNvbm5lY3Rpb24uZW5kKCksZSl0aGlzLmNvbm5lY3Rpb24ub25jZShcImVuZFwiLGUpO2Vsc2UgcmV0dXJuIG5ldyB0aGlzLlxuX1Byb21pc2UodD0+e3RoaXMuY29ubmVjdGlvbi5vbmNlKFwiZW5kXCIsdCl9KX19O2EoZm4sXCJDbGllbnRcIik7dmFyIF90PWZuO190LlF1ZXJ5PVxuSXM7UHMuZXhwb3J0cz1fdH0pO3ZhciBNcz1JKChjZixGcyk9PntcInVzZSBzdHJpY3RcIjtwKCk7dmFyIEVjPXdlKCkuRXZlbnRFbWl0dGVyLExzPWEoZnVuY3Rpb24oKXt9LFwiXFxcbk5PT1BcIiksUnM9YSgocixlKT0+e2xldCB0PXIuZmluZEluZGV4KGUpO3JldHVybiB0PT09LTE/dm9pZCAwOnIuc3BsaWNlKHQsMSlbMF19LFxuXCJyZW1vdmVXaGVyZVwiKSx5bj1jbGFzcyB5bntjb25zdHJ1Y3RvcihlLHQsbil7dGhpcy5jbGllbnQ9ZSx0aGlzLmlkbGVMaXN0ZW5lcj10LFxudGhpcy50aW1lb3V0SWQ9bn19O2EoeW4sXCJJZGxlSXRlbVwiKTt2YXIgcG49eW4sbW49Y2xhc3MgbW57Y29uc3RydWN0b3IoZSl7dGhpcy5jYWxsYmFjaz1cbmV9fTthKG1uLFwiUGVuZGluZ0l0ZW1cIik7dmFyIE5lPW1uO2Z1bmN0aW9uIF9jKCl7dGhyb3cgbmV3IEVycm9yKFwiUmVsZWFzZSBjYWxsZWQgXFxcbm9uIGNsaWVudCB3aGljaCBoYXMgYWxyZWFkeSBiZWVuIHJlbGVhc2VkIHRvIHRoZSBwb29sLlwiKX1hKF9jLFwidGhyb3dPbkRvdWJsZVJlbGVcXFxuYXNlXCIpO2Z1bmN0aW9uIEF0KHIsZSl7aWYoZSlyZXR1cm57Y2FsbGJhY2s6ZSxyZXN1bHQ6dm9pZCAwfTtsZXQgdCxuLGk9YShmdW5jdGlvbihvLHUpe1xubz90KG8pOm4odSl9LFwiY2JcIikscz1uZXcgcihmdW5jdGlvbihvLHUpe249byx0PXV9KS5jYXRjaChvPT57dGhyb3cgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoXG5vKSxvfSk7cmV0dXJue2NhbGxiYWNrOmkscmVzdWx0OnN9fWEoQXQsXCJwcm9taXNpZnlcIik7ZnVuY3Rpb24gQWMocixlKXtyZXR1cm4gYShmdW5jdGlvbiB0KG4pe1xubi5jbGllbnQ9ZSxlLnJlbW92ZUxpc3RlbmVyKFwiZXJyb3JcIix0KSxlLm9uKFwiZXJyb3JcIiwoKT0+e3IubG9nKFwiYWRkaXRpb25hbCBjbGllblxcXG50IGVycm9yIGFmdGVyIGRpc2Nvbm5lY3Rpb24gZHVlIHRvIGVycm9yXCIsbil9KSxyLl9yZW1vdmUoZSksci5lbWl0KFwiZXJyb3JcIixuLGUpfSxcblwiaWRsZUxpc3RlbmVyXCIpfWEoQWMsXCJtYWtlSWRsZUxpc3RlbmVyXCIpO3ZhciBnbj1jbGFzcyBnbiBleHRlbmRzIEVje2NvbnN0cnVjdG9yKGUsdCl7XG5zdXBlcigpLHRoaXMub3B0aW9ucz1PYmplY3QuYXNzaWduKHt9LGUpLGUhPW51bGwmJlwicGFzc3dvcmRcImluIGUmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbnRoaXMub3B0aW9ucyxcInBhc3N3b3JkXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLHZhbHVlOmUucGFzc3dvcmR9KSxcbmUhPW51bGwmJmUuc3NsJiZlLnNzbC5rZXkmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLm9wdGlvbnMuc3NsLFwia2V5XCIse2VudW1lcmFibGU6ITF9KSxcbnRoaXMub3B0aW9ucy5tYXg9dGhpcy5vcHRpb25zLm1heHx8dGhpcy5vcHRpb25zLnBvb2xTaXplfHwxMCx0aGlzLm9wdGlvbnMubWF4VXNlcz1cbnRoaXMub3B0aW9ucy5tYXhVc2VzfHwxLzAsdGhpcy5vcHRpb25zLmFsbG93RXhpdE9uSWRsZT10aGlzLm9wdGlvbnMuYWxsb3dFeGl0T25JZGxlfHxcbiExLHRoaXMub3B0aW9ucy5tYXhMaWZldGltZVNlY29uZHM9dGhpcy5vcHRpb25zLm1heExpZmV0aW1lU2Vjb25kc3x8MCx0aGlzLmxvZz10aGlzLlxub3B0aW9ucy5sb2d8fGZ1bmN0aW9uKCl7fSx0aGlzLkNsaWVudD10aGlzLm9wdGlvbnMuQ2xpZW50fHx0fHxDdCgpLkNsaWVudCx0aGlzLlByb21pc2U9XG50aGlzLm9wdGlvbnMuUHJvbWlzZXx8Uy5Qcm9taXNlLHR5cGVvZiB0aGlzLm9wdGlvbnMuaWRsZVRpbWVvdXRNaWxsaXM+XCJ1XCImJih0aGlzLlxub3B0aW9ucy5pZGxlVGltZW91dE1pbGxpcz0xZTQpLHRoaXMuX2NsaWVudHM9W10sdGhpcy5faWRsZT1bXSx0aGlzLl9leHBpcmVkPW5ldyBXZWFrU2V0LFxudGhpcy5fcGVuZGluZ1F1ZXVlPVtdLHRoaXMuX2VuZENhbGxiYWNrPXZvaWQgMCx0aGlzLmVuZGluZz0hMSx0aGlzLmVuZGVkPSExfV9pc0Z1bGwoKXtcbnJldHVybiB0aGlzLl9jbGllbnRzLmxlbmd0aD49dGhpcy5vcHRpb25zLm1heH1fcHVsc2VRdWV1ZSgpe2lmKHRoaXMubG9nKFwicHVsc2UgcVxcXG51ZXVlXCIpLHRoaXMuZW5kZWQpe3RoaXMubG9nKFwicHVsc2UgcXVldWUgZW5kZWRcIik7cmV0dXJufWlmKHRoaXMuZW5kaW5nKXt0aGlzLmxvZyhcblwicHVsc2UgcXVldWUgb24gZW5kaW5nXCIpLHRoaXMuX2lkbGUubGVuZ3RoJiZ0aGlzLl9pZGxlLnNsaWNlKCkubWFwKHQ9Pnt0aGlzLl9yZW1vdmUoXG50LmNsaWVudCl9KSx0aGlzLl9jbGllbnRzLmxlbmd0aHx8KHRoaXMuZW5kZWQ9ITAsdGhpcy5fZW5kQ2FsbGJhY2soKSk7cmV0dXJufWlmKCF0aGlzLlxuX3BlbmRpbmdRdWV1ZS5sZW5ndGgpe3RoaXMubG9nKFwibm8gcXVldWVkIHJlcXVlc3RzXCIpO3JldHVybn1pZighdGhpcy5faWRsZS5sZW5ndGgmJlxudGhpcy5faXNGdWxsKCkpcmV0dXJuO2xldCBlPXRoaXMuX3BlbmRpbmdRdWV1ZS5zaGlmdCgpO2lmKHRoaXMuX2lkbGUubGVuZ3RoKXtsZXQgdD10aGlzLlxuX2lkbGUucG9wKCk7Y2xlYXJUaW1lb3V0KHQudGltZW91dElkKTtsZXQgbj10LmNsaWVudDtuLnJlZiYmbi5yZWYoKTtsZXQgaT10LmlkbGVMaXN0ZW5lcjtcbnJldHVybiB0aGlzLl9hY3F1aXJlQ2xpZW50KG4sZSxpLCExKX1pZighdGhpcy5faXNGdWxsKCkpcmV0dXJuIHRoaXMubmV3Q2xpZW50KGUpO1xudGhyb3cgbmV3IEVycm9yKFwidW5leHBlY3RlZCBjb25kaXRpb25cIil9X3JlbW92ZShlKXtsZXQgdD1Scyh0aGlzLl9pZGxlLG49Pm4uY2xpZW50PT09XG5lKTt0IT09dm9pZCAwJiZjbGVhclRpbWVvdXQodC50aW1lb3V0SWQpLHRoaXMuX2NsaWVudHM9dGhpcy5fY2xpZW50cy5maWx0ZXIobj0+biE9PVxuZSksZS5lbmQoKSx0aGlzLmVtaXQoXCJyZW1vdmVcIixlKX1jb25uZWN0KGUpe2lmKHRoaXMuZW5kaW5nKXtsZXQgaT1uZXcgRXJyb3IoXCJDYW5cXFxubm90IHVzZSBhIHBvb2wgYWZ0ZXIgY2FsbGluZyBlbmQgb24gdGhlIHBvb2xcIik7cmV0dXJuIGU/ZShpKTp0aGlzLlByb21pc2UucmVqZWN0KFxuaSl9bGV0IHQ9QXQodGhpcy5Qcm9taXNlLGUpLG49dC5yZXN1bHQ7aWYodGhpcy5faXNGdWxsKCl8fHRoaXMuX2lkbGUubGVuZ3RoKXtpZih0aGlzLlxuX2lkbGUubGVuZ3RoJiZtLm5leHRUaWNrKCgpPT50aGlzLl9wdWxzZVF1ZXVlKCkpLCF0aGlzLm9wdGlvbnMuY29ubmVjdGlvblRpbWVvdXRNaWxsaXMpXG5yZXR1cm4gdGhpcy5fcGVuZGluZ1F1ZXVlLnB1c2gobmV3IE5lKHQuY2FsbGJhY2spKSxuO2xldCBpPWEoKHUsYyxoKT0+e2NsZWFyVGltZW91dChcbm8pLHQuY2FsbGJhY2sodSxjLGgpfSxcInF1ZXVlQ2FsbGJhY2tcIikscz1uZXcgTmUoaSksbz1zZXRUaW1lb3V0KCgpPT57UnModGhpcy5fcGVuZGluZ1F1ZXVlLFxudT0+dS5jYWxsYmFjaz09PWkpLHMudGltZWRPdXQ9ITAsdC5jYWxsYmFjayhuZXcgRXJyb3IoXCJ0aW1lb3V0IGV4Y2VlZGVkIHdoZW4gdHJ5XFxcbmluZyB0byBjb25uZWN0XCIpKX0sdGhpcy5vcHRpb25zLmNvbm5lY3Rpb25UaW1lb3V0TWlsbGlzKTtyZXR1cm4gdGhpcy5fcGVuZGluZ1F1ZXVlLlxucHVzaChzKSxufXJldHVybiB0aGlzLm5ld0NsaWVudChuZXcgTmUodC5jYWxsYmFjaykpLG59bmV3Q2xpZW50KGUpe2xldCB0PW5ldyB0aGlzLlxuQ2xpZW50KHRoaXMub3B0aW9ucyk7dGhpcy5fY2xpZW50cy5wdXNoKHQpO2xldCBuPUFjKHRoaXMsdCk7dGhpcy5sb2coXCJjaGVja2luZyBjXFxcbmxpZW50IHRpbWVvdXRcIik7bGV0IGkscz0hMTt0aGlzLm9wdGlvbnMuY29ubmVjdGlvblRpbWVvdXRNaWxsaXMmJihpPXNldFRpbWVvdXQoKCk9PntcbnRoaXMubG9nKFwiZW5kaW5nIGNsaWVudCBkdWUgdG8gdGltZW91dFwiKSxzPSEwLHQuY29ubmVjdGlvbj90LmNvbm5lY3Rpb24uc3RyZWFtLmRlc3Ryb3koKTpcbnQuZW5kKCl9LHRoaXMub3B0aW9ucy5jb25uZWN0aW9uVGltZW91dE1pbGxpcykpLHRoaXMubG9nKFwiY29ubmVjdGluZyBuZXcgY2xpZW50XCIpLFxudC5jb25uZWN0KG89PntpZihpJiZjbGVhclRpbWVvdXQoaSksdC5vbihcImVycm9yXCIsbiksbyl0aGlzLmxvZyhcImNsaWVudCBmYWlsZWQgdG9cXFxuIGNvbm5lY3RcIixvKSx0aGlzLl9jbGllbnRzPXRoaXMuX2NsaWVudHMuZmlsdGVyKHU9PnUhPT10KSxzJiYoby5tZXNzYWdlPVwiQ29ubmVjdFxcXG5pb24gdGVybWluYXRlZCBkdWUgdG8gY29ubmVjdGlvbiB0aW1lb3V0XCIpLHRoaXMuX3B1bHNlUXVldWUoKSxlLnRpbWVkT3V0fHxlLmNhbGxiYWNrKFxubyx2b2lkIDAsTHMpO2Vsc2V7aWYodGhpcy5sb2coXCJuZXcgY2xpZW50IGNvbm5lY3RlZFwiKSx0aGlzLm9wdGlvbnMubWF4TGlmZXRpbWVTZWNvbmRzIT09XG4wKXtsZXQgdT1zZXRUaW1lb3V0KCgpPT57dGhpcy5sb2coXCJlbmRpbmcgY2xpZW50IGR1ZSB0byBleHBpcmVkIGxpZmV0aW1lXCIpLHRoaXMuXG5fZXhwaXJlZC5hZGQodCksdGhpcy5faWRsZS5maW5kSW5kZXgoaD0+aC5jbGllbnQ9PT10KSE9PS0xJiZ0aGlzLl9hY3F1aXJlQ2xpZW50KFxudCxuZXcgTmUoKGgsbCxkKT0+ZCgpKSxuLCExKX0sdGhpcy5vcHRpb25zLm1heExpZmV0aW1lU2Vjb25kcyoxZTMpO3UudW5yZWYoKSx0Lm9uY2UoXG5cImVuZFwiLCgpPT5jbGVhclRpbWVvdXQodSkpfXJldHVybiB0aGlzLl9hY3F1aXJlQ2xpZW50KHQsZSxuLCEwKX19KX1fYWNxdWlyZUNsaWVudChlLHQsbixpKXtcbmkmJnRoaXMuZW1pdChcImNvbm5lY3RcIixlKSx0aGlzLmVtaXQoXCJhY3F1aXJlXCIsZSksZS5yZWxlYXNlPXRoaXMuX3JlbGVhc2VPbmNlKGUsbiksXG5lLnJlbW92ZUxpc3RlbmVyKFwiZXJyb3JcIixuKSx0LnRpbWVkT3V0P2kmJnRoaXMub3B0aW9ucy52ZXJpZnk/dGhpcy5vcHRpb25zLnZlcmlmeShcbmUsZS5yZWxlYXNlKTplLnJlbGVhc2UoKTppJiZ0aGlzLm9wdGlvbnMudmVyaWZ5P3RoaXMub3B0aW9ucy52ZXJpZnkoZSxzPT57aWYocylyZXR1cm4gZS5cbnJlbGVhc2UocyksdC5jYWxsYmFjayhzLHZvaWQgMCxMcyk7dC5jYWxsYmFjayh2b2lkIDAsZSxlLnJlbGVhc2UpfSk6dC5jYWxsYmFjayh2b2lkIDAsXG5lLGUucmVsZWFzZSl9X3JlbGVhc2VPbmNlKGUsdCl7bGV0IG49ITE7cmV0dXJuIGk9PntuJiZfYygpLG49ITAsdGhpcy5fcmVsZWFzZShlLFxudCxpKX19X3JlbGVhc2UoZSx0LG4pe2lmKGUub24oXCJlcnJvclwiLHQpLGUuX3Bvb2xVc2VDb3VudD0oZS5fcG9vbFVzZUNvdW50fHwwKSsxLFxudGhpcy5lbWl0KFwicmVsZWFzZVwiLG4sZSksbnx8dGhpcy5lbmRpbmd8fCFlLl9xdWVyeWFibGV8fGUuX2VuZGluZ3x8ZS5fcG9vbFVzZUNvdW50Pj1cbnRoaXMub3B0aW9ucy5tYXhVc2VzKXtlLl9wb29sVXNlQ291bnQ+PXRoaXMub3B0aW9ucy5tYXhVc2VzJiZ0aGlzLmxvZyhcInJlbW92ZSBleFxcXG5wZW5kZWQgY2xpZW50XCIpLHRoaXMuX3JlbW92ZShlKSx0aGlzLl9wdWxzZVF1ZXVlKCk7cmV0dXJufWlmKHRoaXMuX2V4cGlyZWQuaGFzKGUpKXtcbnRoaXMubG9nKFwicmVtb3ZlIGV4cGlyZWQgY2xpZW50XCIpLHRoaXMuX2V4cGlyZWQuZGVsZXRlKGUpLHRoaXMuX3JlbW92ZShlKSx0aGlzLl9wdWxzZVF1ZXVlKCk7XG5yZXR1cm59bGV0IHM7dGhpcy5vcHRpb25zLmlkbGVUaW1lb3V0TWlsbGlzJiYocz1zZXRUaW1lb3V0KCgpPT57dGhpcy5sb2coXCJyZW1vdmVcXFxuIGlkbGUgY2xpZW50XCIpLHRoaXMuX3JlbW92ZShlKX0sdGhpcy5vcHRpb25zLmlkbGVUaW1lb3V0TWlsbGlzKSx0aGlzLm9wdGlvbnMuYWxsb3dFeGl0T25JZGxlJiZcbnMudW5yZWYoKSksdGhpcy5vcHRpb25zLmFsbG93RXhpdE9uSWRsZSYmZS51bnJlZigpLHRoaXMuX2lkbGUucHVzaChuZXcgcG4oZSx0LHMpKSxcbnRoaXMuX3B1bHNlUXVldWUoKX1xdWVyeShlLHQsbil7aWYodHlwZW9mIGU9PVwiZnVuY3Rpb25cIil7bGV0IHM9QXQodGhpcy5Qcm9taXNlLGUpO1xucmV0dXJuIHgoZnVuY3Rpb24oKXtyZXR1cm4gcy5jYWxsYmFjayhuZXcgRXJyb3IoXCJQYXNzaW5nIGEgZnVuY3Rpb24gYXMgdGhlIGZpcnN0XFxcbiBwYXJhbWV0ZXIgdG8gcG9vbC5xdWVyeSBpcyBub3Qgc3VwcG9ydGVkXCIpKX0pLHMucmVzdWx0fXR5cGVvZiB0PT1cImZ1bmN0aW9uXCImJihuPVxudCx0PXZvaWQgMCk7bGV0IGk9QXQodGhpcy5Qcm9taXNlLG4pO3JldHVybiBuPWkuY2FsbGJhY2ssdGhpcy5jb25uZWN0KChzLG8pPT57aWYocylcbnJldHVybiBuKHMpO2xldCB1PSExLGM9YShoPT57dXx8KHU9ITAsby5yZWxlYXNlKGgpLG4oaCkpfSxcIm9uRXJyb3JcIik7by5vbmNlKFwiZXJyXFxcbm9yXCIsYyksdGhpcy5sb2coXCJkaXNwYXRjaGluZyBxdWVyeVwiKTt0cnl7by5xdWVyeShlLHQsKGgsbCk9PntpZih0aGlzLmxvZyhcInF1ZXJ5IFxcXG5kaXNwYXRjaGVkXCIpLG8ucmVtb3ZlTGlzdGVuZXIoXCJlcnJvclwiLGMpLCF1KXJldHVybiB1PSEwLG8ucmVsZWFzZShoKSxoP24oaCk6bih2b2lkIDAsXG5sKX0pfWNhdGNoKGgpe3JldHVybiBvLnJlbGVhc2UoaCksbihoKX19KSxpLnJlc3VsdH1lbmQoZSl7aWYodGhpcy5sb2coXCJlbmRpbmdcIiksXG50aGlzLmVuZGluZyl7bGV0IG49bmV3IEVycm9yKFwiQ2FsbGVkIGVuZCBvbiBwb29sIG1vcmUgdGhhbiBvbmNlXCIpO3JldHVybiBlP2Uobik6XG50aGlzLlByb21pc2UucmVqZWN0KG4pfXRoaXMuZW5kaW5nPSEwO2xldCB0PUF0KHRoaXMuUHJvbWlzZSxlKTtyZXR1cm4gdGhpcy5fZW5kQ2FsbGJhY2s9XG50LmNhbGxiYWNrLHRoaXMuX3B1bHNlUXVldWUoKSx0LnJlc3VsdH1nZXQgd2FpdGluZ0NvdW50KCl7cmV0dXJuIHRoaXMuX3BlbmRpbmdRdWV1ZS5cbmxlbmd0aH1nZXQgaWRsZUNvdW50KCl7cmV0dXJuIHRoaXMuX2lkbGUubGVuZ3RofWdldCBleHBpcmVkQ291bnQoKXtyZXR1cm4gdGhpcy5fY2xpZW50cy5cbnJlZHVjZSgoZSx0KT0+ZSsodGhpcy5fZXhwaXJlZC5oYXModCk/MTowKSwwKX1nZXQgdG90YWxDb3VudCgpe3JldHVybiB0aGlzLl9jbGllbnRzLlxubGVuZ3RofX07YShnbixcIlBvb2xcIik7dmFyIGRuPWduO0ZzLmV4cG9ydHM9ZG59KTt2YXIgRHM9e307aWUoRHMse2RlZmF1bHQ6KCk9PkNjfSk7dmFyIENjLGtzPXooKCk9PntcInVzZSBzdHJpY3RcIjtwKCk7Q2M9e319KTt2YXIgVXM9SSgocGYsVGMpPT57VGMuZXhwb3J0cz17bmFtZTpcInBnXCIsdmVyc2lvbjpcIjguOC4wXCIsZGVzY3JpcHRpb246XCJQb3N0Z3JlU1FMXFxcbiBjbGllbnQgLSBwdXJlIGphdmFzY3JpcHQgJiBsaWJwcSB3aXRoIHRoZSBzYW1lIEFQSVwiLGtleXdvcmRzOltcImRhdGFiYXNlXCIsXCJsaWJwcVwiLFxuXCJwZ1wiLFwicG9zdGdyZVwiLFwicG9zdGdyZXNcIixcInBvc3RncmVzcWxcIixcInJkYm1zXCJdLGhvbWVwYWdlOlwiaHR0cHM6Ly9naXRodWIuY29tL2JyaVxcXG5hbmMvbm9kZS1wb3N0Z3Jlc1wiLHJlcG9zaXRvcnk6e3R5cGU6XCJnaXRcIix1cmw6XCJnaXQ6Ly9naXRodWIuY29tL2JyaWFuYy9ub2RlLXBvc3RcXFxuZ3Jlcy5naXRcIixkaXJlY3Rvcnk6XCJwYWNrYWdlcy9wZ1wifSxhdXRob3I6XCJCcmlhbiBDYXJsc29uIDxicmlhbi5tLmNhcmxzb25AZ21haWwuXFxcbmNvbT5cIixtYWluOlwiLi9saWJcIixkZXBlbmRlbmNpZXM6e1wiYnVmZmVyLXdyaXRlclwiOlwiMi4wLjBcIixcInBhY2tldC1yZWFkZXJcIjpcIjEuMC4wXCIsXG5cInBnLWNvbm5lY3Rpb24tc3RyaW5nXCI6XCJeMi41LjBcIixcInBnLXBvb2xcIjpcIl4zLjUuMlwiLFwicGctcHJvdG9jb2xcIjpcIl4xLjUuMFwiLFwicGctdHlcXFxucGVzXCI6XCJeMi4xLjBcIixwZ3Bhc3M6XCIxLnhcIn0sZGV2RGVwZW5kZW5jaWVzOnthc3luYzpcIjIuNi40XCIsYmx1ZWJpcmQ6XCIzLjUuMlwiLGNvOlwiXFxcbjQuNi4wXCIsXCJwZy1jb3B5LXN0cmVhbXNcIjpcIjAuMy4wXCJ9LHBlZXJEZXBlbmRlbmNpZXM6e1wicGctbmF0aXZlXCI6XCI+PTMuMC4xXCJ9LHBlZXJEZXBlbmRlbmNpZXNNZXRhOntcblwicGctbmF0aXZlXCI6e29wdGlvbmFsOiEwfX0sc2NyaXB0czp7dGVzdDpcIm1ha2UgdGVzdC1hbGxcIn0sZmlsZXM6W1wibGliXCIsXCJTUE9OU09SU1xcXG4ubWRcIl0sbGljZW5zZTpcIk1JVFwiLGVuZ2luZXM6e25vZGU6XCI+PSA4LjAuMFwifSxnaXRIZWFkOlwiYzk5ZmIyYzEyN2RkZjhkNzEyNTAwZGIyY1xcXG43YjlhNTQ5MWExNzg2NTVcIn19KTt2YXIgcXM9SSgoZGYsTnMpPT57XCJ1c2Ugc3RyaWN0XCI7cCgpO3ZhciBPcz13ZSgpLkV2ZW50RW1pdHRlcixJYz0oSGUoKSxOKGplKSksd249ZXQoKSxcbnFlPU5zLmV4cG9ydHM9ZnVuY3Rpb24ocixlLHQpe09zLmNhbGwodGhpcykscj13bi5ub3JtYWxpemVRdWVyeUNvbmZpZyhyLGUsdCksdGhpcy5cbnRleHQ9ci50ZXh0LHRoaXMudmFsdWVzPXIudmFsdWVzLHRoaXMubmFtZT1yLm5hbWUsdGhpcy5jYWxsYmFjaz1yLmNhbGxiYWNrLHRoaXMuXG5zdGF0ZT1cIm5ld1wiLHRoaXMuX2FycmF5TW9kZT1yLnJvd01vZGU9PT1cImFycmF5XCIsdGhpcy5fZW1pdFJvd0V2ZW50cz0hMSx0aGlzLm9uKFwiXFxcbm5ld0xpc3RlbmVyXCIsZnVuY3Rpb24obil7bj09PVwicm93XCImJih0aGlzLl9lbWl0Um93RXZlbnRzPSEwKX0uYmluZCh0aGlzKSl9O0ljLmluaGVyaXRzKFxucWUsT3MpO3ZhciBQYz17c3FsU3RhdGU6XCJjb2RlXCIsc3RhdGVtZW50UG9zaXRpb246XCJwb3NpdGlvblwiLG1lc3NhZ2VQcmltYXJ5OlwibWVzc1xcXG5hZ2VcIixjb250ZXh0Olwid2hlcmVcIixzY2hlbWFOYW1lOlwic2NoZW1hXCIsdGFibGVOYW1lOlwidGFibGVcIixjb2x1bW5OYW1lOlwiY29sdW1uXCIsZGF0YVR5cGVOYW1lOlwiXFxcbmRhdGFUeXBlXCIsY29uc3RyYWludE5hbWU6XCJjb25zdHJhaW50XCIsc291cmNlRmlsZTpcImZpbGVcIixzb3VyY2VMaW5lOlwibGluZVwiLHNvdXJjZUZ1bmN0aW9uOlwiXFxcbnJvdXRpbmVcIn07cWUucHJvdG90eXBlLmhhbmRsZUVycm9yPWZ1bmN0aW9uKHIpe3ZhciBlPXRoaXMubmF0aXZlLnBxLnJlc3VsdEVycm9yRmllbGRzKCk7XG5pZihlKWZvcih2YXIgdCBpbiBlKXt2YXIgbj1QY1t0XXx8dDtyW25dPWVbdF19dGhpcy5jYWxsYmFjaz90aGlzLmNhbGxiYWNrKHIpOnRoaXMuXG5lbWl0KFwiZXJyb3JcIixyKSx0aGlzLnN0YXRlPVwiZXJyb3JcIn07cWUucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24ocixlKXtyZXR1cm4gdGhpcy5cbl9nZXRQcm9taXNlKCkudGhlbihyLGUpfTtxZS5wcm90b3R5cGUuY2F0Y2g9ZnVuY3Rpb24ocil7cmV0dXJuIHRoaXMuX2dldFByb21pc2UoKS5cbmNhdGNoKHIpfTtxZS5wcm90b3R5cGUuX2dldFByb21pc2U9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcHJvbWlzZT90aGlzLl9wcm9taXNlOlxuKHRoaXMuX3Byb21pc2U9bmV3IFByb21pc2UoZnVuY3Rpb24ocixlKXt0aGlzLl9vbmNlKFwiZW5kXCIsciksdGhpcy5fb25jZShcImVycm9yXCIsXG5lKX0uYmluZCh0aGlzKSksdGhpcy5fcHJvbWlzZSl9O3FlLnByb3RvdHlwZS5zdWJtaXQ9ZnVuY3Rpb24ocil7dGhpcy5zdGF0ZT1cInJ1bm5cXFxuaW5nXCI7dmFyIGU9dGhpczt0aGlzLm5hdGl2ZT1yLm5hdGl2ZSxyLm5hdGl2ZS5hcnJheU1vZGU9dGhpcy5fYXJyYXlNb2RlO3ZhciB0PWEoXG5mdW5jdGlvbihzLG8sdSl7aWYoci5uYXRpdmUuYXJyYXlNb2RlPSExLHgoZnVuY3Rpb24oKXtlLmVtaXQoXCJfZG9uZVwiKX0pLHMpcmV0dXJuIGUuXG5oYW5kbGVFcnJvcihzKTtlLl9lbWl0Um93RXZlbnRzJiYodS5sZW5ndGg+MT9vLmZvckVhY2goKGMsaCk9PntjLmZvckVhY2gobD0+e2UuZW1pdChcblwicm93XCIsbCx1W2hdKX0pfSk6by5mb3JFYWNoKGZ1bmN0aW9uKGMpe2UuZW1pdChcInJvd1wiLGMsdSl9KSksZS5zdGF0ZT1cImVuZFwiLGUuZW1pdChcblwiZW5kXCIsdSksZS5jYWxsYmFjayYmZS5jYWxsYmFjayhudWxsLHUpfSxcImFmdGVyXCIpO2lmKG0uZG9tYWluJiYodD1tLmRvbWFpbi5iaW5kKFxudCkpLHRoaXMubmFtZSl7dGhpcy5uYW1lLmxlbmd0aD42MyYmKGNvbnNvbGUuZXJyb3IoXCJXYXJuaW5nISBQb3N0Z3JlcyBvbmx5IHN1cHBvXFxcbnJ0cyA2MyBjaGFyYWN0ZXJzIGZvciBxdWVyeSBuYW1lcy5cIiksY29uc29sZS5lcnJvcihcIllvdSBzdXBwbGllZCAlcyAoJXMpXCIsdGhpcy5uYW1lLFxudGhpcy5uYW1lLmxlbmd0aCksY29uc29sZS5lcnJvcihcIlRoaXMgY2FuIGNhdXNlIGNvbmZsaWN0cyBhbmQgc2lsZW50IGVycm9ycyBleGVjXFxcbnV0aW5nIHF1ZXJpZXNcIikpO3ZhciBuPSh0aGlzLnZhbHVlc3x8W10pLm1hcCh3bi5wcmVwYXJlVmFsdWUpO2lmKHIubmFtZWRRdWVyaWVzW3RoaXMuXG5uYW1lXSl7aWYodGhpcy50ZXh0JiZyLm5hbWVkUXVlcmllc1t0aGlzLm5hbWVdIT09dGhpcy50ZXh0KXtsZXQgcz1uZXcgRXJyb3IoYFByZVxcXG5wYXJlZCBzdGF0ZW1lbnRzIG11c3QgYmUgdW5pcXVlIC0gJyR7dGhpcy5uYW1lfScgd2FzIHVzZWQgZm9yIGEgZGlmZmVyZW50IHN0YXRlbVxcXG5lbnRgKTtyZXR1cm4gdChzKX1yZXR1cm4gci5uYXRpdmUuZXhlY3V0ZSh0aGlzLm5hbWUsbix0KX1yZXR1cm4gci5uYXRpdmUucHJlcGFyZShcbnRoaXMubmFtZSx0aGlzLnRleHQsbi5sZW5ndGgsZnVuY3Rpb24ocyl7cmV0dXJuIHM/dChzKTooci5uYW1lZFF1ZXJpZXNbZS5uYW1lXT1lLlxudGV4dCxlLm5hdGl2ZS5leGVjdXRlKGUubmFtZSxuLHQpKX0pfWVsc2UgaWYodGhpcy52YWx1ZXMpe2lmKCFBcnJheS5pc0FycmF5KHRoaXMuXG52YWx1ZXMpKXtsZXQgcz1uZXcgRXJyb3IoXCJRdWVyeSB2YWx1ZXMgbXVzdCBiZSBhbiBhcnJheVwiKTtyZXR1cm4gdChzKX12YXIgaT10aGlzLlxudmFsdWVzLm1hcCh3bi5wcmVwYXJlVmFsdWUpO3IubmF0aXZlLnF1ZXJ5KHRoaXMudGV4dCxpLHQpfWVsc2Ugci5uYXRpdmUucXVlcnkodGhpcy5cbnRleHQsdCl9fSk7dmFyIEhzPUkoKHdmLGpzKT0+e1widXNlIHN0cmljdFwiO3AoKTt2YXIgQmM9KGtzKCksTihEcykpLExjPW10KCksZ2Y9VXMoKSxRcz13ZSgpLlxuRXZlbnRFbWl0dGVyLFJjPShIZSgpLE4oamUpKSxGYz1ndCgpLFdzPXFzKCksSj1qcy5leHBvcnRzPWZ1bmN0aW9uKHIpe1FzLmNhbGwodGhpcyksXG5yPXJ8fHt9LHRoaXMuX1Byb21pc2U9ci5Qcm9taXNlfHxTLlByb21pc2UsdGhpcy5fdHlwZXM9bmV3IExjKHIudHlwZXMpLHRoaXMubmF0aXZlPVxubmV3IEJjKHt0eXBlczp0aGlzLl90eXBlc30pLHRoaXMuX3F1ZXJ5UXVldWU9W10sdGhpcy5fZW5kaW5nPSExLHRoaXMuX2Nvbm5lY3Rpbmc9XG4hMSx0aGlzLl9jb25uZWN0ZWQ9ITEsdGhpcy5fcXVlcnlhYmxlPSEwO3ZhciBlPXRoaXMuY29ubmVjdGlvblBhcmFtZXRlcnM9bmV3IEZjKFxucik7dGhpcy51c2VyPWUudXNlcixPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInBhc3N3b3JkXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiExLFxud3JpdGFibGU6ITAsdmFsdWU6ZS5wYXNzd29yZH0pLHRoaXMuZGF0YWJhc2U9ZS5kYXRhYmFzZSx0aGlzLmhvc3Q9ZS5ob3N0LHRoaXMucG9ydD1cbmUucG9ydCx0aGlzLm5hbWVkUXVlcmllcz17fX07Si5RdWVyeT1XcztSYy5pbmhlcml0cyhKLFFzKTtKLnByb3RvdHlwZS5fZXJyb3JBbGxRdWVyaWVzPVxuZnVuY3Rpb24ocil7bGV0IGU9YSh0PT57bS5uZXh0VGljaygoKT0+e3QubmF0aXZlPXRoaXMubmF0aXZlLHQuaGFuZGxlRXJyb3Iocil9KX0sXG5cImVucXVldWVFcnJvclwiKTt0aGlzLl9oYXNBY3RpdmVRdWVyeSgpJiYoZSh0aGlzLl9hY3RpdmVRdWVyeSksdGhpcy5fYWN0aXZlUXVlcnk9XG5udWxsKSx0aGlzLl9xdWVyeVF1ZXVlLmZvckVhY2goZSksdGhpcy5fcXVlcnlRdWV1ZS5sZW5ndGg9MH07Si5wcm90b3R5cGUuX2Nvbm5lY3Q9XG5mdW5jdGlvbihyKXt2YXIgZT10aGlzO2lmKHRoaXMuX2Nvbm5lY3Rpbmcpe20ubmV4dFRpY2soKCk9PnIobmV3IEVycm9yKFwiQ2xpZW50IGhcXFxuYXMgYWxyZWFkeSBiZWVuIGNvbm5lY3RlZC4gWW91IGNhbm5vdCByZXVzZSBhIGNsaWVudC5cIikpKTtyZXR1cm59dGhpcy5fY29ubmVjdGluZz1cbiEwLHRoaXMuY29ubmVjdGlvblBhcmFtZXRlcnMuZ2V0TGlicHFDb25uZWN0aW9uU3RyaW5nKGZ1bmN0aW9uKHQsbil7aWYodClyZXR1cm4gcihcbnQpO2UubmF0aXZlLmNvbm5lY3QobixmdW5jdGlvbihpKXtpZihpKXJldHVybiBlLm5hdGl2ZS5lbmQoKSxyKGkpO2UuX2Nvbm5lY3RlZD0hMCxcbmUubmF0aXZlLm9uKFwiZXJyb3JcIixmdW5jdGlvbihzKXtlLl9xdWVyeWFibGU9ITEsZS5fZXJyb3JBbGxRdWVyaWVzKHMpLGUuZW1pdChcImVyXFxcbnJvclwiLHMpfSksZS5uYXRpdmUub24oXCJub3RpZmljYXRpb25cIixmdW5jdGlvbihzKXtlLmVtaXQoXCJub3RpZmljYXRpb25cIix7Y2hhbm5lbDpzLlxucmVsbmFtZSxwYXlsb2FkOnMuZXh0cmF9KX0pLGUuZW1pdChcImNvbm5lY3RcIiksZS5fcHVsc2VRdWVyeVF1ZXVlKCEwKSxyKCl9KX0pfTtKLlxucHJvdG90eXBlLmNvbm5lY3Q9ZnVuY3Rpb24ocil7aWYocil7dGhpcy5fY29ubmVjdChyKTtyZXR1cm59cmV0dXJuIG5ldyB0aGlzLl9Qcm9taXNlKFxuKGUsdCk9Pnt0aGlzLl9jb25uZWN0KG49PntuP3Qobik6ZSgpfSl9KX07Si5wcm90b3R5cGUucXVlcnk9ZnVuY3Rpb24ocixlLHQpe3ZhciBuLFxuaSxzLG8sdTtpZihyPT1udWxsKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGllbnQgd2FzIHBhc3NlZCBhIG51bGwgb3IgdW5kZWZpbmVkIHF1XFxcbmVyeVwiKTtpZih0eXBlb2Ygci5zdWJtaXQ9PVwiZnVuY3Rpb25cIilzPXIucXVlcnlfdGltZW91dHx8dGhpcy5jb25uZWN0aW9uUGFyYW1ldGVycy5cbnF1ZXJ5X3RpbWVvdXQsaT1uPXIsdHlwZW9mIGU9PVwiZnVuY3Rpb25cIiYmKHIuY2FsbGJhY2s9ZSk7ZWxzZSBpZihzPXRoaXMuY29ubmVjdGlvblBhcmFtZXRlcnMuXG5xdWVyeV90aW1lb3V0LG49bmV3IFdzKHIsZSx0KSwhbi5jYWxsYmFjayl7bGV0IGMsaDtpPW5ldyB0aGlzLl9Qcm9taXNlKChsLGQpPT57Yz1cbmwsaD1kfSksbi5jYWxsYmFjaz0obCxkKT0+bD9oKGwpOmMoZCl9cmV0dXJuIHMmJih1PW4uY2FsbGJhY2ssbz1zZXRUaW1lb3V0KCgpPT57XG52YXIgYz1uZXcgRXJyb3IoXCJRdWVyeSByZWFkIHRpbWVvdXRcIik7bS5uZXh0VGljaygoKT0+e24uaGFuZGxlRXJyb3IoYyx0aGlzLmNvbm5lY3Rpb24pfSksXG51KGMpLG4uY2FsbGJhY2s9KCk9Pnt9O3ZhciBoPXRoaXMuX3F1ZXJ5UXVldWUuaW5kZXhPZihuKTtoPi0xJiZ0aGlzLl9xdWVyeVF1ZXVlLlxuc3BsaWNlKGgsMSksdGhpcy5fcHVsc2VRdWVyeVF1ZXVlKCl9LHMpLG4uY2FsbGJhY2s9KGMsaCk9PntjbGVhclRpbWVvdXQobyksdShjLGgpfSksXG50aGlzLl9xdWVyeWFibGU/dGhpcy5fZW5kaW5nPyhuLm5hdGl2ZT10aGlzLm5hdGl2ZSxtLm5leHRUaWNrKCgpPT57bi5oYW5kbGVFcnJvcihcbm5ldyBFcnJvcihcIkNsaWVudCB3YXMgY2xvc2VkIGFuZCBpcyBub3QgcXVlcnlhYmxlXCIpKX0pLGkpOih0aGlzLl9xdWVyeVF1ZXVlLnB1c2goXG5uKSx0aGlzLl9wdWxzZVF1ZXJ5UXVldWUoKSxpKToobi5uYXRpdmU9dGhpcy5uYXRpdmUsbS5uZXh0VGljaygoKT0+e24uaGFuZGxlRXJyb3IoXG5uZXcgRXJyb3IoXCJDbGllbnQgaGFzIGVuY291bnRlcmVkIGEgY29ubmVjdGlvbiBlcnJvciBhbmQgaXMgbm90IHF1ZXJ5YWJsZVwiKSl9KSxpKX07XG5KLnByb3RvdHlwZS5lbmQ9ZnVuY3Rpb24ocil7dmFyIGU9dGhpczt0aGlzLl9lbmRpbmc9ITAsdGhpcy5fY29ubmVjdGVkfHx0aGlzLm9uY2UoXG5cImNvbm5lY3RcIix0aGlzLmVuZC5iaW5kKHRoaXMscikpO3ZhciB0O3JldHVybiByfHwodD1uZXcgdGhpcy5fUHJvbWlzZShmdW5jdGlvbihuLGkpe1xucj1hKHM9PnM/aShzKTpuKCksXCJjYlwiKX0pKSx0aGlzLm5hdGl2ZS5lbmQoZnVuY3Rpb24oKXtlLl9lcnJvckFsbFF1ZXJpZXMobmV3IEVycm9yKFxuXCJDb25uZWN0aW9uIHRlcm1pbmF0ZWRcIikpLG0ubmV4dFRpY2soKCk9PntlLmVtaXQoXCJlbmRcIiksciYmcigpfSl9KSx0fTtKLnByb3RvdHlwZS5cbl9oYXNBY3RpdmVRdWVyeT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9hY3RpdmVRdWVyeSYmdGhpcy5fYWN0aXZlUXVlcnkuc3RhdGUhPT1cIlxcXG5lcnJvclwiJiZ0aGlzLl9hY3RpdmVRdWVyeS5zdGF0ZSE9PVwiZW5kXCJ9O0oucHJvdG90eXBlLl9wdWxzZVF1ZXJ5UXVldWU9ZnVuY3Rpb24ocil7XG5pZih0aGlzLl9jb25uZWN0ZWQmJiF0aGlzLl9oYXNBY3RpdmVRdWVyeSgpKXt2YXIgZT10aGlzLl9xdWVyeVF1ZXVlLnNoaWZ0KCk7aWYoIWUpe1xucnx8dGhpcy5lbWl0KFwiZHJhaW5cIik7cmV0dXJufXRoaXMuX2FjdGl2ZVF1ZXJ5PWUsZS5zdWJtaXQodGhpcyk7dmFyIHQ9dGhpcztlLm9uY2UoXG5cIl9kb25lXCIsZnVuY3Rpb24oKXt0Ll9wdWxzZVF1ZXJ5UXVldWUoKX0pfX07Si5wcm90b3R5cGUuY2FuY2VsPWZ1bmN0aW9uKHIpe3RoaXMuXG5fYWN0aXZlUXVlcnk9PT1yP3RoaXMubmF0aXZlLmNhbmNlbChmdW5jdGlvbigpe30pOnRoaXMuX3F1ZXJ5UXVldWUuaW5kZXhPZihyKSE9PVxuLTEmJnRoaXMuX3F1ZXJ5UXVldWUuc3BsaWNlKHRoaXMuX3F1ZXJ5UXVldWUuaW5kZXhPZihyKSwxKX07Si5wcm90b3R5cGUucmVmPWZ1bmN0aW9uKCl7fTtcbkoucHJvdG90eXBlLnVucmVmPWZ1bmN0aW9uKCl7fTtKLnByb3RvdHlwZS5zZXRUeXBlUGFyc2VyPWZ1bmN0aW9uKHIsZSx0KXtyZXR1cm4gdGhpcy5cbl90eXBlcy5zZXRUeXBlUGFyc2VyKHIsZSx0KX07Si5wcm90b3R5cGUuZ2V0VHlwZVBhcnNlcj1mdW5jdGlvbihyLGUpe3JldHVybiB0aGlzLlxuX3R5cGVzLmdldFR5cGVQYXJzZXIocixlKX19KTt2YXIgYm49SSgoeGYsR3MpPT57XCJ1c2Ugc3RyaWN0XCI7cCgpO0dzLmV4cG9ydHM9SHMoKX0pO3ZhciBDdD1JKChFZixydCk9PntcInVzZSBzdHJpY3RcIjtwKCk7dmFyIE1jPUJzKCksRGM9WGUoKSxrYz1obigpLFVjPU1zKCkse0RhdGFiYXNlRXJyb3I6T2N9PWFuKCksXG5OYz1hKHI9Pnt2YXIgZTtyZXR1cm4gZT1jbGFzcyBleHRlbmRzIFVje2NvbnN0cnVjdG9yKG4pe3N1cGVyKG4scil9fSxhKGUsXCJCb3VuZFBcXFxub29sXCIpLGV9LFwicG9vbEZhY3RvcnlcIiksU249YShmdW5jdGlvbihyKXt0aGlzLmRlZmF1bHRzPURjLHRoaXMuQ2xpZW50PXIsdGhpcy5RdWVyeT1cbnRoaXMuQ2xpZW50LlF1ZXJ5LHRoaXMuUG9vbD1OYyh0aGlzLkNsaWVudCksdGhpcy5fcG9vbHM9W10sdGhpcy5Db25uZWN0aW9uPWtjLHRoaXMuXG50eXBlcz1KZSgpLHRoaXMuRGF0YWJhc2VFcnJvcj1PY30sXCJQR1wiKTt0eXBlb2YgbS5lbnYuTk9ERV9QR19GT1JDRV9OQVRJVkU8XCJ1XCI/cnQuXG5leHBvcnRzPW5ldyBTbihibigpKToocnQuZXhwb3J0cz1uZXcgU24oTWMpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShydC5leHBvcnRzLFwibmFcXFxudGl2ZVwiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMSxnZXQoKXt2YXIgcj1udWxsO3RyeXtyPW5ldyBTbihibigpKX1jYXRjaChlKXtcbmlmKGUuY29kZSE9PVwiTU9EVUxFX05PVF9GT1VORFwiKXRocm93IGV9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShydC5leHBvcnRzLFwiXFxcbm5hdGl2ZVwiLHt2YWx1ZTpyfSkscn19KSl9KTtwKCk7dmFyIFR0PVRlKEN0KCkpO3d0KCk7cCgpO3ByKCk7d3QoKTt2YXIgS3M9VGUoZXQoKSksenM9VGUobXQoKSk7dmFyIHhuPWNsYXNzIHhuIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpO18odGhpcyxcIm5hbWVcIixcIk5cXFxuZW9uRGJFcnJvclwiKTtfKHRoaXMsXCJzZXZlcml0eVwiKTtfKHRoaXMsXCJjb2RlXCIpO18odGhpcyxcImRldGFpbFwiKTtfKHRoaXMsXCJoaW50XCIpO18oXG50aGlzLFwicG9zaXRpb25cIik7Xyh0aGlzLFwiaW50ZXJuYWxQb3NpdGlvblwiKTtfKHRoaXMsXCJpbnRlcm5hbFF1ZXJ5XCIpO18odGhpcyxcIndoZXJcXFxuZVwiKTtfKHRoaXMsXCJzY2hlbWFcIik7Xyh0aGlzLFwidGFibGVcIik7Xyh0aGlzLFwiY29sdW1uXCIpO18odGhpcyxcImRhdGFUeXBlXCIpO18odGhpcyxcblwiY29uc3RyYWludFwiKTtfKHRoaXMsXCJmaWxlXCIpO18odGhpcyxcImxpbmVcIik7Xyh0aGlzLFwicm91dGluZVwiKTtfKHRoaXMsXCJzb3VyY2VFcnJvXFxcbnJcIil9fTthKHhuLFwiTmVvbkRiRXJyb3JcIik7dmFyIEFlPXhuLCRzPVwidHJhbnNhY3Rpb24oKSBleHBlY3RzIGFuIGFycmF5IG9mIHF1ZXJpZVxcXG5zLCBvciBhIGZ1bmN0aW9uIHJldHVybmluZyBhbiBhcnJheSBvZiBxdWVyaWVzXCIscWM9W1wic2V2ZXJpdHlcIixcImNvZGVcIixcImRldGFpbFwiLFwiXFxcbmhpbnRcIixcInBvc2l0aW9uXCIsXCJpbnRlcm5hbFBvc2l0aW9uXCIsXCJpbnRlcm5hbFF1ZXJ5XCIsXCJ3aGVyZVwiLFwic2NoZW1hXCIsXCJ0YWJsZVwiLFwiY29cXFxubHVtblwiLFwiZGF0YVR5cGVcIixcImNvbnN0cmFpbnRcIixcImZpbGVcIixcImxpbmVcIixcInJvdXRpbmVcIl07ZnVuY3Rpb24gWXMocix7YXJyYXlNb2RlOmUsXG5mdWxsUmVzdWx0czp0LGZldGNoT3B0aW9uczpuLGlzb2xhdGlvbkxldmVsOmkscmVhZE9ubHk6cyxkZWZlcnJhYmxlOm8scXVlcnlDYWxsYmFjazp1LFxucmVzdWx0Q2FsbGJhY2s6Y309e30pe2lmKCFyKXRocm93IG5ldyBFcnJvcihcIk5vIGRhdGFiYXNlIGNvbm5lY3Rpb24gc3RyaW5nIHdhcyBwXFxcbnJvdmlkZWQgdG8gYG5lb24oKWAuIFBlcmhhcHMgYW4gZW52aXJvbm1lbnQgdmFyaWFibGUgaGFzIG5vdCBiZWVuIHNldD9cIik7bGV0IGg7dHJ5e1xuaD1mcihyKX1jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXCJEYXRhYmFzZSBjb25uZWN0aW9uIHN0cmluZyBwcm92aWRlZCB0byBgbmVvbigpYCBpXFxcbnMgbm90IGEgdmFsaWQgVVJMLiBDb25uZWN0aW9uIHN0cmluZzogXCIrU3RyaW5nKHIpKX1sZXR7cHJvdG9jb2w6bCx1c2VybmFtZTpkLHBhc3N3b3JkOmIsXG5ob3N0bmFtZTpDLHBvcnQ6QixwYXRobmFtZTpXfT1oO2lmKGwhPT1cInBvc3RncmVzOlwiJiZsIT09XCJwb3N0Z3Jlc3FsOlwifHwhZHx8IWJ8fCFDfHxcbiFXKXRocm93IG5ldyBFcnJvcihcIkRhdGFiYXNlIGNvbm5lY3Rpb24gc3RyaW5nIGZvcm1hdCBmb3IgYG5lb24oKWAgc2hvdWxkIGJlOiBwb1xcXG5zdGdyZXNxbDovL3VzZXI6cGFzc3dvcmRAaG9zdC50bGQvZGJuYW1lP29wdGlvbj12YWx1ZVwiKTtmdW5jdGlvbiBYKEEsLi4udyl7bGV0IFAsXG5WO2lmKHR5cGVvZiBBPT1cInN0cmluZ1wiKVA9QSxWPXdbMV0sdz13WzBdPz9bXTtlbHNle1A9XCJcIjtmb3IobGV0IGo9MDtqPEEubGVuZ3RoO2orKylcblArPUFbal0sajx3Lmxlbmd0aCYmKFArPVwiJFwiKyhqKzEpKX13PXcubWFwKGo9PigwLEtzLnByZXBhcmVWYWx1ZSkoaikpO2xldCBrPXtxdWVyeTpQLFxucGFyYW1zOnd9O3JldHVybiB1JiZ1KGspLFFjKGRlLGssVil9YShYLFwicmVzb2x2ZVwiKSxYLnRyYW5zYWN0aW9uPWFzeW5jKEEsdyk9PntpZih0eXBlb2YgQT09XG5cImZ1bmN0aW9uXCImJihBPUEoWCkpLCFBcnJheS5pc0FycmF5KEEpKXRocm93IG5ldyBFcnJvcigkcyk7QS5mb3JFYWNoKGs9PntpZihrW1N5bWJvbC5cbnRvU3RyaW5nVGFnXSE9PVwiTmVvblF1ZXJ5UHJvbWlzZVwiKXRocm93IG5ldyBFcnJvcigkcyl9KTtsZXQgUD1BLm1hcChrPT5rLnBhcmFtZXRlcml6ZWRRdWVyeSksXG5WPUEubWFwKGs9Pmsub3B0cz8/e30pO3JldHVybiBkZShQLFYsdyl9O2FzeW5jIGZ1bmN0aW9uIGRlKEEsdyxQKXtsZXR7ZmV0Y2hFbmRwb2ludDpWLFxuZmV0Y2hGdW5jdGlvbjprfT1fZSxqPXR5cGVvZiBWPT1cImZ1bmN0aW9uXCI/VihDLEIpOlYsY2U9QXJyYXkuaXNBcnJheShBKT97cXVlcmllczpBfTpcbkEsZWU9bj8/e30sUj1lPz8hMSxHPXQ/PyExLGhlPWkseWU9cyx4ZT1vO1AhPT12b2lkIDAmJihQLmZldGNoT3B0aW9ucyE9PXZvaWQgMCYmXG4oZWU9ey4uLmVlLC4uLlAuZmV0Y2hPcHRpb25zfSksUC5hcnJheU1vZGUhPT12b2lkIDAmJihSPVAuYXJyYXlNb2RlKSxQLmZ1bGxSZXN1bHRzIT09XG52b2lkIDAmJihHPVAuZnVsbFJlc3VsdHMpLFAuaXNvbGF0aW9uTGV2ZWwhPT12b2lkIDAmJihoZT1QLmlzb2xhdGlvbkxldmVsKSxQLnJlYWRPbmx5IT09XG52b2lkIDAmJih5ZT1QLnJlYWRPbmx5KSxQLmRlZmVycmFibGUhPT12b2lkIDAmJih4ZT1QLmRlZmVycmFibGUpKSx3IT09dm9pZCAwJiYhQXJyYXkuXG5pc0FycmF5KHcpJiZ3LmZldGNoT3B0aW9ucyE9PXZvaWQgMCYmKGVlPXsuLi5lZSwuLi53LmZldGNoT3B0aW9uc30pO2xldCBtZT17XCJOZW9cXFxubi1Db25uZWN0aW9uLVN0cmluZ1wiOnIsXCJOZW9uLVJhdy1UZXh0LU91dHB1dFwiOlwidHJ1ZVwiLFwiTmVvbi1BcnJheS1Nb2RlXCI6XCJ0cnVlXCJ9O0FycmF5LlxuaXNBcnJheShBKSYmKGhlIT09dm9pZCAwJiYobWVbXCJOZW9uLUJhdGNoLUlzb2xhdGlvbi1MZXZlbFwiXT1oZSkseWUhPT12b2lkIDAmJihtZVtcIlxcXG5OZW9uLUJhdGNoLVJlYWQtT25seVwiXT1TdHJpbmcoeWUpKSx4ZSE9PXZvaWQgMCYmKG1lW1wiTmVvbi1CYXRjaC1EZWZlcnJhYmxlXCJdPVN0cmluZyhcbnhlKSkpO2xldCBzZTt0cnl7c2U9YXdhaXQoaz8/ZmV0Y2gpKGose21ldGhvZDpcIlBPU1RcIixib2R5OkpTT04uc3RyaW5naWZ5KGNlKSxoZWFkZXJzOm1lLFxuLi4uZWV9KX1jYXRjaChvZSl7bGV0IFU9bmV3IEFlKGBFcnJvciBjb25uZWN0aW5nIHRvIGRhdGFiYXNlOiAke29lLm1lc3NhZ2V9YCk7dGhyb3cgVS5cbnNvdXJjZUVycm9yPW9lLFV9aWYoc2Uub2spe2xldCBvZT1hd2FpdCBzZS5qc29uKCk7aWYoQXJyYXkuaXNBcnJheShBKSl7bGV0IFU9b2UuXG5yZXN1bHRzO2lmKCFBcnJheS5pc0FycmF5KFUpKXRocm93IG5ldyBBZShcIk5lb24gaW50ZXJuYWwgZXJyb3I6IHVuZXhwZWN0ZWQgcmVzdWxcXFxudCBmb3JtYXRcIik7cmV0dXJuIFUubWFwKChLLGxlKT0+e2xldCBJdD13W2xlXT8/e30sWHM9SXQuYXJyYXlNb2RlPz9SLGVvPUl0LmZ1bGxSZXN1bHRzPz9cbkc7cmV0dXJuIFZzKEsse2FycmF5TW9kZTpYcyxmdWxsUmVzdWx0czplbyxwYXJhbWV0ZXJpemVkUXVlcnk6QVtsZV0scmVzdWx0Q2FsbGJhY2s6YyxcbnR5cGVzOkl0LnR5cGVzfSl9KX1lbHNle2xldCBVPXc/P3t9LEs9VS5hcnJheU1vZGU/P1IsbGU9VS5mdWxsUmVzdWx0cz8/RztyZXR1cm4gVnMoXG5vZSx7YXJyYXlNb2RlOkssZnVsbFJlc3VsdHM6bGUscGFyYW1ldGVyaXplZFF1ZXJ5OkEscmVzdWx0Q2FsbGJhY2s6Yyx0eXBlczpVLnR5cGVzfSl9fWVsc2V7XG5sZXR7c3RhdHVzOm9lfT1zZTtpZihvZT09PTQwMCl7bGV0IFU9YXdhaXQgc2UuanNvbigpLEs9bmV3IEFlKFUubWVzc2FnZSk7Zm9yKGxldCBsZSBvZiBxYylcbktbbGVdPVVbbGVdPz92b2lkIDA7dGhyb3cgS31lbHNle2xldCBVPWF3YWl0IHNlLnRleHQoKTt0aHJvdyBuZXcgQWUoYFNlcnZlciBlcnJvXFxcbnIgKEhUVFAgc3RhdHVzICR7b2V9KTogJHtVfWApfX19cmV0dXJuIGEoZGUsXCJleGVjdXRlXCIpLFh9YShZcyxcIm5lb25cIik7ZnVuY3Rpb24gUWMocixlLHQpe1xucmV0dXJue1tTeW1ib2wudG9TdHJpbmdUYWddOlwiTmVvblF1ZXJ5UHJvbWlzZVwiLHBhcmFtZXRlcml6ZWRRdWVyeTplLG9wdHM6dCx0aGVuOmEoXG4obixpKT0+cihlLHQpLnRoZW4obixpKSxcInRoZW5cIiksY2F0Y2g6YShuPT5yKGUsdCkuY2F0Y2gobiksXCJjYXRjaFwiKSxmaW5hbGx5OmEobj0+cihcbmUsdCkuZmluYWxseShuKSxcImZpbmFsbHlcIil9fWEoUWMsXCJjcmVhdGVOZW9uUXVlcnlQcm9taXNlXCIpO2Z1bmN0aW9uIFZzKHIse2FycmF5TW9kZTplLFxuZnVsbFJlc3VsdHM6dCxwYXJhbWV0ZXJpemVkUXVlcnk6bixyZXN1bHRDYWxsYmFjazppLHR5cGVzOnN9KXtsZXQgbz1uZXcgenMuZGVmYXVsdChcbnMpLHU9ci5maWVsZHMubWFwKGw9PmwubmFtZSksYz1yLmZpZWxkcy5tYXAobD0+by5nZXRUeXBlUGFyc2VyKGwuZGF0YVR5cGVJRCkpLGg9ZT09PVxuITA/ci5yb3dzLm1hcChsPT5sLm1hcCgoZCxiKT0+ZD09PW51bGw/bnVsbDpjW2JdKGQpKSk6ci5yb3dzLm1hcChsPT5PYmplY3QuZnJvbUVudHJpZXMoXG5sLm1hcCgoZCxiKT0+W3VbYl0sZD09PW51bGw/bnVsbDpjW2JdKGQpXSkpKTtyZXR1cm4gaSYmaShuLHIsaCx7YXJyYXlNb2RlOmUsZnVsbFJlc3VsdHM6dH0pLFxudD8oci52aWFOZW9uRmV0Y2g9ITAsci5yb3dBc0FycmF5PWUsci5yb3dzPWgsci5fcGFyc2Vycz1jLHIuX3R5cGVzPW8scik6aH1hKFZzLFwiXFxcbnByb2Nlc3NRdWVyeVJlc3VsdFwiKTt2YXIgSnM9VGUoZ3QoKSksUWU9VGUoQ3QoKSk7dmFyIEVuPWNsYXNzIEVuIGV4dGVuZHMgVHQuQ2xpZW50e2NvbnN0cnVjdG9yKHQpe3N1cGVyKHQpO3RoaXMuY29uZmlnPXR9Z2V0IG5lb25Db25maWcoKXtcbnJldHVybiB0aGlzLmNvbm5lY3Rpb24uc3RyZWFtfWNvbm5lY3QodCl7bGV0e25lb25Db25maWc6bn09dGhpcztuLmZvcmNlRGlzYWJsZVBnU1NMJiZcbih0aGlzLnNzbD10aGlzLmNvbm5lY3Rpb24uc3NsPSExKSx0aGlzLnNzbCYmbi51c2VTZWN1cmVXZWJTb2NrZXQmJmNvbnNvbGUud2FybihcIlxcXG5TU0wgaXMgZW5hYmxlZCBmb3IgYm90aCBQb3N0Z3JlcyAoZS5nLiA/c3NsbW9kZT1yZXF1aXJlIGluIHRoZSBjb25uZWN0aW9uIHN0cmluZ1xcXG4gKyBmb3JjZURpc2FibGVQZ1NTTCA9IGZhbHNlKSBhbmQgdGhlIFdlYlNvY2tldCB0dW5uZWwgKHVzZVNlY3VyZVdlYlNvY2tldCA9IHRydVxcXG5lKS4gRG91YmxlIGVuY3J5cHRpb24gd2lsbCBpbmNyZWFzZSBsYXRlbmN5IGFuZCBDUFUgdXNhZ2UuIEl0IG1heSBiZSBhcHByb3ByaWF0ZVxcXG4gdG8gZGlzYWJsZSBTU0wgaW4gdGhlIFBvc3RncmVzIGNvbm5lY3Rpb24gcGFyYW1ldGVycyBvciBzZXQgZm9yY2VEaXNhYmxlUGdTU0wgPVxcXG4gdHJ1ZS5cIik7bGV0IGk9dGhpcy5jb25maWc/Lmhvc3QhPT12b2lkIDB8fHRoaXMuY29uZmlnPy5jb25uZWN0aW9uU3RyaW5nIT09dm9pZCAwfHxcbm0uZW52LlBHSE9TVCE9PXZvaWQgMCxzPW0uZW52LlVTRVI/P20uZW52LlVTRVJOQU1FO2lmKCFpJiZ0aGlzLmhvc3Q9PT1cImxvY2FsaG9zdFwiJiZcbnRoaXMudXNlcj09PXMmJnRoaXMuZGF0YWJhc2U9PT1zJiZ0aGlzLnBhc3N3b3JkPT09bnVsbCl0aHJvdyBuZXcgRXJyb3IoYE5vIGRhdGFiXFxcbmFzZSBob3N0IG9yIGNvbm5lY3Rpb24gc3RyaW5nIHdhcyBzZXQsIGFuZCBrZXkgcGFyYW1ldGVycyBoYXZlIGRlZmF1bHQgdmFsdWVzIChoXFxcbm9zdDogbG9jYWxob3N0LCB1c2VyOiAke3N9LCBkYjogJHtzfSwgcGFzc3dvcmQ6IG51bGwpLiBJcyBhbiBlbnZpcm9ubWVudCB2YXJpYWJsXFxcbmUgbWlzc2luZz8gQWx0ZXJuYXRpdmVseSwgaWYgeW91IGludGVuZGVkIHRvIGNvbm5lY3Qgd2l0aCB0aGVzZSBwYXJhbWV0ZXJzLCBwbGVhXFxcbnNlIHNldCB0aGUgaG9zdCB0byAnbG9jYWxob3N0JyBleHBsaWNpdGx5LmApO2xldCBvPXN1cGVyLmNvbm5lY3QodCksdT1uLnBpcGVsaW5lVExTJiZcbnRoaXMuc3NsLGM9bi5waXBlbGluZUNvbm5lY3Q9PT1cInBhc3N3b3JkXCI7aWYoIXUmJiFuLnBpcGVsaW5lQ29ubmVjdClyZXR1cm4gbztsZXQgaD10aGlzLlxuY29ubmVjdGlvbjtpZih1JiZoLm9uKFwiY29ubmVjdFwiLCgpPT5oLnN0cmVhbS5lbWl0KFwiZGF0YVwiLFwiU1wiKSksYyl7aC5yZW1vdmVBbGxMaXN0ZW5lcnMoXG5cImF1dGhlbnRpY2F0aW9uQ2xlYXJ0ZXh0UGFzc3dvcmRcIiksaC5yZW1vdmVBbGxMaXN0ZW5lcnMoXCJyZWFkeUZvclF1ZXJ5XCIpLGgub25jZShcblwicmVhZHlGb3JRdWVyeVwiLCgpPT5oLm9uKFwicmVhZHlGb3JRdWVyeVwiLHRoaXMuX2hhbmRsZVJlYWR5Rm9yUXVlcnkuYmluZCh0aGlzKSkpO1xubGV0IGw9dGhpcy5zc2w/XCJzc2xjb25uZWN0XCI6XCJjb25uZWN0XCI7aC5vbihsLCgpPT57dGhpcy5faGFuZGxlQXV0aENsZWFydGV4dFBhc3N3b3JkKCksXG50aGlzLl9oYW5kbGVSZWFkeUZvclF1ZXJ5KCl9KX1yZXR1cm4gb31hc3luYyBfaGFuZGxlQXV0aFNBU0xDb250aW51ZSh0KXtsZXQgbj10aGlzLlxuc2FzbFNlc3Npb24saT10aGlzLnBhc3N3b3JkLHM9dC5kYXRhO2lmKG4ubWVzc2FnZSE9PVwiU0FTTEluaXRpYWxSZXNwb25zZVwifHx0eXBlb2YgaSE9XG5cInN0cmluZ1wifHx0eXBlb2YgcyE9XCJzdHJpbmdcIil0aHJvdyBuZXcgRXJyb3IoXCJTQVNMOiBwcm90b2NvbCBlcnJvclwiKTtsZXQgbz1PYmplY3QuXG5mcm9tRW50cmllcyhzLnNwbGl0KFwiLFwiKS5tYXAoVT0+e2lmKCEvXi49Ly50ZXN0KFUpKXRocm93IG5ldyBFcnJvcihcIlNBU0w6IEludmFsaVxcXG5kIGF0dHJpYnV0ZSBwYWlyIGVudHJ5XCIpO2xldCBLPVVbMF0sbGU9VS5zdWJzdHJpbmcoMik7cmV0dXJuW0ssbGVdfSkpLHU9by5yLGM9by5cbnMsaD1vLmk7aWYoIXV8fCEvXlshLSstLX5dKyQvLnRlc3QodSkpdGhyb3cgbmV3IEVycm9yKFwiU0FTTDogU0NSQU0tU0VSVkVSLUZJUlNULVxcXG5NRVNTQUdFOiBub25jZSBtaXNzaW5nL3VucHJpbnRhYmxlXCIpO2lmKCFjfHwhL14oPzpbYS16QS1aMC05Ky9dezR9KSooPzpbYS16QS1aMC05Ky9dezJ9PT18W2EtekEtWjAtOSsvXXszfT0pPyQvLlxudGVzdChjKSl0aHJvdyBuZXcgRXJyb3IoXCJTQVNMOiBTQ1JBTS1TRVJWRVItRklSU1QtTUVTU0FHRTogc2FsdCBtaXNzaW5nL25vdCBiYXNlXFxcbjY0XCIpO2lmKCFofHwhL15bMS05XVswLTldKiQvLnRlc3QoaCkpdGhyb3cgbmV3IEVycm9yKFwiU0FTTDogU0NSQU0tU0VSVkVSLUZJUlNULU1cXFxuRVNTQUdFOiBtaXNzaW5nL2ludmFsaWQgaXRlcmF0aW9uIGNvdW50XCIpO2lmKCF1LnN0YXJ0c1dpdGgobi5jbGllbnROb25jZSkpdGhyb3cgbmV3IEVycm9yKFxuXCJTQVNMOiBTQ1JBTS1TRVJWRVItRklSU1QtTUVTU0FHRTogc2VydmVyIG5vbmNlIGRvZXMgbm90IHN0YXJ0IHdpdGggY2xpZW50IG5vbmNlXCIpO1xuaWYodS5sZW5ndGg9PT1uLmNsaWVudE5vbmNlLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJTQVNMOiBTQ1JBTS1TRVJWRVItRklSU1QtTUVTXFxcblNBR0U6IHNlcnZlciBub25jZSBpcyB0b28gc2hvcnRcIik7bGV0IGw9cGFyc2VJbnQoaCwxMCksZD15LmZyb20oYyxcImJhc2U2NFwiKSxiPW5ldyBUZXh0RW5jb2RlcixcbkM9Yi5lbmNvZGUoaSksQj1hd2FpdCBnLnN1YnRsZS5pbXBvcnRLZXkoXCJyYXdcIixDLHtuYW1lOlwiSE1BQ1wiLGhhc2g6e25hbWU6XCJTSEEtMjVcXFxuNlwifX0sITEsW1wic2lnblwiXSksVz1uZXcgVWludDhBcnJheShhd2FpdCBnLnN1YnRsZS5zaWduKFwiSE1BQ1wiLEIseS5jb25jYXQoW2QseS5mcm9tKFxuWzAsMCwwLDFdKV0pKSksWD1XO2Zvcih2YXIgZGU9MDtkZTxsLTE7ZGUrKylXPW5ldyBVaW50OEFycmF5KGF3YWl0IGcuc3VidGxlLnNpZ24oXG5cIkhNQUNcIixCLFcpKSxYPXkuZnJvbShYLm1hcCgoVSxLKT0+WFtLXV5XW0tdKSk7bGV0IEE9WCx3PWF3YWl0IGcuc3VidGxlLmltcG9ydEtleShcblwicmF3XCIsQSx7bmFtZTpcIkhNQUNcIixoYXNoOntuYW1lOlwiU0hBLTI1NlwifX0sITEsW1wic2lnblwiXSksUD1uZXcgVWludDhBcnJheShhd2FpdCBnLlxuc3VidGxlLnNpZ24oXCJITUFDXCIsdyxiLmVuY29kZShcIkNsaWVudCBLZXlcIikpKSxWPWF3YWl0IGcuc3VidGxlLmRpZ2VzdChcIlNIQS0yNTZcIixcblApLGs9XCJuPSoscj1cIituLmNsaWVudE5vbmNlLGo9XCJyPVwiK3UrXCIscz1cIitjK1wiLGk9XCIrbCxjZT1cImM9Yml3cyxyPVwiK3UsZWU9aytcIixcIitqK1xuXCIsXCIrY2UsUj1hd2FpdCBnLnN1YnRsZS5pbXBvcnRLZXkoXCJyYXdcIixWLHtuYW1lOlwiSE1BQ1wiLGhhc2g6e25hbWU6XCJTSEEtMjU2XCJ9fSwhMSxcbltcInNpZ25cIl0pO3ZhciBHPW5ldyBVaW50OEFycmF5KGF3YWl0IGcuc3VidGxlLnNpZ24oXCJITUFDXCIsUixiLmVuY29kZShlZSkpKSxoZT15LlxuZnJvbShQLm1hcCgoVSxLKT0+UFtLXV5HW0tdKSkseWU9aGUudG9TdHJpbmcoXCJiYXNlNjRcIik7bGV0IHhlPWF3YWl0IGcuc3VidGxlLmltcG9ydEtleShcblwicmF3XCIsQSx7bmFtZTpcIkhNQUNcIixoYXNoOntuYW1lOlwiU0hBLTI1NlwifX0sITEsW1wic2lnblwiXSksbWU9YXdhaXQgZy5zdWJ0bGUuc2lnbihcblwiSE1BQ1wiLHhlLGIuZW5jb2RlKFwiU2VydmVyIEtleVwiKSksc2U9YXdhaXQgZy5zdWJ0bGUuaW1wb3J0S2V5KFwicmF3XCIsbWUse25hbWU6XCJITVxcXG5BQ1wiLGhhc2g6e25hbWU6XCJTSEEtMjU2XCJ9fSwhMSxbXCJzaWduXCJdKTt2YXIgb2U9eS5mcm9tKGF3YWl0IGcuc3VidGxlLnNpZ24oXCJITUFDXCIsXG5zZSxiLmVuY29kZShlZSkpKTtuLm1lc3NhZ2U9XCJTQVNMUmVzcG9uc2VcIixuLnNlcnZlclNpZ25hdHVyZT1vZS50b1N0cmluZyhcImJhc2U2NFwiKSxcbm4ucmVzcG9uc2U9Y2UrXCIscD1cIit5ZSx0aGlzLmNvbm5lY3Rpb24uc2VuZFNDUkFNQ2xpZW50RmluYWxNZXNzYWdlKHRoaXMuc2FzbFNlc3Npb24uXG5yZXNwb25zZSl9fTthKEVuLFwiTmVvbkNsaWVudFwiKTt2YXIgdm49RW47ZnVuY3Rpb24gV2MocixlKXtpZihlKXJldHVybntjYWxsYmFjazplLFxucmVzdWx0OnZvaWQgMH07bGV0IHQsbixpPWEoZnVuY3Rpb24obyx1KXtvP3Qobyk6bih1KX0sXCJjYlwiKSxzPW5ldyByKGZ1bmN0aW9uKG8sdSl7XG5uPW8sdD11fSk7cmV0dXJue2NhbGxiYWNrOmkscmVzdWx0OnN9fWEoV2MsXCJwcm9taXNpZnlcIik7dmFyIF9uPWNsYXNzIF9uIGV4dGVuZHMgVHQuUG9vbHtjb25zdHJ1Y3Rvcigpe1xuc3VwZXIoLi4uYXJndW1lbnRzKTtfKHRoaXMsXCJDbGllbnRcIix2bik7Xyh0aGlzLFwiaGFzRmV0Y2hVbnN1cHBvcnRlZExpc3RlbmVyc1wiLCExKX1vbih0LG4pe1xucmV0dXJuIHQhPT1cImVycm9yXCImJih0aGlzLmhhc0ZldGNoVW5zdXBwb3J0ZWRMaXN0ZW5lcnM9ITApLHN1cGVyLm9uKHQsbil9cXVlcnkodCxuLGkpe1xuaWYoIV9lLnBvb2xRdWVyeVZpYUZldGNofHx0aGlzLmhhc0ZldGNoVW5zdXBwb3J0ZWRMaXN0ZW5lcnN8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpXG5yZXR1cm4gc3VwZXIucXVlcnkodCxuLGkpO3R5cGVvZiBuPT1cImZ1bmN0aW9uXCImJihpPW4sbj12b2lkIDApO2xldCBzPVdjKHRoaXMuUHJvbWlzZSxcbmkpO2k9cy5jYWxsYmFjazt0cnl7bGV0IG89bmV3IEpzLmRlZmF1bHQodGhpcy5vcHRpb25zKSx1PWVuY29kZVVSSUNvbXBvbmVudCxjPWVuY29kZVVSSSxcbmg9YHBvc3RncmVzcWw6Ly8ke3Uoby51c2VyKX06JHt1KG8ucGFzc3dvcmQpfUAke3Uoby5ob3N0KX0vJHtjKG8uZGF0YWJhc2UpfWAsbD10eXBlb2YgdD09XG5cInN0cmluZ1wiP3Q6dC50ZXh0LGQ9bj8/dC52YWx1ZXM/P1tdO1lzKGgse2Z1bGxSZXN1bHRzOiEwLGFycmF5TW9kZTp0LnJvd01vZGU9PT1cIlxcXG5hcnJheVwifSkobCxkLHt0eXBlczp0LnR5cGVzPz90aGlzLm9wdGlvbnM/LnR5cGVzfSkudGhlbihDPT5pKHZvaWQgMCxDKSkuY2F0Y2goQz0+aShcbkMpKX1jYXRjaChvKXtpKG8pfXJldHVybiBzLnJlc3VsdH19O2EoX24sXCJOZW9uUG9vbFwiKTt2YXIgWnM9X247dmFyIGV4cG9ydF9DbGllbnRCYXNlPVFlLkNsaWVudEJhc2U7dmFyIGV4cG9ydF9Db25uZWN0aW9uPVFlLkNvbm5lY3Rpb247dmFyIGV4cG9ydF9EYXRhYmFzZUVycm9yPVFlLkRhdGFiYXNlRXJyb3I7XG52YXIgZXhwb3J0X1F1ZXJ5PVFlLlF1ZXJ5O3ZhciBleHBvcnRfZGVmYXVsdHM9UWUuZGVmYXVsdHM7dmFyIGV4cG9ydF90eXBlcz1RZS50eXBlcztcbmV4cG9ydHt2biBhcyBDbGllbnQsZXhwb3J0X0NsaWVudEJhc2UgYXMgQ2xpZW50QmFzZSxleHBvcnRfQ29ubmVjdGlvbiBhcyBDb25uZWN0aW9uLFxuZXhwb3J0X0RhdGFiYXNlRXJyb3IgYXMgRGF0YWJhc2VFcnJvcixBZSBhcyBOZW9uRGJFcnJvcixacyBhcyBQb29sLGV4cG9ydF9RdWVyeSBhcyBRdWVyeSxcbmV4cG9ydF9kZWZhdWx0cyBhcyBkZWZhdWx0cyxZcyBhcyBuZW9uLF9lIGFzIG5lb25Db25maWcsZXhwb3J0X3R5cGVzIGFzIHR5cGVzfTtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbmllZWU3NTQvaW5kZXguanM6XG4gICgqISBpZWVlNzU0LiBCU0QtMy1DbGF1c2UgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICopXG5cbmJ1ZmZlci9pbmRleC5qczpcbiAgKCohXG4gICAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICAgKlxuICAgKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICAgKiBAbGljZW5zZSAgTUlUXG4gICAqKVxuKi9cbiIsCiAgICAiaW1wb3J0IHsgbmVvbiB9IGZyb20gJ0BuZW9uZGF0YWJhc2Uvc2VydmVybGVzcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvY2FsaG9zdF9xdWVyeSh0ZXh0OiBzdHJpbmcsIHBhcmFtczogYW55W10pOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCBsb2NhbF9hZGRyZXNzID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMCc7XG4gIHJldHVybiAoXG4gICAgYXdhaXQgZmV0Y2gobG9jYWxfYWRkcmVzcyArICcvZGF0YWJhc2UnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGV4dCwgcGFyYW1zIH0pLFxuICAgIH0pXG4gICkuanNvbigpO1xufVxuXG5leHBvcnQgY29uc3QgRGF0YWJhc2VEcml2ZXIgPSB7XG4gIGdldExvY2FsaG9zdCgpIHtcbiAgICByZXR1cm4gbG9jYWxob3N0X3F1ZXJ5O1xuICB9LFxuICBnZXROZW9uKGNvbm5lY3Rpb25fc3RyaW5nOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmVvbihjb25uZWN0aW9uX3N0cmluZyk7XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgRGF0YWJhc2VEcml2ZXJfQ29weXJpZ2h0X05vdGljZXMgPSB7XG4gICdAbmVvbmRhdGFiYXNlL3NlcnZlcmxlc3MnOiBgXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9pZWVlNzU0XG5cbiAgICBDb3B5cmlnaHQgMjAwOCBGYWlyIE9ha3MgTGFicywgSW5jLlxuXG4gICAgUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IFxuICAgIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuXG4gICAgMS4gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCBcbiAgICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuXG4gICAgMi4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICAgIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gXG4gICAgYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cbiAgICAzLiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBjb3B5cmlnaHQgaG9sZGVyIG5vciB0aGUgbmFtZXMgb2YgaXRzIFxuICAgIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgXG4gICAgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG5cbiAgICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBcbiAgICBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIFxuICAgIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIFxuICAgIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgXG4gICAgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBcbiAgICBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBcbiAgICBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgXG4gICAgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gXG4gICAgQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgXG4gICAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgXG4gICAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlclxuXG4gICAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgICBDb3B5cmlnaHQgKGMpIEZlcm9zcyBBYm91a2hhZGlqZWgsIGFuZCBvdGhlciBjb250cmlidXRvcnMuXG5cbiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gICAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gXG4gICAgZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgXG4gICAgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIFxuICAgIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIFxuICAgIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBcbiAgICBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgXG4gICAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxuICAgIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBcbiAgICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIFxuICAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIFxuICAgIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAgICBJTiBUSEUgU09GVFdBUkUuXG5cbiAgICBQYXJ0cyBvZiB0aGlzIHNvZnR3YXJlIGFyZSBiYXNlZCBvbiBub2RlLmpzOlxuXG4gICAgQ29weXJpZ2h0IE5vZGUuanMgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICAgIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIFxuICAgIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIFxuICAgIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBcbiAgICBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBcbiAgICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gXG4gICAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIFxuICAgIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBcbiAgICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgXG4gICAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBcbiAgICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBcbiAgICBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gICAgSU4gVEhFIFNPRlRXQVJFLlxuXG4gICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iL21haW4vTElDRU5TRSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9uZGF0YWJhc2Uvc2VydmVybGVzc1xuXG4gICAgTUlUIExpY2Vuc2VcblxuICAgIENvcHlyaWdodCAoYykgMjAyMiAtIDIwMjQgTmVvbiBJbmMuXG5cbiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gICAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gXG4gICAgZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgXG4gICAgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIFxuICAgIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIFxuICAgIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBcbiAgICBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgXG4gICAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxuICAgIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBcbiAgICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIFxuICAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIFxuICAgIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAgICBJTiBUSEUgU09GVFdBUkUuXG5cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGAsXG59O1xuIgogIF0sCiAgIm1hcHBpbmdzIjogIjtBQWtjeUksU0FBUyxFQUFFLENBQUMsR0FBRTtBQUFDLE1BQUksSUFBRSxZQUFXLElBQUUsWUFBVyxJQUFFLFlBQVcsSUFBRSxZQUFXLElBQUUsWUFDbE4sSUFBRSxZQUFXLElBQUUsV0FBVSxJQUFFLFlBQVcsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFO0FBQUEsSUFBQztBQUFBLElBQVc7QUFBQSxJQUFXO0FBQUEsSUFDdkU7QUFBQSxJQUFXO0FBQUEsSUFBVTtBQUFBLElBQVc7QUFBQSxJQUFXO0FBQUEsSUFBVztBQUFBLElBQVc7QUFBQSxJQUFVO0FBQUEsSUFDM0U7QUFBQSxJQUFXO0FBQUEsSUFBVztBQUFBLElBQVc7QUFBQSxJQUFXO0FBQUEsSUFBVztBQUFBLElBQVc7QUFBQSxJQUFXO0FBQUEsSUFDN0U7QUFBQSxJQUFVO0FBQUEsSUFBVTtBQUFBLElBQVc7QUFBQSxJQUFXO0FBQUEsSUFBVztBQUFBLElBQVc7QUFBQSxJQUFXO0FBQUEsSUFDM0U7QUFBQSxJQUFXO0FBQUEsSUFBVztBQUFBLElBQVc7QUFBQSxJQUFVO0FBQUEsSUFBVTtBQUFBLElBQVU7QUFBQSxJQUFVO0FBQUEsSUFDekU7QUFBQSxJQUFXO0FBQUEsSUFBVztBQUFBLElBQVc7QUFBQSxJQUFXO0FBQUEsSUFBVztBQUFBLElBQVc7QUFBQSxJQUFXO0FBQUEsSUFDN0U7QUFBQSxJQUFXO0FBQUEsSUFBVztBQUFBLElBQVc7QUFBQSxJQUFXO0FBQUEsSUFBVTtBQUFBLElBQVU7QUFBQSxJQUFVO0FBQUEsSUFDMUU7QUFBQSxJQUFVO0FBQUEsSUFBVTtBQUFBLElBQVc7QUFBQSxJQUFXO0FBQUEsSUFBVztBQUFBLElBQVc7QUFBQSxJQUFXO0FBQUEsSUFDM0U7QUFBQSxJQUFXO0FBQUEsSUFBVztBQUFBLElBQVc7QUFBQSxJQUFXO0FBQUEsRUFBVSxHQUFFLElBQUUsRUFBRSxDQUFDLEdBQUUsTUFBSSxNQUFJLElBQUUsS0FBRyxLQUFHLEdBQy9FLE1BQU0sR0FBRSxJQUFFLElBQUksWUFBWSxFQUFFLEdBQUUsSUFBRSxJQUFJLFdBQVcsRUFBRSxHQUFFLElBQUUsRUFBRSxNQUFJO0FBQUMsYUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLElBQUUsSUFBRyxLQUNqRixLQUFHO0FBQUUsUUFBRSxLQUFHLEVBQUUsTUFBSSxLQUFHLEVBQUUsSUFBRSxNQUFJLEtBQUcsRUFBRSxJQUFFLE1BQUksSUFBRSxFQUFFLElBQUU7QUFBRyxhQUFRLElBQUUsR0FBRyxJQUFFLElBQUcsS0FBSTtBQUFDLFVBQUksSUFBRSxFQUFFLEVBQUUsSUFDaEYsS0FBSSxDQUFDLElBQUUsRUFBRSxFQUFFLElBQUUsS0FBSSxFQUFFLElBQUUsRUFBRSxJQUFFLFFBQU0sR0FBRSxLQUFHLEVBQUUsRUFBRSxJQUFFLElBQUcsRUFBRSxJQUFFLEVBQUUsRUFBRSxJQUFFLElBQUcsRUFBRSxJQUFFLEVBQUUsSUFBRSxPQUFLO0FBQUcsUUFBRSxLQUFHLEVBQUUsSUFDakYsTUFBSSxJQUFFLEVBQUUsSUFBRSxLQUFHLEtBQUc7QUFBQSxJQUFDO0FBQUMsUUFBSSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsR0FBRSxLQUFHLEdBQUUsS0FBRztBQUFFLGFBQVEsSUFBRSxFQUFFLElBQUUsSUFBRyxLQUFJO0FBQUMsVUFBSSxJQUFFLEVBQ3BGLEdBQUUsQ0FBQyxJQUFFLEVBQUUsR0FBRSxFQUFFLElBQUUsRUFBRSxHQUFFLEVBQUUsR0FBRSxLQUFHLElBQUUsS0FBRyxJQUFFLElBQUcsS0FBRyxLQUFHLElBQUUsS0FBRyxFQUFFLEtBQUcsRUFBRSxLQUFHLEdBQUUsS0FBRyxFQUFFLEdBQUUsQ0FBQyxJQUFFLEVBQUUsR0FBRSxFQUFFLElBQUUsRUFBRSxHQUFFLEVBQUUsR0FDakYsS0FBRyxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsR0FBRSxLQUFHLEtBQUcsS0FBRztBQUFFLFdBQUcsSUFBRyxLQUFHLEdBQUUsSUFBRSxHQUFFLElBQUUsSUFBRSxLQUFHLEdBQUUsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxLQUFHLEtBQUc7QUFBQSxJQUFDO0FBQUMsUUFBRSxJQUFFLElBQUUsR0FDOUUsSUFBRSxJQUFFLElBQUUsR0FBRSxJQUFFLElBQUUsSUFBRSxHQUFFLElBQUUsSUFBRSxJQUFFLEdBQUUsSUFBRSxJQUFFLElBQUUsR0FBRSxJQUFFLElBQUUsSUFBRSxHQUFFLElBQUUsSUFBRSxLQUFHLEdBQUUsSUFBRSxJQUFFLEtBQUcsR0FBRSxJQUFFO0FBQUEsS0FBRyxTQUFTLEdBQUUsSUFBRSxFQUFFLE9BQUc7QUFDakYsV0FBTyxLQUFHLGFBQVcsSUFBRSxJQUFJLFlBQVksRUFBRSxPQUFPLENBQUM7QUFBRyxhQUFRLElBQUUsRUFBRSxJQUFFLEVBQUUsUUFBTztBQUFJLFFBQUUsT0FDakYsRUFBRSxJQUFHLE1BQUksTUFBSSxFQUFFO0FBQUUsU0FBRyxFQUFFO0FBQUEsS0FBUSxLQUFLLEdBQUUsS0FBRyxFQUFFLE1BQUk7QUFBQyxRQUFHLEVBQUUsT0FBSyxLQUFJLEtBQUcsTUFBSSxFQUFFLEdBQUUsSUFBRSxJQUFFLElBQUc7QUFDL0UsWUFBSyxJQUFFO0FBQUksVUFBRSxPQUFLO0FBQUUsUUFBRTtBQUFBLElBQUM7QUFBQyxVQUFLLElBQUU7QUFBSSxRQUFFLE9BQUs7QUFBRSxRQUFJLElBQUUsSUFBRTtBQUFFLE1BQUUsT0FBSyxJQUFFLGdCQUFjLEtBQzdFLEVBQUUsT0FBSyxJQUFFLGFBQVcsS0FBSSxFQUFFLE9BQUssTUFBSSxJQUFHLEVBQUUsT0FBSyxNQUFJLEtBQUcsS0FBSSxFQUFFLE9BQUssTUFBSSxJQUFFLEtBQUksRUFBRSxPQUMzRSxJQUFFLEtBQUksRUFBRTtBQUFFLFFBQUksSUFBRSxJQUFJLFdBQVcsRUFBRTtBQUFFLFdBQU8sRUFBRSxLQUFHLE1BQUksSUFBRyxFQUFFLEtBQUcsTUFBSSxLQUFHLEtBQUksRUFBRSxLQUFHLE1BQUksSUFDL0UsS0FBSSxFQUFFLEtBQUcsSUFBRSxLQUFJLEVBQUUsS0FBRyxNQUFJLElBQUcsRUFBRSxLQUFHLE1BQUksS0FBRyxLQUFJLEVBQUUsS0FBRyxNQUFJLElBQUUsS0FBSSxFQUFFLEtBQUcsSUFBRSxLQUFJLEVBQUUsS0FBRyxNQUFJLElBQzlFLEVBQUUsS0FBRyxNQUFJLEtBQUcsS0FBSSxFQUFFLE1BQUksTUFBSSxJQUFFLEtBQUksRUFBRSxNQUFJLElBQUUsS0FBSSxFQUFFLE1BQUksTUFBSSxJQUFHLEVBQUUsTUFBSSxNQUFJLEtBQUcsS0FBSSxFQUFFLE1BQzVFLE1BQUksSUFBRSxLQUFJLEVBQUUsTUFBSSxJQUFFLEtBQUksRUFBRSxNQUFJLE1BQUksSUFBRyxFQUFFLE1BQUksTUFBSSxLQUFHLEtBQUksRUFBRSxNQUFJLE1BQUksSUFBRSxLQUFJLEVBQUUsTUFBSSxJQUFFLEtBQzVFLEVBQUUsTUFBSSxNQUFJLElBQUcsRUFBRSxNQUFJLE1BQUksS0FBRyxLQUFJLEVBQUUsTUFBSSxNQUFJLElBQUUsS0FBSSxFQUFFLE1BQUksSUFBRSxLQUFJLEVBQUUsTUFBSSxNQUFJLElB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LEtBQy9FLEdBQUcsS0FBRyxJQUFFLE1BQUksSUFBSSxLQUFHLE1BQUksTUFBSSxLQUFHLEVBQUUsSUFBRSxNQUFJLEtBQUcsRUFBRSxJQUFFLElBQUcsRUFBRSxLQUFLLEdBQUcsS0FBRyxNQUFJLEdBQUcsS0FBRyxJQUFFLE1BQUksR0FBRyxLQUNoRixJQUFFLE1BQUksR0FBRyxJQUFHLEVBQUUsS0FBSyxFQUFFO0FBQUE7QUFBRSxJQUFFLElBQUcsZUFBZTtBQUFBLENBQUU7QUFBRSxJQUFJLEtBQUcsRUFBRSxRQUFJO0FBQUMsSUFBRTtBQUFFLEtBQUcsZUFBYSxDQUFDLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUksR0FBRSxHQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsR0FBRSxLQUFHLEtBQUcsS0FBRyxHQUFFLElBQUUsS0FDNUgsR0FBRSxJQUFFLElBQUcsSUFBRSxJQUFFLElBQUUsSUFBRSxHQUFFLElBQUUsSUFBRSxLQUFHLEdBQUUsSUFBRSxFQUFFLElBQUU7QUFBRyxTQUFJLEtBQUcsR0FBRSxJQUFFLEtBQUcsTUFBSSxLQUFHLEdBQUUsT0FBSyxHQUFFLEtBQUcsRUFBRSxJQUFFLEdBQUUsSUFBRSxJQUFFLE1BQzlFLEVBQUUsSUFBRSxJQUFHLEtBQUcsR0FBRSxLQUFHO0FBQUE7QUFBRyxTQUFJLElBQUUsS0FBRyxNQUFJLEtBQUcsR0FBRSxPQUFLLEdBQUUsS0FBRyxFQUFFLElBQUUsR0FBRSxJQUFFLElBQUUsTUFBSSxFQUFFLElBQUUsSUFBRyxLQUFHLEdBQUUsS0FBRztBQUFBO0FBQUcsUUFBRyxNQUNqRjtBQUFFLFVBQUUsSUFBRTtBQUFBLFNBQU07QUFBQyxVQUFHLE1BQUk7QUFBRSxlQUFPLElBQUUsT0FBSyxJQUFFLEtBQUcsTUFBSSxJQUFFO0FBQUcsVUFBRSxJQUFFLEtBQUssSUFBSSxHQUFFLENBQUMsR0FBRSxJQUFFLElBQUU7QUFBQTtBQUFFLFlBQU8sSUFDakYsS0FBRyxLQUFHLElBQUUsS0FBSyxJQUFJLEdBQUUsSUFBRSxDQUFDO0FBQUE7QUFBRyxLQUFHLGdCQUFjLENBQUMsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFJLEdBQUUsR0FBRSxHQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsR0FBRSxLQUFHLEtBQy9FLEtBQUcsR0FBRSxJQUFFLEtBQUcsR0FBRSxJQUFFLE1BQUksS0FBRyxLQUFLLElBQUksR0FBRSxHQUFHLElBQUUsS0FBSyxJQUFJLEdBQUUsR0FBRyxJQUFFLEdBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxHQUFFLElBQUUsSUFBRSxJQUFFLElBQUcsSUFBRSxJQUFFLEtBQzlFLE1BQUksS0FBRyxJQUFFLElBQUUsSUFBRSxJQUFFO0FBQUUsU0FBSSxJQUFFLEtBQUssSUFBSSxDQUFDLEdBQUUsTUFBTSxDQUFDLEtBQUcsTUFBSSxJQUFFLEtBQUcsSUFBRSxNQUFNLENBQUMsSUFBRSxJQUFFLEdBQUUsSUFBRSxNQUFJLElBQUUsS0FDN0UsTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFFLEtBQUssR0FBRyxHQUFFLEtBQUcsSUFBRSxLQUFLLElBQUksSUFBRyxDQUFDLEtBQUcsTUFBSSxLQUFJLEtBQUcsSUFBRyxJQUFFLEtBQUcsSUFBRSxLQUFHLElBQUUsSUFBRSxLQUM3RSxJQUFFLEtBQUssSUFBSSxHQUFFLElBQUUsQ0FBQyxHQUFFLElBQUUsS0FBRyxNQUFJLEtBQUksS0FBRyxJQUFHLElBQUUsS0FBRyxLQUFHLElBQUUsR0FBRSxJQUFFLEtBQUcsSUFBRSxLQUFHLEtBQUcsS0FBRyxJQUFFLElBQUUsS0FBRyxLQUFLLElBQzdFLEdBQUUsQ0FBQyxHQUFFLElBQUUsSUFBRSxNQUFJLElBQUUsSUFBRSxLQUFLLElBQUksR0FBRSxJQUFFLENBQUMsSUFBRSxLQUFLLElBQUksR0FBRSxDQUFDLEdBQUUsSUFBRSxJQUFJLEtBQUcsR0FBRSxFQUFFLElBQUUsS0FBRyxJQUFFLEtBQUksS0FBRyxHQUFFLEtBQUcsS0FDL0UsS0FBRztBQUFBO0FBQUcsU0FBSSxJQUFFLEtBQUcsSUFBRSxHQUFFLEtBQUcsRUFBRSxJ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QUUsaUJBQU87QUFBQSxNQUFDO0FBQUMsV0FBTTtBQUFBO0FBQUcsSUFBRSxJQUFHLGNBQWM7QUFBRSxJQUFFLFVBQy9FLFdBQVMsVUFBVSxDQUFDLEdBQUUsR0FBRSxHQUFFO0FBQUMsV0FBTyxLQUFLLFFBQVEsR0FBRSxHQUFFLENBQUMsTUFBSTtBQUFBLEtBQUksVUFBVTtBQUFFLElBQUUsVUFDMUUsVUFBUSxVQUFVLENBQUMsR0FBRSxHQUFFLEdBQUU7QUFBQyxXQUFPLEdBQUcsTUFBSyxHQUFFLEdBQUUsR0FBRSxJQUFFO0FBQUEsS0FBRyxTQUFTO0FBQUUsSUFBRSxVQUFVLGNBQzNFLFVBQVUsQ0FBQyxHQUFFLEdBQUUsR0FBRTtBQUFDLFdBQU8sR0FBRyxNQUFLLEdBQUUsR0FBRSxHQUFFLEtBQUU7QUFBQSxLQUFHLGFBQWE7QUFBRSxXQUFTLEVBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQy9FLFFBQUUsT0FBTyxDQUFDLEtBQUc7QUFBRSxRQUFJLElBQUUsRUFBRSxTQUFPO0FBQUUsU0FBRyxJQUFFLE9BQU8sQ0FBQyxHQUFFLElBQUUsTUFBSSxJQUFFLE1BQUksSUFBRTtBQUFFLFFBQUksSUFBRSxFQUFFO0FBQU8sUUFDOUUsSUFBRSxNQUFJLElBQUUsSUFBRTtBQUFHLFFBQUk7QUFBRSxTQUFJLElBQUUsRUFBRSxJQUFFLEtBQUksR0FBRTtBQUFDLFVBQUksSUFBRSxTQUFTLEVBQUUsT0FBTyxJQUFFLEdBQUUsQ0FBQyxHQUFFLEVBQUU7QUFBRSxVQUFHLEdBQUcsQ0FBQztBQUM5RSxlQUFPO0FBQUUsUUFBRSxJQUFFLEtBQUc7QUFBQSxJQUFDO0FBQUMsV0FBTztBQUFBO0FBQUUsSUFBRSxJQUFHLFVBQVU7QUFBRSxXQUFTLEVBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsV0FBTyxHQUFHLEdBQUcsR0FDOUUsRUFBRSxTQUFPLENBQUMsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBO0FBQUUsSUFBRSxJQUFHLFdBQVc7QUFBRSxXQUFTLEVBQUUsQ0FBQyxHQUFF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TUFBSSxJQUFFLElBQUcsS0FBSyxJQUFFLE1BQUksSUFBRSxLQUFHLEtBQUcsSUFBRTtBQUFJLFdBQU8sSUFBRTtBQUFBLEtBQUcsWUFDcEU7QUFBRSxJQUFFLFVBQVUsYUFBVyxVQUFVLENBQUMsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUcsS0FBRyxHQUFFLElBQUUsTUFBSSxJQUFHLEdBQUU7QUFBQyxVQUFJLElBQUUsS0FBSyxJQUM5RSxHQUFFLElBQUUsSUFBRSxDQUFDO0FBQUUsUUFBRSxNQUFLLEdBQUUsR0FBRSxHQUFFLElBQUUsSUFBRyxDQUFDO0FBQUEsSUFBQztBQUFDLFFBQUksSUFBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUU7QUFBRSxTQUFJLEtBQUssSUFBRSxLQUFHLElBQUUsTUFBTSxLQUFHLE1BQUksS0FDN0U7QUFBTSxVQUFFLEtBQUcsTUFBSSxLQUFHLEtBQUssSUFBRSxJQUFFLE9BQUssTUFBSSxJQUFFLElBQUcsS0FBSyxJQUFFLE1BQUksSUFBRSxLQUFHLEtBQUcsSUFBRTtBQUFJLFdBQU8sSUFBRTtBQUFBLEtBQUcsWUFDcEU7QUFBRSxJQUFFLFVBQVUsWUFBVSxVQUFVLENBQUMsR0FBRSxHQUFFLEdBQUU7QUFBQyxXQUFPLEtBQUcsR0FBRSxJQUFFLE1BQUksR0FBRSxLQUFHLEVBQUUsTUFDN0UsR0FBRSxHQUFFLEdBQUUsS0FBSSxJQUFJLEdBQUUsSUFBRSxNQUFJLElBQUUsTUFBSSxJQUFFLElBQUcsS0FBSyxLQUFHLElBQUUsS0FBSSxJQUFFO0FBQUEsS0FBRyxXQUFXO0FBQUUsSUFBRSxVQUFVLGVBQzdFLFVBQVUsQ0FBQyxHQUFFLEdBQUUsR0FBRTtBQUFDLFdBQU8sS0FBRyxHQUFFLElBQUUsTUFBSSxHQUFFLEtBQUcsRUFBRSxNQUFLLEdBQUUsR0FBRSxHQUFFLE9BQU0sTUFBTSxHQUFFLEtBQUssS0FBRyxJQUFFLEtBQzlFLEtBQUssSUFBRSxLQUFHLE1BQUksR0FBRSxJQUFFO0FBQUEsS0FBRyxjQUFjO0FBQUUsSUFBRSxVQUFVLGVBQWEsVUFB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QUc7QUFBRSxZQUFFLElBQUUsSUFDL0UsS0FBRyxFQUFFLE9BQU8sSUFBRSxFQUFFLEdBQUUsT0FBSyxHQUFFLEVBQUUsSUFBRSxJQUFFLEtBQUcsRUFBRSxPQUFPLElBQUUsRUFBRSxHQUFFLE9BQUs7QUFBRSxhQUFPLEVBQUUsS0FBSyxFQUFFO0FBQUE7QUFBQSxXQUFTLFNBQVMsQ0FBQyxHQUFFLEdBQUU7QUFDL0YsVUFBSSxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUU7QUFBRyxZQUFJLElBQUUsS0FBRyxJQUFFLEtBQUcsRUFBRSxLQUFHLFlBQVUsR0FBRSxLQUFHLEtBQUcsSUFBRSxNQUFJLE1BQUksSUFDL0UsR0FBRSxNQUFJLElBQUUsS0FBRyxJQUFFLEtBQUcsRUFBRSxLQUFHLFlBQVUsR0FBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLE1BQUksSUFBRSxHQUFFLE1BQUksSUFBRSxLQUFHLElBQUUsS0FBRyxFQUFFLEtBQUcsWUFDekUsR0FBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLE1BQUksSUFBRSxHQUFFLE1BQUksSUFBRSxLQUFHLElBQUUsS0FBRyxFQUFFLEtBQUcsYUFBVyxHQUFFLEtBQUcsS0FBRyxLQUFHLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxJQUNoRixLQUFHLElBQUUsS0FBRyxFQUFFLEtBQUcsWUFBVSxHQUFFLEtBQUcsS0FBRyxJQUFFLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxJQUFFLEtBQUcsSUFBRSxLQUFHLEVBQUUsS0FBRyxhQUFXLEdBQUUsS0FBRyxLQUNoRixLQUFHLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxJQUFFLEtBQUcsSUFBRSxLQUFHLEVBQUUsS0FBRyxhQUFXLEdBQUUsS0FBRyxLQUFHLEtBQUcsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUFJLElBQUUsS0FBRyxJQUFFLEtBQy9FLEVBQUUsS0FBRyxXQUFTLEdBQUUsS0FBRyxLQUFHLEtBQUcsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUFJLElBQUUsS0FBRyxJQUFFLEtBQUcsRUFBRSxLQUFHLGFBQVcsR0FBRSxLQUFHLEtBQUcsSUFBRSxNQUM3RSxNQUFJLElBQUUsR0FBRSxNQUFJLElBQUUsS0FBRyxJQUFFLEtBQUcsRUFBRSxLQUFHLGFBQVcsR0FBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLE1BQUksSUFBRSxHQUFFLE1BQUksSUFBRSxLQUFHLElBQUUsS0FBRyxFQUFFLE1BQzdFLFFBQU0sR0FBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLE1BQUksSUFBRSxHQUFFLE1BQUksSUFBRSxLQUFHLElBQUUsS0FBRyxFQUFFLE1BQUksYUFBVyxHQUFFLEtBQUcsS0FBRyxLQUFHLE1BQUksTUFBSSxJQUMvRSxHQUFFLE1BQUksSUFBRSxLQUFHLElBQUUsS0FBRyxFQUFFLE1BQUksYUFBVyxHQUFFLEtBQUcsS0FBRyxJQUFFLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxJQUFFLEtBQUcsSUFBRSxLQUFHLEVBQUUsTUFBSSxXQUMzRSxHQUFFLEtBQUcsS0FBRyxLQUFHLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxJQUFFLEtBQUcsSUFBRSxLQUFHLEVBQUUsTUFBSSxhQUFXLEdBQUUsS0FBRyxLQUFHLEtBQUcsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUM1RSxJQUFFLEtBQUcsSUFBRSxLQUFHLEVBQUUsTUFBSSxhQUFXLEdBQUUsS0FBRyxLQUFHLEtBQUcsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUFJLElBQUUsSUFBRSxLQUFHLEtBQUcsRUFBRSxLQUFHLFlBQ3RFLEdBQUUsS0FBRyxLQUFHLElBQUUsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUFJLElBQUUsSUFBRSxLQUFHLEtBQUcsRUFBRSxLQUFHLGFBQVcsR0FBRSxLQUFHLEtBQUcsSUFBRSxNQUFJLE1BQUksSUFBRSxHQUFFLE1BQUksSUFDOUUsSUFBRSxLQUFHLEtBQUcsRUFBRSxNQUFJLFlBQVUsR0FBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLE1BQUksSUFBRSxHQUFFLE1BQUksSUFBRSxJQUFFLEtBQUcsS0FBRyxFQUFFLEtBQUcsWUFBVSxHQUFFLEtBQzdFLEtBQUcsS0FBRyxNQUFJLE1BQUksSUFBRSxHQUFFLE1BQUksSUFBRSxJQUFFLEtBQUcsS0FBRyxFQUFFLEtBQUcsWUFBVSxHQUFFLEtBQUcsS0FBRyxJQUFFLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxJQUFFLElBQUUsS0FDN0UsS0FBRyxFQUFFLE1BQUksV0FBUyxHQUFFLEtBQUcsS0FBRyxJQUFFLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxJQUFFLElBQUUsS0FBRyxLQUFHLEVBQUUsTUFBSSxZQUFVLEdBQUUsS0FBRyxLQUFHLEtBQy9FLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxJQUFFLElBQUUsS0FBRyxLQUFHLEVBQUUsS0FBRyxZQUFVLEdBQUUsS0FBRyxLQUFHLEtBQUcsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUFJLElBQUUsSUFBRSxLQUFHLEtBQUcsRUFBRSxLQUNoRixZQUFVLEdBQUUsS0FBRyxLQUFHLElBQUUsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUFJLElBQUUsSUFBRSxLQUFHLEtBQUcsRUFBRSxNQUFJLGFBQVcsR0FBRSxLQUFHLEtBQUcsSUFBRSxNQUFJLE1BQzdFLElBQUUsR0FBRSxNQUFJLElBQUUsSUFBRSxLQUFHLEtBQUcsRUFBRSxLQUFHLFlBQVUsR0FBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLE1BQUksSUFBRSxHQUFFLE1BQUksSUFBRSxJQUFFLEtBQUcsS0FBRyxFQUFFLEtBQUcsYUFDM0UsR0FBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLE1BQUksSUFBRSxHQUFFLE1BQUksSUFBRSxJQUFFLEtBQUcsS0FBRyxFQUFFLE1BQUksYUFBVyxHQUFFLEtBQUcsS0FBRyxJQUFFLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxJQUNoRixJQUFFLEtBQUcsS0FBRyxFQUFFLEtBQUcsV0FBUyxHQUFFLEtBQUcsS0FBRyxJQUFFLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxJQUFFLElBQUUsS0FBRyxLQUFHLEVBQUUsS0FBRyxhQUFXLEdBQUUsS0FBRyxLQUMvRSxLQUFHLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxJQUFFLElBQUUsS0FBRyxLQUFHLEVBQUUsTUFBSSxhQUFXLEdBQUUsS0FBRyxLQUFHLEtBQUcsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUFJLElBQUUsSUFBRSxLQUM3RSxFQUFFLEtBQUcsU0FBTyxHQUFFLEtBQUcsS0FBRyxJQUFFLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxJQUFFLElBQUUsS0FBRyxFQUFFLEtBQUcsYUFBVyxHQUFFLEtBQUcsS0FBRyxLQUFHLE1BQUksTUFDNUUsSUFBRSxHQUFFLE1BQUksSUFBRSxJQUFFLEtBQUcsRUFBRSxNQUFJLGFBQVcsR0FBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLE1BQUksSUFBRSxHQUFFLE1BQUksSUFBRSxJQUFFLEtBQUcsRUFBRSxNQUFJLFdBQ3hFLEdBQUUsS0FBRyxLQUFHLEtBQUcsTUFBSSxLQUFHLElBQUUsR0FBRSxNQUFJLElBQUUsSUFBRSxLQUFHLEVBQUUsS0FBRyxhQUFXLEdBQUUsS0FBRyxLQUFHLElBQUUsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUFJLElBQUUsSUFBRSxLQUMvRSxFQUFFLEtBQUcsYUFBVyxHQUFFLEtBQUcsS0FBRyxLQUFHLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxJQUFFLElBQUUsS0FBRyxFQUFFLEtBQUcsWUFBVSxHQUFFLEtBQUcsS0FBRyxLQUFHLE1BQzVFLE1BQUksSUFBRSxHQUFFLE1BQUksSUFBRSxJQUFFLEtBQUcsRUFBRSxNQUFJLGFBQVcsR0FBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLEtBQUcsSUFBRSxHQUFFLE1BQUksSUFBRSxJQUFFLEtBQUcsRUFBRSxNQUFJLFlBQzNFLEdBQUUsS0FBRyxLQUFHLElBQUUsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUFJLElBQUUsSUFBRSxLQUFHLEVBQUUsS0FBRyxZQUFVLEdBQUUsS0FBRyxLQUFHLEtBQUcsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUFJLElBQUUsSUFBRSxLQUMvRSxFQUFFLEtBQUcsWUFBVSxHQUFFLEtBQUcsS0FBRyxLQUFHLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxJQUFFLElBQUUsS0FBRyxFQUFFLEtBQUcsV0FBUyxHQUFFLEtBQUcsS0FBRyxLQUFHLE1BQUksS0FDOUUsSUFBRSxHQUFFLE1BQUksSUFBRSxJQUFFLEtBQUcsRUFBRSxLQUFHLFlBQVUsR0FBRSxLQUFHLEtBQUcsSUFBRSxNQUFJLE1BQUksSUFBRSxHQUFFLE1BQUksSUFBRSxJQUFFLEtBQUcsRUFBRSxNQUFJLFlBQVUsR0FDL0UsS0FBRyxLQUFHLEtBQUcsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUFJLElBQUUsSUFBRSxLQUFHLEVBQUUsTUFBSSxZQUFVLEdBQUUsS0FBRyxLQUFHLEtBQUcsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUFJLElBQUUsSUFBRSxLQUMvRSxFQUFFLEtBQUcsWUFBVSxHQUFFLEtBQUcsS0FBRyxLQUFHLE1BQUksS0FBRyxJQUFFLEdBQUUsTUFBSSxLQUFHLEtBQUcsTUFBSSxFQUFFLEtBQUcsWUFBVSxHQUFFLEtBQUcsS0FBRyxJQUFFLE1BQzVFLE1BQUksSUFBRSxHQUFFLE1BQUksS0FBRyxLQUFHLE1BQUksRUFBRSxLQUFHLGFBQVcsR0FBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLE1BQUksSUFBRSxHQUFFLE1BQUksS0FBRyxLQUFHLE1BQUksRUFBRSxNQUM3RSxhQUFXLEdBQUUsS0FBRyxLQUFHLEtBQUcsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUFJLEtBQUcsS0FBRyxNQUFJLEVBQUUsS0FBRyxXQUFTLEdBQUUsS0FBRyxLQUFHLEtBQUcsTUFBSSxNQUM3RSxJQUFFLEdBQUUsTUFBSSxLQUFHLEtBQUcsTUFBSSxFQUFFLE1BQUksYUFBVyxHQUFFLEtBQUcsS0FBRyxJQUFFLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxLQUFHLEtBQUcsTUFBSSxFQUFFLEtBQUcsYUFDNUUsR0FBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLE1BQUksSUFBRSxHQUFFLE1BQUksS0FBRyxLQUFHLE1BQUksRUFBRSxNQUFJLFVBQVEsR0FBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLE1BQUksSUFBRSxHQUFFLE1BQUksS0FDN0UsS0FBRyxNQUFJLEVBQUUsS0FBRyxhQUFXLEdBQUUsS0FBRyxLQUFHLEtBQUcsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUFJLEtBQUcsS0FBRyxNQUFJLEVBQUUsS0FBRyxhQUFXLEdBQUUsS0FDOUUsS0FBRyxJQUFFLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxLQUFHLEtBQUcsTUFBSSxFQUFFLE1BQUksV0FBUyxHQUFFLEtBQUcsS0FBRyxLQUFHLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxLQUFHLEtBQUcsTUFDaEYsRUFBRSxLQUFHLGFBQVcsR0FBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLE1BQUksSUFBRSxHQUFFLE1BQUksS0FBRyxLQUFHLE1BQUksRUFBRSxNQUFJLGFBQVcsR0FBRSxLQUFHLEtBQUcsS0FDOUUsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUFJLEtBQUcsS0FBRyxNQUFJLEVBQUUsS0FBRyxZQUFVLEdBQUUsS0FBRyxLQUFHLElBQUUsTUFBSSxNQUFJLElBQUUsR0FBRSxNQUFJLEtBQUcsS0FBRyxNQUFJLEVBQUUsTUFDL0UsYUFBVyxHQUFFLEtBQUcsS0FBRyxLQUFHLE1BQUksTUFBSSxJQUFFLEdBQUUsTUFBSSxLQUFHLEtBQUcsTUFBSSxFQUFFLEtBQUcsWUFBVSxHQUFFLEtBQUcsS0FBRyxLQUFHLE1BQUksTUFDOUUsSUFBRSxHQUFFLE1BQUksS0FBRyxLQUFHLE1BQUksRUFBRSxLQUFHLFlBQVUsR0FBRSxLQUFHLEtBQUcsS0FBRyxNQUFJLE1BQUksSUFBRSxHQUFFLEVBQUUsS0FBRyxJQUFFLEVBQUUsS0FBRyxHQUFFLEVBQUUsS0FBRyxJQUFFLEVBQUUsS0FDL0UsR0FBRSxFQUFFLEtBQUcsSUFBRSxFQUFFLEtBQUcsR0FBRSxFQUFFLEtBQUcsSUFBRSxFQUFFLEtBQUc7QUFBQTtBQUFBLElBQUUsS0FBSyxHQUFFO0FBQUMsYUFBTyxLQUFL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QUFJLEtBQUssS0FBSyxJQUFJLEdBQUUsR0FBRSxHQUM5RSxHQUFFLEdBQUUsR0FBRSxDQUFDLENBQUMsR0FBRSxHQUFHLENBQUMsS0FBRyxFQUFFLGVBQWUsQ0FBQyxHQUFFLE1BQUksS0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLElBQUUsQ0FBQyxNQUFJLElBQUUsSUFBSSxLQUM3RSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDLEdBQUUsR0FBRyxDQUFDLEtBQUcsRUFBRSxZQUFZLENBQUMsSUFBRztBQUFBLEtBQUcsV0FBVztBQUFFLFdBQVMsRUFBRSxDQUFDLEdBQUU7QUFBQyxRQUFJLElBQUUsR0FDN0UsS0FBSyxDQUFDO0FBQUUsUUFBRyxHQUFFO0FBQUMsVUFBSSxJQUFFLFNBQVMsRUFBRSxJQUFHLEVBQUUsR0FBRSxNQUFJLEVBQUU7QUFBRyxZQUFJLElBQUUsR0FBRyxDQUFDO0FBQUcsVUFBSSxJQUFFLFNBQVMsRUFBRSxJQUM3RSxFQUFFLElBQUUsR0FBRSxJQUFFLEVBQUUsSUFBRyxJQUFFLElBQUksS0FBSyxHQUFFLEdBQUUsQ0FBQztBQUFFLGFBQU8sR0FBRyxDQUFDLEtBQUcsRUFBRSxZQUFZLENBQUMsR0FBRTtBQUFBLElBQUM7QUFBQTtBQUFFLElBQUUsSUFBRyxTQUFTO0FBQy9FLFdBQVMsRUFBRSxDQUFDLEdBQUU7QUFBQyxRQUFHLEVBQUUsU0FBUyxLQUFLO0FBQUUsYUFBTztBQUFFLFFBQUksSUFBRSxHQUFHLEtBQUssRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUFFO0FBQUUsUUFBRyxHQUFFO0FBQ2pGLFVBQUksSUFBRSxFQUFFO0FBQUcsVUFBRyxNQUFJO0FBQUksZUFBTztBQUFFLFVBQUksSUFBRSxNQUFJLE1BQUksS0FBRyxHQUFFLElBQUUsU0FBUyxFQUFFLElBQUcsRUFBRSxJQUFFLE9BQUssU0FDM0UsRUFBRSxNQUFJLEdBQUUsRUFBRSxJQUFFLEtBQUcsU0FBUyxFQUFFLE1BQUksR0FBRSxFQUFFO0FBQUUsYUFBTyxJQUFFLElBQUU7QUFBQSxJQUFH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QSxJQUFHO0FBQ25GLFFBQUksSUFBRSxHQUFHLENBQUM7QUFBRSxXQUFPLEVBQUUsU0FBTyxXQUFXLENBQUMsR0FBRTtBQUFBLEtBQUcsYUFBYSxHQUFFLEtBQUcsVUFBVSxDQUFDLEdBQUU7QUFBQyxNQUFFLElBQy9FLEVBQUUsR0FBRSxFQUFFLElBQUcsRUFBRSxHQUFFLEVBQUUsSUFBRyxFQUFFLEdBQUUsRUFBRSxJQUFHLEVBQUUsR0FBRSxFQUFFLEtBQUksVUFBVSxHQUFFLEVBQUUsS0FBSSxVQUFVLEdBQUUsRUFBRSxJQUFHLEVBQUUsR0FBRSxFQUFFLE1BQzlFLEVBQUUsR0FBRSxFQUFFLE1BQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxFQUFFLEdBQUUsRUFBRSxLQUFJLEVBQUUsR0FBRSxFQUFFLEtBQUksRUFBRSxHQUFFLEVBQUUsS0FBSSxFQUFFLEdBQUUsRUFBRSxNQUFJLEVBQUUsR0FBRSxFQUFFLE1BQUssRUFBRSxHQUFFLEVBQUUsTUFDL0UsRUFBRSxHQUFFLEVBQUUsTUFBSyxFQUFFLEdBQUUsRUFBRSxNQUFLLEVBQUUsR0FBRSxFQUFFLE1BQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxFQUFFLEdBQUUsRUFBRSxNQUFLLEVBQUUsR0FBRSxFQUFFLE1BQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxFQUFFLEdBQy9FLEVBQUUsTUFBSyxFQUFFLEdBQUUsRUFBRSxNQUFLLEVBQUUsR0FBRSxFQUFFLE1BQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxFQUFFLEdBQUUsRUFBRSxNQUFLLEVBQUUsR0FBRSxFQUFFLE1BQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxFQUFFLEdBQUUsRUFBRSxNQUMvRSxFQUFFLEdBQUUsRUFBRSxNQUFLLEVBQUUsR0FBRSxFQUFFLE1BQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxFQUFFLEdBQUUsRUFBRSxJQUFHLEVBQUUsR0FBRSxFQUFFLEtBQUksS0FBSyxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUUsRUFBRSxNQUM3RSxLQUFLLE1BQU0sS0FBSyxJQUFJLENBQUMsR0FBRSxFQUFFLEtBQUksRUFBRSxHQUFFLEVBQUUsTUFBSyxFQUFFLEdBQUUsRUFBRSxNQUFLLEVBQUUsR0FBRSxFQUFFLE1BQUssRUFBRSxHQUFFLEVBQUUsS0FBSSxFQUFFLEdBQUUsRUFBRSxNQUM5RSxFQUFFLEdBQUUsRUFBRSxNQUFLLEVBQUU7QUFBQSxLQUFHLE1BQU07QUFBRSxLQUFHLFVBQVEsRUFBQyxNQUFLLEdBQUU7QUFBQSxDQUFFO0FBQUUsSUFBSSxLQUFHLEVBQUUsQ0FBQyxJQUFHLE9BQUs7QUFBYyxJQUFFO0FBQUUsTUFBSSxJQUFFO0FBQUksV0FBUyxFQUFFLENBQUMsR0FBRTtBQUFDLFFBQUksSUFBRSxFQUFFLFlBQ3BILENBQUMsR0FBRSxJQUFFLEVBQUUsYUFBYSxDQUFDLEdBQUUsSUFBRTtBQUFHLFFBQUUsTUFBSSxLQUFHLEtBQUcsTUFBSSxJQUFHLEtBQUcsSUFBRSxNQUFJLEdBQUUsSUFBRTtBQUFLLFFBQUksSUFBRSxJQUFHLEdBQUUsR0FBRSxHQUM5RSxHQUFFLEdBQUU7QUFBRTtBQUFDLFVBQUcsSUFBRSxJQUFFLEdBQUUsSUFBRSxJQUFFLE1BQUksR0FBRSxJQUFFLGFBQVcsSUFBRSxHQUFFLElBQUUsSUFBRSxNQUFJLEdBQUUsSUFBRSxNQUFJLElBQUUsSUFBRSxJQUFHLE1BQUksS0FBRyxNQUFJO0FBQUUsZUFBTyxJQUN0RixJQUFFO0FBQUUsV0FBSSxJQUFFLElBQUcsSUFBRSxJQUFFLEVBQUUsUUFBTyxJQUFFLEVBQUUsSUFBRSxHQUFFO0FBQUksYUFBRztBQUFJLFVBQUUsSUFBRSxJQUFFO0FBQUEsSUFBQztBQUFDO0FBQUMsVUFBRyxJQUFFLElBQUUsR0FBRSxJQUFFLElBQUUsTUFBSSxHQUFFLElBQUUsYUFDM0UsSUFBRSxHQUFFLElBQUUsSUFBRSxNQUFJLEdBQUUsSUFBRSxNQUFJLElBQUUsSUFBRSxJQUFHLE1BQUksS0FBRyxNQUFJO0FBQUUsZUFBTyxJQUFFLElBQUU7QUFBRSxXQUFJLElBQUUsSUFBRyxJQUFFLElBQUUsRUFBRSxRQUFPLElBQUUsRUFBRSxJQUMvRSxHQUFFO0FBQUksYUFBRztBQUFJLFVBQUUsSUFBRSxJQUFFO0FBQUEsSUFBQztBQUFDO0FBQUMsVUFBRyxJQUFFLElBQUUsR0FBRSxJQUFFLElBQUUsTUFBSSxHQUFFLElBQUUsYUFBVyxJQUFFLEdBQUUsSUFBRSxJQUFFLE1BQUksR0FBRSxJQUFFLE1BQUksSUFBRSxJQUFFLElBQzlFLE1BQUksS0FBRyxNQUFJO0FBQUUsZUFBTyxJQUFFLElBQUU7QUFBRSxXQUFJLElBQUUsSUFBRyxJQUFFLElBQUUsRUFBRSxRQUFPLElBQUUsRUFBRSxJQUFFLEdBQUU7QUFBSSxhQUFHO0FBQUksVUFBRSxJQUFFLElBQUU7QUFBQSxJQUFDO0FBQUMsV0FBTyxJQUNsRixJQUFFLEdBQUUsSUFBRSxhQUFXLElBQUUsR0FBRSxJQUFFLEtBQUcsSUFBRSxHQUFFLElBQUUsSUFBRTtBQUFBO0FBQUUsSUFBRSxJQUFHLFVBQVU7QUFBRSxLQUFHLFVBQVE7QUFBQSxDQUFHO0FBQUUsSUFBSSxLQUFHLEVBQUUsQ0FBQyxJQUFHLE9BQUs7QUFBQyxJQUFFO0FBQUUsTUFBSSxLQUFHLEdBQUcsR0FBRSxJQUFFLFVBQVUsQ0FBQyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFFLEtBQUcsR0FBRSxJQUFFLEtBQUcsT0FBRyxJQUFFLGFBQVcsQ0FBQyxHQUFFLEdBQUUsR0FBRTtBQUNuSyxhQUFPLElBQUUsS0FBSyxJQUFJLEdBQUUsQ0FBQyxJQUFFO0FBQUE7QUFBRyxRQUFJLElBQUUsS0FBRyxHQUFFLElBQUUsVUFBVSxDQUFDLEdBQUU7QUFBQyxhQUFPLEtBQUcsSUFBRSxNQUFJO0FBQUEsT0FBRyxLQUFLLEdBQUUsSUFBRSxLQUNqRixJQUFFLElBQUUsSUFBRTtBQUFFLFFBQUUsTUFBSSxJQUFFLE9BQUssSUFBRSxJQUFFLEtBQUksSUFBRSxJQUFHLE1BQUksSUFBRSxLQUFHLElBQUU7QUFBRyxRQUFJLElBQUU7QUFBRSxRQUFFLElBQUUsS0FBRyxNQUFJLElBQUUsRUFBRSxHQUFFLEVBQUUsRUFBRSxF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Q0FBQztBQUFBLE1BQUM7QUFBTSxhQUFJLElBQUUsRUFBRSxJQUFFLEVBQUUsSUFBRztBQUFJLFlBQUUsS0FBRyxFQUFFLENBQUM7QUFBRSxhQUFPO0FBQUEsT0FBRyxPQUFPO0FBQUUsV0FBTyxFQUFFLEdBQUUsQ0FBQztBQUFBLEtBQUcsWUFDcEUsR0FBRSxLQUFHLFVBQVUsQ0FBQyxHQUFFO0FBQUMsV0FBTyxFQUFFLFNBQVMsTUFBTTtBQUFBLEtBQUcsV0FBVyxHQUFFLEtBQUcsVUFBVSxDQUFDLEdBQUU7QUFBQyxXQUFPLE1BQ3RGLE9BQUssT0FBSyxFQUFFLEdBQUUsQ0FBQyxJQUFFO0FBQUEsS0FBRyxXQUFXLEdBQUUsS0FBRyxVQUFVLENBQUMsR0FBRTtBQUFDLE1BQUUsSUFBRyxFQUFFLEdBQUUsRUFBRSxJQUFHLEVBQUUsR0FBRSxFQUFFLElBQUcsRUFBRSxHQUFFLEVBQUUsSUFDL0UsRUFBRSxHQUFFLEVBQUUsTUFBSyxFQUFFLEdBQUUsRUFBRSxLQUFJLEVBQUUsR0FBRSxFQUFFLEtBQUksRUFBRSxHQUFFLEVBQUUsSUFBRyxFQUFFLEdBQUUsRUFBRSxNQUFLLEdBQUcsS0FBSyxNQUFLLEtBQUUsQ0FBQyxHQUFFLEVBQUUsTUFBSyxHQUFHLEtBQy9FLE1BQUssSUFBRSxDQUFDLEdBQUUsRUFBRSxNQUFJLEVBQUUsR0FBRSxFQUFFLE1BQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxFQUFFLEdBQUUsRUFBRSxNQUFLLEVBQUUsR0FBRSxFQUFFLE1BQUssRUFBRSxHQUFFLEVBQUUsSUFBRyxFQUFFO0FBQUEsS0FBRyxNQUFNO0FBQ2hGLEtBQUcsVUFBUSxFQUFDLE1BQUssR0FBRTtBQUFBLENBQUU7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFDLElBQUU7QUFBRSxLQUFHLFVBQVE7QUFBQSxJQUFDLE1BQUs7QUFBQSxJQUFHLE9BQU07QUFBQSxJQUFHLE1BQUs7QUFBQSxJQUFHLE1BQUs7QUFBQSxJQUFHLE1BQUs7QUFBQSxJQUFHLE1BQUs7QUFBQSxJQUN4RyxTQUFR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SUFBRSxHQUFFLEtBQUssTUFBTTtBQUFBO0FBQUEsSUFBRSxLQUFLLENBQUMsR0FBRTtBQUFDLFVBQUksSUFBRSxLQUFLLEtBQUssQ0FBQztBQUFFLGFBQU8sS0FDL0UsU0FBTyxHQUFFLEtBQUssaUJBQWUsR0FBRSxLQUFLLFNBQU8sRUFBRSxZQUFZLEtBQUssSUFBSSxHQUFFO0FBQUE7QUFBQSxFQUFFO0FBQUUsSUFBRSxJQUFHLFFBQ3hFO0FBQUUsTUFBSSxLQUFHO0FBQUcsS0FBRyxTQUFPO0FBQUEsQ0FBRztBQUFFLElBQUksS0FBRyxFQUFFLFFBQUk7QUFBYyxJQUFFO0FBQUUsU0FBTyxlQUFlLElBQUcsY0FBYSxFQUFDLE9BQU0sS0FBRSxDQUFDO0FBQy9HLEtBQUcsWUFBZTtBQUFFLE1BQUksS0FBRyxHQUFHLEdBQUUsSUFBRSxJQUFJLEdBQUcsUUFBTyxLQUFHLEVBQUUsT0FBRztBQUFDLE1BQUUsU0FBUyxDQUFDLEVBQUUsU0FDdkUsQ0FBQztBQUFFLGFBQVEsS0FBSyxPQUFPLEtBQUssQ0FBQztBQUFFLFFBQUUsV0FBVyxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUU7QUFBRSxNQUFFLFdBQVcsaUJBQy9ELEVBQUUsV0FBVyxNQUFNO0FBQUUsUUFBSSxJQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsTUFBTSxHQUFFLElBQUUsRUFBRSxTQUFPO0FBQUUsV0FBTyxJQUFJLEdBQzFGLE9BQU8sRUFBRSxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNO0FBQUEsS0FBRyxTQUFTLEdBQUUsS0FBRyxFQUFFLE1BQUk7QUFBQyxRQUFJLElBQUUsRUFBRSxZQUFZLENBQUM7QUFDL0UsV0FBTyxFQUFFLGFBQWEsR0FBRSxDQUFDLEdBQUUsRUFBRSxhQUFhLFVBQVMsQ0FBQyxHQUFFO0FBQUEsS0FBRyxZQUFZLEdBQUUsS0FBRyxFQUFFLE9BQUcsRUFDL0UsV0FBVyxDQUFDLEVBQUUsTUFBTSxHQUFHLEdBQUUsVUFBVSxHQUFFLEtBQUcsVUFBVSxDQUFDLEdBQUUsR0FBRTtBQUFDLFdBQU8sRUFBRSxXQUFXLENBQUMsRUFBRSxTQUMvRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLEdBQUUsRUFBRSxNQUFNLEdBQUc7QUFBQSxLQUFHLGdDQUFnQyxHQUFFLEtBQUcsVUFDekUsQ0FBQyxHQUFFO0FBQUMsV0FBTyxFQUFFLFVBQVUsQ0FBQyxFQUFFLE1BQU0sR0FBRztBQUFBLEtBQUcsNkJBQTZCLEdBQUUsS0FBRyxFQUNoRixPQUFHLEVBQUUsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUUsT0FBTyxHQUFFLEtBQUcsQ0FBQyxHQUFFLEtBQUcsRUFBRSxPQUFHO0FBQUMsUUFBSSxJQUFFLEVBQUUsUUFBTTtBQUFHLE1BQUUsU0FBTyxPQUM5RSxRQUFRLE1BQU0sZ0VBQWdFLEdBQy9FLFFBQVEsTUFBTSx3QkFBdUIsR0FBRSxFQUFFLE1BQU0sR0FBRSxRQUFRLE1BQU0sOERBQ2xCO0FBQUcsUUFBSSxJQUFFLEVBQUUsU0FBTztBQUFHLGFBQVEsSUFBRSxFQUFFLFFBQzlFLElBQUUsRUFBRSxXQUFXLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFFLElBQUUsRUFBRSxJQUFFLEdBQUU7QUFBSSxRQUFFLFNBQVMsRUFBRSxFQUFFO0FBQUUsV0FBTyxFQUNyRixNQUFNLEVBQUU7QUFBQSxLQUFHLE9BQU8sR0FBRSxLQUFHLElBQUksR0FBRyxRQUFPLEtBQUcsVUFBVSxDQUFDLEdBQUUsR0FBRTtBQUFDLGFBQVEsSUFBRSxFQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFDbkYsVUFBSSxJQUFFLElBQUUsRUFBRSxFQUFFLElBQUcsQ0FBQyxJQUFFLEVBQUU7QUFBRyxXQUFHLFFBQU0sRUFBRSxTQUFTLENBQUMsR0FBRSxHQUFHLFNBQVMsRUFBRSxLQUFHLGFBQWEsS0FBRyxFQUMvRSxTQUFTLENBQUMsR0FBRSxHQUFHLFNBQVMsRUFBRSxNQUFNLEdBQUUsR0FBRyxJQUFJLENBQUMsTUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFFLEdBQUcsU0FBUyxFQUFFLFdBQzFFLENBQUMsQ0FBQyxHQUFFLEdBQUcsVUFBVSxDQUFDO0FBQUEsSUFBRTtBQUFBLEtBQUcsYUFBYSxHQUFFLEtBQUcsRUFBRSxDQUFDLElBQUUsQ0FBQyxNQUFJO0FBQUMsUUFBSSxJQUFFLEVBQUUsVUFBUSxJQUFHLElBQUUsRUFBRSxhQUMzRSxJQUFHLElBQUUsRUFBRSxVQUFRLE9BQUcsSUFBRSxFQUFFLFVBQVEsSUFBRyxJQUFFLEVBQUU7QUFBTyxXQUFPLEVBQUUsV0FBVyxDQUFDLEVBQUUsV0FBVyxDQUFDLEdBQy9FLEVBQUUsU0FBUyxDQUFDLEdBQUUsR0FBRyxHQUFFLEVBQUUsV0FBVyxHQUFFLEVBQUUsU0FBUyxDQUFDLEdBQUUsRUFBRSxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUUsRUFBRSxTQUFTLElBQUUsSUFDL0UsQ0FBQyxHQUFFLEVBQUUsTUFBTSxFQUFFO0FBQUEsS0FBRyxNQUFNLEdBQUUsS0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDLENBQUMsR0FBRSxLQUFHLEVBQUUsT0FBRztBQUFDLFNBQUksTUFBSSxFQUFFLFdBQzVFLEVBQUU7QUFBSyxhQUFPO0FBQUcsUUFBSSxJQUFFLEVBQUUsVUFBUSxJQUFHLElBQUUsRUFBRSxRQUFNLEdBQUUsSUFBRSxFQUFFLFdBQVcsQ0FBQyxHQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsR0FBRSxJQUFFLEVBQy9FLFlBQVksSUFBRSxDQUFDO0FBQUUsV0FBTyxFQUFFLEtBQUcsSUFBRyxFQUFFLGFBQWEsR0FBRSxDQUFDLEdBQUUsRUFBRSxNQUFNLEdBQUUsR0FBRSxPQUFPLEdBQUUsRUFBRSxJQUFFLEtBQzdFLEdBQUUsRUFBRSxjQUFjLEdBQUUsRUFBRSxTQUFPLENBQUMsR0FBRTtBQUFBLEtBQUcsU0FBUyxHQUFFLEtBQUcsRUFBRSxDQUFDLEdBQUUsTUFBSTtBQUFDLFFBQUksSUFBRSxFQUFFLFlBQVksRUFBRTtBQUNqRixXQUFPLEVBQUUsYUFB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QUFHO0FBQUMsZUFBSyxXQUFXLEtBQUssT0FBTSxDQUFDO0FBQUEsU0FBRTtBQUFBO0FBQUEsRUFBRTtBQUFFLElBQUUsSUFBRyxRQUFRO0FBQUUsTUFBSSxLQUFHO0FBQUcsS0FBRyxRQUMzRTtBQUFHLEtBQUcsVUFBUTtBQUFBLENBQUc7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFjLElBQUU7QUFBRSxNQUFJLEtBQUcsR0FBRyxFQUFFLGNBQWEsS0FBRyxVQUFVLEdBQUU7QUFBQSxLQUFHLE1BQzdGLEdBQUUsS0FBRyxFQUFFLENBQUMsR0FBRSxNQUFJO0FBQUMsUUFBSSxJQUFFLEVBQUUsVUFBVSxDQUFDO0FBQUUsV0FBTyxNQUFJLEtBQVEsWUFBRSxFQUFFLE9BQU8sR0FBRSxDQUFDLEVBQUU7QUFBQSxLQUM1RSxhQUFhLEdBQUUsS0FBRyxNQUFNLElBQUU7QUFBQSxJQUFDLFdBQVcsQ0FBQyxHQUFFLEdBQUUsR0FBRTtBQUFDLFdBQUssU0FBTyxHQUFFLEtBQUssZUFBYSxHQUM5RSxLQUFLLFlBQVU7QUFBQTtBQUFBLEVBQUU7QUFBRSxJQUFFLElBQUcsVUFBVTtBQUFFLE1BQUksS0FBRyxJQUFHLEtBQUcsTUFBTSxJQUFFO0FBQUEsSUFBQyxXQUFXLENBQUMsR0FBRTtBQUFDLFdBQUssV0FDOUU7QUFBQTtBQUFBLEVBQUU7QUFBRSxJQUFFLElBQUcsYUFBYTtBQUFFLE1BQUksS0FBRztBQUFHLFdBQVMsRUFBRSxHQUFFO0FBQUMsVUFBTSxJQUFJLE1BQU0sdUVBQ1Q7QUFBQTtBQUFFLElBQUUsSUFBRyxzQkFDMUQ7QUFBRSxXQUFTLEVBQUUsQ0FBQyxHQUFFLEdBQUU7QUFBQyxRQUFHO0FBQUUsYUFBTSxFQUFDLFVBQVMsR0FBRSxRQUFZLFVBQUM7QUFBRSxRQUFJLEdBQUUsR0FBRSxJQUFFLFVBQVUsQ0FBQyxHQUFFLEdBQUU7QUFDdEYsVUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUM7QUFBQSxPQUFHLElBQUksR0FBRSxJQUFFLElBQUksVUFBVSxDQUFDLEdB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QUFBRSxXQUFPLEVBQUU7QUFBQTtBQUFPO0FBQUUsRUFBRSxJQUFHLFVBQVU7QUFBWSxJQUFJLG9CQUFrQixHQUFHO0FBQVcsSUFBSSxvQkFBa0IsR0FBRztBQUFXLElBQUksdUJBQXFCLEdBQUc7QUFDbkssSUFBSSxlQUFhLEdBQUc7QUFBTSxJQUFJLGtCQUFnQixHQUFHO0FBQVMsSUFBSSxlQUFhLEdBQUc7QUFpQjlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNwbURBLGVBQWUsZUFBZSxDQUFDLE1BQWMsUUFBNkI7QUFDeEUsUUFBTSxnQkFBZ0I7QUFDdEIsVUFDRSxNQUFNLE1BQU0sZ0JBQWdCLGFBQWE7QUFBQSxJQUN2QyxRQUFRO0FBQUEsSUFDUixNQUFNLEtBQUssVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQUEsRUFDdkMsQ0FBQyxHQUNELEtBQUs7QUFBQTtBQUdGLElBQU0saUJBQWlCO0FBQUEsRUFDNUIsWUFBWSxHQUFHO0FBQ2IsV0FBTztBQUFBO0FBQUEsRUFFVCxPQUFPLENBQUMsbUJBQTJCO0FBQ2pDLFdBQU8sR0FBSyxpQkFBaUI7QUFBQTtBQUVqQztBQUVPLElBQU0sbUNBQW1DO0FBQUEsRUFDOUMsNEJBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQStHOUI7IiwKICAiZGVidWdJZCI6ICI2QzAzNDIzQUFENjQzNTU2NjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
