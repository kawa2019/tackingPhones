import { createContext, Dispatch, useReducer } from 'react';
import { FilterAction, FilterReducer, FilterTypes } from './FilterReducer';
import { PhoneApi } from '../Services/Api/interfaces';

export interface FilterInitialState {
  filteredPhones: { data: PhoneApi[] };
}

export interface AppProviderProps {
  children: JSX.Element;
}

export const filterInitialState: FilterInitialState = {
  filteredPhones: { data: [] },
};
export type AnyStateAction = FilterAction;

export const MainReducer = ({ filteredPhones }: FilterInitialState, action: any) => ({
  filteredPhones: FilterReducer(filteredPhones, action),
});

export const AppContext = createContext<{
  state: FilterInitialState;
  dispatch: Dispatch<AnyStateAction>;
}>({
  state: filterInitialState,
  dispatch: () => null,
});

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(MainReducer, filterInitialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
