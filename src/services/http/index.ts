import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import envConfig from '../config';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: envConfig.VITE_API_DEV_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});


class HttpError extends Error {
    status: number;
    payload: any;

    constructor({ status, payload }: { status: number; payload: any }) {
        super('Http Error');
        this.status = status;
        this.payload = payload;
    }
}

// Interceptor xử lý request
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // const token = localStorage.getItem('token');
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Interceptor xử lý response
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },
    (error) => {
        if (error.response) {
            const { status, data } = error.response;
            console.error(`HTTP ${status}:`, data);
            throw new HttpError({ status, payload: data });
        }
        return Promise.reject(error);
    }
);

// HTTP client với các phương thức cơ bản
const http = {
    get<Response>(url: string, config?: AxiosRequestConfig) {
        return axiosInstance.get<Response>(url, config);
    },
    post<Response>(url: string, data?: unknown, config?: AxiosRequestConfig) {
        return axiosInstance.post<Response>(url, data, config);
    },
    put<Response>(url: string, data?: unknown, config?: AxiosRequestConfig) {
        return axiosInstance.put<Response>(url, data, config);
    },
    delete<Response>(url: string, config?: AxiosRequestConfig) {
        return axiosInstance.delete<Response>(url, config);
    },
};

export default http;
