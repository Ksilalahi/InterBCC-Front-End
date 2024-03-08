import { axiosInstance } from "../api/coreApi"

const handleLogin = async(body) => {
    try {
        const response = await axiosInstance.post("auth/login", {
            email: body.email,
            password: body.password,
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export { handleLogin };