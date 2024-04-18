import {Avatar, Box, Typography,} from "@mui/material";

export const SidebarProfile = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url('/images/backgrounds/IMG_9095.JPG')`,
                borderRadius: "0 !important",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
            }}
        >
            <>
                <Box px="12px" py="28px" borderRadius="0 !important">
                    <Avatar
                        alt="Remy Sharp"
                        src={"/images/users/2.JPG"}
                        sx={{height: 50, width: 50}}
                    />
                </Box>

                <Box
                    display="flex"
                    alignItems="center"
                    sx={{
                        py: 1,
                        px: 2,
                        bgcolor: "rgba(0,0,0,0.5)",
                        borderRadius: "0 !important",
                    }}
                >
                    <Typography
                        variant="h6"
                        fontSize="13px"
                        color="white"
                        sx={{
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                        }}
                    >
                        Тарас Скороход
                    </Typography>
                </Box>
            </>
        </Box>
    );
};
