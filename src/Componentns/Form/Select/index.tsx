import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

export interface InputFieldProps {
  label: string;
  name: string;
  control: any;
  children: any;
}

const EnigmaSelect = ({ label, control, name, children }: InputFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          label={label}
          select
          SelectProps={{
            MenuProps: {
              MenuListProps: {
                sx: {
                  maxHeight: 400,
                },
              },
            },
          }}>
          {children}
        </TextField>
      )}
    />
  );
};

export default EnigmaSelect;
