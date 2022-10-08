import axios, {AxiosInstance} from "axios";

export const getAxiosWithConfig = (): AxiosInstance => {
    const baseUrl = 'https://enigma.free.beeceptor.com/my/api';

    return axios.create({
        baseURL: baseUrl,
        timeout: 30000,
        headers: {
            'Content-Type': 'application/json'
        },
    });
};