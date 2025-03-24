import { apiClient } from "./config";

export const apiSignup = async (payload) => {
    return apiClient.post("/users/register", payload);
};

export const apiLogin = async  (payload) => apiClient.post("/users/login", payload);

//export const apiForgotPassword =  (payload) => apiClient.post("/users/forgot-password", payload);