import { FC } from 'react';
import { Alert, CircularProgress, Stack } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import Filter from '../../Componentns/Filter';
import PhonesMap from '../../Componentns/PhonesMap';
import { useQuery } from 'react-query';
import { getTrackedPhones } from '../../Services/Api';
import { TrackedPhonesApi } from '../../Services/Api/interfaces';

const Home: FC = () => {
  const trackedPhones = useQuery<TrackedPhonesApi, Error>('getTrackedPhones', getTrackedPhones, {
    refetchInterval: 15000,
  });

  if (trackedPhones.isLoading) {
    return <CircularProgress />;
  }

  if (trackedPhones.isError) {
    return (
      <Alert severity="error">
        Błąd z serwera:
        {trackedPhones.error && trackedPhones.error.message}
      </Alert>
    );
  }

  return (
    <Stack direction={'row'} justifyContent={'center'} gap={4} pt={4}>
      <PhonesMap />
      <Filter />
    </Stack>
  );
};

export default Home;
