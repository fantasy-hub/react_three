(self.webpackChunk = self.webpackChunk || []).push([
  [631],
  {
    4773: function (y) {
      y.exports = { container: 'container___drya-' };
    },
    7487: function (y, w, v) {
      'use strict';
      var e = v(7294),
        a = (d) => {
          var f = d.meshsRef,
            h = d.sceneRef,
            m = d.renderRef,
            c = d.animateIDRef,
            s = d.lightsRef,
            u = d.floorRef,
            i = (0, e.useCallback)(() => {
              var t;
              f.forEach((n) => {
                var l, M;
                n == null ||
                  (l = n.geometry) === null ||
                  l === void 0 ||
                  l.dispose(),
                  n == null ||
                    (M = n.material) === null ||
                    M === void 0 ||
                    M.dispose(),
                  h.remove(n);
              }),
                s == null ||
                  s.forEach((n) => {
                    h.remove(n);
                  }),
                u == null ||
                  (t = u.current) === null ||
                  t === void 0 ||
                  t.forEach((n) => {
                    h.remove(n);
                  }),
                m.dispose(),
                cancelAnimationFrame(c.current);
            }, [d]);
          return { disposeAll: i };
        };
      w.Z = a;
    },
    718: function (y, w, v) {
      'use strict';
      var e = v(7294),
        a = (d) => {
          var f = d.cameraRef,
            h = d.hypotenuse,
            m = h === void 0 ? 20 : h,
            c = d.onTop,
            s = (0, e.useRef)(!1),
            u = (0, e.useRef)(m),
            i = (0, e.useRef)(0),
            t = (0, e.useCallback)(
              function (g) {
                var E =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : { fixY: !1 },
                  R = E.fixY,
                  C = f.position.y,
                  A = g.movementY,
                  P = Math.cos((i.current / 180) * Math.PI),
                  I = Math.sin((i.current / 180) * Math.PI),
                  L = u.current * P,
                  x = R ? C : C + A * 0.1,
                  p = u.current * I;
                c && x < 5 && (x = 5),
                  f.position.set(L, x, p),
                  f.lookAt(0, 0, 0);
              },
              [d],
            ),
            n = (0, e.useCallback)(() => (s.current = !0), []),
            l = (0, e.useCallback)(() => (s.current = !1), []),
            M = (0, e.useCallback)((g) => {
              if (!!s.current) {
                var E = g.movementX;
                (i.current -= E * 0.5), t(g);
              }
            }, []),
            O = (0, e.useCallback)((g) => {
              var E = g.deltaY,
                R = f.position,
                C = R.x,
                A = R.y,
                P = R.z;
              E > 0 ? (P += 2) : (P -= 2),
                f.position.set(C, A, P),
                f.lookAt(0, 0, 0);
            }, []);
          return {
            onMouseDown: n,
            onMouseUp: l,
            onMouseMove: M,
            hypotenuseRef: u,
            onWheel: O,
          };
        };
      w.Z = a;
    },
    4465: function (y, w, v) {
      'use strict';
      v.r(w),
        v.d(w, {
          default: function () {
            return u;
          },
        });
      var e = v(7294),
        a = v(2212),
        d = v(7487),
        f = v(8953),
        h = v(4773),
        m = v.n(h),
        c = v(718),
        s = v(5893);
      function u() {
        var i = (0, e.useRef)(null),
          t = (0, e.useRef)(new a.Scene()).current,
          n = (0, e.useRef)(new a.PerspectiveCamera()).current,
          l = (0, e.useRef)(new a.WebGLRenderer({ antialias: !0 })).current,
          M = (0, e.useRef)([]).current,
          O = (0, e.useRef)(),
          g = (0, e.useRef)([]).current,
          E = (0, e.useRef)([]),
          R = (0, c.Z)({ cameraRef: n }),
          C = R.onMouseDown,
          A = R.onMouseUp,
          P = R.onMouseMove,
          I = R.hypotenuseRef,
          L = R.onWheel,
          x = (0, e.useCallback)(() => {
            (n.aspect = window.innerWidth / window.innerHeight),
              n.updateProjectionMatrix(),
              l.setSize(window.innerWidth, window.innerHeight);
          }, [n, l]),
          p = (0, e.useCallback)(
            (r) => {
              t.add(r), M.push(r);
            },
            [t, M],
          ),
          S = (0, e.useCallback)(() => {
            var r = () => {
                var o, D;
                (l.shadowMap.enabled = !0),
                  l.setSize(
                    (o = i.current) === null || o === void 0
                      ? void 0
                      : o.offsetWidth,
                    (D = i.current) === null || D === void 0
                      ? void 0
                      : D.offsetHeight,
                  );
              },
              _ = () => {
                (n.fov = 45),
                  (n.aspect = window.innerWidth / window.innerHeight),
                  (n.near = 1),
                  (n.far = 1e3),
                  n.position.set(0, 0, I.current),
                  n.lookAt(0, 0, 0),
                  n.updateProjectionMatrix();
              };
            r(), _();
          }, [i, l, n]),
          F = (0, e.useCallback)(() => {
            l.render(t, n),
              M.forEach((r) => {
                (r.rotation.x += (0.5 / 180) * Math.PI),
                  (r.rotation.y += (0.5 / 180) * Math.PI);
              }),
              (O.current = window.requestAnimationFrame(F));
          }, [l, M]),
          T = (0, e.useCallback)(() => {
            var r = new a.BoxGeometry(2, 2, 2),
              _ = new a.MeshBasicMaterial({ color: '#1890ff' }),
              o = new a.Mesh(r, _);
            (o.castShadow = !0), (o.receiveShadow = !0), p(o);
          }, [p]),
          U = (0, e.useCallback)(() => {
            for (
              var r = new a.BufferGeometry(),
                _ = new a.LineBasicMaterial({ vertexColors: !0 }),
                o = [],
                D = [],
                W = 0;
              W < 5e3;
              W++
            )
              o.push((0, f.gb)(), (0, f.gb)(), (0, f.gb)()),
                D.push((0, f.MX)(), (0, f.MX)(), (0, f.MX)());
            r.setAttribute('position', new a.Float32BufferAttribute(o, 3)),
              r.setAttribute('color', new a.Float32BufferAttribute(D, 3)),
              r.computeBoundingSphere();
            var b = new a.Line(r, _);
            (b.castShadow = !0),
              (b.receiveShadow = !0),
              b.position.set(4, 0, 0),
              p(b);
          }, [p]),
          k = (0, e.useCallback)(() => {
            var r = new a.MeshPhongMaterial({ color: 'red' }),
              _ = new a.BoxGeometry(2, 2, 2),
              o = new a.Mesh(_, r);
            (o.castShadow = !0),
              (o.receiveShadow = !0),
              o.position.set(-4, 0, 0),
              p(o);
          }, [p]),
          K = (0, e.useCallback)(() => {
            var r = new a.DirectionalLight(16777215, 1);
            r.position.set(0, 100, 0), (r.castShadow = !0), t.add(r), g.push(r);
          }, []),
          $ = (0, e.useCallback)(() => {
            var r = function (W) {
                var b =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                  X =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : [0, -3, 0],
                  G = new a.PlaneGeometry(50, 50),
                  j = new a[W](b),
                  B = new a.Mesh(G, j);
                return (
                  (B.receiveShadow = !0),
                  B.position.set(...X),
                  (B.rotation.x = (-90 / 180) * Math.PI),
                  B
                );
              },
              _ = r('MeshBasicMaterial', { color: 16777215 }),
              o = r('ShadowMaterial', { color: 6908265 });
            t.add(_), t.add(o), (E.current = [_, o]);
          }, []),
          z = (0, d.Z)({
            meshsRef: M,
            sceneRef: t,
            renderRef: l,
            animateIDRef: O,
            lightsRef: g,
            floorRef: E,
          }),
          Y = z.disposeAll;
        return (
          (0, e.useEffect)(() => {
            var r;
            return (
              window.addEventListener('resize', x, !1),
              (r = i.current) === null ||
                r === void 0 ||
                r.append(l == null ? void 0 : l.domElement),
              S(),
              F(),
              T(),
              U(),
              k(),
              K(),
              $(),
              () => {
                Y();
              }
            );
          }, []),
          (0, s.jsx)('div', {
            className: m().container,
            ref: i,
            onMouseDown: C,
            onMouseUp: A,
            onMouseMove: P,
            onWheel: L,
          })
        );
      }
    },
    8953: function (y, w, v) {
      'use strict';
      v.d(w, {
        gb: function () {
          return e;
        },
        MX: function () {
          return a;
        },
      });
      var e = () => Math.random() * 2 - 1,
        a = function () {
          var m =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : 1,
            c =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            s = Math.random() * m;
          if (!c) return s;
          var u = Math.random() * 10;
          return u > 5 ? s : s * -1;
        };
      function d(h) {
        var m =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : 100,
          c = null,
          s = this;
        return function () {
          for (var u = arguments.length, i = new Array(u), t = 0; t < u; t++)
            i[t] = arguments[t];
          c ||
            (c = setTimeout(() => {
              h.apply(s, i);
            }, m));
        };
      }
      function f(h) {
        var m =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : 100,
          c = null,
          s = this;
        return function () {
          for (var u = arguments.length, i = new Array(u), t = 0; t < u; t++)
            i[t] = arguments[t];
          c && clearTimeout(c),
            (c = setTimeout(() => {
              h.apply(s, i);
            }, m));
        };
      }
    },
  },
]);
