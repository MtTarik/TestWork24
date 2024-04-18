import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

const contacts = [
    {
        img: "/images/users/1.png",
        title: "TEST",
        subtext: "info@oliver.com",
        status: "primary.main",
    },
    {
        img: "/images/users/1.png",
        title: "TEST",
        subtext: "test@test.com",
        status: "warning.main",
    },
    {
        img: "/images/users/1.png",
        title: "TEST",
        subtext: "test@test.com",
        status: "warning.main",
    },
    {
        img: "/images/users/1.png",
        title: "TEST",
        subtext: "test@test.com",
        status: "warning.main",
    },
    {
        img: "/images/users/1.png",
        title: "TEST",
        subtext: "info@oliver.com",
        status: "primary.main",
    },
    {
        img: "/images/users/1.png",
        title: "TEST",
        subtext: "test@test.com",
        status: "warning.main",
    },

];

const MyContacts = () => {
    return (
        <>
            <Card variant="outlined" sx={{p: 0}}>
                <Box
                    px={3}
                    py={2}
                    bgcolor="primary.main"
                    color="white"
                    borderRadius="0 !important"
                    mb="-15px"
                >
                    <Typography variant="h5">Мої контакти</Typography>
                    <Typography variant="subtitle1"></Typography>
                </Box>
                <Box pt={0}>
                    <List>
                        {contacts.map((contact, i) => (
                            <ListItem key={i}>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Badge
                                            variant="dot"
                                            sx={{
                                                ".MuiBadge-badge": {
                                                    backgroundColor: contact.status,
                                                },
                                            }}
                                        >
                                            <Avatar src={contact.img} alt="1"/>
                                        </Badge>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={contact.title}
                                        primaryTypographyProps={{
                                            fontSize: "12px",
                                            fontWeight: 500,
                                        }}
                                        secondary={contact.subtext}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Card>
        </>
    );
};

export default MyContacts;
