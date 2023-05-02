import { NextPage } from "next";
import { Box, Typography } from "@mui/material";

import { AdjustOutlined } from "@mui/icons-material";

import { MainLayout } from "@/components/layouts";
import { ArtistaList } from "@/components/artistas";
import { useArtists } from "@/hooks";
import { FullScreenLoading } from "@/components/ui";

const DeejayPage: NextPage = () => {
    const { artists, isLoading } = useArtists("/artists?tipo=deejay");

    return (
        <MainLayout
            title={"Grafiteros | DHH"}
            pageDescription={"Seccion de Deejay`s dominicanos"}>
            <Typography variant="h1" sx={{ mb: 1 }}>
                <Box
                    component="span"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                    <AdjustOutlined
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
                    Deejay`s
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

export default DeejayPage;
