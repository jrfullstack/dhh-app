import { useContext, useState } from "react";
import NextLink from "next/link";
import { useRouter } from 'next/router';
import { AppBar, Badge, Box, Button, IconButton, InputBase, Link, Menu, MenuItem, Paper, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircleOutlined, AdjustOutlined, InterpreterModeOutlined, MicNoneOutlined, NotificationsNoneOutlined, SportsMartialArtsOutlined, TuneOutlined, VrpanoOutlined } from "@mui/icons-material";
import ThemeUpdater from "../themeMode/ThemeUpdater";
import { DropDownArtistas } from "./DropDownArtistas";
import { UiContext } from "@/context";




export const Navbar = () => {

    const { asPath } = useRouter();
    const {toggleSideMenu} = useContext(UiContext);
    


    return (
        <AppBar>
            <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
                <NextLink href="/" passHref legacyBehavior>
                    <Link display="flex" alignItems="center">
                        <Typography variant="h6">Dominican |</Typography>
                        <Typography sx={{ ml: 0.5 }}>Hip Hop</Typography>
                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box
                    // sx={{
                    //     display: isSearchVisible
                    //         ? "none"
                    //         : { xs: "none", sm: "block" },
                    // }}
                    className="fadeIn">
                    <Paper
                        component="form"
                        sx={{
                            p: "1px 4px",
                            display: "flex",
                            alignItems: "center",
                            width: 400,
                        }}>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Buscador"
                            // inputProps={{ "aria-label": "search google maps" }}
                        />
                        <IconButton
                            type="button"
                            sx={{ p: "5px" }}
                            aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Box>
                <Box flex={1} />
                <Box>
                    {/* <Button aria-label="search">
                        <Badge badgeContent={2} color="secondary">
                            <NotificationsNoneOutlined />
                        </Badge>
                    </Button> */}

                    <Button aria-label="Account">
                        <AccountCircleOutlined />
                    </Button>
                    <ThemeUpdater />
                    <Button onClick={toggleSideMenu}>Menu</Button>
                </Box>
            </Toolbar>
            {/* <Divider /> */}
            <Toolbar component="nav" variant="dense" sx={{ boxShadow: 1 }}>
                <Box flex={1} />
                <Box sx={{ ml: 0.5 }}>
                    <NextLink href="/" passHref legacyBehavior>
                        <Link>
                            <Button
                                size="medium"
                                color={asPath === "/" ? "primary" : "info"}>
                                Home
                            </Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/audios" passHref legacyBehavior>
                        <Link>
                            <Button
                                size="medium"
                                color={
                                    asPath === "/category/audios"
                                        ? "primary"
                                        : "info"
                                }>
                                Audios
                            </Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/videos" passHref legacyBehavior>
                        <Link>
                            <Button
                                size="medium"
                                color={
                                    asPath === "/category/videos"
                                        ? "primary"
                                        : "info"
                                }>
                                Videos
                            </Button>
                        </Link>
                    </NextLink>

                    {/* Menu desplegable de artistas */}
                    <DropDownArtistas />
                </Box>
                <Box flex={1} />
            </Toolbar>
            {/* <Divider /> */}
        </AppBar>
    );
};
