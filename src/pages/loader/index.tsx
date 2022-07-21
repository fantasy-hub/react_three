import { useRef, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import useDispose from '@/hooks/useDispose';
import { pointRandom, random } from '@/utils';
import styles from './index.less';
import useMouseEvent from '@/hooks/useMouseEvent';

export default function Loader() {
  const bodyRef = useRef<any>(null);
  const sceneRef = useRef(new THREE.Scene()).current; // 场景：场景只实例一次，避免内存泄漏
  const cameraRef = useRef(new THREE.PerspectiveCamera()).current; // 透射相机：物体大小与视锥体角度有关
  const renderRef = useRef(
    new THREE.WebGLRenderer({ antialias: true }), // antialias 抗锯齿
  ).current; // 渲染器
  const meshsRef = useRef<any[]>([]).current; // 物体组：防止内存泄漏
  const animateIDRef = useRef<any>();
  const lightsRef = useRef<any>([]).current; // 灯光组
  const floorRef = useRef<any[]>([]); // 地板

  // hooks 相机Event
  const { onMouseDown, onMouseUp, onMouseMove, hypotenuseRef, onWheel } =
    useMouseEvent({
      cameraRef,
    });

  // cb
  const onWindowResize = useCallback(() => {
    cameraRef.aspect = window.innerWidth / window.innerHeight;
    cameraRef.updateProjectionMatrix();
    renderRef.setSize(window.innerWidth, window.innerHeight);
  }, [cameraRef, renderRef]);
  const loaderFBXFn = useCallback(() => {
    const loader = new FBXLoader();
    loader.load(
      'fbx/anya/anya-spyfamily-and-timelapse-video.fbx',
      (obj: any) => {
        console.log('obj', obj);
      },
    );
  }, []);
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
  // 创建地板材质
  const createFloor = useCallback(() => {
    const createPlaneFn = (
      materialler: string,
      config = {},
      vectors = [0, -3, 0],
    ) => {
      const geometry = new THREE.PlaneGeometry(50, 50);
      const material = new THREE[materialler]({
        ...config,
        side: THREE.DoubleSide,
      }); // '#D2B48C'
      const mesh = new THREE.Mesh(geometry, material);
      mesh.receiveShadow = true; // 接收阴影
      mesh.position.set(...vectors);
      mesh.rotation.x = (-90 / 180) * Math.PI;
      return mesh;
    };

    // 平面接收阴影需要用专门的阴影材质 ShadowMaterial。所以使用两个平面
    const basicPlane = createPlaneFn('MeshBasicMaterial', { color: 0xffffff });
    const shadowPlane = createPlaneFn('ShadowMaterial', { color: 0x696969 });

    sceneRef.add(basicPlane);
    sceneRef.add(shadowPlane);
    floorRef.current = [basicPlane, shadowPlane];
  }, []);

  // hooks
  const { disposeAll } = useDispose({
    meshsRef,
    sceneRef,
    renderRef,
    animateIDRef,
    lightsRef,
    floorRef,
  });
  useEffect(() => {
    window.addEventListener('resize', onWindowResize, false);

    bodyRef.current?.append(renderRef?.domElement);
    loaderFBXFn();
    initFn();
    renderSceneFn();
    createLightFn();
    createFloor();

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
    ></div>
  );
}
