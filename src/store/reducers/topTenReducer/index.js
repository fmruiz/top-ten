import * as types from "../../types";

const initialState = {
    topTenData: [],
    loading: false,
    error: false,
};

const TopTenReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TOPTEN_SUCCESS:
            return {
                ...state,
                loading: action.payload.loading,
                topTenData: action.payload.topTenData,
            };
        case types.GET_CATEGORIES_ERROR:
            return {
                ...state,
                loading: action.payload.loading,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default TopTenReducer;
