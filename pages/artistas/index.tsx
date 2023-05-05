
import { Groups2Rounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useArtists } from '@/hooks';
import { MainLayout } from '@/components/layouts';
import { ArtistaList } from '@/components/artistas';
import { FullScreenLoading } from '@/components/ui';

const Index = () => {

    const { artists, isLoading } = useArtists("/artists");
    
    return (
        <MainLayout
            title={"Artistas | DHH"}
            pageDescription={"Seccion de artistas"}>
            <Typography variant="h1" sx={{ mb: 1 }}>
                <Box
                    component="span"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                    <Groups2Rounded
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
                    Todos los Artistas
                </Box>
            </Typography>
            
            {isLoading ? (
                <FullScreenLoading />
            ) : (
                <ArtistaList artists={artists} />
            )}
        </MainLayout>
    );
}

export default Index