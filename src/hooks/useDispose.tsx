import { useCallback } from 'react';

interface IPartialProps {
  lightsRef: any[];
  floorRef: any;
}

interface IUseDisposeProps extends Partial<IPartialProps> {
  meshsRef: any[];
  sceneRef: any;
  renderRef: any;
  animateIDRef: any;
}

const useDispose = (props: IUseDisposeProps) => {
  const { meshsRef, sceneRef, renderRef, animateIDRef, lightsRef, floorRef } =
    props;

  const disposeAll = useCallback(() => {
    // 释放网格的盒子
    meshsRef.forEach((item: any) => {
      item?.geometry?.dispose();
      item?.material?.dispose();

      sceneRef.remove(item);
    });

    lightsRef?.forEach((item: any) => {
      sceneRef.remove(item);
    });

    // 销毁地板
    floorRef?.current?.forEach((item: any) => {
      sceneRef.remove(item);
    });

    // 释放渲染器
    renderRef.dispose();

    // 清除帧函数
    cancelAnimationFrame(animateIDRef.current);
  }, [props]);

  return {
    disposeAll,
  };
};

export default useDispose;
