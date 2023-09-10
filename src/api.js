import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38535907-06045a590f3da37e2134e5129'
//"https://pixabay.com/api/?q=cat&page=1&key=38535907-06045a590f3da37e2134e5129&image_type=photo&orientation=horizontal&per_page=12"

export const fetchImages = async () => {
    const resp = await axios.get(`?key=${API_KEY}&q=cat&page=1&per_page=12&image_type=photo&orientation=horizontal`);
    return resp.data;
}

