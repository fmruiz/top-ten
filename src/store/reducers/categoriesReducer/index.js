import * as types from "../../types";

const initialState = {
    categoriesData: [],
    loading: false,
    error: false,
};

const CategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: action.payload.loading,
                categoriesData: action.payload.categoriesData,
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

export default CategoriesReducer;
