import {Box, Drawer, useMediaQuery} from "@mui/material";
import SidebarItems from "./SidebarItems";
import {SidebarProfile} from "./SidebarProfile";

interface ItemType {
    isMobileSidebarOpen: boolean;
    onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
    isSidebarOpen: boolean;
}

const Sidebar = ({
                     isMobileSidebarOpen,
                     onSidebarClose,
                     isSidebarOpen,
                 }: ItemType) => {
    const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

    const sidebarWidth = "270px";

    if (lgUp) {
        return (
            <Box
                sx={{
                    width: sidebarWidth,
                    flexShrink: 0,
                    zIndex: 100,
                }}
            >
                <Drawer
                    anchor="left"
                    open={isSidebarOpen}
                    variant="permanent"
                    PaperProps={{
                        sx: {
                            width: sidebarWidth,
                            boxSizing: "border-box",
                            border: "0",
                            top: "64px",
                            boxShadow: "1px 0 20px #00000014",
                        },
                    }}
                >
                    <Box
                        sx={{
                            height: "100%",
                        }}
                    >
                        <Box
                            sx={{
                                height: "calc(100vh - 70px)",
                                overflow: "auto",
                            }}
                        >
                            <SidebarProfile/>
                            <Box mt={3}>
                                <SidebarItems/>
                            </Box>
                        </Box>
                    </Box>
                </Drawer>
            </Box>
        );
    }

    return (
        <Drawer
            anchor="left"
            open={isMobileSidebarOpen}
            onClose={onSidebarClose}
            variant="temporary"
            PaperProps={{
                sx: {
                    width: sidebarWidth,
                    boxShadow: (theme) => theme.shadows[8],
                },
            }}
        >
            <SidebarProfile/>
            <Box mt={3}>
                <SidebarItems/>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
