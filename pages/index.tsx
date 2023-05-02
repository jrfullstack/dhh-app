import { NextPage } from 'next';
import { Inter } from 'next/font/google';

import { Typography } from '@mui/material';

import { MainLayout } from '@/components/layouts';
// import { initialData } from '@/database/artists';
import { ArtistaList } from '@/components/artistas';
import { useArtists } from '@/hooks';
import { FullScreenLoading } from '@/components/ui';


const HomePage: NextPage = () => {

    
    const {artists, isLoading} = useArtists('/artists')

	return (
        <MainLayout
            title={"DominicanHipHop.Com"}
            pageDescription={"Pagina Oficial del Hip Hop Dominicano"}
            
        >
            {/* <Typography>
                DominicanHipHop
            </Typography> */}
            <Typography variant="h1" sx={{ mb: 1 }}>
                Todos los Artistas
            </Typography>

            {
                isLoading
                    ? <FullScreenLoading/>
                    : <ArtistaList artists={artists}/>
            }

            
        </MainLayout>
    );
}

export default HomePage;