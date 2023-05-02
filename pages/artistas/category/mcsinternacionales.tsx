import { NextPage } from "next";
import { Box, Typography } from "@mui/material";

import { InterpreterModeOutlined } from "@mui/icons-material";

import { MainLayout } from "@/components/layouts";
import { ArtistaList } from "@/components/artistas";
import { useArtists } from "@/hooks";
import { FullScreenLoading } from "@/components/ui";

const ArtistasInternacionalesPages: NextPage = () => {
    const { artists, isLoading } = useArtists(
        "/artists?tipo=artista internacional"
    );

    return (
        <MainLayout
            title={"Artistas Internacionales | DHH"}
            pageDescription={
                "Seccion de Artistas o MCs Internacionales que han colaborado con dominicanos"
            }>
            <Typography variant="h1" sx={{ mb: 1 }}>
                <Box
                    component="span"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                    <InterpreterModeOutlined
                        fontSize="large"
                        sx={{
                            mr: 2,
                            backgroundColor: "#DE260E",
                            border: "2px solid gray",
                            borderRadius: "8px",
                            padding: "3px",
                            color: "white",
                        }}
                    />
                    Colaboradores Internacionales
                </Box>
            </Typography>

            {isLoading ? (
                <FullScreenLoading />
            ) : (
                <ArtistaList artists={artists} />
            )}
        </MainLayout>
    );
};

export default ArtistasInternacionalesPages;
