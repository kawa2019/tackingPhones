import { FC, useCallback, useContext, useEffect } from 'react';
import { Button, MenuItem } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import EnigmaSelect from '../Form/Select';
import { FilterStyled } from './Filter.styles';
import EnigmaTextField from '../Form/Textfield';
import { AppContext } from '../../Context/Context';
import { FilterTypes } from '../../Context/FilterReducer';
import { getFilteredPhones, statusOptions } from '../../Services/Filter';
import FilterFormSchema from '../../Schema/FilterFormSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { FilterForm } from './interfaces';
import { StatusOpt } from '../../Services/Filter/interfaces';
import { useQueryClient } from 'react-query';
import { TrackedPhonesApi } from '../../Services/Api/interfaces';

const Filter: FC = () => {
  const { dispatch } = useContext(AppContext);
  const queryClient = useQueryClient();
  const trackedPhonesCache = queryClient.getQueryData<TrackedPhonesApi>('getTrackedPhones');
  const methods = useForm<FilterForm>({
    defaultValues: {
      fasterThan: '',
      slowerThan: '',
      sim: '',
      status: 'all',
      heartbeat: '',
      imei: '',
    },
    resolver: yupResolver(FilterFormSchema),
    mode: 'all',
  });

  const { control, getValues, watch, reset } = methods;

  useEffect(() => {
    if (trackedPhonesCache) {
      const filteredPhones = getFilteredPhones(getValues, trackedPhonesCache.data);

      dispatch({
        type: FilterTypes.SET_FILTERED_PHONES,
        payload: { data: filteredPhones },
      });
    }
  }, [JSON.stringify(watch())]);

  const clearFilters = useCallback(() => {
    reset();
  }, []);

  return (
    <FilterStyled>
      <FormProvider {...methods}>
        <form>
          <EnigmaSelect label={'status'} name={'status'} control={control}>
            {statusOptions.map((statusOpt: StatusOpt) => (
              <MenuItem
                key={statusOpt.id}
                value={statusOpt.id}
                selected={statusOpt.id === getValues('status')}>
                {statusOpt.label}
              </MenuItem>
            ))}
          </EnigmaSelect>
          <EnigmaTextField
            label={'szybszy niż'}
            name={'fasterThan'}
            control={control}
            type={'number'}
          />
          <EnigmaTextField
            label={'wolniejszy niż'}
            name={'slowerThan'}
            control={control}
            type={'number'}
          />
          <EnigmaTextField label={'numer sim'} name={'sim'} control={control} />
          <EnigmaTextField label={'numer imei'} name={'imei'} control={control} />
          <EnigmaTextField label={'bicie serca'} name={'heartbeat'} control={control} />
        </form>
      </FormProvider>

      <Button variant={'outlined'} onClick={clearFilters}>
        Wyczyść filtry
      </Button>
    </FilterStyled>
  );
};

export default Filter;
