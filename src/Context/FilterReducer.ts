import { PhoneApi } from '../Services/Api/interfaces';

export enum FilterTypes {
  SET_FILTERED_PHONES = 'SET_FILTERED_PHONES',
}

export interface FilterAction {
  type: FilterTypes.SET_FILTERED_PHONES;
  payload: FilterState;
}

export type FilterState = { data: PhoneApi[] };

export const FilterReducer = (state: FilterState, action: FilterAction) => {
  switch (action.type) {
    case FilterTypes.SET_FILTERED_PHONES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
