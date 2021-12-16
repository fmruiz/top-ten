import * as types from "../../types";
import { categoriesAPI } from "../../../api/categories";

export function getCategories() {
    return async (dispatch) => {
        try {
            const res = await categoriesAPI.get();
            const { data } = res.data;
            dispatch({
                type: types.GET_CATEGORIES_SUCCESS,
                payload: {
                    loading: false,
                    categoriesData: data,
                },
            });
        } catch (error) {
            dispatch({
                type: types.GET_CATEGORIES_ERROR,
                payload: {
                    loading: false,
                    error: error,
                },
            });
        }
    };
}
