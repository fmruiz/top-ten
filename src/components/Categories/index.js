import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
// redux
import { useDispatch, useSelector } from "react-redux";
import withProvider from "../../modules/withProvider";
import { getCategories } from "../../store/actions/categoriesActions";
// components
import Categorie from "../common/Categorie";

const Categories = () => {
    // initialize useDispatch
    const dispatch = useDispatch();
    // states
    const { categoriesData } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
            }}
            mb={4}
        >
            {categoriesData.map(({ name, ctasCount, color }) => (
                <Categorie
                    key={name}
                    textValue={name}
                    numberValue={ctasCount}
                    color={color}
                />
            ))}
        </Box>
    );
};

export default withProvider(Categories);
