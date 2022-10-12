import { UseFormGetValues } from 'react-hook-form';
import { FilterForm } from '../../Componentns/Filter/interfaces';
import { PhoneApi } from '../Api/interfaces';

export const getFilteredPhones = (getValues: UseFormGetValues<FilterForm>, data: PhoneApi[]) => {
  let filteredPhones = [...data];
  const { fasterThan, slowerThan, sim, status, heartbeat, imei } = getValues();
  if (fasterThan) {
    filteredPhones = filteredPhones.filter(phone => +phone.last_speed > +fasterThan);
  }
  if (slowerThan) {
    filteredPhones = filteredPhones.filter(phone => +phone.last_speed < +slowerThan);
  }
  if (sim) {
    filteredPhones = filteredPhones.filter(phone => phone.sim_number.includes(sim));
  }
  if (status !== 'all') {
    filteredPhones = filteredPhones.filter(phone => phone.last_status === status);
  }
  if (heartbeat) {
    filteredPhones = filteredPhones.filter(phone => phone.last_heartbeat.includes(heartbeat));
  }
  if (imei) {
    filteredPhones = filteredPhones.filter(phone => phone.imei.includes(imei));
  }

  return filteredPhones;
};

export const statusOptions = [
  { id: 'No Alarm', label: 'brak alarmów' },
  { id: 'Device offline', label: 'niedostępny' },
  { id: 'all', label: 'wszytkie' },
];
