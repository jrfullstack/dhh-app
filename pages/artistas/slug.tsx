// import { FC, useState } from "react";
import * as React from "react";
import { MainLayout } from "@/components/layouts"
import { initialData } from "@/database/artistas"
import {
    AlbumOutlined,
    CollectionsOutlined,
    ContactPageOutlined,
    Diversity3Outlined,
    FavoriteBorderOutlined,
    LyricsOutlined,
    MusicVideoOutlined,
    OndemandVideoOutlined,
} from "@mui/icons-material";
import { Avatar, BottomNavigation, BottomNavigationAction, Box, Button, Divider, Grid, List, ListItem, Paper, Stack, Typography, styled } from "@mui/material";

const artista = initialData.artistas[2];

const tipos = artista.tipo.map((tipo) => (    
    <li key={tipo}>{tipo.charAt(0).toUpperCase() + tipo.slice(1)} </li>    
));

export default function slug()  {
	const [value, setValue] = React.useState(0);
	return (
        <MainLayout
            title={`${artista.interprete} | DHH`}
            pageDescription={`Seccion del artista ${artista.interprete}`}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Paper
                        elevation={4}
                        sx={{
                            paddingY: 3,
                            paddingX: 4,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>
                        <Box>
                            <Avatar
                                alt={artista.interprete}
                                src={`/img/artistas/${artista.imgPortada}`}
                                sx={{
                                    width: 150,
                                    height: 150,
                                    border: "2px solid #DE260E",
                                }}
                            />
                        </Box>
                        <Box>
                            <Typography
                                variant="h1"
                                component="h1"
                                color="initial">
                                {artista.interprete}
                            </Typography>
                            <List sx={{ textAlign: "center" }}>
                                {/* <ListItem> */}
                                {tipos}
                                {/* </ListItem> */}
                            </List>
                            <Box
                                sx={{
                                    mt: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "GrayText",
                                }}>
                                <FavoriteBorderOutlined
                                    fontSize="small"
                                    sx={{ pr: "3px" }}
                                />
                                {artista.seguidores} Seguidores
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Button
                                variant="contained"
                                sx={{ mb: 2, paddingX: 3 }}
                                color="primary"
                                startIcon={<ContactPageOutlined />}>
                                {/* <FavoriteOutlined /> */}
                                Biografia
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ mb: 2, paddingX: 3 }}
                                color="error"
                                startIcon={<FavoriteBorderOutlined />}>
                                {/* <FavoriteOutlined /> */}
                                Seguir
                            </Button>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Paper sx={{ paddingY: 3 }}>
                        <BottomNavigation
                            sx={{ backgroundColor: "transparent" }}
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}>
                            <BottomNavigationAction
                                label="Audios"
                                icon={<MusicVideoOutlined />}
                            />
                            <BottomNavigationAction
                                label="Albumes"
                                icon={<AlbumOutlined />}
                            />
                            <BottomNavigationAction
                                label="Videos"
                                icon={<OndemandVideoOutlined />}
                            />
                            <BottomNavigationAction
                                label="Liricas"
                                icon={<LyricsOutlined />}
                            />
                            <BottomNavigationAction
                                label="Galeria"
                                icon={<CollectionsOutlined />}
                            />
                            <BottomNavigationAction
                                label="Redes Sociales"
                                icon={<Diversity3Outlined />}
                            />
                            <BottomNavigationAction
                                label="Biografia"
                                icon={<ContactPageOutlined />}
                            />
                        </BottomNavigation>
                    </Paper>
                </Grid>
            </Grid>
        </MainLayout>
    );
}

