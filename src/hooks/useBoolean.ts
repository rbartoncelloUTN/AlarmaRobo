import {useMemo, useState} from 'react';

const useBoolean = (initialState: any) => {
  const [value, setValue] = useState(initialState);
  const callbacks = useMemo(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((prev: any) => !prev),
    }),
    [],
  );
  return [value, callbacks];
};

export default useBoolean;
