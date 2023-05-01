import { useState } from "react";
import { Box, Grid, Paper, Tab, Tabs } from "@mui/material";
// import Tab from "@mui/material/Tab";

import { MainLayout } from "@/components/layouts"
import { initialData } from "@/database/artists"
import { ArtistProfile } from "@/components/artistas/ArtistProfile";
import { ArtistNavi } from "@/components/artistas/ArtistNavi";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
    AlbumOutlined,
    CollectionsOutlined,
    ContactPageOutlined,
    Diversity3Outlined,
    LyricsOutlined,
    MusicVideoOutlined,
    OndemandVideoOutlined,
} from "@mui/icons-material";


const artista = initialData.artistas[1];

export default function Slug()  {
	const [value, setValue] = useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

	return (
        <MainLayout
            title={`${artista.interprete} | DHH`}
            pageDescription={`Seccion del artista ${artista.interprete}`}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <ArtistProfile artista={artista} />
                </Grid>

                <Grid item xs={12} sm={12}>
                    {/* <ArtistNavi /> */}
                    <TabContext value={value}>
                        <Paper sx={{ paddingY: 2 }}>
                            <Box>
                                <Tabs
                                    textColor="secondary"
                                    indicatorColor="secondary"
                                    variant="scrollable"
                                    scrollButtons
                                    allowScrollButtonsMobile
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="Iconos del menu de artista">
                                    <Tab
                                        icon={<MusicVideoOutlined />}
                                        label="Audios"
                                        value="1"
                                        sx={{
                                            minWidth: "fit-content",
                                            flex: 1,
                                        }}
                                    />
                                    <Tab
                                        icon={<AlbumOutlined />}
                                        label="Albumes"
                                        value="2"
                                        sx={{
                                            minWidth: "fit-content",
                                            flex: 1,
                                        }}
                                    />
                                    <Tab
                                        icon={<OndemandVideoOutlined />}
                                        label="Videos"
                                        value="3"
                                        sx={{
                                            minWidth: "fit-content",
                                            flex: 1,
                                        }}
                                    />
                                    <Tab
                                        icon={<LyricsOutlined />}
                                        label="Liricas"
                                        value="4"
                                        sx={{
                                            minWidth: "fit-content",
                                            flex: 1,
                                        }}
                                    />
                                    <Tab
                                        icon={<CollectionsOutlined />}
                                        label="Galeria"
                                        value="5"
                                        sx={{
                                            minWidth: "fit-content",
                                            flex: 1,
                                        }}
                                    />
                                    <Tab
                                        icon={<Diversity3Outlined />}
                                        label="Redes Sociales"
                                        value="6"
                                        sx={{
                                            minWidth: "fit-content",
                                            flex: 1,
                                        }}
                                    />
                                    <Tab
                                        icon={<ContactPageOutlined />}
                                        label="Biografia"
                                        value="7"
                                        sx={{
                                            minWidth: "fit-content",
                                            flex: 1,
                                        }}
                                    />
                                </Tabs>
                            </Box>
                        </Paper>
                        <TabPanel value="1">Item 1</TabPanel>
                        <TabPanel value="2">Item 2</TabPanel>
                        <TabPanel value="3">Item 3</TabPanel>
                        <TabPanel value="4">Item 4</TabPanel>
                        <TabPanel value="5">Item 5</TabPanel>
                        <TabPanel value="6">Item 6</TabPanel>
                        <TabPanel value="7">Item 7</TabPanel>
                    </TabContext>
                </Grid>
            </Grid>
        </MainLayout>
    );
}

