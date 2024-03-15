import { axiosInstance } from "../api/coreApi"

const handleLogin = async(body) => {
    try {
        const response = await axiosInstance.post("Auth/loginUser", {
            email: body.email,
            password: body.password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const handleRegister = async(body) => {
    try {
        const response = await axiosInstance.post("Auth/registerUser", {
            email: body.email,
            password: body.password,
            full_name: body.full_name
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { handleLogin, handleRegister };