import { NextPage } from 'next';
import { Inter } from 'next/font/google';

import { Typography } from '@mui/material';

import { MainLayout } from '@/components/layouts';
import { initialData } from '@/database/artistas';
import { ArtistaList } from '@/components/artistas';


const inter = Inter({ subsets: ['latin'] })

 

const Home: NextPage = () => {
	return (
        <MainLayout
            title={"DominicanHipHop.Com"}
            pageDescription={"Pagina Oficial del Hip Hop Dominicano"}>
            {/* <Typography>
                DominicanHipHop
            </Typography> */}
            <Typography variant="h1" sx={{ mb: 1 }}>
                Todos los Artistas
            </Typography>

            <ArtistaList artistas={initialData.artistas as any}/>
        </MainLayout>
    );
}

export default Home;