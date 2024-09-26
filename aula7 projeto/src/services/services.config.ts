import axios, { type AxiosResponse } from 'axios';

export const BACK_URL = import.meta.env.VITE_BACKEND_URL


export const getAxios = () => {
    const createdAxios = axios.create({
        baseURL: BACK_URL + "/api",
        timeout: 40000,
        headers: {
            "Content-Type":"application/json",
            credentials:"include",
            Authorization: "Bearer meu token",
        },
    });
    //createdAxios.interceptors.request  //executa antes de fazer a request.
    //createdAxios.interceptors.response //executa depois de chamar o back

    createdAxios.interceptors.response.use(getAxiosResponse);
    return createdAxios;


}


const getAxiosResponse = (response:AxiosResponse)=> {
    return response.data;
}