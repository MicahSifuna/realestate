import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '66322568a7msh79639c26ff8c404p186f35jsnb7da3303fcd8'
        }
    })
    return data;
 }