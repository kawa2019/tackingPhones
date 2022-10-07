import {getAxiosWithConfig} from "./config";

export const getTrackedPhones = async (): Promise<any> => {
    try {
        const endpoint = 'phones';
        const instance = getAxiosWithConfig();

        const {data} = await instance.get(endpoint);
        return data;
    } catch (e: any) {
        throw new Error(e);
    }
}