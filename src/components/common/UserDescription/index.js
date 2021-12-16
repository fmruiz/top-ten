import React, { useState } from "react";
import { Box, Avatar, Typography } from "@material-ui/core";

const UserDescription = ({
    name,
    lastName,
    title,
    groupDescription,
    ...props
}) => {
    // hover effect state
    const [hoverState, setHoverState] = useState(false);

    // string split name
    function stringAvatar(name) {
        return {
            children: `${name.split(" ")[0][0]}`,
        };
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: `${hoverState === false ? 'white' : '#eeeeee'}`,
            }}
            p={2}
            onMouseEnter={() => setHoverState(true)}
            onMouseLeave={() => setHoverState(false)}
            {...props}
        >
            <Avatar
                style={{ backgroundColor: "#ef9a9a", fontSize: "18px" }}
                {...stringAvatar(name)}
            />
            <Box ml={1.5}>
                <Box sx={{ display: "flex" }}>
                    <Typography
                        variant="body2"
                        style={{ marginRight: "5px", fontWeight: "600" }}
                    >
                        {name}
                    </Typography>
                    <Typography variant="body2" style={{ fontWeight: "600" }}>
                        {lastName}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", color: "#e57373" }}>
                    <Typography variant="body2" style={{ marginRight: "5px" }}>
                        {title}:
                    </Typography>
                    <Typography variant="body2">{groupDescription}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default UserDescription;
