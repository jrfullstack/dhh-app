import { NextPage } from "next";
import { Box, Typography } from "@mui/material";

import { VrpanoOutlined } from "@mui/icons-material";

import { MainLayout } from "@/components/layouts";
import { ArtistaList } from "@/components/artistas";
import { useArtists } from "@/hooks";
import { FullScreenLoading } from "@/components/ui";

const GrafiterosPage: NextPage = () => {
    const { artists, isLoading } = useArtists(
        "/artists?tipo=graffiti"
    );

    return (
        <MainLayout
            title={"Grafiteros | DHH"}
            pageDescription={"Seccion de Grafiteros dominicanos"}>
            <Typography variant="h1" sx={{ mb: 1 }}>
                <Box
                    component="span"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                    <VrpanoOutlined
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
                    Grafiteros
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

export default GrafiterosPage;
