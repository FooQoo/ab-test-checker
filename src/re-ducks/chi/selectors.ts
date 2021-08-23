import { useSelector } from 'react-redux';
import type { ChiState } from 'src/re-ducks/chi/type';

export const useChiState = () => {
  return useSelector((state: { chi: ChiState }) => {
    return state;
  });
};
