import {ReactNode} from "react";
import {Box, Card, CardContent, Stack, Typography} from "@mui/material";

type Props = {
    title?: string | ReactNode;
    subtitle?: string | ReactNode;
    action?: ReactNode;
    footer?: ReactNode;
    cardheading?: string | ReactNode;
    headtitle?: string | ReactNode;
    headsubtitle?: string | ReactNode;
    children?: ReactNode;
    middlecontent?: string | ReactNode;
};

const DashboardCard: React.FC<Props> = ({
                                            title,
                                            subtitle,
                                            children,
                                            action,
                                            footer,
                                            cardheading,
                                            headtitle,
                                            headsubtitle,
                                            middlecontent,
                                        }) => {
    return (
        <Card sx={{padding: 0}} elevation={9} variant={undefined}>
            {cardheading ? (
                <CardContent>
                    <Typography variant="h5">{headtitle}</Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {headsubtitle}
                    </Typography>
                </CardContent>
            ) : (
                <CardContent sx={{p: "30px"}}>
                    {title ? (
                        <Stack
                            direction="row"
                            spacing={2}
                            justifyContent="space-between"
                            alignItems={"center"}
                            mb={3}
                        >
                            <Box>
                                {title ? <Typography variant="h5">{title}</Typography> : ""}

                                {subtitle ? (
                                    <Typography variant="subtitle2" color="textSecondary">
                                        {subtitle}
                                    </Typography>
                                ) : (
                                    ""
                                )}
                            </Box>
                            {action}
                        </Stack>
                    ) : null}

                    {children}
                </CardContent>
            )}

            {middlecontent}
            {footer}
        </Card>
    );
};

export default DashboardCard;
