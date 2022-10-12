import { styled } from '@mui/material';

export const FilterStyled = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  form: {
    display: 'flex',
    gap: 12,
    flexDirection: 'column',
    '& .MuiTextField-root': {
      width: 200,
    },
  },
}));
