import { Inter } from 'next/font/google';
import { MainLayout } from '@/components/layouts';
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import { initialData } from '@/database/artistas';
import { NextPage } from 'next';
// import '../styles/global.css';

const inter = Inter({ subsets: ['latin'] })

 

const Home: NextPage = () => {
	return (
        <MainLayout
            title={"DominicanHipHop.Com"}
            pageDescription={"Pagina Oficial del Hip Hop Dominicano"}>
            <Typography variant="h1" component={"h1"}>
                DominicanHipHop
            </Typography>
            <Typography variant="h2" sx={{ mb: 1 }}>
                La Primera
            </Typography>

            <Grid container spacing={4}>
                {initialData.artistas.map((artista) => (
                    <Grid item xs={6} sm={4} key={artista.slug}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={`img/artistas/${artista.imgPortada}`}
                                    // alt={artista.artistaGrupo}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </MainLayout>
    );
}

export default Home;