### 相机阴影
重点: 
- 平面接收阴影需要用专门接收阴影的材质 `ShadowMaterial`
- 所以代码中 `createFloor` 函数使用双平面

------

创建一个平面
```
const createPlaneFn = (materialler: string, config = {}) => {
  const geometry = new THREE.PlaneGeometry(50, 50);
  const material = new THREE[materialler](config); // '#D2B48C'
  const mesh = new THREE.Mesh(geometry, material);
  mesh.receiveShadow = true; // 接收阴影
  mesh.position.set(0, -2, 0);
  mesh.rotation.x = (-90 / 180) * Math.PI;
  return mesh;
};
```

------

灯光
```
light.castShadow = true;
```

物体设置
```
mesh.castShadow = true;
mesh.receiveShadow = true;
```

平面设置
```
mesh.receiveShadow = true;
```

渲染器
```
renderRef.shadowMap.enabled = true
```