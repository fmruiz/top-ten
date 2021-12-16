import React from "react";
import { storiesOf } from "@storybook/react";
import { Grid } from "@material-ui/core";
import Categories from "../../components/Categories";
import TopTen from "../../components/TopTen";

storiesOf("Challenge", module).add("Component", () => {
    return (
        <Grid container spacing={4}>
            <Grid item>
                <Categories />
                <TopTen />
            </Grid>
        </Grid>
    );
});
