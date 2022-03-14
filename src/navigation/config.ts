import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';

export interface INavigation<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string,
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type AppStackRoutes = {
  SplashScreen: undefined;
  HomeScreen: undefined;
  TipScreen: undefined;
};
