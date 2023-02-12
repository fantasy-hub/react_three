(self.webpackChunk = self.webpackChunk || []).push([
  [418],
  {
    8870: function (An, rt, me) {
      'use strict';
      me.d(rt, {
        Z: function () {
          return Xe;
        },
      });
      function ke(j, Y, Q) {
        return (
          Y in j
            ? Object.defineProperty(j, Y, {
                value: Q,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (j[Y] = Q),
          j
        );
      }
      function p(j, Y) {
        var Q = Object.keys(j);
        if (Object.getOwnPropertySymbols) {
          var F = Object.getOwnPropertySymbols(j);
          Y &&
            (F = F.filter(function (G) {
              return Object.getOwnPropertyDescriptor(j, G).enumerable;
            })),
            Q.push.apply(Q, F);
        }
        return Q;
      }
      function Xe(j) {
        for (var Y = 1; Y < arguments.length; Y++) {
          var Q = arguments[Y] != null ? arguments[Y] : {};
          Y % 2
            ? p(Object(Q), !0).forEach(function (F) {
                ke(j, F, Q[F]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(Q))
            : p(Object(Q)).forEach(function (F) {
                Object.defineProperty(
                  j,
                  F,
                  Object.getOwnPropertyDescriptor(Q, F),
                );
              });
        }
        return j;
      }
    },
    6209: function (An, rt, me) {
      'use strict';
      me.d(rt, {
        y: function () {
          return Yn;
        },
      });
      var ke = {};
      me.r(ke),
        me.d(ke, {
          AsyncCompress: function () {
            return $t;
          },
          AsyncDecompress: function () {
            return Mn;
          },
          AsyncDeflate: function () {
            return Yt;
          },
          AsyncGunzip: function () {
            return Jt;
          },
          AsyncGzip: function () {
            return $t;
          },
          AsyncInflate: function () {
            return mt;
          },
          AsyncUnzipInflate: function () {
            return Un;
          },
          AsyncUnzlib: function () {
            return _t;
          },
          AsyncZipDeflate: function () {
            return Ln;
          },
          AsyncZlib: function () {
            return Fn;
          },
          Compress: function () {
            return $e;
          },
          DecodeUTF8: function () {
            return Cn;
          },
          Decompress: function () {
            return tn;
          },
          Deflate: function () {
            return oe;
          },
          EncodeUTF8: function () {
            return En;
          },
          Gunzip: function () {
            return Je;
          },
          Gzip: function () {
            return $e;
          },
          Inflate: function () {
            return $;
          },
          Unzip: function () {
            return bn;
          },
          UnzipInflate: function () {
            return Rn;
          },
          UnzipPassThrough: function () {
            return un;
          },
          Unzlib: function () {
            return _e;
          },
          Zip: function () {
            return zn;
          },
          ZipDeflate: function () {
            return kn;
          },
          ZipPassThrough: function () {
            return Ge;
          },
          Zlib: function () {
            return dt;
          },
          compress: function () {
            return qt;
          },
          compressSync: function () {
            return qe;
          },
          decompress: function () {
            return Dn;
          },
          decompressSync: function () {
            return Sn;
          },
          deflate: function () {
            return Qt;
          },
          deflateSync: function () {
            return be;
          },
          gunzip: function () {
            return Nt;
          },
          gunzipSync: function () {
            return Ne;
          },
          gzip: function () {
            return qt;
          },
          gzipSync: function () {
            return qe;
          },
          inflate: function () {
            return yt;
          },
          inflateSync: function () {
            return De;
          },
          strFromU8: function () {
            return At;
          },
          strToU8: function () {
            return pe;
          },
          unzip: function () {
            return Vn;
          },
          unzipSync: function () {
            return Gn;
          },
          unzlib: function () {
            return en;
          },
          unzlibSync: function () {
            return Ve;
          },
          zip: function () {
            return Bn;
          },
          zipSync: function () {
            return On;
          },
          zlib: function () {
            return Pn;
          },
          zlibSync: function () {
            return wt;
          },
        });
      var p = me(2212);
      /*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/ var Xe = {},
        j = function (r) {
          return URL.createObjectURL(
            new Blob([r], { type: 'text/javascript' }),
          );
        },
        Y = function (r) {
          return new Worker(r);
        };
      try {
        URL.revokeObjectURL(j(''));
      } catch (r) {
        (j = function (e) {
          return 'data:application/javascript;charset=UTF-8,' + encodeURI(e);
        }),
          (Y = function (e) {
            return new Worker(e, { type: 'module' });
          });
      }
      var Q = function (r, e, t, n, i) {
          var a = Y(Xe[e] || (Xe[e] = j(r)));
          return (
            (a.onerror = function (o) {
              return i(o.error, null);
            }),
            (a.onmessage = function (o) {
              return i(null, o.data);
            }),
            a.postMessage(t, n),
            a
          );
        },
        F = Uint8Array,
        G = Uint16Array,
        le = Uint32Array,
        ye = new F([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 0, 0, 0,
        ]),
        de = new F([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13, 0, 0,
        ]),
        Le = new F([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        St = function (r, e) {
          for (var t = new G(31), n = 0; n < 31; ++n) t[n] = e += 1 << r[n - 1];
          for (var i = new le(t[30]), n = 1; n < 30; ++n)
            for (var a = t[n]; a < t[n + 1]; ++a) i[a] = ((a - t[n]) << 5) | n;
          return [t, i];
        },
        Ct = St(ye, 2),
        it = Ct[0],
        Ze = Ct[1];
      (it[28] = 258), (Ze[258] = 28);
      for (
        var Et = St(de, 0), kt = Et[0], at = Et[1], ze = new G(32768), B = 0;
        B < 32768;
        ++B
      ) {
        var fe = ((B & 43690) >>> 1) | ((B & 21845) << 1);
        (fe = ((fe & 52428) >>> 2) | ((fe & 13107) << 2)),
          (fe = ((fe & 61680) >>> 4) | ((fe & 3855) << 4)),
          (ze[B] = (((fe & 65280) >>> 8) | ((fe & 255) << 8)) >>> 1);
      }
      for (
        var _ = function (r, e, t) {
            for (var n = r.length, i = 0, a = new G(e); i < n; ++i)
              ++a[r[i] - 1];
            var o = new G(e);
            for (i = 0; i < e; ++i) o[i] = (o[i - 1] + a[i - 1]) << 1;
            var s;
            if (t) {
              s = new G(1 << e);
              var l = 15 - e;
              for (i = 0; i < n; ++i)
                if (r[i])
                  for (
                    var c = (i << 4) | r[i],
                      f = e - r[i],
                      u = o[r[i] - 1]++ << f,
                      h = u | ((1 << f) - 1);
                    u <= h;
                    ++u
                  )
                    s[ze[u] >>> l] = c;
            } else
              for (s = new G(n), i = 0; i < n; ++i)
                r[i] && (s[i] = ze[o[r[i] - 1]++] >>> (15 - r[i]));
            return s;
          },
          ce = new F(288),
          B = 0;
        B < 144;
        ++B
      )
        ce[B] = 8;
      for (var B = 144; B < 256; ++B) ce[B] = 9;
      for (var B = 256; B < 280; ++B) ce[B] = 7;
      for (var B = 280; B < 288; ++B) ce[B] = 8;
      for (var we = new F(32), B = 0; B < 32; ++B) we[B] = 5;
      var Lt = _(ce, 9, 0),
        zt = _(ce, 9, 1),
        Bt = _(we, 5, 0),
        Ot = _(we, 5, 1),
        He = function (r) {
          for (var e = r[0], t = 1; t < r.length; ++t) r[t] > e && (e = r[t]);
          return e;
        },
        ee = function (r, e, t) {
          var n = (e / 8) | 0;
          return ((r[n] | (r[n + 1] << 8)) >> (e & 7)) & t;
        },
        Ke = function (r, e) {
          var t = (e / 8) | 0;
          return (r[t] | (r[t + 1] << 8) | (r[t + 2] << 16)) >> (e & 7);
        },
        Be = function (r) {
          return ((r / 8) | 0) + (r & 7 && 1);
        },
        te = function (r, e, t) {
          (e == null || e < 0) && (e = 0),
            (t == null || t > r.length) && (t = r.length);
          var n = new (r instanceof G ? G : r instanceof le ? le : F)(t - e);
          return n.set(r.subarray(e, t)), n;
        },
        Oe = function (r, e, t) {
          var n = r.length;
          if (!n || (t && !t.l && n < 5)) return e || new F(0);
          var i = !e || t,
            a = !t || t.i;
          t || (t = {}), e || (e = new F(n * 3));
          var o = function (nt) {
              var je = e.length;
              if (nt > je) {
                var Ee = new F(Math.max(je * 2, nt));
                Ee.set(e), (e = Ee);
              }
            },
            s = t.f || 0,
            l = t.p || 0,
            c = t.b || 0,
            f = t.l,
            u = t.d,
            h = t.m,
            v = t.n,
            g = n * 8;
          do {
            if (!f) {
              t.f = s = ee(r, l, 1);
              var m = ee(r, l + 1, 3);
              if (((l += 3), m))
                if (m == 1) (f = zt), (u = Ot), (h = 9), (v = 5);
                else if (m == 2) {
                  var y = ee(r, l, 31) + 257,
                    A = ee(r, l + 10, 15) + 4,
                    D = y + ee(r, l + 5, 31) + 1;
                  l += 14;
                  for (var P = new F(D), I = new F(19), w = 0; w < A; ++w)
                    I[Le[w]] = ee(r, l + w * 3, 7);
                  l += A * 3;
                  for (
                    var O = He(I), M = (1 << O) - 1, X = _(I, O, 1), w = 0;
                    w < D;

                  ) {
                    var L = X[ee(r, l, M)];
                    l += L & 15;
                    var d = L >>> 4;
                    if (d < 16) P[w++] = d;
                    else {
                      var E = 0,
                        k = 0;
                      for (
                        d == 16
                          ? ((k = 3 + ee(r, l, 3)), (l += 2), (E = P[w - 1]))
                          : d == 17
                          ? ((k = 3 + ee(r, l, 7)), (l += 3))
                          : d == 18 && ((k = 11 + ee(r, l, 127)), (l += 7));
                        k--;

                      )
                        P[w++] = E;
                    }
                  }
                  var V = P.subarray(0, y),
                    z = P.subarray(y);
                  (h = He(V)), (v = He(z)), (f = _(V, h, 1)), (u = _(z, v, 1));
                } else throw 'invalid block type';
              else {
                var d = Be(l) + 4,
                  T = r[d - 4] | (r[d - 3] << 8),
                  x = d + T;
                if (x > n) {
                  if (a) throw 'unexpected EOF';
                  break;
                }
                i && o(c + T),
                  e.set(r.subarray(d, x), c),
                  (t.b = c += T),
                  (t.p = l = x * 8);
                continue;
              }
              if (l > g) {
                if (a) throw 'unexpected EOF';
                break;
              }
            }
            i && o(c + 131072);
            for (var R = (1 << h) - 1, K = (1 << v) - 1, J = l; ; J = l) {
              var E = f[Ke(r, l) & R],
                re = E >>> 4;
              if (((l += E & 15), l > g)) {
                if (a) throw 'unexpected EOF';
                break;
              }
              if (!E) throw 'invalid length/literal';
              if (re < 256) e[c++] = re;
              else if (re == 256) {
                (J = l), (f = null);
                break;
              } else {
                var W = re - 254;
                if (re > 264) {
                  var w = re - 257,
                    ie = ye[w];
                  (W = ee(r, l, (1 << ie) - 1) + it[w]), (l += ie);
                }
                var se = u[Ke(r, l) & K],
                  N = se >>> 4;
                if (!se) throw 'invalid distance';
                l += se & 15;
                var z = kt[N];
                if (N > 3) {
                  var ie = de[N];
                  (z += Ke(r, l) & ((1 << ie) - 1)), (l += ie);
                }
                if (l > g) {
                  if (a) throw 'unexpected EOF';
                  break;
                }
                i && o(c + 131072);
                for (var Z = c + W; c < Z; c += 4)
                  (e[c] = e[c - z]),
                    (e[c + 1] = e[c + 1 - z]),
                    (e[c + 2] = e[c + 2 - z]),
                    (e[c + 3] = e[c + 3 - z]);
                c = Z;
              }
            }
            (t.l = f),
              (t.p = J),
              (t.b = c),
              f && ((s = 1), (t.m = h), (t.d = u), (t.n = v));
          } while (!s);
          return c == e.length ? e : te(e, 0, c);
        },
        ae = function (r, e, t) {
          t <<= e & 7;
          var n = (e / 8) | 0;
          (r[n] |= t), (r[n + 1] |= t >>> 8);
        },
        xe = function (r, e, t) {
          t <<= e & 7;
          var n = (e / 8) | 0;
          (r[n] |= t), (r[n + 1] |= t >>> 8), (r[n + 2] |= t >>> 16);
        },
        We = function (r, e) {
          for (var t = [], n = 0; n < r.length; ++n)
            r[n] && t.push({ s: n, f: r[n] });
          var i = t.length,
            a = t.slice();
          if (!i) return [ue, 0];
          if (i == 1) {
            var o = new F(t[0].s + 1);
            return (o[t[0].s] = 1), [o, 1];
          }
          t.sort(function (D, P) {
            return D.f - P.f;
          }),
            t.push({ s: -1, f: 25001 });
          var s = t[0],
            l = t[1],
            c = 0,
            f = 1,
            u = 2;
          for (t[0] = { s: -1, f: s.f + l.f, l: s, r: l }; f != i - 1; )
            (s = t[t[c].f < t[u].f ? c++ : u++]),
              (l = t[c != f && t[c].f < t[u].f ? c++ : u++]),
              (t[f++] = { s: -1, f: s.f + l.f, l: s, r: l });
          for (var h = a[0].s, n = 1; n < i; ++n) a[n].s > h && (h = a[n].s);
          var v = new G(h + 1),
            g = Ye(t[f - 1], v, 0);
          if (g > e) {
            var n = 0,
              m = 0,
              d = g - e,
              T = 1 << d;
            for (
              a.sort(function (P, I) {
                return v[I.s] - v[P.s] || P.f - I.f;
              });
              n < i;
              ++n
            ) {
              var x = a[n].s;
              if (v[x] > e) (m += T - (1 << (g - v[x]))), (v[x] = e);
              else break;
            }
            for (m >>>= d; m > 0; ) {
              var y = a[n].s;
              v[y] < e ? (m -= 1 << (e - v[y]++ - 1)) : ++n;
            }
            for (; n >= 0 && m; --n) {
              var A = a[n].s;
              v[A] == e && (--v[A], ++m);
            }
            g = e;
          }
          return [new F(v), g];
        },
        Ye = function (r, e, t) {
          return r.s == -1
            ? Math.max(Ye(r.l, e, t + 1), Ye(r.r, e, t + 1))
            : (e[r.s] = t);
        },
        ot = function (r) {
          for (var e = r.length; e && !r[--e]; );
          for (
            var t = new G(++e),
              n = 0,
              i = r[0],
              a = 1,
              o = function (l) {
                t[n++] = l;
              },
              s = 1;
            s <= e;
            ++s
          )
            if (r[s] == i && s != e) ++a;
            else {
              if (!i && a > 2) {
                for (; a > 138; a -= 138) o(32754);
                a > 2 &&
                  (o(a > 10 ? ((a - 11) << 5) | 28690 : ((a - 3) << 5) | 12305),
                  (a = 0));
              } else if (a > 3) {
                for (o(i), --a; a > 6; a -= 6) o(8304);
                a > 2 && (o(((a - 3) << 5) | 8208), (a = 0));
              }
              for (; a--; ) o(i);
              (a = 1), (i = r[s]);
            }
          return [t.subarray(0, n), e];
        },
        Te = function (r, e) {
          for (var t = 0, n = 0; n < e.length; ++n) t += r[n] * e[n];
          return t;
        },
        Re = function (r, e, t) {
          var n = t.length,
            i = Be(e + 2);
          (r[i] = n & 255),
            (r[i + 1] = n >>> 8),
            (r[i + 2] = r[i] ^ 255),
            (r[i + 3] = r[i + 1] ^ 255);
          for (var a = 0; a < n; ++a) r[i + a + 4] = t[a];
          return (i + 4 + n) * 8;
        },
        st = function (r, e, t, n, i, a, o, s, l, c, f) {
          ae(e, f++, t), ++i[256];
          for (
            var u = We(i, 15),
              h = u[0],
              v = u[1],
              g = We(a, 15),
              m = g[0],
              d = g[1],
              T = ot(h),
              x = T[0],
              y = T[1],
              A = ot(m),
              D = A[0],
              P = A[1],
              I = new G(19),
              w = 0;
            w < x.length;
            ++w
          )
            I[x[w] & 31]++;
          for (var w = 0; w < D.length; ++w) I[D[w] & 31]++;
          for (
            var O = We(I, 7), M = O[0], X = O[1], L = 19;
            L > 4 && !M[Le[L - 1]];
            --L
          );
          var E = (c + 5) << 3,
            k = Te(i, ce) + Te(a, we) + o,
            V =
              Te(i, h) +
              Te(a, m) +
              o +
              14 +
              3 * L +
              Te(I, M) +
              (2 * I[16] + 3 * I[17] + 7 * I[18]);
          if (E <= k && E <= V) return Re(e, f, r.subarray(l, l + c));
          var z, R, K, J;
          if ((ae(e, f, 1 + (V < k)), (f += 2), V < k)) {
            (z = _(h, v, 0)), (R = h), (K = _(m, d, 0)), (J = m);
            var re = _(M, X, 0);
            ae(e, f, y - 257),
              ae(e, f + 5, P - 1),
              ae(e, f + 10, L - 4),
              (f += 14);
            for (var w = 0; w < L; ++w) ae(e, f + 3 * w, M[Le[w]]);
            f += 3 * L;
            for (var W = [x, D], ie = 0; ie < 2; ++ie)
              for (var se = W[ie], w = 0; w < se.length; ++w) {
                var N = se[w] & 31;
                ae(e, f, re[N]),
                  (f += M[N]),
                  N > 15 &&
                    (ae(e, f, (se[w] >>> 5) & 127), (f += se[w] >>> 12));
              }
          } else (z = Lt), (R = ce), (K = Bt), (J = we);
          for (var w = 0; w < s; ++w)
            if (n[w] > 255) {
              var N = (n[w] >>> 18) & 31;
              xe(e, f, z[N + 257]),
                (f += R[N + 257]),
                N > 7 && (ae(e, f, (n[w] >>> 23) & 31), (f += ye[N]));
              var Z = n[w] & 31;
              xe(e, f, K[Z]),
                (f += J[Z]),
                Z > 3 && (xe(e, f, (n[w] >>> 5) & 8191), (f += de[Z]));
            } else xe(e, f, z[n[w]]), (f += R[n[w]]);
          return xe(e, f, z[256]), f + R[256];
        },
        Rt = new le([
          65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560,
          2117632,
        ]),
        ue = new F(0),
        Ut = function (r, e, t, n, i, a) {
          var o = r.length,
            s = new F(n + o + 5 * (1 + Math.ceil(o / 7e3)) + i),
            l = s.subarray(n, s.length - i),
            c = 0;
          if (!e || o < 8)
            for (var f = 0; f <= o; f += 65535) {
              var u = f + 65535;
              u < o
                ? (c = Re(l, c, r.subarray(f, u)))
                : ((l[f] = a), (c = Re(l, c, r.subarray(f, o))));
            }
          else {
            for (
              var h = Rt[e - 1],
                v = h >>> 13,
                g = h & 8191,
                m = (1 << t) - 1,
                d = new G(32768),
                T = new G(m + 1),
                x = Math.ceil(t / 3),
                y = 2 * x,
                A = function (Dt) {
                  return (r[Dt] ^ (r[Dt + 1] << x) ^ (r[Dt + 2] << y)) & m;
                },
                D = new le(25e3),
                P = new G(288),
                I = new G(32),
                w = 0,
                O = 0,
                f = 0,
                M = 0,
                X = 0,
                L = 0;
              f < o;
              ++f
            ) {
              var E = A(f),
                k = f & 32767,
                V = T[E];
              if (((d[k] = V), (T[E] = k), X <= f)) {
                var z = o - f;
                if ((w > 7e3 || M > 24576) && z > 423) {
                  (c = st(r, l, 0, D, P, I, O, M, L, f - L, c)),
                    (M = w = O = 0),
                    (L = f);
                  for (var R = 0; R < 286; ++R) P[R] = 0;
                  for (var R = 0; R < 30; ++R) I[R] = 0;
                }
                var K = 2,
                  J = 0,
                  re = g,
                  W = (k - V) & 32767;
                if (z > 2 && E == A(f - W))
                  for (
                    var ie = Math.min(v, z) - 1,
                      se = Math.min(32767, f),
                      N = Math.min(258, z);
                    W <= se && --re && k != V;

                  ) {
                    if (r[f + K] == r[f + K - W]) {
                      for (var Z = 0; Z < N && r[f + Z] == r[f + Z - W]; ++Z);
                      if (Z > K) {
                        if (((K = Z), (J = W), Z > ie)) break;
                        for (
                          var nt = Math.min(W, Z - 2), je = 0, R = 0;
                          R < nt;
                          ++R
                        ) {
                          var Ee = (f - W + R + 32768) & 32767,
                            ar = d[Ee],
                            wn = (Ee - ar + 32768) & 32767;
                          wn > je && ((je = wn), (V = Ee));
                        }
                      }
                    }
                    (k = V), (V = d[k]), (W += (k - V + 32768) & 32767);
                  }
                if (J) {
                  D[M++] = 268435456 | (Ze[K] << 18) | at[J];
                  var xn = Ze[K] & 31,
                    Tn = at[J] & 31;
                  (O += ye[xn] + de[Tn]),
                    ++P[257 + xn],
                    ++I[Tn],
                    (X = f + K),
                    ++w;
                } else (D[M++] = r[f]), ++P[r[f]];
              }
            }
            (c = st(r, l, a, D, P, I, O, M, L, f - L, c)),
              !a && c & 7 && (c = Re(l, c + 1, ue));
          }
          return te(s, 0, n + Be(c) + i);
        },
        bt = (function () {
          for (var r = new le(256), e = 0; e < 256; ++e) {
            for (var t = e, n = 9; --n; ) t = (t & 1 && 3988292384) ^ (t >>> 1);
            r[e] = t;
          }
          return r;
        })(),
        Ae = function () {
          var r = -1;
          return {
            p: function (e) {
              for (var t = r, n = 0; n < e.length; ++n)
                t = bt[(t & 255) ^ e[n]] ^ (t >>> 8);
              r = t;
            },
            d: function () {
              return ~r;
            },
          };
        },
        lt = function () {
          var r = 1,
            e = 0;
          return {
            p: function (t) {
              for (var n = r, i = e, a = t.length, o = 0; o != a; ) {
                for (var s = Math.min(o + 2655, a); o < s; ++o) i += n += t[o];
                (n = (n & 65535) + 15 * (n >> 16)),
                  (i = (i & 65535) + 15 * (i >> 16));
              }
              (r = n), (e = i);
            },
            d: function () {
              return (
                (r %= 65521),
                (e %= 65521),
                ((r & 255) << 24) |
                  ((r >>> 8) << 16) |
                  ((e & 255) << 8) |
                  (e >>> 8)
              );
            },
          };
        },
        ge = function (r, e, t, n, i) {
          return Ut(
            r,
            e.level == null ? 6 : e.level,
            e.mem == null
              ? Math.ceil(Math.max(8, Math.min(13, Math.log(r.length))) * 1.5)
              : 12 + e.mem,
            t,
            n,
            !i,
          );
        },
        Ue = function (r, e) {
          var t = {};
          for (var n in r) t[n] = r[n];
          for (var n in e) t[n] = e[n];
          return t;
        },
        Vt = function (r, e, t) {
          for (
            var n = r(),
              i = r.toString(),
              a = i
                .slice(i.indexOf('[') + 1, i.lastIndexOf(']'))
                .replace(/ /g, '')
                .split(','),
              o = 0;
            o < n.length;
            ++o
          ) {
            var s = n[o],
              l = a[o];
            if (typeof s == 'function') {
              e += ';' + l + '=';
              var c = s.toString();
              if (s.prototype)
                if (c.indexOf('[native code]') != -1) {
                  var f = c.indexOf(' ', 8) + 1;
                  e += c.slice(f, c.indexOf('(', f));
                } else {
                  e += c;
                  for (var u in s.prototype)
                    e +=
                      ';' +
                      l +
                      '.prototype.' +
                      u +
                      '=' +
                      s.prototype[u].toString();
                }
              else e += c;
            } else t[l] = s;
          }
          return [e, t];
        },
        Qe = [],
        In = function (r) {
          var e = [];
          for (var t in r)
            (r[t] instanceof F || r[t] instanceof G || r[t] instanceof le) &&
              e.push((r[t] = new r[t].constructor(r[t])).buffer);
          return e;
        },
        Gt = function (r, e, t, n) {
          var i;
          if (!Qe[t]) {
            for (var a = '', o = {}, s = r.length - 1, l = 0; l < s; ++l)
              (i = Vt(r[l], a, o)), (a = i[0]), (o = i[1]);
            Qe[t] = Vt(r[s], a, o);
          }
          var c = Ue({}, Qe[t][1]);
          return Q(
            Qe[t][0] +
              ';onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=' +
              e.toString() +
              '}',
            t,
            c,
            In(c),
            n,
          );
        },
        Ie = function () {
          return [
            F,
            G,
            le,
            ye,
            de,
            Le,
            it,
            kt,
            zt,
            Ot,
            ze,
            _,
            He,
            ee,
            Ke,
            Be,
            te,
            Oe,
            De,
            he,
            ct,
          ];
        },
        Fe = function () {
          return [
            F,
            G,
            le,
            ye,
            de,
            Le,
            Ze,
            at,
            Lt,
            ce,
            Bt,
            we,
            ze,
            Rt,
            ue,
            _,
            ae,
            xe,
            We,
            Ye,
            ot,
            Te,
            Re,
            st,
            Be,
            te,
            Ut,
            ge,
            be,
            he,
          ];
        },
        jt = function () {
          return [ft, pt, C, Ae, bt];
        },
        Xt = function () {
          return [ht, Kt];
        },
        Zt = function () {
          return [vt, C, lt];
        },
        Ht = function () {
          return [Wt];
        },
        he = function (r) {
          return postMessage(r, [r.buffer]);
        },
        ct = function (r) {
          return r && r.size && new F(r.size);
        },
        Pe = function (r, e, t, n, i, a) {
          var o = Gt(t, n, i, function (s, l) {
            o.terminate(), a(s, l);
          });
          return (
            o.postMessage([r, e], e.consume ? [r.buffer] : []),
            function () {
              o.terminate();
            }
          );
        },
        ne = function (r) {
          return (
            (r.ondata = function (e, t) {
              return postMessage([e, t], [e.buffer]);
            }),
            function (e) {
              return r.push(e.data[0], e.data[1]);
            }
          );
        },
        Me = function (r, e, t, n, i) {
          var a,
            o = Gt(r, n, i, function (s, l) {
              s
                ? (o.terminate(), e.ondata.call(e, s))
                : (l[1] && o.terminate(), e.ondata.call(e, s, l[0], l[1]));
            });
          o.postMessage(t),
            (e.push = function (s, l) {
              if (a) throw 'stream finished';
              if (!e.ondata) throw 'no stream handler';
              o.postMessage([s, (a = l)], [s.buffer]);
            }),
            (e.terminate = function () {
              o.terminate();
            });
        },
        H = function (r, e) {
          return r[e] | (r[e + 1] << 8);
        },
        U = function (r, e) {
          return (
            (r[e] | (r[e + 1] << 8) | (r[e + 2] << 16) | (r[e + 3] << 24)) >>> 0
          );
        },
        ut = function (r, e) {
          return U(r, e) + U(r, e + 4) * 4294967296;
        },
        C = function (r, e, t) {
          for (; t; ++e) (r[e] = t), (t >>>= 8);
        },
        ft = function (r, e) {
          var t = e.filename;
          if (
            ((r[0] = 31),
            (r[1] = 139),
            (r[2] = 8),
            (r[8] = e.level < 2 ? 4 : e.level == 9 ? 2 : 0),
            (r[9] = 3),
            e.mtime != 0 &&
              C(r, 4, Math.floor(new Date(e.mtime || Date.now()) / 1e3)),
            t)
          ) {
            r[3] = 8;
            for (var n = 0; n <= t.length; ++n) r[n + 10] = t.charCodeAt(n);
          }
        },
        ht = function (r) {
          if (r[0] != 31 || r[1] != 139 || r[2] != 8) throw 'invalid gzip data';
          var e = r[3],
            t = 10;
          e & 4 && (t += r[10] | ((r[11] << 8) + 2));
          for (var n = ((e >> 3) & 1) + ((e >> 4) & 1); n > 0; n -= !r[t++]);
          return t + (e & 2);
        },
        Kt = function (r) {
          var e = r.length;
          return (
            (r[e - 4] |
              (r[e - 3] << 8) |
              (r[e - 2] << 16) |
              (r[e - 1] << 24)) >>>
            0
          );
        },
        pt = function (r) {
          return 10 + ((r.filename && r.filename.length + 1) || 0);
        },
        vt = function (r, e) {
          var t = e.level,
            n = t == 0 ? 0 : t < 6 ? 1 : t == 9 ? 3 : 2;
          (r[0] = 120), (r[1] = (n << 6) | (n ? 32 - 2 * n : 1));
        },
        Wt = function (r) {
          if ((r[0] & 15) != 8 || r[0] >>> 4 > 7 || ((r[0] << 8) | r[1]) % 31)
            throw 'invalid zlib data';
          if (r[1] & 32)
            throw 'invalid zlib data: preset dictionaries not supported';
        };
      function gt(r, e) {
        return (
          !e && typeof r == 'function' && ((e = r), (r = {})),
          (this.ondata = e),
          r
        );
      }
      var oe = (function () {
          function r(e, t) {
            !t && typeof e == 'function' && ((t = e), (e = {})),
              (this.ondata = t),
              (this.o = e || {});
          }
          return (
            (r.prototype.p = function (e, t) {
              this.ondata(ge(e, this.o, 0, 0, !t), t);
            }),
            (r.prototype.push = function (e, t) {
              if (this.d) throw 'stream finished';
              if (!this.ondata) throw 'no stream handler';
              (this.d = t), this.p(e, t || !1);
            }),
            r
          );
        })(),
        Yt = (function () {
          function r(e, t) {
            Me(
              [
                Fe,
                function () {
                  return [ne, oe];
                },
              ],
              this,
              gt.call(this, e, t),
              function (n) {
                var i = new oe(n.data);
                onmessage = ne(i);
              },
              6,
            );
          }
          return r;
        })();
      function Qt(r, e, t) {
        if ((t || ((t = e), (e = {})), typeof t != 'function'))
          throw 'no callback';
        return Pe(
          r,
          e,
          [Fe],
          function (n) {
            return he(be(n.data[0], n.data[1]));
          },
          0,
          t,
        );
      }
      function be(r, e) {
        return ge(r, e || {}, 0, 0);
      }
      var $ = (function () {
          function r(e) {
            (this.s = {}), (this.p = new F(0)), (this.ondata = e);
          }
          return (
            (r.prototype.e = function (e) {
              if (this.d) throw 'stream finished';
              if (!this.ondata) throw 'no stream handler';
              var t = this.p.length,
                n = new F(t + e.length);
              n.set(this.p), n.set(e, t), (this.p = n);
            }),
            (r.prototype.c = function (e) {
              this.d = this.s.i = e || !1;
              var t = this.s.b,
                n = Oe(this.p, this.o, this.s);
              this.ondata(te(n, t, this.s.b), this.d),
                (this.o = te(n, this.s.b - 32768)),
                (this.s.b = this.o.length),
                (this.p = te(this.p, (this.s.p / 8) | 0)),
                (this.s.p &= 7);
            }),
            (r.prototype.push = function (e, t) {
              this.e(e), this.c(t);
            }),
            r
          );
        })(),
        mt = (function () {
          function r(e) {
            (this.ondata = e),
              Me(
                [
                  Ie,
                  function () {
                    return [ne, $];
                  },
                ],
                this,
                0,
                function () {
                  var t = new $();
                  onmessage = ne(t);
                },
                7,
              );
          }
          return r;
        })();
      function yt(r, e, t) {
        if ((t || ((t = e), (e = {})), typeof t != 'function'))
          throw 'no callback';
        return Pe(
          r,
          e,
          [Ie],
          function (n) {
            return he(De(n.data[0], ct(n.data[1])));
          },
          1,
          t,
        );
      }
      function De(r, e) {
        return Oe(r, e);
      }
      var $e = (function () {
          function r(e, t) {
            (this.c = Ae()), (this.l = 0), (this.v = 1), oe.call(this, e, t);
          }
          return (
            (r.prototype.push = function (e, t) {
              oe.prototype.push.call(this, e, t);
            }),
            (r.prototype.p = function (e, t) {
              this.c.p(e), (this.l += e.length);
              var n = ge(e, this.o, this.v && pt(this.o), t && 8, !t);
              this.v && (ft(n, this.o), (this.v = 0)),
                t &&
                  (C(n, n.length - 8, this.c.d()), C(n, n.length - 4, this.l)),
                this.ondata(n, t);
            }),
            r
          );
        })(),
        $t = (function () {
          function r(e, t) {
            Me(
              [
                Fe,
                jt,
                function () {
                  return [ne, oe, $e];
                },
              ],
              this,
              gt.call(this, e, t),
              function (n) {
                var i = new $e(n.data);
                onmessage = ne(i);
              },
              8,
            );
          }
          return r;
        })();
      function qt(r, e, t) {
        if ((t || ((t = e), (e = {})), typeof t != 'function'))
          throw 'no callback';
        return Pe(
          r,
          e,
          [
            Fe,
            jt,
            function () {
              return [qe];
            },
          ],
          function (n) {
            return he(qe(n.data[0], n.data[1]));
          },
          2,
          t,
        );
      }
      function qe(r, e) {
        e || (e = {});
        var t = Ae(),
          n = r.length;
        t.p(r);
        var i = ge(r, e, pt(e), 8),
          a = i.length;
        return ft(i, e), C(i, a - 8, t.d()), C(i, a - 4, n), i;
      }
      var Je = (function () {
          function r(e) {
            (this.v = 1), $.call(this, e);
          }
          return (
            (r.prototype.push = function (e, t) {
              if (($.prototype.e.call(this, e), this.v)) {
                var n = this.p.length > 3 ? ht(this.p) : 4;
                if (n >= this.p.length && !t) return;
                (this.p = this.p.subarray(n)), (this.v = 0);
              }
              if (t) {
                if (this.p.length < 8) throw 'invalid gzip stream';
                this.p = this.p.subarray(0, -8);
              }
              $.prototype.c.call(this, t);
            }),
            r
          );
        })(),
        Jt = (function () {
          function r(e) {
            (this.ondata = e),
              Me(
                [
                  Ie,
                  Xt,
                  function () {
                    return [ne, $, Je];
                  },
                ],
                this,
                0,
                function () {
                  var t = new Je();
                  onmessage = ne(t);
                },
                9,
              );
          }
          return r;
        })();
      function Nt(r, e, t) {
        if ((t || ((t = e), (e = {})), typeof t != 'function'))
          throw 'no callback';
        return Pe(
          r,
          e,
          [
            Ie,
            Xt,
            function () {
              return [Ne];
            },
          ],
          function (n) {
            return he(Ne(n.data[0]));
          },
          3,
          t,
        );
      }
      function Ne(r, e) {
        return Oe(r.subarray(ht(r), -8), e || new F(Kt(r)));
      }
      var dt = (function () {
          function r(e, t) {
            (this.c = lt()), (this.v = 1), oe.call(this, e, t);
          }
          return (
            (r.prototype.push = function (e, t) {
              oe.prototype.push.call(this, e, t);
            }),
            (r.prototype.p = function (e, t) {
              this.c.p(e);
              var n = ge(e, this.o, this.v && 2, t && 4, !t);
              this.v && (vt(n, this.o), (this.v = 0)),
                t && C(n, n.length - 4, this.c.d()),
                this.ondata(n, t);
            }),
            r
          );
        })(),
        Fn = (function () {
          function r(e, t) {
            Me(
              [
                Fe,
                Zt,
                function () {
                  return [ne, oe, dt];
                },
              ],
              this,
              gt.call(this, e, t),
              function (n) {
                var i = new dt(n.data);
                onmessage = ne(i);
              },
              10,
            );
          }
          return r;
        })();
      function Pn(r, e, t) {
        if ((t || ((t = e), (e = {})), typeof t != 'function'))
          throw 'no callback';
        return Pe(
          r,
          e,
          [
            Fe,
            Zt,
            function () {
              return [wt];
            },
          ],
          function (n) {
            return he(wt(n.data[0], n.data[1]));
          },
          4,
          t,
        );
      }
      function wt(r, e) {
        e || (e = {});
        var t = lt();
        t.p(r);
        var n = ge(r, e, 2, 4);
        return vt(n, e), C(n, n.length - 4, t.d()), n;
      }
      var _e = (function () {
          function r(e) {
            (this.v = 1), $.call(this, e);
          }
          return (
            (r.prototype.push = function (e, t) {
              if (($.prototype.e.call(this, e), this.v)) {
                if (this.p.length < 2 && !t) return;
                (this.p = this.p.subarray(2)), (this.v = 0);
              }
              if (t) {
                if (this.p.length < 4) throw 'invalid zlib stream';
                this.p = this.p.subarray(0, -4);
              }
              $.prototype.c.call(this, t);
            }),
            r
          );
        })(),
        _t = (function () {
          function r(e) {
            (this.ondata = e),
              Me(
                [
                  Ie,
                  Ht,
                  function () {
                    return [ne, $, _e];
                  },
                ],
                this,
                0,
                function () {
                  var t = new _e();
                  onmessage = ne(t);
                },
                11,
              );
          }
          return r;
        })();
      function en(r, e, t) {
        if ((t || ((t = e), (e = {})), typeof t != 'function'))
          throw 'no callback';
        return Pe(
          r,
          e,
          [
            Ie,
            Ht,
            function () {
              return [Ve];
            },
          ],
          function (n) {
            return he(Ve(n.data[0], ct(n.data[1])));
          },
          5,
          t,
        );
      }
      function Ve(r, e) {
        return Oe((Wt(r), r.subarray(2, -4)), e);
      }
      var tn = (function () {
          function r(e) {
            (this.G = Je), (this.I = $), (this.Z = _e), (this.ondata = e);
          }
          return (
            (r.prototype.push = function (e, t) {
              if (!this.ondata) throw 'no stream handler';
              if (this.s) this.s.push(e, t);
              else {
                if (this.p && this.p.length) {
                  var n = new F(this.p.length + e.length);
                  n.set(this.p), n.set(e, this.p.length);
                } else this.p = e;
                if (this.p.length > 2) {
                  var i = this,
                    a = function () {
                      i.ondata.apply(i, arguments);
                    };
                  (this.s =
                    this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8
                      ? new this.G(a)
                      : (this.p[0] & 15) != 8 ||
                        this.p[0] >> 4 > 7 ||
                        ((this.p[0] << 8) | this.p[1]) % 31
                      ? new this.I(a)
                      : new this.Z(a)),
                    this.s.push(this.p, t),
                    (this.p = null);
                }
              }
            }),
            r
          );
        })(),
        Mn = (function () {
          function r(e) {
            (this.G = Jt), (this.I = mt), (this.Z = _t), (this.ondata = e);
          }
          return (
            (r.prototype.push = function (e, t) {
              tn.prototype.push.call(this, e, t);
            }),
            r
          );
        })();
      function Dn(r, e, t) {
        if ((t || ((t = e), (e = {})), typeof t != 'function'))
          throw 'no callback';
        return r[0] == 31 && r[1] == 139 && r[2] == 8
          ? Nt(r, e, t)
          : (r[0] & 15) != 8 || r[0] >> 4 > 7 || ((r[0] << 8) | r[1]) % 31
          ? yt(r, e, t)
          : en(r, e, t);
      }
      function Sn(r, e) {
        return r[0] == 31 && r[1] == 139 && r[2] == 8
          ? Ne(r, e)
          : (r[0] & 15) != 8 || r[0] >> 4 > 7 || ((r[0] << 8) | r[1]) % 31
          ? De(r, e)
          : Ve(r, e);
      }
      var xt = function (r, e, t, n) {
          for (var i in r) {
            var a = r[i],
              o = e + i;
            a instanceof F
              ? (t[o] = [a, n])
              : Array.isArray(a)
              ? (t[o] = [a[0], Ue(n, a[1])])
              : xt(a, o + '/', t, n);
          }
        },
        nn = typeof TextEncoder != 'undefined' && new TextEncoder(),
        Tt = typeof TextDecoder != 'undefined' && new TextDecoder(),
        rn = 0;
      try {
        Tt.decode(ue, { stream: !0 }), (rn = 1);
      } catch (r) {}
      var an = function (r) {
          for (var e = '', t = 0; ; ) {
            var n = r[t++],
              i = (n > 127) + (n > 223) + (n > 239);
            if (t + i > r.length) return [e, te(r, t - 1)];
            i
              ? i == 3
                ? ((n =
                    (((n & 15) << 18) |
                      ((r[t++] & 63) << 12) |
                      ((r[t++] & 63) << 6) |
                      (r[t++] & 63)) -
                    65536),
                  (e += String.fromCharCode(
                    55296 | (n >> 10),
                    56320 | (n & 1023),
                  )))
                : i & 1
                ? (e += String.fromCharCode(((n & 31) << 6) | (r[t++] & 63)))
                : (e += String.fromCharCode(
                    ((n & 15) << 12) | ((r[t++] & 63) << 6) | (r[t++] & 63),
                  ))
              : (e += String.fromCharCode(n));
          }
        },
        Cn = (function () {
          function r(e) {
            (this.ondata = e),
              rn ? (this.t = new TextDecoder()) : (this.p = ue);
          }
          return (
            (r.prototype.push = function (e, t) {
              if (!this.ondata) throw 'no callback';
              if (((t = !!t), this.t)) {
                if ((this.ondata(this.t.decode(e, { stream: !0 }), t), t)) {
                  if (this.t.decode().length) throw 'invalid utf-8 data';
                  this.t = null;
                }
                return;
              }
              if (!this.p) throw 'stream finished';
              var n = new F(this.p.length + e.length);
              n.set(this.p), n.set(e, this.p.length);
              var i = an(n),
                a = i[0],
                o = i[1];
              if (t) {
                if (o.length) throw 'invalid utf-8 data';
                this.p = null;
              } else this.p = o;
              this.ondata(a, t);
            }),
            r
          );
        })(),
        En = (function () {
          function r(e) {
            this.ondata = e;
          }
          return (
            (r.prototype.push = function (e, t) {
              if (!this.ondata) throw 'no callback';
              if (this.d) throw 'stream finished';
              this.ondata(pe(e), (this.d = t || !1));
            }),
            r
          );
        })();
      function pe(r, e) {
        if (e) {
          for (var t = new F(r.length), n = 0; n < r.length; ++n)
            t[n] = r.charCodeAt(n);
          return t;
        }
        if (nn) return nn.encode(r);
        for (
          var i = r.length,
            a = new F(r.length + (r.length >> 1)),
            o = 0,
            s = function (f) {
              a[o++] = f;
            },
            n = 0;
          n < i;
          ++n
        ) {
          if (o + 5 > a.length) {
            var l = new F(o + 8 + ((i - n) << 1));
            l.set(a), (a = l);
          }
          var c = r.charCodeAt(n);
          c < 128 || e
            ? s(c)
            : c < 2048
            ? (s(192 | (c >> 6)), s(128 | (c & 63)))
            : c > 55295 && c < 57344
            ? ((c = (65536 + (c & (1023 << 10))) | (r.charCodeAt(++n) & 1023)),
              s(240 | (c >> 18)),
              s(128 | ((c >> 12) & 63)),
              s(128 | ((c >> 6) & 63)),
              s(128 | (c & 63)))
            : (s(224 | (c >> 12)), s(128 | ((c >> 6) & 63)), s(128 | (c & 63)));
        }
        return te(a, 0, o);
      }
      function At(r, e) {
        if (e) {
          for (var t = '', n = 0; n < r.length; n += 16384)
            t += String.fromCharCode.apply(null, r.subarray(n, n + 16384));
          return t;
        } else {
          if (Tt) return Tt.decode(r);
          var i = an(r),
            a = i[0],
            o = i[1];
          if (o.length) throw 'invalid utf-8 data';
          return a;
        }
      }
      var on = function (r) {
          return r == 1 ? 3 : r < 6 ? 2 : r == 9 ? 1 : 0;
        },
        sn = function (r, e) {
          return e + 30 + H(r, e + 26) + H(r, e + 28);
        },
        ln = function (r, e, t) {
          var n = H(r, e + 28),
            i = At(r.subarray(e + 46, e + 46 + n), !(H(r, e + 8) & 2048)),
            a = e + 46 + n,
            o = U(r, e + 20),
            s =
              t && o == 4294967295 ? cn(r, a) : [o, U(r, e + 24), U(r, e + 42)],
            l = s[0],
            c = s[1],
            f = s[2];
          return [H(r, e + 10), l, c, i, a + H(r, e + 30) + H(r, e + 32), f];
        },
        cn = function (r, e) {
          for (; H(r, e) != 1; e += 4 + H(r, e + 2));
          return [ut(r, e + 12), ut(r, e + 4), ut(r, e + 20)];
        },
        ve = function (r) {
          var e = 0;
          if (r)
            for (var t in r) {
              var n = r[t].length;
              if (n > 65535) throw 'extra field too long';
              e += n + 4;
            }
          return e;
        },
        Se = function (r, e, t, n, i, a, o, s) {
          var l = n.length,
            c = t.extra,
            f = s && s.length,
            u = ve(c);
          C(r, e, o != null ? 33639248 : 67324752),
            (e += 4),
            o != null && ((r[e++] = 20), (r[e++] = t.os)),
            (r[e] = 20),
            (e += 2),
            (r[e++] = (t.flag << 1) | (a == null && 8)),
            (r[e++] = i && 8),
            (r[e++] = t.compression & 255),
            (r[e++] = t.compression >> 8);
          var h = new Date(t.mtime == null ? Date.now() : t.mtime),
            v = h.getFullYear() - 1980;
          if (v < 0 || v > 119) throw 'date not in range 1980-2099';
          if (
            (C(
              r,
              e,
              (v << 25) |
                ((h.getMonth() + 1) << 21) |
                (h.getDate() << 16) |
                (h.getHours() << 11) |
                (h.getMinutes() << 5) |
                (h.getSeconds() >>> 1),
            ),
            (e += 4),
            a != null && (C(r, e, t.crc), C(r, e + 4, a), C(r, e + 8, t.size)),
            C(r, e + 12, l),
            C(r, e + 14, u),
            (e += 16),
            o != null &&
              (C(r, e, f), C(r, e + 6, t.attrs), C(r, e + 10, o), (e += 14)),
            r.set(n, e),
            (e += l),
            u)
          )
            for (var g in c) {
              var m = c[g],
                d = m.length;
              C(r, e, +g), C(r, e + 2, d), r.set(m, e + 4), (e += 4 + d);
            }
          return f && (r.set(s, e), (e += f)), e;
        },
        It = function (r, e, t, n, i) {
          C(r, e, 101010256),
            C(r, e + 8, t),
            C(r, e + 10, t),
            C(r, e + 12, n),
            C(r, e + 16, i);
        },
        Ge = (function () {
          function r(e) {
            (this.filename = e),
              (this.c = Ae()),
              (this.size = 0),
              (this.compression = 0);
          }
          return (
            (r.prototype.process = function (e, t) {
              this.ondata(null, e, t);
            }),
            (r.prototype.push = function (e, t) {
              if (!this.ondata)
                throw 'no callback - add to ZIP archive before pushing';
              this.c.p(e),
                (this.size += e.length),
                t && (this.crc = this.c.d()),
                this.process(e, t || !1);
            }),
            r
          );
        })(),
        kn = (function () {
          function r(e, t) {
            var n = this;
            t || (t = {}),
              Ge.call(this, e),
              (this.d = new oe(t, function (i, a) {
                n.ondata(null, i, a);
              })),
              (this.compression = 8),
              (this.flag = on(t.level));
          }
          return (
            (r.prototype.process = function (e, t) {
              try {
                this.d.push(e, t);
              } catch (n) {
                this.ondata(n, null, t);
              }
            }),
            (r.prototype.push = function (e, t) {
              Ge.prototype.push.call(this, e, t);
            }),
            r
          );
        })(),
        Ln = (function () {
          function r(e, t) {
            var n = this;
            t || (t = {}),
              Ge.call(this, e),
              (this.d = new Yt(t, function (i, a, o) {
                n.ondata(i, a, o);
              })),
              (this.compression = 8),
              (this.flag = on(t.level)),
              (this.terminate = this.d.terminate);
          }
          return (
            (r.prototype.process = function (e, t) {
              this.d.push(e, t);
            }),
            (r.prototype.push = function (e, t) {
              Ge.prototype.push.call(this, e, t);
            }),
            r
          );
        })(),
        zn = (function () {
          function r(e) {
            (this.ondata = e), (this.u = []), (this.d = 1);
          }
          return (
            (r.prototype.add = function (e) {
              var t = this;
              if (this.d & 2) throw 'stream finished';
              var n = pe(e.filename),
                i = n.length,
                a = e.comment,
                o = a && pe(a),
                s = i != e.filename.length || (o && a.length != o.length),
                l = i + ve(e.extra) + 30;
              if (i > 65535) throw 'filename too long';
              var c = new F(l);
              Se(c, 0, e, n, s);
              var f = [c],
                u = function () {
                  for (var d = 0, T = f; d < T.length; d++) {
                    var x = T[d];
                    t.ondata(null, x, !1);
                  }
                  f = [];
                },
                h = this.d;
              this.d = 0;
              var v = this.u.length,
                g = Ue(e, {
                  f: n,
                  u: s,
                  o,
                  t: function () {
                    e.terminate && e.terminate();
                  },
                  r: function () {
                    if ((u(), h)) {
                      var d = t.u[v + 1];
                      d ? d.r() : (t.d = 1);
                    }
                    h = 1;
                  },
                }),
                m = 0;
              (e.ondata = function (d, T, x) {
                if (d) t.ondata(d, T, x), t.terminate();
                else if (((m += T.length), f.push(T), x)) {
                  var y = new F(16);
                  C(y, 0, 134695760),
                    C(y, 4, e.crc),
                    C(y, 8, m),
                    C(y, 12, e.size),
                    f.push(y),
                    (g.c = m),
                    (g.b = l + m + 16),
                    (g.crc = e.crc),
                    (g.size = e.size),
                    h && g.r(),
                    (h = 1);
                } else h && u();
              }),
                this.u.push(g);
            }),
            (r.prototype.end = function () {
              var e = this;
              if (this.d & 2)
                throw this.d & 1 ? 'stream finishing' : 'stream finished';
              this.d
                ? this.e()
                : this.u.push({
                    r: function () {
                      !(e.d & 1) || (e.u.splice(-1, 1), e.e());
                    },
                    t: function () {},
                  }),
                (this.d = 3);
            }),
            (r.prototype.e = function () {
              for (
                var e = 0, t = 0, n = 0, i = 0, a = this.u;
                i < a.length;
                i++
              ) {
                var o = a[i];
                n += 46 + o.f.length + ve(o.extra) + (o.o ? o.o.length : 0);
              }
              for (
                var s = new F(n + 22), l = 0, c = this.u;
                l < c.length;
                l++
              ) {
                var o = c[l];
                Se(s, e, o, o.f, o.u, o.c, t, o.o),
                  (e += 46 + o.f.length + ve(o.extra) + (o.o ? o.o.length : 0)),
                  (t += o.b);
              }
              It(s, e, this.u.length, n, t),
                this.ondata(null, s, !0),
                (this.d = 2);
            }),
            (r.prototype.terminate = function () {
              for (var e = 0, t = this.u; e < t.length; e++) {
                var n = t[e];
                n.t();
              }
              this.d = 2;
            }),
            r
          );
        })();
      function Bn(r, e, t) {
        if ((t || ((t = e), (e = {})), typeof t != 'function'))
          throw 'no callback';
        var n = {};
        xt(r, '', n, e);
        var i = Object.keys(n),
          a = i.length,
          o = 0,
          s = 0,
          l = a,
          c = new Array(a),
          f = [],
          u = function () {
            for (var m = 0; m < f.length; ++m) f[m]();
          },
          h = function () {
            var m = new F(s + 22),
              d = o,
              T = s - o;
            s = 0;
            for (var x = 0; x < l; ++x) {
              var y = c[x];
              try {
                var A = y.c.length;
                Se(m, s, y, y.f, y.u, A);
                var D = 30 + y.f.length + ve(y.extra),
                  P = s + D;
                m.set(y.c, P),
                  Se(m, o, y, y.f, y.u, A, s, y.m),
                  (o += 16 + D + (y.m ? y.m.length : 0)),
                  (s = P + A);
              } catch (I) {
                return t(I, null);
              }
            }
            It(m, o, c.length, T, d), t(null, m);
          };
        a || h();
        for (
          var v = function (m) {
              var d = i[m],
                T = n[d],
                x = T[0],
                y = T[1],
                A = Ae(),
                D = x.length;
              A.p(x);
              var P = pe(d),
                I = P.length,
                w = y.comment,
                O = w && pe(w),
                M = O && O.length,
                X = ve(y.extra),
                L = y.level == 0 ? 0 : 8,
                E = function (k, V) {
                  if (k) u(), t(k, null);
                  else {
                    var z = V.length;
                    (c[m] = Ue(y, {
                      size: D,
                      crc: A.d(),
                      c: V,
                      f: P,
                      m: O,
                      u: I != d.length || (O && w.length != M),
                      compression: L,
                    })),
                      (o += 30 + I + X + z),
                      (s += 76 + 2 * (I + X) + (M || 0) + z),
                      --a || h();
                  }
                };
              if ((I > 65535 && E('filename too long', null), !L)) E(null, x);
              else if (D < 16e4)
                try {
                  E(null, be(x, y));
                } catch (k) {
                  E(k, null);
                }
              else f.push(Qt(x, y, E));
            },
            g = 0;
          g < l;
          ++g
        )
          v(g);
        return u;
      }
      function On(r, e) {
        e || (e = {});
        var t = {},
          n = [];
        xt(r, '', t, e);
        var i = 0,
          a = 0;
        for (var o in t) {
          var s = t[o],
            l = s[0],
            c = s[1],
            f = c.level == 0 ? 0 : 8,
            u = pe(o),
            h = u.length,
            v = c.comment,
            g = v && pe(v),
            m = g && g.length,
            d = ve(c.extra);
          if (h > 65535) throw 'filename too long';
          var T = f ? be(l, c) : l,
            x = T.length,
            y = Ae();
          y.p(l),
            n.push(
              Ue(c, {
                size: l.length,
                crc: y.d(),
                c: T,
                f: u,
                m: g,
                u: h != o.length || (g && v.length != m),
                o: i,
                compression: f,
              }),
            ),
            (i += 30 + h + d + x),
            (a += 76 + 2 * (h + d) + (m || 0) + x);
        }
        for (
          var A = new F(a + 22), D = i, P = a - i, I = 0;
          I < n.length;
          ++I
        ) {
          var u = n[I];
          Se(A, u.o, u, u.f, u.u, u.c.length);
          var w = 30 + u.f.length + ve(u.extra);
          A.set(u.c, u.o + w),
            Se(A, i, u, u.f, u.u, u.c.length, u.o, u.m),
            (i += 16 + w + (u.m ? u.m.length : 0));
        }
        return It(A, i, n.length, P, D), A;
      }
      var un = (function () {
          function r() {}
          return (
            (r.prototype.push = function (e, t) {
              this.ondata(null, e, t);
            }),
            (r.compression = 0),
            r
          );
        })(),
        Rn = (function () {
          function r() {
            var e = this;
            this.i = new $(function (t, n) {
              e.ondata(null, t, n);
            });
          }
          return (
            (r.prototype.push = function (e, t) {
              try {
                this.i.push(e, t);
              } catch (n) {
                this.ondata(n, e, t);
              }
            }),
            (r.compression = 8),
            r
          );
        })(),
        Un = (function () {
          function r(e, t) {
            var n = this;
            t < 32e4
              ? (this.i = new $(function (i, a) {
                  n.ondata(null, i, a);
                }))
              : ((this.i = new mt(function (i, a, o) {
                  n.ondata(i, a, o);
                })),
                (this.terminate = this.i.terminate));
          }
          return (
            (r.prototype.push = function (e, t) {
              this.i.terminate && (e = te(e, 0)), this.i.push(e, t);
            }),
            (r.compression = 8),
            r
          );
        })(),
        bn = (function () {
          function r(e) {
            (this.onfile = e),
              (this.k = []),
              (this.o = { 0: un }),
              (this.p = ue);
          }
          return (
            (r.prototype.push = function (e, t) {
              var n = this;
              if (!this.onfile) throw 'no callback';
              if (!this.p) throw 'stream finished';
              if (this.c > 0) {
                var i = Math.min(this.c, e.length),
                  a = e.subarray(0, i);
                if (
                  ((this.c -= i),
                  this.d ? this.d.push(a, !this.c) : this.k[0].push(a),
                  (e = e.subarray(i)),
                  e.length)
                )
                  return this.push(e, t);
              } else {
                var o = 0,
                  s = 0,
                  l = void 0,
                  c = void 0;
                this.p.length
                  ? e.length
                    ? ((c = new F(this.p.length + e.length)),
                      c.set(this.p),
                      c.set(e, this.p.length))
                    : (c = this.p)
                  : (c = e);
                for (
                  var f = c.length,
                    u = this.c,
                    h = u && this.d,
                    v = function () {
                      var T,
                        x = U(c, s);
                      if (x == 67324752) {
                        (o = 1), (l = s), (g.d = null), (g.c = 0);
                        var y = H(c, s + 6),
                          A = H(c, s + 8),
                          D = y & 2048,
                          P = y & 8,
                          I = H(c, s + 26),
                          w = H(c, s + 28);
                        if (f > s + 30 + I + w) {
                          var O = [];
                          g.k.unshift(O), (o = 2);
                          var M = U(c, s + 18),
                            X = U(c, s + 22),
                            L = At(c.subarray(s + 30, (s += 30 + I)), !D);
                          M == 4294967295
                            ? ((T = P ? [-2] : cn(c, s)),
                              (M = T[0]),
                              (X = T[1]))
                            : P && (M = -1),
                            (s += w),
                            (g.c = M);
                          var E,
                            k = {
                              name: L,
                              compression: A,
                              start: function () {
                                if (!k.ondata) throw 'no callback';
                                if (!M) k.ondata(null, ue, !0);
                                else {
                                  var V = n.o[A];
                                  if (!V) throw 'unknown compression type ' + A;
                                  (E = M < 0 ? new V(L) : new V(L, M, X)),
                                    (E.ondata = function (J, re, W) {
                                      k.ondata(J, re, W);
                                    });
                                  for (var z = 0, R = O; z < R.length; z++) {
                                    var K = R[z];
                                    E.push(K, !1);
                                  }
                                  n.k[0] == O && n.c
                                    ? (n.d = E)
                                    : E.push(ue, !0);
                                }
                              },
                              terminate: function () {
                                E && E.terminate && E.terminate();
                              },
                            };
                          M >= 0 && ((k.size = M), (k.originalSize = X)),
                            g.onfile(k);
                        }
                        return 'break';
                      } else if (u) {
                        if (x == 134695760)
                          return (
                            (l = s += 12 + (u == -2 && 8)),
                            (o = 3),
                            (g.c = 0),
                            'break'
                          );
                        if (x == 33639248)
                          return (l = s -= 4), (o = 3), (g.c = 0), 'break';
                      }
                    },
                    g = this;
                  s < f - 4;
                  ++s
                ) {
                  var m = v();
                  if (m === 'break') break;
                }
                if (((this.p = ue), u < 0)) {
                  var d = o
                    ? c.subarray(
                        0,
                        l -
                          12 -
                          (u == -2 && 8) -
                          (U(c, l - 16) == 134695760 && 4),
                      )
                    : c.subarray(0, s);
                  h ? h.push(d, !!o) : this.k[+(o == 2)].push(d);
                }
                if (o & 2) return this.push(c.subarray(s), t);
                this.p = c.subarray(s);
              }
              if (t) {
                if (this.c) throw 'invalid zip file';
                this.p = null;
              }
            }),
            (r.prototype.register = function (e) {
              this.o[e.compression] = e;
            }),
            r
          );
        })();
      function Vn(r, e) {
        if (typeof e != 'function') throw 'no callback';
        for (
          var t = [],
            n = function () {
              for (var h = 0; h < t.length; ++h) t[h]();
            },
            i = {},
            a = r.length - 22;
          U(r, a) != 101010256;
          --a
        )
          if (!a || r.length - a > 65558) {
            e('invalid zip file', null);
            return;
          }
        var o = H(r, a + 8);
        o || e(null, {});
        var s = o,
          l = U(r, a + 16),
          c = l == 4294967295;
        if (c) {
          if (((a = U(r, a - 12)), U(r, a) != 101075792)) {
            e('invalid zip file', null);
            return;
          }
          (s = o = U(r, a + 32)), (l = U(r, a + 48));
        }
        for (
          var f = function (h) {
              var v = ln(r, l, c),
                g = v[0],
                m = v[1],
                d = v[2],
                T = v[3],
                x = v[4],
                y = v[5],
                A = sn(r, y);
              l = x;
              var D = function (I, w) {
                I ? (n(), e(I, null)) : ((i[T] = w), --o || e(null, i));
              };
              if (!g) D(null, te(r, A, A + m));
              else if (g == 8) {
                var P = r.subarray(A, A + m);
                if (m < 32e4)
                  try {
                    D(null, De(P, new F(d)));
                  } catch (I) {
                    D(I, null);
                  }
                else t.push(yt(P, { size: d }, D));
              } else D('unknown compression type ' + g, null);
            },
            u = 0;
          u < s;
          ++u
        )
          f(u);
        return n;
      }
      function Gn(r) {
        for (var e = {}, t = r.length - 22; U(r, t) != 101010256; --t)
          if (!t || r.length - t > 65558) throw 'invalid zip file';
        var n = H(r, t + 8);
        if (!n) return {};
        var i = U(r, t + 16),
          a = i == 4294967295;
        if (a) {
          if (((t = U(r, t - 12)), U(r, t) != 101075792))
            throw 'invalid zip file';
          (n = U(r, t + 32)), (i = U(r, t + 48));
        }
        for (var o = 0; o < n; ++o) {
          var s = ln(r, i, a),
            l = s[0],
            c = s[1],
            f = s[2],
            u = s[3],
            h = s[4],
            v = s[5],
            g = sn(r, v);
          if (((i = h), !l)) e[u] = te(r, g, g + c);
          else if (l == 8) e[u] = De(r.subarray(g, g + c), new F(f));
          else throw 'unknown compression type ' + l;
        }
        return e;
      }
      function et(r, e, t) {
        const n = t.length - r - 1;
        if (e >= t[n]) return n - 1;
        if (e <= t[r]) return r;
        let i = r,
          a = n,
          o = Math.floor((i + a) / 2);
        for (; e < t[o] || e >= t[o + 1]; )
          e < t[o] ? (a = o) : (i = o), (o = Math.floor((i + a) / 2));
        return o;
      }
      function Ft(r, e, t, n) {
        const i = [],
          a = [],
          o = [];
        i[0] = 1;
        for (let s = 1; s <= t; ++s) {
          (a[s] = e - n[r + 1 - s]), (o[s] = n[r + s] - e);
          let l = 0;
          for (let c = 0; c < s; ++c) {
            const f = o[c + 1],
              u = a[s - c],
              h = i[c] / (f + u);
            (i[c] = l + f * h), (l = u * h);
          }
          i[s] = l;
        }
        return i;
      }
      function jn(r, e, t, n) {
        const i = et(r, n, e),
          a = Ft(i, n, r, e),
          o = new p.Vector4(0, 0, 0, 0);
        for (let s = 0; s <= r; ++s) {
          const l = t[i - r + s],
            c = a[s],
            f = l.w * c;
          (o.x += l.x * f),
            (o.y += l.y * f),
            (o.z += l.z * f),
            (o.w += l.w * c);
        }
        return o;
      }
      function Xn(r, e, t, n, i) {
        const a = [];
        for (let u = 0; u <= t; ++u) a[u] = 0;
        const o = [];
        for (let u = 0; u <= n; ++u) o[u] = a.slice(0);
        const s = [];
        for (let u = 0; u <= t; ++u) s[u] = a.slice(0);
        s[0][0] = 1;
        const l = a.slice(0),
          c = a.slice(0);
        for (let u = 1; u <= t; ++u) {
          (l[u] = e - i[r + 1 - u]), (c[u] = i[r + u] - e);
          let h = 0;
          for (let v = 0; v < u; ++v) {
            const g = c[v + 1],
              m = l[u - v];
            s[u][v] = g + m;
            const d = s[v][u - 1] / s[u][v];
            (s[v][u] = h + g * d), (h = m * d);
          }
          s[u][u] = h;
        }
        for (let u = 0; u <= t; ++u) o[0][u] = s[u][t];
        for (let u = 0; u <= t; ++u) {
          let h = 0,
            v = 1;
          const g = [];
          for (let m = 0; m <= t; ++m) g[m] = a.slice(0);
          g[0][0] = 1;
          for (let m = 1; m <= n; ++m) {
            let d = 0;
            const T = u - m,
              x = t - m;
            u >= m &&
              ((g[v][0] = g[h][0] / s[x + 1][T]), (d = g[v][0] * s[T][x]));
            const y = T >= -1 ? 1 : -T,
              A = u - 1 <= x ? m - 1 : t - u;
            for (let P = y; P <= A; ++P)
              (g[v][P] = (g[h][P] - g[h][P - 1]) / s[x + 1][T + P]),
                (d += g[v][P] * s[T + P][x]);
            u <= x &&
              ((g[v][m] = -g[h][m - 1] / s[x + 1][u]),
              (d += g[v][m] * s[u][x])),
              (o[m][u] = d);
            const D = h;
            (h = v), (v = D);
          }
        }
        let f = t;
        for (let u = 1; u <= n; ++u) {
          for (let h = 0; h <= t; ++h) o[u][h] *= f;
          f *= t - u;
        }
        return o;
      }
      function Zn(r, e, t, n, i) {
        const a = i < r ? i : r,
          o = [],
          s = et(r, n, e),
          l = Xn(s, n, r, a, e),
          c = [];
        for (let f = 0; f < t.length; ++f) {
          const u = t[f].clone(),
            h = u.w;
          (u.x *= h), (u.y *= h), (u.z *= h), (c[f] = u);
        }
        for (let f = 0; f <= a; ++f) {
          const u = c[s - r].clone().multiplyScalar(l[f][0]);
          for (let h = 1; h <= r; ++h)
            u.add(c[s - r + h].clone().multiplyScalar(l[f][h]));
          o[f] = u;
        }
        for (let f = a + 1; f <= i + 1; ++f) o[f] = new p.Vector4(0, 0, 0);
        return o;
      }
      function Hn(r, e) {
        let t = 1;
        for (let i = 2; i <= r; ++i) t *= i;
        let n = 1;
        for (let i = 2; i <= e; ++i) n *= i;
        for (let i = 2; i <= r - e; ++i) n *= i;
        return t / n;
      }
      function Kn(r) {
        const e = r.length,
          t = [],
          n = [];
        for (let a = 0; a < e; ++a) {
          const o = r[a];
          (t[a] = new p.Vector3(o.x, o.y, o.z)), (n[a] = o.w);
        }
        const i = [];
        for (let a = 0; a < e; ++a) {
          const o = t[a].clone();
          for (let s = 1; s <= a; ++s)
            o.sub(i[a - s].clone().multiplyScalar(Hn(a, s) * n[s]));
          i[a] = o.divideScalar(n[0]);
        }
        return i;
      }
      function Wn(r, e, t, n, i) {
        const a = Zn(r, e, t, n, i);
        return Kn(a);
      }
      function or(r, e, t, n, i, a, o, s) {
        const l = et(r, a, t),
          c = et(e, o, n),
          f = Ft(l, a, r, t),
          u = Ft(c, o, e, n),
          h = [];
        for (let g = 0; g <= e; ++g) {
          h[g] = new Vector4(0, 0, 0, 0);
          for (let m = 0; m <= r; ++m) {
            const d = i[l - r + m][c - e + g].clone(),
              T = d.w;
            (d.x *= T),
              (d.y *= T),
              (d.z *= T),
              h[g].add(d.multiplyScalar(f[m]));
          }
        }
        const v = new Vector4(0, 0, 0, 0);
        for (let g = 0; g <= e; ++g) v.add(h[g].multiplyScalar(u[g]));
        v.divideScalar(v.w), s.set(v.x, v.y, v.z);
      }
      class fn extends p.Curve {
        constructor(e, t, n, i, a) {
          super();
          (this.degree = e),
            (this.knots = t),
            (this.controlPoints = []),
            (this.startKnot = i || 0),
            (this.endKnot = a || this.knots.length - 1);
          for (let o = 0; o < n.length; ++o) {
            const s = n[o];
            this.controlPoints[o] = new p.Vector4(s.x, s.y, s.z, s.w);
          }
        }
        getPoint(e, t = new p.Vector3()) {
          const n = t,
            i =
              this.knots[this.startKnot] +
              e * (this.knots[this.endKnot] - this.knots[this.startKnot]),
            a = jn(this.degree, this.knots, this.controlPoints, i);
          return a.w !== 1 && a.divideScalar(a.w), n.set(a.x, a.y, a.z);
        }
        getTangent(e, t = new p.Vector3()) {
          const n = t,
            i =
              this.knots[0] +
              e * (this.knots[this.knots.length - 1] - this.knots[0]),
            a = Wn(this.degree, this.knots, this.controlPoints, i, 1);
          return n.copy(a[1]).normalize(), n;
        }
      }
      let S, b, q;
      class Yn extends p.Loader {
        constructor(e) {
          super(e);
        }
        load(e, t, n, i) {
          const a = this,
            o = a.path === '' ? p.LoaderUtils.extractUrlBase(e) : a.path,
            s = new p.FileLoader(this.manager);
          s.setPath(a.path),
            s.setResponseType('arraybuffer'),
            s.setRequestHeader(a.requestHeader),
            s.setWithCredentials(a.withCredentials),
            s.load(
              e,
              function (l) {
                try {
                  t(a.parse(l, o));
                } catch (c) {
                  i ? i(c) : console.error(c), a.manager.itemError(e);
                }
              },
              n,
              i,
            );
        }
        parse(e, t) {
          if (_n(e)) S = new Nn().parse(e);
          else {
            const i = yn(e);
            if (!er(i)) throw new Error('THREE.FBXLoader: Unknown format.');
            if (vn(i) < 7e3)
              throw new Error(
                'THREE.FBXLoader: FBX version not supported, FileVersion: ' +
                  vn(i),
              );
            S = new Jn().parse(i);
          }
          const n = new p.TextureLoader(this.manager)
            .setPath(this.resourcePath || t)
            .setCrossOrigin(this.crossOrigin);
          return new Qn(n, this.manager).parse(S);
        }
      }
      class Qn {
        constructor(e, t) {
          (this.textureLoader = e), (this.manager = t);
        }
        parse() {
          b = this.parseConnections();
          const e = this.parseImages(),
            t = this.parseTextures(e),
            n = this.parseMaterials(t),
            i = this.parseDeformers(),
            a = new $n().parse(i);
          return this.parseScene(i, a, n), q;
        }
        parseConnections() {
          const e = new Map();
          return (
            'Connections' in S &&
              S.Connections.connections.forEach(function (n) {
                const i = n[0],
                  a = n[1],
                  o = n[2];
                e.has(i) || e.set(i, { parents: [], children: [] });
                const s = { ID: a, relationship: o };
                e.get(i).parents.push(s),
                  e.has(a) || e.set(a, { parents: [], children: [] });
                const l = { ID: i, relationship: o };
                e.get(a).children.push(l);
              }),
            e
          );
        }
        parseImages() {
          const e = {},
            t = {};
          if ('Video' in S.Objects) {
            const n = S.Objects.Video;
            for (const i in n) {
              const a = n[i],
                o = parseInt(i);
              if (((e[o] = a.RelativeFilename || a.Filename), 'Content' in a)) {
                const s =
                    a.Content instanceof ArrayBuffer &&
                    a.Content.byteLength > 0,
                  l = typeof a.Content == 'string' && a.Content !== '';
                if (s || l) {
                  const c = this.parseImage(n[i]);
                  t[a.RelativeFilename || a.Filename] = c;
                }
              }
            }
          }
          for (const n in e) {
            const i = e[n];
            t[i] !== void 0 ? (e[n] = t[i]) : (e[n] = e[n].split('\\').pop());
          }
          return e;
        }
        parseImage(e) {
          const t = e.Content,
            n = e.RelativeFilename || e.Filename,
            i = n.slice(n.lastIndexOf('.') + 1).toLowerCase();
          let a;
          switch (i) {
            case 'bmp':
              a = 'image/bmp';
              break;
            case 'jpg':
            case 'jpeg':
              a = 'image/jpeg';
              break;
            case 'png':
              a = 'image/png';
              break;
            case 'tif':
              a = 'image/tiff';
              break;
            case 'tga':
              this.manager.getHandler('.tga') === null &&
                console.warn('FBXLoader: TGA loader not found, skipping ', n),
                (a = 'image/tga');
              break;
            default:
              console.warn(
                'FBXLoader: Image type "' + i + '" is not supported.',
              );
              return;
          }
          if (typeof t == 'string') return 'data:' + a + ';base64,' + t;
          {
            const o = new Uint8Array(t);
            return window.URL.createObjectURL(new Blob([o], { type: a }));
          }
        }
        parseTextures(e) {
          const t = new Map();
          if ('Texture' in S.Objects) {
            const n = S.Objects.Texture;
            for (const i in n) {
              const a = this.parseTexture(n[i], e);
              t.set(parseInt(i), a);
            }
          }
          return t;
        }
        parseTexture(e, t) {
          const n = this.loadTexture(e, t);
          (n.ID = e.id), (n.name = e.attrName);
          const i = e.WrapModeU,
            a = e.WrapModeV,
            o = i !== void 0 ? i.value : 0,
            s = a !== void 0 ? a.value : 0;
          if (
            ((n.wrapS = o === 0 ? p.RepeatWrapping : p.ClampToEdgeWrapping),
            (n.wrapT = s === 0 ? p.RepeatWrapping : p.ClampToEdgeWrapping),
            'Scaling' in e)
          ) {
            const l = e.Scaling.value;
            (n.repeat.x = l[0]), (n.repeat.y = l[1]);
          }
          if ('Translation' in e) {
            const l = e.Translation.value;
            (n.offset.x = l[0]), (n.offset.y = l[1]);
          }
          return n;
        }
        loadTexture(e, t) {
          let n;
          const i = this.textureLoader.path,
            a = b.get(e.id).children;
          a !== void 0 &&
            a.length > 0 &&
            t[a[0].ID] !== void 0 &&
            ((n = t[a[0].ID]),
            (n.indexOf('blob:') === 0 || n.indexOf('data:') === 0) &&
              this.textureLoader.setPath(void 0));
          let o;
          const s = e.FileName.slice(-3).toLowerCase();
          if (s === 'tga') {
            const l = this.manager.getHandler('.tga');
            l === null
              ? (console.warn(
                  'FBXLoader: TGA loader not found, creating placeholder texture for',
                  e.RelativeFilename,
                ),
                (o = new p.Texture()))
              : (l.setPath(this.textureLoader.path), (o = l.load(n)));
          } else
            s === 'psd'
              ? (console.warn(
                  'FBXLoader: PSD textures are not supported, creating placeholder texture for',
                  e.RelativeFilename,
                ),
                (o = new p.Texture()))
              : (o = this.textureLoader.load(n));
          return this.textureLoader.setPath(i), o;
        }
        parseMaterials(e) {
          const t = new Map();
          if ('Material' in S.Objects) {
            const n = S.Objects.Material;
            for (const i in n) {
              const a = this.parseMaterial(n[i], e);
              a !== null && t.set(parseInt(i), a);
            }
          }
          return t;
        }
        parseMaterial(e, t) {
          const n = e.id,
            i = e.attrName;
          let a = e.ShadingModel;
          if ((typeof a == 'object' && (a = a.value), !b.has(n))) return null;
          const o = this.parseParameters(e, t, n);
          let s;
          switch (a.toLowerCase()) {
            case 'phong':
              s = new p.MeshPhongMaterial();
              break;
            case 'lambert':
              s = new p.MeshLambertMaterial();
              break;
            default:
              console.warn(
                'THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',
                a,
              ),
                (s = new p.MeshPhongMaterial());
              break;
          }
          return s.setValues(o), (s.name = i), s;
        }
        parseParameters(e, t, n) {
          const i = {};
          e.BumpFactor && (i.bumpScale = e.BumpFactor.value),
            e.Diffuse
              ? (i.color = new p.Color().fromArray(e.Diffuse.value))
              : e.DiffuseColor &&
                (e.DiffuseColor.type === 'Color' ||
                  e.DiffuseColor.type === 'ColorRGB') &&
                (i.color = new p.Color().fromArray(e.DiffuseColor.value)),
            e.DisplacementFactor &&
              (i.displacementScale = e.DisplacementFactor.value),
            e.Emissive
              ? (i.emissive = new p.Color().fromArray(e.Emissive.value))
              : e.EmissiveColor &&
                (e.EmissiveColor.type === 'Color' ||
                  e.EmissiveColor.type === 'ColorRGB') &&
                (i.emissive = new p.Color().fromArray(e.EmissiveColor.value)),
            e.EmissiveFactor &&
              (i.emissiveIntensity = parseFloat(e.EmissiveFactor.value)),
            e.Opacity && (i.opacity = parseFloat(e.Opacity.value)),
            i.opacity < 1 && (i.transparent = !0),
            e.ReflectionFactor && (i.reflectivity = e.ReflectionFactor.value),
            e.Shininess && (i.shininess = e.Shininess.value),
            e.Specular
              ? (i.specular = new p.Color().fromArray(e.Specular.value))
              : e.SpecularColor &&
                e.SpecularColor.type === 'Color' &&
                (i.specular = new p.Color().fromArray(e.SpecularColor.value));
          const a = this;
          return (
            b.get(n).children.forEach(function (o) {
              const s = o.relationship;
              switch (s) {
                case 'Bump':
                  i.bumpMap = a.getTexture(t, o.ID);
                  break;
                case 'Maya|TEX_ao_map':
                  i.aoMap = a.getTexture(t, o.ID);
                  break;
                case 'DiffuseColor':
                case 'Maya|TEX_color_map':
                  (i.map = a.getTexture(t, o.ID)),
                    i.map !== void 0 && (i.map.encoding = p.sRGBEncoding);
                  break;
                case 'DisplacementColor':
                  i.displacementMap = a.getTexture(t, o.ID);
                  break;
                case 'EmissiveColor':
                  (i.emissiveMap = a.getTexture(t, o.ID)),
                    i.emissiveMap !== void 0 &&
                      (i.emissiveMap.encoding = p.sRGBEncoding);
                  break;
                case 'NormalMap':
                case 'Maya|TEX_normal_map':
                  i.normalMap = a.getTexture(t, o.ID);
                  break;
                case 'ReflectionColor':
                  (i.envMap = a.getTexture(t, o.ID)),
                    i.envMap !== void 0 &&
                      ((i.envMap.mapping = p.EquirectangularReflectionMapping),
                      (i.envMap.encoding = p.sRGBEncoding));
                  break;
                case 'SpecularColor':
                  (i.specularMap = a.getTexture(t, o.ID)),
                    i.specularMap !== void 0 &&
                      (i.specularMap.encoding = p.sRGBEncoding);
                  break;
                case 'TransparentColor':
                case 'TransparencyFactor':
                  (i.alphaMap = a.getTexture(t, o.ID)), (i.transparent = !0);
                  break;
                case 'AmbientColor':
                case 'ShininessExponent':
                case 'SpecularFactor':
                case 'VectorDisplacementColor':
                default:
                  console.warn(
                    'THREE.FBXLoader: %s map is not supported in three.js, skipping texture.',
                    s,
                  );
                  break;
              }
            }),
            i
          );
        }
        getTexture(e, t) {
          return (
            'LayeredTexture' in S.Objects &&
              t in S.Objects.LayeredTexture &&
              (console.warn(
                'THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer.',
              ),
              (t = b.get(t).children[0].ID)),
            e.get(t)
          );
        }
        parseDeformers() {
          const e = {},
            t = {};
          if ('Deformer' in S.Objects) {
            const n = S.Objects.Deformer;
            for (const i in n) {
              const a = n[i],
                o = b.get(parseInt(i));
              if (a.attrType === 'Skin') {
                const s = this.parseSkeleton(o, n);
                (s.ID = i),
                  o.parents.length > 1 &&
                    console.warn(
                      'THREE.FBXLoader: skeleton attached to more than one geometry is not supported.',
                    ),
                  (s.geometryID = o.parents[0].ID),
                  (e[i] = s);
              } else if (a.attrType === 'BlendShape') {
                const s = { id: i };
                (s.rawTargets = this.parseMorphTargets(o, n)),
                  (s.id = i),
                  o.parents.length > 1 &&
                    console.warn(
                      'THREE.FBXLoader: morph target attached to more than one geometry is not supported.',
                    ),
                  (t[i] = s);
              }
            }
          }
          return { skeletons: e, morphTargets: t };
        }
        parseSkeleton(e, t) {
          const n = [];
          return (
            e.children.forEach(function (i) {
              const a = t[i.ID];
              if (a.attrType !== 'Cluster') return;
              const o = {
                ID: i.ID,
                indices: [],
                weights: [],
                transformLink: new p.Matrix4().fromArray(a.TransformLink.a),
              };
              'Indexes' in a &&
                ((o.indices = a.Indexes.a), (o.weights = a.Weights.a)),
                n.push(o);
            }),
            { rawBones: n, bones: [] }
          );
        }
        parseMorphTargets(e, t) {
          const n = [];
          for (let i = 0; i < e.children.length; i++) {
            const a = e.children[i],
              o = t[a.ID],
              s = {
                name: o.attrName,
                initialWeight: o.DeformPercent,
                id: o.id,
                fullWeights: o.FullWeights.a,
              };
            if (o.attrType !== 'BlendShapeChannel') return;
            (s.geoID = b.get(parseInt(a.ID)).children.filter(function (l) {
              return l.relationship === void 0;
            })[0].ID),
              n.push(s);
          }
          return n;
        }
        parseScene(e, t, n) {
          q = new p.Group();
          const i = this.parseModels(e.skeletons, t, n),
            a = S.Objects.Model,
            o = this;
          i.forEach(function (l) {
            const c = a[l.ID];
            o.setLookAtProperties(l, c),
              b.get(l.ID).parents.forEach(function (u) {
                const h = i.get(u.ID);
                h !== void 0 && h.add(l);
              }),
              l.parent === null && q.add(l);
          }),
            this.bindSkeleton(e.skeletons, t, i),
            this.createAmbientLight(),
            q.traverse(function (l) {
              if (l.userData.transformData) {
                l.parent &&
                  ((l.userData.transformData.parentMatrix = l.parent.matrix),
                  (l.userData.transformData.parentMatrixWorld =
                    l.parent.matrixWorld));
                const c = gn(l.userData.transformData);
                l.applyMatrix4(c), l.updateWorldMatrix();
              }
            });
          const s = new qn().parse();
          q.children.length === 1 &&
            q.children[0].isGroup &&
            ((q.children[0].animations = s), (q = q.children[0])),
            (q.animations = s);
        }
        parseModels(e, t, n) {
          const i = new Map(),
            a = S.Objects.Model;
          for (const o in a) {
            const s = parseInt(o),
              l = a[o],
              c = b.get(s);
            let f = this.buildSkeleton(c, e, s, l.attrName);
            if (!f) {
              switch (l.attrType) {
                case 'Camera':
                  f = this.createCamera(c);
                  break;
                case 'Light':
                  f = this.createLight(c);
                  break;
                case 'Mesh':
                  f = this.createMesh(c, t, n);
                  break;
                case 'NurbsCurve':
                  f = this.createCurve(c, t);
                  break;
                case 'LimbNode':
                case 'Root':
                  f = new p.Bone();
                  break;
                case 'Null':
                default:
                  f = new p.Group();
                  break;
              }
              (f.name = l.attrName
                ? p.PropertyBinding.sanitizeNodeName(l.attrName)
                : ''),
                (f.ID = s);
            }
            this.getTransformData(f, l), i.set(s, f);
          }
          return i;
        }
        buildSkeleton(e, t, n, i) {
          let a = null;
          return (
            e.parents.forEach(function (o) {
              for (const s in t) {
                const l = t[s];
                l.rawBones.forEach(function (c, f) {
                  if (c.ID === o.ID) {
                    const u = a;
                    (a = new p.Bone()),
                      a.matrixWorld.copy(c.transformLink),
                      (a.name = i ? p.PropertyBinding.sanitizeNodeName(i) : ''),
                      (a.ID = n),
                      (l.bones[f] = a),
                      u !== null && a.add(u);
                  }
                });
              }
            }),
            a
          );
        }
        createCamera(e) {
          let t, n;
          if (
            (e.children.forEach(function (i) {
              const a = S.Objects.NodeAttribute[i.ID];
              a !== void 0 && (n = a);
            }),
            n === void 0)
          )
            t = new p.Object3D();
          else {
            let i = 0;
            n.CameraProjectionType !== void 0 &&
              n.CameraProjectionType.value === 1 &&
              (i = 1);
            let a = 1;
            n.NearPlane !== void 0 && (a = n.NearPlane.value / 1e3);
            let o = 1e3;
            n.FarPlane !== void 0 && (o = n.FarPlane.value / 1e3);
            let s = window.innerWidth,
              l = window.innerHeight;
            n.AspectWidth !== void 0 &&
              n.AspectHeight !== void 0 &&
              ((s = n.AspectWidth.value), (l = n.AspectHeight.value));
            const c = s / l;
            let f = 45;
            n.FieldOfView !== void 0 && (f = n.FieldOfView.value);
            const u = n.FocalLength ? n.FocalLength.value : null;
            switch (i) {
              case 0:
                (t = new p.PerspectiveCamera(f, c, a, o)),
                  u !== null && t.setFocalLength(u);
                break;
              case 1:
                t = new p.OrthographicCamera(
                  -s / 2,
                  s / 2,
                  l / 2,
                  -l / 2,
                  a,
                  o,
                );
                break;
              default:
                console.warn('THREE.FBXLoader: Unknown camera type ' + i + '.'),
                  (t = new p.Object3D());
                break;
            }
          }
          return t;
        }
        createLight(e) {
          let t, n;
          if (
            (e.children.forEach(function (i) {
              const a = S.Objects.NodeAttribute[i.ID];
              a !== void 0 && (n = a);
            }),
            n === void 0)
          )
            t = new p.Object3D();
          else {
            let i;
            n.LightType === void 0 ? (i = 0) : (i = n.LightType.value);
            let a = 16777215;
            n.Color !== void 0 && (a = new p.Color().fromArray(n.Color.value));
            let o = n.Intensity === void 0 ? 1 : n.Intensity.value / 100;
            n.CastLightOnObject !== void 0 &&
              n.CastLightOnObject.value === 0 &&
              (o = 0);
            let s = 0;
            n.FarAttenuationEnd !== void 0 &&
              (n.EnableFarAttenuation !== void 0 &&
              n.EnableFarAttenuation.value === 0
                ? (s = 0)
                : (s = n.FarAttenuationEnd.value));
            const l = 1;
            switch (i) {
              case 0:
                t = new p.PointLight(a, o, s, l);
                break;
              case 1:
                t = new p.DirectionalLight(a, o);
                break;
              case 2:
                let c = Math.PI / 3;
                n.InnerAngle !== void 0 &&
                  (c = p.MathUtils.degToRad(n.InnerAngle.value));
                let f = 0;
                n.OuterAngle !== void 0 &&
                  ((f = p.MathUtils.degToRad(n.OuterAngle.value)),
                  (f = Math.max(f, 1))),
                  (t = new p.SpotLight(a, o, s, c, f, l));
                break;
              default:
                console.warn(
                  'THREE.FBXLoader: Unknown light type ' +
                    n.LightType.value +
                    ', defaulting to a PointLight.',
                ),
                  (t = new p.PointLight(a, o));
                break;
            }
            n.CastShadows !== void 0 &&
              n.CastShadows.value === 1 &&
              (t.castShadow = !0);
          }
          return t;
        }
        createMesh(e, t, n) {
          let i,
            a = null,
            o = null;
          const s = [];
          return (
            e.children.forEach(function (l) {
              t.has(l.ID) && (a = t.get(l.ID)),
                n.has(l.ID) && s.push(n.get(l.ID));
            }),
            s.length > 1
              ? (o = s)
              : s.length > 0
              ? (o = s[0])
              : ((o = new p.MeshPhongMaterial({ color: 13421772 })), s.push(o)),
            'color' in a.attributes &&
              s.forEach(function (l) {
                l.vertexColors = !0;
              }),
            a.FBX_Deformer
              ? ((i = new p.SkinnedMesh(a, o)), i.normalizeSkinWeights())
              : (i = new p.Mesh(a, o)),
            i
          );
        }
        createCurve(e, t) {
          const n = e.children.reduce(function (a, o) {
              return t.has(o.ID) && (a = t.get(o.ID)), a;
            }, null),
            i = new p.LineBasicMaterial({ color: 3342591, linewidth: 1 });
          return new p.Line(n, i);
        }
        getTransformData(e, t) {
          const n = {};
          'InheritType' in t && (n.inheritType = parseInt(t.InheritType.value)),
            'RotationOrder' in t
              ? (n.eulerOrder = mn(t.RotationOrder.value))
              : (n.eulerOrder = 'ZYX'),
            'Lcl_Translation' in t && (n.translation = t.Lcl_Translation.value),
            'PreRotation' in t && (n.preRotation = t.PreRotation.value),
            'Lcl_Rotation' in t && (n.rotation = t.Lcl_Rotation.value),
            'PostRotation' in t && (n.postRotation = t.PostRotation.value),
            'Lcl_Scaling' in t && (n.scale = t.Lcl_Scaling.value),
            'ScalingOffset' in t && (n.scalingOffset = t.ScalingOffset.value),
            'ScalingPivot' in t && (n.scalingPivot = t.ScalingPivot.value),
            'RotationOffset' in t &&
              (n.rotationOffset = t.RotationOffset.value),
            'RotationPivot' in t && (n.rotationPivot = t.RotationPivot.value),
            (e.userData.transformData = n);
        }
        setLookAtProperties(e, t) {
          'LookAtProperty' in t &&
            b.get(e.ID).children.forEach(function (i) {
              if (i.relationship === 'LookAtProperty') {
                const a = S.Objects.Model[i.ID];
                if ('Lcl_Translation' in a) {
                  const o = a.Lcl_Translation.value;
                  e.target !== void 0
                    ? (e.target.position.fromArray(o), q.add(e.target))
                    : e.lookAt(new p.Vector3().fromArray(o));
                }
              }
            });
        }
        bindSkeleton(e, t, n) {
          const i = this.parsePoseNodes();
          for (const a in e) {
            const o = e[a];
            b.get(parseInt(o.ID)).parents.forEach(function (l) {
              if (t.has(l.ID)) {
                const c = l.ID;
                b.get(c).parents.forEach(function (u) {
                  n.has(u.ID) &&
                    n.get(u.ID).bind(new p.Skeleton(o.bones), i[u.ID]);
                });
              }
            });
          }
        }
        parsePoseNodes() {
          const e = {};
          if ('Pose' in S.Objects) {
            const t = S.Objects.Pose;
            for (const n in t)
              if (t[n].attrType === 'BindPose' && t[n].NbPoseNodes > 0) {
                const i = t[n].PoseNode;
                Array.isArray(i)
                  ? i.forEach(function (a) {
                      e[a.Node] = new p.Matrix4().fromArray(a.Matrix.a);
                    })
                  : (e[i.Node] = new p.Matrix4().fromArray(i.Matrix.a));
              }
          }
          return e;
        }
        createAmbientLight() {
          if ('GlobalSettings' in S && 'AmbientColor' in S.GlobalSettings) {
            const e = S.GlobalSettings.AmbientColor.value,
              t = e[0],
              n = e[1],
              i = e[2];
            if (t !== 0 || n !== 0 || i !== 0) {
              const a = new p.Color(t, n, i);
              q.add(new p.AmbientLight(a, 1));
            }
          }
        }
      }
      class $n {
        parse(e) {
          const t = new Map();
          if ('Geometry' in S.Objects) {
            const n = S.Objects.Geometry;
            for (const i in n) {
              const a = b.get(parseInt(i)),
                o = this.parseGeometry(a, n[i], e);
              t.set(parseInt(i), o);
            }
          }
          return t;
        }
        parseGeometry(e, t, n) {
          switch (t.attrType) {
            case 'Mesh':
              return this.parseMeshGeometry(e, t, n);
            case 'NurbsCurve':
              return this.parseNurbsGeometry(t);
          }
        }
        parseMeshGeometry(e, t, n) {
          const i = n.skeletons,
            a = [],
            o = e.parents.map(function (u) {
              return S.Objects.Model[u.ID];
            });
          if (o.length === 0) return;
          const s = e.children.reduce(function (u, h) {
            return i[h.ID] !== void 0 && (u = i[h.ID]), u;
          }, null);
          e.children.forEach(function (u) {
            n.morphTargets[u.ID] !== void 0 && a.push(n.morphTargets[u.ID]);
          });
          const l = o[0],
            c = {};
          'RotationOrder' in l && (c.eulerOrder = mn(l.RotationOrder.value)),
            'InheritType' in l &&
              (c.inheritType = parseInt(l.InheritType.value)),
            'GeometricTranslation' in l &&
              (c.translation = l.GeometricTranslation.value),
            'GeometricRotation' in l &&
              (c.rotation = l.GeometricRotation.value),
            'GeometricScaling' in l && (c.scale = l.GeometricScaling.value);
          const f = gn(c);
          return this.genGeometry(t, s, a, f);
        }
        genGeometry(e, t, n, i) {
          const a = new p.BufferGeometry();
          e.attrName && (a.name = e.attrName);
          const o = this.parseGeoNode(e, t),
            s = this.genBuffers(o),
            l = new p.Float32BufferAttribute(s.vertex, 3);
          if (
            (l.applyMatrix4(i),
            a.setAttribute('position', l),
            s.colors.length > 0 &&
              a.setAttribute(
                'color',
                new p.Float32BufferAttribute(s.colors, 3),
              ),
            t &&
              (a.setAttribute(
                'skinIndex',
                new p.Uint16BufferAttribute(s.weightsIndices, 4),
              ),
              a.setAttribute(
                'skinWeight',
                new p.Float32BufferAttribute(s.vertexWeights, 4),
              ),
              (a.FBX_Deformer = t)),
            s.normal.length > 0)
          ) {
            const c = new p.Matrix3().getNormalMatrix(i),
              f = new p.Float32BufferAttribute(s.normal, 3);
            f.applyNormalMatrix(c), a.setAttribute('normal', f);
          }
          if (
            (s.uvs.forEach(function (c, f) {
              let u = 'uv' + (f + 1).toString();
              f === 0 && (u = 'uv'),
                a.setAttribute(u, new p.Float32BufferAttribute(s.uvs[f], 2));
            }),
            o.material && o.material.mappingType !== 'AllSame')
          ) {
            let c = s.materialIndex[0],
              f = 0;
            if (
              (s.materialIndex.forEach(function (u, h) {
                u !== c && (a.addGroup(f, h - f, c), (c = u), (f = h));
              }),
              a.groups.length > 0)
            ) {
              const u = a.groups[a.groups.length - 1],
                h = u.start + u.count;
              h !== s.materialIndex.length &&
                a.addGroup(h, s.materialIndex.length - h, c);
            }
            a.groups.length === 0 &&
              a.addGroup(0, s.materialIndex.length, s.materialIndex[0]);
          }
          return this.addMorphTargets(a, e, n, i), a;
        }
        parseGeoNode(e, t) {
          const n = {};
          if (
            ((n.vertexPositions = e.Vertices !== void 0 ? e.Vertices.a : []),
            (n.vertexIndices =
              e.PolygonVertexIndex !== void 0 ? e.PolygonVertexIndex.a : []),
            e.LayerElementColor &&
              (n.color = this.parseVertexColors(e.LayerElementColor[0])),
            e.LayerElementMaterial &&
              (n.material = this.parseMaterialIndices(
                e.LayerElementMaterial[0],
              )),
            e.LayerElementNormal &&
              (n.normal = this.parseNormals(e.LayerElementNormal[0])),
            e.LayerElementUV)
          ) {
            n.uv = [];
            let i = 0;
            for (; e.LayerElementUV[i]; )
              e.LayerElementUV[i].UV &&
                n.uv.push(this.parseUVs(e.LayerElementUV[i])),
                i++;
          }
          return (
            (n.weightTable = {}),
            t !== null &&
              ((n.skeleton = t),
              t.rawBones.forEach(function (i, a) {
                i.indices.forEach(function (o, s) {
                  n.weightTable[o] === void 0 && (n.weightTable[o] = []),
                    n.weightTable[o].push({ id: a, weight: i.weights[s] });
                });
              })),
            n
          );
        }
        genBuffers(e) {
          const t = {
            vertex: [],
            normal: [],
            colors: [],
            uvs: [],
            materialIndex: [],
            vertexWeights: [],
            weightsIndices: [],
          };
          let n = 0,
            i = 0,
            a = !1,
            o = [],
            s = [],
            l = [],
            c = [],
            f = [],
            u = [];
          const h = this;
          return (
            e.vertexIndices.forEach(function (v, g) {
              let m,
                d = !1;
              v < 0 && ((v = v ^ -1), (d = !0));
              let T = [],
                x = [];
              if ((o.push(v * 3, v * 3 + 1, v * 3 + 2), e.color)) {
                const y = tt(g, n, v, e.color);
                l.push(y[0], y[1], y[2]);
              }
              if (e.skeleton) {
                if (
                  (e.weightTable[v] !== void 0 &&
                    e.weightTable[v].forEach(function (y) {
                      x.push(y.weight), T.push(y.id);
                    }),
                  x.length > 4)
                ) {
                  a ||
                    (console.warn(
                      'THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.',
                    ),
                    (a = !0));
                  const y = [0, 0, 0, 0],
                    A = [0, 0, 0, 0];
                  x.forEach(function (D, P) {
                    let I = D,
                      w = T[P];
                    A.forEach(function (O, M, X) {
                      if (I > O) {
                        (X[M] = I), (I = O);
                        const L = y[M];
                        (y[M] = w), (w = L);
                      }
                    });
                  }),
                    (T = y),
                    (x = A);
                }
                for (; x.length < 4; ) x.push(0), T.push(0);
                for (let y = 0; y < 4; ++y) f.push(x[y]), u.push(T[y]);
              }
              if (e.normal) {
                const y = tt(g, n, v, e.normal);
                s.push(y[0], y[1], y[2]);
              }
              e.material &&
                e.material.mappingType !== 'AllSame' &&
                (m = tt(g, n, v, e.material)[0]),
                e.uv &&
                  e.uv.forEach(function (y, A) {
                    const D = tt(g, n, v, y);
                    c[A] === void 0 && (c[A] = []),
                      c[A].push(D[0]),
                      c[A].push(D[1]);
                  }),
                i++,
                d &&
                  (h.genFace(t, e, o, m, s, l, c, f, u, i),
                  n++,
                  (i = 0),
                  (o = []),
                  (s = []),
                  (l = []),
                  (c = []),
                  (f = []),
                  (u = []));
            }),
            t
          );
        }
        genFace(e, t, n, i, a, o, s, l, c, f) {
          for (let u = 2; u < f; u++)
            e.vertex.push(t.vertexPositions[n[0]]),
              e.vertex.push(t.vertexPositions[n[1]]),
              e.vertex.push(t.vertexPositions[n[2]]),
              e.vertex.push(t.vertexPositions[n[(u - 1) * 3]]),
              e.vertex.push(t.vertexPositions[n[(u - 1) * 3 + 1]]),
              e.vertex.push(t.vertexPositions[n[(u - 1) * 3 + 2]]),
              e.vertex.push(t.vertexPositions[n[u * 3]]),
              e.vertex.push(t.vertexPositions[n[u * 3 + 1]]),
              e.vertex.push(t.vertexPositions[n[u * 3 + 2]]),
              t.skeleton &&
                (e.vertexWeights.push(l[0]),
                e.vertexWeights.push(l[1]),
                e.vertexWeights.push(l[2]),
                e.vertexWeights.push(l[3]),
                e.vertexWeights.push(l[(u - 1) * 4]),
                e.vertexWeights.push(l[(u - 1) * 4 + 1]),
                e.vertexWeights.push(l[(u - 1) * 4 + 2]),
                e.vertexWeights.push(l[(u - 1) * 4 + 3]),
                e.vertexWeights.push(l[u * 4]),
                e.vertexWeights.push(l[u * 4 + 1]),
                e.vertexWeights.push(l[u * 4 + 2]),
                e.vertexWeights.push(l[u * 4 + 3]),
                e.weightsIndices.push(c[0]),
                e.weightsIndices.push(c[1]),
                e.weightsIndices.push(c[2]),
                e.weightsIndices.push(c[3]),
                e.weightsIndices.push(c[(u - 1) * 4]),
                e.weightsIndices.push(c[(u - 1) * 4 + 1]),
                e.weightsIndices.push(c[(u - 1) * 4 + 2]),
                e.weightsIndices.push(c[(u - 1) * 4 + 3]),
                e.weightsIndices.push(c[u * 4]),
                e.weightsIndices.push(c[u * 4 + 1]),
                e.weightsIndices.push(c[u * 4 + 2]),
                e.weightsIndices.push(c[u * 4 + 3])),
              t.color &&
                (e.colors.push(o[0]),
                e.colors.push(o[1]),
                e.colors.push(o[2]),
                e.colors.push(o[(u - 1) * 3]),
                e.colors.push(o[(u - 1) * 3 + 1]),
                e.colors.push(o[(u - 1) * 3 + 2]),
                e.colors.push(o[u * 3]),
                e.colors.push(o[u * 3 + 1]),
                e.colors.push(o[u * 3 + 2])),
              t.material &&
                t.material.mappingType !== 'AllSame' &&
                (e.materialIndex.push(i),
                e.materialIndex.push(i),
                e.materialIndex.push(i)),
              t.normal &&
                (e.normal.push(a[0]),
                e.normal.push(a[1]),
                e.normal.push(a[2]),
                e.normal.push(a[(u - 1) * 3]),
                e.normal.push(a[(u - 1) * 3 + 1]),
                e.normal.push(a[(u - 1) * 3 + 2]),
                e.normal.push(a[u * 3]),
                e.normal.push(a[u * 3 + 1]),
                e.normal.push(a[u * 3 + 2])),
              t.uv &&
                t.uv.forEach(function (h, v) {
                  e.uvs[v] === void 0 && (e.uvs[v] = []),
                    e.uvs[v].push(s[v][0]),
                    e.uvs[v].push(s[v][1]),
                    e.uvs[v].push(s[v][(u - 1) * 2]),
                    e.uvs[v].push(s[v][(u - 1) * 2 + 1]),
                    e.uvs[v].push(s[v][u * 2]),
                    e.uvs[v].push(s[v][u * 2 + 1]);
                });
        }
        addMorphTargets(e, t, n, i) {
          if (n.length === 0) return;
          (e.morphTargetsRelative = !0), (e.morphAttributes.position = []);
          const a = this;
          n.forEach(function (o) {
            o.rawTargets.forEach(function (s) {
              const l = S.Objects.Geometry[s.geoID];
              l !== void 0 && a.genMorphGeometry(e, t, l, i, s.name);
            });
          });
        }
        genMorphGeometry(e, t, n, i, a) {
          const o =
              t.PolygonVertexIndex !== void 0 ? t.PolygonVertexIndex.a : [],
            s = n.Vertices !== void 0 ? n.Vertices.a : [],
            l = n.Indexes !== void 0 ? n.Indexes.a : [],
            c = e.attributes.position.count * 3,
            f = new Float32Array(c);
          for (let g = 0; g < l.length; g++) {
            const m = l[g] * 3;
            (f[m] = s[g * 3]),
              (f[m + 1] = s[g * 3 + 1]),
              (f[m + 2] = s[g * 3 + 2]);
          }
          const u = { vertexIndices: o, vertexPositions: f },
            h = this.genBuffers(u),
            v = new p.Float32BufferAttribute(h.vertex, 3);
          (v.name = a || n.attrName),
            v.applyMatrix4(i),
            e.morphAttributes.position.push(v);
        }
        parseNormals(e) {
          const t = e.MappingInformationType,
            n = e.ReferenceInformationType,
            i = e.Normals.a;
          let a = [];
          return (
            n === 'IndexToDirect' &&
              ('NormalIndex' in e
                ? (a = e.NormalIndex.a)
                : 'NormalsIndex' in e && (a = e.NormalsIndex.a)),
            {
              dataSize: 3,
              buffer: i,
              indices: a,
              mappingType: t,
              referenceType: n,
            }
          );
        }
        parseUVs(e) {
          const t = e.MappingInformationType,
            n = e.ReferenceInformationType,
            i = e.UV.a;
          let a = [];
          return (
            n === 'IndexToDirect' && (a = e.UVIndex.a),
            {
              dataSize: 2,
              buffer: i,
              indices: a,
              mappingType: t,
              referenceType: n,
            }
          );
        }
        parseVertexColors(e) {
          const t = e.MappingInformationType,
            n = e.ReferenceInformationType,
            i = e.Colors.a;
          let a = [];
          return (
            n === 'IndexToDirect' && (a = e.ColorIndex.a),
            {
              dataSize: 4,
              buffer: i,
              indices: a,
              mappingType: t,
              referenceType: n,
            }
          );
        }
        parseMaterialIndices(e) {
          const t = e.MappingInformationType,
            n = e.ReferenceInformationType;
          if (t === 'NoMappingInformation')
            return {
              dataSize: 1,
              buffer: [0],
              indices: [0],
              mappingType: 'AllSame',
              referenceType: n,
            };
          const i = e.Materials.a,
            a = [];
          for (let o = 0; o < i.length; ++o) a.push(o);
          return {
            dataSize: 1,
            buffer: i,
            indices: a,
            mappingType: t,
            referenceType: n,
          };
        }
        parseNurbsGeometry(e) {
          if (fn === void 0)
            return (
              console.error(
                'THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry.',
              ),
              new p.BufferGeometry()
            );
          const t = parseInt(e.Order);
          if (isNaN(t))
            return (
              console.error(
                'THREE.FBXLoader: Invalid Order %s given for geometry ID: %s',
                e.Order,
                e.id,
              ),
              new p.BufferGeometry()
            );
          const n = t - 1,
            i = e.KnotVector.a,
            a = [],
            o = e.Points.a;
          for (let u = 0, h = o.length; u < h; u += 4)
            a.push(new p.Vector4().fromArray(o, u));
          let s, l;
          if (e.Form === 'Closed') a.push(a[0]);
          else if (e.Form === 'Periodic') {
            (s = n), (l = i.length - 1 - s);
            for (let u = 0; u < n; ++u) a.push(a[u]);
          }
          const f = new fn(n, i, a, s, l).getPoints(a.length * 12);
          return new p.BufferGeometry().setFromPoints(f);
        }
      }
      class qn {
        parse() {
          const e = [],
            t = this.parseClips();
          if (t !== void 0)
            for (const n in t) {
              const i = t[n],
                a = this.addClip(i);
              e.push(a);
            }
          return e;
        }
        parseClips() {
          if (S.Objects.AnimationCurve === void 0) return;
          const e = this.parseAnimationCurveNodes();
          this.parseAnimationCurves(e);
          const t = this.parseAnimationLayers(e);
          return this.parseAnimStacks(t);
        }
        parseAnimationCurveNodes() {
          const e = S.Objects.AnimationCurveNode,
            t = new Map();
          for (const n in e) {
            const i = e[n];
            if (i.attrName.match(/S|R|T|DeformPercent/) !== null) {
              const a = { id: i.id, attr: i.attrName, curves: {} };
              t.set(a.id, a);
            }
          }
          return t;
        }
        parseAnimationCurves(e) {
          const t = S.Objects.AnimationCurve;
          for (const n in t) {
            const i = {
                id: t[n].id,
                times: t[n].KeyTime.a.map(tr),
                values: t[n].KeyValueFloat.a,
              },
              a = b.get(i.id);
            if (a !== void 0) {
              const o = a.parents[0].ID,
                s = a.parents[0].relationship;
              s.match(/X/)
                ? (e.get(o).curves.x = i)
                : s.match(/Y/)
                ? (e.get(o).curves.y = i)
                : s.match(/Z/)
                ? (e.get(o).curves.z = i)
                : s.match(/d|DeformPercent/) &&
                  e.has(o) &&
                  (e.get(o).curves.morph = i);
            }
          }
        }
        parseAnimationLayers(e) {
          const t = S.Objects.AnimationLayer,
            n = new Map();
          for (const i in t) {
            const a = [],
              o = b.get(parseInt(i));
            o !== void 0 &&
              (o.children.forEach(function (l, c) {
                if (e.has(l.ID)) {
                  const f = e.get(l.ID);
                  if (
                    f.curves.x !== void 0 ||
                    f.curves.y !== void 0 ||
                    f.curves.z !== void 0
                  ) {
                    if (a[c] === void 0) {
                      const u = b.get(l.ID).parents.filter(function (h) {
                        return h.relationship !== void 0;
                      })[0].ID;
                      if (u !== void 0) {
                        const h = S.Objects.Model[u.toString()];
                        if (h === void 0) {
                          console.warn(
                            'THREE.FBXLoader: Encountered a unused curve.',
                            l,
                          );
                          return;
                        }
                        const v = {
                          modelName: h.attrName
                            ? p.PropertyBinding.sanitizeNodeName(h.attrName)
                            : '',
                          ID: h.id,
                          initialPosition: [0, 0, 0],
                          initialRotation: [0, 0, 0],
                          initialScale: [1, 1, 1],
                        };
                        q.traverse(function (g) {
                          g.ID === h.id &&
                            ((v.transform = g.matrix),
                            g.userData.transformData &&
                              (v.eulerOrder =
                                g.userData.transformData.eulerOrder));
                        }),
                          v.transform || (v.transform = new p.Matrix4()),
                          'PreRotation' in h &&
                            (v.preRotation = h.PreRotation.value),
                          'PostRotation' in h &&
                            (v.postRotation = h.PostRotation.value),
                          (a[c] = v);
                      }
                    }
                    a[c] && (a[c][f.attr] = f);
                  } else if (f.curves.morph !== void 0) {
                    if (a[c] === void 0) {
                      const u = b.get(l.ID).parents.filter(function (T) {
                          return T.relationship !== void 0;
                        })[0].ID,
                        h = b.get(u).parents[0].ID,
                        v = b.get(h).parents[0].ID,
                        g = b.get(v).parents[0].ID,
                        m = S.Objects.Model[g],
                        d = {
                          modelName: m.attrName
                            ? p.PropertyBinding.sanitizeNodeName(m.attrName)
                            : '',
                          morphName: S.Objects.Deformer[u].attrName,
                        };
                      a[c] = d;
                    }
                    a[c][f.attr] = f;
                  }
                }
              }),
              n.set(parseInt(i), a));
          }
          return n;
        }
        parseAnimStacks(e) {
          const t = S.Objects.AnimationStack,
            n = {};
          for (const i in t) {
            const a = b.get(parseInt(i)).children;
            a.length > 1 &&
              console.warn(
                'THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.',
              );
            const o = e.get(a[0].ID);
            n[i] = { name: t[i].attrName, layer: o };
          }
          return n;
        }
        addClip(e) {
          let t = [];
          const n = this;
          return (
            e.layer.forEach(function (i) {
              t = t.concat(n.generateTracks(i));
            }),
            new p.AnimationClip(e.name, -1, t)
          );
        }
        generateTracks(e) {
          const t = [];
          let n = new p.Vector3(),
            i = new p.Quaternion(),
            a = new p.Vector3();
          if (
            (e.transform && e.transform.decompose(n, i, a),
            (n = n.toArray()),
            (i = new p.Euler().setFromQuaternion(i, e.eulerOrder).toArray()),
            (a = a.toArray()),
            e.T !== void 0 && Object.keys(e.T.curves).length > 0)
          ) {
            const o = this.generateVectorTrack(
              e.modelName,
              e.T.curves,
              n,
              'position',
            );
            o !== void 0 && t.push(o);
          }
          if (e.R !== void 0 && Object.keys(e.R.curves).length > 0) {
            const o = this.generateRotationTrack(
              e.modelName,
              e.R.curves,
              i,
              e.preRotation,
              e.postRotation,
              e.eulerOrder,
            );
            o !== void 0 && t.push(o);
          }
          if (e.S !== void 0 && Object.keys(e.S.curves).length > 0) {
            const o = this.generateVectorTrack(
              e.modelName,
              e.S.curves,
              a,
              'scale',
            );
            o !== void 0 && t.push(o);
          }
          if (e.DeformPercent !== void 0) {
            const o = this.generateMorphTrack(e);
            o !== void 0 && t.push(o);
          }
          return t;
        }
        generateVectorTrack(e, t, n, i) {
          const a = this.getTimesForAllAxes(t),
            o = this.getKeyframeTrackValues(a, t, n);
          return new p.VectorKeyframeTrack(e + '.' + i, a, o);
        }
        generateRotationTrack(e, t, n, i, a, o) {
          t.x !== void 0 &&
            (this.interpolateRotations(t.x),
            (t.x.values = t.x.values.map(p.MathUtils.degToRad))),
            t.y !== void 0 &&
              (this.interpolateRotations(t.y),
              (t.y.values = t.y.values.map(p.MathUtils.degToRad))),
            t.z !== void 0 &&
              (this.interpolateRotations(t.z),
              (t.z.values = t.z.values.map(p.MathUtils.degToRad)));
          const s = this.getTimesForAllAxes(t),
            l = this.getKeyframeTrackValues(s, t, n);
          i !== void 0 &&
            ((i = i.map(p.MathUtils.degToRad)),
            i.push(o),
            (i = new p.Euler().fromArray(i)),
            (i = new p.Quaternion().setFromEuler(i))),
            a !== void 0 &&
              ((a = a.map(p.MathUtils.degToRad)),
              a.push(o),
              (a = new p.Euler().fromArray(a)),
              (a = new p.Quaternion().setFromEuler(a).invert()));
          const c = new p.Quaternion(),
            f = new p.Euler(),
            u = [];
          for (let h = 0; h < l.length; h += 3)
            f.set(l[h], l[h + 1], l[h + 2], o),
              c.setFromEuler(f),
              i !== void 0 && c.premultiply(i),
              a !== void 0 && c.multiply(a),
              c.toArray(u, (h / 3) * 4);
          return new p.QuaternionKeyframeTrack(e + '.quaternion', s, u);
        }
        generateMorphTrack(e) {
          const t = e.DeformPercent.curves.morph,
            n = t.values.map(function (a) {
              return a / 100;
            }),
            i = q.getObjectByName(e.modelName).morphTargetDictionary[
              e.morphName
            ];
          return new p.NumberKeyframeTrack(
            e.modelName + '.morphTargetInfluences[' + i + ']',
            t.times,
            n,
          );
        }
        getTimesForAllAxes(e) {
          let t = [];
          if (
            (e.x !== void 0 && (t = t.concat(e.x.times)),
            e.y !== void 0 && (t = t.concat(e.y.times)),
            e.z !== void 0 && (t = t.concat(e.z.times)),
            (t = t.sort(function (n, i) {
              return n - i;
            })),
            t.length > 1)
          ) {
            let n = 1,
              i = t[0];
            for (let a = 1; a < t.length; a++) {
              const o = t[a];
              o !== i && ((t[n] = o), (i = o), n++);
            }
            t = t.slice(0, n);
          }
          return t;
        }
        getKeyframeTrackValues(e, t, n) {
          const i = n,
            a = [];
          let o = -1,
            s = -1,
            l = -1;
          return (
            e.forEach(function (c) {
              if (
                (t.x && (o = t.x.times.indexOf(c)),
                t.y && (s = t.y.times.indexOf(c)),
                t.z && (l = t.z.times.indexOf(c)),
                o !== -1)
              ) {
                const f = t.x.values[o];
                a.push(f), (i[0] = f);
              } else a.push(i[0]);
              if (s !== -1) {
                const f = t.y.values[s];
                a.push(f), (i[1] = f);
              } else a.push(i[1]);
              if (l !== -1) {
                const f = t.z.values[l];
                a.push(f), (i[2] = f);
              } else a.push(i[2]);
            }),
            a
          );
        }
        interpolateRotations(e) {
          for (let t = 1; t < e.values.length; t++) {
            const n = e.values[t - 1],
              i = e.values[t] - n,
              a = Math.abs(i);
            if (a >= 180) {
              const o = a / 180,
                s = i / o;
              let l = n + s;
              const c = e.times[t - 1],
                u = (e.times[t] - c) / o;
              let h = c + u;
              const v = [],
                g = [];
              for (; h < e.times[t]; ) v.push(h), (h += u), g.push(l), (l += s);
              (e.times = dn(e.times, t, v)), (e.values = dn(e.values, t, g));
            }
          }
        }
      }
      class Jn {
        getPrevNode() {
          return this.nodeStack[this.currentIndent - 2];
        }
        getCurrentNode() {
          return this.nodeStack[this.currentIndent - 1];
        }
        getCurrentProp() {
          return this.currentProp;
        }
        pushStack(e) {
          this.nodeStack.push(e), (this.currentIndent += 1);
        }
        popStack() {
          this.nodeStack.pop(), (this.currentIndent -= 1);
        }
        setCurrentProp(e, t) {
          (this.currentProp = e), (this.currentPropName = t);
        }
        parse(e) {
          (this.currentIndent = 0),
            (this.allNodes = new pn()),
            (this.nodeStack = []),
            (this.currentProp = []),
            (this.currentPropName = '');
          const t = this,
            n = e.split(/[\r\n]+/);
          return (
            n.forEach(function (i, a) {
              const o = i.match(/^[\s\t]*;/),
                s = i.match(/^[\s\t]*$/);
              if (o || s) return;
              const l = i.match(
                  '^\\t{' + t.currentIndent + '}(\\w+):(.*){',
                  '',
                ),
                c = i.match(
                  '^\\t{' + t.currentIndent + '}(\\w+):[\\s\\t\\r\\n](.*)',
                ),
                f = i.match('^\\t{' + (t.currentIndent - 1) + '}}');
              l
                ? t.parseNodeBegin(i, l)
                : c
                ? t.parseNodeProperty(i, c, n[++a])
                : f
                ? t.popStack()
                : i.match(/^[^\s\t}]/) && t.parseNodePropertyContinued(i);
            }),
            this.allNodes
          );
        }
        parseNodeBegin(e, t) {
          const n = t[1].trim().replace(/^"/, '').replace(/"$/, ''),
            i = t[2].split(',').map(function (l) {
              return l.trim().replace(/^"/, '').replace(/"$/, '');
            }),
            a = { name: n },
            o = this.parseNodeAttr(i),
            s = this.getCurrentNode();
          this.currentIndent === 0
            ? this.allNodes.add(n, a)
            : n in s
            ? (n === 'PoseNode'
                ? s.PoseNode.push(a)
                : s[n].id !== void 0 && ((s[n] = {}), (s[n][s[n].id] = s[n])),
              o.id !== '' && (s[n][o.id] = a))
            : typeof o.id == 'number'
            ? ((s[n] = {}), (s[n][o.id] = a))
            : n !== 'Properties70' &&
              (n === 'PoseNode' ? (s[n] = [a]) : (s[n] = a)),
            typeof o.id == 'number' && (a.id = o.id),
            o.name !== '' && (a.attrName = o.name),
            o.type !== '' && (a.attrType = o.type),
            this.pushStack(a);
        }
        parseNodeAttr(e) {
          let t = e[0];
          e[0] !== '' && ((t = parseInt(e[0])), isNaN(t) && (t = e[0]));
          let n = '',
            i = '';
          return (
            e.length > 1 && ((n = e[1].replace(/^(\w+)::/, '')), (i = e[2])),
            { id: t, name: n, type: i }
          );
        }
        parseNodeProperty(e, t, n) {
          let i = t[1].replace(/^"/, '').replace(/"$/, '').trim(),
            a = t[2].replace(/^"/, '').replace(/"$/, '').trim();
          i === 'Content' &&
            a === ',' &&
            (a = n.replace(/"/g, '').replace(/,$/, '').trim());
          const o = this.getCurrentNode();
          if (o.name === 'Properties70') {
            this.parseNodeSpecialProperty(e, i, a);
            return;
          }
          if (i === 'C') {
            const l = a.split(',').slice(1),
              c = parseInt(l[0]),
              f = parseInt(l[1]);
            let u = a.split(',').slice(3);
            (u = u.map(function (h) {
              return h.trim().replace(/^"/, '');
            })),
              (i = 'connections'),
              (a = [c, f]),
              rr(a, u),
              o[i] === void 0 && (o[i] = []);
          }
          i === 'Node' && (o.id = a),
            i in o && Array.isArray(o[i])
              ? o[i].push(a)
              : i !== 'a'
              ? (o[i] = a)
              : (o.a = a),
            this.setCurrentProp(o, i),
            i === 'a' && a.slice(-1) !== ',' && (o.a = Mt(a));
        }
        parseNodePropertyContinued(e) {
          const t = this.getCurrentNode();
          (t.a += e), e.slice(-1) !== ',' && (t.a = Mt(t.a));
        }
        parseNodeSpecialProperty(e, t, n) {
          const i = n.split('",').map(function (f) {
              return f.trim().replace(/^\"/, '').replace(/\s/, '_');
            }),
            a = i[0],
            o = i[1],
            s = i[2],
            l = i[3];
          let c = i[4];
          switch (o) {
            case 'int':
            case 'enum':
            case 'bool':
            case 'ULongLong':
            case 'double':
            case 'Number':
            case 'FieldOfView':
              c = parseFloat(c);
              break;
            case 'Color':
            case 'ColorRGB':
            case 'Vector3D':
            case 'Lcl_Translation':
            case 'Lcl_Rotation':
            case 'Lcl_Scaling':
              c = Mt(c);
              break;
          }
          (this.getPrevNode()[a] = { type: o, type2: s, flag: l, value: c }),
            this.setCurrentProp(this.getPrevNode(), a);
        }
      }
      class Nn {
        parse(e) {
          const t = new hn(e);
          t.skip(23);
          const n = t.getUint32();
          if (n < 6400)
            throw new Error(
              'THREE.FBXLoader: FBX version not supported, FileVersion: ' + n,
            );
          const i = new pn();
          for (; !this.endOfContent(t); ) {
            const a = this.parseNode(t, n);
            a !== null && i.add(a.name, a);
          }
          return i;
        }
        endOfContent(e) {
          return e.size() % 16 == 0
            ? ((e.getOffset() + 160 + 16) & ~15) >= e.size()
            : e.getOffset() + 160 + 16 >= e.size();
        }
        parseNode(e, t) {
          const n = {},
            i = t >= 7500 ? e.getUint64() : e.getUint32(),
            a = t >= 7500 ? e.getUint64() : e.getUint32();
          t >= 7500 ? e.getUint64() : e.getUint32();
          const o = e.getUint8(),
            s = e.getString(o);
          if (i === 0) return null;
          const l = [];
          for (let h = 0; h < a; h++) l.push(this.parseProperty(e));
          const c = l.length > 0 ? l[0] : '',
            f = l.length > 1 ? l[1] : '',
            u = l.length > 2 ? l[2] : '';
          for (
            n.singleProperty = a === 1 && e.getOffset() === i;
            i > e.getOffset();

          ) {
            const h = this.parseNode(e, t);
            h !== null && this.parseSubNode(s, n, h);
          }
          return (
            (n.propertyList = l),
            typeof c == 'number' && (n.id = c),
            f !== '' && (n.attrName = f),
            u !== '' && (n.attrType = u),
            s !== '' && (n.name = s),
            n
          );
        }
        parseSubNode(e, t, n) {
          if (n.singleProperty === !0) {
            const i = n.propertyList[0];
            Array.isArray(i) ? ((t[n.name] = n), (n.a = i)) : (t[n.name] = i);
          } else if (e === 'Connections' && n.name === 'C') {
            const i = [];
            n.propertyList.forEach(function (a, o) {
              o !== 0 && i.push(a);
            }),
              t.connections === void 0 && (t.connections = []),
              t.connections.push(i);
          } else if (n.name === 'Properties70')
            Object.keys(n).forEach(function (a) {
              t[a] = n[a];
            });
          else if (e === 'Properties70' && n.name === 'P') {
            let i = n.propertyList[0],
              a = n.propertyList[1];
            const o = n.propertyList[2],
              s = n.propertyList[3];
            let l;
            i.indexOf('Lcl ') === 0 && (i = i.replace('Lcl ', 'Lcl_')),
              a.indexOf('Lcl ') === 0 && (a = a.replace('Lcl ', 'Lcl_')),
              a === 'Color' ||
              a === 'ColorRGB' ||
              a === 'Vector' ||
              a === 'Vector3D' ||
              a.indexOf('Lcl_') === 0
                ? (l = [
                    n.propertyList[4],
                    n.propertyList[5],
                    n.propertyList[6],
                  ])
                : (l = n.propertyList[4]),
              (t[i] = { type: a, type2: o, flag: s, value: l });
          } else
            t[n.name] === void 0
              ? typeof n.id == 'number'
                ? ((t[n.name] = {}), (t[n.name][n.id] = n))
                : (t[n.name] = n)
              : n.name === 'PoseNode'
              ? (Array.isArray(t[n.name]) || (t[n.name] = [t[n.name]]),
                t[n.name].push(n))
              : t[n.name][n.id] === void 0 && (t[n.name][n.id] = n);
        }
        parseProperty(e) {
          const t = e.getString(1);
          let n;
          switch (t) {
            case 'C':
              return e.getBoolean();
            case 'D':
              return e.getFloat64();
            case 'F':
              return e.getFloat32();
            case 'I':
              return e.getInt32();
            case 'L':
              return e.getInt64();
            case 'R':
              return (n = e.getUint32()), e.getArrayBuffer(n);
            case 'S':
              return (n = e.getUint32()), e.getString(n);
            case 'Y':
              return e.getInt16();
            case 'b':
            case 'c':
            case 'd':
            case 'f':
            case 'i':
            case 'l':
              const i = e.getUint32(),
                a = e.getUint32(),
                o = e.getUint32();
              if (a === 0)
                switch (t) {
                  case 'b':
                  case 'c':
                    return e.getBooleanArray(i);
                  case 'd':
                    return e.getFloat64Array(i);
                  case 'f':
                    return e.getFloat32Array(i);
                  case 'i':
                    return e.getInt32Array(i);
                  case 'l':
                    return e.getInt64Array(i);
                }
              typeof ke == 'undefined' &&
                console.error(
                  'THREE.FBXLoader: External library fflate.min.js required.',
                );
              const s = Ve(new Uint8Array(e.getArrayBuffer(o))),
                l = new hn(s.buffer);
              switch (t) {
                case 'b':
                case 'c':
                  return l.getBooleanArray(i);
                case 'd':
                  return l.getFloat64Array(i);
                case 'f':
                  return l.getFloat32Array(i);
                case 'i':
                  return l.getInt32Array(i);
                case 'l':
                  return l.getInt64Array(i);
              }
              break;
            default:
              throw new Error('THREE.FBXLoader: Unknown property type ' + t);
          }
        }
      }
      class hn {
        constructor(e, t) {
          (this.dv = new DataView(e)),
            (this.offset = 0),
            (this.littleEndian = t !== void 0 ? t : !0);
        }
        getOffset() {
          return this.offset;
        }
        size() {
          return this.dv.buffer.byteLength;
        }
        skip(e) {
          this.offset += e;
        }
        getBoolean() {
          return (this.getUint8() & 1) == 1;
        }
        getBooleanArray(e) {
          const t = [];
          for (let n = 0; n < e; n++) t.push(this.getBoolean());
          return t;
        }
        getUint8() {
          const e = this.dv.getUint8(this.offset);
          return (this.offset += 1), e;
        }
        getInt16() {
          const e = this.dv.getInt16(this.offset, this.littleEndian);
          return (this.offset += 2), e;
        }
        getInt32() {
          const e = this.dv.getInt32(this.offset, this.littleEndian);
          return (this.offset += 4), e;
        }
        getInt32Array(e) {
          const t = [];
          for (let n = 0; n < e; n++) t.push(this.getInt32());
          return t;
        }
        getUint32() {
          const e = this.dv.getUint32(this.offset, this.littleEndian);
          return (this.offset += 4), e;
        }
        getInt64() {
          let e, t;
          return (
            this.littleEndian
              ? ((e = this.getUint32()), (t = this.getUint32()))
              : ((t = this.getUint32()), (e = this.getUint32())),
            t & 2147483648
              ? ((t = ~t & 4294967295),
                (e = ~e & 4294967295),
                e === 4294967295 && (t = (t + 1) & 4294967295),
                (e = (e + 1) & 4294967295),
                -(t * 4294967296 + e))
              : t * 4294967296 + e
          );
        }
        getInt64Array(e) {
          const t = [];
          for (let n = 0; n < e; n++) t.push(this.getInt64());
          return t;
        }
        getUint64() {
          let e, t;
          return (
            this.littleEndian
              ? ((e = this.getUint32()), (t = this.getUint32()))
              : ((t = this.getUint32()), (e = this.getUint32())),
            t * 4294967296 + e
          );
        }
        getFloat32() {
          const e = this.dv.getFloat32(this.offset, this.littleEndian);
          return (this.offset += 4), e;
        }
        getFloat32Array(e) {
          const t = [];
          for (let n = 0; n < e; n++) t.push(this.getFloat32());
          return t;
        }
        getFloat64() {
          const e = this.dv.getFloat64(this.offset, this.littleEndian);
          return (this.offset += 8), e;
        }
        getFloat64Array(e) {
          const t = [];
          for (let n = 0; n < e; n++) t.push(this.getFloat64());
          return t;
        }
        getArrayBuffer(e) {
          const t = this.dv.buffer.slice(this.offset, this.offset + e);
          return (this.offset += e), t;
        }
        getString(e) {
          let t = [];
          for (let i = 0; i < e; i++) t[i] = this.getUint8();
          const n = t.indexOf(0);
          return (
            n >= 0 && (t = t.slice(0, n)),
            p.LoaderUtils.decodeText(new Uint8Array(t))
          );
        }
      }
      class pn {
        add(e, t) {
          this[e] = t;
        }
      }
      function _n(r) {
        const e = 'Kaydara FBX Binary  \0';
        return r.byteLength >= e.length && e === yn(r, 0, e.length);
      }
      function er(r) {
        const e = [
          'K',
          'a',
          'y',
          'd',
          'a',
          'r',
          'a',
          '\\',
          'F',
          'B',
          'X',
          '\\',
          'B',
          'i',
          'n',
          'a',
          'r',
          'y',
          '\\',
          '\\',
        ];
        let t = 0;
        function n(i) {
          const a = r[i - 1];
          return (r = r.slice(t + i)), t++, a;
        }
        for (let i = 0; i < e.length; ++i) if (n(1) === e[i]) return !1;
        return !0;
      }
      function vn(r) {
        const e = /FBXVersion: (\d+)/,
          t = r.match(e);
        if (t) return parseInt(t[1]);
        throw new Error(
          'THREE.FBXLoader: Cannot find the version number for the file given.',
        );
      }
      function tr(r) {
        return r / 46186158e3;
      }
      const nr = [];
      function tt(r, e, t, n) {
        let i;
        switch (n.mappingType) {
          case 'ByPolygonVertex':
            i = r;
            break;
          case 'ByPolygon':
            i = e;
            break;
          case 'ByVertice':
            i = t;
            break;
          case 'AllSame':
            i = n.indices[0];
            break;
          default:
            console.warn(
              'THREE.FBXLoader: unknown attribute mapping type ' +
                n.mappingType,
            );
        }
        n.referenceType === 'IndexToDirect' && (i = n.indices[i]);
        const a = i * n.dataSize,
          o = a + n.dataSize;
        return ir(nr, n.buffer, a, o);
      }
      const Pt = new p.Euler(),
        Ce = new p.Vector3();
      function gn(r) {
        const e = new p.Matrix4(),
          t = new p.Matrix4(),
          n = new p.Matrix4(),
          i = new p.Matrix4(),
          a = new p.Matrix4(),
          o = new p.Matrix4(),
          s = new p.Matrix4(),
          l = new p.Matrix4(),
          c = new p.Matrix4(),
          f = new p.Matrix4(),
          u = new p.Matrix4(),
          h = new p.Matrix4(),
          v = r.inheritType ? r.inheritType : 0;
        if (
          (r.translation && e.setPosition(Ce.fromArray(r.translation)),
          r.preRotation)
        ) {
          const M = r.preRotation.map(p.MathUtils.degToRad);
          M.push(r.eulerOrder), t.makeRotationFromEuler(Pt.fromArray(M));
        }
        if (r.rotation) {
          const M = r.rotation.map(p.MathUtils.degToRad);
          M.push(r.eulerOrder), n.makeRotationFromEuler(Pt.fromArray(M));
        }
        if (r.postRotation) {
          const M = r.postRotation.map(p.MathUtils.degToRad);
          M.push(r.eulerOrder),
            i.makeRotationFromEuler(Pt.fromArray(M)),
            i.invert();
        }
        r.scale && a.scale(Ce.fromArray(r.scale)),
          r.scalingOffset && s.setPosition(Ce.fromArray(r.scalingOffset)),
          r.scalingPivot && o.setPosition(Ce.fromArray(r.scalingPivot)),
          r.rotationOffset && l.setPosition(Ce.fromArray(r.rotationOffset)),
          r.rotationPivot && c.setPosition(Ce.fromArray(r.rotationPivot)),
          r.parentMatrixWorld &&
            (u.copy(r.parentMatrix), f.copy(r.parentMatrixWorld));
        const g = t.clone().multiply(n).multiply(i),
          m = new p.Matrix4();
        m.extractRotation(f);
        const d = new p.Matrix4();
        d.copyPosition(f);
        const T = d.clone().invert().multiply(f),
          x = m.clone().invert().multiply(T),
          y = a,
          A = new p.Matrix4();
        if (v === 0) A.copy(m).multiply(g).multiply(x).multiply(y);
        else if (v === 1) A.copy(m).multiply(x).multiply(g).multiply(y);
        else {
          const X = new p.Matrix4()
              .scale(new p.Vector3().setFromMatrixScale(u))
              .clone()
              .invert(),
            L = x.clone().multiply(X);
          A.copy(m).multiply(g).multiply(L).multiply(y);
        }
        const D = c.clone().invert(),
          P = o.clone().invert();
        let I = e
          .clone()
          .multiply(l)
          .multiply(c)
          .multiply(t)
          .multiply(n)
          .multiply(i)
          .multiply(D)
          .multiply(s)
          .multiply(o)
          .multiply(a)
          .multiply(P);
        const w = new p.Matrix4().copyPosition(I),
          O = f.clone().multiply(w);
        return (
          h.copyPosition(O),
          (I = h.clone().multiply(A)),
          I.premultiply(f.invert()),
          I
        );
      }
      function mn(r) {
        r = r || 0;
        const e = ['ZYX', 'YZX', 'XZY', 'ZXY', 'YXZ', 'XYZ'];
        return r === 6
          ? (console.warn(
              'THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect.',
            ),
            e[0])
          : e[r];
      }
      function Mt(r) {
        return r.split(',').map(function (t) {
          return parseFloat(t);
        });
      }
      function yn(r, e, t) {
        return (
          e === void 0 && (e = 0),
          t === void 0 && (t = r.byteLength),
          p.LoaderUtils.decodeText(new Uint8Array(r, e, t))
        );
      }
      function rr(r, e) {
        for (let t = 0, n = r.length, i = e.length; t < i; t++, n++)
          r[n] = e[t];
      }
      function ir(r, e, t, n) {
        for (let i = t, a = 0; i < n; i++, a++) r[a] = e[i];
        return r;
      }
      function dn(r, e, t) {
        return r.slice(0, e).concat(t).concat(r.slice(e));
      }
    },
  },
]);
