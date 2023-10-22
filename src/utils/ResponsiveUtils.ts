import { PixelRatio } from 'react-native';

export const responsiveFontSize = (fontSize: number): number => {
  const fontScale = PixelRatio.getFontScale();
  const responsiveFont  = fontSize / fontScale;
  return responsiveFont;
};

