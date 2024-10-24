import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function navigate(screen: string) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screen);
  }
}
