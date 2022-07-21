### 线材质使用
```
 /**
   * @Geometry 被废弃
   * 使用 BufferGeometry 示例：https://segmentfault.com/q/1010000040109762
   */
  const createLine = useCallback(() => {
    const lineMaterial = new THREE.LineBasicMaterial();
    const geometry = new THREE.BufferGeometry();

    const vertices = new Array().fill(0);
    // 因为 threeJS 的中心点是在视图中心点，所以此处的 *2 -1 得到的是 [0, window.innerWidth] 的闭区间
    const pointFn = () => Math.random() * 2 - 1;
    for (let i = 0; i < 5000; i++) {
      const point = [pointFn(), pointFn(), pointFn()]; // x y z
      vertices.push(new THREE.Vector3(...point));
    }
    //用这个api传入顶点数组
    geometry.setFromPoints(vertices);
    const mesh = new THREE.Line(geometry, lineMaterial);
    mesh.position.set(4, 0, 0);

    sceneRef.add(mesh); // 添加到场景
    meshsRef.push(mesh); // 存入公共的网格中
  }, []);
```