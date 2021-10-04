import { Dimensions } from "react-native";
import {
  getStatusBarHeight,
  getBottomSpace,
  isIphoneX,
} from "react-native-iphone-x-helper";

const { width, height } = Dimensions.get("window");

const Metrics = {
  basePadding: width < 375 ? 30 : 40,
  baseMargin: 20,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  statusHeight: getStatusBarHeight(),
  notchHeight: isIphoneX() ? getStatusBarHeight() : 0,
  marginBottom: getBottomSpace() / 2,
  isIphoneX: isIphoneX(),
};

export default Metrics;