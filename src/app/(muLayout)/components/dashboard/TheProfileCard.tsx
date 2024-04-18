import {Avatar, Box, Button, Card, CardContent, CardMedia, Stack, Typography,} from "@mui/material";

const ProfileCard = () => {
    return (
        <Card variant="outlined" sx={{p: 1}}>
            <CardMedia
                sx={{height: 225}}
                image="/images/backgrounds/IMG_9095.JPG"
                title="green iguana"
            />
            <CardContent>
                <Box textAlign="center" mt="-80px">
                    <Avatar
                        src="/images/users/2.JPG"
                        sx={{width: 100, height: 100, m: "0 auto"}}
                    />
                    <Typography variant="h5" mt={4}>
                        Тарас Скороход
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" mb={2}>
                    </Typography>
                    <Button variant="contained" color="primary">
                        Слідуйте
                    </Button>
                </Box>
                <Stack
                    direction="row"
                    spacing={1}
                    mt={7}
                    justifyContent="space-between"
                >
                    <Box textAlign="center">
                        <Typography variant="h5">20</Typography>
                        <Typography variant="subtitle2" fontSize="12px">
                            статті
                        </Typography>
                    </Box>
                    <Box textAlign="center">
                        <Typography variant="h5">23</Typography>
                        <Typography variant="subtitle2" fontSize="12px">
                            Послідовники
                        </Typography>
                    </Box>
                    <Box textAlign="center">
                        <Typography variant="h5">6</Typography>
                        <Typography variant="subtitle2" fontSize="12px">
                            Слідую
                        </Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default ProfileCard;
