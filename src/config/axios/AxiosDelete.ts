import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getLocal } from '../encrypt'

const baseUrl = process.env.REACT_APP_API_URL
export async function AxiosDelete<T>(url: string): Promise<AxiosResponse<T>> {
    const token = await getLocal('token', []);
    let config: AxiosRequestConfig = {
        headers: { 'Authorization': `Bearer ${token}` },
    }
    return axios.delete<T>(baseUrl + url, config)
}
