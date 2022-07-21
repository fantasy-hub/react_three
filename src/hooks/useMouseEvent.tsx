import { useCallback, useRef } from 'react';
import type { MouseEvent, WheelEvent } from 'react';

interface IUuseMouseEvent {
  cameraRef: any;
  hypotenuse?: number;
}

const useMouseEvent = (props: IUuseMouseEvent) => {
  const { cameraRef, hypotenuse = 20 } = props;
  const isDownRef = useRef(false);
  const hypotenuseRef = useRef<number>(hypotenuse); // 半径：斜边长度
  // 移动过程中改变的是相机与坐标系的夹角
  // 角度：在物体的正前方，转弧度：RRef.current / 180 * Math.PI
  const angleRef = useRef<number>(0); // 角度：相机与坐标系的夹角

  const positionChange = useCallback((event: any, fixY = false) => {
    const { y } = cameraRef.position;
    const { movementY } = event;

    const cos = Math.cos((angleRef.current / 180) * Math.PI); // 角度转弧度：angleRef.current / 180度 * π，即求角度里有几个180度
    const sin = Math.sin((angleRef.current / 180) * Math.PI);

    const _x = hypotenuseRef.current * cos;
    const _y = fixY ? y : y + movementY * 0.1;
    const _z = hypotenuseRef.current * sin;
    cameraRef.position.set(_x, _y, _z);
    cameraRef.lookAt(0, 0, 0);
  }, []);

  const onMouseDown = useCallback(() => (isDownRef.current = true), []);
  const onMouseUp = useCallback(() => (isDownRef.current = false), []);
  const onMouseMove = useCallback((event: MouseEvent) => {
    // console.log('onMouseMove', event);
    if (!isDownRef.current) return; // 不长按鼠标不缩放
    const { movementX } = event;
    // 鼠标移动修改角度
    angleRef.current -= movementX * 0.5;
    positionChange(event);
  }, []);

  // 鼠标滚轮缩放
  const onWheel = useCallback((event: WheelEvent) => {
    /*
    // 如果大于0 半径增长
    const { deltaY } = event;
    if (deltaY > 0) hypotenuseRef.current += 1;
    else hypotenuseRef.current -= 1;
    positionChange(event, true);
    */

    const { deltaY } = event;
    let { x, y, z } = cameraRef.position;
    if (deltaY > 0) z += 2;
    else z -= 2;
    cameraRef.position.set(x, y, z);
    cameraRef.lookAt(0, 0, 0);
  }, []);

  return {
    onMouseDown,
    onMouseUp,
    onMouseMove,
    hypotenuseRef,
    onWheel,
  };
};

export default useMouseEvent;
