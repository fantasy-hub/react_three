(self.webpackChunk = self.webpackChunk || []).push([
  [135],
  {
    817: function (w) {
      w.exports = { container: 'container___3DlDW' };
    },
    7487: function (w, g, o) {
      'use strict';
      var t = o(7294),
        a = (v) => {
          var c = v.meshsRef,
            f = v.sceneRef,
            m = v.renderRef,
            l = v.animateIDRef,
            s = v.lightsRef,
            i = v.floorRef,
            u = (0, t.useCallback)(() => {
              var e;
              c.forEach((n) => {
                var h, _;
                n == null ||
                  (h = n.geometry) === null ||
                  h === void 0 ||
                  h.dispose(),
                  n == null ||
                    (_ = n.material) === null ||
                    _ === void 0 ||
                    _.dispose(),
                  f.remove(n);
              }),
                s == null ||
                  s.forEach((n) => {
                    f.remove(n);
                  }),
                i == null ||
                  (e = i.current) === null ||
                  e === void 0 ||
                  e.forEach((n) => {
                    f.remove(n);
                  }),
                m.dispose(),
                cancelAnimationFrame(l.current);
            }, [v]);
          return { disposeAll: u };
        };
      g.Z = a;
    },
    9277: function (w, g, o) {
      'use strict';
      o.r(g),
        o.d(g, {
          default: function () {
            return s;
          },
        });
      var t = o(7294),
        a = o(2212),
        v = o(7487),
        c = o(8953),
        f = o(817),
        m = o.n(f),
        l = o(5893);
      function s() {
        var i = (0, t.useRef)(null),
          u = (0, t.useRef)(new a.Scene()).current,
          e = (0, t.useRef)(new a.PerspectiveCamera()).current,
          n = (0, t.useRef)(new a.WebGLRenderer({ antialias: !0 })).current,
          h = (0, t.useRef)([]).current,
          _ = (0, t.useRef)(),
          D = (0, t.useRef)([]).current,
          M = (0, t.useCallback)(
            (r) => {
              u.add(r), h.push(r);
            },
            [u, h],
          ),
          A = (0, t.useCallback)(() => {
            var r = () => {
                var d, E;
                n.setSize(
                  (d = i.current) === null || d === void 0
                    ? void 0
                    : d.offsetWidth,
                  (E = i.current) === null || E === void 0
                    ? void 0
                    : E.offsetHeight,
                );
              },
              R = () => {
                (e.fov = 45),
                  (e.aspect = window.innerWidth / window.innerHeight),
                  (e.near = 1),
                  (e.far = 1e3),
                  e.position.set(0, 0, 20),
                  e.lookAt(0, 0, 0),
                  e.updateProjectionMatrix();
              };
            r(), R();
          }, [i, n, e]),
          b = (0, t.useCallback)(() => {
            n.render(u, e),
              h.forEach((r) => {
                (r.rotation.x += (0.5 / 180) * Math.PI),
                  (r.rotation.y += (0.5 / 180) * Math.PI);
              }),
              (_.current = window.requestAnimationFrame(b));
          }, [n, h]),
          p = (0, t.useCallback)(() => {
            var r = new a.BoxGeometry(2, 2, 2),
              R = new a.MeshBasicMaterial({ color: '#1890ff' }),
              d = new a.Mesh(r, R);
            M(d);
          }, [M]),
          L = (0, t.useCallback)(() => {
            for (
              var r = new a.BufferGeometry(),
                R = new a.LineBasicMaterial({ vertexColors: !0 }),
                d = [],
                E = [],
                P = 0;
              P < 5e3;
              P++
            )
              d.push((0, c.gb)(), (0, c.gb)(), (0, c.gb)()),
                E.push((0, c.MX)(), (0, c.MX)(), (0, c.MX)());
            r.setAttribute('position', new a.Float32BufferAttribute(d, 3)),
              r.setAttribute('color', new a.Float32BufferAttribute(E, 3)),
              r.computeBoundingSphere();
            var C = new a.Line(r, R);
            C.position.set(4, 0, 0), M(C);
          }, [M]),
          B = (0, t.useCallback)(() => {
            var r = new a.MeshLambertMaterial({ color: 'red' }),
              R = new a.BoxGeometry(2, 2, 2),
              d = new a.Mesh(R, r);
            d.position.set(-4, 0, 0), M(d);
          }, [M]),
          O = (0, t.useCallback)(() => {
            var r = new a.PointLight(16711680, 1, 500);
            r.position.set(100, 200, 200), u.add(r), D.push(r);
          }, []),
          W = (0, t.useCallback)(() => {
            (e.aspect = window.innerWidth / window.innerHeight),
              e.updateProjectionMatrix(),
              n.setSize(window.innerWidth, window.innerHeight);
          }, [e, n]),
          F = (0, v.Z)({
            meshsRef: h,
            sceneRef: u,
            renderRef: n,
            animateIDRef: _,
            lightsRef: D,
          }),
          I = F.disposeAll;
        return (
          (0, t.useEffect)(() => {
            var r;
            return (
              (r = i.current) === null ||
                r === void 0 ||
                r.append(n == null ? void 0 : n.domElement),
              A(),
              b(),
              p(),
              L(),
              B(),
              O(),
              window.addEventListener('resize', W, !1),
              () => {
                I();
              }
            );
          }, []),
          (0, l.jsx)('div', { className: m().container, ref: i })
        );
      }
    },
    8953: function (w, g, o) {
      'use strict';
      o.d(g, {
        gb: function () {
          return t;
        },
        MX: function () {
          return a;
        },
      });
      var t = () => Math.random() * 2 - 1,
        a = function () {
          var m =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : 1,
            l =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            s = Math.random() * m;
          if (!l) return s;
          var i = Math.random() * 10;
          return i > 5 ? s : s * -1;
        };
      function v(f) {
        var m =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : 100,
          l = null,
          s = this;
        return function () {
          for (var i = arguments.length, u = new Array(i), e = 0; e < i; e++)
            u[e] = arguments[e];
          l ||
            (l = setTimeout(() => {
              f.apply(s, u);
            }, m));
        };
      }
      function c(f) {
        var m =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : 100,
          l = null,
          s = this;
        return function () {
          for (var i = arguments.length, u = new Array(i), e = 0; e < i; e++)
            u[e] = arguments[e];
          l && clearTimeout(l),
            (l = setTimeout(() => {
              f.apply(s, u);
            }, m));
        };
      }
    },
  },
]);
