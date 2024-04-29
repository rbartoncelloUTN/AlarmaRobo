import {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import { useEvent } from "./index.ts";

const useLocation = () => {
  const [status, setStatus] = useState<boolean>(false);

  const requestLocationPermission = useEvent(async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  });

  const checkPermission = useEvent(async () => {
    const locationPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (!locationPermission) {
      requestLocationPermission();
    }
    setStatus(locationPermission);
  });

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  return {locationPermission: status, checkPermission};
};

export default useLocation;
