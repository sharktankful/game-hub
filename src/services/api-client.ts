import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'a22273a0faa84644a578b8da80f6c04f'
    }
})