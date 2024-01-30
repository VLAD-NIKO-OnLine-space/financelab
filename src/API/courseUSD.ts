import axios from "axios";

export const getCourseUDS = async () => {
    const responce = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    return responce.data.Valute.USD.Value
}

