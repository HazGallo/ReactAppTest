import courseloading from '../animation/courseloading.json';
import expressloading from '../animation/expressloading.json';
import instagramloading from '../animation/instagramloading.json';
import stepsLoading from '../animation/stepsLoading.json';

interface AnimationMap {
  [key: string]: any; // Cambia `any` al tipo correcto de tus animaciones
}

export const animationMap: AnimationMap = {
  courseloading,
  expressloading,
  instagramloading,
  stepsLoading,
};

export const getAnimationData = (typeAnimacion: string) =>
  animationMap[typeAnimacion];

export const getModuleTitle = (typeAnimacion: string) => {
  if (typeAnimacion === 'courseloading') {
    return 'Path Studio';
  } else if (typeAnimacion === 'expressloading') {
    return 'Learning Module';
  } else {
    return 'Learning Module';
  }
};
