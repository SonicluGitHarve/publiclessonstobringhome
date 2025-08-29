import api from "./api.js";

export const fetchHello = async () => {
    try {
        const response = await api.get("/api/hello");
        return response.data;
    } catch (error) {
        console.log("Error when trying to fetch API", error);
        throw error;
    }
}

export const getUsers = async () => {
    try {
        const response = await api.get("/api/getUser");
        return response.data;
    } catch (error) {
        console.log("Error when trying to fetch API", error);
        throw error;
    }
}
