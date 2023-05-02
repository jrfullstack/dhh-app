import { NextPage } from "next";
import { Box, Typography } from "@mui/material";

import { MicNoneOutlined } from "@mui/icons-material";

import { MainLayout } from "@/components/layouts";
import { ArtistaList } from "@/components/artistas";
import { useArtists } from "@/hooks";
import { FullScreenLoading } from "@/components/ui";

const McsPage: NextPage = () => {
    const { artists, isLoading } = useArtists("/artists?tipo=artista");

    return (
        <MainLayout
            title={"Artistas | DHH"}
            pageDescription={"Seccion de Artistas o MCs dominicanos"}>
            <Typography variant="h1" sx={{ mb: 1 }}>
                <Box
                    component="span"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                    <MicNoneOutlined
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
                    Artistas y/o MC`s
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

export default McsPage;
