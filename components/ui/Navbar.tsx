import NextLink from "next/link";
import { AppBar, Badge, Box, Button, Divider, IconButton, InputBase, Link, Paper, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NotificationsNoneOutlined, PermIdentityOutlined } from "@mui/icons-material";

export const Navbar = () => {
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
                    className="fadeIn"
                >
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
                    <IconButton
                        type="button"
                        sx={{ p: "5px" }}
                        aria-label="search"
                    >
                        <Badge badgeContent={2} color="secondary">
                        <NotificationsNoneOutlined />

                        </Badge>
                    </IconButton>

                    <IconButton
                        type="button"
                        sx={{ p: "5px" }}
                        aria-label="search">
                        <PermIdentityOutlined />
                    </IconButton>
                </Box>
            </Toolbar>
            <Divider />
            <Toolbar component="nav" variant="dense">
                <Box flex={1} />
                <Box sx={{ ml: 0.5 }}>
                    <NextLink href="/" passHref legacyBehavior>
                        <Link>
                            <Button>Home</Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/audios" passHref legacyBehavior>
                        <Link>
                            <Button>Audios</Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/videos" passHref legacyBehavior>
                        <Link>
                            <Button>videos</Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/artistas" passHref legacyBehavior>
                        <Link>
                            <Button>Artistas</Button>
                        </Link>
                    </NextLink>
                </Box>
                <Box flex={1} />
            </Toolbar>
        </AppBar>
    );
};
