(self.webpackChunk = self.webpackChunk || []).push([
  [273],
  {
    6812: function (T) {
      T.exports = { container: 'container___4TAg4' };
    },
    7487: function (T, A, t) {
      'use strict';
      var d = t(7294),
        x = (e) => {
          var n = e.meshsRef,
            h = e.sceneRef,
            y = e.renderRef,
            O = e.animateIDRef,
            f = e.lightsRef,
            m = e.floorRef,
            P = (0, d.useCallback)(() => {
              var g;
              n.forEach((i) => {
                var v, c;
                i == null ||
                  (v = i.geometry) === null ||
                  v === void 0 ||
                  v.dispose(),
                  i == null ||
                    (c = i.material) === null ||
                    c === void 0 ||
                    c.dispose(),
                  h.remove(i);
              }),
                f == null ||
                  f.forEach((i) => {
                    h.remove(i);
                  }),
                m == null ||
                  (g = m.current) === null ||
                  g === void 0 ||
                  g.forEach((i) => {
                    h.remove(i);
                  }),
                y.dispose(),
                cancelAnimationFrame(O.current);
            }, [e]);
          return { disposeAll: P };
        };
      A.Z = x;
    },
    718: function (T, A, t) {
      'use strict';
      var d = t(7294),
        x = (e) => {
          var n = e.cameraRef,
            h = e.hypotenuse,
            y = h === void 0 ? 20 : h,
            O = e.onTop,
            f = (0, d.useRef)(!1),
            m = (0, d.useRef)(y),
            P = (0, d.useRef)(0),
            g = (0, d.useCallback)(
              function (o) {
                var _ =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : { fixY: !1 },
                  E = _.fixY,
                  w = n.position.y,
                  C = o.movementY,
                  p = Math.cos((P.current / 180) * Math.PI),
                  D = Math.sin((P.current / 180) * Math.PI),
                  R = m.current * p,
                  b = E ? w : w + C * 0.1,
                  U = m.current * D;
                O && b < 5 && (b = 5),
                  n.position.set(R, b, U),
                  n.lookAt(0, 0, 0);
              },
              [e],
            ),
            i = (0, d.useCallback)(() => (f.current = !0), []),
            v = (0, d.useCallback)(() => (f.current = !1), []),
            c = (0, d.useCallback)((o) => {
              if (!!f.current) {
                var _ = o.movementX;
                (P.current -= _ * 0.5), g(o);
              }
            }, []),
            s = (0, d.useCallback)((o) => {
              var _ = o.deltaY,
                E = n.position,
                w = E.x,
                C = E.y,
                p = E.z;
              _ > 0 ? (p += 2) : (p -= 2),
                n.position.set(w, C, p),
                n.lookAt(0, 0, 0);
            }, []);
          return {
            onMouseDown: i,
            onMouseUp: v,
            onMouseMove: c,
            hypotenuseRef: m,
            onWheel: s,
          };
        };
      A.Z = x;
    },
    1030: function (T, A, t) {
      'use strict';
      t.r(A),
        t.d(A, {
          default: function () {
            return i;
          },
        });
      var d = t(8870),
        x = t(7337),
        e = t(7294),
        n = t(2212),
        h = t(6209),
        y = t(7047),
        O = t(7487),
        f = t(718),
        m = t(6812),
        P = t.n(m),
        g = t(5893);
      function i() {
        var v = (0, e.useRef)(null),
          c = (0, e.useRef)(new n.Scene()).current,
          s = (0, e.useRef)(new n.PerspectiveCamera()).current,
          o = (0, e.useRef)(new n.WebGLRenderer({ antialias: !0 })).current,
          _ = (0, e.useRef)([]).current,
          E = (0, e.useRef)(),
          w = (0, e.useRef)([]).current,
          C = (0, e.useRef)([]),
          p = (0, e.useRef)(new n.Clock()),
          D = (0, e.useRef)(),
          R = (0, e.useRef)(),
          b = (0, e.useState)(0),
          U = (0, x.Z)(b, 2),
          ne = U[0],
          L = U[1],
          W = (0, f.Z)({ cameraRef: s, hypotenuse: 40, onTop: !0 }),
          F = W.onMouseDown,
          S = W.onMouseUp,
          K = W.onMouseMove,
          $ = W.hypotenuseRef,
          j = W.onWheel,
          z = (0, e.useCallback)(() => {
            (s.aspect = window.innerWidth / window.innerHeight),
              s.updateProjectionMatrix(),
              o.setSize(window.innerWidth, window.innerHeight);
          }, [s, o]),
          re = (0, e.useCallback)(() => {
            var a = new n.LoadingManager();
            (a.onLoad = () => L(100)),
              (a.onStart = (r, l, M) => L(l / M)),
              (a.onProgress = (r, l, M) => L(l / M));
            var u = new h.y(a);
            u.load('fbx/static/gtx2.fbx', (r) => {
              r.position.set(0, 0, -4),
                r.scale.set(0.05, 0.05, 0.05),
                Z(r),
                k(r);
            });
          }, []),
          Y = (0, e.useCallback)(() => {
            var a = new n.LoadingManager();
            (a.onLoad = () => L(100)),
              (a.onStart = (r, l, M) => L(l / M)),
              (a.onProgress = (r, l, M) => L(l / M));
            var u = new y.E(a);
            u.load('fbx/static/i10.gltf', (r) => {
              console.log('obj', r),
                r.scene.scale.set(2, 2, 2),
                (D.current = new n.AnimationMixer(r.scene));
              var l = D.current.clipAction(r.animations[0]);
              l.play(), k(r.scene);
            });
          }, []),
          Z = (0, e.useCallback)((a) => {
            console.log('animateMixer', a),
              (D.current = new n.AnimationMixer(a));
            var u = D.current.clipAction(a.animations[0]);
            return u.play(), a;
          }, []),
          G = (0, e.useCallback)(() => {
            var a = new n.AudioListener();
            s.add(a), (R.current = new n.Audio(a));
            var u = new n.AudioLoader();
            u.load('mp3/LiSA&Uru-\u518D\u4F1A(produced by Ayase).mp3', (r) => {
              R.current.setBuffer(r),
                R.current.setLoop(!0),
                R.current.setVolume(0.4),
                R.current.play();
            });
          }, [R]),
          k = (0, e.useCallback)(
            (a) => {
              c.add(a), _.push(a);
            },
            [c, _],
          ),
          H = (0, e.useCallback)(() => {
            var a = () => {
                var r, l;
                o.setPixelRatio(window.devicePixelRatio),
                  (o.shadowMap.enabled = !0),
                  o.setSize(
                    (r = v.current) === null || r === void 0
                      ? void 0
                      : r.offsetWidth,
                    (l = v.current) === null || l === void 0
                      ? void 0
                      : l.offsetHeight,
                  );
              },
              u = () => {
                (s.fov = 45),
                  (s.aspect = window.innerWidth / window.innerHeight),
                  (s.near = 1),
                  (s.far = 1e3),
                  s.position.set(0, 6, $.current),
                  s.lookAt(0, 0),
                  s.updateProjectionMatrix();
              };
            a(), u();
          }, [v, o, s]),
          B = (0, e.useCallback)(() => {
            if ((o.render(c, s), D.current)) {
              var a = p.current.getDelta();
              D.current.update(a);
            }
            E.current = window.requestAnimationFrame(B);
          }, [o, _]),
          X = (0, e.useCallback)(() => {
            var a = new n.DirectionalLight(16777215, 1);
            a.position.set(100, 200, 100),
              (a.castShadow = !0),
              c.add(a),
              w.push(a);
          }, []),
          N = (0, e.useCallback)(() => {
            var a = function (M) {
                var Q =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                  q =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : [0, 0, 0],
                  ee = new n.PlaneGeometry(50, 50),
                  ae = new n[M](
                    (0, d.Z)((0, d.Z)({}, Q), {}, { side: n.DoubleSide }),
                  ),
                  I = new n.Mesh(ee, ae);
                return (
                  (I.receiveShadow = !0),
                  I.position.set(...q),
                  (I.rotation.x = (-90 / 180) * Math.PI),
                  I
                );
              },
              u = a('MeshBasicMaterial', { color: 16777215 }),
              r = a('ShadowMaterial', { color: 6908265 });
            c.add(u), c.add(r), (C.current = [u, r]);
          }, []),
          V = (0, O.Z)({
            meshsRef: _,
            sceneRef: c,
            renderRef: o,
            animateIDRef: E,
            lightsRef: w,
            floorRef: C,
          }),
          J = V.disposeAll;
        return (
          (0, e.useEffect)(() => {
            var a,
              u = document.createElement('div');
            return (
              u.click(),
              window.addEventListener('resize', z, !1),
              (a = v.current) === null ||
                a === void 0 ||
                a.append(o == null ? void 0 : o.domElement),
              H(),
              B(),
              X(),
              N(),
              G(),
              Y(),
              () => {
                J(), R.current.stop();
              }
            );
          }, []),
          (0, g.jsx)('div', {
            className: P().container,
            ref: v,
            onMouseDown: F,
            onMouseUp: S,
            onMouseMove: K,
            onWheel: j,
          })
        );
      }
    },
  },
]);
