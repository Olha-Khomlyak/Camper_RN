import { Dimensions, PixelRatio } from 'react-native';

export const responsiveFontSize = (fontSize: number): number => {
  const { width, height } = Dimensions.get('window');
  const pixelRatio = PixelRatio.get();
  const deviceWidth = width < height ? width : height;
  const adjustedSize = fontSize * deviceWidth / 375;
  const calculatedSize = pixelRatio < 2 ? adjustedSize : adjustedSize / pixelRatio;
  return Math.round(PixelRatio.roundToNearestPixel(calculatedSize));
};

