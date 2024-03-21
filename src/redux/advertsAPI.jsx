import axios from "axios";

axios.defaults.baseURL = "https://65fc102814650eb2100b6d31.mockapi.io";

export async function fetchAdverts() {
    const { data } = await axios.get("/adverts");
    return data; 
}
