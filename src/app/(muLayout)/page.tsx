"use client"
import {Box, Grid} from '@mui/material';
import PageContainer from '@/app/(muLayout)/components/container/PageContainer';
import SalesOverview from '@/app/(muLayout)/components/dashboard/TheSalesOverview';
import Blogcard from '@/app/(muLayout)/components/dashboard/TheBlogCard';
import ProfileCard from "@/app/(muLayout)/components/dashboard/TheProfileCard";
import MyContacts from "@/app/(muLayout)/components/dashboard/TheMyContacts";
import ActivityTimeline from "@/app/(muLayout)/components/dashboard/TheActivityTimeline";

const Dashboard = () => {
    return (
        <PageContainer title="TEST" description="TEST">
            <Box mt={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={8}>
                        <ProfileCard/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Blogcard/>

                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <ActivityTimeline/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Grid spacing={2}>
                            <Grid item xs={12}>
                                <MyContacts/>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    )
}

export default Dashboard;
