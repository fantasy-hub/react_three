(self.webpackChunk = self.webpackChunk || []).push([
  [81],
  {
    2639: function (E) {
      E.exports = { container: 'container___2dChQ' };
    },
    7487: function (E, _, o) {
      'use strict';
      var r = o(7294),
        l = (u) => {
          var m = u.meshsRef,
            c = u.sceneRef,
            h = u.renderRef,
            D = u.animateIDRef,
            a = u.lightsRef,
            d = u.floorRef,
            t = (0, r.useCallback)(() => {
              var n;
              m.forEach((e) => {
                var v, R;
                e == null ||
                  (v = e.geometry) === null ||
                  v === void 0 ||
                  v.dispose(),
                  e == null ||
                    (R = e.material) === null ||
                    R === void 0 ||
                    R.dispose(),
                  c.remove(e);
              }),
                a == null ||
                  a.forEach((e) => {
                    c.remove(e);
                  }),
                d == null ||
                  (n = d.current) === null ||
                  n === void 0 ||
                  n.forEach((e) => {
                    c.remove(e);
                  }),
                h.dispose(),
                cancelAnimationFrame(D.current);
            }, [u]);
          return { disposeAll: t };
        };
      _.Z = l;
    },
    397: function (E, _, o) {
      'use strict';
      o.r(_),
        o.d(_, {
          default: function () {
            return D;
          },
        });
      var r = o(7294),
        l = o(2212),
        u = o(7487),
        m = o(2639),
        c = o.n(m),
        h = o(5893);
      function D() {
        var a = (0, r.useRef)(null),
          d = (0, r.useRef)(new l.Scene()).current,
          t = (0, r.useRef)(new l.PerspectiveCamera()).current,
          n = (0, r.useRef)(new l.WebGLRenderer({ antialias: !0 })).current,
          e = (0, r.useRef)([]).current,
          v = (0, r.useRef)(),
          R = (0, r.useCallback)(() => {
            var s = new l.BoxGeometry(2, 2, 2),
              M = new l.MeshBasicMaterial({ color: '#1890ff' }),
              i = new l.Mesh(s, M);
            d.add(i), e.push(i);
          }, []),
          C = (0, r.useCallback)(() => {
            var s = () => {
                var i, f;
                n.setSize(
                  (i = a.current) === null || i === void 0
                    ? void 0
                    : i.offsetWidth,
                  (f = a.current) === null || f === void 0
                    ? void 0
                    : f.offsetHeight,
                );
              },
              M = () => {
                var i, f;
                (t.fov = 45),
                  (t.aspect =
                    ((i = a.current) === null || i === void 0
                      ? void 0
                      : i.offsetWidth) /
                    ((f = a.current) === null || f === void 0
                      ? void 0
                      : f.offsetHeight)),
                  (t.near = 1),
                  (t.far = 1e3),
                  t.position.set(0, 0, 20),
                  t.lookAt(0, 0, 0),
                  t.updateProjectionMatrix();
              };
            s(), M();
          }, [a, n]),
          P = (0, r.useCallback)(() => {
            n.render(d, t),
              e.forEach((s) => {
                (s.rotation.x += (0.5 / 180) * Math.PI),
                  (s.rotation.y += (0.5 / 180) * Math.PI);
              }),
              (v.current = window.requestAnimationFrame(P));
          }, [n, e]),
          O = (0, u.Z)({
            meshsRef: e,
            sceneRef: d,
            renderRef: n,
            animateIDRef: v,
          }),
          A = O.disposeAll;
        return (
          (0, r.useEffect)(() => {
            var s;
            return (
              (s = a.current) === null ||
                s === void 0 ||
                s.append(n == null ? void 0 : n.domElement),
              C(),
              R(),
              P(),
              () => {
                A();
              }
            );
          }, []),
          (0, h.jsx)('div', { className: c().container, ref: a })
        );
      }
    },
  },
]);
