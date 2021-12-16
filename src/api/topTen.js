import Axios from "axios";

export const topTenAPI = Axios.create({
    baseURL: "https://private-bf0ebc-n5101.apiary-mock.com/api/ctas/top10",
});