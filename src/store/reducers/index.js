import { combineReducers } from "redux";
import CategoriesReducer from "./categoriesReducer";
import TopTenReducer from "./topTenReducer";

export default combineReducers({
    categories: CategoriesReducer,
    topTen: TopTenReducer,
});
