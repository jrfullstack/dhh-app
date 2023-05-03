import { useState } from "react";
import { NextPage, GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { Box, Grid, Paper, Tab, Tabs } from "@mui/material";

import { TabContext, TabPanel } from "@mui/lab";
import {
    AlbumOutlined,
    CollectionsOutlined,
    ContactPageOutlined,
    Diversity3Outlined,
    LyricsOutlined,
    MusicVideoOutlined,
    OndemandVideoOutlined,
} from "@mui/icons-material";

import { MainLayout } from "@/components/layouts"
import { ArtistProfile } from "@/components/artistas/ArtistProfile";

import { dbArtists } from "@/database";
import { IArtist } from "@/interfaces";



interface Props {
    artista: IArtist
}

const ArtistPage:NextPage<Props> = ({artista}) => {

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

// Se generara desde el servidor - usar lo menos posible

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

// export const getServerSideProps: GetServerSideProps = async ({params}) => {

//     const { slug = '' } = params as {slug: string};

//     const artista = await dbArtists.getArtistBySlug(slug);

//     if(!artista){
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false
//             }
//         }
//     }

//     return {
//         props: {
//             artista
//         }
//     }
// }

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const artistSlugs = await  dbArtists.getAllArtistsSlugs();


    return {
        paths: artistSlugs.map(({slug}) => ({
            params: {
                slug
            }
        })),        
        fallback: "blocking"
    }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({params}) => {

    const { slug = '' } = params as {slug: string};
    const artista = await dbArtists.getArtistBySlug(slug);

    if(!artista){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            artista
        },
        revalidate: 60 * 60 * 24
    };
}

export default ArtistPage;