import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
// redux
import { useDispatch, useSelector } from "react-redux";
import withProvider from "../../modules/withProvider";
import { getTopTen } from "../../store/actions/topTenActions";
// components
import UserDescription from "../common/UserDescription";

const TopTen = () => {
    // initialize useDispatch
    const dispatch = useDispatch();
    const { topTenData } = useSelector((state) => state.topTen);

    useEffect(() => {
        dispatch(getTopTen());
    }, []);

    return (
        <Box>
            {topTenData.map((data) => (
                <UserDescription
                    key={data.id}
                    name={data.customerName}
                    lastName={data.customerLastName}
                    title={data.title}
                    groupDescription={data.groupDescription}
                />
            ))}
        </Box>
    );
};

export default withProvider(TopTen);
