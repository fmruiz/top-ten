import * as types from "../../types";
import { topTenAPI } from "../../../api/topTen";

export function getTopTen() {
    return async (dispatch) => {
        try {
            const res = await topTenAPI.get();
            const { data } = res.data;
            dispatch({
                type: types.GET_TOPTEN_SUCCESS,
                payload: {
                    loading: false,
                    topTenData: data,
                },
            });
        } catch (error) {
            dispatch({
                type: types.GET_TOPTEN_ERROR,
                payload: {
                    loading: false,
                    error: error,
                },
            });
        }
    };
}
