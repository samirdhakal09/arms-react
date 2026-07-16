import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

export const getSubjects = () => API.get("/subjects/");

export const addSubject = (subject) =>
    API.post("/subjects/", subject);