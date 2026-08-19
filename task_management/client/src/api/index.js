import axios from "axios";

// axios instance
const api = axios.create({
    baseURL:'http://localhost:8000'
})

export default api
// interrceptors not available in facee