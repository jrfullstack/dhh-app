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

    const router = useRouter();
    const { asPath } = useRouter();
    const {toggleSideMenu} = useContext(UiContext);
    const [searchTermMain, setSearchTermMain] = useState('');

    const onSearchTerm = () => {
        if(searchTermMain.trim().length === 0) return;
        router.push(`/search/${searchTermMain}`);

    }

    const navigateTo = (url:string) => {
        // toggleSideMenu();
        router.push(url);
    }
    // console.log(searchTermMain)
    


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
                    // className="fadeIn"
                >
                    <Paper                       
                        sx={{
                            p: "1px 4px",
                            display: "flex",
                            alignItems: "center",
                            width: 400,
                        }}>
                        <InputBase
                            value={searchTermMain}
                            onChange={(e) => setSearchTermMain(e.target.value)}
                            onKeyUp={(e) => e.key === 'Enter' && onSearchTerm()}
                            type="text"
                            placeholder="Buscar..."
                            inputProps={{ "aria-label": "search" }}
                            sx={{ ml: 1, flex: 1 }}                            
                        />
                        <IconButton
                            onClick={onSearchTerm}
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
                    <NextLink href="/audios" passHref legacyBehavior>
                        <Link>
                            <Button
                                size="medium"
                                color={
                                    asPath === "/audios"
                                        ? "primary"
                                        : "info"
                                }>
                                Audios
                            </Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/videos" passHref legacyBehavior>
                        <Link>
                            <Button
                                size="medium"
                                color={
                                    asPath === "/videos"
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
