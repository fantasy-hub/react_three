(self.webpackChunk = self.webpackChunk || []).push([
  [47],
  {
    7047: function (He, se, j) {
      'use strict';
      j.d(se, {
        E: function () {
          return ne;
        },
      });
      var u = j(2212);
      class ne extends u.Loader {
        constructor(s) {
          super(s);
          (this.dracoLoader = null),
            (this.ktx2Loader = null),
            (this.meshoptDecoder = null),
            (this.pluginCallbacks = []),
            this.register(function (e) {
              return new ae(e);
            }),
            this.register(function (e) {
              return new pe(e);
            }),
            this.register(function (e) {
              return new me(e);
            }),
            this.register(function (e) {
              return new le(e);
            }),
            this.register(function (e) {
              return new ue(e);
            }),
            this.register(function (e) {
              return new fe(e);
            }),
            this.register(function (e) {
              return new de(e);
            }),
            this.register(function (e) {
              return new oe(e);
            }),
            this.register(function (e) {
              return new he(e);
            }),
            this.register(function (e) {
              return new ce(e);
            }),
            this.register(function (e) {
              return new ie(e);
            }),
            this.register(function (e) {
              return new ge(e);
            });
        }
        load(s, e, r, n) {
          const i = this;
          let t;
          this.resourcePath !== ''
            ? (t = this.resourcePath)
            : this.path !== ''
            ? (t = this.path)
            : (t = u.LoaderUtils.extractUrlBase(s)),
            this.manager.itemStart(s);
          const a = function (c) {
              n ? n(c) : console.error(c),
                i.manager.itemError(s),
                i.manager.itemEnd(s);
            },
            o = new u.FileLoader(this.manager);
          o.setPath(this.path),
            o.setResponseType('arraybuffer'),
            o.setRequestHeader(this.requestHeader),
            o.setWithCredentials(this.withCredentials),
            o.load(
              s,
              function (c) {
                try {
                  i.parse(
                    c,
                    t,
                    function (f) {
                      e(f), i.manager.itemEnd(s);
                    },
                    a,
                  );
                } catch (f) {
                  a(f);
                }
              },
              r,
              a,
            );
        }
        setDRACOLoader(s) {
          return (this.dracoLoader = s), this;
        }
        setDDSLoader() {
          throw new Error(
            'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".',
          );
        }
        setKTX2Loader(s) {
          return (this.ktx2Loader = s), this;
        }
        setMeshoptDecoder(s) {
          return (this.meshoptDecoder = s), this;
        }
        register(s) {
          return (
            this.pluginCallbacks.indexOf(s) === -1 &&
              this.pluginCallbacks.push(s),
            this
          );
        }
        unregister(s) {
          return (
            this.pluginCallbacks.indexOf(s) !== -1 &&
              this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(s), 1),
            this
          );
        }
        parse(s, e, r, n) {
          let i;
          const t = {},
            a = {};
          if (typeof s == 'string') i = s;
          else if (u.LoaderUtils.decodeText(new Uint8Array(s, 0, 4)) === V) {
            try {
              t[m.KHR_BINARY_GLTF] = new Te(s);
            } catch (l) {
              n && n(l);
              return;
            }
            i = t[m.KHR_BINARY_GLTF].content;
          } else i = u.LoaderUtils.decodeText(new Uint8Array(s));
          const o = JSON.parse(i);
          if (o.asset === void 0 || o.asset.version[0] < 2) {
            n &&
              n(
                new Error(
                  'THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.',
                ),
              );
            return;
          }
          const c = new Ne(o, {
            path: e || this.resourcePath || '',
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder,
          });
          c.fileLoader.setRequestHeader(this.requestHeader);
          for (let f = 0; f < this.pluginCallbacks.length; f++) {
            const l = this.pluginCallbacks[f](c);
            (a[l.name] = l), (t[l.name] = !0);
          }
          if (o.extensionsUsed)
            for (let f = 0; f < o.extensionsUsed.length; ++f) {
              const l = o.extensionsUsed[f],
                h = o.extensionsRequired || [];
              switch (l) {
                case m.KHR_MATERIALS_UNLIT:
                  t[l] = new re();
                  break;
                case m.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                  t[l] = new Ee();
                  break;
                case m.KHR_DRACO_MESH_COMPRESSION:
                  t[l] = new Me(o, this.dracoLoader);
                  break;
                case m.KHR_TEXTURE_TRANSFORM:
                  t[l] = new xe();
                  break;
                case m.KHR_MESH_QUANTIZATION:
                  t[l] = new Re();
                  break;
                default:
                  h.indexOf(l) >= 0 &&
                    a[l] === void 0 &&
                    console.warn(
                      'THREE.GLTFLoader: Unknown extension "' + l + '".',
                    );
              }
            }
          c.setExtensions(t), c.setPlugins(a), c.parse(r, n);
        }
        parseAsync(s, e) {
          const r = this;
          return new Promise(function (n, i) {
            r.parse(s, e, n, i);
          });
        }
      }
      function te() {
        let d = {};
        return {
          get: function (s) {
            return d[s];
          },
          add: function (s, e) {
            d[s] = e;
          },
          remove: function (s) {
            delete d[s];
          },
          removeAll: function () {
            d = {};
          },
        };
      }
      const m = {
        KHR_BINARY_GLTF: 'KHR_binary_glTF',
        KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
        KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
        KHR_MATERIALS_CLEARCOAT: 'KHR_materials_clearcoat',
        KHR_MATERIALS_IOR: 'KHR_materials_ior',
        KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
          'KHR_materials_pbrSpecularGlossiness',
        KHR_MATERIALS_SHEEN: 'KHR_materials_sheen',
        KHR_MATERIALS_SPECULAR: 'KHR_materials_specular',
        KHR_MATERIALS_TRANSMISSION: 'KHR_materials_transmission',
        KHR_MATERIALS_IRIDESCENCE: 'KHR_materials_iridescence',
        KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
        KHR_MATERIALS_VOLUME: 'KHR_materials_volume',
        KHR_TEXTURE_BASISU: 'KHR_texture_basisu',
        KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
        KHR_MESH_QUANTIZATION: 'KHR_mesh_quantization',
        KHR_MATERIALS_EMISSIVE_STRENGTH: 'KHR_materials_emissive_strength',
        EXT_TEXTURE_WEBP: 'EXT_texture_webp',
        EXT_MESHOPT_COMPRESSION: 'EXT_meshopt_compression',
      };
      class ie {
        constructor(s) {
          (this.parser = s),
            (this.name = m.KHR_LIGHTS_PUNCTUAL),
            (this.cache = { refs: {}, uses: {} });
        }
        _markDefs() {
          const s = this.parser,
            e = this.parser.json.nodes || [];
          for (let r = 0, n = e.length; r < n; r++) {
            const i = e[r];
            i.extensions &&
              i.extensions[this.name] &&
              i.extensions[this.name].light !== void 0 &&
              s._addNodeRef(this.cache, i.extensions[this.name].light);
          }
        }
        _loadLight(s) {
          const e = this.parser,
            r = 'light:' + s;
          let n = e.cache.get(r);
          if (n) return n;
          const i = e.json,
            o = (((i.extensions && i.extensions[this.name]) || {}).lights ||
              [])[s];
          let c;
          const f = new u.Color(16777215);
          o.color !== void 0 && f.fromArray(o.color);
          const l = o.range !== void 0 ? o.range : 0;
          switch (o.type) {
            case 'directional':
              (c = new u.DirectionalLight(f)),
                c.target.position.set(0, 0, -1),
                c.add(c.target);
              break;
            case 'point':
              (c = new u.PointLight(f)), (c.distance = l);
              break;
            case 'spot':
              (c = new u.SpotLight(f)),
                (c.distance = l),
                (o.spot = o.spot || {}),
                (o.spot.innerConeAngle =
                  o.spot.innerConeAngle !== void 0 ? o.spot.innerConeAngle : 0),
                (o.spot.outerConeAngle =
                  o.spot.outerConeAngle !== void 0
                    ? o.spot.outerConeAngle
                    : Math.PI / 4),
                (c.angle = o.spot.outerConeAngle),
                (c.penumbra =
                  1 - o.spot.innerConeAngle / o.spot.outerConeAngle),
                c.target.position.set(0, 0, -1),
                c.add(c.target);
              break;
            default:
              throw new Error(
                'THREE.GLTFLoader: Unexpected light type: ' + o.type,
              );
          }
          return (
            c.position.set(0, 0, 0),
            (c.decay = 2),
            o.intensity !== void 0 && (c.intensity = o.intensity),
            (c.name = e.createUniqueName(o.name || 'light_' + s)),
            (n = Promise.resolve(c)),
            e.cache.add(r, n),
            n
          );
        }
        createNodeAttachment(s) {
          const e = this,
            r = this.parser,
            i = r.json.nodes[s],
            a = ((i.extensions && i.extensions[this.name]) || {}).light;
          return a === void 0
            ? null
            : this._loadLight(a).then(function (o) {
                return r._getNodeRef(e.cache, a, o);
              });
        }
      }
      class re {
        constructor() {
          this.name = m.KHR_MATERIALS_UNLIT;
        }
        getMaterialType() {
          return u.MeshBasicMaterial;
        }
        extendParams(s, e, r) {
          const n = [];
          (s.color = new u.Color(1, 1, 1)), (s.opacity = 1);
          const i = e.pbrMetallicRoughness;
          if (i) {
            if (Array.isArray(i.baseColorFactor)) {
              const t = i.baseColorFactor;
              s.color.fromArray(t), (s.opacity = t[3]);
            }
            i.baseColorTexture !== void 0 &&
              n.push(
                r.assignTexture(s, 'map', i.baseColorTexture, u.sRGBEncoding),
              );
          }
          return Promise.all(n);
        }
      }
      class oe {
        constructor(s) {
          (this.parser = s), (this.name = m.KHR_MATERIALS_EMISSIVE_STRENGTH);
        }
        extendMaterialParams(s, e) {
          const n = this.parser.json.materials[s];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          const i = n.extensions[this.name].emissiveStrength;
          return i !== void 0 && (e.emissiveIntensity = i), Promise.resolve();
        }
      }
      class ae {
        constructor(s) {
          (this.parser = s), (this.name = m.KHR_MATERIALS_CLEARCOAT);
        }
        getMaterialType(s) {
          const r = this.parser.json.materials[s];
          return !r.extensions || !r.extensions[this.name]
            ? null
            : u.MeshPhysicalMaterial;
        }
        extendMaterialParams(s, e) {
          const r = this.parser,
            n = r.json.materials[s];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          const i = [],
            t = n.extensions[this.name];
          if (
            (t.clearcoatFactor !== void 0 && (e.clearcoat = t.clearcoatFactor),
            t.clearcoatTexture !== void 0 &&
              i.push(r.assignTexture(e, 'clearcoatMap', t.clearcoatTexture)),
            t.clearcoatRoughnessFactor !== void 0 &&
              (e.clearcoatRoughness = t.clearcoatRoughnessFactor),
            t.clearcoatRoughnessTexture !== void 0 &&
              i.push(
                r.assignTexture(
                  e,
                  'clearcoatRoughnessMap',
                  t.clearcoatRoughnessTexture,
                ),
              ),
            t.clearcoatNormalTexture !== void 0 &&
              (i.push(
                r.assignTexture(
                  e,
                  'clearcoatNormalMap',
                  t.clearcoatNormalTexture,
                ),
              ),
              t.clearcoatNormalTexture.scale !== void 0))
          ) {
            const a = t.clearcoatNormalTexture.scale;
            e.clearcoatNormalScale = new u.Vector2(a, a);
          }
          return Promise.all(i);
        }
      }
      class ce {
        constructor(s) {
          (this.parser = s), (this.name = m.KHR_MATERIALS_IRIDESCENCE);
        }
        getMaterialType(s) {
          const r = this.parser.json.materials[s];
          return !r.extensions || !r.extensions[this.name]
            ? null
            : u.MeshPhysicalMaterial;
        }
        extendMaterialParams(s, e) {
          const r = this.parser,
            n = r.json.materials[s];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          const i = [],
            t = n.extensions[this.name];
          return (
            t.iridescenceFactor !== void 0 &&
              (e.iridescence = t.iridescenceFactor),
            t.iridescenceTexture !== void 0 &&
              i.push(
                r.assignTexture(e, 'iridescenceMap', t.iridescenceTexture),
              ),
            t.iridescenceIor !== void 0 &&
              (e.iridescenceIOR = t.iridescenceIor),
            e.iridescenceThicknessRange === void 0 &&
              (e.iridescenceThicknessRange = [100, 400]),
            t.iridescenceThicknessMinimum !== void 0 &&
              (e.iridescenceThicknessRange[0] = t.iridescenceThicknessMinimum),
            t.iridescenceThicknessMaximum !== void 0 &&
              (e.iridescenceThicknessRange[1] = t.iridescenceThicknessMaximum),
            t.iridescenceThicknessTexture !== void 0 &&
              i.push(
                r.assignTexture(
                  e,
                  'iridescenceThicknessMap',
                  t.iridescenceThicknessTexture,
                ),
              ),
            Promise.all(i)
          );
        }
      }
      class le {
        constructor(s) {
          (this.parser = s), (this.name = m.KHR_MATERIALS_SHEEN);
        }
        getMaterialType(s) {
          const r = this.parser.json.materials[s];
          return !r.extensions || !r.extensions[this.name]
            ? null
            : u.MeshPhysicalMaterial;
        }
        extendMaterialParams(s, e) {
          const r = this.parser,
            n = r.json.materials[s];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          const i = [];
          (e.sheenColor = new u.Color(0, 0, 0)),
            (e.sheenRoughness = 0),
            (e.sheen = 1);
          const t = n.extensions[this.name];
          return (
            t.sheenColorFactor !== void 0 &&
              e.sheenColor.fromArray(t.sheenColorFactor),
            t.sheenRoughnessFactor !== void 0 &&
              (e.sheenRoughness = t.sheenRoughnessFactor),
            t.sheenColorTexture !== void 0 &&
              i.push(
                r.assignTexture(
                  e,
                  'sheenColorMap',
                  t.sheenColorTexture,
                  u.sRGBEncoding,
                ),
              ),
            t.sheenRoughnessTexture !== void 0 &&
              i.push(
                r.assignTexture(
                  e,
                  'sheenRoughnessMap',
                  t.sheenRoughnessTexture,
                ),
              ),
            Promise.all(i)
          );
        }
      }
      class ue {
        constructor(s) {
          (this.parser = s), (this.name = m.KHR_MATERIALS_TRANSMISSION);
        }
        getMaterialType(s) {
          const r = this.parser.json.materials[s];
          return !r.extensions || !r.extensions[this.name]
            ? null
            : u.MeshPhysicalMaterial;
        }
        extendMaterialParams(s, e) {
          const r = this.parser,
            n = r.json.materials[s];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          const i = [],
            t = n.extensions[this.name];
          return (
            t.transmissionFactor !== void 0 &&
              (e.transmission = t.transmissionFactor),
            t.transmissionTexture !== void 0 &&
              i.push(
                r.assignTexture(e, 'transmissionMap', t.transmissionTexture),
              ),
            Promise.all(i)
          );
        }
      }
      class fe {
        constructor(s) {
          (this.parser = s), (this.name = m.KHR_MATERIALS_VOLUME);
        }
        getMaterialType(s) {
          const r = this.parser.json.materials[s];
          return !r.extensions || !r.extensions[this.name]
            ? null
            : u.MeshPhysicalMaterial;
        }
        extendMaterialParams(s, e) {
          const r = this.parser,
            n = r.json.materials[s];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          const i = [],
            t = n.extensions[this.name];
          (e.thickness = t.thicknessFactor !== void 0 ? t.thicknessFactor : 0),
            t.thicknessTexture !== void 0 &&
              i.push(r.assignTexture(e, 'thicknessMap', t.thicknessTexture)),
            (e.attenuationDistance = t.attenuationDistance || 0);
          const a = t.attenuationColor || [1, 1, 1];
          return (
            (e.attenuationColor = new u.Color(a[0], a[1], a[2])), Promise.all(i)
          );
        }
      }
      class de {
        constructor(s) {
          (this.parser = s), (this.name = m.KHR_MATERIALS_IOR);
        }
        getMaterialType(s) {
          const r = this.parser.json.materials[s];
          return !r.extensions || !r.extensions[this.name]
            ? null
            : u.MeshPhysicalMaterial;
        }
        extendMaterialParams(s, e) {
          const n = this.parser.json.materials[s];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          const i = n.extensions[this.name];
          return (e.ior = i.ior !== void 0 ? i.ior : 1.5), Promise.resolve();
        }
      }
      class he {
        constructor(s) {
          (this.parser = s), (this.name = m.KHR_MATERIALS_SPECULAR);
        }
        getMaterialType(s) {
          const r = this.parser.json.materials[s];
          return !r.extensions || !r.extensions[this.name]
            ? null
            : u.MeshPhysicalMaterial;
        }
        extendMaterialParams(s, e) {
          const r = this.parser,
            n = r.json.materials[s];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          const i = [],
            t = n.extensions[this.name];
          (e.specularIntensity =
            t.specularFactor !== void 0 ? t.specularFactor : 1),
            t.specularTexture !== void 0 &&
              i.push(
                r.assignTexture(e, 'specularIntensityMap', t.specularTexture),
              );
          const a = t.specularColorFactor || [1, 1, 1];
          return (
            (e.specularColor = new u.Color(a[0], a[1], a[2])),
            t.specularColorTexture !== void 0 &&
              i.push(
                r.assignTexture(
                  e,
                  'specularColorMap',
                  t.specularColorTexture,
                  u.sRGBEncoding,
                ),
              ),
            Promise.all(i)
          );
        }
      }
      class pe {
        constructor(s) {
          (this.parser = s), (this.name = m.KHR_TEXTURE_BASISU);
        }
        loadTexture(s) {
          const e = this.parser,
            r = e.json,
            n = r.textures[s];
          if (!n.extensions || !n.extensions[this.name]) return null;
          const i = n.extensions[this.name],
            t = e.options.ktx2Loader;
          if (!t) {
            if (
              r.extensionsRequired &&
              r.extensionsRequired.indexOf(this.name) >= 0
            )
              throw new Error(
                'THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures',
              );
            return null;
          }
          return e.loadTextureImage(s, i.source, t);
        }
      }
      class me {
        constructor(s) {
          (this.parser = s),
            (this.name = m.EXT_TEXTURE_WEBP),
            (this.isSupported = null);
        }
        loadTexture(s) {
          const e = this.name,
            r = this.parser,
            n = r.json,
            i = n.textures[s];
          if (!i.extensions || !i.extensions[e]) return null;
          const t = i.extensions[e],
            a = n.images[t.source];
          let o = r.textureLoader;
          if (a.uri) {
            const c = r.options.manager.getHandler(a.uri);
            c !== null && (o = c);
          }
          return this.detectSupport().then(function (c) {
            if (c) return r.loadTextureImage(s, t.source, o);
            if (n.extensionsRequired && n.extensionsRequired.indexOf(e) >= 0)
              throw new Error(
                'THREE.GLTFLoader: WebP required by asset but unsupported.',
              );
            return r.loadTexture(s);
          });
        }
        detectSupport() {
          return (
            this.isSupported ||
              (this.isSupported = new Promise(function (s) {
                const e = new Image();
                (e.src =
                  'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA'),
                  (e.onload = e.onerror =
                    function () {
                      s(e.height === 1);
                    });
              })),
            this.isSupported
          );
        }
      }
      class ge {
        constructor(s) {
          (this.name = m.EXT_MESHOPT_COMPRESSION), (this.parser = s);
        }
        loadBufferView(s) {
          const e = this.parser.json,
            r = e.bufferViews[s];
          if (r.extensions && r.extensions[this.name]) {
            const n = r.extensions[this.name],
              i = this.parser.getDependency('buffer', n.buffer),
              t = this.parser.options.meshoptDecoder;
            if (!t || !t.supported) {
              if (
                e.extensionsRequired &&
                e.extensionsRequired.indexOf(this.name) >= 0
              )
                throw new Error(
                  'THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files',
                );
              return null;
            }
            return Promise.all([i, t.ready]).then(function (a) {
              const o = n.byteOffset || 0,
                c = n.byteLength || 0,
                f = n.count,
                l = n.byteStride,
                h = new ArrayBuffer(f * l),
                p = new Uint8Array(a[0], o, c);
              return (
                t.decodeGltfBuffer(
                  new Uint8Array(h),
                  f,
                  l,
                  p,
                  n.mode,
                  n.filter,
                ),
                h
              );
            });
          } else return null;
        }
      }
      const V = 'glTF',
        v = 12,
        X = { JSON: 1313821514, BIN: 5130562 };
      class Te {
        constructor(s) {
          (this.name = m.KHR_BINARY_GLTF),
            (this.content = null),
            (this.body = null);
          const e = new DataView(s, 0, v);
          if (
            ((this.header = {
              magic: u.LoaderUtils.decodeText(new Uint8Array(s.slice(0, 4))),
              version: e.getUint32(4, !0),
              length: e.getUint32(8, !0),
            }),
            this.header.magic !== V)
          )
            throw new Error(
              'THREE.GLTFLoader: Unsupported glTF-Binary header.',
            );
          if (this.header.version < 2)
            throw new Error('THREE.GLTFLoader: Legacy binary file detected.');
          const r = this.header.length - v,
            n = new DataView(s, v);
          let i = 0;
          for (; i < r; ) {
            const t = n.getUint32(i, !0);
            i += 4;
            const a = n.getUint32(i, !0);
            if (((i += 4), a === X.JSON)) {
              const o = new Uint8Array(s, v + i, t);
              this.content = u.LoaderUtils.decodeText(o);
            } else if (a === X.BIN) {
              const o = v + i;
              this.body = s.slice(o, o + t);
            }
            i += t;
          }
          if (this.content === null)
            throw new Error('THREE.GLTFLoader: JSON content not found.');
        }
      }
      class Me {
        constructor(s, e) {
          if (!e)
            throw new Error(
              'THREE.GLTFLoader: No DRACOLoader instance provided.',
            );
          (this.name = m.KHR_DRACO_MESH_COMPRESSION),
            (this.json = s),
            (this.dracoLoader = e),
            this.dracoLoader.preload();
        }
        decodePrimitive(s, e) {
          const r = this.json,
            n = this.dracoLoader,
            i = s.extensions[this.name].bufferView,
            t = s.extensions[this.name].attributes,
            a = {},
            o = {},
            c = {};
          for (const f in t) {
            const l = k[f] || f.toLowerCase();
            a[l] = t[f];
          }
          for (const f in s.attributes) {
            const l = k[f] || f.toLowerCase();
            if (t[f] !== void 0) {
              const h = r.accessors[s.attributes[f]],
                p = H[h.componentType];
              (c[l] = p), (o[l] = h.normalized === !0);
            }
          }
          return e.getDependency('bufferView', i).then(function (f) {
            return new Promise(function (l) {
              n.decodeDracoFile(
                f,
                function (h) {
                  for (const p in h.attributes) {
                    const M = h.attributes[p],
                      x = o[p];
                    x !== void 0 && (M.normalized = x);
                  }
                  l(h);
                },
                a,
                c,
              );
            });
          });
        }
      }
      class xe {
        constructor() {
          this.name = m.KHR_TEXTURE_TRANSFORM;
        }
        extendTexture(s, e) {
          return (
            e.texCoord !== void 0 &&
              console.warn(
                'THREE.GLTFLoader: Custom UV sets in "' +
                  this.name +
                  '" extension not yet supported.',
              ),
            (e.offset === void 0 &&
              e.rotation === void 0 &&
              e.scale === void 0) ||
              ((s = s.clone()),
              e.offset !== void 0 && s.offset.fromArray(e.offset),
              e.rotation !== void 0 && (s.rotation = e.rotation),
              e.scale !== void 0 && s.repeat.fromArray(e.scale),
              (s.needsUpdate = !0)),
            s
          );
        }
      }
      class G extends u.MeshStandardMaterial {
        constructor(s) {
          super();
          this.isGLTFSpecularGlossinessMaterial = !0;
          const e = [
              '#ifdef USE_SPECULARMAP',
              '	uniform sampler2D specularMap;',
              '#endif',
            ].join(`
`),
            r = [
              '#ifdef USE_GLOSSINESSMAP',
              '	uniform sampler2D glossinessMap;',
              '#endif',
            ].join(`
`),
            n = [
              'vec3 specularFactor = specular;',
              '#ifdef USE_SPECULARMAP',
              '	vec4 texelSpecular = texture2D( specularMap, vUv );',
              '	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture',
              '	specularFactor *= texelSpecular.rgb;',
              '#endif',
            ].join(`
`),
            i = [
              'float glossinessFactor = glossiness;',
              '#ifdef USE_GLOSSINESSMAP',
              '	vec4 texelGlossiness = texture2D( glossinessMap, vUv );',
              '	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture',
              '	glossinessFactor *= texelGlossiness.a;',
              '#endif',
            ].join(`
`),
            t = [
              'PhysicalMaterial material;',
              'material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );',
              'vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );',
              'float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );',
              'material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.',
              'material.roughness += geometryRoughness;',
              'material.roughness = min( material.roughness, 1.0 );',
              'material.specularColor = specularFactor;',
            ].join(`
`),
            a = {
              specular: { value: new u.Color().setHex(16777215) },
              glossiness: { value: 1 },
              specularMap: { value: null },
              glossinessMap: { value: null },
            };
          (this._extraUniforms = a),
            (this.onBeforeCompile = function (o) {
              for (const c in a) o.uniforms[c] = a[c];
              o.fragmentShader = o.fragmentShader
                .replace('uniform float roughness;', 'uniform vec3 specular;')
                .replace(
                  'uniform float metalness;',
                  'uniform float glossiness;',
                )
                .replace('#include <roughnessmap_pars_fragment>', e)
                .replace('#include <metalnessmap_pars_fragment>', r)
                .replace('#include <roughnessmap_fragment>', n)
                .replace('#include <metalnessmap_fragment>', i)
                .replace('#include <lights_physical_fragment>', t);
            }),
            Object.defineProperties(this, {
              specular: {
                get: function () {
                  return a.specular.value;
                },
                set: function (o) {
                  a.specular.value = o;
                },
              },
              specularMap: {
                get: function () {
                  return a.specularMap.value;
                },
                set: function (o) {
                  (a.specularMap.value = o),
                    o
                      ? (this.defines.USE_SPECULARMAP = '')
                      : delete this.defines.USE_SPECULARMAP;
                },
              },
              glossiness: {
                get: function () {
                  return a.glossiness.value;
                },
                set: function (o) {
                  a.glossiness.value = o;
                },
              },
              glossinessMap: {
                get: function () {
                  return a.glossinessMap.value;
                },
                set: function (o) {
                  (a.glossinessMap.value = o),
                    o
                      ? ((this.defines.USE_GLOSSINESSMAP = ''),
                        (this.defines.USE_UV = ''))
                      : (delete this.defines.USE_GLOSSINESSMAP,
                        delete this.defines.USE_UV);
                },
              },
            }),
            delete this.metalness,
            delete this.roughness,
            delete this.metalnessMap,
            delete this.roughnessMap,
            this.setValues(s);
        }
        copy(s) {
          return (
            super.copy(s),
            (this.specularMap = s.specularMap),
            this.specular.copy(s.specular),
            (this.glossinessMap = s.glossinessMap),
            (this.glossiness = s.glossiness),
            delete this.metalness,
            delete this.roughness,
            delete this.metalnessMap,
            delete this.roughnessMap,
            this
          );
        }
      }
      class Ee {
        constructor() {
          (this.name = m.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS),
            (this.specularGlossinessParams = [
              'color',
              'map',
              'lightMap',
              'lightMapIntensity',
              'aoMap',
              'aoMapIntensity',
              'emissive',
              'emissiveIntensity',
              'emissiveMap',
              'bumpMap',
              'bumpScale',
              'normalMap',
              'normalMapType',
              'displacementMap',
              'displacementScale',
              'displacementBias',
              'specularMap',
              'specular',
              'glossinessMap',
              'glossiness',
              'alphaMap',
              'envMap',
              'envMapIntensity',
            ]);
        }
        getMaterialType() {
          return G;
        }
        extendParams(s, e, r) {
          const n = e.extensions[this.name];
          (s.color = new u.Color(1, 1, 1)), (s.opacity = 1);
          const i = [];
          if (Array.isArray(n.diffuseFactor)) {
            const t = n.diffuseFactor;
            s.color.fromArray(t), (s.opacity = t[3]);
          }
          if (
            (n.diffuseTexture !== void 0 &&
              i.push(
                r.assignTexture(s, 'map', n.diffuseTexture, u.sRGBEncoding),
              ),
            (s.emissive = new u.Color(0, 0, 0)),
            (s.glossiness =
              n.glossinessFactor !== void 0 ? n.glossinessFactor : 1),
            (s.specular = new u.Color(1, 1, 1)),
            Array.isArray(n.specularFactor) &&
              s.specular.fromArray(n.specularFactor),
            n.specularGlossinessTexture !== void 0)
          ) {
            const t = n.specularGlossinessTexture;
            i.push(r.assignTexture(s, 'glossinessMap', t)),
              i.push(r.assignTexture(s, 'specularMap', t, u.sRGBEncoding));
          }
          return Promise.all(i);
        }
        createMaterial(s) {
          const e = new G(s);
          return (
            (e.fog = !0),
            (e.color = s.color),
            (e.map = s.map === void 0 ? null : s.map),
            (e.lightMap = null),
            (e.lightMapIntensity = 1),
            (e.aoMap = s.aoMap === void 0 ? null : s.aoMap),
            (e.aoMapIntensity = 1),
            (e.emissive = s.emissive),
            (e.emissiveIntensity =
              s.emissiveIntensity === void 0 ? 1 : s.emissiveIntensity),
            (e.emissiveMap = s.emissiveMap === void 0 ? null : s.emissiveMap),
            (e.bumpMap = s.bumpMap === void 0 ? null : s.bumpMap),
            (e.bumpScale = 1),
            (e.normalMap = s.normalMap === void 0 ? null : s.normalMap),
            (e.normalMapType = u.TangentSpaceNormalMap),
            s.normalScale && (e.normalScale = s.normalScale),
            (e.displacementMap = null),
            (e.displacementScale = 1),
            (e.displacementBias = 0),
            (e.specularMap = s.specularMap === void 0 ? null : s.specularMap),
            (e.specular = s.specular),
            (e.glossinessMap =
              s.glossinessMap === void 0 ? null : s.glossinessMap),
            (e.glossiness = s.glossiness),
            (e.alphaMap = null),
            (e.envMap = s.envMap === void 0 ? null : s.envMap),
            (e.envMapIntensity = 1),
            e
          );
        }
      }
      class Re {
        constructor() {
          this.name = m.KHR_MESH_QUANTIZATION;
        }
      }
      class z extends u.Interpolant {
        constructor(s, e, r, n) {
          super(s, e, r, n);
        }
        copySampleValue_(s) {
          const e = this.resultBuffer,
            r = this.sampleValues,
            n = this.valueSize,
            i = s * n * 3 + n;
          for (let t = 0; t !== n; t++) e[t] = r[i + t];
          return e;
        }
        interpolate_(s, e, r, n) {
          const i = this.resultBuffer,
            t = this.sampleValues,
            a = this.valueSize,
            o = a * 2,
            c = a * 3,
            f = n - e,
            l = (r - e) / f,
            h = l * l,
            p = h * l,
            M = s * c,
            x = M - c,
            g = -2 * p + 3 * h,
            T = p - h,
            R = 1 - g,
            E = T - h + l;
          for (let S = 0; S !== a; S++) {
            const C = t[x + S + a],
              L = t[x + S + o] * f,
              A = t[M + S + a],
              b = t[M + S] * f;
            i[S] = R * C + E * L + g * A + T * b;
          }
          return i;
        }
      }
      const Ae = new u.Quaternion();
      class Se extends z {
        interpolate_(s, e, r, n) {
          const i = super.interpolate_(s, e, r, n);
          return Ae.fromArray(i).normalize().toArray(i), i;
        }
      }
      const y = {
          FLOAT: 5126,
          FLOAT_MAT3: 35675,
          FLOAT_MAT4: 35676,
          FLOAT_VEC2: 35664,
          FLOAT_VEC3: 35665,
          FLOAT_VEC4: 35666,
          LINEAR: 9729,
          REPEAT: 10497,
          SAMPLER_2D: 35678,
          POINTS: 0,
          LINES: 1,
          LINE_LOOP: 2,
          LINE_STRIP: 3,
          TRIANGLES: 4,
          TRIANGLE_STRIP: 5,
          TRIANGLE_FAN: 6,
          UNSIGNED_BYTE: 5121,
          UNSIGNED_SHORT: 5123,
        },
        H = {
          5120: Int8Array,
          5121: Uint8Array,
          5122: Int16Array,
          5123: Uint16Array,
          5125: Uint32Array,
          5126: Float32Array,
        },
        q = {
          9728: u.NearestFilter,
          9729: u.LinearFilter,
          9984: u.NearestMipmapNearestFilter,
          9985: u.LinearMipmapNearestFilter,
          9986: u.NearestMipmapLinearFilter,
          9987: u.LinearMipmapLinearFilter,
        },
        W = {
          33071: u.ClampToEdgeWrapping,
          33648: u.MirroredRepeatWrapping,
          10497: u.RepeatWrapping,
        },
        Y = {
          SCALAR: 1,
          VEC2: 2,
          VEC3: 3,
          VEC4: 4,
          MAT2: 4,
          MAT3: 9,
          MAT4: 16,
        },
        k = {
          POSITION: 'position',
          NORMAL: 'normal',
          TANGENT: 'tangent',
          TEXCOORD_0: 'uv',
          TEXCOORD_1: 'uv2',
          COLOR_0: 'color',
          WEIGHTS_0: 'skinWeight',
          JOINTS_0: 'skinIndex',
        },
        w = {
          scale: 'scale',
          translation: 'position',
          rotation: 'quaternion',
          weights: 'morphTargetInfluences',
        },
        Le = {
          CUBICSPLINE: void 0,
          LINEAR: u.InterpolateLinear,
          STEP: u.InterpolateDiscrete,
        },
        B = { OPAQUE: 'OPAQUE', MASK: 'MASK', BLEND: 'BLEND' };
      function _e(d) {
        return (
          d.DefaultMaterial === void 0 &&
            (d.DefaultMaterial = new u.MeshStandardMaterial({
              color: 16777215,
              emissive: 0,
              metalness: 1,
              roughness: 1,
              transparent: !1,
              depthTest: !0,
              side: u.FrontSide,
            })),
          d.DefaultMaterial
        );
      }
      function P(d, s, e) {
        for (const r in e.extensions)
          d[r] === void 0 &&
            ((s.userData.gltfExtensions = s.userData.gltfExtensions || {}),
            (s.userData.gltfExtensions[r] = e.extensions[r]));
      }
      function N(d, s) {
        s.extras !== void 0 &&
          (typeof s.extras == 'object'
            ? Object.assign(d.userData, s.extras)
            : console.warn(
                'THREE.GLTFLoader: Ignoring primitive type .extras, ' +
                  s.extras,
              ));
      }
      function ye(d, s, e) {
        let r = !1,
          n = !1,
          i = !1;
        for (let c = 0, f = s.length; c < f; c++) {
          const l = s[c];
          if (
            (l.POSITION !== void 0 && (r = !0),
            l.NORMAL !== void 0 && (n = !0),
            l.COLOR_0 !== void 0 && (i = !0),
            r && n && i)
          )
            break;
        }
        if (!r && !n && !i) return Promise.resolve(d);
        const t = [],
          a = [],
          o = [];
        for (let c = 0, f = s.length; c < f; c++) {
          const l = s[c];
          if (r) {
            const h =
              l.POSITION !== void 0
                ? e.getDependency('accessor', l.POSITION)
                : d.attributes.position;
            t.push(h);
          }
          if (n) {
            const h =
              l.NORMAL !== void 0
                ? e.getDependency('accessor', l.NORMAL)
                : d.attributes.normal;
            a.push(h);
          }
          if (i) {
            const h =
              l.COLOR_0 !== void 0
                ? e.getDependency('accessor', l.COLOR_0)
                : d.attributes.color;
            o.push(h);
          }
        }
        return Promise.all([
          Promise.all(t),
          Promise.all(a),
          Promise.all(o),
        ]).then(function (c) {
          const f = c[0],
            l = c[1],
            h = c[2];
          return (
            r && (d.morphAttributes.position = f),
            n && (d.morphAttributes.normal = l),
            i && (d.morphAttributes.color = h),
            (d.morphTargetsRelative = !0),
            d
          );
        });
      }
      function we(d, s) {
        if ((d.updateMorphTargets(), s.weights !== void 0))
          for (let e = 0, r = s.weights.length; e < r; e++)
            d.morphTargetInfluences[e] = s.weights[e];
        if (s.extras && Array.isArray(s.extras.targetNames)) {
          const e = s.extras.targetNames;
          if (d.morphTargetInfluences.length === e.length) {
            d.morphTargetDictionary = {};
            for (let r = 0, n = e.length; r < n; r++)
              d.morphTargetDictionary[e[r]] = r;
          } else
            console.warn(
              'THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.',
            );
        }
      }
      function be(d) {
        const s = d.extensions && d.extensions[m.KHR_DRACO_MESH_COMPRESSION];
        let e;
        return (
          s
            ? (e =
                'draco:' +
                s.bufferView +
                ':' +
                s.indices +
                ':' +
                Q(s.attributes))
            : (e = d.indices + ':' + Q(d.attributes) + ':' + d.mode),
          e
        );
      }
      function Q(d) {
        let s = '';
        const e = Object.keys(d).sort();
        for (let r = 0, n = e.length; r < n; r++)
          s += e[r] + ':' + d[e[r]] + ';';
        return s;
      }
      function K(d) {
        switch (d) {
          case Int8Array:
            return 1 / 127;
          case Uint8Array:
            return 1 / 255;
          case Int16Array:
            return 1 / 32767;
          case Uint16Array:
            return 1 / 65535;
          default:
            throw new Error(
              'THREE.GLTFLoader: Unsupported normalized accessor component type.',
            );
        }
      }
      function Ie(d) {
        return d.search(/\.jpe?g($|\?)/i) > 0 ||
          d.search(/^data\:image\/jpeg/) === 0
          ? 'image/jpeg'
          : d.search(/\.webp($|\?)/i) > 0 ||
            d.search(/^data\:image\/webp/) === 0
          ? 'image/webp'
          : 'image/png';
      }
      class Ne {
        constructor(s = {}, e = {}) {
          (this.json = s),
            (this.extensions = {}),
            (this.plugins = {}),
            (this.options = e),
            (this.cache = new te()),
            (this.associations = new Map()),
            (this.primitiveCache = {}),
            (this.meshCache = { refs: {}, uses: {} }),
            (this.cameraCache = { refs: {}, uses: {} }),
            (this.lightCache = { refs: {}, uses: {} }),
            (this.sourceCache = {}),
            (this.textureCache = {}),
            (this.nodeNamesUsed = {});
          const r =
              /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0,
            n = navigator.userAgent.indexOf('Firefox') > -1,
            i = n ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
          typeof createImageBitmap == 'undefined' || r || (n && i < 98)
            ? (this.textureLoader = new u.TextureLoader(this.options.manager))
            : (this.textureLoader = new u.ImageBitmapLoader(
                this.options.manager,
              )),
            this.textureLoader.setCrossOrigin(this.options.crossOrigin),
            this.textureLoader.setRequestHeader(this.options.requestHeader),
            (this.fileLoader = new u.FileLoader(this.options.manager)),
            this.fileLoader.setResponseType('arraybuffer'),
            this.options.crossOrigin === 'use-credentials' &&
              this.fileLoader.setWithCredentials(!0);
        }
        setExtensions(s) {
          this.extensions = s;
        }
        setPlugins(s) {
          this.plugins = s;
        }
        parse(s, e) {
          const r = this,
            n = this.json,
            i = this.extensions;
          this.cache.removeAll(),
            this._invokeAll(function (t) {
              return t._markDefs && t._markDefs();
            }),
            Promise.all(
              this._invokeAll(function (t) {
                return t.beforeRoot && t.beforeRoot();
              }),
            )
              .then(function () {
                return Promise.all([
                  r.getDependencies('scene'),
                  r.getDependencies('animation'),
                  r.getDependencies('camera'),
                ]);
              })
              .then(function (t) {
                const a = {
                  scene: t[0][n.scene || 0],
                  scenes: t[0],
                  animations: t[1],
                  cameras: t[2],
                  asset: n.asset,
                  parser: r,
                  userData: {},
                };
                P(i, a, n),
                  N(a, n),
                  Promise.all(
                    r._invokeAll(function (o) {
                      return o.afterRoot && o.afterRoot(a);
                    }),
                  ).then(function () {
                    s(a);
                  });
              })
              .catch(e);
        }
        _markDefs() {
          const s = this.json.nodes || [],
            e = this.json.skins || [],
            r = this.json.meshes || [];
          for (let n = 0, i = e.length; n < i; n++) {
            const t = e[n].joints;
            for (let a = 0, o = t.length; a < o; a++) s[t[a]].isBone = !0;
          }
          for (let n = 0, i = s.length; n < i; n++) {
            const t = s[n];
            t.mesh !== void 0 &&
              (this._addNodeRef(this.meshCache, t.mesh),
              t.skin !== void 0 && (r[t.mesh].isSkinnedMesh = !0)),
              t.camera !== void 0 &&
                this._addNodeRef(this.cameraCache, t.camera);
          }
        }
        _addNodeRef(s, e) {
          e !== void 0 &&
            (s.refs[e] === void 0 && (s.refs[e] = s.uses[e] = 0), s.refs[e]++);
        }
        _getNodeRef(s, e, r) {
          if (s.refs[e] <= 1) return r;
          const n = r.clone(),
            i = (t, a) => {
              const o = this.associations.get(t);
              o != null && this.associations.set(a, o);
              for (const [c, f] of t.children.entries()) i(f, a.children[c]);
            };
          return i(r, n), (n.name += '_instance_' + s.uses[e]++), n;
        }
        _invokeOne(s) {
          const e = Object.values(this.plugins);
          e.push(this);
          for (let r = 0; r < e.length; r++) {
            const n = s(e[r]);
            if (n) return n;
          }
          return null;
        }
        _invokeAll(s) {
          const e = Object.values(this.plugins);
          e.unshift(this);
          const r = [];
          for (let n = 0; n < e.length; n++) {
            const i = s(e[n]);
            i && r.push(i);
          }
          return r;
        }
        getDependency(s, e) {
          const r = s + ':' + e;
          let n = this.cache.get(r);
          if (!n) {
            switch (s) {
              case 'scene':
                n = this.loadScene(e);
                break;
              case 'node':
                n = this.loadNode(e);
                break;
              case 'mesh':
                n = this._invokeOne(function (i) {
                  return i.loadMesh && i.loadMesh(e);
                });
                break;
              case 'accessor':
                n = this.loadAccessor(e);
                break;
              case 'bufferView':
                n = this._invokeOne(function (i) {
                  return i.loadBufferView && i.loadBufferView(e);
                });
                break;
              case 'buffer':
                n = this.loadBuffer(e);
                break;
              case 'material':
                n = this._invokeOne(function (i) {
                  return i.loadMaterial && i.loadMaterial(e);
                });
                break;
              case 'texture':
                n = this._invokeOne(function (i) {
                  return i.loadTexture && i.loadTexture(e);
                });
                break;
              case 'skin':
                n = this.loadSkin(e);
                break;
              case 'animation':
                n = this._invokeOne(function (i) {
                  return i.loadAnimation && i.loadAnimation(e);
                });
                break;
              case 'camera':
                n = this.loadCamera(e);
                break;
              default:
                throw new Error('Unknown type: ' + s);
            }
            this.cache.add(r, n);
          }
          return n;
        }
        getDependencies(s) {
          let e = this.cache.get(s);
          if (!e) {
            const r = this,
              n = this.json[s + (s === 'mesh' ? 'es' : 's')] || [];
            (e = Promise.all(
              n.map(function (i, t) {
                return r.getDependency(s, t);
              }),
            )),
              this.cache.add(s, e);
          }
          return e;
        }
        loadBuffer(s) {
          const e = this.json.buffers[s],
            r = this.fileLoader;
          if (e.type && e.type !== 'arraybuffer')
            throw new Error(
              'THREE.GLTFLoader: ' + e.type + ' buffer type is not supported.',
            );
          if (e.uri === void 0 && s === 0)
            return Promise.resolve(this.extensions[m.KHR_BINARY_GLTF].body);
          const n = this.options;
          return new Promise(function (i, t) {
            r.load(
              u.LoaderUtils.resolveURL(e.uri, n.path),
              i,
              void 0,
              function () {
                t(
                  new Error(
                    'THREE.GLTFLoader: Failed to load buffer "' + e.uri + '".',
                  ),
                );
              },
            );
          });
        }
        loadBufferView(s) {
          const e = this.json.bufferViews[s];
          return this.getDependency('buffer', e.buffer).then(function (r) {
            const n = e.byteLength || 0,
              i = e.byteOffset || 0;
            return r.slice(i, i + n);
          });
        }
        loadAccessor(s) {
          const e = this,
            r = this.json,
            n = this.json.accessors[s];
          if (n.bufferView === void 0 && n.sparse === void 0)
            return Promise.resolve(null);
          const i = [];
          return (
            n.bufferView !== void 0
              ? i.push(this.getDependency('bufferView', n.bufferView))
              : i.push(null),
            n.sparse !== void 0 &&
              (i.push(
                this.getDependency('bufferView', n.sparse.indices.bufferView),
              ),
              i.push(
                this.getDependency('bufferView', n.sparse.values.bufferView),
              )),
            Promise.all(i).then(function (t) {
              const a = t[0],
                o = Y[n.type],
                c = H[n.componentType],
                f = c.BYTES_PER_ELEMENT,
                l = f * o,
                h = n.byteOffset || 0,
                p =
                  n.bufferView !== void 0
                    ? r.bufferViews[n.bufferView].byteStride
                    : void 0,
                M = n.normalized === !0;
              let x, g;
              if (p && p !== l) {
                const T = Math.floor(h / p),
                  R =
                    'InterleavedBuffer:' +
                    n.bufferView +
                    ':' +
                    n.componentType +
                    ':' +
                    T +
                    ':' +
                    n.count;
                let E = e.cache.get(R);
                E ||
                  ((x = new c(a, T * p, (n.count * p) / f)),
                  (E = new u.InterleavedBuffer(x, p / f)),
                  e.cache.add(R, E)),
                  (g = new u.InterleavedBufferAttribute(E, o, (h % p) / f, M));
              } else a === null ? (x = new c(n.count * o)) : (x = new c(a, h, n.count * o)), (g = new u.BufferAttribute(x, o, M));
              if (n.sparse !== void 0) {
                const T = Y.SCALAR,
                  R = H[n.sparse.indices.componentType],
                  E = n.sparse.indices.byteOffset || 0,
                  S = n.sparse.values.byteOffset || 0,
                  C = new R(t[1], E, n.sparse.count * T),
                  L = new c(t[2], S, n.sparse.count * o);
                a !== null &&
                  (g = new u.BufferAttribute(
                    g.array.slice(),
                    g.itemSize,
                    g.normalized,
                  ));
                for (let A = 0, b = C.length; A < b; A++) {
                  const F = C[A];
                  if (
                    (g.setX(F, L[A * o]),
                    o >= 2 && g.setY(F, L[A * o + 1]),
                    o >= 3 && g.setZ(F, L[A * o + 2]),
                    o >= 4 && g.setW(F, L[A * o + 3]),
                    o >= 5)
                  )
                    throw new Error(
                      'THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.',
                    );
                }
              }
              return g;
            })
          );
        }
        loadTexture(s) {
          const e = this.json,
            r = this.options,
            i = e.textures[s].source,
            t = e.images[i];
          let a = this.textureLoader;
          if (t.uri) {
            const o = r.manager.getHandler(t.uri);
            o !== null && (a = o);
          }
          return this.loadTextureImage(s, i, a);
        }
        loadTextureImage(s, e, r) {
          const n = this,
            i = this.json,
            t = i.textures[s],
            a = i.images[e],
            o = (a.uri || a.bufferView) + ':' + t.sampler;
          if (this.textureCache[o]) return this.textureCache[o];
          const c = this.loadImageSource(e, r)
            .then(function (f) {
              (f.flipY = !1), t.name && (f.name = t.name);
              const h = (i.samplers || {})[t.sampler] || {};
              return (
                (f.magFilter = q[h.magFilter] || u.LinearFilter),
                (f.minFilter = q[h.minFilter] || u.LinearMipmapLinearFilter),
                (f.wrapS = W[h.wrapS] || u.RepeatWrapping),
                (f.wrapT = W[h.wrapT] || u.RepeatWrapping),
                n.associations.set(f, { textures: s }),
                f
              );
            })
            .catch(function () {
              return null;
            });
          return (this.textureCache[o] = c), c;
        }
        loadImageSource(s, e) {
          const r = this,
            n = this.json,
            i = this.options;
          if (this.sourceCache[s] !== void 0)
            return this.sourceCache[s].then((l) => l.clone());
          const t = n.images[s],
            a = self.URL || self.webkitURL;
          let o = t.uri || '',
            c = !1;
          if (t.bufferView !== void 0)
            o = r.getDependency('bufferView', t.bufferView).then(function (l) {
              c = !0;
              const h = new Blob([l], { type: t.mimeType });
              return (o = a.createObjectURL(h)), o;
            });
          else if (t.uri === void 0)
            throw new Error(
              'THREE.GLTFLoader: Image ' + s + ' is missing URI and bufferView',
            );
          const f = Promise.resolve(o)
            .then(function (l) {
              return new Promise(function (h, p) {
                let M = h;
                e.isImageBitmapLoader === !0 &&
                  (M = function (x) {
                    const g = new u.Texture(x);
                    (g.needsUpdate = !0), h(g);
                  }),
                  e.load(u.LoaderUtils.resolveURL(l, i.path), M, void 0, p);
              });
            })
            .then(function (l) {
              return (
                c === !0 && a.revokeObjectURL(o),
                (l.userData.mimeType = t.mimeType || Ie(t.uri)),
                l
              );
            })
            .catch(function (l) {
              throw (
                (console.error("THREE.GLTFLoader: Couldn't load texture", o), l)
              );
            });
          return (this.sourceCache[s] = f), f;
        }
        assignTexture(s, e, r, n) {
          const i = this;
          return this.getDependency('texture', r.index).then(function (t) {
            if (
              (r.texCoord !== void 0 &&
                r.texCoord != 0 &&
                !(e === 'aoMap' && r.texCoord == 1) &&
                console.warn(
                  'THREE.GLTFLoader: Custom UV set ' +
                    r.texCoord +
                    ' for texture ' +
                    e +
                    ' not yet supported.',
                ),
              i.extensions[m.KHR_TEXTURE_TRANSFORM])
            ) {
              const a =
                r.extensions !== void 0
                  ? r.extensions[m.KHR_TEXTURE_TRANSFORM]
                  : void 0;
              if (a) {
                const o = i.associations.get(t);
                (t = i.extensions[m.KHR_TEXTURE_TRANSFORM].extendTexture(t, a)),
                  i.associations.set(t, o);
              }
            }
            return n !== void 0 && (t.encoding = n), (s[e] = t), t;
          });
        }
        assignFinalMaterial(s) {
          const e = s.geometry;
          let r = s.material;
          const n = e.attributes.tangent === void 0,
            i = e.attributes.color !== void 0,
            t = e.attributes.normal === void 0;
          if (s.isPoints) {
            const a = 'PointsMaterial:' + r.uuid;
            let o = this.cache.get(a);
            o ||
              ((o = new u.PointsMaterial()),
              u.Material.prototype.copy.call(o, r),
              o.color.copy(r.color),
              (o.map = r.map),
              (o.sizeAttenuation = !1),
              this.cache.add(a, o)),
              (r = o);
          } else if (s.isLine) {
            const a = 'LineBasicMaterial:' + r.uuid;
            let o = this.cache.get(a);
            o ||
              ((o = new u.LineBasicMaterial()),
              u.Material.prototype.copy.call(o, r),
              o.color.copy(r.color),
              this.cache.add(a, o)),
              (r = o);
          }
          if (n || i || t) {
            let a = 'ClonedMaterial:' + r.uuid + ':';
            r.isGLTFSpecularGlossinessMaterial && (a += 'specular-glossiness:'),
              n && (a += 'derivative-tangents:'),
              i && (a += 'vertex-colors:'),
              t && (a += 'flat-shading:');
            let o = this.cache.get(a);
            o ||
              ((o = r.clone()),
              i && (o.vertexColors = !0),
              t && (o.flatShading = !0),
              n &&
                (o.normalScale && (o.normalScale.y *= -1),
                o.clearcoatNormalScale && (o.clearcoatNormalScale.y *= -1)),
              this.cache.add(a, o),
              this.associations.set(o, this.associations.get(r))),
              (r = o);
          }
          r.aoMap &&
            e.attributes.uv2 === void 0 &&
            e.attributes.uv !== void 0 &&
            e.setAttribute('uv2', e.attributes.uv),
            (s.material = r);
        }
        getMaterialType() {
          return u.MeshStandardMaterial;
        }
        loadMaterial(s) {
          const e = this,
            r = this.json,
            n = this.extensions,
            i = r.materials[s];
          let t;
          const a = {},
            o = i.extensions || {},
            c = [];
          if (o[m.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            const l = n[m.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            (t = l.getMaterialType()), c.push(l.extendParams(a, i, e));
          } else if (o[m.KHR_MATERIALS_UNLIT]) {
            const l = n[m.KHR_MATERIALS_UNLIT];
            (t = l.getMaterialType()), c.push(l.extendParams(a, i, e));
          } else {
            const l = i.pbrMetallicRoughness || {};
            if (
              ((a.color = new u.Color(1, 1, 1)),
              (a.opacity = 1),
              Array.isArray(l.baseColorFactor))
            ) {
              const h = l.baseColorFactor;
              a.color.fromArray(h), (a.opacity = h[3]);
            }
            l.baseColorTexture !== void 0 &&
              c.push(
                e.assignTexture(a, 'map', l.baseColorTexture, u.sRGBEncoding),
              ),
              (a.metalness =
                l.metallicFactor !== void 0 ? l.metallicFactor : 1),
              (a.roughness =
                l.roughnessFactor !== void 0 ? l.roughnessFactor : 1),
              l.metallicRoughnessTexture !== void 0 &&
                (c.push(
                  e.assignTexture(
                    a,
                    'metalnessMap',
                    l.metallicRoughnessTexture,
                  ),
                ),
                c.push(
                  e.assignTexture(
                    a,
                    'roughnessMap',
                    l.metallicRoughnessTexture,
                  ),
                )),
              (t = this._invokeOne(function (h) {
                return h.getMaterialType && h.getMaterialType(s);
              })),
              c.push(
                Promise.all(
                  this._invokeAll(function (h) {
                    return (
                      h.extendMaterialParams && h.extendMaterialParams(s, a)
                    );
                  }),
                ),
              );
          }
          i.doubleSided === !0 && (a.side = u.DoubleSide);
          const f = i.alphaMode || B.OPAQUE;
          if (
            (f === B.BLEND
              ? ((a.transparent = !0), (a.depthWrite = !1))
              : ((a.transparent = !1),
                f === B.MASK &&
                  (a.alphaTest =
                    i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)),
            i.normalTexture !== void 0 &&
              t !== u.MeshBasicMaterial &&
              (c.push(e.assignTexture(a, 'normalMap', i.normalTexture)),
              (a.normalScale = new u.Vector2(1, 1)),
              i.normalTexture.scale !== void 0))
          ) {
            const l = i.normalTexture.scale;
            a.normalScale.set(l, l);
          }
          return (
            i.occlusionTexture !== void 0 &&
              t !== u.MeshBasicMaterial &&
              (c.push(e.assignTexture(a, 'aoMap', i.occlusionTexture)),
              i.occlusionTexture.strength !== void 0 &&
                (a.aoMapIntensity = i.occlusionTexture.strength)),
            i.emissiveFactor !== void 0 &&
              t !== u.MeshBasicMaterial &&
              (a.emissive = new u.Color().fromArray(i.emissiveFactor)),
            i.emissiveTexture !== void 0 &&
              t !== u.MeshBasicMaterial &&
              c.push(
                e.assignTexture(
                  a,
                  'emissiveMap',
                  i.emissiveTexture,
                  u.sRGBEncoding,
                ),
              ),
            Promise.all(c).then(function () {
              let l;
              return (
                t === G
                  ? (l =
                      n[m.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(
                        a,
                      ))
                  : (l = new t(a)),
                i.name && (l.name = i.name),
                N(l, i),
                e.associations.set(l, { materials: s }),
                i.extensions && P(n, l, i),
                l
              );
            })
          );
        }
        createUniqueName(s) {
          const e = u.PropertyBinding.sanitizeNodeName(s || '');
          let r = e;
          for (let n = 1; this.nodeNamesUsed[r]; ++n) r = e + '_' + n;
          return (this.nodeNamesUsed[r] = !0), r;
        }
        loadGeometries(s) {
          const e = this,
            r = this.extensions,
            n = this.primitiveCache;
          function i(a) {
            return r[m.KHR_DRACO_MESH_COMPRESSION]
              .decodePrimitive(a, e)
              .then(function (o) {
                return Z(o, a, e);
              });
          }
          const t = [];
          for (let a = 0, o = s.length; a < o; a++) {
            const c = s[a],
              f = be(c),
              l = n[f];
            if (l) t.push(l.promise);
            else {
              let h;
              c.extensions && c.extensions[m.KHR_DRACO_MESH_COMPRESSION]
                ? (h = i(c))
                : (h = Z(new u.BufferGeometry(), c, e)),
                (n[f] = { primitive: c, promise: h }),
                t.push(h);
            }
          }
          return Promise.all(t);
        }
        loadMesh(s) {
          const e = this,
            r = this.json,
            n = this.extensions,
            i = r.meshes[s],
            t = i.primitives,
            a = [];
          for (let o = 0, c = t.length; o < c; o++) {
            const f =
              t[o].material === void 0
                ? _e(this.cache)
                : this.getDependency('material', t[o].material);
            a.push(f);
          }
          return (
            a.push(e.loadGeometries(t)),
            Promise.all(a).then(function (o) {
              const c = o.slice(0, o.length - 1),
                f = o[o.length - 1],
                l = [];
              for (let p = 0, M = f.length; p < M; p++) {
                const x = f[p],
                  g = t[p];
                let T;
                const R = c[p];
                if (
                  g.mode === y.TRIANGLES ||
                  g.mode === y.TRIANGLE_STRIP ||
                  g.mode === y.TRIANGLE_FAN ||
                  g.mode === void 0
                )
                  (T =
                    i.isSkinnedMesh === !0
                      ? new u.SkinnedMesh(x, R)
                      : new u.Mesh(x, R)),
                    T.isSkinnedMesh === !0 &&
                      !T.geometry.attributes.skinWeight.normalized &&
                      T.normalizeSkinWeights(),
                    g.mode === y.TRIANGLE_STRIP
                      ? (T.geometry = $(T.geometry, u.TriangleStripDrawMode))
                      : g.mode === y.TRIANGLE_FAN &&
                        (T.geometry = $(T.geometry, u.TriangleFanDrawMode));
                else if (g.mode === y.LINES) T = new u.LineSegments(x, R);
                else if (g.mode === y.LINE_STRIP) T = new u.Line(x, R);
                else if (g.mode === y.LINE_LOOP) T = new u.LineLoop(x, R);
                else if (g.mode === y.POINTS) T = new u.Points(x, R);
                else
                  throw new Error(
                    'THREE.GLTFLoader: Primitive mode unsupported: ' + g.mode,
                  );
                Object.keys(T.geometry.morphAttributes).length > 0 && we(T, i),
                  (T.name = e.createUniqueName(i.name || 'mesh_' + s)),
                  N(T, i),
                  g.extensions && P(n, T, g),
                  e.assignFinalMaterial(T),
                  l.push(T);
              }
              for (let p = 0, M = l.length; p < M; p++)
                e.associations.set(l[p], { meshes: s, primitives: p });
              if (l.length === 1) return l[0];
              const h = new u.Group();
              e.associations.set(h, { meshes: s });
              for (let p = 0, M = l.length; p < M; p++) h.add(l[p]);
              return h;
            })
          );
        }
        loadCamera(s) {
          let e;
          const r = this.json.cameras[s],
            n = r[r.type];
          if (!n) {
            console.warn('THREE.GLTFLoader: Missing camera parameters.');
            return;
          }
          return (
            r.type === 'perspective'
              ? (e = new u.PerspectiveCamera(
                  u.MathUtils.radToDeg(n.yfov),
                  n.aspectRatio || 1,
                  n.znear || 1,
                  n.zfar || 2e6,
                ))
              : r.type === 'orthographic' &&
                (e = new u.OrthographicCamera(
                  -n.xmag,
                  n.xmag,
                  n.ymag,
                  -n.ymag,
                  n.znear,
                  n.zfar,
                )),
            r.name && (e.name = this.createUniqueName(r.name)),
            N(e, r),
            Promise.resolve(e)
          );
        }
        loadSkin(s) {
          const e = this.json.skins[s],
            r = { joints: e.joints };
          return e.inverseBindMatrices === void 0
            ? Promise.resolve(r)
            : this.getDependency('accessor', e.inverseBindMatrices).then(
                function (n) {
                  return (r.inverseBindMatrices = n), r;
                },
              );
        }
        loadAnimation(s) {
          const r = this.json.animations[s],
            n = [],
            i = [],
            t = [],
            a = [],
            o = [];
          for (let c = 0, f = r.channels.length; c < f; c++) {
            const l = r.channels[c],
              h = r.samplers[l.sampler],
              p = l.target,
              M = p.node !== void 0 ? p.node : p.id,
              x = r.parameters !== void 0 ? r.parameters[h.input] : h.input,
              g = r.parameters !== void 0 ? r.parameters[h.output] : h.output;
            n.push(this.getDependency('node', M)),
              i.push(this.getDependency('accessor', x)),
              t.push(this.getDependency('accessor', g)),
              a.push(h),
              o.push(p);
          }
          return Promise.all([
            Promise.all(n),
            Promise.all(i),
            Promise.all(t),
            Promise.all(a),
            Promise.all(o),
          ]).then(function (c) {
            const f = c[0],
              l = c[1],
              h = c[2],
              p = c[3],
              M = c[4],
              x = [];
            for (let T = 0, R = f.length; T < R; T++) {
              const E = f[T],
                S = l[T],
                C = h[T],
                L = p[T],
                A = M[T];
              if (E === void 0) continue;
              E.updateMatrix(), (E.matrixAutoUpdate = !0);
              let b;
              switch (w[A.path]) {
                case w.weights:
                  b = u.NumberKeyframeTrack;
                  break;
                case w.rotation:
                  b = u.QuaternionKeyframeTrack;
                  break;
                case w.position:
                case w.scale:
                default:
                  b = u.VectorKeyframeTrack;
                  break;
              }
              const F = E.name ? E.name : E.uuid,
                Fe =
                  L.interpolation !== void 0
                    ? Le[L.interpolation]
                    : u.InterpolateLinear,
                U = [];
              w[A.path] === w.weights
                ? E.traverse(function (_) {
                    _.morphTargetInfluences && U.push(_.name ? _.name : _.uuid);
                  })
                : U.push(F);
              let O = C.array;
              if (C.normalized) {
                const _ = K(O.constructor),
                  D = new Float32Array(O.length);
                for (let I = 0, ee = O.length; I < ee; I++) D[I] = O[I] * _;
                O = D;
              }
              for (let _ = 0, D = U.length; _ < D; _++) {
                const I = new b(U[_] + '.' + w[A.path], S.array, O, Fe);
                L.interpolation === 'CUBICSPLINE' &&
                  ((I.createInterpolant = function (Oe) {
                    const ve =
                      this instanceof u.QuaternionKeyframeTrack ? Se : z;
                    return new ve(
                      this.times,
                      this.values,
                      this.getValueSize() / 3,
                      Oe,
                    );
                  }),
                  (I.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline =
                    !0)),
                  x.push(I);
              }
            }
            const g = r.name ? r.name : 'animation_' + s;
            return new u.AnimationClip(g, void 0, x);
          });
        }
        createNodeMesh(s) {
          const e = this.json,
            r = this,
            n = e.nodes[s];
          return n.mesh === void 0
            ? null
            : r.getDependency('mesh', n.mesh).then(function (i) {
                const t = r._getNodeRef(r.meshCache, n.mesh, i);
                return (
                  n.weights !== void 0 &&
                    t.traverse(function (a) {
                      if (!!a.isMesh)
                        for (let o = 0, c = n.weights.length; o < c; o++)
                          a.morphTargetInfluences[o] = n.weights[o];
                    }),
                  t
                );
              });
        }
        loadNode(s) {
          const e = this.json,
            r = this.extensions,
            n = this,
            i = e.nodes[s],
            t = i.name ? n.createUniqueName(i.name) : '';
          return (function () {
            const a = [],
              o = n._invokeOne(function (c) {
                return c.createNodeMesh && c.createNodeMesh(s);
              });
            return (
              o && a.push(o),
              i.camera !== void 0 &&
                a.push(
                  n.getDependency('camera', i.camera).then(function (c) {
                    return n._getNodeRef(n.cameraCache, i.camera, c);
                  }),
                ),
              n
                ._invokeAll(function (c) {
                  return c.createNodeAttachment && c.createNodeAttachment(s);
                })
                .forEach(function (c) {
                  a.push(c);
                }),
              Promise.all(a)
            );
          })().then(function (a) {
            let o;
            if (
              (i.isBone === !0
                ? (o = new u.Bone())
                : a.length > 1
                ? (o = new u.Group())
                : a.length === 1
                ? (o = a[0])
                : (o = new u.Object3D()),
              o !== a[0])
            )
              for (let c = 0, f = a.length; c < f; c++) o.add(a[c]);
            if (
              (i.name && ((o.userData.name = i.name), (o.name = t)),
              N(o, i),
              i.extensions && P(r, o, i),
              i.matrix !== void 0)
            ) {
              const c = new u.Matrix4();
              c.fromArray(i.matrix), o.applyMatrix4(c);
            } else i.translation !== void 0 && o.position.fromArray(i.translation), i.rotation !== void 0 && o.quaternion.fromArray(i.rotation), i.scale !== void 0 && o.scale.fromArray(i.scale);
            return (
              n.associations.has(o) || n.associations.set(o, {}),
              (n.associations.get(o).nodes = s),
              o
            );
          });
        }
        loadScene(s) {
          const e = this.json,
            r = this.extensions,
            n = this.json.scenes[s],
            i = this,
            t = new u.Group();
          n.name && (t.name = i.createUniqueName(n.name)),
            N(t, n),
            n.extensions && P(r, t, n);
          const a = n.nodes || [],
            o = [];
          for (let c = 0, f = a.length; c < f; c++) o.push(J(a[c], t, e, i));
          return Promise.all(o).then(function () {
            const c = (f) => {
              const l = new Map();
              for (const [h, p] of i.associations)
                (h instanceof u.Material || h instanceof u.Texture) &&
                  l.set(h, p);
              return (
                f.traverse((h) => {
                  const p = i.associations.get(h);
                  p != null && l.set(h, p);
                }),
                l
              );
            };
            return (i.associations = c(t)), t;
          });
        }
      }
      function J(d, s, e, r) {
        const n = e.nodes[d];
        return r
          .getDependency('node', d)
          .then(function (i) {
            if (n.skin === void 0) return i;
            let t;
            return r
              .getDependency('skin', n.skin)
              .then(function (a) {
                t = a;
                const o = [];
                for (let c = 0, f = t.joints.length; c < f; c++)
                  o.push(r.getDependency('node', t.joints[c]));
                return Promise.all(o);
              })
              .then(function (a) {
                return (
                  i.traverse(function (o) {
                    if (!o.isMesh) return;
                    const c = [],
                      f = [];
                    for (let l = 0, h = a.length; l < h; l++) {
                      const p = a[l];
                      if (p) {
                        c.push(p);
                        const M = new u.Matrix4();
                        t.inverseBindMatrices !== void 0 &&
                          M.fromArray(t.inverseBindMatrices.array, l * 16),
                          f.push(M);
                      } else
                        console.warn(
                          'THREE.GLTFLoader: Joint "%s" could not be found.',
                          t.joints[l],
                        );
                    }
                    o.bind(new u.Skeleton(c, f), o.matrixWorld);
                  }),
                  i
                );
              });
          })
          .then(function (i) {
            s.add(i);
            const t = [];
            if (n.children) {
              const a = n.children;
              for (let o = 0, c = a.length; o < c; o++) {
                const f = a[o];
                t.push(J(f, i, e, r));
              }
            }
            return Promise.all(t);
          });
      }
      function Ce(d, s, e) {
        const r = s.attributes,
          n = new u.Box3();
        if (r.POSITION !== void 0) {
          const a = e.json.accessors[r.POSITION],
            o = a.min,
            c = a.max;
          if (o !== void 0 && c !== void 0) {
            if (
              (n.set(
                new u.Vector3(o[0], o[1], o[2]),
                new u.Vector3(c[0], c[1], c[2]),
              ),
              a.normalized)
            ) {
              const f = K(H[a.componentType]);
              n.min.multiplyScalar(f), n.max.multiplyScalar(f);
            }
          } else {
            console.warn(
              'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.',
            );
            return;
          }
        } else return;
        const i = s.targets;
        if (i !== void 0) {
          const a = new u.Vector3(),
            o = new u.Vector3();
          for (let c = 0, f = i.length; c < f; c++) {
            const l = i[c];
            if (l.POSITION !== void 0) {
              const h = e.json.accessors[l.POSITION],
                p = h.min,
                M = h.max;
              if (p !== void 0 && M !== void 0) {
                if (
                  (o.setX(Math.max(Math.abs(p[0]), Math.abs(M[0]))),
                  o.setY(Math.max(Math.abs(p[1]), Math.abs(M[1]))),
                  o.setZ(Math.max(Math.abs(p[2]), Math.abs(M[2]))),
                  h.normalized)
                ) {
                  const x = K(H[h.componentType]);
                  o.multiplyScalar(x);
                }
                a.max(o);
              } else
                console.warn(
                  'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.',
                );
            }
          }
          n.expandByVector(a);
        }
        d.boundingBox = n;
        const t = new u.Sphere();
        n.getCenter(t.center),
          (t.radius = n.min.distanceTo(n.max) / 2),
          (d.boundingSphere = t);
      }
      function Z(d, s, e) {
        const r = s.attributes,
          n = [];
        function i(t, a) {
          return e.getDependency('accessor', t).then(function (o) {
            d.setAttribute(a, o);
          });
        }
        for (const t in r) {
          const a = k[t] || t.toLowerCase();
          a in d.attributes || n.push(i(r[t], a));
        }
        if (s.indices !== void 0 && !d.index) {
          const t = e.getDependency('accessor', s.indices).then(function (a) {
            d.setIndex(a);
          });
          n.push(t);
        }
        return (
          N(d, s),
          Ce(d, s, e),
          Promise.all(n).then(function () {
            return s.targets !== void 0 ? ye(d, s.targets, e) : d;
          })
        );
      }
      function $(d, s) {
        let e = d.getIndex();
        if (e === null) {
          const t = [],
            a = d.getAttribute('position');
          if (a !== void 0) {
            for (let o = 0; o < a.count; o++) t.push(o);
            d.setIndex(t), (e = d.getIndex());
          } else
            return (
              console.error(
                'THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.',
              ),
              d
            );
        }
        const r = e.count - 2,
          n = [];
        if (s === u.TriangleFanDrawMode)
          for (let t = 1; t <= r; t++)
            n.push(e.getX(0)), n.push(e.getX(t)), n.push(e.getX(t + 1));
        else
          for (let t = 0; t < r; t++)
            t % 2 == 0
              ? (n.push(e.getX(t)),
                n.push(e.getX(t + 1)),
                n.push(e.getX(t + 2)))
              : (n.push(e.getX(t + 2)),
                n.push(e.getX(t + 1)),
                n.push(e.getX(t)));
        n.length / 3 !== r &&
          console.error(
            'THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.',
          );
        const i = d.clone();
        return i.setIndex(n), i;
      }
    },
  },
]);
