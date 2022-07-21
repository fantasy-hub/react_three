import { useRef, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import useDispose from '@/hooks/useDispose';
import { pointRandom, random } from '@/utils';
import styles from './index.less';

export default function Light() {
  const bodyRef = useRef<any>(null);
  const sceneRef = useRef(new THREE.Scene()).current; // 场景：场景只实例一次，避免内存泄漏
  const cameraRef = useRef(new THREE.PerspectiveCamera()).current; // 透射相机：物体大小与视锥体角度有关
  const renderRef = useRef(
    new THREE.WebGLRenderer({ antialias: true }),
  ).current; // 渲染器
  const meshsRef = useRef<any>([]).current; // 物体组：防止内存泄漏
  const animateIDRef = useRef<any>();
  const lightsRef = useRef<any>([]).current; // 灯光组

  const intoMeshFn = useCallback(
    (mesh) => {
      sceneRef.add(mesh); // 添加到场景
      meshsRef.push(mesh); // 存入公共的网格中
    },
    [sceneRef, meshsRef],
  );

  const initFn = useCallback(() => {
    const renderRefFn = () => {
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
      cameraRef.position.set(0, 0, 20); // 相机的位置
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

  const createRectFn = useCallback(() => {
    const rect = new THREE.BoxGeometry(2, 2, 2); // 设置盒子
    const material = new THREE.MeshBasicMaterial({ color: '#1890ff' }); // 设置材质
    const mesh = new THREE.Mesh(rect, material);

    intoMeshFn(mesh);
  }, [intoMeshFn]);

  /**
   * @Geometry 被废弃
   * 使用 BufferGeometry 示例：https://segmentfault.com/q/1010000040109762
   */
  const createLineFn = useCallback(() => {
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      // morphTargets: true,
    });

    const positions = [];
    const colors = [];
    for (let i = 0; i < 5000; i++) {
      // positions
      positions.push(...[pointRandom(), pointRandom(), pointRandom()]);
      // colors
      colors.push(...[random(), random(), random()]);
    }

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3),
    );
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.computeBoundingSphere();

    const mesh = new THREE.Line(geometry, material);
    mesh.position.set(4, 0, 0);

    intoMeshFn(mesh);
  }, [intoMeshFn]);

  // lambert 材质立方体
  const createLambertFn = useCallback(() => {
    const material = new THREE.MeshLambertMaterial({ color: 'red' }); // 木质材质
    // const material = new THREE.MeshPhongMaterial({ color: 'red' }); // 金属材质，镜面高光材质
    const rect = new THREE.BoxGeometry(2, 2, 2);
    const mesh = new THREE.Mesh(rect, material);
    mesh.position.set(-4, 0, 0);
    intoMeshFn(mesh);
  }, [intoMeshFn]);

  // 灯光：用于照射投影材质
  const createLightFn = useCallback(() => {
    // const dirLight = new THREE.DirectionalLight(0xffffff, 1); // 平行光：模拟太阳光照射投影
    // const dirLight = new THREE.AmbientLight(0xffffff, 0.5); // 环境光
    const dirLight = new THREE.PointLight(0xff0000, 1, 500);
    dirLight.position.set(100, 200, 200);
    sceneRef.add(dirLight);
    lightsRef.push(dirLight);
  }, []);

  const onWindowResize = useCallback(() => {
    cameraRef.aspect = window.innerWidth / window.innerHeight;
    cameraRef.updateProjectionMatrix();
    renderRef.setSize(window.innerWidth, window.innerHeight);
  }, [cameraRef, renderRef]);

  const { disposeAll } = useDispose({
    meshsRef,
    sceneRef,
    renderRef,
    animateIDRef,
    lightsRef,
  });
  useEffect(() => {
    bodyRef.current?.append(renderRef?.domElement);
    initFn();
    renderSceneFn();
    createRectFn();
    createLineFn();
    createLambertFn();
    createLightFn();

    window.addEventListener('resize', onWindowResize, false);

    // 释放内存
    return () => {
      disposeAll();
    };
  }, []);

  return <div className={styles.container} ref={bodyRef}></div>;
}
