import { Inter } from 'next/font/google';
import { MainLayout } from '@/components/layouts';
import { Typography } from '@mui/material';
// import '../styles/global.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
        <MainLayout
            title={"DominicanHipHop.Com"}
            pageDescription={"Pagina Oficial del Hip Hop Dominicano"}>
            <Typography variant="h1" component={"h1"}>
                DominicanHipHop
            </Typography>
            <Typography variant="h2" sx={{mb: 1}}>
                La Primera
            </Typography>
        </MainLayout>
    );
}
