import { NextPage } from "next";
import { Box, Typography } from "@mui/material";

import { SportsMartialArtsOutlined } from "@mui/icons-material";

import { MainLayout } from "@/components/layouts";
import { ArtistaList } from "@/components/artistas";
import { useArtists } from "@/hooks";
import { FullScreenLoading } from "@/components/ui";

const BreakDancersPage: NextPage = () => {
    const { artists, isLoading } = useArtists("/artists?tipo=break dance");

    return (
        <MainLayout
            title={"Break Dancers | DHH"}
            pageDescription={"Seccion de Break Dancers dominicanos"}>
            <Typography variant="h1" sx={{ mb: 1 }}>
                <Box
                    component="span"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                    <SportsMartialArtsOutlined
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
                    Break Dancer`s
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

export default BreakDancersPage;
