import axios from "axios";

const api = axios.create({
    //baseURL: "http://localhost:3000/api/v1",
    baseURL: "https://vercel-demo-one-plum.vercel.app/api/v1",
});

// Interceptor para añadir el token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access-token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

export const login = async (credentials) => {
    return await api.post("/auth/login", credentials);
};

export const verify = async () => {
    return await api.get("/auth/verify-token");
};

export const register = async (payload) => {
    return await api.post("/auth/register", payload);
};

export const logout = async () => {
    return await api.post("/logout");
};

export const listToken = async () => {
    return await api.get("/auth/list-token");
};

export const createTokenHedera = async (payload) => {
    return await api.post("/auth/create-token-hedera",payload);
};
