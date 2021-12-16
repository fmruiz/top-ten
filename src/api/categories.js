import Axios from "axios";

export const categoriesAPI = Axios.create({
    baseURL: "https://private-bf0ebc-n5101.apiary-mock.com/api/spa/categories",
});
