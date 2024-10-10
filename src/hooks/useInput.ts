import {useState} from 'react';

export function useInput(initialValue: string = '') {
  const [value, setValue] = useState(initialValue);

  const set = (text: string) => {
    setValue(text);
  };

  return {value, set};
}
