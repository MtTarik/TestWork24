import React, {useState} from "react";
import {Avatar, Box, Button, Divider, IconButton, List, ListItemButton, ListItemText, Menu,} from "@mui/material";


const Profile = () => {
    const [anchorEl2, setAnchorEl2] = useState(null);
    const handleClick2 = (event: any) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    return (
        <Box>
            <IconButton
                size="large"
                aria-label="menu"
                color="inherit"
                aria-controls="msgs-menu"
                aria-haspopup="true"
                sx={{
                    ...(typeof anchorEl2 === "object" && {
                        borderRadius: "9px",
                    }),
                }}
                onClick={handleClick2}
            >
                <Avatar
                    src={"/images/users/2.JPG"}
                    alt={"ProfileImg"}
                    sx={{
                        width: 35,
                        height: 35,
                    }}
                />
            </IconButton>
            <Menu
                id="msgs-menu"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
                anchorOrigin={{horizontal: "right", vertical: "bottom"}}
                transformOrigin={{horizontal: "right", vertical: "top"}}
                sx={{
                    "& .MuiMenu-paper": {
                        width: "360px",
                        p: 2,
                        pb: 2,
                        pt: 0
                    },
                }}
            >

                <Box pt={0}>

                    <List>
                        <ListItemButton component="a" href="#">
                            <ListItemText primary="Test"/>
                        </ListItemButton>
                        <ListItemButton component="a" href="#">
                            <ListItemText primary="Test"/>
                        </ListItemButton>
                        <ListItemButton component="a" href="#">
                            <ListItemText primary="Test"/>
                        </ListItemButton>
                        <ListItemButton component="a" href="#">
                            <ListItemText primary="Test"/>
                        </ListItemButton>
                    </List>

                </Box>
                <Divider/>
                <Box mt={2}>
                    <Button fullWidth variant="contained" color="primary">
                        Вихід
                    </Button>
                </Box>

            </Menu>
        </Box>
    );
};

export default Profile;
