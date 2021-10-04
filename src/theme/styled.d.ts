import Colors from './colors';
import Metrics from './metrics';
import Fonts from './fonts';
import General from './general';

declare module 'styled-components' {
  export interface DefaultTheme {
    metrics: typeof Metrics;

    colors: typeof Colors;

    fonts: typeof Fonts;

    general: typeof General;
  }
}
