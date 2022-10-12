import * as yup from 'yup';

export const FilterFormSchema = yup
  .object({
    fasterThan: yup.lazy(value =>
      value === '' ? yup.string() : yup.number().min(0, 'Wartość powinna być wieksza od 0'),
    ),
    slowerThan: yup.lazy(value =>
      value === '' ? yup.string() : yup.number().min(0, 'Wartość powinna być wieksza od 0'),
    ),
  })
  .required();

export default FilterFormSchema;
