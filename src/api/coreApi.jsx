import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://breece.akbarfikri.site/api/v1/docs/#',
    });

export { axiosInstance };

