import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getLocal } from '../encrypt'

const baseUrl = process.env.REACT_APP_API_URL
export async function AxiosGet<T>(url: string): Promise<AxiosResponse<T>> {
    const token = await getLocal('token', []);
    let config: AxiosRequestConfig = {
        headers: { 'Authorization': `Bearer ${token}` },
    }
    return axios.get<T>(baseUrl + url, config)
}
