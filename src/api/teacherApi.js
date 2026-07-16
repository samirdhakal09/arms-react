import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

export const getTeachers = () => API.get("/teachers/");

export const addTeacher = (teacher) =>
    API.post("/teachers/", teacher);