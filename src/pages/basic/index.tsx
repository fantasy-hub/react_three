import { useRef, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import useDispose from '@/hooks/useDispose';
import styles from './index.less';

export default function Basic() {
  const bodyRef = useRef<any>(null);
  const sceneRef = useRef(new THREE.Scene()).current; // 场景：场景只实例一次，避免内存泄漏
  const cameraRef = useRef(new THREE.PerspectiveCamera()).current; // 透射相机：物体大小与视锥体角度有关
  const renderRef = useRef(
    new THREE.WebGLRenderer({ antialias: true }),
  ).current; // 渲染器
  const meshsRef = useRef<any>([]).current; // 物体组：防止内存泄漏
  const animateIDRef = useRef<any>();

  const createRect = useCallback(() => {
    const rect = new THREE.BoxGeometry(2, 2, 2); // 设置盒子
    const material = new THREE.MeshBasicMaterial({ color: '#1890ff' }); // 设置材质
    const mesh = new THREE.Mesh(rect, material);

    sceneRef.add(mesh); // 添加到场景
    meshsRef.push(mesh); // 存入公共的网格中
  }, []);

  const initFn = useCallback(() => {
    const renderRefCB = () => {
      renderRef.setSize(
        bodyRef.current?.offsetWidth,
        bodyRef.current?.offsetHeight,
      );
    };
    const cameraRefRefCB = () => {
      cameraRef.fov = 45;
      cameraRef.aspect =
        bodyRef.current?.offsetWidth / bodyRef.current?.offsetHeight;
      cameraRef.near = 1;
      cameraRef.far = 1000;
      cameraRef.position.set(0, 0, 20); // 相机的位置
      cameraRef.lookAt(0, 0, 0); // 相机的焦点
      cameraRef.updateProjectionMatrix(); // 更新相机投影矩阵
    };

    renderRefCB();
    cameraRefRefCB();
  }, [bodyRef, renderRef]);

  const renderScene = useCallback(() => {
    renderRef.render(sceneRef, cameraRef); // 渲染相机拍摄的内容

    // 弧度转角度 = 弧度 / 180 *  PI
    meshsRef.forEach((item: any) => {
      item.rotation.x += (0.5 / 180) * Math.PI;
      item.rotation.y += (0.5 / 180) * Math.PI;
    });

    animateIDRef.current = window.requestAnimationFrame(renderScene); // 帧循环
  }, [renderRef, meshsRef]);

  const { disposeAll } = useDispose({
    meshsRef,
    sceneRef,
    renderRef,
    animateIDRef,
  });
  useEffect(() => {
    bodyRef.current?.append(renderRef?.domElement);
    initFn();
    createRect();
    renderScene();

    // 释放内存
    return () => {
      disposeAll();
    };
  }, []);

  return <div className={styles.container} ref={bodyRef}></div>;
}
