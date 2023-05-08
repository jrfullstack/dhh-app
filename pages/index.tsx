import { NextPage } from 'next';

import { Typography } from '@mui/material';

import { MainLayout } from '@/components/layouts';
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