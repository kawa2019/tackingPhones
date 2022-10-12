import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

export interface InputFieldProps {
  label: string;
  name: string;
  control: any;
  type?: string;
}

const EnigmaTextField = ({ label, control, name, type }: InputFieldProps) => {
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
          type={type}
        />
      )}
    />
  );
};

export default EnigmaTextField;
