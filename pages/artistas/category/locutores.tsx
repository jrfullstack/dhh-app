import { NextPage } from "next";
import { Box, Typography } from "@mui/material";

import { CampaignOutlined } from "@mui/icons-material";

import { MainLayout } from "@/components/layouts";
import { ArtistaList } from "@/components/artistas";
import { useArtists } from "@/hooks";
import { FullScreenLoading } from "@/components/ui";

const LocutoresPage: NextPage = () => {
    const { artists, isLoading } = useArtists("/artists?tipo=locutor");

    return (
        <MainLayout
            title={"Locutores | DHH"}
            pageDescription={
                "Seccion de Locutores que apoyan el Hip Hop dominicanos"
            }>
            <Typography variant="h1" sx={{ mb: 1 }}>
                <Box
                    component="span"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                    <CampaignOutlined
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
                    Locutores y/o Presenadores
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

export default LocutoresPage;
