import { useRef, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import useDispose from '@/hooks/useDispose';
import { pointRandom, random } from '@/utils';
import styles from './index.less';
import useMouseEvent from '@/hooks/useMouseEvent';

export default function Rect() {
  const bodyRef = useRef<any>(null);
  const sceneRef = useRef(new THREE.Scene()).current; // 场景：场景只实例一次，避免内存泄漏
  const cameraRef = useRef(new THREE.PerspectiveCamera()).current; // 透射相机：物体大小与视锥体角度有关
  const renderRef = useRef(
    new THREE.WebGLRenderer({ antialias: true }), // antialias 抗锯齿
  ).current; // 渲染器
  const meshsRef = useRef<any[]>([]).current; // 物体组：防止内存泄漏
  const animateIDRef = useRef<any>();
  const lightsRef = useRef<any>([]).current; // 灯光组

  // hooks 相机Event
  const { onMouseDown, onMouseUp, onMouseMove, hypotenuseRef, onWheel } =
    useMouseEvent({
      cameraRef,
      hypotenuse: 30,
    });

  // cb
  const onWindowResize = useCallback(() => {
    cameraRef.aspect = window.innerWidth / window.innerHeight;
    cameraRef.updateProjectionMatrix();
    renderRef.setSize(window.innerWidth, window.innerHeight);
  }, [cameraRef, renderRef]);
  const intoMeshFn = useCallback(
    (mesh) => {
      sceneRef.add(mesh); // 添加到场景
      meshsRef.push(mesh); // 存入公共的网格中
    },
    [sceneRef, meshsRef],
  );
  const initFn = useCallback(() => {
    const renderRefFn = () => {
      // console.log('renderRefFn', renderRef);

      // 开启阴影
      renderRef.shadowMap.enabled = true;

      renderRef.setSize(
        bodyRef.current?.offsetWidth,
        bodyRef.current?.offsetHeight,
      );
    };
    const cameraRefRefFn = () => {
      cameraRef.fov = 45;
      // cameraRef.aspect =
      //   bodyRef.current?.offsetWidth / bodyRef.current?.offsetHeight;
      cameraRef.aspect = window.innerWidth / window.innerHeight;
      cameraRef.near = 1;
      cameraRef.far = 1000;
      cameraRef.position.set(0, 0, hypotenuseRef.current); // 相机的位置
      cameraRef.lookAt(0, 0, 0); // 相机的焦点
      cameraRef.updateProjectionMatrix(); // 更新相机投影矩阵
    };

    renderRefFn();
    cameraRefRefFn();
  }, [bodyRef, renderRef, cameraRef]);
  // 渲染器
  const renderSceneFn = useCallback(() => {
    renderRef.render(sceneRef, cameraRef); // 渲染相机拍摄的内容

    // 弧度转角度 = 弧度 / 180 *  PI
    meshsRef.forEach((item: any) => {
      item.rotation.x += (0.5 / 180) * Math.PI;
      item.rotation.y += (0.5 / 180) * Math.PI;
    });

    animateIDRef.current = window.requestAnimationFrame(renderSceneFn); // 帧循环
  }, [renderRef, meshsRef]);
  // 灯光：用于照射投影材质
  const createLightFn = useCallback(() => {
    const light = new THREE.DirectionalLight(0xffffff, 1); // 平行光：模拟太阳光照射投影
    light.position.set(0, 100, 0);
    light.castShadow = true; // 平行光投射阴影

    // const light = new THREE.AmbientLight(0xffffff, 0.5); // 环境光
    // light.position.set(100, 200, 200);

    // const light = new THREE.PointLight(0xff0000, 1, 500); // 点光源：模拟灯泡，有 光的衰减距离
    // light.position.set(100, 200, 200);

    // 设置投影
    // light.shadow.camera.top = -10;
    // light.shadow.camera.left = 10;
    // light.shadow.camera.right = -10;
    // light.shadow.camera.bottom = 10;
    // light.shadow.mapSize.width = 1024; // 烧显卡，贴图数量会被增加
    // light.shadow.mapSize.height = 1024;

    // const helper = new THREE.CameraHelper(light.shadow.camera);
    // sceneRef.add(helper);

    sceneRef.add(light);
    lightsRef.push(light);
  }, []);
  // 线条材质
  const createLineFn = useCallback(
    (vectors, config) => {
      const geometry = new THREE.BufferGeometry();
      const material = new THREE.LineBasicMaterial(config);

      const positions = [];

      for (let i = 0; i < random(1000); i++) {
        // positions
        positions.push(...[pointRandom(), pointRandom(), pointRandom()]);
      }

      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3),
      );
      geometry.computeBoundingSphere();

      const mesh = new THREE.Line(geometry, material);

      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.position.set(...vectors);

      intoMeshFn(mesh);
    },
    [intoMeshFn],
  );
  // 木质材质
  const createLambertFn = useCallback(
    (vectors, config) => {
      const material = new THREE.MeshLambertMaterial(config); // 木质材质
      const rect = new THREE.BoxGeometry(2, 2, 2);
      const mesh = new THREE.Mesh(rect, material);

      // 开启投射阴影
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.position.set(...vectors);

      intoMeshFn(mesh);
    },
    [intoMeshFn],
  );
  // 金属材质
  const createMeshPhongFn = useCallback(
    (vectors, config) => {
      const material = new THREE.MeshPhongMaterial(config); // 金属材质，镜面高光材质
      const rect = new THREE.BoxGeometry(2, 2, 2);
      const mesh = new THREE.Mesh(rect, material);

      // 开启投射阴影
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.position.set(...vectors);

      intoMeshFn(mesh);
    },
    [intoMeshFn],
  );
  const createSphereFn = useCallback(
    (vectors, config) => {
      const width = random(2);

      // 球体
      const geometry = new THREE.SphereGeometry(width, 64, 64);
      const material = new THREE.MeshMatcapMaterial(config);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...vectors);

      // 星云
      const geometry2 = new THREE.RingGeometry(width * 1.2, width * 1.6, 64);
      const material2 = new THREE.MeshLambertMaterial({
        // ...config,
        color: 0xffffff,
        side: THREE.DoubleSide,
      });
      const mesh2 = new THREE.Mesh(geometry2, material2);
      mesh2.position.set(...vectors);
      mesh2.rotation.x = (-75 * 180) / Math.PI;

      // 创建物体组
      const group = new THREE.Group();
      group.add(mesh)
      group.add(mesh2)

      intoMeshFn(group);
    },
    [intoMeshFn],
  );
  const onClick = useCallback(() => {
    const array = [createLineFn, createLambertFn, createMeshPhongFn];
    const index = Math.floor(Math.random() * 3);
    const vectors = [random(10, true), random(10, true), random(20, true)];
    const config = {
      color: new THREE.Color(random(), random(), random()),
    };
    array[index](vectors, config);
  }, [intoMeshFn]);
  const onDoubleClickFn = useCallback(() => {
    const vectors = [random(10, true), random(10, true), random(20, true)];
    const config = {
      color: new THREE.Color(random(), random(), random()),
    };
    createSphereFn(vectors, config);
  }, [intoMeshFn]);

  // hooks
  const { disposeAll } = useDispose({
    meshsRef,
    sceneRef,
    renderRef,
    animateIDRef,
    lightsRef,
  });
  useEffect(() => {
    window.addEventListener('resize', onWindowResize, false);

    bodyRef.current?.append(renderRef?.domElement);
    initFn();
    renderSceneFn();
    createLightFn();

    // 释放内存
    return () => {
      disposeAll();
    };
  }, []);

  return (
    <div
      className={styles.container}
      ref={bodyRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onWheel={onWheel}
      onClick={onClick}
      onDoubleClick={onDoubleClickFn}
    ></div>
  );
}
