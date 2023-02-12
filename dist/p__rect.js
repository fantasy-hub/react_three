(self.webpackChunk = self.webpackChunk || []).push([
  [863],
  {
    2932: function (A) {
      A.exports = { container: 'container___1-SM9' };
    },
    7487: function (A, C, f) {
      'use strict';
      var e = f(7294),
        r = (c) => {
          var a = c.meshsRef,
            M = c.sceneRef,
            g = c.renderRef,
            d = c.animateIDRef,
            s = c.lightsRef,
            u = c.floorRef,
            i = (0, e.useCallback)(() => {
              var o;
              a.forEach((t) => {
                var l, w;
                t == null ||
                  (l = t.geometry) === null ||
                  l === void 0 ||
                  l.dispose(),
                  t == null ||
                    (w = t.material) === null ||
                    w === void 0 ||
                    w.dispose(),
                  M.remove(t);
              }),
                s == null ||
                  s.forEach((t) => {
                    M.remove(t);
                  }),
                u == null ||
                  (o = u.current) === null ||
                  o === void 0 ||
                  o.forEach((t) => {
                    M.remove(t);
                  }),
                g.dispose(),
                cancelAnimationFrame(d.current);
            }, [c]);
          return { disposeAll: i };
        };
      C.Z = r;
    },
    718: function (A, C, f) {
      'use strict';
      var e = f(7294),
        r = (c) => {
          var a = c.cameraRef,
            M = c.hypotenuse,
            g = M === void 0 ? 20 : M,
            d = c.onTop,
            s = (0, e.useRef)(!1),
            u = (0, e.useRef)(g),
            i = (0, e.useRef)(0),
            o = (0, e.useCallback)(
              function (E) {
                var p =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : { fixY: !1 },
                  D = p.fixY,
                  P = a.position.y,
                  L = E.movementY,
                  b = Math.cos((i.current / 180) * Math.PI),
                  x = Math.sin((i.current / 180) * Math.PI),
                  k = u.current * b,
                  h = D ? P : P + L * 0.1,
                  I = u.current * x;
                d && h < 5 && (h = 5),
                  a.position.set(k, h, I),
                  a.lookAt(0, 0, 0);
              },
              [c],
            ),
            t = (0, e.useCallback)(() => (s.current = !0), []),
            l = (0, e.useCallback)(() => (s.current = !1), []),
            w = (0, e.useCallback)((E) => {
              if (!!s.current) {
                var p = E.movementX;
                (i.current -= p * 0.5), o(E);
              }
            }, []),
            W = (0, e.useCallback)((E) => {
              var p = E.deltaY,
                D = a.position,
                P = D.x,
                L = D.y,
                b = D.z;
              p > 0 ? (b += 2) : (b -= 2),
                a.position.set(P, L, b),
                a.lookAt(0, 0, 0);
            }, []);
          return {
            onMouseDown: t,
            onMouseUp: l,
            onMouseMove: w,
            hypotenuseRef: u,
            onWheel: W,
          };
        };
      C.Z = r;
    },
    9662: function (A, C, f) {
      'use strict';
      f.r(C),
        f.d(C, {
          default: function () {
            return u;
          },
        });
      var e = f(7294),
        r = f(2212),
        c = f(7487),
        a = f(8953),
        M = f(2932),
        g = f.n(M),
        d = f(718),
        s = f(5893);
      function u() {
        var i = (0, e.useRef)(null),
          o = (0, e.useRef)(new r.Scene()).current,
          t = (0, e.useRef)(new r.PerspectiveCamera()).current,
          l = (0, e.useRef)(new r.WebGLRenderer({ antialias: !0 })).current,
          w = (0, e.useRef)([]).current,
          W = (0, e.useRef)(),
          E = (0, e.useRef)([]).current,
          p = (0, d.Z)({ cameraRef: t, hypotenuse: 30 }),
          D = p.onMouseDown,
          P = p.onMouseUp,
          L = p.onMouseMove,
          b = p.hypotenuseRef,
          x = p.onWheel,
          k = (0, e.useCallback)(() => {
            (t.aspect = window.innerWidth / window.innerHeight),
              t.updateProjectionMatrix(),
              l.setSize(window.innerWidth, window.innerHeight);
          }, [t, l]),
          h = (0, e.useCallback)(
            (n) => {
              o.add(n), w.push(n);
            },
            [o, w],
          ),
          I = (0, e.useCallback)(() => {
            var n = () => {
                var v, R;
                (l.shadowMap.enabled = !0),
                  l.setSize(
                    (v = i.current) === null || v === void 0
                      ? void 0
                      : v.offsetWidth,
                    (R = i.current) === null || R === void 0
                      ? void 0
                      : R.offsetHeight,
                  );
              },
              _ = () => {
                (t.fov = 45),
                  (t.aspect = window.innerWidth / window.innerHeight),
                  (t.near = 1),
                  (t.far = 1e3),
                  t.position.set(0, 0, b.current),
                  t.lookAt(0, 0, 0),
                  t.updateProjectionMatrix();
              };
            n(), _();
          }, [i, l, t]),
          S = (0, e.useCallback)(() => {
            l.render(o, t),
              w.forEach((n) => {
                (n.rotation.x += (0.5 / 180) * Math.PI),
                  (n.rotation.y += (0.5 / 180) * Math.PI);
              }),
              (W.current = window.requestAnimationFrame(S));
          }, [l, w]),
          T = (0, e.useCallback)(() => {
            var n = new r.DirectionalLight(16777215, 1);
            n.position.set(0, 100, 0), (n.castShadow = !0), o.add(n), E.push(n);
          }, []),
          F = (0, e.useCallback)(
            (n, _) => {
              for (
                var v = new r.BufferGeometry(),
                  R = new r.LineBasicMaterial(_),
                  m = [],
                  O = 0;
                O < (0, a.MX)(1e3);
                O++
              )
                m.push((0, a.gb)(), (0, a.gb)(), (0, a.gb)());
              v.setAttribute('position', new r.Float32BufferAttribute(m, 3)),
                v.computeBoundingSphere();
              var y = new r.Line(v, R);
              (y.castShadow = !0),
                (y.receiveShadow = !0),
                y.position.set(...n),
                h(y);
            },
            [h],
          ),
          U = (0, e.useCallback)(
            (n, _) => {
              var v = new r.MeshLambertMaterial(_),
                R = new r.BoxGeometry(2, 2, 2),
                m = new r.Mesh(R, v);
              (m.castShadow = !0),
                (m.receiveShadow = !0),
                m.position.set(...n),
                h(m);
            },
            [h],
          ),
          K = (0, e.useCallback)(
            (n, _) => {
              var v = new r.MeshPhongMaterial(_),
                R = new r.BoxGeometry(2, 2, 2),
                m = new r.Mesh(R, v);
              (m.castShadow = !0),
                (m.receiveShadow = !0),
                m.position.set(...n),
                h(m);
            },
            [h],
          ),
          $ = (0, e.useCallback)(
            (n, _) => {
              var v = (0, a.MX)(2),
                R = new r.SphereGeometry(v, 64, 64),
                m = new r.MeshMatcapMaterial(_),
                O = new r.Mesh(R, m);
              O.position.set(...n);
              var y = new r.RingGeometry(v * 1.2, v * 1.6, 64),
                H = new r.MeshLambertMaterial({
                  color: 16777215,
                  side: r.DoubleSide,
                }),
                X = new r.Mesh(y, H);
              X.position.set(...n), (X.rotation.x = (-75 * 180) / Math.PI);
              var B = new r.Group();
              B.add(O), B.add(X), h(B);
            },
            [h],
          ),
          z = (0, e.useCallback)(() => {
            var n = [F, U, K],
              _ = Math.floor(Math.random() * 3),
              v = [(0, a.MX)(10, !0), (0, a.MX)(10, !0), (0, a.MX)(20, !0)],
              R = { color: new r.Color((0, a.MX)(), (0, a.MX)(), (0, a.MX)()) };
            n[_](v, R);
          }, [h]),
          G = (0, e.useCallback)(() => {
            var n = [(0, a.MX)(10, !0), (0, a.MX)(10, !0), (0, a.MX)(20, !0)],
              _ = { color: new r.Color((0, a.MX)(), (0, a.MX)(), (0, a.MX)()) };
            $(n, _);
          }, [h]),
          Y = (0, c.Z)({
            meshsRef: w,
            sceneRef: o,
            renderRef: l,
            animateIDRef: W,
            lightsRef: E,
          }),
          j = Y.disposeAll;
        return (
          (0, e.useEffect)(() => {
            var n;
            return (
              window.addEventListener('resize', k, !1),
              (n = i.current) === null ||
                n === void 0 ||
                n.append(l == null ? void 0 : l.domElement),
              I(),
              S(),
              T(),
              () => {
                j();
              }
            );
          }, []),
          (0, s.jsx)('div', {
            className: g().container,
            ref: i,
            onMouseDown: D,
            onMouseUp: P,
            onMouseMove: L,
            onWheel: x,
            onClick: z,
            onDoubleClick: G,
          })
        );
      }
    },
    8953: function (A, C, f) {
      'use strict';
      f.d(C, {
        gb: function () {
          return e;
        },
        MX: function () {
          return r;
        },
      });
      var e = () => Math.random() * 2 - 1,
        r = function () {
          var g =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : 1,
            d =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            s = Math.random() * g;
          if (!d) return s;
          var u = Math.random() * 10;
          return u > 5 ? s : s * -1;
        };
      function c(M) {
        var g =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : 100,
          d = null,
          s = this;
        return function () {
          for (var u = arguments.length, i = new Array(u), o = 0; o < u; o++)
            i[o] = arguments[o];
          d ||
            (d = setTimeout(() => {
              M.apply(s, i);
            }, g));
        };
      }
      function a(M) {
        var g =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : 100,
          d = null,
          s = this;
        return function () {
          for (var u = arguments.length, i = new Array(u), o = 0; o < u; o++)
            i[o] = arguments[o];
          d && clearTimeout(d),
            (d = setTimeout(() => {
              M.apply(s, i);
            }, g));
        };
      }
    },
  },
]);
