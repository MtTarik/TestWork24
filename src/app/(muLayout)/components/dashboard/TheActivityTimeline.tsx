import React from "react";
import {Avatar, Box, Button, Card, Grid, LinearProgress, MenuItem, Stack, Typography,} from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, {timelineItemClasses} from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {IconHeartFilled, IconMessage} from "@tabler/icons-react";
import CustomFormLabel from "../forms/theme-elements/CustomFormLabel";
import CustomTextField from "../forms/theme-elements/CustomTextField";
import CustomSelect from "../forms/theme-elements/CustomSelect";

const ActivityTimeline = () => {
    const [value, setValue] = React.useState("1");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const [number, setNumber] = React.useState("");

    const handleChange3 = (event: any) => {
        setNumber(event.target.value);
    };

    return (
        <>
            <Card variant="outlined" sx={{p: 0}}>
                <Box sx={{width: "100%", typography: "body1"}}>
                    <TabContext value={value}>
                        <Box>
                            <TabList
                                onChange={handleChange}
                                aria-label="tabs"
                                variant="fullWidth"
                            >
                                <Tab label="Активні" value="1"/>
                                <Tab label="Профіль" value="2"/>
                                <Tab label="Налаштування" value="3"/>
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Timeline
                                sx={{
                                    mt: -2,
                                    [`& .${timelineItemClasses.root}:before`]: {
                                        flex: 0,
                                        padding: 0,
                                    },
                                }}
                            >
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot
                                            sx={{
                                                backgroundColor: "transparent",
                                                margin: 0,
                                                boxShadow: "none",
                                            }}
                                        >
                                            <Avatar src="/images/backgrounds/IMG_9095.JPG" alt="user"/>
                                        </TimelineDot>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            <Typography variant="h6">TEST</Typography>
                                            <Typography variant="subtitle1" fontSize="12px">
                                                5 хвилин тому
                                            </Typography>
                                        </Stack>
                                        <Typography variant="subtitle1" fontSize="12px" mb={2}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Integer nec odio. Praesent libero. Sed cursus
                                            ante dapibus diam.
                                        </Typography>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={4} lg={3}>
                                                <Avatar
                                                    src="/images/backgrounds/IMG_9095.JPG"
                                                    alt="bg1"
                                                    sx={{borderRadius: 0, width: "100%", height: 104}}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={4} lg={3}>
                                                <Avatar
                                                    src="/images/backgrounds/IMG_9095.JPG"
                                                    alt="bg1"
                                                    sx={{borderRadius: 0, width: "100%", height: 104}}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={4} lg={3}>
                                                <Avatar
                                                    src="/images/backgrounds/IMG_9095.JPG"
                                                    alt="bg1"
                                                    sx={{borderRadius: 0, width: "100%", height: 104}}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={4} lg={3}>
                                                <Avatar
                                                    src="/images/backgrounds/IMG_9095.JPG"
                                                    alt="bg1"
                                                    sx={{borderRadius: 0, width: "100%", height: 104}}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Stack direction="row" spacing={1} mb={3}>
                                            <Button
                                                size="small"
                                                color="primary"
                                                startIcon={<IconMessage width={18}/>}
                                            >
                                                Коментарі
                                            </Button>
                                            <Button
                                                size="small"
                                                color="error"
                                                startIcon={<IconHeartFilled width={18}/>}
                                            >
                                                5 вподобань
                                            </Button>
                                        </Stack>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot
                                            sx={{
                                                backgroundColor: "transparent",
                                                margin: 0,
                                                boxShadow: "none",
                                            }}
                                        >
                                            <Avatar src="/images/backgrounds/IMG_9095.JPG" alt="user"/>
                                        </TimelineDot>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            <Typography variant="h6">TEST</Typography>
                                            <Typography variant="subtitle1" fontSize="12px">
                                                5 хвилин тому
                                            </Typography>
                                        </Stack>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={4} lg={3}>
                                                <Avatar
                                                    src="/images/backgrounds/IMG_9095.JPG"
                                                    alt="bg1"
                                                    sx={{borderRadius: 0, width: "100%", height: 100}}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={8} lg={9}>
                                                <Typography
                                                    variant="subtitle1"
                                                    fontSize="12px"
                                                    mb={2}
                                                    mt={1}
                                                >
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit. Integer nec odio.
                                                </Typography>
                                                <Button
                                                    size="small"
                                                    color="primary"
                                                    variant="contained"
                                                >
                                                    натискай скільки хочеш
                                                </Button>
                                            </Grid>
                                        </Grid>
                                        <Stack direction="row" spacing={1} mb={3}>
                                            <Button
                                                size="small"
                                                color="primary"
                                                startIcon={<IconMessage width={18}/>}
                                            >
                                                Коментарі
                                            </Button>
                                            <Button
                                                size="small"
                                                color="error"
                                                startIcon={<IconHeartFilled width={18}/>}
                                            >
                                                5 Вподобань
                                            </Button>
                                        </Stack>
                                    </TimelineContent>
                                </TimelineItem>

                            </Timeline>
                        </TabPanel>
                        <TabPanel value="2">
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="subtitle1" fontWeight="500">
                                        Повне Імя
                                    </Typography>
                                    <Typography variant="subtitle2" fontSize="12px">
                                        Тестове Тест
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="subtitle1" fontWeight="500">
                                        Телефон
                                    </Typography>
                                    <Typography variant="subtitle2" fontSize="12px">
                                        0940404044
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="subtitle1" fontWeight="500">
                                        Email
                                    </Typography>
                                    <Typography variant="subtitle2" fontSize="12px">
                                        test@test.com
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="subtitle1" fontWeight="500">
                                        Країна
                                    </Typography>
                                    <Typography variant="subtitle2" fontSize="12px">
                                        Україна
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="subtitle2" fontSize="12px" mt={4}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur, atque
                                culpa cum facere obcaecati pariatur unde. Aliquid cum deserunt eaque eum inventore
                                necessitatibus nostrum repellendus sed sit voluptates! Est.
                            </Typography>
                            <Typography variant="subtitle2" fontSize="12px" mt={2}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur, atque
                                culpa cum facere obcaecati pariatur unde. Aliquid cum deserunt eaque eum inventore
                                necessitatibus nostrum repellendus sed sit voluptates! Est.
                            </Typography>
                            <Typography variant="subtitle2" fontSize="12px" mt={2}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur, atque
                                culpa cum facere obcaecati pariatur unde. Aliquid cum deserunt eaque eum inventore
                                necessitatibus nostrum repellendus sed sit voluptates! Est.
                            </Typography>

                            <Typography variant="h6" mt={5} mb={4}>
                            </Typography>

                            <Stack spacing={3}>
                                <Box>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        spacing={1}
                                    >
                                        <Typography variant="subtitle1" mb={1}>
                                            Статистика
                                        </Typography>
                                        <Typography variant="subtitle1">80%</Typography>
                                    </Stack>
                                    <LinearProgress
                                        color="primary"
                                        variant="determinate"
                                        value={80}
                                    />
                                </Box>
                                <Box>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        spacing={1}
                                    >
                                        <Typography variant="subtitle1" mb={1}>
                                            Статистика
                                        </Typography>
                                        <Typography variant="subtitle1">50%</Typography>
                                    </Stack>
                                    <LinearProgress
                                        color="secondary"
                                        variant="determinate"
                                        value={50}
                                    />
                                </Box>
                                <Box>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        spacing={1}
                                    >
                                        <Typography variant="subtitle1" mb={1}>
                                            Статистика
                                        </Typography>
                                        <Typography variant="subtitle1">45%</Typography>
                                    </Stack>
                                    <LinearProgress
                                        color="error"
                                        variant="determinate"
                                        value={45}
                                    />
                                </Box>
                                <Box>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        spacing={1}
                                    >
                                        <Typography variant="subtitle1" mb={1}>
                                            Статистика
                                        </Typography>
                                        <Typography variant="subtitle1">15%</Typography>
                                    </Stack>
                                    <LinearProgress
                                        color="info"
                                        variant="determinate"
                                        value={15}
                                    />
                                </Box>
                            </Stack>
                        </TabPanel>
                        <TabPanel value="3">
                            <form>
                                <CustomFormLabel
                                    sx={{
                                        mt: 0,
                                    }}
                                    htmlFor="text-name"
                                >
                                    Імя
                                </CustomFormLabel>
                                <CustomTextField id="text-name" variant="outlined" fullWidth/>
                                <CustomFormLabel htmlFor="text-email">Email</CustomFormLabel>
                                <CustomTextField id="text-email" variant="outlined" fullWidth/>
                                <CustomFormLabel htmlFor="text-password">
                                    Пароль
                                </CustomFormLabel>
                                <CustomTextField
                                    id="text-password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                />
                                <CustomFormLabel htmlFor="text-address">
                                    Адреса
                                </CustomFormLabel>
                                <CustomTextField
                                    id="text-address"
                                    variant="outlined"
                                    fullWidth
                                />
                                <CustomFormLabel htmlFor="text-address">Select</CustomFormLabel>
                                <CustomSelect
                                    fullWidth
                                    id="standard-select-number"
                                    variant="outlined"
                                    value={1}
                                    onChange={handleChange3}
                                    sx={{
                                        mb: 2,
                                    }}
                                >
                                    <MenuItem value={1}>Option 1</MenuItem>
                                    <MenuItem value={2}>Option 2</MenuItem>
                                    <MenuItem value={3}>Option 3</MenuItem>
                                </CustomSelect>

                                <Button variant="contained" color="primary">
                                    Відправити
                                </Button>
                            </form>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Card>
        </>
    );
};

export default ActivityTimeline;
