import { useEvent } from "./index.ts";

const useCheckListItem = (value: any, onChange: any) =>
  useEvent((option: any) => {
    const hasValue = value.includes(option.value);
    const newValues = hasValue
      ? value.filter((opt: any) => opt !== option.value)
      : [...value, option.value];
    onChange(newValues);
  });

export default useCheckListItem;
