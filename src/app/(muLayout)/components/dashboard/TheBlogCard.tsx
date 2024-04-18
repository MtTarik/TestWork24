import {Avatar, Box, Card, CardContent, CardMedia, IconButton, Stack, Typography,} from "@mui/material";
import {IconClock, IconMessageCircle2} from "@tabler/icons-react";

const BlogCard = () => {
    return (
        <Card variant="outlined" sx={{p: 1}}>
            <CardMedia
                sx={{height: 275}}
                image="/images/backgrounds/IMG_9095.JPG"
                title="green iguana"
            />
            <CardContent>
                <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                    <IconClock width={20}/>
                    <Typography variant="h6">19 Квітня 2024</Typography>
                </Stack>
                <Typography variant="h5">
                    Карпати
                </Typography>
                <Stack direction="row" spacing={1} mt={2}>
                    <Box
                        bgcolor="primary.light"
                        color="primary.main"
                        fontSize="12px"
                        px={1}
                        py="3px"
                    >
                        10 вподобань
                    </Box>
                    <Box
                        bgcolor="error.light"
                        color="error.main"
                        fontSize="12px"
                        px={1}
                        py="3px"
                    >
                        10 негативні оцінки
                    </Box>
                </Stack>
                <Stack
                    direction="row"
                    mt={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Stack direction="row" spacing={1}>
                        <Avatar alt="Remy Sharp" src="/images/users/1.jpg"/>
                        <Avatar alt="Travis Howard" src="/images/users/2.jpg"/>
                        <Avatar alt="Cindy Baker" src="/images/users/3.jpg"/>
                    </Stack>
                    <IconButton>
                        <IconMessageCircle2 width={20}/>
                    </IconButton>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default BlogCard;
