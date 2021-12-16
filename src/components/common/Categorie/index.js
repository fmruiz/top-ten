import React from "react";
import { Box, Chip, Typography } from "@material-ui/core";

const Categorie = ({ textValue, numberValue, color, ...props }) => {
    return (
        <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
            mr={3}
            {...props}
        >
            <Chip
                label={numberValue}
                style={{
                    borderRadius: "10px",
                    fontWeight: "bold",
                    backgroundColor: `${color}`,
                }}
            />
            <Typography variant="body2" component="span">
                {textValue}
            </Typography>
        </Box>
    );
};

export default Categorie;
