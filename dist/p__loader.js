(self.webpackChunk = self.webpackChunk || []).push([
  [281],
  {
    3995: function (O) {
      O.exports = { container: 'container___1QXcq' };
    },
    7487: function (O, D, s) {
      'use strict';
      var u = s(7294),
        r = (e) => {
          var l = e.meshsRef,
            _ = e.sceneRef,
            g = e.renderRef,
            C = e.animateIDRef,
            d = e.lightsRef,
            f = e.floorRef,
            M = (0, u.useCallback)(() => {
              var i;
              l.forEach((n) => {
                var a, t;
                n == null ||
                  (a = n.geometry) === null ||
                  a === void 0 ||
                  a.dispose(),
                  n == null ||
                    (t = n.material) === null ||
                    t === void 0 ||
                    t.dispose(),
                  _.remove(n);
              }),
                d == null ||
                  d.forEach((n) => {
                    _.remove(n);
                  }),
                f == null ||
                  (i = f.current) === null ||
                  i === void 0 ||
                  i.forEach((n) => {
                    _.remove(n);
                  }),
                g.dispose(),
                cancelAnimationFrame(C.current);
            }, [e]);
          return { disposeAll: M };
        };
      D.Z = r;
    },
    718: function (O, D, s) {
      'use strict';
      var u = s(7294),
        r = (e) => {
          var l = e.cameraRef,
            _ = e.hypotenuse,
            g = _ === void 0 ? 20 : _,
            C = e.onTop,
            d = (0, u.useRef)(!1),
            f = (0, u.useRef)(g),
            M = (0, u.useRef)(0),
            i = (0, u.useCallback)(
              function (c) {
                var h =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : { fixY: !1 },
                  R = h.fixY,
                  v = l.position.y,
                  p = c.movementY,
                  E = Math.cos((M.current / 180) * Math.PI),
                  x = Math.sin((M.current / 180) * Math.PI),
                  A = f.current * E,
                  b = R ? v : v + p * 0.1,
                  I = f.current * x;
                C && b < 5 && (b = 5),
                  l.position.set(A, b, I),
                  l.lookAt(0, 0, 0);
              },
              [e],
            ),
            n = (0, u.useCallback)(() => (d.current = !0), []),
            a = (0, u.useCallback)(() => (d.current = !1), []),
            t = (0, u.useCallback)((c) => {
              if (!!d.current) {
                var h = c.movementX;
                (M.current -= h * 0.5), i(c);
              }
            }, []),
            P = (0, u.useCallback)((c) => {
              var h = c.deltaY,
                R = l.position,
                v = R.x,
                p = R.y,
                E = R.z;
              h > 0 ? (E += 2) : (E -= 2),
                l.position.set(v, p, E),
                l.lookAt(0, 0, 0);
            }, []);
          return {
            onMouseDown: n,
            onMouseUp: a,
            onMouseMove: t,
            hypotenuseRef: f,
            onWheel: P,
          };
        };
      D.Z = r;
    },
    9377: function (O, D, s) {
      'use strict';
      s.r(D),
        s.d(D, {
          default: function () {
            return M;
          },
        });
      var u = s(8870),
        r = s(7294),
        e = s(2212),
        l = s(6209),
        _ = s(7487),
        g = s(3995),
        C = s.n(g),
        d = s(718),
        f = s(5893);
      function M() {
        var i = (0, r.useRef)(null),
          n = (0, r.useRef)(new e.Scene()).current,
          a = (0, r.useRef)(new e.PerspectiveCamera()).current,
          t = (0, r.useRef)(new e.WebGLRenderer({ antialias: !0 })).current,
          P = (0, r.useRef)([]).current,
          c = (0, r.useRef)(),
          h = (0, r.useRef)([]).current,
          R = (0, r.useRef)([]),
          v = (0, d.Z)({ cameraRef: a, hypotenuse: 40 }),
          p = v.onMouseDown,
          E = v.onMouseUp,
          x = v.onMouseMove,
          A = v.hypotenuseRef,
          b = v.onWheel,
          I = (0, r.useCallback)(() => {
            (a.aspect = window.innerWidth / window.innerHeight),
              a.updateProjectionMatrix(),
              t.setSize(window.innerWidth, window.innerHeight);
          }, [a, t]),
          U = (0, r.useCallback)(() => {
            var o = new l.y();
            o.load('fbx/static/gtx.fbx', (m) => {
              m.position.set(0, 0, 0), m.scale.set(0.05, 0.05, 0.05), k(m);
            });
          }, []),
          k = (0, r.useCallback)(
            (o) => {
              n.add(o), P.push(o);
            },
            [n, P],
          ),
          B = (0, r.useCallback)(() => {
            var o = () => {
                var w, y;
                (t.shadowMap.enabled = !0),
                  t.setSize(
                    (w = i.current) === null || w === void 0
                      ? void 0
                      : w.offsetWidth,
                    (y = i.current) === null || y === void 0
                      ? void 0
                      : y.offsetHeight,
                  );
              },
              m = () => {
                (a.fov = 45),
                  (a.aspect = window.innerWidth / window.innerHeight),
                  (a.near = 1),
                  (a.far = 1e3),
                  a.position.set(0, 0, A.current),
                  a.lookAt(0, 0),
                  a.updateProjectionMatrix();
              };
            o(), m();
          }, [i, t, a]),
          L = (0, r.useCallback)(() => {
            t.render(n, a), (c.current = window.requestAnimationFrame(L));
          }, [t, P]),
          F = (0, r.useCallback)(() => {
            var o = new e.DirectionalLight(16777215, 1);
            o.position.set(100, 100, 100),
              (o.castShadow = !0),
              n.add(o),
              h.push(o);
          }, []),
          T = (0, r.useCallback)(() => {
            var o = function (S) {
                var $ =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                  z =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : [0, 0, 0],
                  Y = new e.PlaneGeometry(50, 50),
                  Z = new e[S](
                    (0, u.Z)((0, u.Z)({}, $), {}, { side: e.DoubleSide }),
                  ),
                  W = new e.Mesh(Y, Z);
                return (
                  (W.receiveShadow = !0),
                  W.position.set(...z),
                  (W.rotation.x = (-75 / 180) * Math.PI),
                  W
                );
              },
              m = o('MeshBasicMaterial', { color: 16777215 }),
              w = o('ShadowMaterial', { color: 6908265 });
            n.add(m), n.add(w), (R.current = [m, w]);
          }, []),
          K = (0, _.Z)({
            meshsRef: P,
            sceneRef: n,
            renderRef: t,
            animateIDRef: c,
            lightsRef: h,
            floorRef: R,
          }),
          j = K.disposeAll;
        return (
          (0, r.useEffect)(() => {
            var o;
            return (
              window.addEventListener('resize', I, !1),
              (o = i.current) === null ||
                o === void 0 ||
                o.append(t == null ? void 0 : t.domElement),
              U(),
              B(),
              L(),
              F(),
              T(),
              () => {
                j();
              }
            );
          }, []),
          (0, f.jsx)('div', {
            className: C().container,
            ref: i,
            onMouseDown: p,
            onMouseUp: E,
            onMouseMove: x,
            onWheel: b,
          })
        );
      }
    },
  },
]);
