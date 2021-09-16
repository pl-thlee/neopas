import { ChangeEvent, SyntheticEvent, useReducer } from 'react';

type ReturnTypes<T = any> = [T, (e: ChangeEvent<HTMLInputElement>) => void];

/** TODO: Check type */
function reducer(state: any, action: any) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const useInputs = <T = any>(initialForm: T): ReturnTypes<T> => {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e: SyntheticEvent) => {
    dispatch(e.target);
  };
  return [state, onChange];
};

export default useInputs;
