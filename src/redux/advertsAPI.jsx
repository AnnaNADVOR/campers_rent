import axios from "axios";

axios.defaults.baseURL = "https://65fc102814650eb2100b6d31.mockapi.io";

export async function fetchAdverts(page=1, limit) {
    const { data } = await axios.get(`/adverts?page=${page}&limit=${limit}`);
    return data; 
}
