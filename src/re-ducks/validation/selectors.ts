import { useSelector } from 'react-redux';

import type { ValidationState } from './type';

export const useValidationState = () => {
  return useSelector((state: { validation: ValidationState }) => {
    return state;
  });
};
