import { getAxiosWithConfig } from './config';
import { TrackedPhonesApi } from './interfaces';

export const getTrackedPhones = async (): Promise<TrackedPhonesApi> => {
  try {
    const endpoint = 'phones';
    const instance = getAxiosWithConfig();

    const { data } = await instance.get(endpoint);
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};
