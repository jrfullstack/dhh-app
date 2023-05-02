import { NextPage } from "next";
import { Box, Typography } from "@mui/material";

import { TuneOutlined } from "@mui/icons-material";

import { MainLayout } from "@/components/layouts";
import { ArtistaList } from "@/components/artistas";
import { useArtists } from "@/hooks";
import { FullScreenLoading } from "@/components/ui";

const ProductoresPage: NextPage = () => {
    const { artists, isLoading } = useArtists("/artists?tipo=productores");

    return (
        <MainLayout
            title={"Artistas | DHH"}
            pageDescription={"Seccion de Productores dominicanos"}>
            <Typography variant="h1" sx={{ mb: 1 }}>
                <Box
                    component="span"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                    <TuneOutlined
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
                    Productores
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

export default ProductoresPage;
