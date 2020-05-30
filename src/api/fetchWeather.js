import axios from'axios';

const URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY='9ff97a6fefa6908482e695812fa7d6fd';

export const fetchWeather=async (query)=>{
    const {data}=await axios.get(URL,
        {
            params:{
                q:query,
                units:'metric',
                APPID:API_KEY,
            }
        }
        );
        return data;
}